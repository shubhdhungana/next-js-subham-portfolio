// src/components/Certifications.js
"use client";
import React from 'react';

const certifications = [
  {
    title: 'Mern Stack Development',
    provider: 'Deerwalk Training Center',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    provider: 'FreeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/shubhdhungana/responsive-web-design'
  },
  // Add more certifications here
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        <ul>
          {certifications.map((certification, index) => (
            <li key={index} className="mb-4 text-center">
              <h3 className="text-xl font-semibold">{certification.title}</h3>
              <p className="text-gray-700">{certification.provider}</p>
              {certification.link && <a href={certification.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Certification</a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
