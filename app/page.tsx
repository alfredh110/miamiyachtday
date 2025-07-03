"use client";

import React, { useState } from "react";

// --- Testimonials and Gallery Data ---
const testimonials = [
  {
    name: "Sophia R.",
    role: "Yacht Owner",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Listing my yacht was seamless, and I connected with amazing clients. Miami Yacht Day is the real deal for yacht owners!"
  },
  {
    name: "Lucas M.",
    role: "Client",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Our group had the most incredible day cruising the Miami coast. Impeccable service, beautiful yacht, and unforgettable memories."
  },
  {
    name: "Ava T.",
    role: "Client",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "The booking process was so easy and transparent. We felt like Miami celebrities for the day—highly recommend!"
  }
];

const galleryPhotos = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
];

const yachtCards = [
  {
    name: "Sunseeker 88 Yacht",
    desc: "88ft • 12 Guests • 5 Cabins • Crew Included",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Azimut Grande",
    desc: "90ft • 14 Guests • 6 Cabins • Jet Ski & Toys",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Pershing 70",
    desc: "70ft • 10 Guests • 4 Cabins • Ultra Luxury",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Home() {
  const [showOwnerForm, setShowOwnerForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0ef0f6 0%, #5a88fa 100%)",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#16203a",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Navigation */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "2rem 4vw", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)"
      }}>
        <h1 style={{
          fontWeight: 900, fontSize: "2.2rem", letterSpacing: "1px",
          color: "#fff", textShadow: "0 2px 16px #0ef0f644"
        }}>
          Miami Yacht Day
        </h1>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button onClick={() => setShowOwnerForm(true)} style={navBtnStyle}>List Your Yacht</button>
          <button onClick={() => setShowBookingForm(true)} style={navBtnStyle}>Book a Yacht</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "2rem 4vw"
      }}>
        <h2 style={{
          fontSize: "3rem", fontWeight: 700, color: "#fff",
          marginBottom: "1.5rem", textShadow: "0 2px 24px #0ef0f6bb"
        }}>
          Experience Miami’s <span style={{color:'#0ef0f6'}}>Luxury</span> on the Water
        </h2>
        <p style={{
          fontSize: "1.4rem",
          background: "rgba(255,255,255,0.25)",
          padding: "1rem 2rem",
          borderRadius: "18px",
          color: "#fff",
          marginBottom: "2rem",
          boxShadow: "0 2px 16px #5a88fa44"
        }}>
          Book a glamorous yacht for your next Miami adventure, or list your own vessel and join the city’s elite fleet.
        </p>
        <div style={{ display: "flex", gap: "2rem", marginTop: "1rem", justifyContent: "center" }}>
          <button onClick={() => setShowBookingForm(true)} style={primaryBtnStyle}>Find a Yacht</button>
          <button onClick={() => setShowOwnerForm(true)} style={secondaryBtnStyle}>List Your Yacht</button>
        </div>
      </section>

      {/* Yacht Showcase Example */}
      <section id="book" style={{
        marginTop: "4rem", padding: "2rem 4vw", background: "rgba(255,255,255,0.08)", borderRadius: "2rem"
      }}>
        <h3 style={{
          fontSize: "2rem", fontWeight: 600, letterSpacing: "0.02em",
          color: "#fff", marginBottom: "2rem"
        }}>Featured Yachts</h3>
        <div style={{ display: "flex", gap: "2rem", overflowX: "auto" }}>
          {yachtCards.map((yacht, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.18)",
              borderRadius: "1.5rem",
              minWidth: 300,
              padding: "1.5rem",
              boxShadow: "0 4px 32px #0ef0f622",
              display: "flex", flexDirection: "column", alignItems: "center"
            }}>
              <img src={yacht.img} alt={yacht.name} style={{
                width: "100%", borderRadius: "1rem", marginBottom: "1rem", objectFit: "cover", height: 180
              }} />
              <h4 style={{ fontWeight: 700, color: "#0ef0f6", fontSize: "1.2rem" }}>{yacht.name}</h4>
              <div style={{ color: "#fff", margin: "0.5rem 0" }}>{yacht.desc}</div>
              <button onClick={() => setShowBookingForm(true)} style={primaryBtnStyle}>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        marginTop: "4rem", padding: "2rem 4vw", background: "rgba(255,255,255,0.12)", borderRadius: "2rem"
      }}>
        <h3 style={{
          fontSize: "2rem", fontWeight: 600, letterSpacing: "0.02em",
          color: "#fff", marginBottom: "2rem"
        }}>Testimonials</h3>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.18)",
              borderRadius: "1.2rem",
              padding: "1.5rem",
              maxWidth: 340,
              minWidth: 260,
              boxShadow: "0 4px 24px #0ef0f622",
              display: "flex", flexDirection: "column"
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                <img src={t.avatar} alt={t.name} style={{
                  width: 48, height: 48, borderRadius: "50%", marginRight: 12, border: "2px solid #0ef0f6"
                }} />
                <div>
                  <div style={{ color: "#0ef0f6", fontWeight: 700 }}>{t.name}</div>
                  <div style={{ color: "#fff", fontSize: 13 }}>{t.role}</div>
                </div>
              </div>
              <div style={{ color: "#fff", fontSize: 16, fontStyle: "italic" }}>
                “{t.text}”
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{
        marginTop: "4rem", marginBottom: "2rem", padding: "2rem 4vw", background: "rgba(255,255,255,0.09)", borderRadius: "2rem"
      }}>
        <h3 style={{
          fontSize: "2rem", fontWeight: 600, letterSpacing: "0.02em",
          color: "#fff", marginBottom: "2rem"
        }}>Gallery: Miami Yacht Days</h3>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem", alignItems: "center"
        }}>
          {galleryPhotos.map((url, i) => (
            <img key={i} src={url} alt={`Miami Yacht ${i + 1}`} style={{
              width: "100%", borderRadius: "1.2rem", boxShadow: "0 2px 16px #0ef0f644", objectFit: "cover", height: 160
            }} />
          ))}
        </div>
      </section>

      {/* Owner CTA */}
      <section id="list" style={{
        margin: "6rem 0 2rem 0", display: "flex", flexDirection: "column",
        alignItems: "center", gap: "1.5rem"
      }}>
        <h3 style={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>
          Are you a Yacht Owner?
        </h3>
        <p style={{ color: "#fff", fontSize: "1.1rem", background: "rgba(0,0,0,0.13)", borderRadius: 12, padding: "0.7rem 1.5rem" }}>
          List your vessel with Miami Yacht Day and reach exclusive clients seeking luxury experiences.
        </p>
        <button onClick={() => setShowOwnerForm(true)} style={primaryBtnStyle}>List Your Yacht</button>
      </section>

      {/* Owner Form Modal */}
      {showOwnerForm && (
        <Modal onClose={() => setShowOwnerForm(false)}>
          <OwnerForm />
        </Modal>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && (
        <Modal onClose={() => setShowBookingForm(false)}>
          <BookingForm />
        </Modal>
      )}
    </main>
  );
}

// Button Styles
const primaryBtnStyle = {
  background: "linear-gradient(90deg, #0ef0f6 0%, #5a88fa 100%)",
  color: "#fff",
  padding: "0.9rem 2rem",
  borderRadius: "2rem",
  fontWeight: 700,
  boxShadow: "0 2px 8px #0ef0f633",
  fontSize: "1.1rem",
  border: "none",
  cursor: "pointer",
  textDecoration: "none"
};
const secondaryBtnStyle = {
  background: "rgba(255,255,255,0.18)",
  color: "#0ef0f6",
  padding: "0.9rem 2rem",
  borderRadius: "2rem",
  fontWeight: 700,
  fontSize: "1.1rem",
  border: "2px solid #0ef0f6",
  cursor: "pointer",
  textDecoration: "none"
};
const navBtnStyle = {
  color: "#fff",
  fontWeight: 600,
  background: "rgba(255,255,255,0.12)",
  padding: "0.7rem 1.5rem",
  borderRadius: "1.2rem",
  textDecoration: "none",
  fontSize: "1rem",
  boxShadow: "0 2px 8px #0ef0f622",
  border: "none",
  cursor: "pointer"
};

// Modal Component
function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(16,40,80,0.68)", display: "flex", alignItems: "center",
      justifyContent: "center", zIndex: 1000
    }}>
      <div style={{
        background: "#fff", borderRadius: "1.5rem", padding: "2rem", minWidth: 320,
        boxShadow: "0 8px 48px #0ef0f644", position: "relative"
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 18, right: 22, background: "none", border: "none",
          fontSize: "1.5rem", color: "#0ef0f6", cursor: "pointer"
        }}>×</button>
        {children}
      </div>
    </div>
  );
}

// Owner Listing Form
function OwnerForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <h3 style={{ marginBottom: 8, color: "#16203a" }}>List Your Yacht</h3>
      <input style={inputStyle} placeholder="Your Name" required />
      <input style={inputStyle} placeholder="Email" type="email" required />
      <input style={inputStyle} placeholder="Yacht Name" required />
      <input style={inputStyle} placeholder="Yacht Length (ft)" required />
      <input style={inputStyle} placeholder="Guest Capacity" required />
      <textarea style={inputStyle} placeholder="Describe your yacht & amenities" rows={3} required />
      <button type="submit" style={primaryBtnStyle}>Submit Listing</button>
    </form>
  );
}

// Booking Inquiry Form
function BookingForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <h3 style={{ marginBottom: 8, color: "#16203a" }}>Book a Yacht</h3>
      <input style={inputStyle} placeholder="Your Name" required />
      <input style={inputStyle} placeholder="Email" type="email" required />
      <input style={inputStyle} placeholder="Preferred Date" type="date" required />
      <input style={inputStyle} placeholder="Number of Guests" required />
      <textarea style={inputStyle} placeholder="Tell us about your occasion" rows={3} />
      <button type="submit" style={primaryBtnStyle}>Send Inquiry</button>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  border: "1px solid #0ef0f6",
  borderRadius: 8,
  padding: "0.7rem 1rem",
  fontSize: "1rem",
  background: "rgba(240,248,255,0.7)",
  outline: "none"
};
