"use client";

import { EB_Garamond, Source_Sans_3 } from "next/font/google";
import { resumeData } from "./data";
import SectionTitle from "@/components/resume/SectionTitle";
import ExperienceItem from "@/components/resume/ExperienceItem";
import EducationItem from "@/components/resume/EducationItem";

const headingFont = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className={`min-h-screen bg-stone-200 py-8 print:bg-white print:py-0 ${bodyFont.className}`}
    >
      <div className="mx-auto max-w-[860px] bg-stone-50 shadow-[0_4px_40px_rgba(0,0,0,0.12),0_1px_4px_rgba(0,0,0,0.08)] print:mx-0 print:max-w-full print:shadow-none">
        <div className="flex justify-center p-6 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="bg-stone-900 px-8 py-2.5 text-[0.85rem] font-medium uppercase tracking-[0.1em] text-stone-50 transition-colors duration-200 hover:bg-stone-700"
          >
            Print / Save as PDF
          </button>
        </div>

        <div className="px-10 pb-12 pt-10 md:px-16 md:pb-14 md:pt-14 print:px-8 print:py-6">
          <header className="mb-6 border-b-2 border-stone-900 pb-5">
            <h1
              className={`mb-1 text-[2.6rem] font-semibold leading-none tracking-[-0.01em] text-stone-900 ${headingFont.className}`}
            >
              {resumeData.name}
            </h1>
            <p className="mb-3 text-[0.9rem] uppercase tracking-[0.08em] text-stone-600">
              {resumeData.title}
            </p>

            <div className="flex flex-wrap text-[0.82rem] text-stone-700">
              <span>{resumeData.phone}</span>
              <span className="mx-2 text-stone-400">|</span>
              <span>{resumeData.location}</span>
              <span className="mx-2 text-stone-400">|</span>
              <a
                href={`mailto:${resumeData.email}`}
                className="hover:underline"
              >
                {resumeData.email}
              </a>

              {resumeData.contactLinks.map((contact) => (
                <div key={contact.href} className="contents">
                  <span className="mx-2 text-stone-400">|</span>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {contact.label}
                  </a>
                </div>
              ))}
            </div>
          </header>

          <section className="mb-6">
            <SectionTitle
              title="Summary"
              headingClassName={headingFont.className}
            />
            <p className="text-[0.88rem] leading-relaxed text-stone-700">
              {resumeData.summary}
            </p>
          </section>

          <section className="mb-6">
            <SectionTitle
              title="Key Skills"
              headingClassName={headingFont.className}
            />
            <div className="space-y-1.5">
              {resumeData.skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col text-[0.85rem] leading-relaxed text-stone-700 sm:flex-row"
                >
                  <span className="w-[90px] shrink-0 font-semibold text-stone-900">
                    {skill.label}:
                  </span>
                  <span>{skill.items}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <SectionTitle
              title="Experience"
              headingClassName={headingFont.className}
            />
            <div className="space-y-5">
              {resumeData.experience.map((job) => (
                <ExperienceItem
                  key={`${job.company}-${job.startDate.toISOString()}`}
                  item={job}
                />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle
              title="Education"
              headingClassName={headingFont.className}
            />
            <div className="space-y-3">
              {resumeData.education.map((education) => (
                <EducationItem
                  key={`${education.degree}-${education.startDate.toISOString()}`}
                  item={education}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
