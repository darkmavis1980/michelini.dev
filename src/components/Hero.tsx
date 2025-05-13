import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

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
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/alessiomichelini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/alessiomicheliniphotography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;