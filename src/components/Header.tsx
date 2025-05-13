import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-teal-500">
          Michelini<span className="text-blue-500">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-gray-700 hover:text-blue-500 transition-colors">
            About
          </a>
          <a href="#blog" className="text-gray-700 hover:text-blue-500 transition-colors">
            Blog
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors">
            Contact
          </a>
          <Button asChild variant="outline" className="hover:bg-teal-500 hover:text-white border-teal-400 text-teal-600">
            <a href="https://alessiomichelini.com" target="_blank" rel="noopener noreferrer">
              Photography
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden py-4 animate-fade-in">
            <div className="container flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#blog" 
                className="text-gray-700 hover:text-blue-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button asChild variant="outline" className="hover:bg-teal-500 hover:text-white border-teal-400 text-teal-600 w-full">
                <a href="https://alessiomichelini.com" target="_blank" rel="noopener noreferrer">
                  Photography
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;