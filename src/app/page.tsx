'use client';
import DisplayPicture from '@/components/home/DisplayPicture';
import Projects from '@/components/home/Projects';
import Social from '@/components/home/Social';
import { useEffect } from 'react';
export default function Home() {
  return (
    <main className="p-10">
      <div className="flex gap-40 justify-center items-center h-screen">
        <div className='flex flex-1 flex-col gap-10'>
          <header className="text-3xl font-bold">sudipPaudel</header>
          <div className="text-6xl">
            Software Engineer
          </div>
          <div className="text-2xl">
            Full Stack Developer | React Enthusiast
          </div>
          <div className="text-xl leading-relaxed">
            Welcome to my portfolio! I am a Toronto-based Software Engineer with 5+ years of experience. Skilled in JavaScript, React, Redux, Python, Django, and more, I specialize in crafting innovative solutions and delightful user experiences. Let's connect and explore how we can collaborate on impactful projects!
            </div>
          <Social />
        </div>
        <DisplayPicture />
      </div>
      <Projects />
    </main>
  )
}
