import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { gameIdOfTask } from '../data/games'

/**
 *  Store global
 *  ─────────────
 *  • Modo local (por defecto): varias "partidas/perfiles" en localStorage.
 *  • Modo cuenta (opcional): si hay Supabase configurado y el usuario
 *    inicia sesión, cada check se sincroniza con la tabla `progress`
 *    (user_id, game_id, task_id, completed) y al entrar se fusiona
 *    la nube con la partida activa local (unión: nada se pierde).
 */
const LS_KEY = 'dw-guide-hub-v1'
const StoreCtx = createContext(null)
export const useStore = () => useContext(StoreCtx)

const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36)
const defaultState = () => {
  const p = { id: uid(), name: 'Mi primera partida', createdAt: new Date().toISOString(), checked: {} }
  return { profiles: [p], activeProfileId: p.id }
}
const loadLocal = () => {
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw)
    if (!parsed.profiles?.length) return defaultState()
    return parsed
  } catch { return defaultState() }
}

export function StoreProvider({ children }) {
  const [local, setLocal] = useState(loadLocal)
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(isSupabaseConfigured)
  const [syncStatus, setSyncStatus] = useState(isSupabaseConfigured ? 'local' : 'sin-configurar') // local | sincronizando | sincronizado | error | sin-configurar
  const [toast, setToast] = useState(null)
  const syncTimer = useRef(null)
  const pendingSync = useRef(new Map()) // taskId -> completed

  const showToast = useCallback((msg) => {
    setToast(msg)
    window.clearTimeout(showToast._t)
    showToast._t = window.setTimeout(() => setToast(null), 2600)
  }, [])

  // Persistencia local
  useEffect(() => {
    try { localStorage.setItem(LS_KEY, JSON.stringify(local)) } catch { /* almacenamiento lleno */ }
  }, [local])

  const activeProfile = useMemo(
    () => local.profiles.find((p) => p.id === local.activeProfileId) || local.profiles[0],
    [local],
  )
  const checked = activeProfile?.checked || {}

  // ── Supabase Auth ────────────────────────────────────────────────────
  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setAuthLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
      setUser(session?.user ?? null)
      setAuthLoading(false)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  // Fusión nube → local al iniciar sesión (unión de checks)
  useEffect(() => {
    if (!supabase || !user) return
    let cancelled = false
    ;(async () => {
      setSyncStatus('sincronizando')
      const { data, error } = await supabase.from('progress').select('task_id, completed').eq('user_id', user.id)
      if (cancelled) return
      if (error) { setSyncStatus('error'); console.error(error); return }
      const cloud = {}
      data.forEach((r) => { if (r.completed) cloud[r.task_id] = true })
      setLocal((prev) => ({
        ...prev,
        profiles: prev.profiles.map((p) =>
          p.id === prev.activeProfileId ? { ...p, checked: { ...cloud, ...p.checked, ...cloud } } : p),
      }))
      setSyncStatus('sincronizado')
    })()
    return () => { cancelled = true }
  }, [user])

  const flushSync = useCallback(async () => {
    if (!supabase || !user || pendingSync.current.size === 0) return
    const rows = [...pendingSync.current.entries()].map(([task_id, completed]) => ({
      user_id: user.id, game_id: gameIdOfTask(task_id), task_id, completed,
    }))
    pendingSync.current.clear()
    setSyncStatus('sincronizando')
    const { error } = await supabase.from('progress').upsert(rows, { onConflict: 'user_id,game_id,task_id' })
    setSyncStatus(error ? 'error' : 'sincronizado')
    if (error) console.error(error)
  }, [user])

  const queueSync = useCallback((taskId, completed) => {
    if (!supabase || !user) return
    pendingSync.current.set(taskId, completed)
    window.clearTimeout(syncTimer.current)
    syncTimer.current = window.setTimeout(flushSync, 600)
  }, [user, flushSync])

  // Subir TODA la partida local actual a la nube (botón manual)
  const syncAllToCloud = useCallback(async () => {
    if (!supabase || !user) return false
    const rows = Object.keys(checked).map((task_id) => ({
      user_id: user.id, game_id: gameIdOfTask(task_id), task_id, completed: true,
    }))
    setSyncStatus('sincronizando')
    if (rows.length) {
      const { error } = await supabase.from('progress').upsert(rows, { onConflict: 'user_id,game_id,task_id' })
      if (error) { setSyncStatus('error'); return false }
    }
    setSyncStatus('sincronizado')
    return true
  }, [user, checked])

  // ── Acciones de progreso ─────────────────────────────────────────────
  const toggleTask = useCallback((taskId) => {
    setLocal((prev) => ({
      ...prev,
      profiles: prev.profiles.map((p) => {
        if (p.id !== prev.activeProfileId) return p
        const next = { ...p.checked }
        if (next[taskId]) delete next[taskId]; else next[taskId] = true
        return { ...p, checked: next }
      }),
    }))
    queueSync(taskId, !checked[taskId])
  }, [checked, queueSync])

  const setManyTasks = useCallback((taskIds, value) => {
    setLocal((prev) => ({
      ...prev,
      profiles: prev.profiles.map((p) => {
        if (p.id !== prev.activeProfileId) return p
        const next = { ...p.checked }
        taskIds.forEach((id) => { if (value) next[id] = true; else delete next[id] })
        return { ...p, checked: next }
      }),
    }))
    taskIds.forEach((id) => queueSync(id, value))
  }, [queueSync])

  const resetGame = useCallback((game) => {
    setManyTasks(game.sections.flatMap((s) => s.tasks.map((tk) => tk.id)), false)
  }, [setManyTasks])

  // ── Perfiles locales ─────────────────────────────────────────────────
  const addProfile = useCallback((name) => {
    const p = { id: uid(), name: (name || 'Nueva partida').trim() || 'Nueva partida', createdAt: new Date().toISOString(), checked: {} }
    setLocal((prev) => ({ profiles: [...prev.profiles, p], activeProfileId: p.id }))
    return p
  }, [])
  const renameProfile = useCallback((id, name) => {
    setLocal((prev) => ({ ...prev, profiles: prev.profiles.map((p) => (p.id === id ? { ...p, name } : p)) }))
  }, [])
  const deleteProfile = useCallback((id) => {
    setLocal((prev) => {
      const left = prev.profiles.filter((p) => p.id !== id)
      if (!left.length) return defaultState()
      return { profiles: left, activeProfileId: prev.activeProfileId === id ? left[0].id : prev.activeProfileId }
    })
  }, [])
  const selectProfile = useCallback((id) => setLocal((prev) => ({ ...prev, activeProfileId: id })), [])

  // ── Exportar / importar ──────────────────────────────────────────────
  const exportProfile = useCallback(() => {
    const blob = new Blob([JSON.stringify({ app: 'dw-guide-hub', version: 1, profile: activeProfile }, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `digimon-world-progress-${(activeProfile?.name || 'partida').replace(/\s+/g, '-').toLowerCase()}.json`
    a.click()
    URL.revokeObjectURL(a.href)
  }, [activeProfile])

  const importProfile = useCallback(async (file) => {
    try {
      const data = JSON.parse(await file.text())
      const p = data.profile || data
      if (!p || typeof p.checked !== 'object') throw new Error('Formato no válido')
      const np = { id: uid(), name: (p.name || 'Partida importada') + ' (importada)', createdAt: new Date().toISOString(), checked: p.checked }
      setLocal((prev) => ({ profiles: [...prev.profiles, np], activeProfileId: np.id }))
      return true
    } catch { return false }
  }, [])

  // ── Auth actions ─────────────────────────────────────────────────────
  const signIn = useCallback(async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }, [])
  const signUp = useCallback(async (email, password, displayName) => {
    const { data, error } = await supabase.auth.signUp({
      email, password, options: { data: { display_name: displayName || undefined } },
    })
    if (error) throw error
    return data
  }, [])
  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
    setSyncStatus('local')
  }, [])

  const value = {
    // estado
    profiles: local.profiles, activeProfile, activeProfileId: local.activeProfileId, checked,
    user, authLoading, syncStatus, toast, isSupabaseConfigured,
    // progreso
    toggleTask, setManyTasks, resetGame,
    // perfiles
    addProfile, renameProfile, deleteProfile, selectProfile,
    exportProfile, importProfile,
    // auth / nube
    signIn, signUp, signOut, syncAllToCloud,
    showToast,
  }
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>
}
