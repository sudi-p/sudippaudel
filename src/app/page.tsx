'use client';
import { useRef, useState } from 'react';
import Projects from '@/components/home/Projects';

import Testimonials from '@/components/home/Testimonials';
import ContactForm from '@/components/home/ContactForm';
import Skills from '@/components/home/Skills';
import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';


export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <body style={{ overflow: showContactForm ? "hidden" : "auto" }}>
      <Navbar />
      <Hero handleClick={() => setShowContactForm(true)}/>
      <Skills />
      <Projects />
      <Testimonials />
      <Footer handleClick={() => setShowContactForm(true)} />
      {showContactForm && <ContactForm setShowContactForm={setShowContactForm} />}
    </body >
  )
}
