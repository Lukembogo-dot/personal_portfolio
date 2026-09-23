import { getCertifications } from "@/lib/content-store";

export const dynamic = "force-dynamic";

export default async function CertificationsPage() {
  const certifications = await getCertifications();

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-16">
      <p className="text-sm text-[var(--fg-dim)] mb-2">Professional development</p>
      <h1 className="font-[family-name:var(--font-display)] text-2xl mb-10">Certifications</h1>

      {certifications.length === 0 ? (
        <p className="text-sm text-[var(--fg-dim)]">No certifications added yet.</p>
      ) : (
        <div className="flex flex-col gap-5">
          {certifications.map((certification) => (
            <article key={certification.slug} className="border border-[var(--line)] rounded-lg p-5">
              <h2 className="font-[family-name:var(--font-display)] text-lg">{certification.title}</h2>
              <p className="text-sm text-[var(--fg-dim)] mt-1">
                {certification.issuer}
                {certification.date ? ` · ${certification.date}` : ""}
              </p>
              {certification.credentialId && (
                <p className="text-sm text-[var(--fg-dim)] mt-2">Credential ID: {certification.credentialId}</p>
              )}
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                {certification.pdfFilename && (
                  <a
                    href={`/api/certifications/${encodeURIComponent(certification.pdfFilename)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] border-b border-[var(--accent)] pb-0.5"
                  >
                    View certificate PDF ↗
                  </a>
                )}
                {certification.badgeUrl && (
                  <a
                    href={certification.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] border-b border-[var(--accent)] pb-0.5"
                  >
                    {certification.badgeLabel || "View badge"} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}