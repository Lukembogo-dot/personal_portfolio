export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-16 py-16">
      <p className="text-sm text-[var(--fg-dim)] mb-4">Contact</p>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight max-w-xl">
            Working on something that needs a hand?
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--fg-dim)]">
            I&apos;m open to backend development, QA/testing, systems work, and data engineering projects across product, operations, and automation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:lukembogo5@gmail.com"
              className="inline-flex items-center rounded border border-[var(--accent)] bg-[var(--accent)]/10 px-4 py-2 text-sm font-medium text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            >
              lukembogo5@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/luke-mbogo254/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded border border-[var(--line)] px-4 py-2 text-sm text-[var(--fg)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Lukembogo-dot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded border border-[var(--line)] px-4 py-2 text-sm text-[var(--fg)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-5">
          <p className="text-sm text-[var(--fg-dim)]">Connect</p>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-[var(--fg-dim)]">Location</dt>
              <dd className="mt-1 text-[var(--fg)]">Nairobi, Kenya</dd>
            </div>
            <div>
              <dt className="text-[var(--fg-dim)]">Focus</dt>
              <dd className="mt-1 text-[var(--fg)]">Backend • QA • Data • Infrastructure</dd>
            </div>
            <div>
              <dt className="text-[var(--fg-dim)]">Availability</dt>
              <dd className="mt-1 text-[var(--fg)]">Remote, contract, and project-based work</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="mt-16 border-t border-[var(--line)] pt-10">
        <p className="text-sm text-[var(--fg-dim)] mb-6">What I can help with</p>
        <ul className="grid gap-3 text-[var(--fg)] sm:grid-cols-2">
          {[
            "Backend APIs and application logic",
            "QA strategy, test automation, and release confidence",
            "Data pipelines, ETL, and reporting workflows",
            "Infrastructure support and automation for reliable systems",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 rounded border border-[var(--line)] bg-[var(--bg-raised)] px-4 py-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
