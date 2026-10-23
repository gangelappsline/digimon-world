export const ACCENTS = {
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500', soft: 'bg-emerald-500/10', border: 'border-emerald-500/40', ring: '#34d399', grad: 'from-emerald-500/25' },
  sky: { text: 'text-sky-400', bg: 'bg-sky-500', soft: 'bg-sky-500/10', border: 'border-sky-500/40', ring: '#38bdf8', grad: 'from-sky-500/25' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-500', soft: 'bg-violet-500/10', border: 'border-violet-500/40', ring: '#a78bfa', grad: 'from-violet-500/25' },
}

export function ProgressBar({ value = 0, accent = '#34d399', className = '' }) {
  const pct = Math.max(0, Math.min(100, Math.round(value)))
  return (
    <div className={`h-2.5 w-full overflow-hidden rounded-full bg-slate-800 ${className}`} role="progressbar" aria-valuenow={pct}>
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: accent }} />
    </div>
  )
}

export function ProgressRing({ value = 0, size = 84, stroke = 8, color = '#34d399', label }) {
  const pct = Math.max(0, Math.min(100, value))
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="#1e293b" strokeWidth={stroke} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} stroke={color} strokeWidth={stroke} fill="none"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (c * pct) / 100}
          className="transition-all duration-500" />
      </svg>
      <span className="absolute text-sm font-bold text-slate-100">{label ?? `${Math.round(pct)}%`}</span>
    </div>
  )
}

export function Badge({ children, tone = 'slate' }) {
  const tones = {
    slate: 'bg-slate-800 text-slate-300 border-slate-700',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    red: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    green: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    blue: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    violet: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
  }
  return <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${tones[tone] || tones.slate}`}>{children}</span>
}

export const CAT_TONE = {
  Historia: 'blue', Reclutamiento: 'green', Jefe: 'red', Misión: 'blue',
  'Objeto clave': 'amber', Opcional: 'slate', Sistema: 'violet', Postgame: 'amber',
}

export function Toast({ msg }) {
  if (!msg) return null
  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-emerald-500/40 bg-slate-900/95 px-4 py-2.5 text-sm shadow-2xl">
      ✅ {msg}
    </div>
  )
}
