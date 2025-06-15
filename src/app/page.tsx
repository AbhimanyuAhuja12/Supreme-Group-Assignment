'use client'

import HeroSection from '@/components/HeroSection';
import Header from "@/components/Header";
import FeatureSection from '@/components/FeatureSection';
import Footer from "@/components/Footer";
import Contact from "@/components/Contacts"

export default function Home() {
  return (
    <div>
      
      <Header/>
      <HeroSection/>
      <FeatureSection/>
      <Contact/>
      <Footer/>
    </div>

  );
}
