import React from "react";

export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      background: "#003567",
      color: "#f9ffff",
      padding: "2.2rem 0 1.2rem 0",
      textAlign: "center",
      fontFamily: "'Inter', Arial, sans-serif",
      marginTop: "4rem",
      letterSpacing: "0.01em"
    }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "1.3rem", color: "#e88d9f" }}>
        MiamiYachtDay.co
      </div>
      <div style={{ margin: "0.8rem 0", color: "#e88d9f", fontWeight: 500 }}>
        Luxury Yacht Rentals & Listings | Miami, FL
      </div>
      <div style={{ fontSize: "0.98rem", opacity: 0.9 }}>
        &copy; {new Date().getFullYear()} MiamiYachtDay. All rights reserved.
      </div>
    </footer>
  );
}
