import React, { forwardRef } from 'react'
import Section from './Section'
import { MdCloudDone } from "react-icons/md";
import { RoughNotation } from "react-rough-notation";

const Skills = () => {
  const front = [
    { skill: "Javascript", level: "Experienced" },
    { skill: "React", level: "Experienced" },
    { skill: "Redux", level: "Experienced" },
    { skill: "SCSS", level: "Experienced" },
    { skill: "Next.js", level: "Intermediate" },
    { skill: "Html", level: "Experienced" }
  ]
  const back = [
    { skill: "Django", level: "Experienced" },
    { skill: "Express", level: "Intermediate" },
    { skill: "MySQL", level: "Experienced" },
    { skill: "MongoDb", level: "Intermediate" },
  ]

  const tools = [
    { skill: "Lighthouse" },
    { skill: "Sendgrid" },
    { skill: "Git" },
    { skill: "Axios" },
    { skill: "Jest" },
    { skill: "Docker" },
  ]
  return (
    <Section id="skills">
      <div className="py-10 lg:py-20 text-center">
        <div className="font-light leading-relaxed max-w-screen-xl m-auto tracking-wide p-4 text-lg md:text-2xl w-4/5 text-center mb-10">
          Welcome to my portfolio! I am a Toronto-based Software Engineer with 5+ years of experience. Skilled in JavaScript, React, Redux, Python, Django, and more, I specialize in crafting innovative solutions and delightful user experiences. Let&#39;s connect and explore how we can collaborate on impactful projects!<br />
          I am looking for a new role as a developer. <RoughNotation type="circle" show={true} color="rgb(216 180 254)"> <span className="font-bold p-2">Hire me!</span></RoughNotation>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          <Box skills={front} title="Frontend Development" />
          <Box skills={back} title="Backend Development" />
          <Box skills={tools} title="Tools & Technologies" />
        </div>
      </div>
    </Section>
  )
};

export default Skills;

type SkillProps = {
  skill: string,
  level?: string
}
type BoxProps = {
  title: string,
  skills: Array<SkillProps>,
}

const Box = ({ title, skills }: BoxProps) => {
  return (
    <div className='z-10 p-4 w-96 rounded-3xl bg-opacity-10 bg-blue-300 backdrop-blur-md border border-blue-300  shadow-md'>
      <p className="font-bold p-4 text-xl">{title}</p>
      <div className="flex flex-wrap">
        {skills.map(({ skill, level }) => (
          <div key={skill} className='w-40 p-3 flex items-start gap-3 leading-relaxed'>
            <MdCloudDone className="text-lg" />
            <div className="text-left">
              <p className="font-bold"> {skill} </p>
              {level && <p className="font">{level}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}