import React from "react";
import Section from "./Section";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

type SkillItem = {
  skill: string;
  level?: "Experienced" | "Intermediate";
};

type SkillBoxProps = {
  title: string;
  skills: SkillItem[];
  Icon: React.ElementType;
  compact?: boolean;
};

const levelClasses: Record<NonNullable<SkillItem["level"]>, string> = {
  Experienced: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100 text-amber-700",
};

const SkillBox = ({ title, skills, Icon, compact = false }: SkillBoxProps) => {
  return (
    <article className="group h-full rounded-2xl border border-blue-100/80 bg-white/80 p-6 text-left shadow-lg shadow-blue-100/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/60">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon className="text-lg" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      </div>

      {compact ? (
        <ul className="flex flex-wrap gap-2">
          {skills.map(({ skill }) => (
            <li
              key={skill}
              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-3">
          {skills.map(({ skill, level }) => (
            <li
              key={skill}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2"
            >
              <span className="font-medium text-slate-700">{skill}</span>
              {level ? (
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${levelClasses[level]}`}
                >
                  {level}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

const Skills = () => {
  const frontEndSkills: SkillItem[] = [
    { skill: "JavaScript", level: "Experienced" },
    { skill: "React", level: "Experienced" },
    { skill: "Redux", level: "Experienced" },
    { skill: "SCSS", level: "Experienced" },
    { skill: "Next.js", level: "Intermediate" },
    { skill: "HTML", level: "Experienced" },
  ];

  const backEndSkills: SkillItem[] = [
    { skill: "Django", level: "Experienced" },
    { skill: "Express", level: "Intermediate" },
    { skill: "MySQL", level: "Experienced" },
    { skill: "MongoDB", level: "Intermediate" },
  ];

  const toolSkills: SkillItem[] = [
    { skill: "Lighthouse" },
    { skill: "Sendgrid" },
    { skill: "Git" },
    { skill: "Axios" },
    { skill: "Jest" },
    { skill: "Docker" },
  ];

  return (
    <Section id="skills">
      <div className="mx-auto max-w-screen-xl py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Technical Toolkit
          </p>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            I build clean, high-impact products with a full-stack approach—from
            polished interfaces to reliable backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <SkillBox
            title="Frontend Development"
            skills={frontEndSkills}
            Icon={FaCode}
          />
          <SkillBox
            title="Backend Development"
            skills={backEndSkills}
            Icon={FaServer}
          />
          <SkillBox
            title="Tools & Technologies"
            skills={toolSkills}
            Icon={FaTools}
            compact
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
