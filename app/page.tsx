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

export default function Home() {
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

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const [heroAnim, setHeroAnim] = useState(false);

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
    const contactsSaved = localStorage.getItem(CONTACTS_KEY);
    if (contactsSaved) {
      try {
        const parsed = JSON.parse(contactsSaved);
        if (Array.isArray(parsed)) setContacts(parsed);
      } catch {}
    }
    setTimeout(() => setHeroAnim(true), 100);
  }, []);

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
      <PremiumSVGBackground />

      {/* Navigation */}
      {/* ...rest of your page content remains unchanged... */}
      {/* All your components, forms, logic, and styles stay as before */}
    </main>
  );
}

// ...all your other components remain unchanged (YachtCard, AnimatedButton, LightboxGallery, etc.)...

// --- Premium SVG Marine Background (Full Wireframe Scenic Art, Animated!) ---
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
