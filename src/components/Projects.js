// src/components/Projects.js
"use client";
import React from "react";

const projects = [
  {
    title: "Meroday, Next JS",
    github: "https://github.com/shubhdhungana/meroday",
    live: "https://meroday.vercel.app/",
  },
  {
    title: "Next JS Weather App",
    github: "https://github.com/shubhdhungana/weather-app",
    live: "https://weather-8q4tezw27-subh-dhunganas-projects.vercel.app",
  },
  {
    title: "Next JS Portfolio website",
    github: "https://github.com/shubhdhungana/next-js-subham-portfolio",
    live: "https://next-js-subham-portfolio.vercel.app/",
  },
  {
    title: "Next JS Quote Of The Day Generator",
    github: "https://github.com/shubhdhungana/quote-generator",
    live: "https://quote-generator-theta-topaz.vercel.app/",
  },
  {
    title: "Next JS Random Joke Generator",
    github: "https://github.com/shubhdhungana/random-joke-generator",
    live: "https://random-joke-generator-umber.vercel.app/",
  },
  {
    title: "React JS Speech To Text Recognition",
    github: "https://github.com/shubhdhungana/speech-recognition",
    live: "https://speech-recognition-lake.vercel.app/",
  },
  {
    title: "React JS Calculator ",
    github: "https://github.com/shubhdhungana/calculator-app",
    live: "https://calculator-app-subham.vercel.app/",
  },
  {
    title: "Todo Board App ",
    github: "https://github.com/shubhdhungana/todo-board-subham",
    live: "https://todo-board-subham.vercel.app/",
  },
  {
    title: "Stopwatch Web App React Js ",
    github: "https://github.com/shubhdhungana/stopwatch",
    live: "hthttps://stopwatch-subham.vercel.app",
  },
  {
    title: "Kathmandu Pizza Food Site",
    github: "https://kathmandu-pizza.vercel.app/",
    live: "https://github.com/shubhdhungana/kathmandu-pizza",
  },
  {
    title: "Nike Brand Page",
    github: "https://nike-brand-page-ecru.vercel.app/",
    live: "https://github.com/shubhdhungana/nike-brand-page",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black-100 text-gray-800">
      <div className="container mx-auto ">
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
