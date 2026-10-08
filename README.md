# FieldScout website

Next.js (App Router, TypeScript, Tailwind) waitlist landing page. Zero-config deploy to Vercel.

## Local dev

```bash
cd web
npm install
npm run dev
```

## Deploy to Vercel

Source of truth is `web/` in the private repo. Vercel deploys from the public mirror `Edge-Effect-Studio1/fieldscout-web`. Publish changes with:

```bash
git subtree push --prefix=web https://github.com/Edge-Effect-Studio1/fieldscout-web.git main
```

1. The Vercel project must live under the team **Edge Effect Projects** (slug `edge-effect-studio`), never FieldScope / `field-scope1`. The current deployment is in the wrong team and must be moved.
2. Import `Edge-Effect-Studio1/fieldscout-web` (repo root is the app; no Root Directory override needed). Framework preset auto-detects **Next.js**; leave build/output settings as default.
3. Enter the environment variables below in the Vercel dashboard (Project Settings → Environment Variables), for Production (and Preview if you want preview deploys to write real rows).
4. Deployment URL (moved 2026-10-08, team Edge Effect Projects, project fieldscout-web): https://fieldscout-web-alpha.vercel.app. Vercel Authentication is on, so the site stays private until launch; turn it off under Settings → Deployment Protection to go public. The old copy in field-scope1 is to be deleted by Robbe.

## Environment variables

Copy `.env.example` to `.env.local` for local dev. In the Vercel dashboard, enter:

| Variable | Where it's used | Notes |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | server (route handler) | Your Supabase project URL, e.g. `https://xxxx.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | server only, never sent to the browser | Supabase project → Settings → API → `service_role` secret |

If either is missing, `/api/waitlist` logs the signup and still returns success — the page works fully in preview/local without Supabase configured.

## Create the Supabase table

1. Create (or reuse) a Supabase project for FieldScout — **do not** reuse another product's project.
2. Open SQL Editor and run `supabase/waitlist.sql` from this repo. It creates the `waitlist` table with RLS enabled and no public policies, so only the `service_role` key (used server-side) can read or write.

## Export the waitlist

In the Supabase dashboard: Table Editor → `waitlist` → **Export** → CSV. Or via SQL Editor:

```sql
select * from public.waitlist order by created_at desc;
```

Or via the REST API with the service role key:

```bash
curl "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/waitlist?select=*&order=created_at.desc" \
  -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY"
```

## Notes

- No external UI kit, no paid services, no client JS beyond the waitlist form.
- Honeypot field (`company`) and an in-memory per-IP rate limit (5/hour) guard `/api/waitlist`; the rate limit resets on redeploy/cold start and is not a hard security boundary.
- Dark mode follows system preference (`prefers-color-scheme`), no toggle/JS needed.
