// src/components/Experience.js
"use client";
import React from "react";

const experiences = [
  {
    role: "Full Stack MERN Student",
    company: "Deerwalk Training Center",
    tenure: "December 2023 - February 2024",
    description:
      "Full Stack Development, MERN Stack Development, Reactjs, Nodejs, MongoDB, ExpressJs, Web Development, Front End Development, Backend Development.",
  },
  {
    role: "Security Analyst Intern",
    company: "CYNICAL TECHNOLOGY PVT. LTD",
    tenure: "September 2023 - November 2023",
    description:
      "Web Application Security Testing, Vulnerability Assessment, Penetration Testing.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <ul>
          {experiences.map((experience, index) => (
            <li key={index} className="mb-8">
              <h3 className="text-xl font-semibold">{experience.role}</h3>
              <p className="text-gray-700">
                {experience.company} | {experience.tenure}
              </p>
              <p className="text-gray-600">{experience.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
