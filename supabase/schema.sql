-- 3X BOOKS — Schema Supabase
-- Rode este script inteiro no SQL Editor do painel:
-- https://supabase.com/dashboard/project/emnyioovbakygmqhmbpc/sql/new

-- ─────────────────────────────────────────────
-- Tabela de progresso do usuário (1 linha por usuário, id = auth.users.id)
-- ─────────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  name text not null default 'Leitor 3X',
  points integer not null default 0,
  completed_books text[] not null default '{}',
  quiz_results jsonb not null default '{}',
  quizzes_above_80 integer not null default 0,
  audiobooks_listened integer not null default 0,
  streak integer not null default 0,
  last_active_date date,
  activity_dates text[] not null default '{}',
  max_books_in_one_day integer not null default 0,
  books_completed_today jsonb not null default '{}',
  monthly_opens jsonb not null default '{}',
  is_premium boolean not null default false,
  is_admin boolean not null default false,
  unlocked_achievements text[] not null default '{}',
  font_scale numeric not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

-- ─────────────────────────────────────────────
-- Blinda is_admin / is_premium contra alteração pelo próprio cliente.
-- O app nunca deve poder se autopromover a admin ou premium via upsert;
-- essas colunas só mudam pelo gatilho abaixo ou manualmente no painel/SQL.
-- ─────────────────────────────────────────────
create or replace function public.protect_privileged_columns()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.is_admin := old.is_admin;
  new.is_premium := old.is_premium;
  return new;
end;
$$;

drop trigger if exists protect_privileged_columns_trigger on public.profiles;
create trigger protect_privileged_columns_trigger
  before update on public.profiles
  for each row execute procedure public.protect_privileged_columns();

-- ─────────────────────────────────────────────
-- Cria o perfil automaticamente ao cadastrar um novo usuário.
-- silvalucasfsa@gmail.com entra direto como administrador, com o
-- nível mais alto (Legado 3X = 2000+ pontos) e acesso premium liberado.
-- ─────────────────────────────────────────────
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  is_owner boolean := new.email = 'silvalucasfsa@gmail.com';
begin
  insert into public.profiles (id, email, name, points, is_premium, is_admin)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1)),
    case when is_owner then 2000 else 0 end,
    is_owner,
    is_owner
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
