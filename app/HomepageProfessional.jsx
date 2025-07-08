import React from "react";

// Example imports for images/icons
// import heroImage from "./assets/hero-yacht.jpg";
// import featuredYacht1 from "./assets/yacht1.jpg";
// import featuredYacht2 from "./assets/yacht2.jpg";
// import featuredYacht3 from "./assets/yacht3.jpg";

export default function HomepageProfessional() {
  return (
    <div style={{ background: "#F8F9FA", fontFamily: "'Inter', Arial, sans-serif", color: "#232323" }}>
      {/* NAVBAR */}
      <nav style={{
        background: "#fff",
        borderBottom: "1px solid #ececec",
        padding: "1rem 4vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <span style={{
          color: "#C59C5D",
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: ".03em",
          fontFamily: "inherit"
        }}>
          Miami Yacht Day
        </span>
        <div>
          <button className="nav-btn" style={navBtnStyle}>Listings</button>
          <button className="nav-btn" style={navBtnStyle}>Book a Yacht</button>
          <button className="nav-btn" style={navBtnStyle}>List Yacht</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        background: "url(/hero-yacht.jpg) center/cover no-repeat",
        minHeight: 440,
        padding: "6rem 0 4rem 0",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          background: "rgba(255,255,255,0.75)",
          borderRadius: 22,
          boxShadow: "0 8px 32px rgba(36,44,61,.06)",
          padding: "3rem 2.7rem 2.5rem 2.7rem",
          maxWidth: 560,
          margin: "0 auto",
        }}>
          <h1 style={{
            fontFamily: "inherit",
            fontSize: "2.65rem",
            fontWeight: 700,
            letterSpacing: "0.01em",
            marginBottom: "1.1rem",
            color: "#222",
            lineHeight: 1.18
          }}>
            Charter Miami's Finest Yachts
          </h1>
          <p style={{
            color: "#636363",
            fontSize: "1.13rem",
            marginBottom: "2.2rem"
          }}>
            Effortless booking. Unforgettable luxury.
          </p>
          <button className="button" style={{ ...buttonStyle, marginRight: 14 }}>Book Now</button>
          <button className="button" style={buttonStyle}>See Yachts</button>
        </div>
      </section>

      {/* FEATURED YACHTS */}
      <section className="section" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Featured Yachts</h2>
        <div style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 18,
        }}>
          <YachtCard
            name="Sundeck 26' Sport Boat"
            guests="10 Guests • Crew Included"
            price="$550/day"
            rating={4.8}
            image="/yacht1.jpg"
          />
          <YachtCard
            name="30' HURRICANE GRANDSON"
            guests="10 Guests • Crew Included"
            price="$660/day"
            rating={4.9}
            image="/yacht2.jpg"
          />
          <YachtCard
            name="31' BLACK PEARL AMBERJACK"
            guests="13 Guests • Crew Included • 1 Cabin"
            price="$735/day"
            rating={4.8}
            image="/yacht3.jpg"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>How It Works</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          flexWrap: "wrap",
          marginTop: 18,
        }}>
          <HowItWorksStep
            icon="🚤"
            title="Choose Your Yacht"
            desc="Browse our fleet and select the perfect yacht for your day"
          />
          <HowItWorksStep
            icon="⚡"
            title="Book Instantly"
            desc="Reserve in a few clicks with transparent pricing and easy checkout."
          />
          <HowItWorksStep
            icon="🌴"
            title="Enjoy the Day"
            desc="Set sail stress-free! Our team handles the details for a memorable experience."
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Gallery</h2>
        <div style={{
          minHeight: 110,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#868686",
          fontStyle: "italic"
        }}>
          Gallery coming soon!
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={sectionStyle}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30
        }}>
          <h2 style={{ ...sectionTitleStyle, margin: 0 }}>Testimonials</h2>
          <div>
            <button className="nav-btn" style={navBtnStyle}>Listings</button>
            <button className="nav-btn" style={navBtnStyle}>Book a Yacht</button>
            <button className="nav-btn" style={navBtnStyle}>List Yacht</button>
          </div>
        </div>
        <div style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <TestimonialCard name="John Doe" text="Amazing experience! Highly recommend." />
          <TestimonialCard name="Jane Smith" text="The booking was smooth and the yacht was fantastic." />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section" style={{
        ...sectionStyle,
        background: "linear-gradient(120deg,#232323 60%,#C59C5D 120%)",
        color: "#fff",
        textAlign: "center",
        marginBottom: 28
      }}>
        <h2 style={{
          fontSize: "2.1rem",
          fontWeight: 800,
          letterSpacing: ".03em",
          fontFamily: "inherit",
          marginBottom: "1.2rem",
          color: "#fff",
          textShadow: "0 2px 16px #151B2633"
        }}>
          Ready to sail? <span style={{ color: "#FFD700" }}>Book your Miami Yacht Day!</span>
        </h2>
        <p style={{
          color: "#F7F7F7",
          fontSize: "1.1rem",
          fontWeight: 500,
          marginBottom: "2rem",
          fontFamily: "inherit"
        }}>
          Reserve your luxury yacht today and make memories on the water. Hassle-free online booking. Friendly crew. Unforgettable moments.
        </p>
        <button className="button" style={{
          ...buttonStyle,
          background: "#fff",
          color: "#232323",
          border: "2px solid #C59C5D"
        }}>Book Now</button>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#232323",
        color: "#FFD700",
        textAlign: "left",
        padding: "1.1rem 4vw 1.1rem 4vw",
        fontSize: "1.15rem",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <span>Miami Yacht Day</span>
        <div style={{ color: "#fff", fontSize: "1rem" }}>
          © Miami Yacht Day
          <span style={{ marginLeft: 18 }}>
            <a href="#" style={{ color: "#FFD700", margin: "0 8px" }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" style={{ color: "#FFD700", margin: "0 8px" }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" style={{ color: "#FFD700", margin: "0 8px" }}>
              <i className="fab fa-youtube"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

// ------ Subcomponents ------

function YachtCard({ name, guests, price, rating, image }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 13,
      boxShadow: "0 2px 16px rgba(36,44,61,0.07)",
      padding: "1.1rem 1.2rem 2rem 1.2rem",
      width: 260,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <img src={image} alt={name} style={{
        width: "100%",
        borderRadius: 10,
        marginBottom: 12,
        objectFit: "cover",
        maxHeight: 135,
      }} />
      <h3 style={{
        fontSize: "1.17rem",
        fontWeight: 700,
        margin: "0 0 6px 0",
        color: "#232323"
      }}>{name}</h3>
      <div style={{ color: "#636363", fontSize: 14, marginBottom: 7 }}>{guests}</div>
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 13,
        gap: 10,
        color: "#C59C5D"
      }}>
        <span style={{ fontWeight: 700, fontSize: 16 }}>★ {rating}</span>
        <span style={{
          background: "#f8f2e7",
          color: "#C59C5D",
          padding: "2px 10px",
          borderRadius: 6,
          fontWeight: 600,
          fontSize: 15
        }}>{price}</span>
      </div>
      <div>
        <button className="button" style={{ ...buttonStyle, marginRight: 8, border: "2px solid #C59C5D" }}>Book Now</button>
        <button className="button" style={{ ...buttonStyle, background: "#232323", color: "#fff", border: "none" }}>View Details</button>
      </div>
    </div>
  );
}

function HowItWorksStep({ icon, title, desc }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 1px 10px rgba(36,44,61,0.04)",
      padding: "1.7rem 1.4rem",
      width: 220,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <span style={{ fontSize: 38, marginBottom: 10 }}>{icon}</span>
      <h4 style={{
        fontWeight: 700,
        fontSize: 18,
        margin: "0 0 8px 0",
        color: "#232323"
      }}>{title}</h4>
      <div style={{ color: "#636363", fontSize: 15, textAlign: "center" }}>{desc}</div>
    </div>
  );
}

function TestimonialCard({ name, text }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 13,
      boxShadow: "0 2px 16px rgba(36,44,61,0.07)",
      padding: "2.1rem 1.5rem 1.7rem 1.5rem",
      width: 280,
      textAlign: "center"
    }}>
      <div style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "#e8e8e8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 20,
        color: "#232323",
        margin: "0 auto 18px auto"
      }}>
        {name.split(" ").map(w => w[0]).join("")}
      </div>
      <div style={{ fontWeight: 700, marginBottom: 6 }}>{name}</div>
      <div style={{ color: "#636363", fontSize: 15, fontStyle: "italic" }}>{text}</div>
    </div>
  );
}

// ------ Styles ------
const buttonStyle = {
  background: "#fff",
  color: "#232323",
  border: "2px solid #C59C5D",
  borderRadius: 25,
  padding: "11px 34px",
  fontWeight: 500,
  fontSize: "1rem",
  letterSpacing: "0.01em",
  cursor: "pointer",
  transition: "all 0.15s"
};

const navBtnStyle = {
  background: "none",
  color: "#232323",
  border: "none",
  fontSize: "1rem",
  marginLeft: "1.3rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "color 0.14s"
};

const sectionStyle = {
  background: "#fff",
  borderRadius: 14,
  boxShadow: "0 4px 24px rgba(36,44,61,0.06)",
  padding: "3rem 2rem",
  margin: "2.5rem auto",
  maxWidth: 1100,
};

const sectionTitleStyle = {
  fontSize: "1.6rem",
  fontWeight: 700,
  letterSpacing: ".01em",
  color: "#232323",
  marginBottom: 14,
  fontFamily: "inherit",
};
