"use client";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/global/navbar";
import Hero from "@/components/home/hero";
import AboutUs from "@/components/home/about-us";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import Contact from "@/components/home/contact";
import FAQ from "@/components/home/faq";
import Footer from "@/components/global/footer";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Background Image */}
      

      {/* Navbar */}
     <Navbar />

      {/* Hero Section */}
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
