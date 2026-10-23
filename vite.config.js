import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './'  -> rutas relativas. Funciona igual en:
//  - GitHub Pages de usuario/organización en la RAÍZ (https://usuario.github.io/)
//  - GitHub Pages de proyecto en subruta   (https://usuario.github.io/digimon-world/)
//  - Cualquier hosting estático o abriendo dist/ desde un servidor local.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
})
