import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/AppStore'

export default function AuthForm() {
  const { isSupabaseConfigured, signIn, signUp, showToast } = useStore()
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')

  if (!isSupabaseConfigured) {
    return (
      <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/60 p-5">
        <h3 className="font-bold text-white">☁️ Cuenta en la nube (Supabase) — no configurada todavía</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          No pasa nada: todo tu progreso se está guardando <b className="text-slate-200">localmente en este navegador</b> sin
          registrar ninguna cuenta. Si eres el dueño de esta web y quieres activar registro/login y sincronización,
          sigue la guía paso a paso (5 minutos, gratis).
        </p>
        <Link to="/configurar-supabase" className="mt-4 inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-400">
          Ver guía de configuración de Supabase →
        </Link>
      </div>
    )
  }

  const submit = async (e) => {
    e.preventDefault()
    setBusy(true); setError(''); setInfo('')
    try {
      if (mode === 'login') {
        await signIn(email, password)
        showToast('Sesión iniciada: tu progreso se sincronizará ☁️')
      } else {
        const data = await signUp(email, password, name)
        if (data?.user && !data?.session) setInfo('Cuenta creada. Revisa tu correo y confirma el registro para iniciar sesión (si tu proyecto de Supabase exige confirmación).')
        else showToast('Cuenta creada y sesión iniciada 🎉')
      }
    } catch (err) {
      setError(err.message || 'Ha ocurrido un error de autenticación.')
    } finally { setBusy(false) }
  }

  const input = 'w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none'
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <div className="flex gap-2">
        {['login', 'registro'].map((m) => (
          <button key={m} onClick={() => setMode(m)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${mode === m ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
            {m === 'login' ? 'Iniciar sesión' : 'Registrarme'}
          </button>
        ))}
      </div>
      <form onSubmit={submit} className="mt-4 space-y-3">
        {mode === 'registro' && (
          <input className={input} placeholder="Nombre de Tamer (opcional)" value={name} onChange={(e) => setName(e.target.value)} />
        )}
        <input className={input} type="email" required placeholder="correo@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={input} type="password" required minLength={6} placeholder="Contraseña (mín. 6 caracteres)" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">{error}</p>}
        {info && <p className="rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sm text-sky-200">{info}</p>}
        <button disabled={busy} className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-400 disabled:opacity-50">
          {busy ? 'Conectando…' : mode === 'login' ? 'Entrar y sincronizar ☁️' : 'Crear mi cuenta'}
        </button>
        <p className="text-xs text-slate-500">Autenticación con Supabase Auth (email + contraseña). Tu progreso local se fusionará con tu cuenta al entrar: no pierdes nada.</p>
      </form>
    </div>
  )
}
