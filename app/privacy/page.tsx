export const metadata = { title: "Privacy Policy — FieldScout" };

export default function PrivacyPage() {
  return (
    <main className="container-page py-16 max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-[var(--muted)] text-sm mb-6">Placeholder — full policy coming before public beta.</p>
      <p className="text-sm">
        FieldScout is in a private pre-launch phase. Finds you log are private by default; public
        finds are only ever shown as coarse areas, never exact points. We'll publish a complete
        privacy policy before the beta opens. Questions in the meantime: {" "}
        <a className="underline" href="mailto:robbe@edgeeffectstudio.com">robbe@edgeeffectstudio.com</a>.
      </p>
      <a className="inline-block mt-8 underline text-sm" href="/">← Back home</a>
    </main>
  );
}
