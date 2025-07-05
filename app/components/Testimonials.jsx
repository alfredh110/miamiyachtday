import React from "react";
import testimonials from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section style={{
      padding: "2rem 4vw",
      background: "rgba(36,44,61,0.88)",
      borderRadius: "2rem",
      marginTop: "2rem"
    }}>
      <h3 style={{
        fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.02em",
        color: "#5EE6E6", marginBottom: "2rem"
      }}>Testimonials</h3>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        {testimonials.map((t, i) => (
          <TestimonialCard testimonial={t} key={i} />
        ))}
      </div>
    </section>
  );
}
