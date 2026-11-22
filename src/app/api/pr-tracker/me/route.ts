import { createHash, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { MY_TIMELINE } from "@/app/pr-tracker/my-timeline";

export const dynamic = "force-dynamic";

// Hash both sides so timingSafeEqual gets equal-length buffers.
const digest = (s: string) => createHash("sha256").update(s).digest();

// POST { password } -> my private timeline, only if it matches PR_TRACKER_PASSWORD.
export async function POST(req: Request) {
  const expected = process.env.PR_TRACKER_PASSWORD;
  if (!expected) {
    return NextResponse.json({ error: "PR_TRACKER_PASSWORD is not set on the server." }, { status: 503 });
  }

  let password = "";
  try {
    const body = await req.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    // fall through with an empty password
  }

  if (!password || !timingSafeEqual(digest(password), digest(expected))) {
    // Small delay to slow down guessing.
    await new Promise((r) => setTimeout(r, 600));
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  return NextResponse.json({ timeline: MY_TIMELINE }, { headers: { "Cache-Control": "no-store" } });
}
