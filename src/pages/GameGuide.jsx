import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStore } from '../store/AppStore'
import { getGame, totalTasks } from '../data/games'
import { ACCENTS, ProgressBar, ProgressRing, Badge } from '../components/ui'
import TaskItem from '../components/TaskItem'
import { ProsperityMeter } from '../components/Calculators'

export default function GameGuide() {
  const { gameId } = useParams()
  const game = getGame(gameId)
  const { checked, toggleTask, setManyTasks, resetGame, showToast } = useStore()
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('Todas')
  const [status, setStatus] = useState('todas') // todas | pendientes | completadas
  const [collapsed, setCollapsed] = useState({})

  useEffect(() => { window.scrollTo({ top: 0 }); setQuery(''); setCat('Todas'); setStatus('todas') }, [gameId])

  const categories = useMemo(() => (game ? ['Todas', ...new Set(game.sections.flatMap((s) => s.tasks.map((tk) => tk.cat)))] : []), [game])

  const filteredSections = useMemo(() => {
    if (!game) return []
    const q = query.trim().toLowerCase()
    return game.sections.map((s) => ({
      ...s,
      tasks: s.tasks.filter((tk) => {
        if (cat !== 'Todas' && tk.cat !== cat) return false
        if (status === 'pendientes' && checked[tk.id]) return false
        if (status === 'completadas' && !checked[tk.id]) return false
        if (q) {
          const hay = `${tk.title} ${tk.loc || ''} ${tk.boss || ''} ${tk.how || ''} ${tk.cat}`.toLowerCase()
          if (!hay.includes(q)) return false
        }
        return true
      }),
    }))
  }, [game, query, cat, status, checked])

  if (!game) {
    return <div className="mx-auto max-w-3xl px-4 py-16 text-center"><p className="text-xl">Juego no encontrado.</p><Link className="text-sky-400 underline" to="/">Volver al inicio</Link></div>
  }

  const a = ACCENTS[game.accent]
  const total = totalTasks(game)
  const done = game.sections.flatMap((s) => s.tasks).filter((tk) => checked[tk.id]).length
  const nextTask = game.sections.flatMap((s) => s.tasks).find((tk) => !checked[tk.id])
  const visibleCount = filteredSections.reduce((n, s) => n + s.tasks.length, 0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Cabecera del juego */}
      <section className={`rounded-2xl border border-slate-800 bg-gradient-to-br ${a.grad} via-slate-900 to-slate-900 p-6`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl">
            <p className={`text-xs font-bold uppercase tracking-widest ${a.text}`}>{game.year} · {game.platform}</p>
            <h1 className="mt-1 text-3xl font-extrabold text-white md:text-4xl">{game.emoji} {game.title}</h1>
            <p className="mt-1 font-medium text-slate-300">{game.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{game.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-2xl font-extrabold text-white">{done}<span className="text-sm font-medium text-slate-400"> / {total}</span></p>
              <p className="text-xs text-slate-500">tareas completadas</p>
            </div>
            <ProgressRing value={done / Math.max(1, total) * 100} size={86} color={a.ring} />
          </div>
        </div>
        <ProgressBar value={done / Math.max(1, total) * 100} accent={a.ring} className="mt-4" />
        {nextTask && (
          <p className="mt-4 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm">
            ▶️ <b className="text-white">Siguiente en tu ruta:</b> <span className="text-slate-200">{nextTask.title}</span>
            <span className="text-slate-400"> — 📍 {nextTask.loc}</span>
          </p>
        )}
        {done === total && <p className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 font-semibold text-emerald-200">🎉 ¡Guía al 100%! Eres un verdadero Campeón Digital.</p>}
        <details className="mt-4">
          <summary className="cursor-pointer text-sm font-semibold text-slate-200">📖 Cómo funciona este juego (reglas esenciales)</summary>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300">
            {game.howItWorks.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </details>
      </section>

      {game.id === 'dw1' && (
        <section className="mt-5 rounded-2xl border border-emerald-500/25 bg-emerald-500/[.04] p-5">
          <h2 className="font-bold text-white">🏙️ Prosperidad de File City</h2>
          <div className="mt-3"><ProsperityMeter /></div>
        </section>
      )}

      {/* Filtros */}
      <section className="sticky top-[65px] z-30 mt-6 rounded-2xl border border-slate-800 bg-[#0a1120]/95 p-3 backdrop-blur">
        <div className="flex flex-wrap items-center gap-2">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="🔎 Buscar Digimon, jefe, zona…"
            className="min-w-56 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none" />
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm">
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
          <div className="flex rounded-lg border border-slate-700 p-0.5">
            {[['todas', 'Todas'], ['pendientes', 'Pendientes'], ['completadas', 'Hechas']].map(([v, lbl]) => (
              <button key={v} onClick={() => setStatus(v)} className={`rounded-md px-3 py-1.5 text-sm ${status === v ? 'bg-slate-700 text-white' : 'text-slate-400'}`}>{lbl}</button>
            ))}
          </div>
          <Badge>{visibleCount} visibles</Badge>
          <button
            onClick={() => { if (window.confirm(`¿Reiniciar TODA tu checklist de ${game.title} en esta partida?`)) { resetGame(game); showToast('Checklist reiniciada') } }}
            className="ml-auto rounded-lg border border-rose-500/40 px-3 py-2 text-sm text-rose-300 hover:bg-rose-500/10">
            Reiniciar juego
          </button>
        </div>
      </section>

      {/* Secciones */}
      <div className="mt-6 space-y-8">
        {filteredSections.map((section) => {
          const fullSection = game.sections.find((s) => s.id === section.id)
          const sDone = fullSection.tasks.filter((tk) => checked[tk.id]).length
          const sTotal = fullSection.tasks.length
          const isCollapsed = collapsed[section.id]
          if (section.tasks.length === 0 && (query || cat !== 'Todas' || status !== 'todas')) return null
          return (
            <section key={section.id} id={section.id}>
              <div className="flex flex-wrap items-center gap-3">
                <button onClick={() => setCollapsed((c) => ({ ...c, [section.id]: !c[section.id] }))} className="text-left">
                  <h2 className="text-xl font-extrabold text-white">{isCollapsed ? '▶' : '▼'} {section.title} {sDone === sTotal && '🌟'}</h2>
                </button>
                <Badge tone={sDone === sTotal ? 'green' : 'slate'}>{sDone}/{sTotal}</Badge>
                <div className="min-w-28 flex-1"><ProgressBar value={sDone / Math.max(1, sTotal) * 100} accent={a.ring} className="!h-2" /></div>
                <div className="flex gap-1.5">
                  <button className="rounded-md border border-slate-700 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-800"
                    onClick={() => setManyTasks(fullSection.tasks.map((tk) => tk.id), true)}>Marcar sección ✔</button>
                  <button className="rounded-md border border-slate-700 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-800"
                    onClick={() => setManyTasks(fullSection.tasks.map((tk) => tk.id), false)}>Desmarcar</button>
                </div>
              </div>
              <p className="mt-1 text-sm text-slate-400">{section.desc}</p>
              {!isCollapsed && (
                <div className="mt-3 space-y-2.5">
                  {section.tasks.length === 0 && <p className="text-sm text-slate-500">Sin tareas con estos filtros.</p>}
                  {section.tasks.map((tk) => (
                    <TaskItem key={tk.id} task={tk} done={!!checked[tk.id]} onToggle={toggleTask} accentRing={a.ring} />
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>

      <nav className="mt-10 flex flex-wrap gap-2">
        {game.sections.map((s) => <a key={s.id} href={`#${s.id}`} className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800">{s.title}</a>)}
      </nav>
    </div>
  )
}
