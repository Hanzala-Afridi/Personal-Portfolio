import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-[#1a1f2e] text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">Welcome to my Portfolio</div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400">Skills</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-400">Services</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400">Contact</button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-blue-400">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-blue-400">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 hover:text-blue-400">Skills</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-blue-400">Services</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-blue-400">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-blue-400">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;