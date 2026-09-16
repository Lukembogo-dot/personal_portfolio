export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-16">
      <p className="text-sm text-[var(--fg-dim)] mb-4">Contact</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl max-w-xl">
        Working on something that needs a hand?
      </h1>
      <p className="mt-4 text-[var(--fg-dim)] max-w-md">
        I&apos;m open to backend, QA, and data engineering work.
      </p>
      <a
        href="mailto:you@example.com"
        className="mt-6 inline-block text-[var(--accent)] border-b border-[var(--accent)] pb-0.5"
      >
        you@example.com
      </a>
    </div>
  );
}
