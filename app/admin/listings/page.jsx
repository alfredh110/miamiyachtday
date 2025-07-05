"use client";
import React, { useEffect, useState } from "react";

const ADMIN_PASSWORD = "Boohoo39";

export default function AdminListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [editing, setEditing] = useState(null);

  const fetchListings = () => {
    setLoading(true);
    fetch("/api/listings", { headers: { "x-admin": "true" } })
      .then(res => res.json())
      .then(data => {
        setListings(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (authorized) fetchListings();
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

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;
    setDeletingId(id);
    try {
      const res = await fetch("/api/listings", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setListings(listings => listings.filter(l => l.id !== id));
      } else {
        alert("Failed to delete listing.");
      }
    } catch {
      alert("Failed to delete listing.");
    }
    setDeletingId(null);
  };

  const handleApprove = async (id, approved) => {
    await fetch("/api/listings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, approved }),
    });
    setListings(listings => listings.map(l => l.id === id ? { ...l, approved } : l));
  };

  const handleEdit = (listing) => setEditing(listing);

  const handleEditSave = async (fields) => {
    const { id, ...rest } = fields;
    await fetch("/api/listings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...rest }),
    });
    setListings(listings => listings.map(l => l.id === id ? { ...l, ...rest } : l));
    setEditing(null);
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
    <div style={{ padding: "2rem", maxWidth: 1200, margin: "auto" }}>
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
                <th style={thStyle}>Approved</th>
                <th style={thStyle}>Actions</th>
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
                  <td style={tdStyle}>
                    {l.approved ? <span style={{ color: "#5EE6E6" }}>Yes</span> : <span style={{ color: "#ED5B68" }}>No</span>}
                  </td>
                  <td style={tdStyle}>
                    <button
                      onClick={() => handleApprove(l.id, !l.approved)}
                      style={{
                        padding: "0.4em 0.9em",
                        background: l.approved ? "#ED5B68" : "#46E6A6",
                        color: "#fff",
                        border: "none",
                        borderRadius: 7,
                        fontWeight: 700,
                        marginRight: 5,
                        cursor: "pointer",
                      }}
                    >
                      {l.approved ? "Unapprove" : "Approve"}
                    </button>
                    <button
                      onClick={() => handleEdit(l)}
                      style={{
                        padding: "0.4em 0.9em",
                        background: "#FFA10A",
                        color: "#fff",
                        border: "none",
                        borderRadius: 7,
                        fontWeight: 700,
                        marginRight: 5,
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(l.id)}
                      style={{
                        padding: "0.4em 1em",
                        background: "#ED5B68",
                        color: "#fff",
                        border: "none",
                        borderRadius: 7,
                        fontWeight: 700,
                        cursor: deletingId === l.id ? "wait" : "pointer",
                        opacity: deletingId === l.id ? 0.6 : 1,
                      }}
                      disabled={deletingId === l.id}
                    >
                      {deletingId === l.id ? "..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {editing && (
        <EditModal
          listing={editing}
          onSave={handleEditSave}
          onCancel={() => setEditing(null)}
        />
      )}
    </div>
  );
}

function EditModal({ listing, onSave, onCancel }) {
  const [form, setForm] = useState({ ...listing });

  const handleChange = (key, value) => setForm(f => ({ ...f, [key]: value }));

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(30,40,56,0.93)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
    }}>
      <div style={{ minWidth: 350, maxWidth: 420, background: "#232C3B", padding: 32, borderRadius: 12, color: "#fff" }}>
        <h2 style={{ color: "#5EE6E6", marginBottom: 18 }}>Edit Listing</h2>
        <div style={{ marginBottom: 10 }}>
          <label>Yacht Name</label>
          <input value={form.yachtName} onChange={e => handleChange("yachtName", e.target.value)} style={inputStyle} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Owner Name</label>
          <input value={form.ownerName} onChange={e => handleChange("ownerName", e.target.value)} style={inputStyle} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input value={form.email} onChange={e => handleChange("email", e.target.value)} style={inputStyle} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Phone</label>
          <input value={form.phone} onChange={e => handleChange("phone", e.target.value)} style={inputStyle} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Length (ft)</label>
          <input type="number" value={form.length} onChange={e => handleChange("length", Number(e.target.value))} style={inputStyle} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Max Guests</label>
          <input type="number" value={form.guests} onChange={e => handleChange("guests", Number(e.target.value))} style={inputStyle} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Description</label>
          <textarea value={form.description} onChange={e => handleChange("description", e.target.value)} style={{ ...inputStyle, minHeight: 60 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Photo URL</label>
          <input value={form.photo ?? ""} onChange={e => handleChange("photo", e.target.value)} style={inputStyle} />
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button onClick={() => onSave(form)} style={{ ...inputStyle, background: "#46E6A6", color: "#222", fontWeight: 700 }}>Save</button>
          <button onClick={onCancel} style={{ ...inputStyle, background: "#ED5B68", color: "#fff", fontWeight: 700 }}>Cancel</button>
        </div>
      </div>
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

const inputStyle = {
  width: "100%",
  padding: "7px 10px",
  borderRadius: 6,
  border: "1px solid #314164",
  marginTop: 4,
  fontSize: 15,
  background: "#1A2231",
  color: "#fff",
};
