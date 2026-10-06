"use client";

import { useState, FormEvent } from "react";

const REGIONS = [
  "SF Bay Area",
  "Sierra/foothills",
  "North Coast",
  "Central Coast",
  "Southern California",
  "Pacific Northwest",
  "Midwest",
  "Northeast",
  "Other",
];

const SPECIES = [
  "Golden chanterelles",
  "King boletes",
  "Black trumpets",
  "Candy caps",
  "Morels",
  "Burn morels",
  "Chicken of the woods",
  "Lion's mane",
  "Oysters",
];

const EXPERIENCE = [
  { value: "new", label: "New to foraging" },
  { value: "hobbyist", label: "Hobbyist" },
  { value: "serious", label: "Serious forager" },
  { value: "commercial", label: "Commercial picker" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm() {
  const [species, setSpecies] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function toggleSpecies(s: string) {
    setSpecies((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if ((data.get("company") as string)?.length) {
      setStatus("success");
      setMessage("Thanks! You're on the list.");
      return;
    }

    const payload = {
      email: data.get("email"),
      region: data.get("region"),
      species,
      experience: data.get("experience"),
      can_test_iphone: data.get("can_test_iphone") === "on",
      company: data.get("company") || "",
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json();
      if (res.ok && body.ok) {
        setStatus("success");
        setMessage("Thanks! You're on the list — we'll email when the winter beta opens.");
        form.reset();
        setSpecies([]);
      } else {
        setStatus("error");
        setMessage(body.error || "Something went wrong. Try again in a moment.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-sm">
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Join the FieldScout waitlist">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email <span aria-hidden>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>

      {/* Honeypot — hidden from real users via CSS, not display:none, to keep layout stable. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="region" className="block text-sm font-medium mb-1">
          Home region
        </label>
        <select
          id="region"
          name="region"
          defaultValue=""
          className="w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
        >
          <option value="" disabled>
            Select a region
          </option>
          {REGIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <span className="block text-sm font-medium mb-1">Species you're after</span>
        <div className="flex flex-wrap gap-2">
          {SPECIES.map((s) => {
            const active = species.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleSpecies(s)}
                aria-pressed={active}
                className={
                  "rounded-full border px-3 py-1 text-xs transition-colors " +
                  (active
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-fg)]"
                    : "border-[var(--border)] bg-[var(--card)] text-[var(--fg)]")
                }
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium mb-1">Experience level</span>
        <div className="flex flex-wrap gap-4">
          {EXPERIENCE.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm">
              <input type="radio" name="experience" value={opt.value} required />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="can_test_iphone" />
        I can test on iPhone this winter
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-[var(--accent)] text-[var(--accent-fg)] px-4 py-2 text-sm font-medium disabled:opacity-60"
      >
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
      </button>

      {status === "error" && (
        <p className="text-sm text-[var(--band-over)]" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
