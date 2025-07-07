"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WaveDivider from "./components/WaveDivider";
import FeaturedYachts from "./components/FeaturedYachts";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import ListingModal from "./components/ListingModal";

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
