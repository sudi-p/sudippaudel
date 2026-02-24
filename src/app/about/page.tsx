import React from 'react'

const About = () => {
  const experience = [
    {
      title: "Software Engineer",
      duration: "Dec 2017-Nov 2021",
      company: "FinProve Inc, New York City, NY(Remote)",
      roles: [
        "Designed the architecture of the core product, ensuring technical robustness, scalability, and outstanding UX",
        "Worked on system stability by reducing production incidents by 60% via improvements in Integration tests, observability, and monitoring, focusing on essential basics",
        "Ensured code maintainability by modularizing code, reducing code complexity by 25%",
        "Collaborated with cross-functional teams of senior developers, testers, and product managers to deliver enterprise-grade scalable SaaS solutions",
        "Optimized user interface designs, leading to a 15% increase in user satisfaction scores"
      ]
    },
    {
      title: "Software Engineer",
      duration: "Apr 2016 - Nov 2017",
      company: "Red Lentils[Freelance Project]",
      roles: [
        "Worked on both frontend and backend along with credit card payment functionality using Stripe",
        "Achieved a 30% improvement in code quality by integrating continuous improvement practices",
      ]
    },
  ];
  const skills = {
    "Expert": ["JavaScript", "ES6", "React", "Redux", "TypeScript", "HTML", "SCSS/SASS", "LESS", "Tailwind CSS", "Python", "Django", "MySQL", "Agile", "Scrum", "Material UI", "Bootstrap", "Git", "GitHub", "Axios", "Problem-solving", "Analytical Skills"],
    "Proficient": ["Next.js", "NodeJS", "Express", "Flask", "Test-driven development", "React Testing Library", "Jest", "MongoDB"],
    "Beginner": ["Auth0", "Heroku", "SendGrid", "Figma", "Bitbucket", "MVC", "Material UI", "Bootstrap", "SAML"]
  }
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="max-w-screen-xl">
        <div className="text-center">
          <p>Sudip Paudel</p>
          <p>Software Engineer | Full Stack Developer</p>
          <p>+1 437-339-6055 |  Canada | spaudel645@gmail.com</p>
          <p>linkedin.com/in/sudippau | https://github.com/sudi-p</p>
        </div>
        <section id="skills">
          <SectionTitle title="Key Skills"/>
          
        </section>
        <section id="introduction">
          <SectionTitle title="Introduction"/>
          <p>Experienced software engineer with 5 years of full-stack development expertise, seeking a dynamic role in software engineering or frontend development to leverage skills in crafting innovative solutions, delightful user experiences, and effective communication. Passionate about coding, continuous learning, solving problems, and contributing to cutting-edge projects. Currently looking for a front-end developer role.</p>
        </section>
      </div>
    </div>
  )
}
type SectionTitleProps = {
  title: string,
}
const SectionTitle = ({ title }: SectionTitleProps) => (
  <div className="font-bold uppercase b">
    {title}
  </div>
)

export default About