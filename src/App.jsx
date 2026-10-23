import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Toast } from './components/ui'
import { useStore } from './store/AppStore'
import Home from './pages/Home'
import GameGuide from './pages/GameGuide'
import Tools from './pages/Tools'
import Profile from './pages/Profile'
import Setup from './pages/Setup'

function Footer() {
  return (
    <footer className="relative z-10 border-t border-blue-950/80 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-slate-500">
        <p>📟 Digimon World Guide Hub — Proyecto de fans, sin afiliación con Bandai Namco.</p>
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-slate-300">Inicio</Link>
          <Link to="/herramientas" className="hover:text-slate-300">Herramientas</Link>
          <Link to="/perfil" className="hover:text-slate-300">Mi progreso</Link>
          <Link to="/configurar-supabase" className="hover:text-slate-300">Activar Supabase</Link>
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  const { toast } = useStore()
  return (
    <div className="flex min-h-screen flex-col bg-[#070d1a]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameId" element={<GameGuide />} />
          <Route path="/herramientas" element={<Tools />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/configurar-supabase" element={<Setup />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <Toast msg={toast} />
    </div>
  )
}
