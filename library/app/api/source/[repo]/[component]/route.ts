import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ repo: string; component: string }> }
) {
  const { repo, component } = await params;

  // Sanitize to prevent path traversal
  const safeRepo = repo.replace(/[^a-zA-Z0-9_-]/g, "");
  const safeComponent = component.replace(/[^a-zA-Z0-9_-]/g, "");

  const filePath = path.join(
    process.cwd(),
    "components",
    safeRepo,
    `${safeComponent}.tsx`
  );

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Component not found" }, { status: 404 });
  }

  const source = fs.readFileSync(filePath, "utf-8");
  return new NextResponse(source, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
