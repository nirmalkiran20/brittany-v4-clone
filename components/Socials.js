'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/nirmalkiran20',
  },
  {
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/kiran-nirmal',
  },
  {
    icon: <FaTwitter />,
    url: 'https://twitter.com/yourhandle', // Replace or remove
  },
  {
    icon: <FaInstagram />,
    url: 'https://instagram.com/yourhandle', // Replace or remove
  },
];

export default function Socials() {
  return (
    <div className="fixed bottom-0 left-8 hidden lg:flex flex-col items-center space-y-4 z-40">
      {socials.map(({ icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-teal-400 transition text-xl"
        >
          {icon}
        </a>
      ))}
      <div className="w-px h-24 bg-slate-600 mt-4"></div>
    </div>
  );
}
