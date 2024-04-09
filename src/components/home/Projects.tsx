import React from 'react';
import Project from './Project';

const Projects = () => {
  const projects = [
    {
      title: "FinProve",
      description: "Website to take interview for financial instituion",
      type: "Web Application",
      tags: ["React", "DRF", "Redux", "Onelogin","MySQL"],
      image: "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688768/sudippau/photo-1_600_x.jpg",
      link: "some link"
    },
    {
      title: "RedLentils",
      description: "App to deliver indian food in Newyork",
      type: "Web Application",
      tags: ["React", "DRF", "Flux", "Stripe","MySQL"],
      image: "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688770/sudippau/the-best-top-10-indian-dishes.jpg",
      link: "some link"
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
    <div className="h-screen px-20 py-40 center">
      <div className="flex gap-20 justify-center align-middle">
        {projects.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects