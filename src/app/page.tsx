import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      fontFamily: "'Inter', serif",
      background: "#f9ffff",
      minHeight: "100vh",
      color: "#003567"
    }}>
      {/* Hero Section */}
      <section
        style={{
          width: "100%",
          minHeight: 520,
          background: "linear-gradient(180deg, #003567 60%, #e88d9f 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0",
        }}
      >
        {/* Luxury Miami water background */}
        <Image
          src="/miami-water.jpg"
          alt=""
          fill
          style={{
            objectFit: "cover",
            opacity: 0.45,
            zIndex: 0,
          }}
          priority
        />
        {/* Overlay content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            background: "#f9ffffee",
            borderRadius: "1.6rem",
            maxWidth: 430,
            padding: "2.7rem 2.2rem 2rem 2.2rem",
            margin: "0 2vw",
            boxShadow: "0 8px 32px #00356722",
            border: "2px solid #e88d9f",
          }}
        >
          <h1
  style={{
    color: "#003567",
    fontSize: "1.65rem",
    fontWeight: 800,
    fontFamily: "'Playfair Display', serif",
    marginBottom: 16,
    letterSpacing: "-0.01em",
    lineHeight: 1.22,
  }}
>
  Book a yacht with a touch of refined elegance. Welcome to <span style={{fontWeight:700, color:'#003567'}}>MiamiYachtDay.co</span>
</h1>
          {/* Booking Search UI (luxury styled) */}
          <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <input
              type="text"
              placeholder="Location"
              style={{
                padding: "0.87rem 1.1rem",
                borderRadius: "0.7rem",
                border: "1.5px solid #e88d9f",
                fontSize: "1.07rem",
                fontFamily: "'Inter', serif",
                marginBottom: 2,
                background: "#f9ffff",
                color: "#003567"
              }}
            />
            <div style={{ marginBottom: 14 }}>
              <div style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                width: "100%"
              }}>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                  <label style={{
                    color: "#003567",
                    fontWeight: 600,
                    fontSize: "0.97rem",
                    marginBottom: 3,
                    marginLeft: 4
                  }}>
                    Date
                  </label>
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "0.7rem",
                      border: "1.5px solid #e88d9f",
                      fontSize: ".85rem",
                      fontFamily: "'Inter', serif",
                      background: "#f9ffff",
                      color: "#003567"
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                  <label style={{
                    color: "#003567",
                    fontWeight: 600,
                    fontSize: "0.97rem",
                    marginBottom: 3,
                    marginLeft: 4
                  }}>
                    Departure 
                  </label>
                  <input
                    type="time"
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "0.7rem",
                      border: "1.5px solid #e88d9f",
                      fontSize: "1.07rem",
                      fontFamily: "'Inter', serif",
                      background: "#f9ffff",
                      color: "#003567"
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                  <label style={{
                    color: "#003567",
                    fontWeight: 600,
                    fontSize: "0.97rem",
                    marginBottom: 3,
                    marginLeft: 4
                  }}>
                    Arrival 
                  </label>
                  <input
                    type="time"
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "0.7rem",
                      border: "1.5px solid #e88d9f",
                      fontSize: "1.07rem",
                      fontFamily: "'Inter', serif",
                      background: "#f9ffff",
                      color: "#003567"
                    }}
                  />
                </div>
              </div>
            </div>
            <select
              style={{
                padding: "0.85rem 1.1rem",
                borderRadius: "0.7rem",
                border: "1.5px solid #e88d9f",
                fontSize: "1.07rem",
                fontFamily: "'Inter', serif",
                color: "#003567",
                background: "#f9ffff"
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Party Size (All)
              </option>
              <option>Up to 9 Guest Aboard</option>
              <option>Up to 11 Guest Aboard</option>
              <option>Up to 13 Guest Aboard</option>
              <option>Over 13 Guest Aboard Special Event </option>
           </select>
            <button
              style={{
                marginTop: 6,
                background: "linear-gradient(90deg, #003567 55%, #e88d9f 100%)",
                color: "#f9ffff",
                border: "none",
                borderRadius: "2rem",
                fontWeight: 700,
                fontFamily: "'Inter', serif",
                fontSize: "1.18rem",
                padding: "0.9rem 2rem",
                boxShadow: "0 2px 10px #00356722",
                cursor: "pointer",
                letterSpacing: "0.04em",
                transition: "background 0.17s"
              }}
              type="submit"
            >
              Miami Yachts
            </button>
          </form>
          <div
            style={{
              marginTop: 22,
              fontSize: "1.02rem",
              color: "#003567",
              fontFamily: "'Inter', serif",
              fontWeight: 500,
              textAlign: "center",
              opacity: 0.8,
            }}
          >
            or <a href="#list" style={{ color: "#e88d9f", fontWeight: 700, textDecoration: "underline" }}>List your yacht</a> in minutes
          </div>
        </div>
      </section>

      {/* Yacht Types/Featured Destinations */}
      <section style={{ margin: "68px auto 0 auto", maxWidth: 1200, padding: "0 3vw" }}>
        <h2
          style={{
            fontSize: "2.05rem",
            fontWeight: 700,
            color: "#003567",
            textAlign: "center",
            marginBottom: 30,
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "-0.01em",
          }}
        >
          Explore Miami Yacht Days Locations and Fleet 
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.1rem",
            justifyItems: "center",
            marginBottom: 10,
          }}
        >
          {/* Example yacht/destination cards */}
          {[
            { name: "Motor Yachts", img: "/45' MAXUM CRUISER IN MIAMI FL 2025 WITH @MIAMIYACHTDAY.png" },
            { name: "Catamarans", img: "/catamaran.jpg" },
            { name: "Sailing Yachts", img: "/sailing-yacht.jpg" },
            { name: "Hobie Beach", img: "/HOBIE BEACH.webp" },
            { name: "Nixon Beach", img: "/NIXON SANDBAR.webp" },
            { name: "Marine Stadium", img: "/MARINE STADIUM.jpg" },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                width: 260,
                height: 156,
                borderRadius: "1.1rem",
                overflow: "hidden",
                boxShadow: "0 4px 16px #00356722",
                position: "relative",
                border: "2px solid #e88d9f",
                background: "#f9ffff",
                cursor: "pointer",
                transition: "transform 0.15s"
              }}
              tabIndex={0}
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                style={{
                  objectFit: "cover",
                  filter: "saturate(0.98) brightness(0.97)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "0.7rem 1rem",
                  background: "linear-gradient(0deg, #00356780 80%, transparent 100%)",
                  color: "#f9ffff",
                  fontWeight: 700,
                  fontSize: "1.19rem",
                  fontFamily: "'Inter', serif",
                  textShadow: "0 1px 8px #00356733"
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ margin: "74px auto 0 auto", maxWidth: 1100, padding: "0 3vw" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#003567",
            textAlign: "center",
            marginBottom: 22,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          What Guests Are Saying
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {/* Example testimonials */}
          {[
            {
              name: "William",
              text: "A day of pure luxury on the water. Seamless booking, incredible crew, and the yacht was like a floating Hamptons estate.",
              avatar: "/avatar1.png",
            },
            {
              name: "Charlotte",
              text: "Felt like Gatsby in Miami. Everything was elegant and easy. Highly recommend listing your yacht here.",
              avatar: "/avatar2.png",
            },
            {
              name: "Julian",
              text: "Old money vibes, new money tech. Listing my yacht took just minutes and the guests were fantastic.",
              avatar: "/avatar3.png",
            },
          ].map((t) => (
            <div
              key={t.name}
              style={{
                background: "#f9ffff",
                borderRadius: "1.2rem",
                boxShadow: "0 4px 24px #00356722",
                width: 340,
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem 1.4rem 1.7rem 1.4rem",
                border: "2px solid #e88d9f",
                fontFamily: "'Inter', serif",
                textAlign: "center"
              }}
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={64}
                height={64}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 2px 8px #e88d9f11",
                  marginBottom: 18,
                  border: "3px solid #e88d9f",
                  background: "#f9ffff"
                }}
              />
              <div style={{ fontWeight: 700, color: "#e88d9f", fontSize: 18, marginBottom: 8 }}>
                {t.name}
              </div>
              <div style={{ color: "#003567", fontSize: 16, fontStyle: "italic", fontWeight: 500, lineHeight: 1.5 }}>
                &ldquo;{t.text}&rdquo;
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Owner Call to Action */}
      <section id="list" style={{ margin: "80px auto 0 auto", maxWidth: 650, textAlign: "center", padding: "0 3vw" }}>
        <h3 style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "#003567",
          marginBottom: 18,
          fontFamily: "'Inter', serif",
        }}>
          Own a Yacht?
        </h3>
        <p style={{
          color: "#e88d9f",
          fontSize: "1.08rem",
          fontWeight: 500,
          marginBottom: 18,
        }}>
          List your yacht in under five minutes and join Miami’s most exclusive fleet.
        </p>
        <a
          href="/list-your-yacht"
          style={{
            background: "linear-gradient(90deg, #003567 55%, #e88d9f 100%)",
            color: "#f9ffff",
            border: "none",
            borderRadius: "2rem",
            fontWeight: 700,
            fontFamily: "'Inter', serif",
            fontSize: "1.13rem",
            padding: "0.85rem 2.6rem",
            boxShadow: "0 2px 10px #00356722",
            cursor: "pointer",
            textDecoration: "none",
            marginBottom: 12,
            display: "inline-block"
          }}
        >
          List My Yacht
        </a>
      </section>
    </main>
  );
}
