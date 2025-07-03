"use client";

export default function Home() {
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
          <a href="#list" style={navBtnStyle}>List Your Yacht</a>
          <a href="#book" style={navBtnStyle}>Book a Yacht</a>
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
          <a href="#book" style={primaryBtnStyle}>Find a Yacht</a>
          <a href="#list" style={secondaryBtnStyle}>List Your Yacht</a>
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
              <a href="#book" style={primaryBtnStyle}>Book Now</a>
            </div>
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
        <a href="#list" style={primaryBtnStyle}>List Your Yacht</a>
      </section>
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
  boxShadow: "0 2px 8px #0ef0f622"
};

// Yacht Showcase Data
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
