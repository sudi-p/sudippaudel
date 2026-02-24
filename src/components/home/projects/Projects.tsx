import React from "react";
import Section from "../Section";
import Project from "./Project";
import { portfolioProjects } from "@/data/data";

const recentWorkProjects = portfolioProjects.filter(
  (project) => project.includeInRecentWork,
);

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
          {recentWorkProjects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Projects;
