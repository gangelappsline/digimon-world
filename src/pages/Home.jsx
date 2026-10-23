import { Link } from 'react-router-dom'
import { useStore } from '../store/AppStore'
import { GAMES, SOURCES, allTasks, totalTasks } from '../data/games'
import { ACCENTS, ProgressBar, ProgressRing } from '../components/ui'

export default function Home() {
  const { checked, activeProfile } = useStore()
  const stats = GAMES.map((g) => {
    const done = allTasks(g).filter((tk) => checked[tk.id]).length
    return { game: g, done, total: totalTasks(g), pct: done / Math.max(1, totalTasks(g)) * 100 }
  })
  const totalDone = stats.reduce((a, s) => a + s.done, 0)
  const totalAll = stats.reduce((a, s) => a + s.total, 0)
  const nextTaskPerGame = GAMES.map((g) => ({ game: g, next: allTasks(g).find((tk) => !checked[tk.id]) }))

  return (
    <div>
      {/* HERO */}
      <section className="digital-grid border-b border-slate-800">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">La trilogía de PS1, sin perderte nunca</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Guías completas con checklist para <span className="text-emerald-400">Digimon World 1</span>,{' '}
              <span className="text-sky-400">2</span> y <span className="text-violet-400">3</span>
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
              Marca cada reclutamiento, misión, jefe e insignia según avanzas. Tu sesión vive en este navegador
              (sin registro) y, si quieres, puedes sincronizarla con tu cuenta. Hecho a partir de las guías clásicas
              de la comunidad, reorganizadas en rutas paso a paso en español.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/game/dw1" className="rounded-xl bg-emerald-500 px-5 py-3 font-bold text-white hover:bg-emerald-400">Empezar con DW1 →</Link>
              <Link to="/herramientas" className="rounded-xl border border-slate-600 px-5 py-3 font-bold text-slate-200 hover:bg-slate-800">🧮 Calculadora DNA y más</Link>
            </div>
            <ul className="mt-6 grid max-w-2xl gap-1.5 text-sm text-slate-400 sm:grid-cols-2">
              <li>✅ {totalAll} tareas en 3 juegos, con cómo-hacer cada una</li>
              <li>💾 Guardado automático local, sin cuenta</li>
              <li>☁️ Sincronización opcional con Supabase</li>
              <li>⭐ Ruta a 100 de prosperidad, Tera Domain y postgame DW3</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Partida activa</p>
                <p className="font-bold text-white">💾 {activeProfile?.name}</p>
                <p className="mt-1 text-sm text-slate-400">{totalDone} de {totalAll} tareas entre los 3 juegos</p>
              </div>
              <ProgressRing value={totalDone / Math.max(1, totalAll) * 100} size={92} color="#34d399" />
            </div>
            <ProgressBar value={totalDone / Math.max(1, totalAll) * 100} accent="#34d399" className="mt-3" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">▶ Tu siguiente tarea en cada juego</p>
            <div className="mt-2 space-y-2">
              {nextTaskPerGame.map(({ game, next }) => (
                <Link key={game.id} to={`/game/${game.id}`} className="block rounded-lg border border-slate-800 px-3 py-2 text-sm hover:border-slate-600">
                  <span className="font-semibold text-slate-200">{game.emoji} {game.short}:</span>{' '}
                  {next ? <span className="text-slate-300">{next.title}</span> : <span className="text-emerald-300">🎉 ¡Completado al 100%!</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GAME CARDS */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-extrabold text-white">Elige tu aventura</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {stats.map(({ game, done, total, pct }) => {
            const a = ACCENTS[game.accent]
            return (
              <Link key={game.id} to={`/game/${game.id}`} className={`group rounded-2xl border border-slate-800 bg-gradient-to-b ${a.grad} via-slate-900 to-slate-900 p-5 transition hover:${a.border} hover:-translate-y-0.5`}>
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{game.emoji}</span>
                  <ProgressRing value={pct} size={62} stroke={6} color={a.ring} />
                </div>
                <h3 className="mt-3 text-xl font-extrabold text-white">{game.title} <span className="text-sm font-normal text-slate-400">({game.year} · {game.platform})</span></h3>
                <p className={`mt-1 text-sm font-medium ${a.text}`}>{game.tagline}</p>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">{game.description}</p>
                <p className="mt-3 text-xs text-slate-500">{game.sections.length} secciones · {total} tareas · {done} completadas</p>
                <ProgressBar value={pct} accent={a.ring} className="mt-2" />
                <span className="mt-4 inline-block text-sm font-bold text-white group-hover:underline">{done === 0 ? 'Empezar la guía →' : done === total ? 'Revisar la guía completada →' : 'Continuar donde iba →'}</span>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: '📍', title: '¿Perdido en DW1?', body: 'El tablón de Shellmon + nuestra ruta de prosperidad te dice qué desbloquea cada punto: 15 → Greymon, 50 → Monte Infinito, 100 → ciudad perfecta.', to: '/game/dw1' },
            { icon: '🧬', title: 'DNA sin calculadora a papel', body: 'La calculadora de fusiones de DW2 te da el nuevo tope EL y DP antes de fusionar: planifica tu Mega sin desperdiciar generaciones.', to: '/herramientas' },
            { icon: '🌐', title: 'El backtracking de DW3, ordenado', body: 'Badges, Digi-Eggs, ID Passes y los BK opcionales en orden de ruta: nunca más te preguntarás "¿y ahora a qué servidor volvía?".', to: '/game/dw3' },
          ].map((c) => (
            <Link key={c.title} to={c.to} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-600">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="mt-2 font-bold text-white">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{c.body}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="font-bold text-white">📚 Fuentes de las guías</h3>
          <p className="mt-1 text-sm text-slate-400">Este Hub reescribe y organiza en español el conocimiento acumulado por la comunidad durante 25 años. Todo el crédito a sus autores:</p>
          <ul className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
            {SOURCES.map((s) => (
              <li key={s.url}><a className="text-sky-400 hover:underline" href={s.url} target="_blank" rel="noreferrer">🔗 {s.name}</a></li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500">Proyecto de fans sin afiliación con Bandai Namco. Digimon y Digimon World son marcas de sus respectivos propietarios.</p>
        </div>
      </section>
    </div>
  )
}
