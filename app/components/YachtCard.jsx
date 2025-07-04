import React from "react";

export default function YachtCard({ yacht, onBook }) {
  return (
    <div
      style={{
        background: "rgba(36,44,61,0.98)",
        borderRadius: "1.5rem",
        minWidth: 300,
        padding: "1.5rem",
        boxShadow: "0 4px 16px #151B2633",
        display: "flex", flexDirection: "column", alignItems: "center",
        border: "1.5px solid #23304b",
        cursor: "pointer",
        position: "relative",
        transition: "transform 0.22s cubic-bezier(.21,1.15,.65,1.01), box-shadow 0.2s, border 0.2s"
      }}
    >
      <div style={{ position: "relative", width: "100%", height: 180 }}>
        <img src={yacht.img} alt={yacht.name}
          style={{
            width: "100%", borderRadius: "1rem", objectFit: "cover", height: 180,
            transition: "filter 0.25s"
          }} />
      </div>
      <h4 style={{ fontWeight: 700, color: "#B06AB3", fontSize: "1.1rem", marginBottom: 2, marginTop: "1rem" }}>{yacht.name}</h4>
      <div style={{ color: "#B0BED8", margin: "0.5rem 0", fontSize: "1rem" }}>{yacht.desc}</div>
      <button
        style={{
          background: "linear-gradient(90deg, #4568DC 0%, #5EE6E6 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "2rem",
          fontWeight: 700,
          boxShadow: "0 2px 8px #151B2633",
          fontSize: "1.05rem",
          padding: "0.7rem 2rem",
          marginTop: 8,
          cursor: "pointer"
        }}
        onClick={onBook}
      >
        Book Now
      </button>
    </div>
  );
}
