import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Fetch all listings
export async function GET(req) {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: { createdAt: "desc" }
    });
    return new Response(JSON.stringify(listings), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}

// DELETE: Delete a listing by ID
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) {
      return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });
    }
    await prisma.listing.delete({ where: { id: Number(id) } });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
