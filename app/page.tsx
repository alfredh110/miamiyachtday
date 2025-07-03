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
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
];

const defaultYachtCards = [
  {
    name: "Sunseeker 88 Yacht",
    desc: "88ft • 12 Guests • 5 Cabins • Crew Included",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Azimut Grande",
    desc: "90ft • 14 Guests • 6 Cabins • Jet Ski & Toys",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Pershing 70",
    desc: "70ft • 10 Guests • 4 Cabins • Ultra Luxury",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  }
];

const STORAGE_KEY = "miami_yacht_day_listings_v1";

export default function Home() {
  const [showOwnerForm, setShowOwnerForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [yachtCards, setYachtCards] = useState(defaultYachtCards);
  const [toast, setToast] = useState<string | null>(null);

  // Load yachts from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setYachtCards([...parsed, ...defaultYachtCards]);
        }
      } catch {}
    }
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

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navOpen]);

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
      {/* Animated SVG Marine Background */}
      <WavesBackground />

      {/* Navigation */}
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
          <button
            onClick={() => setShowOwnerForm(true)}
            style={navBtnStyle}
            className="desktop-nav-btn"
          >
            List Your Yacht
          </button>
          <button
            onClick={() => setShowBookingForm(true)}
            style={navBtnStyle}
            className="desktop-nav-btn"
          >
            Book a Yacht
          </button>
        </div>
        {/* Hamburger icon for mobile */}
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
          <span style={{
            display: "block",
            width: 24,
            height: 3,
            background: "#B0BED8",
            borderRadius: 2,
            marginBottom: 4
          }} />
          <span style={{
            display: "block",
            width: 24,
            height: 3,
            background: "#B0BED8",
            borderRadius: 2,
            marginBottom: 4
          }} />
          <span style={{
            display: "block",
            width: 24,
            height: 3,
            background: "#B0BED8",
            borderRadius: 2
          }} />
        </button>
        {navOpen && (
          <div
            className="mobile-nav-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(21,27,38,0.95)",
              zIndex: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <button
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation menu"
              style={{
                position: "absolute",
                top: 30,
                right: 36,
                background: "none",
                border: "none",
                color: "#B06AB3",
                fontSize: "2.5rem",
                cursor: "pointer"
              }}
            >×</button>
            <button
              onClick={() => {
                setShowOwnerForm(true);
                setNavOpen(false);
              }}
              style={{
                ...mobileNavBtnStyle,
                marginBottom: "2rem"
              }}
            >
              List Your Yacht
            </button>
            <button
              onClick={() => {
                setShowBookingForm(true);
                setNavOpen(false);
              }}
              style={mobileNavBtnStyle}
            >
              Book a Yacht
            </button>
          </div>
        )}
      </nav>

      {/* Toast notification */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* Hero Section */}
      <section style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "2rem 4vw"
      }}>
        <h2 style={{
          fontSize: "3rem", fontWeight: 700, color: "#F5F7FA",
          marginBottom: "1.5rem", textShadow: "0 2px 24px #151B26dd"
        }}>
          Experience Miami’s <span style={{color:'#5EE6E6'}}>Luxury</span> on the Water
        </h2>
        <p style={{
          fontSize: "1.3rem",
          background: "rgba(36,44,61,0.66)",
          padding: "1rem 2rem",
          borderRadius: "18px",
          color: "#B0BED8",
          marginBottom: "2rem",
          boxShadow: "0 2px 16px #151B2633"
        }}>
          Book a glamorous yacht for your next Miami adventure, or list your own vessel and join the city’s elite fleet.
        </p>
        <div style={{ display: "flex", gap: "2rem", marginTop: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => setShowBookingForm(true)} style={primaryBtnStyle}>Find a Yacht</button>
          <button onClick={() => setShowOwnerForm(true)} style={secondaryBtnStyle}>List Your Yacht</button>
        </div>
      </section>

      {/* Yacht Showcase */}
      <section id="book" style={{
        marginTop: "3rem", padding: "2rem 4vw", background: "rgba(36,44,61,0.92)", borderRadius: "2rem"
      }}>
        <h3 style={{
          fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.02em",
          color: "#5EE6E6", marginBottom: "2rem"
        }}>Featured Yachts</h3>
        <div style={{ display: "flex", gap: "2rem", overflowX: "auto" }}>
          {yachtCards.map((yacht, i) => (
            <div key={i} style={{
              background: "rgba(36,44,61,0.98)",
              borderRadius: "1.5rem",
              minWidth: 300,
              padding: "1.5rem",
              boxShadow: "0 4px 32px #151B2633",
              display: "flex", flexDirection: "column", alignItems: "center",
              border: "1.5px solid #23304b"
            }}>
              <img src={yacht.img} alt={yacht.name} style={{
                width: "100%", borderRadius: "1rem", marginBottom: "1rem", objectFit: "cover", height: 180
              }} />
              <h4 style={{ fontWeight: 700, color: "#B06AB3", fontSize: "1.1rem", marginBottom: 2 }}>{yacht.name}</h4>
              <div style={{ color: "#B0BED8", margin: "0.5rem 0", fontSize: "1rem" }}>{yacht.desc}</div>
              <button onClick={() => setShowBookingForm(true)} style={primaryBtnStyle}>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
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
              border: "1.5px solid #23304b"
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

      {/* Gallery Section */}
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
            <img key={i} src={url} alt={`Miami Yacht ${i + 1}`} style={{
              width: "100%", borderRadius: "1.2rem", boxShadow: "0 2px 16px #151B2666", objectFit: "cover", height: 160
            }} />
          ))}
        </div>
      </section>

      {/* Owner CTA */}
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
        <button onClick={() => setShowOwnerForm(true)} style={primaryBtnStyle}>List Your Yacht</button>
      </section>

      {/* Owner Form Modal */}
      {showOwnerForm && (
        <Modal onClose={() => setShowOwnerForm(false)}>
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
            }}
          />
        </Modal>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && (
        <Modal onClose={() => setShowBookingForm(false)}>
          <BookingForm
            onSubmit={() => {
              setShowBookingForm(false);
              setToast("Booking inquiry sent! We'll contact you soon.");
            }}
          />
        </Modal>
      )}

      {/* Responsive styles */}
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
      `}</style>
    </main>
  );
}

// Animated SVG Marine Background Component
function WavesBackground() {
  return (
    <div style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      zIndex: 0,
      pointerEvents: "none",
      overflow: "hidden"
    }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        style={{ position: "absolute", bottom: 0, left: 0 }}
        aria-hidden="true"
      >
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
        <g>
          <path
            d="M0,800 Q360,740 720,800 T1440,800 V900 H0 Z"
            fill="url(#wave1)"
            style={{
              animation: "waveMove1 18s linear infinite alternate"
            }}
          />
          <path
            d="M0,850 Q400,770 900,850 T1440,860 V900 H0 Z"
            fill="url(#wave2)"
            style={{
              animation: "waveMove2 24s linear infinite alternate"
            }}
          />
        </g>
      </svg>
      <style jsx global>{`
        @keyframes waveMove1 {
          0% { transform: translateY(0px) scaleX(1); }
          50% { transform: translateY(16px) scaleX(1.02); }
          100% { transform: translateY(0px) scaleX(1); }
        }
        @keyframes waveMove2 {
          0% { transform: translateY(0px) scaleX(1); }
          50% { transform: translateY(-14px) scaleX(1.01); }
          100% { transform: translateY(0px) scaleX(1); }
        }
      `}</style>
    </div>
  );
}

// Button Styles
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

// Modal Component
function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(21,27,38,0.78)", display: "flex", alignItems: "center",
      justifyContent: "center", zIndex: 1000
    }}>
      <div style={{
        background: "#232B3B", borderRadius: "1.5rem", padding: "2rem", minWidth: 320,
        boxShadow: "0 8px 48px #151B2688", position: "relative"
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

// Toast notification
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

// Owner Listing Form
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
      <button type="submit" style={primaryBtnStyle}>Submit Listing</button>
      <div style={{ fontSize: 12, color: "#7A8CA3" }}>* required</div>
    </form>
  );
}

// Booking Inquiry Form
function BookingForm({ onSubmit }: { onSubmit: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !date.trim() || !guests.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(null);
    onSubmit();
    setName("");
    setEmail("");
    setDate("");
    setGuests("");
    setOccasion("");
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: 8, color: "#5EE6E6" }}>Book a Yacht</h3>
      <input style={inputStyle} placeholder="Your Name*" required value={name} onChange={e => setName(e.target.value)} />
      <input style={inputStyle} placeholder="Email*" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
      <input style={inputStyle} placeholder="Preferred Date*" type="date" required value={date} onChange={e => setDate(e.target.value)} />
      <input style={inputStyle} placeholder="Number of Guests*" required value={guests} onChange={e => setGuests(e.target.value)} />
      <textarea style={inputStyle} placeholder="Tell us about your occasion" rows={3} value={occasion} onChange={e => setOccasion(e.target.value)} />
      {error && <div style={{ color: "#ff3a6a", fontWeight: 600, fontSize: 14 }}>{error}</div>}
      <button type="submit" style={primaryBtnStyle}>Send Inquiry</button>
      <div style={{ fontSize: 12, color: "#7A8CA3" }}>* required</div>
    </form>
  );
}

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
