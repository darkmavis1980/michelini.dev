import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-12">
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
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/alessiomichelini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/alessiomicheliniphotography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
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
