import React from 'react';
import ServiceCard from './ui/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          My Services
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;