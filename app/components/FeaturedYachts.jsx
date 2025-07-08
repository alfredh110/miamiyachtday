import React from "react";

const yachts = [
  {
    name: "Sundeck 26' Sport Boat",
    image: "AB-MODELIT-BOAT-MIAMIYACHTDAY-18.JPG",
    guests: 10,
    crew: true,
    cabins: 0,
    rating: 4.8,
    price: "$550/day"
  },
  {
    name: "30' HURRICANE GRANDSON",
    image: "AB-30FT HURRICANE GRANDSON.jpg",
    guests: 10,
    crew: true,
    cabins: 0,
    rating: 4.9,
    price: "$650/day"
  },
  {
    name: "31' BLACK PEARL AMBERJACK",
    image: "AB-31FT BLACK PEAR AMBERJACK.jpg",
    guests: 13,
    crew: true,
    cabins: 1,
    rating: 5.0,
    price: "$750/day"
  }
];

export default function FeaturedYachts({ onBook }) {
  return (
    <section style={{
      padding: "2.5rem 4vw",
      background: "#19243A", // navy blue
      borderRadius: "2rem",
      marginTop: "2rem",
      maxWidth: 1200, marginLeft: "auto", marginRight: "auto",
      boxShadow: "0 6px 24px #151B2633"
    }}>
      <h3 style={{
        fontSize: "1.7rem",
        fontWeight: 700,
        letterSpacing: "0.01em",
        color: "#6E4B28", // dark brown
        marginBottom: "2.1rem",
        fontFamily: "Montserrat, sans-serif"
      }}>
        Featured Yachts
      </h3>
      <div style={{
        display: "flex",
        gap: "2.6rem",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {yachts.map((yacht, i) => (
          <div
            key={i}
            style={{
              background: "#fff", // card background white
              borderRadius: "1.6rem",
              boxShadow: "0 2px 16px #151B2633",
              width: 320,
              minHeight: 450,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1.2rem 1.1rem 1.7rem 1.1rem",
              transition: "box-shadow 0.2s, transform 0.2s",
              cursor: "pointer",
              position: "relative",
              borderLeft: "7px solid #6E4B28"
            }}
            tabIndex={0}
            aria-label={`Featured yacht: ${yacht.name}`}
            onMouseOver={e => e.currentTarget.style.boxShadow = "0 8px 28px #6E4B2888"}
            onMouseOut={e => e.currentTarget.style.boxShadow = "0 2px 16px #151B2633"}
          >
            <img
              src={yacht.image}
              alt={yacht.name}
              style={{
                width: "100%",
                height: 180,
                borderRadius: 18,
                objectFit: "cover",
                marginBottom: 18,
                boxShadow: "0 2px 10px #19243A33"
              }}
            />
            <div style={{
              fontWeight: 700,
              fontSize: 20,
              color: "#19243A", // navy
              marginBottom: 9,
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif"
            }}>
              {yacht.name}
            </div>
            <div style={{
              color: "#6E4B28", // dark brown
              fontSize: 15,
              marginBottom: 12,
              textAlign: "center"
            }}>
              {yacht.guests} Guests • {yacht.crew ? "Crew Included" : "No Crew"}{yacht.cabins ? ` • ${yacht.cabins} Cabin${yacht.cabins > 1 ? "s" : ""}` : ""}
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 10
            }}>
              <span style={{ fontSize: 18, color: "#FFD700" }}>★ {yacht.rating}</span>
              <span style={{
                background: "#F8F2E7", // light brownish
                color: "#6E4B28",
                borderRadius: 12,
                padding: "2px 12px",
                fontWeight: 600,
                fontSize: 15
              }}>{yacht.price}</span>
            </div>
            <button
              style={{
                background: "#6E4B28", // dark brown
                color: "#fff",
                fontWeight: 700,
                border: "none",
                borderRadius: 16,
                fontSize: 16,
                padding: "10px 30px",
                marginTop: "auto",
                cursor: "pointer",
                boxShadow: "0 1px 8px #151B2633",
                transition: "background 0.18s"
              }}
              onClick={onBook}
            >
              Book Now
            </button>
            <button
              style={{
                marginTop: 8,
                background: "transparent",
                border: "2px solid #6E4B28",
                color: "#6E4B28",
                fontWeight: 600,
                borderRadius: 16,
                fontSize: 15,
                padding: "7px 18px",
                cursor: "pointer",
                transition: "color 0.16s, border-color 0.16s"
              }}
              onClick={() => alert('Details coming soon!')}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
