import React from "react";

export default function Hero({ onBook, onList }) {
  return (
    <section
      style={{
        width: "100vw",
        minHeight: 440,
        background: "#19243A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', Arial, sans-serif"
      }}
    >
      {/* Decorative ellipse */}
      <svg
        style={{
          position: "absolute",
          top: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0
        }}
        width="1040"
        height="170"
        aria-hidden="true"
        focusable="false"
      >
        <ellipse cx="520" cy="85" rx="520" ry="85" fill="#6E4B28" fillOpacity="0.10" />
      </svg>
      {/* Glassmorphic card */}
      <div
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.23)",
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
            fontFamily: "'Inter', Arial, sans-serif",
            fontWeight: 700,
            fontSize: 48,
            color: "#19243A",
            marginBottom: 10,
            textAlign: "center"
          }}
        >
          Charter Miami's Finest Yachts
        </h1>
        <p
          style={{
            fontSize: 24,
            color: "#6E4B28",
            fontFamily: "'Inter', Arial, sans-serif",
            marginBottom: 30,
            textAlign: "center"
          }}
        >
          Effortless booking. Unforgettable luxury.
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          <button
            style={{
              minWidth: 140,
              height: 48,
              borderRadius: 24,
              background: "#6E4B28",
              border: "none",
              color: "#fff",
              fontFamily: "'Inter', Arial, sans-serif",
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer",
              marginRight: 8,
              transition: "background 0.16s"
            }}
            onClick={onBook}
            aria-label="Book a yacht now"
          >
            Book Now
          </button>
          <button
            style={{
              minWidth: 140,
              height: 48,
              borderRadius: 24,
              background: "#fff",
              border: `2px solid #6E4B28`,
              color: "#6E4B28",
              fontFamily: "'Inter', Arial, sans-serif",
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer",
              transition: "background 0.16s, color 0.16s"
            }}
            onClick={onList}
            aria-label="List your yacht"
          >
            List Yachts
          </button>
        </div>
      </div>
    </section>
  );
}n>
  );
}
