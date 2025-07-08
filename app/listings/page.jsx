"use client";

import React, { useEffect, useState } from "react";

export default function ListingsPage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/listings")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        setListings(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Could not load listings.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "cyan", fontSize: "2.5rem", marginTop: "1.5em" }}>Yacht Listings</h1>
      {loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}
      {error && <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>}
      {!loading && !error && (
        <div style={{ maxWidth: 900, margin: "2em auto" }}>
          {listings.length === 0 ? (
            <p style={{ textAlign: "center" }}>No yachts found.</p>
          ) : (
            listings.map(listing => (
              <div key={listing.id} style={{ margin: "1em 0", border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
                <h2>{listing.name}</h2>
                <p>{listing.description}</p>
                <a href={`/listings/${listing.id}`} style={{ color: "#1fe6ff" }}>
                  View Details
                </a>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
