// src/components/Projects.js
"use client";
import React from "react";

const projects = [
  {
    title: "Next JS Weather App",
    github: "https://github.com/shubhdhungana/weather-app",
    live: "https://weather-8q4tezw27-subh-dhunganas-projects.vercel.a",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <a
                href={project.github}
                className="block mb-2 text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.live}
                className="block text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
