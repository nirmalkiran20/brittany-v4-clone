'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const jobs = [
  {
    company: 'NEXA',
    logo: '/images/nexa.png',
    title: 'SEO - Specialist',
    duration: 'Feb 2025 – Present',
    description: [
      'Managed SEO campaigns for SaaS and service clients.',
      'Performed content audits, GSC improvements, and backlink analysis.',
    ],
  },
  {
    company: 'ARM Worldwide',
    logo: '/images/arm.png',
    title: 'Assistant Manager - SEO',
    duration: 'Oct 2024 – Jan 2025',
    description: [
      'Led SEO and ASO strategy for B2B and BFSI clients.',
      'Managed team operations, reporting, and GA4 implementation.',
    ],
  },
  {
    company: 'LPC Advisors',
    logo: '/images/lpc.png',
    title: 'Assistant Manager - Digital Marketing',
    duration: 'Jan 2024 – Sep 2024',
    description: [
      'Oversaw team of 10 professionals executing digital initiatives.',
      'Developed weekly/monthly content calendars for blog & social.',
    ],
  },
  {
    company: 'LPC Advisors',
    logo: '/images/lpc.png',
    title: 'SEO Team Lead',
    duration: 'Jan 2022 – Dec 2023',
    description: [
      'Led SEO team and implemented process improvements.',
      'Delivered reports to stakeholders and optimized CMS workflows.',
    ],
  },
  {
    company: 'LPC Advisors',
    logo: '/images/lpc.png',
    title: 'Digital Marketing Executive',
    duration: 'Aug 2019 – Dec 2021',
    description: [
      'Contributed to content strategy and keyword mapping.',
      'Worked closely with developers to improve site structure.',
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

return (
  <section id="experience" className="px-6 sm:px-12 md:px-24 lg:px-40 py-24 bg-[#0a192f] text-white">
    <h2 className="text-teal-400 text-lg font-mono mb-2">02. Experience</h2>
    <h3 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-10">Where I've Worked</h3>

    <div className="flex flex-col md:flex-row gap-8">
      {/* Tabs with logos */}
      <div className="flex md:flex-col gap-2 font-mono text-sm text-slate-400">
        {jobs.map((job, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 flex items-center gap-2 border-l-2 transition-all ${
              activeTab === index
                ? 'border-teal-400 text-teal-400 bg-[#112240]'
                : 'border-slate-700 hover:bg-[#112240]'
            }`}
          >
            <Image src={job.logo} alt={job.company} width={20} height={20} />
            {job.company}
          </button>
        ))}
      </div>

      {/* Animated job panel */}
      <div className="flex-1 min-h-[180px] text-slate-300 font-light">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-slate-200">
              {jobs[activeTab].title}{' '}
              <span className="text-teal-400">@ {jobs[activeTab].company}</span>
            </h4>
            <p className="text-sm text-slate-400">{jobs[activeTab].duration}</p>
            <ul className="list-disc list-inside space-y-2">
              {jobs[activeTab].description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
);

}
