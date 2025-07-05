import React from "react";
import howItWorks from "../data/howItWorks";

export default function HowItWorks() {
  return (
    <section style={{
      padding: "2rem 4vw",
      background: "rgba(35,48,75,0.73)",
      borderRadius: "2rem",
      marginTop: "2rem"
    }}>
      <h3 style={{
        fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.02em",
        color: "#5EE6E6", marginBottom: "2rem"
      }}>How It Works</h3>
      <div style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center"
      }}>
        {howItWorks.map((step, i) => (
          <div key={i} style={{
            background: "rgba(94,230,230,0.11)",
            borderRadius: 44,
            width: 160,
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1.5rem"
          }}>
            <div style={{ fontSize: 44 }}>{step.icon}</div>
            <div style={{ fontWeight: 700, color: "#5EE6E6", marginTop: 10, fontSize: 20 }}>{step.title}</div>
            <div style={{ color: "#B0BED8", fontSize: 15, marginTop: 8, textAlign: "center" }}>{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
