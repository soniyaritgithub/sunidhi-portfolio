"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import About from "@/components/About";
import AIToolkit from "@/components/AIToolkit";
import AIJourney from "@/components/AIJourney";
import AIInnovation from "@/components/AIInnovation";
import TechStack from "@/components/TechStack";
import Highlights from "@/components/Highlights";
import RecruiterCTA from "@/components/RecruiterCTA";
import AIAssistant from "@/components/AIAssistant";
import BlogSection from "@/components/BlogSection";
import WelcomePopup from "@/components/WelcomePopup";
import { useState, useEffect } from "react";

export default function Home() {
      const [showPopup, setShowPopup] = useState(false);
      useEffect(() => {
  const timer = setTimeout(() => {
    setShowPopup(true);
  }, 3000);

  return () => clearTimeout(timer);
}, []);
      const handleExplore = () => {
  setShowPopup(false);

  document
    .getElementById("resume-analyzer")
    ?.scrollIntoView({
      behavior: "smooth",
    });
};
  return (
      <>
  <WelcomePopup
    isOpen={showPopup}
    onClose={() => setShowPopup(false)}
    onExplore={handleExplore}
  />

  {/* Baaki code */}
    <main className="bg-black text-white min-h-screen grid-bg">
      <div className="glow-bg" />

      <ParticlesBackground />

      <CursorGlow />

      <Navbar />

      <Hero />

      <div className="section-divider" />

      <About />

      <div className="section-divider" />

<Skills />

<div className="section-divider" />

<Highlights />

<div className="section-divider" />

<TechStack />

<div className="section-divider" />

<BlogSection />


      <div className="section-divider" />

      <AIToolkit />

<div className="section-divider" />

<AIInnovation />

<div className="section-divider" />

<AIJourney />

<div className="section-divider" />

<Projects />

      <div className="section-divider" />

      <Education />

      <div className="section-divider" />

      <Certifications />

<div className="section-divider" />

<RecruiterCTA />

<div className="section-divider" />

<Contact />

      <div className="section-divider" />
<AIAssistant />
      <Footer />

      
    </main>
    </>
  );
}