"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import BookingsDashboard from "../components/BookingsDashboard";

// --- Types ---
type BookingStatus = "Pending" | "Contacted" | "Completed" | "Archived";
type Booking = {
  name: string;
  email: string;
  date: string;
  guests: string;
  occasion: string;
  submittedAt: string;
  status: BookingStatus;
};

const BOOKINGS_KEY = "miami_yacht_day_bookings_v1";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (status === "authenticated") {
      const saved = localStorage.getItem(BOOKINGS_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) setBookings(parsed);
        } catch {}
      }
    }
  }, [status]);

  useEffect(() => {
    if (status === "authenticated") {
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    }
  }, [bookings, status]);

  function updateBookingStatus(idx: number, status: BookingStatus) {
    setBookings(prev =>
      prev.map((b, i) => (i === idx ? { ...b, status } : b))
    );
  }
  function deleteBooking(idx: number) {
    setBookings(prev => prev.filter((_, i) => i !== idx));
  }
  function exportBookingsCSV() {
    const activeBookings = bookings.filter(b => b.status !== "Archived");
    const csv =
      ["Name,Email,Date,Guests,Occasion,Status,Submitted At"].concat(
        activeBookings.map(b =>
          [
            `"${b.name}"`,
            `"${b.email}"`,
            `"${b.date}"`,
            `"${b.guests}"`,
            `"${b.occasion.replace(/"/g, '""')}"`,
            `"${b.status}"`,
            `"${new Date(b.submittedAt).toLocaleString()}"`
          ].join(",")
        )
      ).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bookings.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 500);
  }

  if (status === "loading") {
    return (
      <div style={{ color: "#5EE6E6", textAlign: "center", marginTop: 60 }}>
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#181F2B",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#5EE6E6", marginBottom: 16 }}>Admin Login</h2>
        <button
          onClick={() => signIn()}
          style={{
            padding: "10px 24px",
            borderRadius: 8,
            fontWeight: 700,
            background: "#5EE6E6",
            color: "#151B26",
            border: "none",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Sign in with GitHub
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: 32, background: "#181F2B", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: "#5EE6E6", fontWeight: 900, marginBottom: 32 }}>
          Admin Dashboard
        </h1>
        <button
          onClick={() => signOut()}
          style={{
            padding: "8px 18px",
            borderRadius: 7,
            border: "none",
            fontWeight: 700,
            background: "#B06AB3",
            color: "#fff",
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Sign out
        </button>
      </div>
      <BookingsDashboard
        bookings={bookings}
        updateBookingStatus={updateBookingStatus}
        deleteBooking={deleteBooking}
        exportCSV={exportBookingsCSV}
      />
      <style jsx global>{`
        @keyframes dashboardCardIn {
          from { opacity:0; transform: translateY(50px);}
          to { opacity:1; transform: translateY(0);}
        }
      `}</style>
    </main>
  );
}
