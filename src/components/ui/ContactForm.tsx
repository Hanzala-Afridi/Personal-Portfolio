import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1a1f2e] p-8 rounded-lg">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white text-gray-800"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-white text-gray-800"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={6}
          className="w-full p-3 rounded bg-white text-gray-800"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;