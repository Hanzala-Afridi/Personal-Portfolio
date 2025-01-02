import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center bg-black p-8">
            {/* About Me Section */}
            <div className="w-full max-w-4xl bg-black shadow-md rounded-lg p-8">
                {/* About Me Header */}
                <h1 className="text-3xl font-bold text-white mb-6 text-center relative">
                    About Me
                    <span className="block w-14 h-1 bg-blue-500 mx-auto mt-2"></span>
                </h1>
                </div>
      <section className="p-10 bg-gray-700 min-h-screen">
        <div className="max-w-4xl mx-auto bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center">
          {/* Left Side: Profile Picture */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="/images/portfolio.jpg" 
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover shadow-md"
            />
          </div>

          {/* Right Side: About Me Content */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-3xl font-bold mb-6 border-b pb-4">About Me</h1>
            <p className="text-white mb-4 leading-relaxed">
              <span className="text-blue-600 font-bold text-lg">
                I am Hanzala,
              </span>{" "}
              a Computer Engineering and Technology student at Sir Syed
              University of Engineering and Technology, Karachi. I specialize
              in web development and chatbot creation, with a passion for
              building innovative solutions using modern technologies.
            </p>
            <h2 className="text-xl font-semibold text-blue-500 mt-4 mb-2">
              Highlighted Achievements:
            </h2>
            <ul className="text-white space-y-2 list-disc pl-6">
              <li>Completing self-learning projects.</li>
              <li>Freelance experience in custom university projects.</li>
              <li>
                <strong>Education:</strong>
                <ul className="list-none pl-4">
                  <li>BS Computer Engineering Technology, Sir Syed University (Ongoing).</li>
                  <li>Generative AI and Chatbot, Saylani Mass IT Program (Ongoing).</li>
                  <li>Agentic AI, Governor IT Initiative (Ongoing).</li>
                  <li>Intermediate (Pre-Engineering), Nabi Bagh ZM College (2023).</li>
                  <li>Matriculation (Science), Javed Bahria Model School (2021).</li>
                </ul>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a
            href="https://www.linkedin.com/in/hanzala-afridi-0084502b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Hanzala-Afridi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-800"
              >
                <IoLogoGithub size={24} />
              </a>
              <a
                href="hanzalawork48@gmail.com"
                className="text-red-500 hover:text-red-700"
              >
                <FaRegEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
        
      </section>
      </div>
    
    </div>
  
  );
}