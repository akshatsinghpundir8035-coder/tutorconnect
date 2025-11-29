import React from "react";

// Figma Sections
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks"; // <--- 1. Import the new component

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION - The Blue Header */}
      <Hero />

      {/* HOW IT WORKS - The Yellow Timeline */}
      <HowItWorks />  {/* <--- 2. Added it here */}

      {/* FEATURES SECTION - The Cards */}
      <FeaturesSection />

    </div>
  );
}