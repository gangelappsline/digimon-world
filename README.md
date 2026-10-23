# 📟 Digimon World Guide Hub

Plataforma web de **guías completas con checklist interactivo** para la trilogía de PS1:

| Juego | Contenido |
|---|---|
| 🌴 **Digimon World (1999)** | Ruta a los **50 reclutamientos = 100 de prosperidad** de File City, Monte Infinito, Machinedramon y extras |
| 🚙 **Digimon World 2 (2000)** | Las misiones y dominios del Directory Continent, Blood Knights, File Island, GAIA y el Tera Domain |
| 🌐 **Digimon World 3 / 2003 (2002)** | Las 4 insignias de Asuka, infiltración en Amaterasu, los 4 Chiefs, Galacticmon y el postgame |

Cada tarea incluye **ubicación, paso a paso, requisitos, recompensa y tips**. En total: **156 tareas** reescritas en español a partir de las guías clásicas de la comunidad (enlazadas en la propia web y al final de este documento).

## ✨ Funcionalidades

- ✅ **Checklist por sección** con progreso global y por zona, buscador y filtros (categoría / pendientes / hechas)
- 💾 **Sesión local sin registro**: guardado automático en `localStorage`, con varias *partidas* (slots), exportar/importar `.json`
- ☁️ **Cuentas opcionales con Supabase**: registro/login (Supabase Auth) y sincronización del progreso en la nube — se fusiona local ↔ nube sin perder nada
- 🧮 **Herramientas**: calculo de prosperidad DW1 en tiempo real, **calculadora DNA** de DW2 (tope EL y DP) y referencia de digievolución DW3
- ▶️ «Siguiente tarea en tu ruta» en la portada y en cada guía

## 🧱 Stack

[React 18](https://react.dev) · [Vite 5](https://vite.dev) · [Tailwind CSS 4](https://tailwindcss.com) · [React Router 6](https://reactrouter.com) (HashRouter para GitHub Pages) · [@supabase/supabase-js](https://supabase.com)

```
src/
 ├─ data/        guías: games.js · dw1.js · dw2.js · dw3.js   ← edita las guías aquí
 ├─ store/       AppStore.jsx  (localStorage + perfiles + sync Supabase)
 ├─ lib/         supabase.js   (cliente opcional desde .env)
 ├─ components/  Navbar, TaskItem, AuthForm, Calculators, ui
 └─ pages/       Home, GameGuide, Tools, Profile, Setup
supabase/
 └─ schema.sql   tablas profiles / progress / game_saves + RLS
.github/workflows/
 └─ deploy.yml   build + deploy automático a GitHub Pages
```

## ▶️ Ejecutar en local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/ (listo para GitHub Pages)
npm run preview    # sirve el build en http://localhost:4173
```

## 🌐 Despliegue en GitHub Pages (raíz)

El proyecto está configurado para funcionar **en la raíz del dominio** y también bajo subruta:

- `vite.config.js` ≫ `base: './'` — los assets se referencian relativos, así funciona en `https://TU-USUARIO.github.io/` **y** en `https://TU-USUARIO.github.io/digimon-world/`
- Enrutamiento con **`HashRouter`**: sin errores 404 de GitHub Pages al refrescar
- `public/.nojekyll` y `public/404.html` como red de seguridad

**Publicación automática** (ya configurada en `.github/workflows/deploy.yml`):

1. Sube el repo a GitHub y ve a **Settings → Pages → Source: GitHub Actions**
2. Haz `push` a la rama `main` — cada push compila y republica la web

¿Quieres que viva en la raíz `https://TU-USUARIO.github.io/`? Renombra el repositorio a `TU-USUARIO.github.io` y listo: no hay que tocar ni una línea.

**Alternativa manual**: `npm run build` y sube el contenido de `dist/` a la rama `gh-pages` (o a cualquier hosting estático).

## ☁️ Activar Supabase (opcional)

Sin claves, la app funciona 100 % local. Para cuentas reales:

1. Crea un proyecto gratis en [supabase.com](https://supabase.com)
2. **SQL Editor** → ejecuta `supabase/schema.sql` (crea `profiles`, `progress`, `game_saves`, trigger de alta y políticas RLS)
3. **Settings → API**: copia *Project URL* y *anon public key*
4. Copia `.env.example` → `.env` y pega las dos variables; en GitHub añádelas también como **Secrets de Actions** (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) — el workflow ya las inyecta
5. Redeploy (`git push`): el formulario de «Mi progreso» queda operativo

La web incluye la explicación paso a paso en la página **`/configurar-supabase`**.

**Cómo guarda el progreso**: una fila por tarea en `progress` (`user_id`, `game_id` = `dw1|dw2|dw3`, `task_id`, `completed`), con upsert en cada check y fusión por unión al iniciar sesión.

## ✏️ Editar o ampliar las guías

Todo vive en `src/data/dw1.js`, `dw2.js` y `dw3.js`. Una tarea es un objeto:

```js
t('dw1-agumon', 'Recluta a Agumon (+1)', {
  loc: 'Native Forest...',   // 📍 ubicación
  cat: 'Reclutamiento',      // Historia | Reclutamiento | Jefe | Misión | Objeto clave | Sistema | Opcional | Postgame
  pts: 1, lvl: 'Rookie',     // (DW1) puntos de prosperidad
  boss: 'Equipo del jefe',   // ⚔️ opcional
  req: 'Requisitos...',      // 🔑 opcional
  how: 'Paso a paso...',     // 🪜 el texto principal
  reward: 'Recompensa...',   // 🎁 opcional
  tip: 'Consejo...',         // 💡 opcional
})
```

El `id` es permanente (se usa como clave del progreso): no lo renombres si ya hay usuarios con datos guardados.

## 📚 Fuentes

Guías de la comunidad de las que parte este contenido, reorganizado y reescrito en español:
Almar's Guides (DW1/DW2) · Recruitment Guide de SpaceWalker (GameFAQs) · Digimon World PSX Wiki ·
PSLegends/GameTips · StrategyWiki (DW2) · Digimon Wiki/Neoseeker (DW2) · StratsWiki (DW3) ·
Walkthrough de Divinesage (GameFAQs, DW3). Enlaces completos en la portada de la web.

---

> Proyecto de fans sin afiliación con Bandai Namco. *Digimon* y *Digimon World* son marcas de sus respectivos propietarios.
