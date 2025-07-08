"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ListingDetailPage() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/listings/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch listing");
        return res.json();
      })
      .then(data => {
        setListing(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Could not load listing.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;
  if (!listing) return <h2 style={{ textAlign: "center" }}>Listing not found.</h2>;

  return (
    <div style={{ maxWidth: 900, margin: "2em auto" }}>
      <h1>{listing.name}</h1>
      <p>{listing.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}
