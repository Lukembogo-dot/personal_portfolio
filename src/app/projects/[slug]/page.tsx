import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, getProjectImages, getProjectPdfs } from "@/lib/content-store";
import Carousel from "@/components/Carousel";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const pdfs = await getProjectPdfs(slug);
  const images = await getProjectImages(slug);
  const links = project.links.filter(
    (link, index, allLinks) => {
      let isExternalUrl = false;
      try {
        const url = new URL(link.url);
        isExternalUrl = url.protocol === "https:" || url.protocol === "http:";
      } catch {
        isExternalUrl = false;
      }

      return (
        isExternalUrl &&
        Boolean(link.label.trim()) &&
        allLinks.findIndex((candidate) => candidate.url === link.url) === index
      );
    }
  );

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-16">
      <Link
        href="/projects"
        className="text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]"
      >
        ← All projects
      </Link>

      <p className="mt-8 text-sm text-[var(--accent)]">{project.role}</p>
      <h1 className="mt-2 break-words font-[family-name:var(--font-display)] text-3xl lg:text-4xl">
        {project.name}
      </h1>

      {images.length > 0 && (
        <div className="mt-6">
          <Carousel slug={slug} images={images} />
        </div>
      )}

      <p className="mt-6 text-[var(--fg-dim)] max-w-2xl">{project.blurb}</p>

      {project.notes.length > 0 && (
        <ul className="mt-6 flex flex-col gap-1.5 text-sm text-[var(--fg-dim)]">
          {project.notes.map((note) => (
            <li key={note} className="flex gap-2">
              <span className="text-[var(--accent)]">–</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      )}

      {project.stack.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 border border-[var(--line)] rounded text-[var(--fg-dim)]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-[var(--line)]">
        <h2 className="text-sm text-[var(--fg-dim)] mb-4">Documents</h2>
        {pdfs.length === 0 ? (
          <p className="text-sm text-[var(--fg-dim)]">No documents attached yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {pdfs.map((pdf) => (
              <li key={pdf.filename}>
                <a
                  href={`/api/pdfs/${slug}/${encodeURIComponent(pdf.filename)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-sm text-[var(--accent)] border-b border-[var(--accent)] pb-0.5"
                >
                  {pdf.originalName}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {links.length > 0 && (
        <div className="mt-8 pt-6 border-t border-[var(--line)]">
          <p className="text-xs text-[var(--fg-dim)] mb-3">External link</p>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--accent)] border border-[var(--accent)] rounded px-3 py-1.5 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
