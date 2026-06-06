import React from "react";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-linear-to-r from-blue-900 to-teal-800 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#top" className="text-2xl font-bold">
              Michelini<span className="text-blue-300">.</span>dev
            </a>
            <p className="mt-2 text-blue-200 max-w-md">
              Software developer, technical writer, and photography enthusiast with over 20 years of industry experience.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/darkmavis1980"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-300 transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/alessiomichelini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/alessiomicheliniphotography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-300 transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 mb-4 md:mb-0">
            &copy; {currentYear} Alessio Michelini. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-blue-300 hover:text-blue-100 transition-colors">
              About
            </a>
            <a href="#blog" className="text-blue-300 hover:text-blue-100 transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-blue-300 hover:text-blue-100 transition-colors">
              Contact
            </a>
            <a 
              href="https://alessiomichelini.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              Photography
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
