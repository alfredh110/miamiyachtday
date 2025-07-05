export const metadata = {
  title: "Luxury Yacht Charter Platform | MIAMI YACHT DAY",
  description:
    "Book, browse, and list stunning yachts for charter. Discover luxury yacht experiences, explore featured yachts, and find your next adventure on the water.",
  openGraph: {
    title: "Luxury Yacht Charter Platform | MIAMI YACHT DAY",
    description:
      "Book, browse, and list stunning yachts for charter. Discover luxury yacht experiences, explore featured yachts, and find your next adventure on the water.",
    images: [
      {
        url: "/og-image.jpg", // Place a branded image in /public for best results
        width: 1200,
        height: 630,
        alt: "Yachts on the water",
      },
    ],
  },
};

import React, { useState } from "react";
import Navbar from "./app/components/Navbar";
import Hero from "./app/components/Hero";
import WaveDivider from "./app/components/WaveDivider";
import FeaturedYachts from "./app/components/FeaturedYachts";
import HowItWorks from "./app/components/HowItWorks";
import Gallery from "./app/components/Gallery";
import Testimonials from "./app/components/Testimonials";
import CTASection from "./app/components/CTASection";
import Footer from "./app/components/Footer";
import BookingModal from "./app/components/BookingModal";
import ListingModal from "./app/components/ListingModal";

// Adjust import paths if needed depending on your directory setup

export default function Page() {
  const [showBooking, setShowBooking] = useState(false);
  const [showListing, setShowListing] = useState(false);

  return (
    <>
      <Navbar onBook={() => setShowBooking(true)} onList={() => setShowListing(true)} />
      <Hero onBook={() => setShowBooking(true)} onList={() => setShowListing(true)} />
      <WaveDivider />
      <FeaturedYachts onBook={() => setShowBooking(true)} />
      <WaveDivider color="#4568DC" />
      <HowItWorks />
      <WaveDivider />
      <Gallery />
      <WaveDivider color="#4568DC" />
      <Testimonials />
      <CTASection onBook={() => setShowBooking(true)} />
      <Footer />
      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
      {showListing && <ListingModal onClose={() => setShowListing(false)} />}
    </>
  );
}
