import Link from "next/link";
import { getDocuments, getPosts } from "@/lib/content-store";

export const dynamic = "force-dynamic";

export default async function DocumentsPage({
  searchParams,
}: {
  searchParams: Promise<{ post?: string }>;
}) {
  const { post: postSlug } = await searchParams;
  const [documents, posts] = await Promise.all([getDocuments(), getPosts()]);
  const postTitles = new Map(posts.map((post) => [post.slug, post.title]));
  const visibleDocuments = postSlug
    ? documents.filter((document) => document.postSlug === postSlug)
    : documents;
  const pageTitle = postSlug && postTitles.has(postSlug)
    ? `Documentation for ${postTitles.get(postSlug)}`
    : "Project documentation";

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-16">
      <p className="text-sm text-[var(--fg-dim)] mb-2">Documents</p>
      <h1 className="font-[family-name:var(--font-display)] text-2xl mb-10">
        {pageTitle}
      </h1>

      {visibleDocuments.length === 0 ? (
        <p className="text-sm text-[var(--fg-dim)]">
          {postSlug ? "No documentation is attached to this post yet." : "No documents uploaded yet."}
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          <ul className="flex flex-col gap-4">
            {visibleDocuments.map((document) => (
              <li key={document.filename}>
                <a
                  href={`/api/documents/${encodeURIComponent(document.filename)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--accent)] border-b border-[var(--accent)] pb-0.5"
                >
                  {document.title}
                </a>
                {document.description && <p className="text-sm text-[var(--fg-dim)] mt-1">{document.description}</p>}
                {document.postSlug && postTitles.has(document.postSlug) && (
                  <p className="text-xs text-[var(--fg-dim)] mt-1">
                    Related post: <Link href={`/blog/${document.postSlug}`} className="hover:text-[var(--fg)]">{postTitles.get(document.postSlug)}</Link>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}