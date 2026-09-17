import Link from "next/link";
import { getAllProjectPdfs } from "@/lib/content-store";

export const dynamic = "force-dynamic";

export default async function DocumentsPage() {
  const groups = await getAllProjectPdfs();

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-16">
      <p className="text-sm text-[var(--fg-dim)] mb-2">Documents</p>
      <h1 className="font-[family-name:var(--font-display)] text-2xl mb-10">
        Project documentation
      </h1>

      {groups.length === 0 ? (
        <p className="text-sm text-[var(--fg-dim)]">No documents uploaded yet.</p>
      ) : (
        <div className="flex flex-col gap-10">
          {groups.map(({ project, pdfs }) => (
            <div key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="font-[family-name:var(--font-display)] text-base hover:text-[var(--accent)] transition-colors"
              >
                {project.name}
              </Link>
              <ul className="mt-3 flex flex-col gap-2">
                {pdfs.map((pdf) => (
                  <li key={pdf.filename}>
                    <a
                      href={`/api/pdfs/${project.slug}/${encodeURIComponent(pdf.filename)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--accent)] border-b border-[var(--accent)] pb-0.5"
                    >
                      {pdf.originalName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}