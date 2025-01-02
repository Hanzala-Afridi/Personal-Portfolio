import React, { useEffect } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


const Contact: React.FC = () => {   
    return (

        <div className="min-h-screen flex flex-col bg-black">
            <main className="flex-grow">
                <section className="max-w-6xl mx-auto py-8 px-4">
                    <h1 className="text-3xl  text-white font-semibold text-center mb-6">Contact Me</h1>
                    <span className="block w-14 h-1 bg-blue-500 mx-auto mt-2"></span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Section: Get in Touch */}
                        <div>
                            <h2 className="text-2xl text-white font-semibold mb-4"> Get in Touch</h2>
                            <ul className="space-y-4 text-white">
                                <li>
                                    <span className="font-medium">Email:</span>{" "}
                                    {/* Email */}
                                 <a
                                 href="hanzalawork48@gmail.com"
                                 className="flex items-center space-x-3 px-4 py-4 text-lg md:text-xl"
                                 >
                                 <FaRegEnvelope className="text-2xl text-white" />
                                 </a>
                                 </li>
                                 <li>
                                    <span className="font-medium">Phone:</span>{" "}
                                    {/* Phone*/}
                                 <a
                                 href="03172489106"
                                 className="flex items-center space-x-3 px-4 py-4 text-lg md:text-xl"
                                 >
                                 <FaPhoneAlt className="text-2xl text-white" />
                                 </a>
                                 </li>
                                 

                                 
                                 <li>
                                 <span className="font-medium">LinkedIn:</span>{" "}

                                 {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hanzala-afridi-0084502b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className='flex items-center space-x-3 px-4 py-3'
          >
          <FaLinkedin  className="text-2xl text-white" />
          </a>
          </li>
          <li>
          <span className="font-medium">GitHub:</span>{" "}
          {/* GitHub */}
          <a
            href="https://github.com/Hanzala-Afridi"
            className="flex items-center space-x-3 px-4 py-4 text-lg md:text-xl "
          >
            <IoLogoGithub className="text-2xl text-white" />
          </a>
          </li>
          </ul>
          
                                  
                                  </div>

                                   {/* Right Section: Contact Form */}
                                  <div>
                                 <form className="bg-gray-700 shadow-md rounded-lg p-6 space-y-4">
                                 <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;