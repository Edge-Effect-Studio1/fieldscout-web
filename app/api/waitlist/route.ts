import { NextRequest, NextResponse } from "next/server";

// In-memory rate limit: 5 submissions per IP per hour.
// Resets on redeploy/cold start — fine for a waitlist form, not a security boundary.
const hits = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept so bots don't learn their fill was rejected.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
  }

  const row = {
    email,
    region: typeof body.region === "string" ? body.region : null,
    species: Array.isArray(body.species) ? body.species : [],
    experience: typeof body.experience === "string" ? body.experience : null,
    can_test_iphone: Boolean(body.can_test_iphone),
  };

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    // No Supabase configured yet (e.g. preview deploy) — log and succeed
    // so the page always works end to end.
    console.log("[waitlist] (no Supabase configured) signup:", row);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(`${url}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[waitlist] Supabase insert failed:", res.status, text);
      return NextResponse.json(
        { ok: false, error: "Could not save signup. Try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Supabase request error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save signup. Try again." },
      { status: 502 }
    );
  }
}
