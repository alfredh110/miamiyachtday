import React from "react";

export default function CTASection({ onBook }) {
  return (
    <section style={{
      margin: "4rem 0 2rem 0", display: "flex", flexDirection: "column",
      alignItems: "center", gap: "1.5rem"
    }}>
      <h3 style={{ fontWeight: 700, fontSize: "1.5rem", color: "#F5F7FA" }}>
        Ready to sail? Book your Miami Yacht Day!
      </h3>
      <button
        style={{
          background: "linear-gradient(90deg, #4568DC 0%, #5EE6E6 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "1.8rem",
          padding: "1rem 2.4rem",
          fontWeight: 700,
          fontSize: "1.18rem",
          boxShadow: "0 2px 8px #151B2633",
          cursor: "pointer"
        }}
        onClick={onBook}
      >
        Book Now
      </button>
    </section>
  );
}
