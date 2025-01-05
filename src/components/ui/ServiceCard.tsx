import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ Icon, title, description }: ServiceCardProps) => (
  <div className="bg-[#1a1f2e] p-6 rounded-lg transition-transform hover:scale-105">
    <div className="flex flex-col items-center text-center">
      <Icon size={48} className="mb-4 text-blue-500" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default ServiceCard;