import { Link, NavLink } from 'react-router-dom'
import { useStore } from '../store/AppStore'
import { GAMES } from '../data/games'

const linkCls = ({ isActive }) =>
  `rounded-lg px-3 py-1.5 text-sm font-medium transition ${isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}`

export default function Navbar() {
  const { user, activeProfile, syncStatus } = useStore()
  return (
    <header className="sticky top-0 z-40 border-b border-blue-950/90 bg-[#00041a]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-600 text-lg">📟</span>
          <span className="leading-tight">
            <span className="block font-extrabold tracking-tight text-white">Digimon World <span className="text-emerald-400">Guide Hub</span></span>
            <span className="block text-[11px] text-slate-400">Guías con checklist · DW1 · DW2 · DW3</span>
          </span>
        </Link>

        <nav className="ml-auto flex flex-wrap items-center gap-1">
          <NavLink to="/" end className={linkCls}>Inicio</NavLink>
          {GAMES.map((g) => (
            <NavLink key={g.id} to={`/game/${g.id}`} className={linkCls}>{g.emoji} {g.short}</NavLink>
          ))}
          <NavLink to="/herramientas" className={linkCls}>🧮 Herramientas</NavLink>
          <NavLink to="/perfil" className={linkCls}>👤 Mi progreso</NavLink>
        </nav>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="hidden rounded-full border border-slate-700 px-2.5 py-1 sm:inline" title="Partida local activa">
            💾 {activeProfile?.name}
          </span>
          {user ? (
            <span className="rounded-full border border-emerald-500/40 px-2.5 py-1 text-emerald-300" title={user.email}>
              ☁️ {syncStatus === 'sincronizado' ? 'Sincronizado' : syncStatus === 'sincronizando' ? 'Sincronizando…' : syncStatus === 'error' ? 'Error de sync' : 'En línea'}
            </span>
          ) : (
            <span className="hidden rounded-full border border-slate-700 px-2.5 py-1 md:inline">Sesión local</span>
          )}
        </div>
      </div>
    </header>
  )
}
