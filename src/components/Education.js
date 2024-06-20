// src/components/Education.js
"use client";
import React from "react";

const education = [
  {
    institution: "ISMT College",
    degree: "BIT",
    tenure: "2019 - 2023",
    location: "Tinkune, Kathmandu",
  },
  {
    institution: "Capital College And Research Center",
    degree: "+2 Level Education (Science Faculty)",
    tenure: "JULY 2017- SEPTEMBER 2019",
    location: "Koteshwor, Kathmandu",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
        <ul>
          {education.map((edu, index) => (
            <li key={index} className="mb-8">
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="text-gray-700">
                {edu.degree} | {edu.tenure}
              </p>
              <p className="text-gray-600">{edu.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
