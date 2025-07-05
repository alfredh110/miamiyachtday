"use client";
import React, { useEffect, useState } from "react";

export default function PublicListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/listings")
      .then(res => res.json())
      .then(data => {
        setListings(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: 1100, margin: "40px auto", padding: 16 }}>
      <h1 style={{ color: "#5EE6E6", marginBottom: 24 }}>Yacht Listings</h1>
      {loading ? (
        <div>Loading...</div>
      ) : listings.length === 0 ? (
        <div>No yachts available yet.</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {listings.map(l => (
            <div key={l.id} style={{
              width: 320, background: "#232C3B", borderRadius: 12,
              color: "#fff", overflow: "hidden", boxShadow: "0 2px 8px rgba(30,40,56,.09)"
            }}>
              {l.photo && (
                <img src={l.photo} alt={l.yachtName} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              )}
              <div style={{ padding: 16 }}>
                <h2 style={{ color: "#5EE6E6" }}>{l.yachtName}</h2>
                <div><b>Owner:</b> {l.ownerName}</div>
                <div><b>Length:</b> {l.length} ft</div>
                <div><b>Guests:</b> {l.guests}</div>
                <div style={{ margin: "10px 0", fontSize: 15 }}>{l.description}</div>
                {/* Replace # later with /listings/[id] if you add details page */}
                <a href="#" style={{
                  display: "inline-block", marginTop: 12,
                  background: "#5EE6E6", color: "#232C3B", padding: "8px 18px",
                  borderRadius: 8, fontWeight: 700, textDecoration: "none"
                }}>View</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
