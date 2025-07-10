import React from "react";

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      background: "#003567",
      color: "#f9ffff",
      padding: "1.2rem 3vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "'Inter', Arial, sans-serif",
      boxShadow: "0 2px 8px #0002"
    }}>
      <div style={{ fontWeight: 800, fontSize: "1.4rem", letterSpacing: "0.01em", color: "#e88d9f", fontFamily: "'Playfair Display', serif" }}>
        MiamiYachtDay
      </div>
      <div style={{ display: "flex", gap: "2.3rem", alignItems: "center" }}>
        <a href="#featured" style={{ fontWeight: 600, color: "#f9ffff" }}>Featured</a>
        <a href="#testimonials" style={{ fontWeight: 600, color: "#f9ffff" }}>Testimonials</a>
        <a href="#list" style={{ fontWeight: 600, color: "#e88d9f" }}>List Your Yacht</a>
        <a href="/login" style={{
          fontWeight: 500,
          background: "#e88d9f",
          color: "#003567",
          borderRadius: "1.3rem",
          padding: "0.45rem 1.3rem",
          marginLeft: "1.5rem",
          boxShadow: "0 2px 8px #0002"
        }}>Login</a>
      </div>
    </nav>
  );
}
