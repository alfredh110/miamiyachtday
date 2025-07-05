"use client";
import React from "react";

type BookingStatus = "Pending" | "Contacted" | "Completed" | "Archived";
type Booking = {
  name: string;
  email: string;
  date: string;
  guests: string;
  occasion: string;
  submittedAt: string;
  status: BookingStatus;
};

const primaryBtnStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #4568DC 0%, #B06AB3 100%)",
  color: "#F5F7FA",
  padding: "0.85rem 2rem",
  borderRadius: "2rem",
  fontWeight: 700,
  boxShadow: "0 2px 8px #151B2633",
  fontSize: "1.05rem",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  transition: "transform 0.08s"
};
const smallBtnStyle: React.CSSProperties = {
  background: "rgba(36,44,61,0.92)",
  color: "#5EE6E6",
  border: "1.5px solid #5EE6E6",
  padding: "0.3rem 1rem",
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
  transition: "background .1s"
};

export default function BookingsDashboard({
  bookings,
  updateBookingStatus,
  deleteBooking,
  exportCSV,
}: {
  bookings: Booking[];
  updateBookingStatus: (idx: number, status: BookingStatus) => void;
  deleteBooking: (idx: number) => void;
  exportCSV: () => void;
}) {
  return (
    <div style={{ maxWidth: 600, width: "100%" }}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18}}>
        <h3 style={{ color: "#5EE6E6" }}>Booking Requests</h3>
        <button onClick={exportCSV} style={{padding: "0.5rem 1.2rem", fontSize: 13, ...primaryBtnStyle}}>Export CSV</button>
      </div>
      {bookings.filter(b => b.status !== "Archived").length === 0 && (
        <div style={{ color: "#B0BED8", fontSize: 15, marginBottom: 12 }}>No active bookings.</div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 18, maxHeight: 450, overflowY: "auto" }}>
        {bookings.map((b, i) => (
          b.status !== "Archived" && (
            <div key={i} style={{
              background: "rgba(36,44,61,0.98)",
              borderRadius: 12,
              padding: 16,
              border: "1.5px solid #23304b",
              boxShadow: "0 2px 8px #151B2633",
              position: "relative",
              animation: "dashboardCardIn 0.6s cubic-bezier(.21,1.15,.65,1.01)"
            }}>
              <div style={{ color: "#B06AB3", fontWeight: 700, fontSize: 17 }}>{b.name}</div>
              <div style={{ color: "#B0BED8", fontSize: 13, marginBottom: 2 }}>{b.email}</div>
              <div style={{ color: "#F5F7FA", marginBottom: 6 }}>{b.guests} guests • {b.date}</div>
              <div style={{ color: "#F5F7FA", marginBottom: 6 }}>{b.occasion}</div>
              <div style={{ color: "#7A8CA3", fontSize: 12 }}>Submitted: {new Date(b.submittedAt).toLocaleString()}</div>
              <div style={{display:"flex", alignItems:"center", marginTop: 10, gap: 9, flexWrap:"wrap"}}>
                <span style={{
                  background: b.status === "Pending" ? "#B06AB3"
                          : b.status === "Contacted" ? "#5EE6E6"
                          : "#4bdf80",
                  color: "#151B26",
                  fontWeight: 700,
                  borderRadius: 6,
                  padding: "0.2rem 0.8rem",
                  fontSize: 13,
                  marginRight: 10
                }}>{b.status}</span>
                <button onClick={() => updateBookingStatus(i, "Contacted")} style={smallBtnStyle}>Mark Contacted</button>
                <button onClick={() => updateBookingStatus(i, "Completed")} style={smallBtnStyle}>Mark Completed</button>
                <button onClick={() => updateBookingStatus(i, "Archived")} style={smallBtnStyle}>Archive</button>
                <button onClick={() => deleteBooking(i)} style={{...smallBtnStyle, color:"#ff3a6a", borderColor: "#ff3a6a"}}>Delete</button>
              </div>
            </div>
          )
        ))}
      </div>
      <style jsx global>{`
        @keyframes dashboardCardIn {
          from { opacity:0; transform: translateY(50px);}
          to { opacity:1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}
