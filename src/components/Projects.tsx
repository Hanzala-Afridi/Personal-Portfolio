import React from 'react';
import { Cloud, ShoppingBag, Book, GamepadIcon, Code2, Lock, Calculator, Activity, Droplet } from 'lucide-react';

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  icon: any;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-[#1a1f2e] rounded-lg overflow-hidden transition-transform hover:scale-105">
    <div className="relative h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-blue-500 p-2 rounded-full">
        <project.icon size={24} className="text-white" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-500 bg-opacity-20 text-blue-400 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects: Project[] = [
    {
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Weather App',
      description: 'A Weather App showing live weather updates.',
      tags: ['React', 'API', 'Weather'],
      icon: Cloud
    },
    {
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'E-Commerce Website',
      description: 'An online store platform.',
      tags: ['MERN', 'E-commerce', 'Web'],
      icon: ShoppingBag
    },
    {
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Dictionary App',
      description: 'A dictionary App fetches real-Time Data.',
      tags: ['React', 'Dictionary', 'API'],
      icon: Book
    },
    {
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Mad Libs Game',
      description: 'An interactive word game in python.',
      tags: ['Python', 'Game'],
      icon: GamepadIcon
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Python Website with streamlit',
      description: 'Data File upload and analysis',
      tags: ['Python', 'Streamlit', 'Data'],
      icon: Code2
    },
    {
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Password Generator',
      description: 'Random Password Generator',
      tags: ['Python', 'Security'],
      icon: Lock
    },
    {
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Streamlit BMI Calculator',
      description: 'Weight and BMI calculation Tool',
      tags: ['Python', 'Streamlit', 'Health'],
      icon: Calculator
    },
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Traffic Light Indicator',
      description: 'Electronic Circuit Project',
      tags: ['Electronics', 'Circuit'],
      icon: Activity
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Water Indicator',
      description: 'Applied physics Project.',
      tags: ['Physics', 'Electronics'],
      icon: Droplet
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          My Projects
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;