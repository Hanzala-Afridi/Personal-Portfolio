import React from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar = ({ skill, percentage }: SkillBarProps) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span>{skill}</span>
      <span>{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded">
      <div
        className="h-full bg-blue-500 rounded"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;