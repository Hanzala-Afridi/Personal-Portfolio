import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-white text-xl font-semibold">Portfolio</h2>
            <p className="mt-4 text-sm">
              Creating beautiful and functional web experiences with modern technologies.
            </p>
          </div>

          {/* Middle Section */}
          <div>
            <h2 className="text-white text-xl font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
              <a href="/skills" className="hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-white text-xl font-semibold">Connect</h2>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Hanzala-Afridi"
                className="text-gray-300 hover:text-white text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hanzala-afridi-0084502b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-300 hover:text-white text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="hanzalawork48@gmail.com"
                className="text-gray-300 hover:text-white text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © 2024 Hanzala Afridi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}