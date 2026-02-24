import React from "react";
import Section from "../Section";
import { IoMdDocument } from "react-icons/io";
import Project from "./Project";

type ProjectData = {
  title: string;
  description: string;
  type: string;
  images: string[];
  screenshotsAvailable: boolean;
  link?: string;
  live_url?: string;
  tags: string[];
};

const experiences: ProjectData[] = [
  {
    title: "Shiboleth.ai",
    description:
      "Built OFAC Geo-Fencing and Call Monitoring products with Django + HTMX, integrating LLM pipelines to automate workflows and reduce manual effort by ~72%. Improved app responsiveness with Tailwind CSS and used OpenAI API for intelligent data automation.",
    type: "Web Application",
    tags: ["Django", "HTMX", "Tailwind CSS", "LLMs", "OpenAI API"],
    screenshotsAvailable: false,
    images: [],
    live_url: "www.shiboleth.ai",
  },
  {
    title: "Bestsr.ai",
    description:
      "Developed an AI recommendation system with LLM-backed prompt workflows and OpenAI API to optimize product attributes, boosting Amazon product rankings by 23%. Enhanced backend scalability with Django + PostgreSQL and improved UI/UX with React + Tailwind CSS.",
    type: "Web Application",
    tags: [
      "Django",
      "React",
      "PostgreSQL",
      "Tailwind CSS",
      "LLMs",
      "OpenAI API",
    ],
    screenshotsAvailable: false,
    images: [],
    live_url: "www.bestsr.ai",
  },
  {
    title: "FinProve",
    description:
      "This project is a web-based platform tailored for conducting interviews in the financial sector, providing a seamless and efficient solution for hiring processes in financial institutions.",
    type: "Web Application",
    tags: ["React", "DRF", "Redux", "Onelogin", "MySQL"],
    screenshotsAvailable: true,
    images: [
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1618150372/FinProve/Dashboard.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1624676341/FinProve/CaseStudies.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1624676341/FinProve/Job_Candidates.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1618150009/FinProve/invite.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1618149616/FinProve/add_editor.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1581519382/FinProve/test.png",
    ],
    link: "https://github.com/sudi-p/finprove",
  },
  {
    title: "RedLentils",
    description:
      "This project is a website designed and developed to facilitate the delivery of authentic Indian cuisine to customers in New York.",
    type: "Web Application",
    tags: ["React", "DRF", "Flux", "Stripe", "MySQL"],
    screenshotsAvailable: false,
    images: [
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688770/sudippau/the-best-top-10-indian-dishes.jpg",
    ],
    link: "https://github.com/sudi-p/redlentils",
  },
];

const projects: ProjectData[] = [
  {
    title: "GlobalAid",
    description:
      "This project is a comprehensive web-based platform tailored to the unique needs of international students seeking job opportunities and rental accommodations in Canada.",
    type: "Web Application",
    tags: ["MERN", "Next.js", "Redux"],
    screenshotsAvailable: true,
    images: [
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159619/GlobalAid/Website%20Screenshots/home.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159616/GlobalAid/Website%20Screenshots/jobs.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159613/GlobalAid/Website%20Screenshots/rentals.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159610/GlobalAid/Website%20Screenshots/login.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159607/GlobalAid/Website%20Screenshots/signup.png",
    ],
    link: "https://github.com/sudi-p/globalaid",
  },
  {
    title: "50 Headlines",
    description: "App to load top 50 news summary in a day",
    type: "Android Application",
    tags: ["Flask", "CSS"],
    screenshotsAvailable: false,
    images: [
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688768/sudippau/The_Indianapolis_Star__2011.jpg",
    ],
  },
];

const allProjects: ProjectData[] = [...experiences, ...projects];

const Projects = () => {
  return (
    <Section id="projects" bgColor="#f7fafc">
      <div className="mx-auto max-w-screen-xl px-4 py-20 text-center md:px-8">
        <div className="mx-auto mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Featured Portfolio
          </p>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            My Recent Work
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            A collection of product-focused projects where I handled design,
            architecture, and implementation across frontend, backend, and
            AI/LLM integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((experience, index) => (
            <Project key={`${experience.title}-${index}`} {...experience} />
          ))}
        </div>

        <a
          href="/resume"
          className="mt-12 inline-flex items-center gap-2 rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdDocument className="text-lg" /> View My Resume
        </a>
      </div>
    </Section>
  );
};
export default Projects;
