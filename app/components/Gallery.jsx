import React from "react";

// Sample gallery images - replace with your actual images or import from data
const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg"
];

export default function Gallery() {
  return (
    <section style={{
      padding: "2rem 4vw",
      background: "rgba(36,44,61,0.87)",
      borderRadius: "2rem",
      marginTop: "2rem"
    }}>
      <h3 style={{
        fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.02em",
        color: "#5EE6E6", marginBottom: "2rem"
      }}>Gallery</h3>
      <div style={{
        display: "flex",
        gap: "1.5rem",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Miami Yacht Gallery ${i + 1}`}
            style={{
              width: 220,
              height: 150,
              objectFit: "cover",
              borderRadius: 18,
              boxShadow: "0 4px 18px #151B2633"
            }}
          />
        ))}
      </div>
    </section>
  );
}
