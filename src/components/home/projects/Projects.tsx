import React, { forwardRef } from "react";
// import Project from "./Project";
import Section from "../Section";
import { IoMdDocument } from "react-icons/io";

const experiences = [
    
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

const projects = [
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
    images: ["https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688768/sudippau/The_Indianapolis_Star__2011.jpg"],
  },
]


const Projects = () => {
  return (
    <Section id="projects" bgColor="#f7fafc">
      <div className="p-6 md:p-10 lg:pt-20 text-center">
        <h2 className="font-bold text-4xl mb-6">My Recent Work</h2>
        <p className="text-lg mb-12 mx-auto max-w-2xl">
          Here are a few projects that I've worked on, showcasing my experiences and technical expertise.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {experiences.concat(projects).map((experience, index) => (
            <Project key={index} {...experience} />
          ))}
        </div>
        <a
          href="https://drive.google.com/file/d/1aPIWI4fltMoyKiizSBXPJjpIEbv8sgSo/view?usp=sharing"
          className="mt-10 inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdDocument className="mr-2" /> View My Resume
        </a>
      </div>
    </Section>
  );
};
export default Projects;

// // components/Project.js
// import React from "react";
import { FaGithub } from "react-icons/fa";
import Screenshots from "./Screenshots";

type ProjectProps = {
  title: string;
  description: string;
  type: string;
  images: Array<string>;
  screenshotsAvailable: boolean;
  link?: string;
  tags: Array<string>;
};

const Project = ({
  title,
  description,
  tags,
  screenshotsAvailable,
  images,
  link,
}: ProjectProps) => {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
      <Screenshots images={images} screenshotsAvailable={screenshotsAvailable} />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            className="flex items-center text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-1" /> View Source
          </a>
        )}
      </div>
    </div>
  );
};


// export default Project