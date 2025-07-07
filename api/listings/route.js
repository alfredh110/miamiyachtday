import { PrismaClient } from '@prisma/client';

// Singleton pattern for PrismaClient (prevents hot-reload issues)
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

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
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// POST: Create a new listing
export async function POST(req) {
  try {
    const data = await req.json();
    if (data.id) delete data.id;
    if (!data.createdAt) data.createdAt = new Date();
    if (typeof data.approved !== "boolean") data.approved = false;

    const required = ["yachtName", "ownerName", "email", "length", "guests"];
    for (const field of required) {
      if (!data[field]) {
        return new Response(
          JSON.stringify({ error: `Missing field: ${field}` }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    if (isNaN(Number(data.length)) || isNaN(Number(data.guests))) {
      return new Response(
        JSON.stringify({ error: "Length and guests must be numbers." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const created = await prisma.listing.create({ data });
    return new Response(JSON.stringify(created), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// PATCH: Edit or approve a listing
export async function PATCH(req) {
  try {
    const { id, ...data } = await req.json();
    if (!id) {
      return new Response(
        JSON.stringify({ error: "Missing id" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const updated = await prisma.listing.update({
      where: { id: Number(id) },
      data,
    });
    return new Response(JSON.stringify(updated), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// DELETE: Remove a listing
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) {
      return new Response(
        JSON.stringify({ error: "Missing id" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    await prisma.listing.delete({ where: { id: Number(id) } });
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
