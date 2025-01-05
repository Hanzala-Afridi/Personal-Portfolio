import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          About Me
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
        </h2>
        
        <div className="bg-[#1a1f2e] rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Hanzala Afridi"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <p className="mb-6">
                <span className="text-blue-400">I am Hanzala</span>, a Computer Engineering and Technology 
                student at Sir Syed University of Engineering and Technology, Karachi. I specialize in web development and 
                chatbot creation, with a passion for building innovative solutions using modern technologies.
              </p>
              
              <div className="mb-6">
                <h3 className="text-blue-400 text-xl mb-4">Highlighted Achievements:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Completing self-learning projects.</li>
                  <li>Freelance experience in custom university projects.</li>
                  <li className="mb-4">Education:
                    <ul className="list-none ml-6 mt-2 space-y-2 text-gray-300">
                      <li>BS Computer Engineering Technology, Sir Syed University (Ongoing).</li>
                      <li>Generative AI and Chatbot, Saylani Mass IT Program (Ongoing).</li>
                      <li>Agentic AI, Governor IT Initiative (Ongoing).</li>
                      <li>Intermediate (Pre-Engineering), Nabi Bagh ZM College (2023).</li>
                      <li>Matriculation (Science), Javed Bahria Model School (2021).</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.linkedin.com/in/hanzala-afridi-0084502b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-blue-400">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Hanzala-Afridi" className="text-gray-400 hover:text-white">
                  <Github size={24} />
                </a>
                <a href="hanzalaafridi48@gmail.com" className="text-gray-400 hover:text-red-400">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;