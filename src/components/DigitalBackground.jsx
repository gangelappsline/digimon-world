// Fondo decorativo "mundo digital": degradado azul marino profundo con
// pistas de circuito (PCB) en las esquinas superiores y una red geométrica
// de nodos en la inferior, inspirado en la imagen de referencia del usuario.
// Es 100% decorativo: fixed, sin eventos y con pulses animados sutiles.

const STROKE = '#1e9be0'
const STROKE_SOFT = 'rgba(30,155,224,.55)'

/* ── Clúster de circuito (pistas que entran desde arriba) ─────────────── */
const TRACE_PATHS = [
  'M28 -8 V150 L-8 186',
  'M58 -8 V96',
  'M88 -8 V170 L28 230 L28 300',
  'M128 -8 V128 L68 188 L-8 188',
  'M168 -8 V210 L118 260 H-8',
  'M208 -8 V96 L148 156 V238',
  'M248 -8 V150 L198 200 V268',
  'M292 -8 V120 L242 170 H120',
  'M332 -8 V190 L272 250 H140',
  'M384 -8 V150 L324 210 H220',
  'M436 -8 V96',
  'M476 -8 V168 L416 228',
  'M150 316 H330 L390 256',
  'M96 340 H380 L430 290',
]
const TRACE_DOTS = [
  [58, 96], [148, 238], [198, 268], [28, 300], [120, 170], [436, 96],
  [220, 210], [150, 316], [96, 340], [416, 228],
]

function CircuitCluster({ className = '', style }) {
  return (
    <svg viewBox="0 0 500 360" fill="none" className={className} style={style} aria-hidden="true">
      {TRACE_PATHS.map((d, i) => (
        <path key={i} d={d} stroke={i % 3 === 0 ? STROKE_SOFT : STROKE} strokeWidth="2.2" />
      ))}
      {TRACE_DOTS.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 5 : 3.6} fill={STROKE} className="node-pulse" style={{ animationDelay: `${i * 0.45}s` }} />
      ))}
      {/* Pulso de datos recorriendo dos pistas */}
      <circle r="3.4" fill="#7dd3fc">
        <animateMotion dur="5.5s" repeatCount="indefinite" path="M88 -8 V170 L28 230 L28 300" />
      </circle>
      <circle r="3" fill="#7dd3fc" opacity=".85">
        <animateMotion dur="7s" begin="1.6s" repeatCount="indefinite" path="M332 -8 V190 L272 250 H140" />
      </circle>
    </svg>
  )
}

/* ── Red geométrica de nodos (esquina inferior) ───────────────────────── */
const NET_POINTS = {
  a: [70, 352], b: [70, 232], c: [208, 182], d: [398, 232], e: [532, 142],
  f: [578, 288], g: [448, 352], h: [288, 344], i: [330, 408], j: [548, 408],
  k: [608, 96], hub: [588, 250], l: [392, 90],
}
const NET_LINES = [
  ['a', 'b'], ['b', 'c'], ['c', 'd'], ['b', 'h'], ['c', 'h'], ['d', 'h'],
  ['a', 'h'], ['h', 'i'], ['h', 'g'], ['g', 'i'], ['g', 'j'], ['i', 'j'],
  ['d', 'g'], ['d', 'hub'], ['g', 'hub'], ['e', 'hub'], ['f', 'hub'],
  ['e', 'd'], ['k', 'e'], ['k', 'hub'], ['l', 'c'], ['l', 'hub'], ['j', 'hub'],
  ['c', 'hub'],
]

function NodeNetwork({ className = '' }) {
  return (
    <svg viewBox="0 0 620 430" fill="none" className={className} aria-hidden="true">
      {NET_LINES.map(([p, q], i) => (
        <line key={i} x1={NET_POINTS[p][0]} y1={NET_POINTS[p][1]} x2={NET_POINTS[q][0]} y2={NET_POINTS[q][1]} stroke={STROKE_SOFT} strokeWidth="1.6" />
      ))}
      {Object.entries(NET_POINTS).map(([key, [cx, cy]], i) => (
        <circle key={key} cx={cx} cy={cy} r={key === 'hub' ? 4.6 : 3.2} fill={STROKE} className="node-pulse" style={{ animationDelay: `${i * 0.35}s` }} />
      ))}
      <circle r="3.2" fill="#7dd3fc">
        <animateMotion dur="6.5s" repeatCount="indefinite" path="M70 232 L208 182 L398 232 L588 250" />
      </circle>
    </svg>
  )
}

/* ── Capa completa ────────────────────────────────────────────────────── */
export default function DigitalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Degradado azul marino profundo (negro azulado arriba → azul intenso abajo) */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #00020e 0%, #00051f 30%, #000a36 58%, #000e4d 82%, #00126b 100%)' }} />
      {/* Resplandores ambientales */}
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#001a8f]/35 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 h-72 w-72 rounded-full bg-sky-600/10 blur-3xl" />
      {/* Rejilla digital muy sutil en toda la pantalla */}
      <div className="digital-grid absolute inset-0 opacity-50" />
      {/* Circuitos esquina superior izquierda y derecha (espejo) */}
      <CircuitCluster className="absolute -left-6 -top-4 w-[420px] max-w-none opacity-80 sm:w-[520px]" />
      <CircuitCluster className="absolute -right-6 -top-4 hidden w-[420px] max-w-none -scale-x-100 opacity-70 md:block lg:w-[520px]" />
      {/* Circuitos inferiores (volteados) */}
      <CircuitCluster className="absolute -bottom-8 -left-10 hidden w-[360px] max-w-none -scale-y-100 opacity-60 lg:block" />
      {/* Red geométrica inferior derecha */}
      <NodeNetwork className="absolute -bottom-6 -right-4 w-[460px] max-w-none opacity-75 sm:w-[580px]" />
      {/* Viñeta central para que el texto respire y se lea perfecto */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 42%, rgba(0,3,18,.42) 0%, rgba(0,3,18,0) 65%)' }} />
    </div>
  )
}
