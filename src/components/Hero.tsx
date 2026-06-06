import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex items-center pt-24 pb-16 bg-linear-to-br from-blue-50 via-white to-teal-50">
      <div className="container">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hey, I'm <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-teal-500">Alessio</span>
            <span className="block mt-3">Developer & Tech Enthusiast</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          With over 20 years of experience in the software development industry as a full stack developer, I specialize in creating high-quality, user-friendly applications. My comprehensive background spans both front-end and back-end technologies, allowing me to deliver complete solutions. I'm passionate about sharing knowledge through my blog and exploring the world through my photography.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
              <a href="#blog">
                Read My Blog <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-teal-400 text-teal-600 hover:bg-teal-500 hover:text-white">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/darkmavis1980"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <SiGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/alessiomichelini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/alessiomicheliniphotography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              <SiInstagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;