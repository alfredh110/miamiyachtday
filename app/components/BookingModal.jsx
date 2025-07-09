import React, { useEffect, useState, useRef } from "react";
import yachts from "../data/yachts";

export default function BookingModal({ onClose, yacht: selectedYacht }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    yacht: selectedYacht ? selectedYacht.yachtName || selectedYacht.name : "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const firstInputRef = useRef();
  const modalRef = useRef();

  // Autofocus on name input when modal opens
  useEffect(() => {
    setTimeout(() => { firstInputRef.current?.focus(); }, 100);
  }, []);

  // Reset form if closed and reopened or if selectedYacht changes
  useEffect(() => {
    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      yacht: selectedYacht ? selectedYacht.yachtName || selectedYacht.name : "",
      message: ""
    });
    setSubmitted(false);
    setError("");
    setSubmitting(false);
  }, [selectedYacht]);

  // Escape key closes modal, tab trap for accessibility
  useEffect(() => {
    const handleKey = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'input,select,textarea,button,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError(""); // Clear error on change
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date || !form.yacht) {
      setError("Please fill in all required fields.");
      return;
    }
    // Simple phone validation
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        // Defensive: API may not return JSON
        let data = {};
        try { data = await res.json(); } catch {}
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

  // Success message
  if (submitted) {
    return (
      <div style={overlayStyle} role="dialog" aria-modal="true" onClick={handleOverlayClick}>
        <div ref={modalRef} style={modalStyle}>
          <button style={closeButtonStyle} onClick={onClose} aria-label="Close">&times;</button>
          <h2 style={{ color: "#6E4B28" }}>Thank you!</h2>
          <p style={{ color: "#19243A" }}>
            Your booking request has been submitted.<br />We’ll contact you soon.
          </p>
          <button style={actionButtonStyle} onClick={onClose} autoFocus>Close</button>
        </div>
      </div>
    );
  }

  // Booking form
  return (
    <div
      style={{ ...overlayStyle, fontFamily: "'Inter', Arial, sans-serif" }}
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div ref={modalRef} style={{ ...modalStyle, fontFamily: "'Inter', Arial, sans-serif" }}>
        <button style={closeButtonStyle} onClick={onClose} aria-label="Close">&times;</button>
        <h2 style={{ color: "#6E4B28", marginBottom: 10 }}>
          Book {selectedYacht ? `the ${form.yacht}` : "a Yacht"}
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={labelStyle}>
            Name*
            <input
              style={inputStyle}
              type="text"
              name="name"
              ref={firstInputRef}
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              aria-label="Name"
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
              autoComplete="email"
              aria-label="Email"
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
              autoComplete="tel"
              aria-label="Phone Number"
            />
          </label>
          <label style={labelStyle}>
            Date*
            <input
              style={inputStyle}
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              aria-label="Date"
            />
          </label>
          {!selectedYacht && (
            <label style={labelStyle}>
              Select Yacht*
              <select
                style={inputStyle}
                name="yacht"
                value={form.yacht}
                onChange={handleChange}
                required
                aria-label="Yacht"
              >
                <option value="">-- Choose a yacht --</option>
                {yachts.map((y, i) => (
                  <option key={i} value={y.name}>{y.name}</option>
                ))}
              </select>
            </label>
          )}
          {selectedYacht && (
            <input type="hidden" name="yacht" value={form.yacht} />
          )}
          <label style={labelStyle}>
            Message
            <textarea
              style={{ ...inputStyle, minHeight: 60, resize: "vertical" }}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Anything special we should know?"
              aria-label="Message"
            />
          </label>
          {error && <div style={{ color: "#6E4B28", marginBottom: 8 }}>{error}</div>}
          <button
            type="submit"
            style={{
              ...actionButtonStyle,
              opacity: submitting ? 0.6 : 1,
              pointerEvents: submitting ? "none" : "auto",
              fontFamily: "'Inter', Arial, sans-serif",
            }}
            disabled={submitting}
            aria-busy={submitting}
          >
            {submitting ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}

// Styles
const overlayStyle = {
  position: "fixed",
  zIndex: 1000,
  left: 0, top: 0, right: 0, bottom: 0,
  background: "rgba(25,36,58,0.82)", // navy overlay
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const modalStyle = {
  background: "#fff",
  borderRadius: 24,
  padding: "2.2rem 2.6rem",
  boxShadow: "0 8px 36px #151B2633",
  minWidth: 340,
  maxWidth: 400,
  width: "90vw",
  position: "relative",
  color: "#19243A",
  fontFamily: "'Inter', Arial, sans-serif"
};

const closeButtonStyle = {
  position: "absolute",
  right: 18,
  top: 16,
  fontSize: 30,
  background: "none",
  color: "#6E4B28",
  border: "none",
  cursor: "pointer",
  lineHeight: 1,
  fontFamily: "'Inter', Arial, sans-serif"
};

const labelStyle = {
  color: "#6E4B28",
  fontWeight: 600,
  fontSize: 16,
  display: "flex",
  flexDirection: "column",
  gap: 4,
  fontFamily: "'Inter', Arial, sans-serif"
};

const inputStyle = {
  marginTop: 4,
  borderRadius: 10,
  border: "1.3px solid #6E4B28",
  padding: "0.55rem 0.9rem",
  fontSize: 16,
  background: "#fff",
  color: "#19243A",
  outline: "none",
  boxShadow: "0 0 0 2px transparent",
  transition: "box-shadow 0.15s",
  fontFamily: "'Inter', Arial, sans-serif"
};

const actionButtonStyle = {
  marginTop: 8,
  background: "#6E4B28",
  color: "#fff",
  border: "none",
  borderRadius: 16,
  fontWeight: 700,
  fontSize: 17,
  padding: "0.8rem 1.3rem",
  cursor: "pointer",
  boxShadow: "0 2px 8px #151B2633",
  transition: "background 0.15s",
  fontFamily: "'Inter', Arial, sans-serif"
};
