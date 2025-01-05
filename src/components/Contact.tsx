import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import ContactForm from './ui/ContactForm';
import ContactInfo from './ui/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact Me
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <ContactInfo Icon={Mail} label="Email:" value="hanzalaafridi48@gmail.com.com" />
              <ContactInfo Icon={Phone} label="Phone:" value="+923172489106" />
              <ContactInfo Icon={Linkedin} label="LinkedIn:" value="https://shorturl.at/dcPka" />
              <ContactInfo Icon={Github} label="GitHub:" value="https://github.com/Hanzala-Afridi" />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;