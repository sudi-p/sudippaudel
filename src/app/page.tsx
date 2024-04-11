'use client';
import DisplayPicture from '@/components/home/DisplayPicture';
import Projects from '@/components/home/Projects';
import Social from '@/components/home/Social';
import Testimonials from '@/components/home/Testimonials';
import { useState } from 'react';
export default function Home() {
  const [showContactForm, setShowContactForm] = useState(true)
  return (
    <main>
      <div className="relative p-10 flex gap-32 justify-center items-center h-screen border-b-2 border-solid border-gray-200">
        <div className="p-2 bg-blue-400 text-white rounded-xl cursor-pointer font-semibold hover:bg-blue-500 absolute top-10 right-28">
          Say Hello!
        </div>
        <div className='flex flex-2 flex-col gap-10 w-1/2'>
          <header className="text-3xl font-bold">sudipPaudel</header>
          <div className="text-6xl">
            Software Engineer
          </div>
          <div className="text-2xl">
            Full Stack Developer | React Enthusiast
          </div>

          <Social />
        </div>
        <DisplayPicture />
      </div>
      <div className="relative">
        <div className="leading-relaxed tracking-wide p-4 text-center bg-blue-200 rounded-xl w-1/2 absolute inset-x-1/4 -top-[80px]">
          Welcome to my portfolio! I am a Toronto-based Software Engineer with 5+ years of experience. Skilled in JavaScript, React, Redux, Python, Django, and more, I specialize in crafting innovative solutions and delightful user experiences. Let's connect and explore how we can collaborate on impactful projects!<br/>
          Projects that i have worked on
        </div>
      </div>
      <Projects />
      <Testimonials />
    </main>
  )
}
