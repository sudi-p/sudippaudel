import React from 'react';
import { FaHandPaper } from "react-icons/fa";
import Social from '@/components/home/Social';
import Section from './Section';
import { RoughNotation } from "react-rough-notation";
import styles from './styles/Hero.module.scss';

type HeroProps = {
  handleClick: () => void,
}

const Hero = ({ handleClick }: HeroProps) => {
  return (
    <Section id="home">
      <div className="px-2 pt-8 md:p-10 md:h-screen md:flex gap-5 md:gap-32 justify-center items-center ">
        <div onClick={handleClick} className="p-2 group flex items-center gap-1 bg-blue-500 text-white rounded-xl cursor-pointer font-semibold hover:bg-blue-600 absolute top-6 md:top-10 right-0 md:right-28">
          <div className='group-hover:rotate-45'><FaHandPaper /></div>Say Hello!
        </div>
        <div className='flex flex-2 flex-col gap-3 md:gap-10 md:w-1/2'>
          <div className="text-xl md:text-3xl font-bold">Sudip Paudel</div>
          <div className="text-2xl md:text-6xl">
            Software Engineer
          </div>
          <div className="text-lg md:text-2xl font-light">
            Full Stack Developer | React Enthusiast
          </div>
          <Social />
        </div>
        <div className={styles.blob} />
      </div>
      <div className="relative">
        <div className="font-light leading-relaxed max-w-screen-xl m-auto tracking-wide p-4 text-center bg-blue-300 rounded-xl mb-5 md:mb-0 md:w-2/3 md:absolute inset-x-0 -top-[80px] bg-opacity-10 backdrop-blur-md border border-blue-300 shadow-md">
          Welcome to my portfolio! I am a Toronto-based Software Engineer with 5+ years of experience. Skilled in JavaScript, React, Redux, Python, Django, and more, I specialize in crafting innovative solutions and delightful user experiences. Let&#39;s connect and explore how we can collaborate on impactful projects!<br />
          I am looking for a new role as a developer. <RoughNotation type="circle" show={true} color="rgb(216 180 254)"> <span className="font-bold p-2">Hire me!</span></RoughNotation>
        </div>
      </div>
    </Section>
  )
}

export default Hero