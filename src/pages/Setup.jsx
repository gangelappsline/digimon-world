import { Link } from 'react-router-dom'

const Code = ({ children }) => (
  <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-[#050a14] p-4 text-[13px] leading-relaxed text-slate-300">{children}</pre>
)

export default function Setup() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-extrabold text-white">☁️ Activar Supabase en 5 minutos (opcional)</h1>
      <p className="mt-3 leading-relaxed text-slate-400">
        La web funciona <b className="text-slate-200">sin backend</b>: el progreso se guarda en el navegador de cada
        visitante. Activa Supabase solo si quieres <b className="text-slate-200">cuentas de usuario reales</b> con
        registro/login y sincronización entre dispositivos. El plan gratuito de Supabase es de sobra para este proyecto.
      </p>

      <ol className="mt-8 space-y-8">
        <li>
          <h2 className="text-xl font-bold text-white">1. Crea el proyecto</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">Entra en <a className="text-sky-400 underline" href="https://supabase.com" target="_blank" rel="noreferrer">supabase.com</a> → <i>New Project</i>. El nombre y la contraseña de la base de datos son cosa tuya; elige la región más cercana a tus usuarios.</p>
        </li>
        <li>
          <h2 className="text-xl font-bold text-white">2. Crea las tablas</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">Abre <b className="text-slate-200">SQL Editor → New query</b> y pega completo el archivo <code className="text-slate-200">supabase/schema.sql</code> incluido en este repositorio. Crea:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-400">
            <li><code className="text-slate-200">profiles</code> — nombre de Tamer y juego favorito de cada usuario</li>
            <li><code className="text-slate-200">progress</code> — una fila por tarea marcada (<code>user_id, game_id, task_id, completed</code>): es la que usa esta web</li>
            <li><code className="text-slate-200">game_saves</code> — snapshot JSON completo por juego (respaldo futuro)</li>
            <li>Trigger que crea el <i>profile</i> al registrarse + políticas <b className="text-slate-200">RLS</b> para que nadie lea datos ajenos</li>
          </ul>
        </li>
        <li>
          <h2 className="text-xl font-bold text-white">3. (Opcional) Ajusta la confirmación por email</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">En <b className="text-slate-200">Authentication → Providers → Email</b> puedes dejar activada la confirmación por correo o desactivarla para registro instantáneo (menos fricción, más cuentas falsas: tú eliges).</p>
        </li>
        <li>
          <h2 className="text-xl font-bold text-white">4. Copia tus claves</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">En <b className="text-slate-200">Settings → API</b> copia la <i>Project URL</i> y la clave <i>anon public</i> (es segura para el frontend gracias al RLS; <b className="text-slate-200">nunca</b> uses la <i>service_role</i> en el cliente).</p>
        </li>
        <li>
          <h2 className="text-xl font-bold text-white">5. Configúralas en el proyecto</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">En local, crea un <code className="text-slate-200">.env</code> (hay <code>.env.example</code> de plantilla):</p>
          <div className="mt-3"><Code>{`VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...tu-clave-anon`}</Code></div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">Y en GitHub, ve a tu repositorio → <b className="text-slate-200">Settings → Secrets and variables → Actions</b> y crea los secrets <code className="text-slate-200">VITE_SUPABASE_URL</code> y <code className="text-slate-200">VITE_SUPABASE_ANON_KEY</code>: el workflow de GitHub Pages de este repo ya los inyecta al compilar.</p>
        </li>
        <li>
          <h2 className="text-xl font-bold text-white">6. Redespliega</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">Haz <code className="text-slate-200">git push</code> a <code>main</code> (o lanza el workflow a mano en la pestaña Actions). El formulario de <Link to="/perfil" className="text-sky-400 underline">Mi progreso</Link> pasará a ser funcional: registro, login, fusión local→nube y sync automática de cada check.</p>
        </li>
      </ol>

      <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/[.05] p-5 text-sm leading-relaxed text-amber-100/90">
        <p className="font-bold">💡 Cómo se comporta la fusión local ↔ nube</p>
        <p className="mt-1">Al iniciar sesión, la web descarga tu progreso de Supabase y lo <b>une</b> con la partida local activa (si una tarea está marcada en cualquiera de los dos lados, queda marcada). A partir de ahí, cada nuevo check se envía automáticamente. Con el botón «Subir mi progreso local a la nube» fuerzas la subida completa cuando quieras.</p>
      </div>
    </div>
  )
}
