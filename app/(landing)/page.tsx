"use client";

import { Navbar } from "@/components/custom/common/Navbar";
import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
    
    </div>
  );
}