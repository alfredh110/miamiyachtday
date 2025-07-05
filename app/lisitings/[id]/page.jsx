"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function YachtDetails() {
  const params = useParams();
  const { id } = params;
  const [yacht, setYacht] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/listings/" + id)
      .then(res => res.json())
      .then(data => {
        setYacht(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{ textAlign: "center", color: "#fff", marginTop: 60 }}>Loading...</div>;
  if (!yacht) return <div style={{ textAlign: "center", color: "#fff", marginTop: 60 }}>Yacht not found.</div>;

  return (
    <div style={{
      maxWidth: 900,
      margin: "40px auto",
      padding: 16,
      color: "#fff"
    }}>
      <div style={{
        background: "#232C3B",
        borderRadius: 18,
        boxShadow: "0 2px 20px rgba(30,40,56,.12)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {yacht.photo && (
          <img
            src={yacht.photo}
            alt={yacht.yachtName}
            style={{
              width: "100%",
              maxHeight: 380,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
        <div style={{ padding: "32px 24px", width: "100%" }}>
          <h1 style={{ color: "#5EE6E6", fontSize: 36, marginBottom: 12 }}>{yacht.yachtName}</h1>
          <div style={{ marginBottom: 16, fontSize: 19 }}>
            <b>Owner:</b> {yacht.ownerName}<br />
            <b>Email:</b> {yacht.email}<br />
            {yacht.phone && (<><b>Phone:</b> {yacht.phone}<br /></>)}
            <b>Length:</b> {yacht.length} ft<br />
            <b>Max Guests:</b> {yacht.guests}
          </div>
          <div style={{
            fontSize: 17,
            color: "#e0e0e0",
            marginBottom: 24
          }}>
            {yacht.description}
          </div>
          {/* Replace this with your real booking modal logic */}
          <button
            style={{
              background: "linear-gradient(90deg,#4568DC 0%,#5EE6E6 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 19,
              borderRadius: 12,
              padding: "0.9rem 2.7rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(70,230,166,0.08)"
            }}
            onClick={() => alert("Booking modal coming soon!")}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
