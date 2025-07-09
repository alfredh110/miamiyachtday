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
        background: "#19243A",
        borderRadius: "2rem",
        marginTop: "2rem",
        maxWidth: 1100,
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 6px 24px #151B2633",
        fontFamily: "'Inter', Arial, sans-serif",
      }}
    >
      <h3
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          color: "#6E4B28",
          marginBottom: "2.2rem",
          textAlign: "center",
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
              background: "#fff",
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
            tabIndex={0}
            aria-label={`${step.title}: ${step.desc}`}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = "0 8px 28px #6E4B2888";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = "0 4px 16px #151B2633";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div style={{ fontSize: 54, marginBottom: 18 }}>{step.icon}</div>
            <div
              style={{
                fontWeight: 800,
                color: "#6E4B28",
                fontSize: 22,
                marginBottom: 10,
              }}
            >
              {step.title}
            </div>
            <div
              style={{
                color: "#19243A",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: 1.5,
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
