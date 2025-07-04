"use client";

import React, { useState, useEffect } from "react";

// Import your types, data keys, and (optionally) card/dashboard components
// import { Booking, ContactMessage, STORAGE_KEY, BOOKINGS_KEY, CONTACTS_KEY } from "../path/to/your/types-and-utils";

export default function AdminDashboard() {
  const [tab, setTab] = useState("yachts");
  const [yachts, setYachts] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    // Load yachts, bookings, contacts from localStorage (or your API if you have one)
    setYachts(JSON.parse(localStorage.getItem("miami_yacht_day_listings_v1") || "[]"));
    setBookings(JSON.parse(localStorage.getItem("miami_yacht_day_bookings_v1") || "[]"));
    setContacts(JSON.parse(localStorage.getItem("miami_yacht_day_contacts_v1") || "[]"));
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#181F2B", color: "#F5F7FA", padding: 32 }}>
      <h1 style={{ fontWeight: 900, fontSize: 36, marginBottom: 24, color: "#5EE6E6" }}>Admin Dashboard</h1>
      <div style={{ display: "flex", gap: 18, marginBottom: 32 }}>
        <button onClick={() => setTab("yachts")} style={tab === "yachts" ? tabSelected : tabBtn}>Yachts</button>
        <button onClick={() => setTab("bookings")} style={tab === "bookings" ? tabSelected : tabBtn}>Bookings</button>
        <button onClick={() => setTab("contacts")} style={tab === "contacts" ? tabSelected : tabBtn}>Contacts</button>
      </div>
      {tab === "yachts" && (
        <section>
          <h2>All Yachts</h2>
          {/* Render yacht cards or table here */}
          <pre>{JSON.stringify(yachts, null, 2)}</pre>
        </section>
      )}
      {tab === "bookings" && (
        <section>
          <h2>All Bookings</h2>
          {/* Render bookings dashboard/table here */}
          <pre>{JSON.stringify(bookings, null, 2)}</pre>
        </section>
      )}
      {tab === "contacts" && (
        <section>
          <h2>All Contacts</h2>
          {/* Render contacts dashboard/table here */}
          <pre>{JSON.stringify(contacts, null, 2)}</pre>
        </section>
      )}
    </main>
  );
}

const tabBtn: React.CSSProperties = {
  background: "#23304b",
  color: "#5EE6E6",
  border: "none",
  borderRadius: 8,
  padding: "0.7rem 1.6rem",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: "1.1rem"
};
const tabSelected: React.CSSProperties = {
  ...tabBtn,
  background: "linear-gradient(90deg,#4568DC 0%,#B06AB3 100%)",
  color: "#fff"
};
