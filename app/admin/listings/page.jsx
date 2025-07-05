"use client";
import React, { useEffect, useState } from "react";

const ADMIN_PASSWORD = "Boohoo39"; // Change this to your actual admin password!

export default function AdminListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (authorized) {
      fetch("/api/listings")
        .then(res => res.json())
        .then(data => {
          setListings(data);
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
    <div style={{ padding: "2rem", maxWidth: 1000, margin: "auto" }}>
      <h1 style={{ color: "#5EE6E6", marginBottom: 32 }}>All Yacht Listings</h1>
      {loading ? (
        <div>Loading...</div>
      ) : listings.length === 0 ? (
        <div>No yacht listings found.</div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "#232C3B", color: "#fff", borderRadius: 12 }}>
            <thead>
              <tr style={{ background: "#314164" }}>
                <th style={thStyle}>Yacht Name</th>
                <th style={thStyle}>Owner Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>Length (ft)</th>
                <th style={thStyle}>Max Guests</th>
                <th style={thStyle}>Description</th>
                <th style={thStyle}>Photo</th>
                <th style={thStyle}>Created</th>
              </tr>
            </thead>
            <tbody>
              {listings.map(l => (
                <tr key={l.id} style={{ borderTop: "1px solid #2E3B50" }}>
                  <td style={tdStyle}>{l.yachtName}</td>
                  <td style={tdStyle}>{l.ownerName}</td>
                  <td style={tdStyle}>{l.email}</td>
                  <td style={tdStyle}>{l.phone}</td>
                  <td style={tdStyle}>{l.length}</td>
                  <td style={tdStyle}>{l.guests}</td>
                  <td style={tdStyle}>{l.description}</td>
                  <td style={tdStyle}>
                    {l.photo ? (
                      <a href={l.photo} target="_blank" rel="noopener noreferrer">
                        <img src={l.photo} alt="yacht" style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 4, border: "1px solid #314164" }} />
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td style={tdStyle}>{new Date(l.createdAt).toLocaleString()}</td>
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
