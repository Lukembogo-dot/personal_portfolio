import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "./auth";

// Call at the top of any admin API route. Returns a 401 response to
// return early with, or null if the request is authenticated.
export async function requireAdmin(): Promise<NextResponse | null> {
  const token = (await cookies()).get("admin_token")?.value;
  if (!verifyToken(token)) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  return null;
}
