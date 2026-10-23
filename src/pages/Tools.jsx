import { Link } from 'react-router-dom'
import { DnaCalculator, ProsperityMeter, Dw3Reference } from '../components/Calculators'

function Card({ id, title, sub, children, to }) {
  return (
    <section id={id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <h2 className="text-xl font-extrabold text-white">{title}</h2>
      <p className="mt-1 text-sm text-slate-400">{sub}</p>
      <div className="mt-4">{children}</div>
      {to && <Link to={to} className="mt-4 inline-block text-sm font-semibold text-sky-400 hover:underline">Abrir la guía completa →</Link>}
    </section>
  )
}

export default function Tools() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">🧮 Herramientas del Tamer</h1>
        <p className="mt-2 max-w-3xl leading-relaxed text-slate-400">
          Calculadoras y referencias rápidas para no hacer cuentas en papel como en 1999. Todo se recalcula al
          instante con tu partida activa.
        </p>
        <nav className="mt-3 flex flex-wrap gap-2 text-sm">
          <a href="#prosperidad" className="rounded-full border border-slate-700 px-3 py-1.5 hover:bg-slate-800">🏙️ Prosperidad DW1</a>
          <a href="#dna" className="rounded-full border border-slate-700 px-3 py-1.5 hover:bg-slate-800">🧬 Calculadora DNA DW2</a>
          <a href="#dw3ref" className="rounded-full border border-slate-700 px-3 py-1.5 hover:bg-slate-800">🌐 Digievolución DW3</a>
        </nav>
      </div>

      <Card id="prosperidad" title="🌴 DW1 — Medidor de prosperidad de File City"
        sub="Se actualiza con los reclutamientos que marcas en la guía de Digimon World 1." to="/game/dw1">
        <ProsperityMeter />
      </Card>

      <Card id="dna" title="🚙 DW2 — Calculadora de DNA Digivolution"
        sub="Nuevo tope EL = EL mayor + (EL menor ÷ 5) · DP = DP₁ + DP₂ + 1. Ajusta tus padres ideales ANTES de fusionarlos para siempre." to="/game/dw2">
        <DnaCalculator />
      </Card>

      <Card id="dw3ref" title="🌐 DW3 — Referencia rápida de digievolución y packs"
        sub="Los niveles pivote de cada árbol y cómo completar los 8 Rookie." to="/game/dw3">
        <Dw3Reference />
      </Card>
    </div>
  )
}
