import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SoftSkillProps {
  Icon: LucideIcon;
  text: string;
}

const SoftSkill = ({ Icon, text }: SoftSkillProps) => (
  <div className="bg-[#1a1f2e] p-4 rounded-lg flex items-center gap-3">
    <Icon className="text-purple-500" />
    <span>{text}</span>
  </div>
);

export default SoftSkill;