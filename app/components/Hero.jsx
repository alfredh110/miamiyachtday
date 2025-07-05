import React from "react";

export default function Hero({ onBook, onList }) {
  return (
    <section
      style={{
        width: "100vw",
        minHeight: 440,
        background: "linear-gradient(180deg, #1A2330 0%, #5EE6E61F 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative ellipse */}
      <svg style={{
        position: "absolute", top: 40, left: "50%", transform: "translateX(-50%)", zIndex: 0
      }} width="1040" height="170">
        <ellipse cx="520" cy="85" rx="520" ry="85" fill="#5EE6E6" fillOpacity="0.10" />
      </svg>
      {/* Glassmorphic card */}
      <div
        style={{
          position: "relative",
          background: "rgba(35,48,75,0.34)",
          borderRadius: 36,
          padding: "2.5rem 3.7rem",
          boxShadow: "0 8px 36px #151B2633",
          backdropFilter: "blur(12px)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: 48,
            color: "#fff",
            marginBottom: 10,
            textAlign: "center"
          }}
        >
          Charter Miami's Finest Yachts
        </h1>
        <p
          style={{
            fontSize: 24,
            color: "#B0BED8",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: 30,
            textAlign: "center"
          }}
        >
          Effortless booking. Unforgettable luxury.
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          <button
            style={{
              minWidth: 140,
              height: 48,
              borderRadius: 24,
              background: "linear-gradient(90deg, #4568DC 0%, #5EE6E6 100%)",
              border: "none",
              color: "#fff",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer",
              marginRight: 8,
            }}
            onClick={onBook}
          >
            Book Now
          </button>
          <button
            style={{
              minWidth: 140,
              height: 48,
              borderRadius: 24,
              background: "linear-gradient(90deg, #4568DC 0%, #5EE6E6 100%)",
              border: "none",
              color: "#fff",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer"
            }}
            onClick={onList}
          >
            See Yachts
          </button>
        </div>
      </div>
    </section>
  );
}
