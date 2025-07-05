import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { randomUUID } from "crypto";

export const runtime = "nodejs"; // Required for file system access in Next.js API

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = file.name.split(".").pop();
  const fileName = `${randomUUID()}.${ext}`;
  const savePath = path.join(process.cwd(), "public", "images", fileName);

  await fs.writeFile(savePath, buffer);

  // Return the public URL for the uploaded image
  return NextResponse.json({ url: `/images/${fileName}` });
}
