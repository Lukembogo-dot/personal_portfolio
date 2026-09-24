import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)]">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-display)] text-base">
          Luke Mbogo
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex gap-6 text-sm">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--fg-dim)] hover:text-[var(--fg)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/certifications"
            className="shrink-0 text-sm border border-[var(--accent)] text-[var(--accent)] rounded px-3 py-1.5 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"
          >
            Certifications
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <details className="relative">
            <summary className="cursor-pointer list-none rounded border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--fg-dim)] marker:hidden">
              Menu
            </summary>
            <nav className="absolute right-0 top-11 z-20 flex min-w-44 flex-col gap-1 rounded border border-[var(--line)] bg-[var(--bg-raised)] p-2 text-sm shadow-lg">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded px-3 py-2 text-[var(--fg-dim)] hover:bg-[var(--bg)] hover:text-[var(--fg)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/certifications"
                className="rounded px-3 py-2 text-[var(--accent)] hover:bg-[var(--bg)]"
              >
                Certifications
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
