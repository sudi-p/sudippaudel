'use client';
import DisplayPicture from '@/components/home/DisplayPicture';
import Projects from '@/components/home/Projects';
import Social from '@/components/home/Social';
export default function Home() {
  return (
    <main>
      <div className="p-10 flex gap-32 justify-center items-center h-screen border-b-2 border-solid border-gray-200">
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
        <div className="leading-relaxed p-4 text-center bg-blue-200 rounded-xl w-1/2 absolute inset-x-1/4 -top-[60px]">
          Welcome to my portfolio! I am a Toronto-based Software Engineer with 5+ years of experience. Skilled in JavaScript, React, Redux, Python, Django, and more, I specialize in crafting innovative solutions and delightful user experiences. Let's connect and explore how we can collaborate on impactful projects!
        </div>
      </div>
      <Projects />
    </main>
  )
}
