import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-end items-center">
        {/* Logo/Name */}
        <Link href="/" className="mr-auto text-white text-lg font-bold hover:text-teal-400 transition">
          Kiran Nirmal
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm text-gray-400 font-medium">
          <li>
            <Link href="#about" className="hover:text-teal-400 transition">About</Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-teal-400 transition">Projects</Link>
          </li>
	   <li>
            <Link href="/photos" className="hover:text-teal-400 transition">
Photos</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-teal-400 transition">Contact</Link>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
