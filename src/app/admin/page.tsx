import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import {
  getDocuments,
  getCertifications,
  getProjectImages,
  getProjectPdfs,
  getProjects,
  getPosts,
  type DocumentEntry,
  type Certification,
  type PdfEntry,
} from "@/lib/content-store";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const token = (await cookies()).get("admin_token")?.value;
  const authed = verifyToken(token);
  const { error } = await searchParams;

  if (!authed) {
    return (
      <div className="max-w-sm mx-auto px-6 py-24">
        <form
          action="/api/admin/login"
          method="POST"
          className="border border-[var(--line)] rounded-lg p-6"
        >
          <h1 className="font-[family-name:var(--font-display)] text-xl mb-1">Admin</h1>
          <p className="text-sm text-[var(--fg-dim)] mb-6">
            Sign in to manage projects, PDFs, and blog posts.
          </p>
          {error && <p className="text-sm text-red-400 mb-4">Incorrect password.</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full bg-transparent border border-[var(--line)] rounded px-3 py-2 text-sm mb-4"
          />
          <button
            type="submit"
            className="w-full text-sm border border-[var(--accent)] text-[var(--accent)] rounded px-3 py-2"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }

  let projects: Awaited<ReturnType<typeof getProjects>> = [];
  let posts: Awaited<ReturnType<typeof getPosts>> = [];
  let pdfs: Record<string, PdfEntry[]> = {};
  let images: Record<string, PdfEntry[]> = {};
  let documents: DocumentEntry[] = [];
  let certifications: Certification[] = [];
  let loadError = "";

  try {
    projects = await getProjects();
    posts = await getPosts();
    documents = await getDocuments();
    certifications = await getCertifications();
    const pdfLists = await Promise.all(
      projects.map(async (p) => [p.slug, await getProjectPdfs(p.slug)] as const)
    );
    pdfs = Object.fromEntries(pdfLists);
    const imageLists = await Promise.all(
      projects.map(async (p) => [p.slug, await getProjectImages(p.slug)] as const)
    );
    images = Object.fromEntries(imageLists);
  } catch (err) {
    loadError = (err as Error).message;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-12">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-[family-name:var(--font-display)] text-2xl">Admin</h1>
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]"
          >
            Sign out
          </button>
        </form>
      </div>

      {loadError ? (
        <p className="text-sm text-red-400">
          Couldn&apos;t load content from GitHub: {loadError}. Check your GITHUB_TOKEN,
          GITHUB_OWNER, and GITHUB_REPO in .env.local.
        </p>
      ) : (
        <AdminDashboard
          initialProjects={projects}
          initialPosts={posts}
          initialPdfs={pdfs}
          initialImages={images}
          initialDocuments={documents}
          initialCertifications={certifications}
        />
      )}
    </div>
  );
}
