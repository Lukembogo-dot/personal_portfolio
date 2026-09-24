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
  links: { label: string; url: string }[];
};

const PROJECTS_DIR = "content/projects";

export async function getProjects(): Promise<Project[]> {
  const entries = await listDir(PROJECTS_DIR);
  const jsonFiles = entries.filter((e) => e.type === "file" && e.name.endsWith(".json"));

  const projects = await Promise.all(
    jsonFiles.map(async (entry) => {
      const file = await getFile(entry.path);
      if (!file) return null;
      const project = JSON.parse(file.content) as Project;
      return {
        ...project,
        links: Array.isArray(project.links) ? project.links : [],
      } as Project;
    })
  );

  return projects
    .filter((p): p is Project => p !== null)
    .sort((a, b) => a.order - b.order);
}

export async function getProject(slug: string): Promise<Project | null> {
  const file = await getFile(`${PROJECTS_DIR}/${slug}.json`);
  if (!file) return null;
  const project = JSON.parse(file.content) as Project;
  return {
    ...project,
    links: Array.isArray(project.links) ? project.links : [],
  } as Project;
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
      const [, ...rest] = e.name.split("__");
      const originalName = rest.length > 0 ? rest.join("__") : e.name;
      return { filename: e.name, originalName, size: 0 };
    });
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

// ---- project images (optional, per project — used for a carousel) ----

function imageDir(slug: string) {
  return `${PROJECTS_DIR}/${slug}/images`;
}

export async function getProjectImages(slug: string): Promise<PdfEntry[]> {
  const entries = await listDir(imageDir(slug));
  return entries
    .filter((e) => e.type === "file")
    .map((e) => {
      const [, ...rest] = e.name.split("__");
      const originalName = rest.length > 0 ? rest.join("__") : e.name;
      return { filename: e.name, originalName, size: 0 };
    });
}

export async function getProjectImageBytes(
  slug: string,
  filename: string
): Promise<Buffer | null> {
  const result = await getFileBytes(`${imageDir(slug)}/${filename}`);
  return result?.bytes ?? null;
}

export async function addProjectImage(
  slug: string,
  originalName: string,
  bytes: Buffer
): Promise<PdfEntry> {
  const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
  const filename = `${Date.now()}__${safeName}`;
  await putFileBytes(
    `${imageDir(slug)}/${filename}`,
    bytes,
    `Add image to ${slug}: ${originalName}`
  );
  return { filename, originalName, size: bytes.length };
}

export async function deleteProjectImage(slug: string, filename: string): Promise<void> {
  const path = `${imageDir(slug)}/${filename}`;
  const existing = await getFileBytes(path);
  if (!existing) return;
  await deleteFile(path, existing.sha, `Remove image from ${slug}: ${filename}`);
}

// ---- standalone documents ----

export type DocumentEntry = {
  filename: string;
  originalName: string;
  title: string;
  description: string;
  postSlug: string;
  size: number;
};

const DOCUMENTS_DIR = "content/documents";

function documentMetadataPath(filename: string) {
  return `${DOCUMENTS_DIR}/${filename}.json`;
}

export async function getDocuments(): Promise<DocumentEntry[]> {
  const entries = await listDir(DOCUMENTS_DIR);
  const metadataFiles = entries.filter((entry) => entry.type === "file" && entry.name.endsWith(".json"));
  const documents = await Promise.all(
    metadataFiles.map(async (entry) => {
      const file = await getFile(entry.path);
      if (!file) return null;
      return JSON.parse(file.content) as DocumentEntry;
    })
  );
  return documents
    .filter((document): document is DocumentEntry => document !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export async function getDocumentBytes(filename: string): Promise<Buffer | null> {
  const result = await getFileBytes(`${DOCUMENTS_DIR}/${filename}`);
  return result?.bytes ?? null;
}

export async function addDocument(
  originalName: string,
  title: string,
  description: string,
  postSlug: string,
  bytes: Buffer
): Promise<DocumentEntry> {
  const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
  const filename = `${Date.now()}__${safeName}`;
  const entry: DocumentEntry = {
    filename,
    originalName,
    title,
    description,
    postSlug,
    size: bytes.length,
  };
  await putFileBytes(`${DOCUMENTS_DIR}/${filename}`, bytes, `Add document: ${title}`);
  await putFile(
    documentMetadataPath(filename),
    JSON.stringify(entry, null, 2),
    `Add document metadata: ${title}`
  );
  return entry;
}

export async function deleteDocument(filename: string): Promise<void> {
  const pdfPath = `${DOCUMENTS_DIR}/${filename}`;
  const existingPdf = await getFileBytes(pdfPath);
  if (existingPdf) await deleteFile(pdfPath, existingPdf.sha, `Remove document: ${filename}`);

  const metadataPath = documentMetadataPath(filename);
  const existingMetadata = await getFile(metadataPath);
  if (existingMetadata) {
    await deleteFile(metadataPath, existingMetadata.sha, `Remove document metadata: ${filename}`);
  }
}

// ---- certifications ----

export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  badgeLabel: string;
  badgeUrl: string;
  pdfFilename: string;
  pdfOriginalName: string;
  pdfSize: number;
};

const CERTIFICATIONS_DIR = "content/certifications";
const CERTIFICATION_FILES_DIR = `${CERTIFICATIONS_DIR}/files`;

function certificationMetadataPath(slug: string) {
  return `${CERTIFICATIONS_DIR}/${slug}.json`;
}

export async function getCertifications(): Promise<Certification[]> {
  const entries = await listDir(CERTIFICATIONS_DIR);
  const metadataFiles = entries.filter(
    (entry) => entry.type === "file" && entry.name.endsWith(".json")
  );
  const certifications = await Promise.all(
    metadataFiles.map(async (entry) => {
      const file = await getFile(entry.path);
      if (!file) return null;
      return JSON.parse(file.content) as Certification;
    })
  );
  return certifications
    .filter((certification): certification is Certification => certification !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export async function getCertificationPdfBytes(filename: string): Promise<Buffer | null> {
  const result = await getFileBytes(`${CERTIFICATION_FILES_DIR}/${filename}`);
  return result?.bytes ?? null;
}

export async function saveCertification(
  certification: Certification,
  pdf?: { filename: string; bytes: Buffer }
): Promise<void> {
  const metadataPath = certificationMetadataPath(certification.slug);
  const existing = await getFile(metadataPath);

  if (pdf) {
    await putFileBytes(
      `${CERTIFICATION_FILES_DIR}/${pdf.filename}`,
      pdf.bytes,
      `Add certificate PDF: ${certification.title}`
    );
  }

  await putFile(
    metadataPath,
    JSON.stringify(certification, null, 2),
    existing ? `Update certification: ${certification.title}` : `Add certification: ${certification.title}`,
    existing?.sha
  );
}

export async function deleteCertificationPdf(certification: Certification): Promise<void> {
  if (!certification.pdfFilename) return;
  const pdfPath = `${CERTIFICATION_FILES_DIR}/${certification.pdfFilename}`;
  const existingPdf = await getFileBytes(pdfPath);
  if (existingPdf) {
    await deleteFile(pdfPath, existingPdf.sha, `Remove certificate PDF: ${certification.title}`);
  }
}

export async function deleteCertification(certification: Certification): Promise<void> {
  await deleteCertificationPdf(certification);

  const metadataPath = certificationMetadataPath(certification.slug);
  const existingMetadata = await getFile(metadataPath);
  if (existingMetadata) {
    await deleteFile(
      metadataPath,
      existingMetadata.sha,
      `Remove certification: ${certification.title}`
    );
  }
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
