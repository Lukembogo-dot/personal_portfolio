// Minimal wrapper around the GitHub Contents API. This is the "database":
// every project, blog post, and uploaded PDF is a file committed to a
// GitHub repo, read back over the API. No traditional DB, no local
// filesystem writes — works the same on a VPS or on Vercel.
//
// Required env vars (see .env.local.example):
//   GITHUB_TOKEN   - a fine-grained PAT with Contents: read & write on the repo
//   GITHUB_OWNER   - repo owner/org, e.g. "luke-mbogo254"
//   GITHUB_REPO    - repo name, e.g. "portfolio-content"
//   GITHUB_BRANCH  - defaults to "main"

const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;
const BRANCH = process.env.GITHUB_BRANCH || "main";
const TOKEN = process.env.GITHUB_TOKEN;

function assertConfigured() {
  if (!OWNER || !REPO || !TOKEN) {
    throw new Error(
      "GitHub content store is not configured. Set GITHUB_OWNER, GITHUB_REPO, and GITHUB_TOKEN in .env.local."
    );
  }
}

function apiUrl(path: string) {
  return `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;
}

function headers() {
  return {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

export type GithubFile = {
  path: string;
  sha: string;
  content: string; // decoded, utf-8 text
};

// Fetch one file's decoded text content + sha (needed to update/delete it).
// Returns null if the file doesn't exist yet.
export async function getFile(path: string): Promise<GithubFile | null> {
  assertConfigured();
  const res = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
    headers: headers(),
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub getFile failed (${res.status}): ${await res.text()}`);

  const data = await res.json();
  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return { path, sha: data.sha, content };
}

// Fetch raw bytes (for binary files like PDFs) + sha.
export async function getFileBytes(
  path: string
): Promise<{ sha: string; bytes: Buffer } | null> {
  assertConfigured();
  const res = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
    headers: headers(),
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub getFileBytes failed (${res.status}): ${await res.text()}`);

  const data = await res.json();
  if (data.download_url) {
    const raw = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
      headers: { ...headers(), Accept: "application/vnd.github.raw" },
      cache: "no-store",
    });
    if (!raw.ok) {
      throw new Error(`GitHub raw file download failed (${raw.status}): ${await raw.text()}`);
    }
    return { sha: data.sha, bytes: Buffer.from(await raw.arrayBuffer()) };
  }

  if (typeof data.content !== "string") {
    throw new Error("GitHub did not return PDF content or a download URL");
  }
  return { sha: data.sha, bytes: Buffer.from(data.content, "base64") };
}

// List entries in a directory. Returns [] if the directory doesn't exist.
export async function listDir(
  path: string
): Promise<{ name: string; path: string; type: "file" | "dir" }[]> {
  assertConfigured();
  const res = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
    headers: headers(),
    cache: "no-store",
  });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub listDir failed (${res.status}): ${await res.text()}`);

  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data.map((entry: { name: string; path: string; type: string }) => ({
    name: entry.name,
    path: entry.path,
    type: entry.type === "dir" ? "dir" : "file",
  }));
}

// Create or update a text file. Pass sha when updating an existing file.
export async function putFile(
  path: string,
  content: string,
  message: string,
  sha?: string
): Promise<{ sha: string }> {
  assertConfigured();
  const res = await fetch(apiUrl(path), {
    method: "PUT",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: Buffer.from(content, "utf-8").toString("base64"),
      branch: BRANCH,
      sha,
    }),
  });
  if (!res.ok) throw new Error(`GitHub putFile failed (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return { sha: data.content.sha };
}

// Create or update a binary file from a Buffer.
export async function putFileBytes(
  path: string,
  bytes: Buffer,
  message: string,
  sha?: string
): Promise<{ sha: string }> {
  assertConfigured();
  const res = await fetch(apiUrl(path), {
    method: "PUT",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: bytes.toString("base64"),
      branch: BRANCH,
      sha,
    }),
  });
  if (!res.ok) throw new Error(`GitHub putFileBytes failed (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return { sha: data.content.sha };
}

export async function deleteFile(path: string, sha: string, message: string): Promise<void> {
  assertConfigured();
  const res = await fetch(apiUrl(path), {
    method: "DELETE",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ message, sha, branch: BRANCH }),
  });
  if (!res.ok) throw new Error(`GitHub deleteFile failed (${res.status}): ${await res.text()}`);
}
