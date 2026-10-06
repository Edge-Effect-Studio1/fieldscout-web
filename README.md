# FieldScout website

Next.js (App Router, TypeScript, Tailwind) waitlist landing page. Zero-config deploy to Vercel.

## Local dev

```bash
cd web
npm install
npm run dev
```

## Deploy to Vercel (new project, Robbe's existing account)

1. In the Vercel dashboard: **Add New… → Project**, import `Edge-Effect-Studio1/FieldScout` from GitHub.
2. Set **Root Directory** to `web` (the repo root has other, unrelated folders).
3. Framework preset auto-detects **Next.js** — leave build/output settings as default.
4. Add environment variables (see below) under Project Settings → Environment Variables, for Production (and Preview if you want preview deploys to write real rows).
5. Deploy. No other config needed.

## Environment variables

Copy `.env.example` to `.env.local` for local dev. In Vercel, set:

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
