// components/Navbar.js
'use client';

import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a192f]/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center">
        {/* ← Home / logo (clickable) */}
        <Link
          href="/"
          className="mr-auto flex items-center gap-2 text-white hover:text-teal-400 transition"
        >
          <FiHome size={20} />
          <span className="font-bold text-lg hidden sm:inline">
            Home
          </span>
        </Link>

        {/* → Nav links (right‑aligned) */}
        <ul className="ml-auto flex space-x-6 text-sm text-slate-400 font-medium">
          <li>
            <Link href="#about" className="hover:text-teal-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-teal-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/photos" className="hover:text-teal-400 transition">
              Photos
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-teal-400 transition">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
