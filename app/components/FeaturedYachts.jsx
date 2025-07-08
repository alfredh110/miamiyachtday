import React from "react";

const yachts = [
  {
    name: "Sundeck 26' Sport Boat",
    image: "AB-,ODELIT-BOAT-MIAMIYACHTDAY-18.jpg",
    guests: 10,
    crew: true,
    cabins: 0,
    rating: 4.8,
    price: "$550/day"
  },
  {
    name: "30' HURRICANE GRANDSON",
    image: "AB-30FTHURRICANGRANDSON.jpg",
    guests: 10,
    crew: true,
    cabins: 0,
    rating: 4.9,
    price: "$650/day"
  },
  {
    name: "31' BLACK PEARL AMBERJACK",
    image: "AB-31FTBLACKPEARAMBERJACK.jpg",
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
      background: "rgba(36,44,61,0.93)",
      borderRadius: "2rem",
      marginTop: "2rem",
      maxWidth: 1200, marginLeft: "auto", marginRight: "auto",
      boxShadow: "0 6px 24px #151B2633"
    }}>
      <h3 style={{
        fontSize: "1.7rem",
        fontWeight: 700,
        letterSpacing: "0.01em",
        color: "#5EE6E6",
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
              background: "rgba(51,60,88,1)",
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
              position: "relative"
            }}
            tabIndex={0}
            aria-label={`Featured yacht: ${yacht.name}`}
            onMouseOver={e => e.currentTarget.style.boxShadow = "0 8px 28px #5EE6E677"}
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
                boxShadow: "0 2px 10px #232F4B33"
              }}
            />
            <div style={{
              fontWeight: 700,
              fontSize: 20,
              color: "#fff",
              marginBottom: 9,
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif"
            }}>
              {yacht.name}
            </div>
            <div style={{
              color: "#A1B8EA",
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
                background: "#5EE6E6",
                color: "#232F4B",
                borderRadius: 12,
                padding: "2px 12px",
                fontWeight: 600,
                fontSize: 15
              }}>{yacht.price}</span>
            </div>
            <button
              style={{
                background: "linear-gradient(90deg,#5EE6E6 0%,#4568DC 100%)",
                color: "#fff",
                fontWeight: 700,
                border: "none",
                borderRadius: 7,
                fontSize: 16,
                padding: "10px 30px",
                marginTop: "auto",
                cursor: "pointer",
                boxShadow: "0 1px 8px #151B2633"
              }}
              onClick={onBook}
            >
              Book Now
            </button>
            <button
              style={{
                marginTop: 8,
                background: "transparent",
                border: "1px solid #5EE6E6",
                color: "#5EE6E6",
                fontWeight: 600,
                borderRadius: 7,
                fontSize: 15,
                padding: "7px 18px",
                cursor: "pointer"
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
