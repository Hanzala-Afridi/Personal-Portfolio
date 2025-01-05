import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  Icon: LucideIcon;
  label: string;
  value: string;
}

const ContactInfo = ({ Icon, label, value }: ContactInfoProps) => (
  <div className="flex items-center space-x-4">
    <Icon className="text-blue-500" size={24} />
    <div>
      <h4 className="font-semibold">{label}</h4>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
);

export default ContactInfo;