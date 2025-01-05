import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    description: string;
    tags: string[];
    icon: LucideIcon;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => (
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

export default ProjectCard;