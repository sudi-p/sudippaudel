import React, { forwardRef } from 'react';
import Project from './Project';
import Section from '../Section';

const Projects = () => {
  const projects = [
    {
      title: "GlobalAid",
      description: "This project is a comprehensive web-based platform tailored to the unique needs of international students seeking job opportunities and rental accommodations in Canada.",
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
      link: "https://github.com/sudi-p/globalaid"
    },
    {
      title: "FinProve",
      description: "This project is a web-based platform tailored for conducting interviews in the financial sector, providing a seamless and efficient solution for hiring processes in financial institutions.",
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
      description: "This project is a website designed and developed to facilitate the delivery of authentic Indian cuisine to customers in New York.",
      type: "Web Application",
      tags: ["React", "DRF", "Flux", "Stripe", "MySQL"],
      screenshotsAvailable: false,
      images: ["https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688770/sudippau/the-best-top-10-indian-dishes.jpg"],
      link: "https://github.com/sudi-p/redlentils"
    },
    // {
    //   title: "50 Headlines",
    //   description: "App to load top 50 news summary in a day",
    //   type: "Android Application",
    //   tags: ["Flask", "CSS"],
    //   image: "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688768/sudippau/The_Indianapolis_Star__2011.jpg",
    // },
  ]
  return (
    <Section id="projects">
      <div className="p-3 md:p-10 lg:pt-32 text-center">
        <p className="font-bold text-3xl mb-4">My Recent Work</p>
        <p className="text-xl mb-16">Here are a few projects that I&#39;ve worked on.</p>
        <div className="m-auto">
          {projects.map(project => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </Section>
  )
};

export default Projects