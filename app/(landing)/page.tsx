"use client";

import { Navbar } from "@/components/custom/common/Navbar";
import HeroSection from "@/components/custom/landingpage/HeroSection";
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

    </div>
  );
}