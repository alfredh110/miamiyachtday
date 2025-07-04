"use client";
import React, { useEffect, useState } from "react";

const ADMIN_PASSWORD = "Boohoo39"; // CHANGE THIS

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (authorized) {
      fetch("/api/bookings")
        .then(res => res.json())
        .then(data => {
          setBookings(data);
          setLoading(false);
        });
    }
  }, [authorized]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) {
      setAuthorized(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  if (!authorized) {
    return (
      <div style={{ padding: "2rem", maxWidth: 400, margin: "80px auto", textAlign: "center" }}>
        <h2 style={{ color: "#5EE6E6" }}>Admin Login</h2>
        <form onSubmit={handleLogin} style={{ marginTop: 30 }}>
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter admin password"
            style={{
              padding: "0.7rem 1rem",
              borderRadius: 8,
              border: "1px solid #314164",
              fontSize: 17,
              width: "100%",
              marginBottom: 12
            }}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #4568DC 0%, #5EE6E6 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 17,
              padding: "0.7rem 1.2rem",
              cursor: "pointer",
              width: "100%"
            }}
          >
            Login
          </button>
        </form>
        {error && <div style={{ color: "#FFD700", marginTop: 8 }}>{error}</div>}
      </div>
    );
  }

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
