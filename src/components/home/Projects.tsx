import React from 'react';
import Project from './Project';

const Projects = () => {
  const projects = [
    {
      title: "50 Headlines",
      description: "App to load top 50 news summary in a day",
      type: "Android Application",
      link: "some link"
    },
    {
      title: "Red Lentils",
      description: "App to deliver indian food in Newyork",
      type: "Web Application",
      link: "some link"
    },
    {
      title: "Finprove",
      description: "Website to take interview for financial instituion",
      type: "Web Application",
      link: "some link"
    }
  ]
  return (
    <div className="h-screen">
      Projects
      {projects.map(project => (
        <Project key={project.title} {...project}/>
      ))}
    </div>
  )
}

export default Projects