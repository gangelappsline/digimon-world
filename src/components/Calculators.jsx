import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/AppStore'
import { getGame, allTasks } from '../data/games'
import { ProgressBar, Badge } from './ui'

/* ── DW2: Calculadora DNA Digivolution ──────────────────────────────── */
const STAGES = ['Rookie', 'Champion', 'Ultimate', 'Mega']
const baseEL = { Rookie: 1, Champion: 11, Ultimate: 21, Mega: 31 }

function dnaResult(s1, s2) {
  // Regla de StrategyWiki: Champion+anything = Rookie EL1 ·
  // Ultimate+Ultimate/Mega = Champion EL11 · Mega+Mega = Ultimate EL21
  const idx = (s) => STAGES.indexOf(s)
  const lowIdx = Math.min(idx(s1), idx(s2))
  return STAGES[Math.max(0, lowIdx - 1)]
}

export function DnaCalculator() {
  const [el1, setEl1] = useState(13)
  const [el2, setEl2] = useState(13)
  const [dp1, setDp1] = useState(0)
  const [dp2, setDp2] = useState(0)
  const [s1, setS1] = useState('Champion')
  const [s2, setS2] = useState('Champion')

  const result = useMemo(() => {
    const hi = Math.max(el1, el2)
    const lo = Math.min(el1, el2)
    const maxEL = hi + Math.floor(lo / 5)
    const stage = dnaResult(s1, s2)
    return { maxEL, stage, base: baseEL[stage], dp: Number(dp1) + Number(dp2) + 1 }
  }, [el1, el2, dp1, dp2, s1, s2])

  const reaches = [
    result.maxEL >= 12 && 'Champion + técnica (EL 12)',
    result.maxEL >= 22 && 'Ultimate + técnica (EL 22)',
    result.maxEL >= 32 && 'Mega + técnica (EL 32)',
  ].filter(Boolean)

  const num = 'w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none'
  const Digimon = ({ n, el, setEl, dp, setDp, st, setSt }) => (
    <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/70 p-3">
      <p className="text-xs font-bold uppercase tracking-wide text-sky-300">Digimon {n}</p>
      <select className={num} value={st} onChange={(e) => setSt(e.target.value)}>
        {STAGES.map((s) => <option key={s}>{s}</option>)}
      </select>
      <label className="block text-xs text-slate-400">EL actual
        <input type="number" min={1} max={99} className={num} value={el} onChange={(e) => setEl(Math.max(1, Math.min(99, Number(e.target.value) || 1)))} />
      </label>
      <label className="block text-xs text-slate-400">DP actual
        <input type="number" min={0} max={99} className={num} value={dp} onChange={(e) => setDp(Math.max(0, Math.min(99, Number(e.target.value) || 0)))} />
      </label>
    </div>
  )
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
        <Digimon n="A (padre)" el={el1} setEl={setEl1} dp={dp1} setDp={setDp1} st={s1} setSt={setS1} />
        <div className="grid place-items-center py-2 text-2xl">🧬</div>
        <Digimon n="B (madre)" el={el2} setEl={setEl2} dp={dp2} setDp={setDp2} st={s2} setSt={setS2} />
      </div>
      <div className="mt-4 rounded-xl border border-sky-500/30 bg-sky-500/[.06] p-4 text-sm">
        <p className="font-bold text-sky-200">Resultado de la fusión</p>
        <div className="mt-2 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-slate-900/70 p-3"><p className="text-xl font-extrabold text-white">{result.stage}</p><p className="text-[11px] text-slate-400">nacerá en EL {result.base}</p></div>
          <div className="rounded-lg bg-slate-900/70 p-3"><p className="text-xl font-extrabold text-white">EL {result.maxEL}</p><p className="text-[11px] text-slate-400">nuevo tope</p></div>
          <div className="rounded-lg bg-slate-900/70 p-3"><p className="text-xl font-extrabold text-white">DP {result.dp}</p><p className="text-[11px] text-slate-400">DP heredado</p></div>
        </div>
        <p className="mt-3 text-slate-300">
          Fórmula: <code className="text-sky-300">EL mayor + (EL menor ÷ 5)</code> = {Math.max(el1, el2)} + {Math.floor(Math.min(el1, el2) / 5)} = <b>{result.maxEL}</b> ·
          DP: {dp1} + {dp2} + 1 = <b>{result.dp}</b>
        </p>
        {reaches.length > 0
          ? <p className="mt-1 text-emerald-300">✅ Con este tope puede llegar a: <b>{reaches.join(' · ')}</b></p>
          : <p className="mt-1 text-amber-300">⚠️ Aún no alcanza EL 12 (técnica Champion): sube más niveles antes de fusionar.</p>}
        <p className="mt-2 text-xs text-slate-500">Recuerda: digievoluciona el mismo nivel que puedas (11/21/31) para aprender la técnica en 12/22/32. Si fusionas dos Digimon idénticos obtienes su Rookie.</p>
      </div>
    </div>
  )
}

/* ── DW1: Medidor de prosperidad de File City ───────────────────────── */
export function ProsperityMeter() {
  const { checked } = useStore()
  const dw1 = getGame('dw1')
  const recruited = allTasks(dw1).filter((tk) => checked[tk.id])
  const pts = recruited.filter((tk) => typeof tk.pts === 'number').reduce((a, tk) => a + tk.pts, 0)
  const recCount = recruited.filter((tk) => typeof tk.pts === 'number').length
  const milestones = [
    { at: 15, label: 'Greymon aparece en File City' },
    { at: 30, label: 'Noticias OVNI de Vademon (acto 2)' },
    { at: 40, label: 'Ruta de SkullGreymon viable' },
    { at: 45, label: 'Tableta de Leomon / aterrizaje de Vademon' },
    { at: 50, label: 'Airdramon + Monte Infinito abierto' },
    { at: 100, label: '🌟 File City al completo' },
  ]
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <p className="text-3xl font-extrabold text-white">{pts} <span className="text-base font-semibold text-slate-400">/ 100 prosperidad</span></p>
        <p className="text-sm text-slate-400">{recCount} / 50 Digimon en la ciudad</p>
      </div>
      <ProgressBar value={pts} accent="#34d399" className="mt-2 !h-3.5" />
      <ul className="mt-4 grid gap-1.5 text-sm sm:grid-cols-2">
        {milestones.map((m) => (
          <li key={m.at} className={`rounded-lg border px-3 py-2 ${pts >= m.at ? 'border-emerald-500/40 bg-emerald-500/[.07] text-emerald-200' : 'border-slate-800 text-slate-400'}`}>
            {pts >= m.at ? '✅' : '🔒'} <b>{m.at} pts:</b> {m.label}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-500">Se calcula automáticamente de tus checks de reclutamiento (Rookie +1 · Champion +2 · Ultimate +3 · Sukamon/Numemon/Nanimon +1). <Link to="/game/dw1" className="text-emerald-400 underline">Ir a la guía DW1 →</Link></p>
    </div>
  )
}

/* ── DW3: Tabla de referencia de digievolución ──────────────────────── */
export function Dw3Reference() {
  const rows = [
    ['1 → 5', 'Primeras digievoluciones (ramas Champion): p. ej. Kotemon → Dinohyumon en Nv. 5'],
    ['→ 20', 'Ramas Ultimate: p. ej. Kotemon → Kyukimon en Nv. 20'],
    ['→ 40', 'Ramas Mega: p. ej. Kotemon → GuardiAngemon en Nv. 40'],
    ['Extra', 'Las 44 digievoluciones son compartidas: cualquier Rookie puede aprenderlas si cumple nivel + técnicas previas + stats (entrenadas en el gym) + tolerancias elementales'],
    ['DRI Agents', 'Rookie fuera de tu pack = entrega su DDNA a su agente (Veemon: Paildramon, tras Byakko Badge)'],
    ['Blast', 'La barra Blast llena permite una digievolución temporal a Mega en combate: úsala en los jefes con KO instantáneo (¡HiAndromon!)'],
  ]
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead><tr className="border-b border-slate-800 text-violet-300"><th className="py-2 pr-3">Nv. Rookie</th><th className="py-2">Qué se abre</th></tr></thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a} className="border-b border-slate-800/60"><td className="whitespace-nowrap py-2 pr-3 font-bold text-slate-100">{a}</td><td className="py-2 text-slate-300">{b}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <Badge tone="violet">Pack A: Kotemon · Renamon · Patamon</Badge>
        <Badge tone="violet">Pack B: Monmon · Agumon · Renamon</Badge>
        <Badge tone="violet">Pack C: Kumamon · Guilmon · Patamon</Badge>
      </div>
    </div>
  )
}
