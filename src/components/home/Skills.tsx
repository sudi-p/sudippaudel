import React, { forwardRef } from 'react'
import Section from './Section'
import { MdCloudDone } from "react-icons/md";

const Skills = () => {
  const front = [
    { skill: "Javascript", level: "Experienced" },
    { skill: "React", level: "Experienced" },
    { skill: "Redux", level: "Experienced" },
    { skill: "SCSS", level: "Experienced" },
    { skill: "Next.js", level: "Experienced" },
    { skill: "Html", level: "Experienced" }
  ]
  const back = [
    { skill: "Django", level: "Experienced" },
    { skill: "Express", level: "Experienced" },
    { skill: "MySQL", level: "Experienced" },
    { skill: "MongoDb", level: "Experienced" },
  ]

  const tools = [
    { skill: "Lighthouse" },
    { skill: "Sendgrid" },
    { skill: "Git" },
    { skill: "Axios" },
    { skill: "Jest" },
  ]
  return (
    <Section id="skills">
      <div className="py-20 text-center">
        <p className="font-bold text-3xl my-10">My Skills</p>
        <div className="flex flex-wrap gap-10">
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
    <div className='z-10 p-7 flex-1 rounded-3xl bg-opacity-10 bg-blue-300 backdrop-blur-md border border-blue-300  shadow-md'>
      <p className="font-bold p-4 text-xl">{title}</p>
      <div className="flex flex-wrap">
        {skills.map(({ skill, level }) => (
          <div key={skill} className='w-40 p-4 flex items-start gap-5 leading-relaxed'>
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