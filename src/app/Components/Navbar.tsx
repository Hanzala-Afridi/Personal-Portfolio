import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 ">
      <div className="container mx-auto flex items-center justify-between p-4">
      <h1 className="text-xl font-bold text-white">Welcome to my Portfolio</h1>
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-gray-400">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-400">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}