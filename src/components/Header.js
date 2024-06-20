// src/components/Header.js
"use client";
import React from 'react';

const Header = () => {
  return (
    <header className="bg-red-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shubham Dhungana</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
            <li><a href="#certifications" className="hover:underline">Certifications</a></li>
            <li><a href="#education" className="hover:underline">Education</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
