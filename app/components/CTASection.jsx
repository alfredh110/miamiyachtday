import React from "react";

export default function CTASection() {
  return (
    <section
      style={{
        margin: "3rem auto 0 auto",
        padding: "2.5rem 4vw",
        maxWidth: 800,
        borderRadius: "2rem",
        background: "linear-gradient(120deg,#19243A 80%,#6E4B28 140%)", // navy to dark brown
        boxShadow: "0 6px 24px #151B2633",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "2.2rem",
          fontWeight: 800,
          letterSpacing: ".03em",
          fontFamily: "Montserrat, sans-serif",
          marginBottom: "1.2rem",
          textShadow: "0 2px 12px #151B2633",
        }}
      >
        Ready to sail? <span style={{ color: "#FFD700" }}>Book your Miami Yacht Day!</span>
      </h2>
      <p
        style={{
          color: "#fff",
          fontSize: "1.14rem",
          fontWeight: 500,
          marginBottom: "2rem",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Reserve your luxury yacht today and make memories on the water. Hassle-free online booking. Friendly crew. Unforgettable moments.
      </p>
      <button
        style={{
          background: "#6E4B28", // dark brown
          color: "#fff",
          fontWeight: 700,
          border: "none",
          borderRadius: 16,
          fontSize: 18,
          padding: "14px 44px",
          cursor: "pointer",
          boxShadow: "0 1px 8px #151B2633",
          transition: "background 0.18s, box-shadow 0.18s, transform 0.18s",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Book Now
      </button>
    </section>
  );
}
