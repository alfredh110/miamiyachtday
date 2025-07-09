import React from "react";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg"
  // Add more images or adjust as needed
];

export default function Gallery() {
  return (
    <section
      style={{
        padding: "2.5rem 4vw",
        background: "#19243A",
        borderRadius: "2rem",
        marginTop: "2rem",
        maxWidth: 1100,
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 6px 24px #151B2633",
        minHeight: 260,
        fontFamily: "'Inter', Arial, sans-serif"
      }}
    >
      <h3
        style={{
          fontSize: "1.7rem",
          fontWeight: 700,
          letterSpacing: "0.01em",
          color: "#6E4B28",
          marginBottom: "2.1rem",
          textAlign: "center",
        }}
      >
        Gallery
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.7rem",
          justifyItems: "center",
        }}
      >
        {images.length === 0 ? (
          <div
            style={{
              color: "#6E4B28",
              fontSize: 18,
              textAlign: "center",
              gridColumn: "1/-1",
              padding: "2.5rem 0",
              opacity: 0.8
            }}
          >
            Gallery coming soon!
          </div>
        ) : (
          images.map((src, i) => (
            <div
              key={i}
              style={{
                width: 220,
                height: 150,
                borderRadius: 18,
                boxShadow: "0 4px 18px #151B2633",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.18s, box-shadow 0.18s",
                cursor: "pointer",
                borderLeft: "6px solid #6E4B28"
              }}
              tabIndex={0}
              aria-label={`Gallery image ${i + 1}`}
              onMouseOver={e => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow = "0 8px 28px #6E4B2888";
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 18px #151B2633";
              }}
            >
              <img
                src={src}
                alt={`Miami Yacht Gallery ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 18
                }}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
