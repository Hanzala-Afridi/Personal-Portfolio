"useclient";
import React from "react";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import About from "./about/page";
import Skills from "./skills/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

const Home: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-6 md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              Hi, I'm Hanzala Afridi
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Project Creator
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md">
              A Passionate Web Developer and Generative AI Enthusiast, with
              expertise in project development for university students.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium rounded"
              >
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/hanzala-afridi-0084502b4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/Hanzala-Afridi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700"
              >
                <IoLogoGithub className="text-xl" />
              </a>
              <a
                href="hanzalawork48@gmail.com"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700"
              >
                <FaRegEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/images/portfolio.jpg"
                alt="Hanzala Afridi"
                className="rounded-full object-cover w-full h-full shadow-lg border-4 border-gray-600"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-semibold text-sm">Hi!</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;