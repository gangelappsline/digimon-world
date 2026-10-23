import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/AppStore'
import { GAMES, allTasks, totalTasks } from '../data/games'
import { ACCENTS, ProgressBar } from '../components/ui'
import AuthForm from '../components/AuthForm'

export default function Profile() {
  const s = useStore()
  const { profiles, activeProfile, checked, user, authLoading } = s
  const [newName, setNewName] = useState('')
  const fileRef = useRef(null)

  const perGame = Object.fromEntries(GAMES.map((g) => {
    const done = allTasks(g).filter((tk) => checked[tk.id])
    const pts = g.id === 'dw1' ? done.reduce((a, tk) => a + (typeof tk.pts === 'number' ? tk.pts : 0), 0) : null
    return [g.id, { done: done.length, total: totalTasks(g), pts }]
  }))

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">👤 Mi progreso</h1>
        <p className="mt-2 max-w-3xl leading-relaxed text-slate-400">
          Tu avance se guarda <b className="text-slate-200">automáticamente en este navegador</b> (localStorage), sin
          cuentas ni esperas. Crea varias partidas (por ejemplo: una por juego o una con tu hermano) y,
          si quieres llevarte tu progreso al móvil o a otro PC, inicia sesión con Supabase o exporta tu archivo.
        </p>
      </div>

      {/* Resumen por juego */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <h2 className="font-bold text-white">Resumen de «{activeProfile?.name}»</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {GAMES.map((g) => {
            const st = perGame[g.id]
            const pct = st.done / Math.max(1, st.total) * 100
            return (
              <Link key={g.id} to={`/game/${g.id}`} className="rounded-xl border border-slate-800 p-4 hover:border-slate-600">
                <p className="font-bold text-white">{g.emoji} {g.title}</p>
                <p className="mt-1 text-sm text-slate-400">{st.done} / {st.total} tareas</p>
                {st.pts !== null && <p className="text-sm text-emerald-300">⭐ {st.pts} / 100 de prosperidad</p>}
                <ProgressBar value={pct} accent={ACCENTS[g.accent].ring} className="mt-2" />
              </Link>
            )
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={s.exportProfile} className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold hover:bg-slate-800">⬇️ Exportar partida (.json)</button>
          <button onClick={() => fileRef.current?.click()} className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold hover:bg-slate-800">⬆️ Importar partida</button>
          <input ref={fileRef} type="file" accept="application/json" className="hidden"
            onChange={async (e) => { const f = e.target.files?.[0]; if (f) s.showToast((await s.importProfile(f)) ? 'Partida importada 🎉' : 'Archivo no válido'); e.target.value = '' }} />
          {user && (
            <button onClick={async () => s.showToast((await s.syncAllToCloud()) ? 'Progreso subido a tu cuenta ☁️' : 'Hubo un error al sincronizar')}
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-400">☁️ Subir mi progreso local a la nube</button>
          )}
        </div>
      </section>

      {/* Partidas locales */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <h2 className="font-bold text-white">💾 Mis partidas locales</h2>
        <p className="mt-1 text-sm text-slate-400">Equivale a tus "slots" de Memory Card. Cada partida guarda sus propios checks de los 3 juegos.</p>
        <ul className="mt-4 space-y-2">
          {profiles.map((p) => {
            const n = Object.keys(p.checked).length
            const active = p.id === activeProfile?.id
            return (
              <li key={p.id} className={`flex flex-wrap items-center gap-2 rounded-xl border px-3.5 py-3 ${active ? 'border-emerald-500/40 bg-emerald-500/[.05]' : 'border-slate-800'}`}>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-100">{active ? '▶ ' : ''}{p.name}</p>
                  <p className="text-xs text-slate-500">{n} tareas hechas · creada el {new Date(p.createdAt).toLocaleDateString('es-ES')}</p>
                </div>
                {!active && <button onClick={() => { s.selectProfile(p.id); s.showToast(`Partida activa: ${p.name}`) }} className="rounded-md bg-slate-700 px-2.5 py-1.5 text-xs font-semibold hover:bg-slate-600">Cargar</button>}
                <button onClick={() => { const name = window.prompt('Nuevo nombre de la partida:', p.name); if (name?.trim()) s.renameProfile(p.id, name.trim()) }}
                  className="rounded-md border border-slate-700 px-2.5 py-1.5 text-xs hover:bg-slate-800">Renombrar</button>
                <button onClick={() => { if (window.confirm(`¿Borrar la partida "${p.name}"? Perderás sus ${n} checks.`)) s.deleteProfile(p.id) }}
                  className="rounded-md border border-rose-500/40 px-2.5 py-1.5 text-xs text-rose-300 hover:bg-rose-500/10">Borrar</button>
              </li>
            )
          })}
        </ul>
        <form className="mt-4 flex gap-2" onSubmit={(e) => { e.preventDefault(); s.addProfile(newName); setNewName(''); s.showToast('Nueva partida creada y cargada 💾') }}>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nombre de la nueva partida (p. ej. Speedrun DW1)"
            className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none" />
          <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-400">+ Nueva</button>
        </form>
        <p className="mt-3 text-xs text-slate-500">⚠️ Los datos locales viven en este navegador: si borras cookies/localStorage se pierden. Exporta tu .json o usa cuenta para estar tranquilo.</p>
      </section>

      {/* Cuenta */}
      <section>
        <h2 className="mb-3 font-bold text-white">☁️ Cuenta y sincronización (opcional, con Supabase)</h2>
        {authLoading ? (
          <p className="text-sm text-slate-400">Comprobando sesión…</p>
        ) : user ? (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[.05] p-5">
            <p className="text-slate-200">Sesión iniciada como <b>{user.email}</b></p>
            <p className="mt-1 text-sm text-slate-400">
              Estado: {s.syncStatus}. Cada check que hagas se refleja en la tabla <code className="text-slate-200">progress</code> de tu
              Supabase (game_id + task_id + completed), y al entrar desde otro dispositivo tu nube se fusiona con la partida local activa.
            </p>
            <button onClick={async () => { await s.signOut(); s.showToast('Sesión cerrada (tu copia local se queda)') }}
              className="mt-4 rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold hover:bg-slate-800">Cerrar sesión</button>
          </div>
        ) : (
          <AuthForm />
        )}
      </section>
    </div>
  )
}
