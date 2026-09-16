import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { getPost } from "@/lib/content-store";

export const dynamic = "force-dynamic";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const html = await marked.parse(post.body || "");

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-16">
      <Link href="/blog" className="text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]">
        ← All posts
      </Link>

      <p className="mt-8 text-xs text-[var(--fg-dim)]">{formatDate(post.date)}</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl lg:text-4xl">
        {post.title}
      </h1>

      <div
        className="prose-post mt-10 text-[var(--fg)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
