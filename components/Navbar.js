'use client';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-[#0a192f]/70 shadow-sm">
      <nav className="flex items-center justify-between px-6 sm:px-12 md:px-20 lg:px-32 h-20 text-white text-sm font-mono">
        {/* Logo */}
        <div className="text-teal-400 font-bold text-xl">K</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8">
          {[
            { num: '01.', label: 'About', href: '#about' },
            { num: '02.', label: 'Experience', href: '#experience' },
            { num: '03.', label: 'Work', href: '#projects' },
            { num: '04.', label: 'Contact', href: '#contact' },
          ].map(({ num, label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-slate-400 hover:text-teal-400 transition"
              >
                <span className="text-teal-400 mr-1">{num}</span> {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/Kiran_Resume.pdf" // update with your resume file
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-black transition hidden md:inline-block"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
