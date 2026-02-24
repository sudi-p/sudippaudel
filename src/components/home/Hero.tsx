import React from 'react';
import { FaHandPaper } from "react-icons/fa";
import Social from '@/components/home/Social';
import Section from './Section';
import styles from './styles/Hero.module.scss';

type HeroProps = {
  handleClick: () => void,
}

const Hero = ({ handleClick }: HeroProps) => {
  return (
    <Section id="home">
      <div className="p-10 md:h-screen sm:flex gap-3 md:gap-32 justify-center items-center ">
        <div onClick={handleClick} className="p-2 group flex items-center gap-1 bg-blue-500 text-white rounded-xl cursor-pointer font-semibold hover:bg-blue-600 absolute top-6 md:top-10 right-0 md:right-28">
          <div className='group-hover:rotate-45'><FaHandPaper /></div>Say Hello!
        </div>
        <div className='flex flex-2 flex-col gap-3 md:gap-10 md:w-1/2'>
          <div className="text-3xl font-bold">Sudip Paudel</div>
          <div className="text-3xl md:text-6xl">
            Software Engineer
          </div>
          <div className="text-lg md:text-2xl font-light">
            Full Stack Developer | React Enthusiast
          </div>
          <Social />
        </div>
        <div className={styles.blob} />
      </div>
      
    </Section>
  )
}

export default Hero