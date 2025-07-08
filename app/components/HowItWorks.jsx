import React from "react";

const steps = [
  {
    icon: "🛥️",
    title: "Choose Your Yacht",
    desc: "Browse our fleet and select the perfect yacht for your day.",
  },
  {
    icon: "⚡",
    title: "Book Instantly",
    desc: "Reserve in a few clicks with transparent pricing and easy checkout.",
  },
  {
    icon: "🌴",
    title: "Enjoy the Day",
    desc: "Set sail stress-free! Our team handles the details for a memorable experience.",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        padding: "2.5rem 4vw",
        background: "#19243A", // navy blue
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
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          color: "#6E4B28", // dark brown
          marginBottom: "2.2rem",
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        How It Works
      </h3>
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              background: "#fff", // white card
              borderRadius: 36,
              width: 230,
              minHeight: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem 1.1rem",
              boxShadow: "0 4px 16px #151B2633",
              transition: "box-shadow 0.2s, transform 0.2s",
              textAlign: "center",
              borderLeft: "6px solid #6E4B28",
            }}
          >
            <div style={{ fontSize: 54, marginBottom: 18 }}>{step.icon}</div>
            <div
              style={{
                fontWeight: 800,
                color: "#6E4B28", // dark brown
                fontSize: 22,
                marginBottom: 10,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {step.title}
            </div>
            <div
              style={{
                color: "#19243A", // navy for text
                fontSize: 16,
                fontWeight: 500,
                lineHeight: 1.5,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
