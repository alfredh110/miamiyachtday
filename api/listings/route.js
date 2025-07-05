import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Fetch listings (public or admin)
export async function GET(req) {
  const isAdmin = req.headers.get('x-admin') === 'true';
  try {
    const listings = await prisma.listing.findMany({
      where: isAdmin ? {} : { approved: true },
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

// PATCH: Edit or approve a listing
export async function PATCH(req) {
  try {
    const { id, ...data } = await req.json();
    if (!id) {
      return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });
    }
    const updated = await prisma.listing.update({
      where: { id: Number(id) },
      data,
    });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}

// DELETE: Remove a listing
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
