"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function PublicListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/listings")
      .then(res => res.json())
      .then(data => {
        setListings(data.filter(l => l.approved)); // Only show approved yachts
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "32px 12px 48px 12px"
    }}>
      <h1 style={{ color: "#5EE6E6", marginBottom: 24, textAlign: "center", fontSize: 36 }}>
        Yacht Listings
      </h1>
      {loading ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : listings.length === 0 ? (
        <div style={{ textAlign: "center", color: "#fff" }}>
          No yachts available yet.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: 28,
          }}
        >
          {listings.map(l => (
            <Link
              key={l.id}
              href={`/listings/${l.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                borderRadius: 14,
                background: "#232C3B",
                boxShadow: "0 2px 16px rgba(30,40,56,0.12)",
                overflow: "hidden",
                transition: "transform 0.13s, box-shadow 0.13s",
                display: "flex",
                flexDirection: "column",
                minHeight: 400,
                position: "relative",
                outline: "none"
              }}
              tabIndex="0"
            >
              {l.photo && (
                <img
                  src={l.photo}
                  alt={l.yachtName}
                  style={{
                    width: "100%",
                    height: 190,
                    objectFit: "cover",
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                  }}
                />
              )}
              <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
                <h2 style={{
                  color: "#5EE6E6",
                  fontSize: 24,
                  margin: 0,
                  marginBottom: 8,
                  fontWeight: 700,
                  fontFamily: "Montserrat, sans-serif"
                }}>
                  {l.yachtName}
                </h2>
                <div style={{ marginBottom: 8 }}>
                  <b>Owner:</b> {l.ownerName}
                </div>
                <div style={{ marginBottom: 8 }}>
                  <b>Length:</b> {l.length} ft
                </div>
                <div style={{ marginBottom: 8 }}>
                  <b>Max Guests:</b> {l.guests}
                </div>
                <div style={{
                  fontSize: 15,
                  color: "#e0e0e0",
                  margin: "8px 0 0 0",
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical"
                }}>
                  {l.description}
                </div>
                <button
                  style={{
                    marginTop: 18,
                    background: "linear-gradient(90deg,#4568DC 0%,#5EE6E6 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 17,
                    borderRadius: 8,
                    padding: "10px 0",
                    border: "none",
                    cursor: "pointer",
                    width: "100%"
                  }}
                >
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
