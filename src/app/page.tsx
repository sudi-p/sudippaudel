'use client';
import { useRef, useState } from 'react';
import DisplayPicture from '@/components/home/DisplayPicture';
import Projects from '@/components/home/Projects';
import Social from '@/components/home/Social';
import Testimonials from '@/components/home/Testimonials';
import { FaHandPaper } from "react-icons/fa";
import ContactForm from '@/components/home/ContactForm';
import Section from '@/components/home/Section';
import Skills from '@/components/home/Skills';
import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';


export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const menuRef = {
    homeRef: homeRef,
    skillsRef: skillsRef,
    projectsRef: projectsRef,
    testimonialsRef: testimonialsRef,
  }
  return (
    <body style={{ overflow: showContactForm ? "hidden" : "auto" }}>
      <Navbar ref={menuRef}/>
      <Section ref={homeRef}>
        <div className="p-10 h-screen flex gap-32 justify-center items-center ">
          <div onClick={() => setShowContactForm(true)} className="p-2 group flex items-center gap-1 bg-blue-500 text-white rounded-xl cursor-pointer font-semibold hover:bg-blue-600 absolute top-10 right-28">
            <div className='group-hover:rotate-45'><FaHandPaper /></div>Say Hello!
          </div>
          <div className='flex flex-2 flex-col gap-10 w-1/2'>
            
            <div className="text-3xl font-bold">Sudip Paudel</div>
            
            <div className="text-6xl">
              Software Engineer
            </div>
            <div className="text-2xl font-light">
              Full Stack Developer | React Enthusiast
            </div>
            <Social />
          </div>
          <DisplayPicture />
        </div>
        <div className="relative">
          <div className="font-light leading-relaxed max-w-screen-xl m-auto tracking-wide p-4 text-center bg-blue-300 rounded-xl w-2/3 absolute inset-x-0 -top-[80px] bg-opacity-10 backdrop-blur-md border border-blue-300 shadow-md">
            Welcome to my portfolio! I am a Toronto-based Software Engineer with 5+ years of experience. Skilled in JavaScript, React, Redux, Python, Django, and more, I specialize in crafting innovative solutions and delightful user experiences. Let's connect and explore how we can collaborate on impactful projects!<br />
            Projects that i have worked on
          </div>
        </div>
      </Section>
      <Skills ref={skillsRef}/>
      <Projects ref={projectsRef}/>
      <Testimonials ref={testimonialsRef} />
      <Footer handleClick={() => setShowContactForm(true)} />
      {showContactForm && <ContactForm setShowContactForm={setShowContactForm} />}
    </body >
  )
}
