import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/require-admin";
import {
  deleteCertification,
  deleteCertificationPdf,
  getCertifications,
  saveCertification,
  slugify,
  type Certification,
} from "@/lib/content-store";

const MAX_SIZE = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  try {
    const form = await req.formData();
    const title = form.get("title");
    const issuer = form.get("issuer");
    const date = form.get("date");
    const credentialId = form.get("credentialId");
    const badgeLabel = form.get("badgeLabel");
    const badgeUrl = form.get("badgeUrl");
    const file = form.get("file");

    if (typeof title !== "string" || !title.trim()) {
      return NextResponse.json({ error: "Certification title is required" }, { status: 400 });
    }
    if (typeof issuer !== "string" || !issuer.trim()) {
      return NextResponse.json({ error: "Issuer is required" }, { status: 400 });
    }
    if (typeof badgeUrl === "string" && badgeUrl.trim()) {
      const parsed = new URL(badgeUrl.trim());
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
        return NextResponse.json({ error: "Badge URL must use HTTP or HTTPS" }, { status: 400 });
      }
    }
    if (file !== null && !(file instanceof File)) {
      return NextResponse.json({ error: "Invalid certificate file" }, { status: 400 });
    }
    if (file instanceof File) {
      if (file.type !== "application/pdf") {
        return NextResponse.json({ error: "Certificate files must be PDF" }, { status: 400 });
      }
      if (file.size > MAX_SIZE) {
        return NextResponse.json({ error: "Certificate PDF exceeds 10MB limit" }, { status: 400 });
      }
    }

    const slug = slugify(title);
    const certifications = await getCertifications();
    if (certifications.some((certification) => certification.slug === slug)) {
      return NextResponse.json({ error: "A certification with this title already exists" }, { status: 409 });
    }

    const pdfFilename = file instanceof File
      ? `${Date.now()}__${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`
      : "";
    const certification: Certification = {
      slug,
      title: title.trim(),
      issuer: issuer.trim(),
      date: typeof date === "string" ? date.trim() : "",
      credentialId: typeof credentialId === "string" ? credentialId.trim() : "",
      badgeLabel: typeof badgeLabel === "string" && badgeLabel.trim() ? badgeLabel.trim() : "View badge",
      badgeUrl: typeof badgeUrl === "string" ? badgeUrl.trim() : "",
      pdfFilename,
      pdfOriginalName: file instanceof File ? file.name : "",
      pdfSize: file instanceof File ? file.size : 0,
    };

    await saveCertification(
      certification,
      file instanceof File ? { filename: pdfFilename, bytes: Buffer.from(await file.arrayBuffer()) } : undefined
    );
    return NextResponse.json({ certification });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function GET() {
  const unauth = await requireAdmin();
  if (unauth) return unauth;
  return NextResponse.json({ certifications: await getCertifications() });
}

export async function PUT(req: NextRequest) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  try {
    const form = await req.formData();
    const slug = form.get("slug");
    const title = form.get("title");
    const issuer = form.get("issuer");
    const date = form.get("date");
    const credentialId = form.get("credentialId");
    const badgeLabel = form.get("badgeLabel");
    const badgeUrl = form.get("badgeUrl");
    const file = form.get("file");

    if (typeof slug !== "string" || !slug) {
      return NextResponse.json({ error: "Certification slug is required" }, { status: 400 });
    }
    if (typeof title !== "string" || !title.trim()) {
      return NextResponse.json({ error: "Certification title is required" }, { status: 400 });
    }
    if (typeof issuer !== "string" || !issuer.trim()) {
      return NextResponse.json({ error: "Issuer is required" }, { status: 400 });
    }
    if (typeof badgeUrl === "string" && badgeUrl.trim()) {
      const parsed = new URL(badgeUrl.trim());
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
        return NextResponse.json({ error: "Badge URL must use HTTP or HTTPS" }, { status: 400 });
      }
    }
    if (file !== null && !(file instanceof File)) {
      return NextResponse.json({ error: "Invalid certificate file" }, { status: 400 });
    }
    if (file instanceof File) {
      if (file.type !== "application/pdf") {
        return NextResponse.json({ error: "Certificate files must be PDF" }, { status: 400 });
      }
      if (file.size > MAX_SIZE) {
        return NextResponse.json({ error: "Certificate PDF exceeds 10MB limit" }, { status: 400 });
      }
    }

    const existing = (await getCertifications()).find((entry) => entry.slug === slug);
    if (!existing) {
      return NextResponse.json({ error: "Certification not found" }, { status: 404 });
    }

    const replacementFilename = file instanceof File
      ? `${Date.now()}__${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`
      : existing.pdfFilename;
    const certification: Certification = {
      ...existing,
      title: title.trim(),
      issuer: issuer.trim(),
      date: typeof date === "string" ? date.trim() : "",
      credentialId: typeof credentialId === "string" ? credentialId.trim() : "",
      badgeLabel: typeof badgeLabel === "string" && badgeLabel.trim() ? badgeLabel.trim() : "View badge",
      badgeUrl: typeof badgeUrl === "string" ? badgeUrl.trim() : "",
      pdfFilename: replacementFilename,
      pdfOriginalName: file instanceof File ? file.name : existing.pdfOriginalName,
      pdfSize: file instanceof File ? file.size : existing.pdfSize,
    };

    if (file instanceof File && existing.pdfFilename) {
      await deleteCertificationPdf(existing);
    }
    await saveCertification(
      certification,
      file instanceof File ? { filename: replacementFilename, bytes: Buffer.from(await file.arrayBuffer()) } : undefined
    );
    return NextResponse.json({ certification });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = (await req.json()) as { slug?: string };
  if (typeof slug !== "string") {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  try {
    const certification = (await getCertifications()).find((entry) => entry.slug === slug);
    if (!certification) return NextResponse.json({ error: "Certification not found" }, { status: 404 });
    await deleteCertification(certification);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
