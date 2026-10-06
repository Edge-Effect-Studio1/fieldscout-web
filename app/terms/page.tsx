export const metadata = { title: "Terms of Service — FieldScout" };

export default function TermsPage() {
  return (
    <main className="container-page py-16 max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Terms of Service</h1>
      <p className="text-[var(--muted)] text-sm mb-6">Placeholder — full terms coming before public beta.</p>
      <p className="text-sm">
        FieldScout forecasts habitat and timing conditions for mushroom fruiting. It is not an
        identification tool and never makes edibility claims — never eat a mushroom based on an
        app. Full terms will be published before the beta opens. Questions in the meantime: {" "}
        <a className="underline" href="mailto:robbe@edgeeffectstudio.com">robbe@edgeeffectstudio.com</a>.
      </p>
      <a className="inline-block mt-8 underline text-sm" href="/">← Back home</a>
    </main>
  );
}
