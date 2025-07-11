import { motion } from 'framer-motion';

import FadeInWhenVisible from './FadeInWhenVisible';

const projects = [
  {
    title: 'SEO Analytics Dashboard',
    description: 'A custom-built dashboard using GA4 and Looker Studio to visualize organic performance, page-level insights, and goal tracking.',
    tech: ['GA4', 'Looker Studio', 'Google Sheets'],
    link: '#',
  },
  {
    title: 'AI Topic Generator',
    description: 'A tool that generates blog titles, meta descriptions, and keyword tags using OpenAI and Gemini APIs with a React + Flask stack.',
    tech: ['React', 'Flask', 'OpenAI API', 'Tailwind'],
    link: '#',
  },
  {
    title: 'App Store Optimization Audit',
    description: 'End-to-end ASO strategy for finance apps — including keyword mapping, creatives testing, and store conversion improvements.',
    tech: ['ASO', 'Firebase', 'Google Play Console'],
    link: '#',
  }
];

export default function Projects() {
  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-40 py-24 bg-[#0a192f] text-white">
	<FadeInWhenVisible>
      <h2 className="text-3xl font-bold text-teal-400 mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className="border border-gray-800 p-6 rounded-lg hover:shadow-lg hover:border-teal-400 transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-3">{project.description}</p>
      <ul className="flex flex-wrap gap-2 text-sm text-teal-400 mb-4">
        {project.tech.map((item, i) => (
          <li key={i} className="bg-teal-900/30 px-2 py-1 rounded">{item}</li>
        ))}
      </ul>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 text-sm underline hover:text-teal-300"
        >
          View Project →
        </a>
      )}
    </motion.div>
  ))}
</div>
	</FadeInWhenVisible>
    </section>
  );
}
