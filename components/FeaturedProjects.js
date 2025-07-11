'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Halcyon Theme',
    image: '/images/projects/projects1.png', // Ensure this path is correct for your image
    description:
      'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    github: 'https://github.com/your-github-link', // Replace with actual links
    external: 'https://www.google.com', // Replace with actual links
  },
  {
    title: 'AI Article & Meta Generator',
    image: '/images/projects/projects2.png',
    description:
      'A tool that generates blog titles, meta descriptions, and keywords using OpenAI and Gemini APIs.',
    tech: ['React', 'Flask', 'Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/nirmalkiran20/article-topic-generator-openai',
    external: 'https://nirmalkiran20.github.io/article-topic-generator-openai',
  },
  {
    title: 'GTM Events Tracker',
    image: '/images/projects/projects3.png', // Assuming you have another image
    description:
      'Custom GTM container to track YouTube events, click funnels, and lead form performance.',
    tech: ['GTM', 'GA4', 'JS'],
    github: '',
    external: '',
  },
];

export default function FeaturedProjects() {
  const [visible] = useState(projects.length);

  return (
    <section id="projects" className="px-6 sm:px-12 md:px-24 lg:px-40 py-24 bg-[#0a192f] text-white">
      <h2 className="text-teal-400 text-lg font-mono mb-2">03. Some Things I’ve Built</h2>
      <h3 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-10">Featured Projects</h3>

      <div className="flex flex-col gap-24">
        {projects.slice(0, visible).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}                         
  	   className={`
    group relative flex flex-col
    md:flex-row
    ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}
    items-center
  `}
>
            {/* Project Image Container */}
            {/* This container defines the space for the image within the flex row */}
            <div className="md:w-3/5 w-full relative z-0 rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={400}
                className="rounded-md border border-slate-700 shadow-lg w-full h-full object-cover" // Ensure image fills its container
              />
              {/* Blur and Tint Overlay - this is what we control with hover */}
              <div
                className={`
                  absolute inset-0 rounded-md
                  bg-teal-400/20
                  backdrop-blur-sm
                  group-hover:opacity-0
                  transition-opacity duration-500 ease-in-out
                `}
              ></div>
            </div>

            {/* Text Overlay Card */}
            {/* This is the absolutely positioned text box that overlaps */}
            <div
              className={`
                md:w-2/5 w-full // Occupy 40% width on medium screens, full on small
                md:absolute bg-[#112240] border border-slate-700 shadow-lg p-6 rounded-md z-10 // Absolute position and styling
                // Positioning for even/odd projects
                ${index % 2 === 0 ? 'md:right-0 md:-translate-x-1/4' : 'md:left-0 md:translate-x-1/4'}
                md:top-1/2 md:-translate-y-1/2 // Vertical centering
              `}
            >
              <h4 className="text-teal-400 font-mono text-sm mb-1">Featured Project</h4>
              <h3 className="text-2xl font-bold text-slate-200 mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{project.description}</p>

              <ul className="flex flex-wrap gap-3 text-xs text-teal-400 font-mono mb-4">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <div className="flex gap-4 text-slate-400">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                    <FiGithub size={18} />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}