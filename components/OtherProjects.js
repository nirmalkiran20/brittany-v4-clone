'use client';

import { FiGithub, FiExternalLink } from 'react-icons/fi';

const otherProjects = [
  {
    title: 'Modular Kitchen SEO Audit',
    description: 'A full audit of a modular kitchen brand covering on-page, technical SEO, schema, and content recommendations.',
    tech: ['GA4', 'GSC', 'Screaming Frog'],
    github: '',
    external: '',
  },
  {
    title: 'Google Tag Manager Setup',
    description: 'Custom GTM container to track CTA clicks, YouTube events, form submissions and eCommerce funnel events.',
    tech: ['GTM', 'GA4', 'JS'],
    github: '',
    external: '',
  },
  {
    title: 'Blog Topic Generator',
    description: 'React + Flask tool that uses Gemini API to auto-generate blog topics, titles and meta tags.',
    tech: ['React', 'Flask', 'Gemini'],
    github: '',
    external: '',
  },
  // Add more as needed
];

export default function OtherProjects() {
  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-40 py-24 bg-[#0a192f] text-white">
      <h2 className="text-teal-400 text-lg font-mono mb-2">04. Other Projects</h2>
      <h3 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-10">Some Other Things I've Built</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, i) => (
          <div key={i} className="bg-[#112240] border border-slate-700 rounded-md p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform group">
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-slate-200 group-hover:text-teal-400 transition">{project.title}</h4>
              <p className="text-sm text-slate-400 mt-2">{project.description}</p>
            </div>
            <div>
              <ul className="flex flex-wrap gap-2 text-xs text-teal-400 font-mono mb-4">
                {project.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
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
          </div>
        ))}
      </div>
    </section>
  );
}
