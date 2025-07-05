"use client";

import React, { useState, useEffect } from "react";

// --- Testimonials and Gallery Data ---
const testimonials = [
  {
    name: "Sophia R.",
    role: "Yacht Owner",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Listing my yacht was seamless, and I connected with amazing clients. Miami Yacht Day is the real deal for yacht owners!"
  },
  {
    name: "Lucas M.",
    role: "Client",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Our group had the most incredible day cruising the Miami coast. Impeccable service, beautiful yacht, and unforgettable memories."
  },
  {
    name: "Ava T.",
    role: "Client",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "The booking process was so easy and transparent. We felt like Miami celebrities for the day—highly recommend!"
  }
];

const galleryPhotos = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "/AB-MODELIT-BOAT-MIAMIYACHTDAY-18.JPG"
];

const defaultYachtCards = [
  {
    name: "Sundeck 26' Sport Boat",
    desc: "26ft • 10 Guests • Crew Included",
    img: "/AB-MODELIT-BOAT-MIAMIYACHTDAY-18.JPG"
  },
  {
    name: "30' HURRICANE GRANDSON",
    desc: "30ft • 10 Guests • Crew Included",
    img: "/AB-30FT HURRICANE GRANDSON.jpg"
  },
  {
    name: "31' BLACK PEAR AMBERJACK",
    desc: "31ft • 13 Guests • 1 Cabin",
    img: "/AB-31FT BLACK PEAR AMBERJACK.jpg"
  }
];

const STORAGE_KEY = "miami_yacht_day_listings_v1";
const BOOKINGS_KEY = "miami_yacht_day_bookings_v1";
const CONTACTS_KEY = "miami_yacht_day_contacts_v1";

// --- Types ---
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

type ContactMessage = {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
  archived?: boolean;
};

// --- Premium SVG Marine Background ---
function PremiumSVGBackground() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden"
      }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 2600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: "absolute", top: 0, left: 0}}>
        <rect x="0" y="0" width="1440" height="90" fill="#23304B" fillOpacity="0.7"/>
        <ellipse cx="720" cy="310" rx="520" ry="170" fill="#5EE6E6" fillOpacity="0.10"/>
        <path d="M0 530 Q720 610 1440 530 V570 H0 V530Z" fill="#5EE6E6" fillOpacity="0.13">
          <animate attributeName="d"
            values="M0 530 Q720 610 1440 530 V570 H0 V530Z;M0 540 Q720 620 1440 540 V570 H0 V540Z;M0 530 Q720 610 1440 530 V570 H0 V530Z"
            dur="10s" repeatCount="indefinite"
          />
        </path>
        <path d="M0 980 Q720 1080 1440 980 V1020 H0 V980Z" fill="#4568DC" fillOpacity="0.13">
          <animate attributeName="d"
            values="M0 980 Q720 1080 1440 980 V1020 H0 V980Z;M0 1000 Q720 1060 1440 1000 V1020 H0 V1000Z;M0 980 Q720 1080 1440 980 V1020 H0 V980Z"
            dur="14s" repeatCount="indefinite"
          />
        </path>
        <path d="M0 1220 Q720 1300 1440 1220 V1300 H0 V1220Z" fill="#5EE6E6" fillOpacity="0.13">
          <animate attributeName="d"
            values="M0 1220 Q720 1300 1440 1220 V1300 H0 V1220Z;M0 1210 Q720 1310 1440 1210 V1300 H0 V1210Z;M0 1220 Q720 1300 1440 1220 V1300 H0 V1220Z"
            dur="13s" repeatCount="indefinite"
          />
        </path>
        <path d="M0 1700 Q720 1780 1440 1700 V1780 H0 V1700Z" fill="#4568DC" fillOpacity="0.13">
          <animate attributeName="d"
            values="M0 1700 Q720 1780 1440 1700 V1780 H0 V1700Z;M0 1720 Q720 1760 1440 1720 V1780 H0 V1720Z;M0 1700 Q720 1780 1440 1700 V1780 H0 V1700Z"
            dur="11s" repeatCount="indefinite"
          />
        </path>
        <path d="M0,800 Q360,740 720,800 T1440,800 V900 H0 Z" fill="url(#wave1)">
          <animate attributeName="d"
            values="M0,800 Q360,740 720,800 T1440,800 V900 H0 Z;M0,810 Q400,750 720,810 T1440,800 V900 H0 Z;M0,800 Q360,740 720,800 T1440,800 V900 H0 Z"
            dur="18s" repeatCount="indefinite"
          />
        </path>
        <path d="M0,850 Q400,770 900,850 T1440,860 V900 H0 Z" fill="url(#wave2)">
          <animate attributeName="d"
            values="M0,850 Q400,770 900,850 T1440,860 V900 H0 Z;M0,860 Q420,780 900,860 T1440,870 V900 H0 Z;M0,850 Q400,770 900,850 T1440,860 V900 H0 Z"
            dur="24s" repeatCount="indefinite"
          />
        </path>
        <ellipse cx="170" cy="2520" rx="65" ry="40" fill="#4568DC" fillOpacity="0.11"/>
        <circle cx="170" cy="2520" r="24" fill="#FFD700"/>
        <circle cx="1300" cy="2510" r="18" fill="#FFD700"/>
        <circle cx="1340" cy="2510" r="18" fill="#FFD700"/>
        <circle cx="1380" cy="2510" r="18" fill="#FFD700"/>
        <defs>
          <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#4568DC" stopOpacity="0.13" />
            <stop offset="1" stopColor="#B06AB3" stopOpacity="0.13" />
          </linearGradient>
          <linearGradient id="wave2" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#5EE6E6" stopOpacity="0.11" />
            <stop offset="1" stopColor="#232B3B" stopOpacity="0.08" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// --- Animated Button with Ripple/Scale ---
function AnimatedButton({ onClick, children, big, secondary, style, type = "button" }: any) {
  const [rippling, setRippling] = useState(false);
  return (
    <button
      type={type}
      style={{
        ...(secondary ? secondaryBtnStyle : primaryBtnStyle),
        ...(big && { fontSize: "1.18rem", padding: "1.1rem 2.5rem" }),
        position: "relative",
        overflow: "hidden",
        ...style
      }}
      onClick={e => {
        setRippling(true);
        setTimeout(() => setRippling(false), 340);
        setTimeout(() => onClick?.(e), 80);
      }}
    >
      {children}
      {rippling && (
        <span style={{
          position: "absolute", left: "50%", top: "50%",
          width: 120, height: 120, background: "#5EE6E655",
          borderRadius: "50%", transform: "translate(-50%,-50%) scale(1.6)",
          animation: "rippleAnim .34s linear",
          pointerEvents: "none"
        }} />
      )}
      <style jsx>{`
        @keyframes rippleAnim {
          0% { opacity: 0.6; transform: translate(-50%,-50%) scale(0.8);}
          90% { opacity: 0.15; }
          100% { opacity:0; transform:translate(-50%,-50%) scale(1.6);}
        }
      `}</style>
    </button>
  );
}

// --- Yacht Card with Animation and Hover Overlay ---
function YachtCard({ yacht, onBook }: { yacht: { name: string, desc: string, img: string }, onBook: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        background: "rgba(36,44,61,0.98)",
        borderRadius: "1.5rem",
        minWidth: 300,
        padding: "1.5rem",
        boxShadow: hover ? "0 8px 36px #151B2666" : "0 4px 16px #151B2633",
        display: "flex", flexDirection: "column", alignItems: "center",
        border: hover ? "2px solid #5EE6E6" : "1.5px solid #23304b",
        cursor: "pointer",
        position: "relative",
        transition: "transform 0.22s cubic-bezier(.21,1.15,.65,1.01), box-shadow 0.2s, border 0.2s",
        transform: hover ? "scale(1.045)" : "scale(1)",
        animation: "yachtFloat 5s ease-in-out infinite"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      tabIndex={0}
    >
      <div style={{ position: "relative", width: "100%", height: 180 }}>
        <img src={yacht.img} alt={yacht.name}
          style={{
            width: "100%", borderRadius: "1rem", objectFit: "cover", height: 180,
            filter: hover ? "brightness(0.87)" : "brightness(1)",
            transition: "filter 0.25s"
          }} />
        <div style={{
          position: "absolute", inset: 0,
          background: hover ? "linear-gradient(180deg,rgba(94,230,230,0.09),rgba(36,44,61,0.16))" : "none"
        }} />
        {hover && (
          <div style={{
            position: "absolute", bottom: 12, left: 0, right: 0, textAlign: "center",
            fontWeight: 700, letterSpacing: ".03em", color: "#5EE6E6",
            fontSize: 20, textShadow: "0 2px 16px #151B26bb",
            opacity: 0.86
          }}>
            {yacht.name}
          </div>
        )}
      </div>
      <h4 style={{ fontWeight: 700, color: "#B06AB3", fontSize: "1.1rem", marginBottom: 2, marginTop: "1rem" }}>{yacht.name}</h4>
      <div style={{ color: "#B0BED8", margin: "0.5rem 0", fontSize: "1rem" }}>{yacht.desc}</div>
      <AnimatedButton onClick={onBook} style={{ marginTop: 8 }}>Book Now</AnimatedButton>
    </div>
  );
}

// --- Lightbox Gallery Modal ---
function LightboxGallery({ photos, idx, onClose, onPrev, onNext }: {
  photos: string[], idx: number, onClose: () => void, onPrev: () => void, onNext: () => void
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onPrev, onNext, onClose]);
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(19,24,36,0.93)",
      zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <button onClick={onClose} aria-label="Close" style={{
        position: "absolute", top: 36, right: 38, background: "none", border: "none",
        color: "#fff", fontSize: 38, cursor: "pointer", zIndex: 10
      }}>×</button>
      <button onClick={onPrev} aria-label="Previous" style={{
        position: "absolute", left: 30, top: "50%", background: "none", border: "none",
        color: "#5EE6E6", fontSize: 48, cursor: "pointer", transform: "translateY(-50%)"
      }}>&#8592;</button>
      <img src={photos[idx]} style={{
        maxWidth: "94vw", maxHeight: "82vh", borderRadius: "1.5rem", boxShadow: "0 8px 48px #151B2688"
      }} />
      <button onClick={onNext} aria-label="Next" style={{
        position: "absolute", right: 30, top: "50%", background: "none", border: "none",
        color: "#5EE6E6", fontSize: 48, cursor: "pointer", transform: "translateY(-50%)"
      }}>&#8594;</button>
    </div>
  );
}

// --- Animated Modal ---
function AnimatedModal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(21,27,38,0.78)", display: "flex", alignItems: "center",
      justifyContent: "center", zIndex: 1000
    }}>
      <div style={{
        background: "#232B3B", borderRadius: "1.5rem", padding: "2rem", minWidth: 320,
        boxShadow: "0 8px 48px #151B2688", position: "relative",
        animation: "modalIn 0.44s cubic-bezier(.21,1.15,.65,1.01)"
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 18, right: 22, background: "none", border: "none",
          fontSize: "1.5rem", color: "#5EE6E6", cursor: "pointer"
        }}>×</button>
        {children}
      </div>
    </div>
  );
}

// --- Confetti Animation ---
function Confetti() {
  // Simple SVG confetti burst at top center
  return (
    <div style={{
      position: "fixed", left: 0, right: 0, top: 0, zIndex: 99999,
      pointerEvents: "none", width: "100vw", height: "0", textAlign: "center"
    }}>
      <svg width="280" height="120" style={{marginTop:0}}>
        <g>
          {[...Array(18)].map((_, i) => (
            <circle key={i}
              cx={140 + 70 * Math.cos((i/18)*2*Math.PI)}
              cy={30 + 50 * Math.sin((i/18)*2*Math.PI)}
              r={6 + Math.random()*3}
              fill={["#5EE6E6","#B06AB3","#F5F7FA","#4568DC","#fff"][i%5]}
              style={{
                opacity: 0.81,
                transformOrigin: "140px 60px",
                animation: `confettiPop 1.7s ${(i/18)*.43}s cubic-bezier(.15,1.1,.7,1) both`
              }}
            />
          ))}
        </g>
        <style>{`
          @keyframes confettiPop {
            0% { transform: scale(0.9) translateY(0);}
            55% { transform: scale(1.1) translateY(-18px);}
            100% { transform: scale(1) translateY(60px);}
          }
        `}</style>
      </svg>
    </div>
  );
}

// --- Toast notification ---
function Toast({ message, onClose }: { message: string, onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div style={{
      position: "fixed",
      top: 24,
      left: "50%",
      transform: "translateX(-50%)",
      background: "#2A3143",
      color: "#F5F7FA",
      borderRadius: 16,
      padding: "1.1rem 2.2rem",
      fontWeight: 600,
      fontSize: "1.1rem",
      boxShadow: "0 2px 24px #151B2666",
      zIndex: 9999,
      letterSpacing: "0.02em",
      border: "2px solid #5EE6E6"
    }}>
      {message}
    </div>
  );
}

// --- Contacts Dashboard ---
function ContactsDashboard({
  contacts,
  archiveContact,
  deleteContact,
  exportCSV
}: {
  contacts: ContactMessage[];
  archiveContact: (idx: number) => void;
  deleteContact: (idx: number) => void;
  exportCSV: () => void;
}) {
  return (
    <div style={{ maxWidth: 600, width: "100%" }}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18}}>
        <h3 style={{ color: "#5EE6E6" }}>Contact Inbox</h3>
        <AnimatedButton onClick={exportCSV} style={{padding: "0.5rem 1.2rem", fontSize: 13}}>Export CSV</AnimatedButton>
      </div>
      {contacts.filter(c => !c.archived).length === 0 && (
        <div style={{ color: "#B0BED8", fontSize: 15, marginBottom: 12 }}>No active messages.</div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 18, maxHeight: 450, overflowY: "auto" }}>
        {contacts.map((c, i) => (
          !c.archived && (
            <div key={i} style={{
              background: "rgba(36,44,61,0.98)",
              borderRadius: 12,
              padding: 16,
              border: "1.5px solid #23304b",
              boxShadow: "0 2px 8px #151B2633",
              position: "relative",
              animation: "dashboardCardIn 0.6s cubic-bezier(.21,1.15,.65,1.01)"
            }}>
              <div style={{ color: "#B06AB3", fontWeight: 700, fontSize: 17 }}>{c.name}</div>
              <div style={{ color: "#B0BED8", fontSize: 13, marginBottom: 2 }}>{c.email}</div>
              <div style={{ color: "#F5F7FA", marginBottom: 6, marginTop: 5 }}>{c.message}</div>
              <div style={{ color: "#7A8CA3", fontSize: 12 }}>Submitted: {new Date(c.submittedAt).toLocaleString()}</div>
              <div style={{display:"flex", alignItems:"center", marginTop: 10, gap: 9, flexWrap:"wrap"}}>
                <AnimatedButton onClick={() => archiveContact(i)} style={smallBtnStyle}>Archive</AnimatedButton>
                <AnimatedButton onClick={() => deleteContact(i)} style={{...smallBtnStyle, color:"#ff3a6a", borderColor: "#ff3a6a"}}>Delete</AnimatedButton>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

// --- Booking Inquiry Form ---
function BookingForm({ onSubmit }: { onSubmit: (b: Omit<Booking, "submittedAt" | "status"> & { phone: string, yacht: string }) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [yacht, setYacht] = useState("");
  const [occasion, setOccasion] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Available yachts for the dropdown
  const yachtOptions = [
    { value: "", label: "Select a Yacht*" },
    { value: "Sundeck 26' Sport Boat", label: "Sundeck 26' Sport Boat" },
    { value: "30' HURRICANE GRANDSON", label: "30' HURRICANE GRANDSON" },
    { value: "31' BLACK PEAR AMBERJACK", label: "31' BLACK PEAR AMBERJACK" },
    // Add more yacht names here if needed
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !date.trim() || !guests.trim() || !yacht.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(null);
    onSubmit({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      date: date.trim(),
      guests: guests.trim(),
      yacht: yacht.trim(),
      occasion: occasion.trim(),
    });
    setName(""); setEmail(""); setPhone(""); setDate(""); setGuests(""); setYacht(""); setOccasion("");
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: 8, color: "#5EE6E6" }}>Book a Yacht</h3>
      <input style={inputStyle} placeholder="Your Name*" required value={name} onChange={e => setName(e.target.value)} />
      <input style={inputStyle} placeholder="Email*" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
      <input style={inputStyle} placeholder="Phone Number*" type="tel" required value={phone} onChange={e => setPhone(e.target.value)} />
      <input style={inputStyle} placeholder="Preferred Date*" type="date" required value={date} onChange={e => setDate(e.target.value)} />
      <input style={inputStyle} placeholder="Number of Guests*" required value={guests} onChange={e => setGuests(e.target.value)} />
      <select
        style={inputStyle}
        required
        value={yacht}
        onChange={e => setYacht(e.target.value)}
      >
        {yachtOptions.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <textarea style={inputStyle} placeholder="Tell us about your occasion" rows={3} value={occasion} onChange={e => setOccasion(e.target.value)} />
      {error && <div style={{ color: "#ff3a6a", fontWeight: 600, fontSize: 14 }}>{error}</div>}
      <AnimatedButton type="submit" style={{marginTop: 5}}>Send Inquiry</AnimatedButton>
      <div style={{ fontSize: 12, color: "#7A8CA3" }}>* required</div>
    </form>
  );
}

// --- Owner Listing Form ---
type OwnerFormProps = {
  onSubmit: (data: {
    yachtName: string;
    yachtLength: string;
    guestCapacity: string;
    amenities: string;
    imgUrl?: string;
  }) => void;
};
function OwnerForm({ onSubmit }: OwnerFormProps) {
  const [yachtName, setYachtName] = useState("");
  const [yachtLength, setYachtLength] = useState("");
  const [guestCapacity, setGuestCapacity] = useState("");
  const [amenities, setAmenities] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!yachtName.trim() || !yachtLength.trim() || !guestCapacity.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(null);
    onSubmit({
      yachtName: yachtName.trim(),
      yachtLength: yachtLength.trim(),
      guestCapacity: guestCapacity.trim(),
      amenities: amenities.trim(),
      imgUrl: imgUrl.trim()
    });
    setYachtName("");
    setYachtLength("");
    setGuestCapacity("");
    setAmenities("");
    setImgUrl("");
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: 8, color: "#5EE6E6" }}>List Your Yacht</h3>
      <input style={inputStyle} placeholder="Yacht Name*" required value={yachtName} onChange={e => setYachtName(e.target.value)} />
      <input style={inputStyle} placeholder="Yacht Length (ft)*" required value={yachtLength} onChange={e => setYachtLength(e.target.value)} />
      <input style={inputStyle} placeholder="Guest Capacity*" required value={guestCapacity} onChange={e => setGuestCapacity(e.target.value)} />
      <input style={inputStyle} placeholder="Amenities (WiFi, Jetski, etc)" value={amenities} onChange={e => setAmenities(e.target.value)} />
      <input style={inputStyle} placeholder="Yacht Image URL (optional)" value={imgUrl} onChange={e => setImgUrl(e.target.value)} />
      {error && <div style={{ color: "#ff3a6a", fontWeight: 600, fontSize: 14 }}>{error}</div>}
      <AnimatedButton type="submit" style={{marginTop: 5}}>Submit Listing</AnimatedButton>
      <div style={{ fontSize: 12, color: "#7A8CA3" }}>* required</div>
    </form>
  );
}

// --- Newsletter Signup Form ---
function NewsletterForm({ onSubmit }: { onSubmit: (email: string) => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    onSubmit(email.trim());
    setEmail("");
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 280 }} onSubmit={handleSubmit}>
      <h3 style={{ color: "#5EE6E6", marginBottom: 4 }}>Sign Up for Miami Yacht Day Updates</h3>
      <p style={{ color: "#B0BED8", marginBottom: 4, fontSize: 14 }}>
        Be the first to hear about new yacht listings, special offers, and Miami yachting news.
      </p>
      <input
        style={{
          ...inputStyle,
          background: "#19202c",
          border: "1.5px solid #23304b",
          color: "#F5F7FA",
          marginBottom: 0
        }}
        placeholder="Your Email Address"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      {error && <div style={{ color: "#ff3a6a", fontWeight: 600, fontSize: 14 }}>{error}</div>}
      <AnimatedButton type="submit" style={{marginTop: 5}}>Subscribe</AnimatedButton>
    </form>
  );
}

// --- About / Contact Modal Form ---
function AboutContactForm({ onSubmit }: { onSubmit: (data: Omit<ContactMessage, "submittedAt">) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    onSubmit({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    setName(""); setEmail(""); setMessage("");
  }

  return (
    <div style={{minWidth: 300, maxWidth: 400}}>
      <h3 style={{ color: "#5EE6E6", marginBottom: 12 }}>About Miami Yacht Day</h3>
      <p style={{ color: "#B0BED8", fontSize: 14, marginBottom: 16 }}>
        Miami Yacht Day brings the city’s finest yachts and clients together for unforgettable experiences. Whether you’re a yacht owner or an adventurer, we’re here to help you enjoy Miami’s luxury lifestyle.
      </p>
      <hr style={{border: "none", borderTop: "1.5px solid #23304b", margin: "18px 0"}} />
      <h4 style={{ color: "#F5F7FA", fontWeight: 700, marginBottom: 8 }}>Contact Us</h4>
      <form style={{ display: "flex", flexDirection: "column", gap: 12 }} onSubmit={handleSubmit}>
        <input style={inputStyle} placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input style={inputStyle} placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea style={inputStyle} rows={3} placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} />
        {error && <div style={{ color: "#ff3a6a", fontWeight: 600, fontSize: 14 }}>{error}</div>}
        <AnimatedButton type="submit" style={{marginTop: 5}}>Send Message</AnimatedButton>
      </form>
      <div style={{ color: "#7A8CA3", fontSize: 12, marginTop: 12 }}>
        Or email us: <a href="mailto:info@miamiyachtday.com" style={{ color: "#5EE6E6" }}>info@miamiyachtday.com</a>
      </div>
    </div>
  );
}

// --- Styles (as constants) ---
const primaryBtnStyle = {
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
const secondaryBtnStyle = {
  background: "rgba(36,44,61,0.75)",
  color: "#5EE6E6",
  padding: "0.85rem 2rem",
  borderRadius: "2rem",
  fontWeight: 700,
  fontSize: "1.05rem",
  border: "2px solid #5EE6E6",
  cursor: "pointer",
  textDecoration: "none",
  transition: "transform 0.08s"
};
const navBtnStyle = {
  color: "#F5F7FA",
  fontWeight: 600,
  background: "rgba(36,44,61,0.72)",
  padding: "0.7rem 1.5rem",
  borderRadius: "1.2rem",
  textDecoration: "none",
  fontSize: "1rem",
  boxShadow: "0 2px 8px #151B2633",
  border: "none",
  cursor: "pointer",
  transition: "transform 0.08s"
};
const mobileNavBtnStyle = {
  ...primaryBtnStyle,
  fontSize: "1.2rem",
  padding: "1.1rem 2.5rem"
};
const inputStyle: React.CSSProperties = {
  border: "1.5px solid #292f3e",
  borderRadius: 8,
  padding: "0.7rem 1rem",
  fontSize: "1rem",
  background: "rgba(21,27,38,0.5)",
  color: "#F5F7FA",
  outline: "none",
  marginBottom: 0
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

// --- Final export (with background at the top level) ---
export default function App() {
  return (
    <>
      <PremiumSVGBackground />
      <Home />
    </>
  );
}

// --- Home Component with all state, effects, and handlers ---
function Home() {
  const [showOwnerForm, setShowOwnerForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [yachtCards, setYachtCards] = useState(defaultYachtCards);
  const [toast, setToast] = useState<string | null>(null);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [confetti, setConfetti] = useState(false);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  // Hero Animation States
  const [heroAnim, setHeroAnim] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    // Yacht cards
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setYachtCards([...parsed, ...defaultYachtCards]);
        }
      } catch {}
    }
    // Contacts
    const contactsSaved = localStorage.getItem(CONTACTS_KEY);
    if (contactsSaved) {
      try {
        const parsed = JSON.parse(contactsSaved);
        if (Array.isArray(parsed)) setContacts(parsed);
      } catch {}
    }
    // Start hero animation
    setTimeout(() => setHeroAnim(true), 100);
  }, []);

  // Save only user-added yachts to localStorage
  useEffect(() => {
    const onlyUserYachts = yachtCards.filter(
      yc =>
        !defaultYachtCards.some(
          d =>
            d.name === yc.name &&
            d.desc === yc.desc &&
            d.img === yc.img
        )
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(onlyUserYachts));
  }, [yachtCards]);

  // Save contacts to localStorage
  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navOpen]);

  function addContact(c: Omit<ContactMessage, "submittedAt">) {
    const contact: ContactMessage = { ...c, submittedAt: new Date().toISOString(), archived: false };
    setContacts(prev => [contact, ...prev]);
    showConfetti();
  }

  function archiveContact(idx: number) {
    setContacts(prev =>
      prev.map((c, i) => (i === idx ? { ...c, archived: !c.archived } : c))
    );
  }

  function deleteContact(idx: number) {
    setContacts(prev => prev.filter((_, i) => i !== idx));
  }

  function exportContactsCSV() {
    const activeContacts = contacts.filter(c => !c.archived);
    const csv =
      ["Name,Email,Message,Submitted At"].concat(
        activeContacts.map(c =>
          [
            `"${c.name}"`,
            `"${c.email}"`,
            `"${c.message.replace(/"/g, '""')}"`,
            `"${new Date(c.submittedAt).toLocaleString()}"`
          ].join(",")
        )
      ).join("\n");
    downloadCSV(csv, "contacts.csv");
  }

  function downloadCSV(csv: string, filename: string) {
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 500);
  }

  function showConfetti() {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 2200);
  }

  // Lightbox handlers
  function openLightbox(idx: number) {
    setLightboxIdx(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }
  function prevLightbox() {
    setLightboxIdx(i => (i - 1 + galleryPhotos.length) % galleryPhotos.length);
  }
  function nextLightbox() {
    setLightboxIdx(i => (i + 1) % galleryPhotos.length);
  }

  // --- Main Render ---
  return (
        <main
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#F5F7FA",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #151B26 60%, #232B3B 100%)"
      }}
    >
      {/* NAVIGATION */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem 4vw",
        background: "rgba(21,27,38,0.82)",
        backdropFilter: "blur(8px)",
        position: "relative",
        zIndex: 100,
        borderBottom: "1px solid #23304b"
      }}>
        <h1 style={{
          fontWeight: 900, fontSize: "2.2rem", letterSpacing: "1px",
          color: "#B0BED8", textShadow: "0 2px 12px #151B2666"
        }}>
          Miami Yacht Day
        </h1>
        <div className="desktop-nav" style={{
          display: "flex",
          gap: "2rem"
        }}>
          <AnimatedButton onClick={() => setShowOwnerForm(true)}>List Your Yacht</AnimatedButton>
          <AnimatedButton onClick={() => setShowBookingForm(true)}>Book a Yacht</AnimatedButton>
          <AnimatedButton onClick={() => setShowNewsletter(true)}>Sign Up for Updates</AnimatedButton>
          <AnimatedButton onClick={() => setShowContacts(true)}>Contact Inbox</AnimatedButton>
          <AnimatedButton onClick={() => setShowAbout(true)}>About / Contact</AnimatedButton>
        </div>
        <button
          aria-label="Open navigation menu"
          className="hamburger"
          style={{
            background: "rgba(36,44,61,0.7)",
            border: "none",
            borderRadius: 8,
            padding: 10,
            display: "none",
            flexDirection: "column",
            gap: 4,
            cursor: "pointer"
          }}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span style={{display: "block", width: 24, height: 3, background: "#B0BED8", borderRadius: 2, marginBottom: 4}} />
          <span style={{display: "block", width: 24, height: 3, background: "#B0BED8", borderRadius: 2, marginBottom: 4}} />
          <span style={{display: "block", width: 24, height: 3, background: "#B0BED8", borderRadius: 2}} />
        </button>
        {navOpen && (
          <div className="mobile-nav-overlay" style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(21,27,38,0.95)", zIndex: 200,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
          }}>
            <button
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation menu"
              style={{
                position: "absolute", top: 30, right: 36, background: "none",
                border: "none", color: "#B06AB3", fontSize: "2.5rem", cursor: "pointer"
              }}
            >×</button>
            <button onClick={() => { setShowOwnerForm(true); setNavOpen(false); }} style={{...mobileNavBtnStyle, marginBottom: "2rem"}}>List Your Yacht</button>
            <button onClick={() => { setShowBookingForm(true); setNavOpen(false); }} style={mobileNavBtnStyle}>Book a Yacht</button>
            <button onClick={() => { setShowNewsletter(true); setNavOpen(false); }} style={{ ...mobileNavBtnStyle, marginTop: "2rem" }}>Sign Up for Updates</button>
            <button onClick={() => { setShowContacts(true); setNavOpen(false); }} style={{ ...mobileNavBtnStyle, marginTop: "2rem" }}>Contact Inbox</button>
            <button onClick={() => { setShowAbout(true); setNavOpen(false); }} style={{ ...mobileNavBtnStyle, marginTop: "2rem" }}>About / Contact</button>
          </div>
        )}
      </nav>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      {confetti && <Confetti />}

      {/* HERO SECTION */}
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem 4vw"
        }}
      >
        <div
          style={{
            opacity: heroAnim ? 1 : 0,
            transform: heroAnim ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 0.8s cubic-bezier(.35,.82,.47,1.08), transform 0.8s cubic-bezier(.35,.82,.47,1.08)",
          }}
        >
          <h2 style={{
            fontSize: "3rem", fontWeight: 700, color: "#F5F7FA",
            marginBottom: "1.5rem", textShadow: "0 2px 24px #151B26dd"
          }}>
            <span style={{display: "inline-block", animation: heroAnim ? "fadeInLeft 1s .2s both" : "none"}}>
              Experience Miami’s <span style={{color:'#5EE6E6'}}>Luxury</span> on the Water
            </span>
          </h2>
          <p style={{
            fontSize: "1.3rem",
            background: "rgba(36,44,61,0.66)",
            padding: "1rem 2rem",
            borderRadius: "18px",
            color: "#B0BED8",
            marginBottom: "2rem",
            boxShadow: "0 2px 16px #151B2633",
            animation: heroAnim ? "fadeInUp 1s .55s both" : "none"
          }}>
            Book a glamorous yacht for your next Miami adventure, or list your own vessel and join the city’s elite fleet.
          </p>
          <div style={{
            display: "flex", gap: "2rem", marginTop: "1rem", justifyContent: "center", flexWrap: "wrap",
            animation: heroAnim ? "fadeInUp 1s .8s both" : "none"
          }}>
            <AnimatedButton onClick={() => setShowBookingForm(true)} big>
              Find a Yacht
            </AnimatedButton>
            <AnimatedButton onClick={() => setShowOwnerForm(true)} big secondary>
              List Your Yacht
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* YACHT SHOWCASE */}
      <section id="book" style={{
        marginTop: "3rem", padding: "2rem 4vw", background: "rgba(36,44,61,0.92)", borderRadius: "2rem"
      }}>
        <h3 style={{
          fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.02em",
          color: "#5EE6E6", marginBottom: "2rem"
        }}>Featured Yachts</h3>
        <div className="yacht-card-row" style={{ display: "flex", gap: "2rem", overflowX: "auto" }}>
          {yachtCards.map((yacht, i) => (
            <YachtCard yacht={yacht} key={i} onBook={() => setShowBookingForm(true)} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{
        marginTop: "3rem", padding: "2rem 4vw", background: "rgba(36,44,61,0.88)", borderRadius: "2rem"
      }}>
        <h3 style={{
          fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.02em",
          color: "#5EE6E6", marginBottom: "2rem"
        }}>Testimonials</h3>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "rgba(36,44,61,0.98)",
              borderRadius: "1.2rem",
              padding: "1.5rem",
              maxWidth: 340,
              minWidth: 260,
              boxShadow: "0 4px 24px #151B2633",
              display: "flex", flexDirection: "column",
              border: "1.5px solid #23304b",
              transform: "scale(1)",
              transition: "transform 0.2s"
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                <img src={t.avatar} alt={t.name} style={{
                  width: 48, height: 48, borderRadius: "50%", marginRight: 12, border: "2px solid #5EE6E6"
                }} />
                <div>
                  <div style={{ color: "#5EE6E6", fontWeight: 700 }}>{t.name}</div>
                  <div style={{ color: "#B0BED8", fontSize: 13 }}>{t.role}</div>
                </div>
              </div>
              <div style={{ color: "#F5F7FA", fontSize: 16, fontStyle: "italic" }}>
                “{t.text}”
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section style={{
        marginTop: "3rem", marginBottom: "2rem", padding: "2rem 4vw", background: "rgba(36,44,61,0.88)", borderRadius: "2rem"
      }}>
        <h3 style={{
          fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.02em",
          color: "#5EE6E6", marginBottom: "2rem"
        }}>Gallery: Miami Yacht Days</h3>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem", alignItems: "center"
        }}>
          {galleryPhotos.map((url, i) => (
            <div
              key={i}
              style={{
                cursor: "pointer",
                borderRadius: "1.2rem",
                overflow: "hidden",
                position: "relative"
              }}
              onClick={() => openLightbox(i)}
            >
              <img src={url} alt={`Miami Yacht ${i + 1}`} style={{
                width: "100%", height: 160, objectFit: "cover",
                transition: "transform 0.3s", borderRadius: "1.2rem"
              }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg,rgba(0,0,0,0.0) 40%,rgba(36,44,61,0.5) 100%)",
                pointerEvents: "none"
              }} />
            </div>
          ))}
        </div>
      </section>
      {lightboxOpen && (
        <LightboxGallery
          photos={galleryPhotos}
          idx={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}

      {/* OWNER CTA */}
      <section id="list" style={{
        margin: "4rem 0 2rem 0", display: "flex", flexDirection: "column",
        alignItems: "center", gap: "1.5rem"
      }}>
        <h3 style={{ fontWeight: 700, fontSize: "1.5rem", color: "#F5F7FA" }}>
          Are you a Yacht Owner?
        </h3>
        <p style={{ color: "#B0BED8", fontSize: "1.1rem", background: "rgba(36,44,61,0.82)", borderRadius: 12, padding: "0.7rem 1.5rem" }}>
          List your vessel with Miami Yacht Day and reach exclusive clients seeking luxury experiences.
        </p>
        <AnimatedButton onClick={() => setShowOwnerForm(true)} big>
          List Your Yacht
        </AnimatedButton>
      </section>

      {/* MODALS (animated) */}
      {showOwnerForm && (
        <AnimatedModal onClose={() => setShowOwnerForm(false)}>
          <OwnerForm
            onSubmit={data => {
              setYachtCards(prev => [
                {
                  name: data.yachtName,
                  desc: `${data.yachtLength}ft • ${data.guestCapacity} Guests${data.amenities ? " • " + data.amenities : ""}`,
                  img: data.imgUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                },
                ...prev
              ]);
              setShowOwnerForm(false);
              setToast("Yacht listing submitted! Your yacht is now featured.");
              showConfetti();
            }}
          />
        </AnimatedModal>
      )}

      {showBookingForm && (
        <AnimatedModal onClose={() => setShowBookingForm(false)}>
          <BookingForm
            onSubmit={bookingData => {
              // Save booking to localStorage for admin to view
              const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
              const booking = { ...bookingData, submittedAt: new Date().toISOString(), status: "Pending" };
              localStorage.setItem(BOOKINGS_KEY, JSON.stringify([booking, ...bookings]));
              setShowBookingForm(false);
              setToast("Booking inquiry sent! We'll contact you soon.");
              showConfetti();
            }}
          />
        </AnimatedModal>
      )}

      {showNewsletter && (
        <AnimatedModal onClose={() => setShowNewsletter(false)}>
          <NewsletterForm
            onSubmit={email => {
              setShowNewsletter(false);
              setToast("Thank you for subscribing! You'll get Miami Yacht Day updates.");
            }}
          />
        </AnimatedModal>
      )}

      {showAbout && (
        <AnimatedModal onClose={() => setShowAbout(false)}>
          <AboutContactForm
            onSubmit={contactData => {
              addContact(contactData);
              setShowAbout(false);
              setToast("Message sent! We'll get back to you soon.");
            }}
          />
        </AnimatedModal>
      )}

      {showContacts && (
        <AnimatedModal onClose={() => setShowContacts(false)}>
          <ContactsDashboard
            contacts={contacts}
            archiveContact={archiveContact}
            deleteContact={deleteContact}
            exportCSV={exportContactsCSV}
          />
        </AnimatedModal>
      )}

      {/* Responsive styles and key animations */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .hamburger {
            display: none !important;
          }
        }
        @keyframes yachtFloat {
          0% { transform: translateY(0px);}
          50% { transform: translateY(-10px);}
          100% { transform: translateY(0px);}
        }
        @keyframes fadeInLeft {
          from { opacity:0; transform:translateX(-40px);}
          to { opacity:1; transform:translateX(0);}
        }
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(40px);}
          to { opacity:1; transform:translateY(0);}
        }
        @keyframes modalIn {
          from { opacity:0; transform:translateY(40px) scale(0.96);}
          to { opacity:1; transform:translateY(0) scale(1);}
        }
        @keyframes dashboardCardIn {
          from { opacity:0; transform: translateY(50px);}
          to { opacity:1; transform: translateY(0);}
        }
      `}</style>
    </main>
  );
}
