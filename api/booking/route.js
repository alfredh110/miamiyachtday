import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const data = await req.json();

    // Basic validation (you can add more here)
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.date ||
      !data.yacht
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        yacht: data.yacht,
        message: data.message || ""
      }
    });

    return new Response(JSON.stringify({ success: true, booking }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error in booking API:", err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
