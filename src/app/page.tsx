"use client";
import { useState, useEffect } from "react";
import Projects from "@/components/home/projects/Projects";

import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";
import Skills from "@/components/home/Skills";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Blogs from "@/components/home/Blogs";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  // Lock page scroll while the contact modal is open, without rendering a
  // nested <body> (which breaks hydration).
  useEffect(() => {
    document.body.style.overflow = showContactForm ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showContactForm]);

  return (
    <>
      <Navbar />
      <Hero handleClick={() => setShowContactForm(true)} />
      <Skills />
      <Projects />
      <Blogs />
      <Testimonials />
      <Footer handleClick={() => setShowContactForm(true)} />
      {showContactForm && (
        <ContactForm setShowContactForm={setShowContactForm} />
      )}
      <SpeedInsights />
    </>
  );
}
