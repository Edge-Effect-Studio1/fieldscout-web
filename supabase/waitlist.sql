-- FieldScout waitlist table.
-- Run in the Supabase SQL editor for the FieldScout project (do not reuse
-- another product's Supabase project — see docs/06-website/website-plan.md).

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  region text,
  species text[] not null default '{}',
  experience text,
  can_test_iphone boolean not null default false
);

create unique index if not exists waitlist_email_key on public.waitlist (email);

alter table public.waitlist enable row level security;

-- No public select/insert/update/delete policies are created, which means
-- only the service_role key (used server-side in app/api/waitlist/route.ts)
-- can write or read. Anonymous/browser clients using the anon key get
-- nothing — RLS defaults to deny when no policy matches.
