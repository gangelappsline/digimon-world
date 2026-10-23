import { useState } from 'react'
import { Badge, CAT_TONE } from './ui'

export default function TaskItem({ task, done, onToggle, accentRing = '#34d399' }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`rounded-xl border transition ${done ? 'border-emerald-500/25 bg-emerald-500/[.04]' : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'}`}>
      <div className="flex items-start gap-3 p-3.5">
        <button
          onClick={() => onToggle(task.id)}
          aria-label={done ? 'Marcar como pendiente' : 'Marcar como completada'}
          className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border text-sm transition ${done ? 'pop border-emerald-400 bg-emerald-500 text-white' : 'border-slate-600 bg-slate-800 text-transparent hover:border-slate-400'}`}
        >✓</button>

        <div className="min-w-0 flex-1">
          <button onClick={() => setOpen((v) => !v)} className="block w-full text-left">
            <h4 className={`font-semibold ${done ? 'text-slate-400 line-through' : 'text-slate-100'}`}>{task.title}</h4>
            <p className="mt-0.5 truncate text-sm text-slate-400">📍 {task.loc || '—'}{task.boss ? ` · ⚔️ ${task.boss}` : ''}</p>
          </button>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Badge tone={CAT_TONE[task.cat] || 'slate'}>{task.cat}</Badge>
            {typeof task.pts === 'number' && <Badge tone="amber">⭐ +{task.pts} prosperidad{task.lvl ? ` · ${task.lvl}` : ''}</Badge>}
            {task.lvl && typeof task.pts !== 'number' && <Badge tone="amber">{task.lvl}</Badge>}
            {task.req && <Badge>🔑 {task.req.length > 60 ? task.req.slice(0, 60) + '…' : task.req}</Badge>}
          </div>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="shrink-0 rounded-lg border border-slate-700 px-2.5 py-1.5 text-xs text-slate-300 hover:bg-slate-800" aria-expanded={open}>
          {open ? 'Ocultar ▲' : 'Cómo hacerlo ▼'}
        </button>
      </div>

      {open && (
        <div className="space-y-2.5 border-t border-slate-800 px-4 py-3.5 text-sm leading-relaxed text-slate-300">
          {task.how && <p><span className="font-semibold text-slate-100">🪜 Paso a paso: </span>{task.how}</p>}
          {task.req && <p><span className="font-semibold text-slate-100">🔑 Requisitos: </span>{task.req}</p>}
          {task.reward && <p><span className="font-semibold text-emerald-300">🎁 Recompensa: </span>{task.reward}</p>}
          {task.tip && (
            <p className="rounded-lg border border-amber-500/25 bg-amber-500/[.06] px-3 py-2 text-amber-200/90">
              <span className="font-semibold">💡 Tip: </span>{task.tip}
            </p>
          )}
          <button
            onClick={() => onToggle(task.id)}
            className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
            style={{ background: done ? '#475569' : accentRing }}
          >
            {done ? 'Marcar como pendiente' : '✔ Marcar como completada'}
          </button>
        </div>
      )}
    </article>
  )
}
