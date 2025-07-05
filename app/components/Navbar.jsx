import React from "react";

export default function Navbar({ onBook, onList }) {
  return (
    <nav
      style={{
        width: "100vw",
        height: 90,
        background: "rgba(35,48,75,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 56px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxSizing: "border-box",
        borderBottom: "1px solid #23304B",
      }}
    >
      <div style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "900",
        fontSize: 38,
        color: "#FFD700",
        letterSpacing: ".02em"
      }}>
        Miami Yacht Day
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        <button
          style={{
            minWidth: 120,
            height: 38,
            borderRadius: 19,
            background: "linear-gradient(90deg, #4568DC 0%, #5EE6E6 100%)",
            border: "none",
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: 17,
            cursor: "pointer",
            transition: "background 0.2s"
          }}
          onClick={onBook}
        >
          Book a Yacht
        </button>
        <button
          style={{
            minWidth: 120,
            height: 38,
            borderRadius: 19,
            background: "linear-gradient(90deg, #4568DC 0%, #5EE6E6 100%)",
            border: "none",
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: 17,
            cursor: "pointer",
            transition: "background 0.2s"
          }}
          onClick={onList}
        >
          List Yacht
        </button>
      </div>
    </nav>
  );
}
