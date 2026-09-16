import { createHmac, timingSafeEqual } from "crypto";

// Set ADMIN_SECRET in your .env.local for production use.
const SECRET = process.env.ADMIN_SECRET || "dev-secret-change-me";

export function createToken(): string {
  return createHmac("sha256", SECRET).update("admin-session").digest("hex");
}

export function verifyToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const expected = createToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
