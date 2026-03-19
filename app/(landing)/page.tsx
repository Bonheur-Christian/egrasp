"use client";

import { Navbar } from "@/components/custom/common/Navbar";
import Features from "@/components/custom/landingpage/Features";
import { Footer } from "@/components/custom/landingpage/Footer";
import HeroSection from "@/components/custom/landingpage/HeroSection";
import NewsSection from "@/components/custom/landingpage/News";
import SuccessSection from "@/components/custom/landingpage/OurSuccess";
import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SuccessSection />
      <Features />
      <NewsSection />
      <Footer />
    </div>
  );
}
