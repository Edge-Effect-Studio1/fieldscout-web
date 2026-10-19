import { SPECIES } from "./data";

export const metadata = {
  title: "When do mushrooms show up? West Coast seasons by species — FieldScout",
  description: "Month-by-month sighting patterns for popular West Coast mushrooms, from research-grade iNaturalist observations.",
};

export default function SeasonIndex() {
  return (
    <main className="container-page py-12 max-w-2xl">
      <a className="underline text-sm" href="/">← FieldScout</a>
      <h1 className="text-3xl font-semibold mt-4 mb-2">West Coast mushroom seasons</h1>
      <p className="text-[var(--muted)] mb-8">
        When popular species are most often sighted in California and in Oregon &amp; Washington, from research-grade iNaturalist
        observations. FieldScout adds weather, terrain and forest cover to forecast the season for your exact area.
      </p>
      <ul className="grid gap-2">
        {SPECIES.map((s) => (
          <li key={s.slug}>
            <a className="underline" href={`/season/${s.slug}`}>{s.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
