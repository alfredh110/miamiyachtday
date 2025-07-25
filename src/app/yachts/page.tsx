import Image from "next/image";

const YACHTS = [
  {
    name: "26' Sundeck Sport Boat",
    img: "/AB-MODELIT-BOAT-MIAMIYACHTDAY-18.JPG",
    description: "Sporty and spacious for Miami adventures."
  },
  {
    name: "31' Black Pearl Sea Ray",
    img: "/AB-31FT BLACK PEAR AMBERJACK.jpg",
    description: "Luxury, comfort, and style—perfect for your day out."
  },
  {
    name: "30' Hurricane Grandson",
    img: "/AB-30FT HURRICANE GRANDSON.jpg",
    description: "Comfort and Style for Miami Adventures."
  },
  {
    name: "45' Maxum Cruiser",
    img: "45' MAXUM CRUISER IN MIAMI FL 2025 WITH @MIAMIYACHTDAY.png",
    description: "Maximum Cruise Experience in Miami."
  },
  {
    name: "47' Azimut Escape",
    img: "ESCAPE 47’ yacht Modeluvin @MiamiYachtDay MandyB event production.jpg",
    description: " Luxury Meets Class the Azimut is one of a kind."
  },
  {
    name: "48' Meridian Iris",
    img: "48 ft-meridian iris modeluvin yacht day icon logo.jpg.",
    description: " Smooth Sailing on this Beauty."
  },
];

export default function YachtsPage() {
  return (
    <main style={{ background: "#f9ffff", minHeight: "100vh", padding: "40px 0" }}>
      <h1 style={{
        textAlign: "center",
        color: "#003567",
        fontSize: "2.1rem",
        fontFamily: "'Playfair Display', serif",
        fontWeight: 800,
        marginBottom: 38
      }}>
        Charter Yachts
      </h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat (auto-fit, minmax(320px, 1fr)",
        gap: "2.4rem",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 3vw",
      }}>
        {YACHTS.map((yacht) => (
          <div
            key={yacht.name}
            style={{
              background: "#f9ffff",
              borderRadius: "1.2rem",
              boxShadow: "0 4px 24px #00356722",
              border: "2px solid #e88d9f",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem 1.4rem 1.6rem 1.4rem",
              textAlign: "center"
            }}
          >
            <Image
              src={yacht.img}
              alt={yacht.name}
              width={260}
              height={156}
              style={{ borderRadius: "1rem", objectFit: "cover", marginBottom: 14 }}
            />
            <div style={{ fontWeight: 700, color: "#003567", fontSize: "1.15rem", marginBottom: 6 }}>
              {yacht.name}
            </div>
            <div style={{ color: "#e88d9f", fontSize: "1rem", fontWeight: 500, marginBottom: 4 }}>
              {yacht.description}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
