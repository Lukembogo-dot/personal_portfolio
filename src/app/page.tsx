import Link from "next/link";
import { getProjects } from "@/lib/content-store";
import Marquee from "@/components/Marquee";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProjects = await getProjects();
  const featured = allProjects.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto">
      <section className="px-6 lg:px-16 pt-16 pb-20">
        <p className="text-sm text-[var(--accent)] mb-4">
          IT Professional | Software, Cloud and Network Infrastructure, Cybersecurity, QA & Technology — Nairobi, Kenya
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[2.25rem] leading-[1.15] lg:text-[3rem] max-w-3xl">
          I solve IT problems wherever they sit — infrastructure, quality, or the code itself.
        </h1>
        <p className="mt-6 text-lg text-[var(--fg-dim)] max-w-[56ch]">
          Business IT graduate with hands-on experience across ICT administration, QA/testing, 
          backend development, and data engineering. I&apos;ve built and shipped platforms end to end, 
          from multi-tenant SaaS to data pipelines, not just one layer of them.
        </p>
        <div className="mt-8 flex gap-4 text-sm">
          <Link
            href="/projects"
            className="border border-[var(--accent)] text-[var(--accent)] rounded px-4 py-2"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="border border-[var(--line)] rounded px-4 py-2 text-[var(--fg-dim)]"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Marquee
        items={[
          "IT PROFESSIONAL",
          "QA & TESTING",
          "DEVOPS",
          "BACKEND DEVELOPMENT",
          "CYBERSECURITY",
          "NAIROBI, KENYA",
        ]}
      />

      {featured.length > 0 && (
        <section className="px-6 lg:px-16 py-16 border-t border-[var(--line)]">
          <div className="flex items-center justify-between mb-10">
            <p className="text-sm text-[var(--fg-dim)]">Featured work</p>
            <Link href="/projects" className="text-sm text-[var(--accent)]">
              All projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block border border-[var(--line)] rounded-lg p-5 hover:border-[var(--accent)] transition-colors"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--fg-dim)]">{project.role}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
