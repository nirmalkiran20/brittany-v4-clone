'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
  id="hero"
  className="min-h-screen flex flex-col justify-center items-start px-6 sm:px-12 md:px-24 lg:px-40 pb-10 bg-[#0a192f] text-white"
>
    <motion.p
        className="text-teal-400 mb-4 text-sm sm:text-base"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold text-slate-200 mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Kiran Nirmal.
      </motion.h1>

      <motion.h2
        className="text-3xl sm:text-5xl font-bold text-slate-400 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I grow businesses organically.
      </motion.h2>

      <motion.p
        className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        I’m a digital marketer specializing in SEO, ASO, and analytics. Currently focused on building data-driven growth strategies that scale traffic and revenue.
      </motion.p>

     <motion.a
  href="mailto:nirmalkiran20@gmail.com"
  className="mt-10 px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-black transition font-mono text-sm transform hover:-translate-y-1 hover:shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Get In Touch
      </motion.a>
    </section>
  );
}
