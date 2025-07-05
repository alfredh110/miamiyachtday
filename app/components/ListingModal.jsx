import React, { useState } from "react";

export default function ListingModal({ onClose }) {
  const [form, setForm] = useState({
    yachtName: "",
    ownerName: "",
    email: "",
    phone: "",
    length: "",
    guests: "",
    description: "",
    photo: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError(""); // Clear error on change
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      !form.yachtName ||
      !form.ownerName ||
      !form.email ||
      !form.phone ||
      !form.length ||
      !form.guests ||
      !form.description
    ) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/listing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Submission failed.");
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <button style={closeButtonStyle} onClick={onClose} aria-label="Close">&times;</button>
          <h2 style={{ color: "#5EE6E6" }}>Thank you!</h2>
          <p style={{ color: "#B0BED8" }}>Your yacht listing has been submitted.<br />We’ll contact you soon.</p>
          <button style={actionButtonStyle} onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeButtonStyle} onClick={onClose} aria-label="Close">&times;</button>
        <h2 style={{ color: "#5EE6E6", marginBottom: 10 }}>List Your Yacht</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={labelStyle}>
            Yacht Name*
            <input
              style={inputStyle}
              type="text"
              name="yachtName"
              value={form.yachtName}
              onChange={handleChange}
              required
            />
          </label>
          <label style={labelStyle}>
            Owner Name*
            <input
              style={inputStyle}
              type="text"
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              required
            />
          </label>
          <label style={labelStyle}>
            Email*
            <input
              style={inputStyle}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label style={labelStyle}>
            Phone Number*
            <input
              style={inputStyle}
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="(555) 123-4567"
            />
          </label>
          <label style={labelStyle}>
            Yacht Length (ft)*
            <input
              style={inputStyle}
              type="number"
              name="length"
              value={form.length}
              onChange={handleChange}
              min={10}
              required
            />
          </label>
          <label style={labelStyle}>
            Max Guests*
            <input
              style={inputStyle}
              type="number"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              min={1}
              required
            />
          </label>
          <label style={labelStyle}>
            Description*
            <textarea
              style={{ ...inputStyle, minHeight: 60, resize: "vertical" }}
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              placeholder="Describe your yacht and amenities"
            />
          </label>
          <label style={labelStyle}>
            Photo URL
            <input
              style={inputStyle}
              type="url"
              name="photo"
              value={form.photo}
              onChange={handleChange}
              placeholder="Paste a photo URL (optional)"
            />
          </label>
          {error && <div style={{ color: "#FFD700", marginBottom: 8 }}>{error}</div>}
          <button
            type="submit"
            style={{
              ...actionButtonStyle,
              opacity: submitting ? 0.6 : 1,
              pointerEvents: submitting ? "none" : "auto",
            }}
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Listing"}
          </button>
        </form>
      </div>
    </div>
  );
}

// Styles
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(20,30,50,0.82)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#192132",
  color: "#fff",
  borderRadius: 16,
  padding: "28px 32px 24px 32px",
  minWidth: 340,
  maxWidth: 420,
  boxShadow: "0 8px 32px rgba(10,30,80,0.12)",
  position: "relative",
};

const closeButtonStyle = {
  position: "absolute",
  top: 8,
  right: 14,
  background: "none",
  border: "none",
  fontSize: 28,
  color: "#7DE6E6",
  cursor: "pointer",
  fontWeight: 700,
};

const labelStyle = {
  display: "flex",
  flexDirection: "column",
  fontWeight: 500,
  color: "#B0BED8",
  fontSize: 15,
  gap: 6,
};

const inputStyle = {
  padding: "9px 12px",
  borderRadius: 8,
  border: "1px solid #314164",
  fontSize: 16,
  background: "#222A3C",
  color: "#fff",
  marginTop: 3,
};

const actionButtonStyle = {
  background: "linear-gradient(90deg, #4568DC 0%, #5EE6E6 100%)",
  color: "#fff",
  border: "none",
  borderRadius: 12,
  fontWeight: 700,
  fontSize: 17,
  padding: "0.7rem 1.2rem",
  marginTop: 12,
  cursor: "pointer",
};
