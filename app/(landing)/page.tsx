"use client";

import { Navbar } from "@/components/custom/common/Navbar";
import Features from "@/components/custom/landingPage/Features";
import { Footer } from "@/components/custom/landingPage/Footer";
import HeroSection from "@/components/custom/landingPage/HeroSection";
import NewsSection from "@/components/custom/landingPage/News";
import SuccessSection from "@/components/custom/landingPage/OurSuccess";
import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <SuccessSection />
      <Features />
      <NewsSection />
    </div>
  );
}
