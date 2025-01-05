import React from 'react';
import { MessageSquare, Users, Brain, Clock, Star, Mic } from 'lucide-react';
import SkillBar from './ui/SkillBar';
import SoftSkill from './ui/SoftSkill';
import { technicalSkills } from '../data/skills';

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Skills
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {technicalSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>

          <div className="bg-[#141824] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-purple-500">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SoftSkill Icon={MessageSquare} text="Communication" />
              <SoftSkill Icon={Mic} text="Public Speaking" />
              <SoftSkill Icon={Brain} text="Problem Solving" />
              <SoftSkill Icon={Users} text="Team Collaboration" />
              <SoftSkill Icon={Clock} text="Time Management" />
              <SoftSkill Icon={Star} text="Leadership" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;