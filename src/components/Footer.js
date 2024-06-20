// src/components/Footer.js
"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Shubham Dhungana. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/shubhdhungana/" className="hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/shubhdhungana/" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://shubhdhungana.medium.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Medium</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
