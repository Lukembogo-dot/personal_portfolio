module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/admin/posts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$require$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/require-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content-store.ts [app-route] (ecmascript)");
;
;
;
async function POST(req) {
    const unauth = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$require$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAdmin"])();
    if (unauth) return unauth;
    const body = await req.json();
    const { title, date, excerpt, body: postBody } = body;
    if (!title || typeof title !== "string") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Post title is required"
        }, {
            status: 400
        });
    }
    const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["slugify"])(title);
    try {
        if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPost"])(slug)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "A post with this title already exists"
            }, {
                status: 409
            });
        }
        const post = {
            slug,
            title,
            date: date || new Date().toISOString().slice(0, 10),
            excerpt: excerpt ?? "",
            body: postBody ?? ""
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["savePost"])(post);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            post
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message
        }, {
            status: 500
        });
    }
}
}),
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createToken",
    ()=>createToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
// Set ADMIN_SECRET in your .env.local for production use.
const SECRET = process.env.ADMIN_SECRET || "dev-secret-change-me";
function createToken() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHmac"])("sha256", SECRET).update("admin-session").digest("hex");
}
function verifyToken(token) {
    if (!token) return false;
    const expected = createToken();
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"])(a, b);
}
}),
"[project]/src/lib/content-store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDocument",
    ()=>addDocument,
    "addProjectPdf",
    ()=>addProjectPdf,
    "deleteDocument",
    ()=>deleteDocument,
    "deletePost",
    ()=>deletePost,
    "deleteProject",
    ()=>deleteProject,
    "deleteProjectPdf",
    ()=>deleteProjectPdf,
    "getAllProjectPdfs",
    ()=>getAllProjectPdfs,
    "getDocumentBytes",
    ()=>getDocumentBytes,
    "getDocuments",
    ()=>getDocuments,
    "getPost",
    ()=>getPost,
    "getPosts",
    ()=>getPosts,
    "getProject",
    ()=>getProject,
    "getProjectPdfBytes",
    ()=>getProjectPdfBytes,
    "getProjectPdfs",
    ()=>getProjectPdfs,
    "getProjects",
    ()=>getProjects,
    "savePost",
    ()=>savePost,
    "saveProject",
    ()=>saveProject,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/github.ts [app-route] (ecmascript)");
;
function slugify(input) {
    return input.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
const PROJECTS_DIR = "content/projects";
async function getProjects() {
    const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listDir"])(PROJECTS_DIR);
    const jsonFiles = entries.filter((e)=>e.type === "file" && e.name.endsWith(".json"));
    const projects = await Promise.all(jsonFiles.map(async (entry)=>{
        const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(entry.path);
        if (!file) return null;
        return JSON.parse(file.content);
    }));
    return projects.filter((p)=>p !== null).sort((a, b)=>a.order - b.order);
}
async function getProject(slug) {
    const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(`${PROJECTS_DIR}/${slug}.json`);
    if (!file) return null;
    return JSON.parse(file.content);
}
async function saveProject(project) {
    const path = `${PROJECTS_DIR}/${project.slug}.json`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(path);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["putFile"])(path, JSON.stringify(project, null, 2), existing ? `Update project: ${project.name}` : `Add project: ${project.name}`, existing?.sha);
}
async function deleteProject(slug) {
    const path = `${PROJECTS_DIR}/${slug}.json`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(path);
    if (!existing) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteFile"])(path, existing.sha, `Delete project: ${slug}`);
}
function pdfDir(slug) {
    return `${PROJECTS_DIR}/${slug}/pdfs`;
}
async function getProjectPdfs(slug) {
    const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listDir"])(pdfDir(slug));
    return entries.filter((e)=>e.type === "file").map((e)=>{
        // filenames are stored as "<timestamp>__<original-name>.pdf"
        const [, ...rest] = e.name.split("__");
        const originalName = rest.length > 0 ? rest.join("__") : e.name;
        return {
            filename: e.name,
            originalName,
            size: 0
        };
    });
}
async function getAllProjectPdfs() {
    const projects = await getProjects();
    const results = await Promise.all(projects.map(async (project)=>({
            project,
            pdfs: await getProjectPdfs(project.slug)
        })));
    return results.filter((r)=>r.pdfs.length > 0);
}
async function getProjectPdfBytes(slug, filename) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFileBytes"])(`${pdfDir(slug)}/${filename}`);
    return result?.bytes ?? null;
}
async function addProjectPdf(slug, originalName, bytes) {
    const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filename = `${Date.now()}__${safeName}`;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["putFileBytes"])(`${pdfDir(slug)}/${filename}`, bytes, `Add PDF to ${slug}: ${originalName}`);
    return {
        filename,
        originalName,
        size: bytes.length
    };
}
async function deleteProjectPdf(slug, filename) {
    const path = `${pdfDir(slug)}/${filename}`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFileBytes"])(path);
    if (!existing) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteFile"])(path, existing.sha, `Remove PDF from ${slug}: ${filename}`);
}
const DOCUMENTS_DIR = "content/documents";
function documentMetadataPath(filename) {
    return `${DOCUMENTS_DIR}/${filename}.json`;
}
async function getDocuments() {
    const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listDir"])(DOCUMENTS_DIR);
    const metadataFiles = entries.filter((entry)=>entry.type === "file" && entry.name.endsWith(".json"));
    const documents = await Promise.all(metadataFiles.map(async (entry)=>{
        const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(entry.path);
        if (!file) return null;
        return JSON.parse(file.content);
    }));
    return documents.filter((document)=>document !== null).sort((a, b)=>a.title.localeCompare(b.title));
}
async function getDocumentBytes(filename) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFileBytes"])(`${DOCUMENTS_DIR}/${filename}`);
    return result?.bytes ?? null;
}
async function addDocument(originalName, title, description, postSlug, bytes) {
    const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filename = `${Date.now()}__${safeName}`;
    const entry = {
        filename,
        originalName,
        title,
        description,
        postSlug,
        size: bytes.length
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["putFileBytes"])(`${DOCUMENTS_DIR}/${filename}`, bytes, `Add document: ${title}`);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["putFile"])(documentMetadataPath(filename), JSON.stringify(entry, null, 2), `Add document metadata: ${title}`);
    return entry;
}
async function deleteDocument(filename) {
    const pdfPath = `${DOCUMENTS_DIR}/${filename}`;
    const existingPdf = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFileBytes"])(pdfPath);
    if (existingPdf) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteFile"])(pdfPath, existingPdf.sha, `Remove document: ${filename}`);
    const metadataPath = documentMetadataPath(filename);
    const existingMetadata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(metadataPath);
    if (existingMetadata) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteFile"])(metadataPath, existingMetadata.sha, `Remove document metadata: ${filename}`);
    }
}
const POSTS_DIR = "content/posts";
async function getPosts() {
    const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listDir"])(POSTS_DIR);
    const jsonFiles = entries.filter((e)=>e.type === "file" && e.name.endsWith(".json"));
    const posts = await Promise.all(jsonFiles.map(async (entry)=>{
        const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(entry.path);
        if (!file) return null;
        return JSON.parse(file.content);
    }));
    return posts.filter((p)=>p !== null).sort((a, b)=>a.date < b.date ? 1 : -1);
}
async function getPost(slug) {
    const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(`${POSTS_DIR}/${slug}.json`);
    if (!file) return null;
    return JSON.parse(file.content);
}
async function savePost(post) {
    const path = `${POSTS_DIR}/${post.slug}.json`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(path);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["putFile"])(path, JSON.stringify(post, null, 2), existing ? `Update post: ${post.title}` : `Add post: ${post.title}`, existing?.sha);
}
async function deletePost(slug) {
    const path = `${POSTS_DIR}/${slug}.json`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(path);
    if (!existing) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteFile"])(path, existing.sha, `Delete post: ${slug}`);
}
}),
"[project]/src/lib/github.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteFile",
    ()=>deleteFile,
    "getFile",
    ()=>getFile,
    "getFileBytes",
    ()=>getFileBytes,
    "listDir",
    ()=>listDir,
    "putFile",
    ()=>putFile,
    "putFileBytes",
    ()=>putFileBytes
]);
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
        throw new Error("GitHub content store is not configured. Set GITHUB_OWNER, GITHUB_REPO, and GITHUB_TOKEN in .env.local.");
    }
}
function apiUrl(path) {
    return `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;
}
function headers() {
    return {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
    };
}
async function getFile(path) {
    assertConfigured();
    const res = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
        headers: headers(),
        cache: "no-store"
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub getFile failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    const content = Buffer.from(data.content, "base64").toString("utf-8");
    return {
        path,
        sha: data.sha,
        content
    };
}
async function getFileBytes(path) {
    assertConfigured();
    const res = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
        headers: headers(),
        cache: "no-store"
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub getFileBytes failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    if (data.download_url) {
        const raw = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
            headers: {
                ...headers(),
                Accept: "application/vnd.github.raw"
            },
            cache: "no-store"
        });
        if (!raw.ok) {
            throw new Error(`GitHub raw file download failed (${raw.status}): ${await raw.text()}`);
        }
        return {
            sha: data.sha,
            bytes: Buffer.from(await raw.arrayBuffer())
        };
    }
    if (typeof data.content !== "string") {
        throw new Error("GitHub did not return PDF content or a download URL");
    }
    return {
        sha: data.sha,
        bytes: Buffer.from(data.content, "base64")
    };
}
async function listDir(path) {
    assertConfigured();
    const res = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
        headers: headers(),
        cache: "no-store"
    });
    if (res.status === 404) return [];
    if (!res.ok) throw new Error(`GitHub listDir failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((entry)=>({
            name: entry.name,
            path: entry.path,
            type: entry.type === "dir" ? "dir" : "file"
        }));
}
async function putFile(path, content, message, sha) {
    assertConfigured();
    const res = await fetch(apiUrl(path), {
        method: "PUT",
        headers: {
            ...headers(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message,
            content: Buffer.from(content, "utf-8").toString("base64"),
            branch: BRANCH,
            sha
        })
    });
    if (!res.ok) throw new Error(`GitHub putFile failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    return {
        sha: data.content.sha
    };
}
async function putFileBytes(path, bytes, message, sha) {
    assertConfigured();
    const res = await fetch(apiUrl(path), {
        method: "PUT",
        headers: {
            ...headers(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message,
            content: bytes.toString("base64"),
            branch: BRANCH,
            sha
        })
    });
    if (!res.ok) throw new Error(`GitHub putFileBytes failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    return {
        sha: data.content.sha
    };
}
async function deleteFile(path, sha, message) {
    assertConfigured();
    const res = await fetch(apiUrl(path), {
        method: "DELETE",
        headers: {
            ...headers(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message,
            sha,
            branch: BRANCH
        })
    });
    if (!res.ok) throw new Error(`GitHub deleteFile failed (${res.status}): ${await res.text()}`);
}
}),
"[project]/src/lib/require-admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requireAdmin",
    ()=>requireAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
;
;
;
async function requireAdmin() {
    const token = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get("admin_token")?.value;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(token)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Not authenticated"
        }, {
            status: 401
        });
    }
    return null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_twi3n._.js.map