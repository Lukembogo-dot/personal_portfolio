export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] mt-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-[var(--fg-dim)]">
        <p>Luke Mbogo — Nairobi, Kenya</p>
        <div className="flex gap-4">
          <a href="https://github.com" className="hover:text-[var(--fg)]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/luke-mbogo254/" className="hover:text-[var(--fg)]">
            LinkedIn
          </a>
          <a href="mailto:you@example.com" className="hover:text-[var(--fg)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
