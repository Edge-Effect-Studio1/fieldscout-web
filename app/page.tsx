import WaitlistForm from "@/components/WaitlistForm";
import HexScale, { HexScaleLegend } from "@/components/HexScale";

const DRIVERS = [
  {
    title: "Weather",
    body: "Recent and forecast rainfall, temperature swings, and soil moisture trends that trigger or stall fruiting.",
  },
  {
    title: "Terrain",
    body: "Elevation, slope, and aspect — south-facing slopes dry out faster, drainages hold moisture longer.",
  },
  {
    title: "Forest cover",
    body: "Host tree composition and canopy — oak and conifer associations matter as much as weather.",
  },
  {
    title: "Sightings",
    body: "Recent confirmed finds (yours and the community's) sharpen the forecast for your exact area.",
  },
];

const BANDS = [
  { label: "Dormant", color: "var(--band-dormant)", body: "Conditions haven't triggered fruiting yet." },
  { label: "Early", color: "var(--band-early)", body: "First flushes possible; patchy and small." },
  { label: "Prime", color: "var(--band-prime)", body: "Peak fruiting window for this species and area." },
  { label: "Late", color: "var(--band-late)", body: "Window closing; quality and abundance dropping." },
  { label: "Over", color: "var(--band-over)", body: "Season's done here until conditions reset." },
];

const WINTER_SPECIES = ["Golden chanterelles", "King boletes", "Black trumpets", "Candy caps"];
const SPRING_SPECIES = ["Morels", "Burn morels"];
const SPOT_SPECIES = ["Chicken of the woods", "Lion's mane", "Oysters"];

const FAQ = [
  {
    q: "Does FieldScout tell me if a mushroom is safe to eat?",
    a: "No. FieldScout forecasts habitat and timing — when and where a species is likely fruiting. It never makes edibility calls. Never eat a mushroom based on an app; confirm identification with an expert, a local mycological society, or a dedicated ID tool.",
  },
  {
    q: "How is this different from an ID app?",
    a: "ID apps answer \"what is this mushroom in my hand.\" FieldScout answers \"where and when should I look\" — before you're in the woods. We link out to iNaturalist and Seek for identification.",
  },
  {
    q: "Where does the forecast data come from?",
    a: "A blend of weather and soil-moisture models, terrain and forest-cover data, and recent sightings — yours and, in aggregate, the community's. See \"How it works\" above for the four inputs.",
  },
  {
    q: "Is my location data private?",
    a: "Yes. Finds are private by default. If you choose to share one publicly, it's shown only as a coarse area on the map — never an exact point — so your spots stay yours.",
  },
  {
    q: "When and where is the beta?",
    a: "Winter 2026–27, with a small group of Bay Area testers on iPhone via TestFlight. Free during the beta; founder pricing kicks in after.",
  },
  {
    q: "What if I'm not in the Bay Area?",
    a: "Join the waitlist anyway and tell us your region — it helps us plan where to expand next.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="container-page pt-16 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Know when and where mushrooms are fruiting.
          </h1>
          <p className="text-[var(--muted)] text-lg mb-8 max-w-md">
            FieldScout forecasts per-species fruiting conditions from weather, terrain, forest
            cover, and sightings — so you spend less time walking and more time finding.
          </p>
          <div className="max-w-sm">
            <WaitlistForm />
          </div>
        </div>
        <div className="order-first md:order-last">
          <HexScale />
          <div className="mt-3">
            <HexScaleLegend />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-page py-12 md:py-16 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold mb-2">How it works</h2>
        <p className="text-[var(--muted)] mb-8 max-w-2xl">
          Four inputs feed a per-species forecast for your area, shown on a simple five-band
          scale so you know whether it's worth the drive.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {DRIVERS.map((d) => (
            <div key={d.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
              <h3 className="font-medium mb-1">{d.title}</h3>
              <p className="text-sm text-[var(--muted)]">{d.body}</p>
            </div>
          ))}
        </div>
        <h3 className="font-medium mb-3">The five-band scale</h3>
        <div className="grid sm:grid-cols-5 gap-3">
          {BANDS.map((b) => (
            <div key={b.label} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3">
              <span
                className="inline-block w-3 h-3 rounded-sm mb-2"
                style={{ background: b.color }}
                aria-hidden
              />
              <div className="font-medium text-sm mb-1">{b.label}</div>
              <p className="text-xs text-[var(--muted)]">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Species covered */}
      <section className="container-page py-12 md:py-16 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold mb-2">Species covered at launch</h2>
        <p className="text-[var(--muted)] mb-8 max-w-2xl">
          Starting in Northern California, expanding by season and by where testers are.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <SpeciesGroup title="Winter" items={WINTER_SPECIES} />
          <SpeciesGroup title="Spring" items={SPRING_SPECIES} />
          <SpeciesGroup title="Your spots" items={SPOT_SPECIES} note="Tracked year-round wherever you forage." />
        </div>
      </section>

      {/* Privacy */}
      <section className="container-page py-12 md:py-16 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold mb-4">Your spots stay yours</h2>
        <ul className="space-y-2 text-sm max-w-2xl list-disc pl-5 text-[var(--muted)]">
          <li>Finds are private by default — nobody sees your location unless you choose to share.</li>
          <li>Public finds are shown only as coarse areas on the map, never exact points.</li>
          <li>Your data, in aggregate, helps improve the forecast model for everyone — never sold.</li>
        </ul>
      </section>

      {/* Safety stance */}
      <section className="container-page py-12 md:py-16 border-t border-[var(--border)]">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 max-w-2xl">
          <h2 className="text-xl font-semibold mb-2">We forecast timing, never edibility</h2>
          <p className="text-sm text-[var(--muted)] mb-3">
            FieldScout tells you when and where a species is likely fruiting — nothing more.{" "}
            <strong className="text-[var(--fg)]">Never eat a mushroom based on an app.</strong>{" "}
            Always confirm identification independently.
          </p>
          <p className="text-sm text-[var(--muted)]">
            For identification, we link out to{" "}
            <a className="underline" href="https://www.inaturalist.org/" target="_blank" rel="noopener noreferrer">
              iNaturalist
            </a>{" "}
            and{" "}
            <a className="underline" href="https://www.inaturalist.org/pages/seek_app" target="_blank" rel="noopener noreferrer">
              Seek
            </a>
            , and to local mycological societies.
          </p>
        </div>
      </section>

      {/* Beta details */}
      <section className="container-page py-12 md:py-16 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold mb-4">Beta details</h2>
        <ul className="space-y-2 text-sm max-w-2xl list-disc pl-5 text-[var(--muted)]">
          <li>Small group of Bay Area testers, delivered via TestFlight on iPhone.</li>
          <li>Winter 2026–27 season.</li>
          <li>Free during the beta.</li>
          <li>Founder pricing for early testers after the beta ends.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="container-page py-12 md:py-16 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
        <div className="max-w-2xl divide-y divide-[var(--border)]">
          {FAQ.map((item) => (
            <details key={item.q} className="py-4 group">
              <summary className="cursor-pointer font-medium text-sm list-none flex justify-between items-center gap-4">
                {item.q}
                <span className="text-[var(--muted)] group-open:rotate-45 transition-transform" aria-hidden>
                  +
                </span>
              </summary>
              <p className="text-sm text-[var(--muted)] mt-2">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container-page py-10 border-t border-[var(--border)] text-sm text-[var(--muted)]">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div>
            <p className="font-medium text-[var(--fg)]">FieldScout</p>
            <p>A project by Edge Effect Studio.</p>
            <p>
              <a className="underline" href="mailto:robbe@edgeeffectstudio.com">
                robbe@edgeeffectstudio.com
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <a className="underline" href="/privacy">Privacy Policy</a>
            <a className="underline" href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SpeciesGroup({ title, items, note }: { title: string; items: string[]; note?: string }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
      <h3 className="font-medium mb-2">{title}</h3>
      <ul className="text-sm text-[var(--muted)] space-y-1">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {note && <p className="text-xs text-[var(--muted)] mt-3 italic">{note}</p>}
    </div>
  );
}
