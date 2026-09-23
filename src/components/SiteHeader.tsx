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
      <div className="max-w-5xl mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-display)] text-base">
          Luke Mbogo
        </Link>
        <div className="flex items-center gap-6">
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
      </div>
    </header>
  );
}
