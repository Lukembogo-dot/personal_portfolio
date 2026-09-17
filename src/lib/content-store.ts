import { deleteFile, getFile, getFileBytes, listDir, putFile, putFileBytes } from "./github";

// ---- shared ----

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ---- projects ----

export type Project = {
  slug: string;
  order: number;
  name: string;
  role: string;
  blurb: string;
  stack: string[];
  notes: string[];
};

const PROJECTS_DIR = "content/projects";

export async function getProjects(): Promise<Project[]> {
  const entries = await listDir(PROJECTS_DIR);
  const jsonFiles = entries.filter((e) => e.type === "file" && e.name.endsWith(".json"));

  const projects = await Promise.all(
    jsonFiles.map(async (entry) => {
      const file = await getFile(entry.path);
      if (!file) return null;
      return JSON.parse(file.content) as Project;
    })
  );

  return projects
    .filter((p): p is Project => p !== null)
    .sort((a, b) => a.order - b.order);
}

export async function getProject(slug: string): Promise<Project | null> {
  const file = await getFile(`${PROJECTS_DIR}/${slug}.json`);
  if (!file) return null;
  return JSON.parse(file.content) as Project;
}

export async function saveProject(project: Project): Promise<void> {
  const path = `${PROJECTS_DIR}/${project.slug}.json`;
  const existing = await getFile(path);
  await putFile(
    path,
    JSON.stringify(project, null, 2),
    existing ? `Update project: ${project.name}` : `Add project: ${project.name}`,
    existing?.sha
  );
}

export async function deleteProject(slug: string): Promise<void> {
  const path = `${PROJECTS_DIR}/${slug}.json`;
  const existing = await getFile(path);
  if (!existing) return;
  await deleteFile(path, existing.sha, `Delete project: ${slug}`);
}

// ---- project PDFs ----

export type PdfEntry = {
  filename: string;
  originalName: string;
  size: number;
};

function pdfDir(slug: string) {
  return `${PROJECTS_DIR}/${slug}/pdfs`;
}

export async function getProjectPdfs(slug: string): Promise<PdfEntry[]> {
  const entries = await listDir(pdfDir(slug));
  return entries
    .filter((e) => e.type === "file")
    .map((e) => {
      // filenames are stored as "<timestamp>__<original-name>.pdf"
      const [, ...rest] = e.name.split("__");
      const originalName = rest.length > 0 ? rest.join("__") : e.name;
      return { filename: e.name, originalName, size: 0 };
    });
}

export async function getAllProjectPdfs(): Promise<
  { project: Project; pdfs: PdfEntry[] }[]
> {
  const projects = await getProjects();
  const results = await Promise.all(
    projects.map(async (project) => ({
      project,
      pdfs: await getProjectPdfs(project.slug),
    }))
  );
  return results.filter((r) => r.pdfs.length > 0);
}

export async function getProjectPdfBytes(
  slug: string,
  filename: string
): Promise<Buffer | null> {
  const result = await getFileBytes(`${pdfDir(slug)}/${filename}`);
  return result?.bytes ?? null;
}

export async function addProjectPdf(
  slug: string,
  originalName: string,
  bytes: Buffer
): Promise<PdfEntry> {
  const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
  const filename = `${Date.now()}__${safeName}`;
  await putFileBytes(`${pdfDir(slug)}/${filename}`, bytes, `Add PDF to ${slug}: ${originalName}`);
  return { filename, originalName, size: bytes.length };
}

export async function deleteProjectPdf(slug: string, filename: string): Promise<void> {
  const path = `${pdfDir(slug)}/${filename}`;
  const existing = await getFileBytes(path);
  if (!existing) return;
  await deleteFile(path, existing.sha, `Remove PDF from ${slug}: ${filename}`);
}

// ---- blog posts ----

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date, e.g. "2026-09-16"
  excerpt: string;
  body: string; // markdown
};

const POSTS_DIR = "content/posts";

export async function getPosts(): Promise<Post[]> {
  const entries = await listDir(POSTS_DIR);
  const jsonFiles = entries.filter((e) => e.type === "file" && e.name.endsWith(".json"));

  const posts = await Promise.all(
    jsonFiles.map(async (entry) => {
      const file = await getFile(entry.path);
      if (!file) return null;
      return JSON.parse(file.content) as Post;
    })
  );

  return posts
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = await getFile(`${POSTS_DIR}/${slug}.json`);
  if (!file) return null;
  return JSON.parse(file.content) as Post;
}

export async function savePost(post: Post): Promise<void> {
  const path = `${POSTS_DIR}/${post.slug}.json`;
  const existing = await getFile(path);
  await putFile(
    path,
    JSON.stringify(post, null, 2),
    existing ? `Update post: ${post.title}` : `Add post: ${post.title}`,
    existing?.sha
  );
}

export async function deletePost(slug: string): Promise<void> {
  const path = `${POSTS_DIR}/${slug}.json`;
  const existing = await getFile(path);
  if (!existing) return;
  await deleteFile(path, existing.sha, `Delete post: ${slug}`);
}
