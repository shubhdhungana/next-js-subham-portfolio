// src/components/Skills.js
"use client";
import React from 'react';

const skills = [
  'JavaScript',
  'NextJS',
  'ExpressJs',
  'MongoDB',
  'ReactJs',
  'Front-end',
  'Back-end',
  'Git',
  'GitLab',
  'GitHub',
  'Web Application Security Testing',
  'Linux',
  'Bash Scripting',
  'Bug Bounty Hunting',
  'Tailwind CSS',
  'Reconnaissance'
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
