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
    photo: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
    setError("");
  };

  const handleSubmit = e => {
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
    // Optionally: Validate email/phone here
    setSubmitted(true);
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
            Owner Email*
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
              min={1}
              name="length"
              value={form.length}
              onChange={handleChange}
              required
              placeholder="e.g. 60"
            />
          </label>
          <label style={labelStyle}>
            Number of Guests*
            <input
              style={inputStyle}
              type="number"
              min={1}
              name="guests"
              value={form.guests}
              onChange={handleChange}
              required
              placeholder="e.g. 12"
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
              placeholder="Describe your yacht, amenities, crew, etc."
            />
          </label>
          <label style={labelStyle}>
            Photo
            <input
              style={inputStyle}
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
            />
            <span style={{ fontSize: 12, color: "#8CA2C6" }}>
              (optional, for demo only — not uploaded anywhere)
            </span>
          </label>
          {error && <div style={{ color: "#FFD700", marginBottom: 8 }}>{error}</div>}
          <button type="submit" style={actionButtonStyle}>Submit Listing</button>
        </form>
      </div>
    </div>
  );
}

// Styles (same as BookingModal for consistency)
const overlayStyle = {
  position: "fixed",
  zIndex: 1000,
  left: 0, top: 0, right: 0, bottom: 0,
  background: "rgba(20,26,38,0.76)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const modalStyle = {
  background: "rgba(36,44,61,0.96)",
  borderRadius: 24,
  padding: "2rem 2.3rem",
  boxShadow: "0 8px 36px #151B2633",
  minWidth: 340,
  maxWidth: 400,
  width: "90vw",
  position: "relative"
};

const closeButtonStyle = {
  position: "absolute",
  right: 18,
  top: 16,
  fontSize: 30,
  background: "none",
  color: "#5EE6E6",
  border: "none",
  cursor: "pointer",
  lineHeight: 1
};

const labelStyle = {
  color: "#B0BED8",
  fontWeight: 600,
  fontSize: 16,
  display: "flex",
  flexDirection: "column",
  gap: 4
};

const inputStyle = {
  marginTop: 4,
  borderRadius: 10,
  border: "1.3px solid #23304B",
  padding: "0.55rem 0.9rem",
  fontSize: 16,
  background: "#22304B",
  color: "#fff",
  outline: "none"
};

const actionButtonStyle = {
  marginTop: 8,
  background: "linear-gradient(90deg, #4568DC 0%, #5EE6E6 100%)",
  color: "#fff",
  border: "none",
  borderRadius: 16,
  fontWeight: 700,
  fontSize: 17,
  padding: "0.8rem 1.3rem",
  cursor: "pointer",
  boxShadow: "0 2px 8px #151B2633"
};
