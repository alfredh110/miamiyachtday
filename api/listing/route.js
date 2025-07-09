import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req) {
  try {
    const data = await req.json();

    // Basic validation
    if (
      !data.yachtName ||
      !data.ownerName ||
      !data.email ||
      !data.phone ||
      !data.length ||
      !data.guests ||
      !data.description
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const listing = await prisma.listing.create({
      data: {
        yachtName: data.yachtName,
        ownerName: data.ownerName,
        email: data.email,
        phone: data.phone,
        length: Number(data.length),
        guests: Number(data.guests),
        description: data.description,
        photo: data.photo || ""
      }
    });

    return new Response(JSON.stringify({ success: true, listing }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error in listing API:", err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
