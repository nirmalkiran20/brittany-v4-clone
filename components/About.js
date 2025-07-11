'use client';

import Image from 'next/image';

const skills = [
  'SEO (On-page, Off-page, Technical)',
  'Google Analytics 4 (GA4)',
  'Google Search Console',
  'ASO (App Store Optimization)',
  'Content Strategy',
  'HTML, CSS, WordPress',
];

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-12 md:px-24 lg:px-40 py-24 bg-[#0a192f] text-white">
      <h2 className="text-teal-400 text-lg font-mono mb-2">01. About Me</h2>
      <h3 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-10">Who I Am</h3>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="text-slate-400 space-y-4 text-base leading-relaxed">
          <p>
            Hello! I’m <span className="text-teal-400 font-semibold">Kiran Nirmal</span>, a digital marketing specialist with over 9 years of experience helping businesses grow organically through SEO, ASO, and analytics.
          </p>
          <p>
            I’ve worked with SaaS, B2B, BFSI, and startup brands to plan content strategies, fix technical issues, and scale website visibility.
          </p>
          <p>
            My passion lies in building structured marketing systems and teaching data-led decision making through clear dashboards.
          </p>

          <div>
            <p className="mt-6 font-mono text-sm text-teal-400">Here are a few tools & technologies I work with:</p>
            <ul className="grid grid-cols-2 list-disc list-inside text-sm gap-1 text-slate-300 mt-2">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="w-60 h-60 rounded-lg overflow-hidden border-2 border-teal-400 hover:scale-105 transition-transform shadow-lg">
            <Image
              src="/images/me.jpg" // make sure this file exists in /public/images/
              alt="Kiran Nirmal"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
