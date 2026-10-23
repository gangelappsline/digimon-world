-- ══════════════════════════════════════════════════════════════════════
--  Digimon World Guide Hub — Esquema de Supabase
--  Pégalo completo en: Supabase Dashboard → SQL Editor → New query → Run
--
--  Crea:
--   • public.profiles  → datos de cada Tamer (1 fila por usuario)
--   • public.progress  → 1 fila por tarea marcada (game_id + task_id)
--   • public.game_saves→ (opcional) snapshot JSON completo por juego
--  Todo con Row Level Security: cada quien solo ve/edita lo suyo.
-- ══════════════════════════════════════════════════════════════════════

create extension if not exists "pgcrypto";

-- ── PROFILES ──────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text,
  display_name text,
  favorite_game text check (favorite_game in ('dw1', 'dw2', 'dw3')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ── PROGRESS (checklist) ─────────────────────────────────────────────
-- game_id: 'dw1' | 'dw2' | 'dw3'   task_id: id de la tarea en src/data/*
create table if not exists public.progress (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  game_id    text not null check (game_id in ('dw1', 'dw2', 'dw3')),
  task_id    text not null,
  completed  boolean not null default true,
  updated_at timestamptz not null default now(),
  unique (user_id, game_id, task_id)
);
create index if not exists progress_user_game_idx on public.progress (user_id, game_id);

-- ── GAME_SAVES (snapshot JSON — respaldo completo de una partida) ────
create table if not exists public.game_saves (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  game_id    text not null check (game_id in ('dw1', 'dw2', 'dw3')),
  save_name  text not null default 'Partida principal',
  data       jsonb not null default '{}'::jsonb,  -- { "taskId": true, ... }
  updated_at timestamptz not null default now(),
  unique (user_id, game_id, save_name)
);

-- ── Trigger updated_at ────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

drop trigger if exists profiles_updated on public.profiles;
create trigger profiles_updated before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists progress_updated on public.progress;
create trigger progress_updated before update on public.progress
  for each row execute function public.set_updated_at();

drop trigger if exists game_saves_updated on public.game_saves;
create trigger game_saves_updated before update on public.game_saves
  for each row execute function public.set_updated_at();

-- ── Crear profile automáticamente al registrarse ─────────────────────
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, display_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── Row Level Security ────────────────────────────────────────────────
alter table public.profiles   enable row level security;
alter table public.progress   enable row level security;
alter table public.game_saves enable row level security;

drop policy if exists "profiles: leer lo propio"    on public.profiles;
drop policy if exists "profiles: editar lo propio"  on public.profiles;
drop policy if exists "progress: todo lo propio"    on public.progress;
drop policy if exists "game_saves: todo lo propio"  on public.game_saves;

create policy "profiles: leer lo propio"   on public.profiles
  for select using (auth.uid() = id);
create policy "profiles: editar lo propio" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "profiles: insertar lo propio" on public.profiles
  for insert with check (auth.uid() = id);

create policy "progress: todo lo propio" on public.progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "game_saves: todo lo propio" on public.game_saves
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ── Vista de resumen (útil para estadísticas / leaderboards futuros)─
create or replace view public.my_summary as
select game_id, count(*) filter (where completed) as tasks_done, max(updated_at) as last_played
from public.progress
where user_id = auth.uid()
group by game_id;
