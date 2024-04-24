import React, { forwardRef } from 'react';
import Project from './Project';
import Section from './Section';

const Projects = () => {
  const projects = [
    {
      title: "GlobalAid",
      description: "Website for international students to find jobs and rental in canada ",
      type: "Web Application",
      tags: ["MERN", "Next.js", "Redux"],
      image: "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688768/sudippau/photo-1_600_x.jpg",
      link: "https://github.com/sudi-p/globalaid"
    },
    {
      title: "FinProve",
      description: "Website to take interview for financial institution",
      type: "Web Application",
      tags: ["React", "DRF", "Redux", "Onelogin", "MySQL"],
      image: "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688768/sudippau/photo-1_600_x.jpg",
      link: "https://github.com/sudi-p/finprove"
    },
    {
      title: "RedLentils",
      description: "App to deliver indian food in Newyork",
      type: "Web Application",
      tags: ["React", "DRF", "Flux", "Stripe", "MySQL"],
      image: "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688770/sudippau/the-best-top-10-indian-dishes.jpg",
      link: "https://github.com/sudi-p/redlentils"
    },
    {
      title: "50 Headlines",
      description: "App to load top 50 news summary in a day",
      type: "Android Application",
      tags: ["Flask", "CSS"],
      image: "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688768/sudippau/The_Indianapolis_Star__2011.jpg",
    },
  ]
  return (
    <Section id="projects">
      <div className="p-3 md:p-20 pt-32 text-center">
        <p className="font-bold text-3xl mb-4">My Recent Work</p>
        <p className="text-xl mb-10">Here are a few projects that I&#39;ve worked on.</p>
        <div className="m-auto grid md:grid-cols-2 gap-10">
          {projects.map(project => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </Section>
  )
};

export default Projects