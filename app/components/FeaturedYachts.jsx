import React from "react";
import YachtCard from "./YachtCard";
import yachts from "../data/yachts";

export default function FeaturedYachts({ onBook }) {
  return (
    <section
      style={{
        padding: "2rem 4vw",
        background: "rgba(36,44,61,0.92)",
        borderRadius: "2rem",
        marginTop: "2rem"
      }}
    >
      <h3 style={{
        fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.02em",
        color: "#5EE6E6", marginBottom: "2rem"
      }}>Featured Yachts</h3>
      <div style={{ display: "flex", gap: "2rem", overflowX: "auto" }}>
        {yachts.map((yacht, i) => (
          <YachtCard yacht={yacht} key={i} onBook={onBook} />
        ))}
      </div>
    </section>
  );
}
