// components/VerticalTimeline.js
"use client";
import React from "react";
import { FaCode, FaServer, FaBriefcase, FaProjectDiagram, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Shiboleth.ai",
    role: "Software Engineer",
    startTime: new Date("2024-06"),
    endTime: "Present",
    description:
      "Designed and developed web applications, including OFAC Geo-Fencing and Call Monitoring, reducing manual processes by 70%.",
    icon: <FaRocket className="text-blue-500" />,
  },
  {
    company: "Bestsr.ai",
    role: "Software Developer",
    startTime: new Date("2024-05"),
    endTime: "Present",
    description:
      "Developed tools enabling Amazon sellers to test product attributes, improving product rankings by up to 15%.",
    icon: <FaProjectDiagram className="text-green-500" />,
  },
  {
    company: "FinProve Inc.",
    role: "Senior Software Engineer",
    startTime: new Date("2017-12"),
    endTime: new Date("2021-11"),
    description:
      "Gathered requirements and designed the core product architecture, ensuring robustness and scalability.",
    icon: <FaCode className="text-purple-500" />,
  },
  {
    company: "RedLentils Freelance Project",
    role: "Software Engineer",
    startTime: new Date("2017-04"),
    endTime: new Date("2017-11"),
    description:
      "Coordinated on both front-end and back-end development, integrating credit card payment functionality via Stripe.",
    icon: <FaServer className="text-red-500" />,
  },
  {
    company: "Pagevamp/Outside Tech",
    role: "Web Developer",
    startTime: new Date("2017-02"),
    endTime: new Date("2017-04"),
    description:
      "Reduced system downtime by 20% through application maintenance and quick issue resolution.",
    icon: <FaBriefcase className="text-yellow-500" />,
  },
];

const formatDate = (date) => {
  const options = { year: "numeric", month: "short" };
  return typeof date === "string"
    ? date
    : new Intl.DateTimeFormat("en-US", options).format(date);
};

export default function VerticalTimeline() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Career Timeline</h1>
      <div className="relative w-full max-w-2xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500"></div>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className={`flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-5/12">
                <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
                  <div className="text-lg font-bold">{exp.company}</div>
                  <div className="text-sm text-gray-700 mb-2">{exp.role}</div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-0 flex-1">
                {exp.icon}
              </div>
              <div className="hidden lg:block w-5/12 text-center lg:text-left">
                <div className="text-gray-700 text-sm">
                  {formatDate(exp.startTime)} - {formatDate(exp.endTime)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}