import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
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
              <a href="https://www.linkedin.com/in/hanzala-afridi-0084502b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-2 hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Hanzala-Afridi" className="p-2 hover:text-gray-400">
                <Github size={24} />
              </a>
              <a href="hanzalaafridi48@gmail.com" className="p-2 hover:text-red-400">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src={profileImage}
                alt="Hanzala Afridi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-purple-500 rounded-full p-4">
              <span className="text-xl">Hi!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;