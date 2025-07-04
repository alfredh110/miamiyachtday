"use client";
import React, { useState, useEffect } from "react";
import BookingsDashboard from "../components/BookingsDashboard"; // Adjust import path

const BOOKINGS_KEY = "miami_yacht_day_bookings_v1";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(BOOKINGS_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setBookings(parsed);
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  }, [bookings]);

  function updateBookingStatus(idx, status) {
    setBookings(prev =>
      prev.map((b, i) => (i === idx ? { ...b, status } : b))
    );
  }
  function deleteBooking(idx) {
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

  return (
    <main style={{ padding: 32, background: "#181F2B", minHeight: "100vh" }}>
      <h1 style={{ color: "#5EE6E6", fontWeight: 900, marginBottom: 32 }}>Admin Dashboard</h1>
      <BookingsDashboard
        bookings={bookings}
        updateBookingStatus={updateBookingStatus}
        deleteBooking={deleteBooking}
        exportCSV={exportBookingsCSV}
      />
    </main>
  );
}
