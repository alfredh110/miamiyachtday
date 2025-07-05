import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#23304B",
      color: "#FFD700",
      padding: "2rem 0",
      marginTop: "3rem",
      textAlign: "center"
    }}>
      <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 22 }}>
        © Miami Yacht Day
      </div>
      <div style={{ marginTop: 12 }}>
        <span style={{ margin: "0 18px" }}>IG</span>
        <span style={{ margin: "0 18px" }}>FB</span>
        <span style={{ margin: "0 18px" }}>X</span>
      </div>
    </footer>
  );
}
