import React from "react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div style={{
      background: "rgba(36,44,61,0.98)",
      borderRadius: "1.2rem",
      padding: "1.5rem",
      maxWidth: 340,
      minWidth: 260,
      boxShadow: "0 4px 24px #151B2633",
      display: "flex", flexDirection: "column",
      border: "1.5px solid #23304b"
    }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
        <img src={testimonial.avatar} alt={testimonial.name} style={{
          width: 48, height: 48, borderRadius: "50%", marginRight: 12, border: "2px solid #5EE6E6"
        }} />
        <div>
          <div style={{ color: "#5EE6E6", fontWeight: 700 }}>{testimonial.name}</div>
          <div style={{ color: "#B0BED8", fontSize: 13 }}>{testimonial.role}</div>
        </div>
      </div>
      <div style={{ color: "#F5F7FA", fontSize: 16, fontStyle: "italic" }}>
        “{testimonial.text}”
      </div>
    </div>
  );
}
