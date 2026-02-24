import React from "react";
import { FaHandPaper } from "react-icons/fa";
import Social from "@/components/home/Social";
import Section from "./Section";
import styles from "./styles/Hero.module.scss";
import Link from "next/link";

type HeroProps = {
  handleClick: () => void;
};

const Hero = ({ handleClick }: HeroProps) => {
  return (
    <Section id="home">
      <div className="relative mx-auto flex min-h-[85vh] max-w-screen-xl flex-col justify-center gap-12 px-2 py-14 md:min-h-screen md:flex-row md:items-center md:gap-20 md:px-4">
        <div
          onClick={handleClick}
          className="group absolute right-2 top-4 inline-flex cursor-pointer items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 font-semibold text-blue-700 shadow-md shadow-blue-100/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-600 hover:text-white md:right-6 md:top-8"
        >
          <div className="transition-transform duration-300 group-hover:rotate-45">
            <FaHandPaper />
          </div>
          Say Hello!
        </div>

        <div className="order-2 flex w-full flex-col gap-5 text-center md:order-1 md:w-1/2 md:text-left">
          <p className="mx-auto w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 md:mx-0">
            Available for opportunities
          </p>
          <div className="text-3xl font-bold text-slate-800 md:text-4xl">
            Sudip Paudel
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            Software Engineer
          </h1>
          <p className="text-base font-medium text-slate-600 md:text-2xl md:font-light">
            Full Stack Developer | AI Enthusiast | LLM Integration Engineer
          </p>

          <div className="mt-1 flex justify-center md:justify-start">
            <Social />
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/timeline"
              className="inline-flex items-center rounded-xl border border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View Timeline
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center rounded-xl border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-50"
            >
              View Resume
            </Link>
          </div>

          <div className="text-sm leading-relaxed text-slate-600 md:max-w-xl md:text-base">
            Building scalable web products and practical AI features that turn
            complex workflows into simple user experiences.
          </div>
        </div>

        <div className="order-1 flex w-full justify-center md:order-2 md:w-1/2 md:justify-end">
          <div className={styles.blob} />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
