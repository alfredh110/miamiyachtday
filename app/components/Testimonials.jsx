import React from "react";

const testimonials = [
  {
    name: "John Doe",
    text: "Amazing experience! Highly recommend.",
    avatar: "/avatar1.png",
  },
  {
    name: "Jane Smith",
    text: "The booking was smooth and the yacht was fantastic.",
    avatar: "/avatar2.png",
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "2.5rem 4vw",
        background: "rgba(36,44,61,0.92)",
        borderRadius: "2rem",
        marginTop: "2rem",
        maxWidth: 1100,
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 6px 24px #151B2633",
      }}
    >
      <h3
        style={{
          fontSize: "1.7rem",
          fontWeight: 700,
          letterSpacing: "0.01em",
          color: "#5EE6E6",
          marginBottom: "2.1rem",
          fontFamily: "Montserrat, sans-serif",
          textAlign: "center",
        }}
      >
        Testimonials
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              background: "rgba(51,60,88,1)",
              borderRadius: "1.6rem",
              boxShadow: "0 2px 16px #151B2633",
              width: 340,
              minHeight: 180,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem 1.4rem 1.7rem 1.4rem",
              textAlign: "center",
              position: "relative",
            }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 2px 8px #232F4B55",
                marginBottom: 18,
                border: "3px solid #5EE6E6",
                background: "#fff"
              }}
              onError={e => {
                e.target.src =
                  "https://ui-avatars.com/api/?background=5EE6E6&color=232F4B&name=" +
                  encodeURIComponent(t.name);
              }}
            />
            <div
              style={{
                fontWeight: 700,
                color: "#5EE6E6",
                fontSize: 18,
                marginBottom: 8,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {t.name}
            </div>
            <div
              style={{
                color: "#B0BED8",
                fontSize: 16,
                fontStyle: "italic",
                fontWeight: 500,
                lineHeight: 1.5,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              &ldquo;{t.text}&rdquo;
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
