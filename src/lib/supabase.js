import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/** ¿El usuario configuró su proyecto de Supabase en .env? */
export const isSupabaseConfigured = Boolean(url && anonKey && !url.includes('tu-proyecto'))

/**
 * Cliente único de Supabase. Si no hay variables de entorno vale `null`
 * y toda la app funciona en modo 100% local (localStorage).
 */
export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null
