import React from "react";

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Weather App",
            description:
                "A Weather App showing live weather updates.",
            technologies: ["HTML", "CSS", "JS"],
            image: "/images/weather.webp", 
        },
        {
            title: "E-Commerce Website",
            description:
                "An online store plateform.",
            technologies: ["Node.JS", "Tailwind CSS"],
            image: "/images/e-commmer.webp",
        },
        {
            title: "Dictonary App",
            description:
                "A dictionary App fetching rea-Time Data.",
            technologies: ["Node.js", "Tailwind CSS"],
            image: "/images/dictionary.webp",
        },
        {
            title: "Mad Libs Game",
            description:
                "An interactive word game in python.",
            technologies: ["python"],
            image: "/images/Madlibs.jpg",
        },
        {
            title: "Python Website with streamlit",
            description:
                "Data File upload and analysis ",
            technologies: ["Python"],
            image: "/images/python website.png",
        },
        {
            title: "Password Generator",
            description:
                "Random Password Generator",
            technologies: ["Python"],
            image: "/images/password generator.jpg",
        },
        {
            title: "Streamlit BMI Calculator",
            description:
                "Weight and BMI calculation Tool.",
            technologies: ["Python"],
            image: "/images/Bmi calculator.png",
        },
        {
            title: "PhoneBook Management System",
            description:
                "Manage phonebook entries",
            technologies: ["C++"],
            image: "/images/phonebook.png",
        },
        {
            title: "Traffic Light indicator",
            description:
                "Electronic Circuit Project",
            technologies: ["Circuit Design"],
            image: "/images/traffic light2.png",
        },
        {
            title: "Water Indicator",
            description:
                "Applied physic Project.",
            technologies: ["Electronics"],
            image: "/images/water indicator.jpeg",
        },
    ];


    return (
        <div className="min-h-screen flex flex-col bg-black">
            <main className="flex-grow">
                <section className="max-w-6xl mx-auto py-8 px-4">
                    {/* My Projects Section */}
                    <h1 className="text-3xl font-bold text-center text-white mb-6">My Projects</h1>
                    <span className="block w-14 h-1 bg-blue-500 mx-auto mt-2"></span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 shadow-md rounded-lg overflow-hidden"
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                {/* Content */}
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">
                                        {project.title}
                                    </h2>
                                    <p className="text-white mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-100 text-blue-500 font-mono text-sm px-2 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Projects;