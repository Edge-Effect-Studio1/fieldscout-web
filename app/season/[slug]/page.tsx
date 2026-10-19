import { notFound } from "next/navigation";
import WaitlistForm from "@/components/WaitlistForm";
import { MONTHS, SPECIES } from "../data";

export function generateStaticParams() {
  return SPECIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SPECIES.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `When do ${s.name.toLowerCase()} show up in California, Oregon and Washington? — FieldScout`,
    description: `Month-by-month sighting pattern for ${s.name.toLowerCase()} on the West Coast, from research-grade iNaturalist observations.`,
  };
}

function Bars({ share, peak }: { share: number[]; peak: string[] }) {
  const max = Math.max(...share);
  return (
    <div className="flex items-end gap-1 h-28" role="img" aria-label={`Peak months: ${peak.join(", ")}`}>
      {share.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
          <div
            className="w-full rounded-t"
            style={{ height: `${Math.max(2, (v / max) * 100)}%`, background: peak.includes(MONTHS[i]) ? "var(--band-prime)" : "var(--band-early)" }}
          />
          <span className="text-[10px] mt-1 text-[var(--muted)]">{MONTHS[i][0]}</span>
        </div>
      ))}
    </div>
  );
}

export default async function SpeciesSeasonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SPECIES.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <main className="container-page py-12 max-w-2xl">
      <a className="underline text-sm" href="/season">← All species</a>
      <h1 className="text-3xl font-semibold mt-4 mb-2">When do {s.name.toLowerCase()} show up on the West Coast?</h1>
      <p className="text-[var(--muted)] mb-8">
        Month-by-month pattern of research-grade iNaturalist sightings ({s.taxa.join(", ")}). Taller bars mean a larger share of
        that region&apos;s sightings fell in that month.
      </p>
      {Object.entries(s.regions).map(([region, r]) => (
        <section key={region} className="mb-8 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
          <h2 className="text-xl font-semibold mb-1">{region}</h2>
          <p className="text-sm text-[var(--muted)] mb-4">
            Busiest months: <strong>{r.peak.join(", ")}</strong> · {r.n.toLocaleString()} observations in our dataset
          </p>
          <Bars share={r.share} peak={r.peak} />
        </section>
      ))}
      <h2 className="text-lg font-semibold mb-2">How to read this</h2>
      <p className="text-sm mb-3">
        Sightings are a proxy for fruiting, not a measurement of it. They follow where people go and when, so a busy month can
        reflect weekends, holidays and popular trails as much as the mushrooms. Rain, temperature and elevation shift the real
        season by weeks from year to year, which is what FieldScout&apos;s forecast adds on top of this pattern.
      </p>
      <p className="text-sm mb-3">
        FieldScout forecasts where and when a species is likely to be fruiting. It never says whether a mushroom is safe to eat;
        confirm any identification with an expert before you eat anything. Collecting rules vary by park and agency, so check the
        managing agency before you pick.
      </p>
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-3">Get the forecast for your area</h2>
        <WaitlistForm />
      </div>
    </main>
  );
}
