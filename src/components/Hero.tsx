import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Text Section */}
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Hi, I'm Hanzala Afridi
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              <span className="text-green-400">Project</span>{' '}
              <span className="text-blue-400">Creator</span>
            </h2>
            <p className="text-gray-300 mb-8">
              A Passionate Web Developer and Generative AI Enthusiast, with expertise in project development for university students.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md">
                Contact Me
              </button>
              <a
                href="https://www.linkedin.com/in/hanzala-afridi-0084502b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="p-2 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Hanzala-Afridi"
                className="p-2 hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:hanzalaafridi48@gmail.com"
                className="p-2 hover:text-red-400"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0">
            <div className="rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src={profileImage}
                alt="Hanzala Afridi"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
