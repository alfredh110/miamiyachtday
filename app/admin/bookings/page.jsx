"use client";
import React, { useEffect, useState } from "react";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bookings")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: 900, margin: "auto" }}>
      <h1 style={{ color: "#5EE6E6", marginBottom: 32 }}>All Yacht Bookings</h1>
      {loading ? (
        <div>Loading...</div>
      ) : bookings.length === 0 ? (
        <div>No bookings found.</div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "#232C3B", color: "#fff", borderRadius: 12 }}>
            <thead>
              <tr style={{ background: "#314164" }}>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>Yacht</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Message</th>
                <th style={thStyle}>Created</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id} style={{ borderTop: "1px solid #2E3B50" }}>
                  <td style={tdStyle}>{b.name}</td>
                  <td style={tdStyle}>{b.email}</td>
                  <td style={tdStyle}>{b.phone}</td>
                  <td style={tdStyle}>{b.yacht}</td>
                  <td style={tdStyle}>{b.date}</td>
                  <td style={tdStyle}>{b.message || "-"}</td>
                  <td style={tdStyle}>{new Date(b.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const thStyle = {
  padding: "12px 8px",
  borderBottom: "2px solid #22304B",
  textAlign: "left",
  fontWeight: 700,
  fontSize: 16,
  color: "#5EE6E6",
};

const tdStyle = {
  padding: "10px 8px",
  borderBottom: "1px solid #23304B",
  fontSize: 15,
};
