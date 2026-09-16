import Link from "next/link";
import { getProjects } from "@/lib/content-store";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-16 py-16">
      <p className="text-sm text-[var(--fg-dim)] mb-10">Projects</p>

      {projects.length === 0 ? (
        <p className="text-sm text-[var(--fg-dim)]">
          No projects published yet.
        </p>
      ) : (
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="grid grid-cols-1 lg:grid-cols-[3rem_1fr_auto] gap-4 lg:gap-8 py-8 border-b border-[var(--line)] items-baseline group"
            >
              <span className="font-[family-name:var(--font-display)] text-sm text-[var(--fg-dim)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl group-hover:text-[var(--accent)] transition-colors">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--fg-dim)]">{project.role}</p>
              </div>
              <span className="text-sm text-[var(--fg-dim)] hidden lg:block">
                View →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
