"use client";

import FaqSection from "@/components/dash/FaqSection";
import FeaturesSection from "@/components/dash/FeaturesSection";
import Footer from "@/components/dash/Footer";
import Header from "@/components/dash/Header";
import HeroSection from "@/components/dash/HeroSection";
import HowItWorks from "@/components/dash/HowItWorks";
import NewsletterSection from "@/components/dash/NewsletterSection";
import PricingSection from "@/components/dash/PricingSection";
import TestimonialSection from "@/components/dash/TestimonialSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Update the document title
    document.title = 'BlockTix - Decentralized Event Ticketing';
    
    // Find and update the favicon if it exists
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute('href', '/favicon.ico');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <TestimonialSection />
        <PricingSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}