import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Skills: React.FC = () => {
    const skills = [
        { name: "HTML/CSS", percentage: "90%" },
        { name: "React", percentage: "80%" },
        { name: "React.js", percentage: "70%" },
        { name: "JavaScript", percentage: "90%" },
        { name: "Node.js", percentage: "80%" },
        { name: "Express.js", percentage: "70%" },
        { name: "MongoDB", percentage: "95%" },
        { name: "Python", percentage: "100%" },
        { name: "C,C++", percentage: "85%" },
        { name: "MERN Stack Development", percentage: "70%" },
        { name: "Chatbot devlopment", percentage: "100%" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <main className="flex-grow">
                <section className="max-w-6xl mx-auto py-8 px-4">
                    {/* My Skills Section */}
                    <h1 className="text-3xl font-bold text-white text-center mb-6">
                        Technical Skills
                        <span className="block w-14 h-1 bg-blue-500 mx-auto mt-2"></span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <p className="text-lg font-medium text">{skill.name}</p>
                                <div className="w-full bg-gray-300 rounded-full h-3">
                                    <div
                                        className="bg-blue-500 h-3 rounded-full"
                                        style={{ width: skill.percentage }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* My Services Section */}
                <section className="max-w-6xl mx-auto py-8 px-4">
    <section className="flex flex-col items-center justify-center py-12 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
        Soft Skills
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <li className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
          <span className="text-2xl">💬</span>
          <span className="text-lg">Communication</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
          <span className="text-2xl">🎤</span>
          <span className="text-lg">Public Speaking</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
          <span className="text-2xl">🧩</span>
          <span className="text-lg">Problem Solving</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
          <span className="text-2xl">🤝</span>
          <span className="text-lg">Team Collaboration</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
          <span className="text-2xl">⏰</span>
          <span className="text-lg">Time Management</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
          <span className="text-2xl">🌟</span>
          <span className="text-lg">Leadership</span>
        </li>
      </ul>
    </section>
                </section>
            </main>
        </div>
    );
};

export default Skills;