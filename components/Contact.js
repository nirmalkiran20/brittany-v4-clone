import { Github, Linkedin } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 lg:px-40 bg-[#0a192f] text-white text-center">
	<FadeInWhenVisible>
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Get in Touch</h2>

      <p className="text-gray-300 max-w-xl mx-auto mb-8">
        Whether you have a question, want to collaborate, or just want to say hello — my inbox is always open. I'll do my best to get back to you!
      </p>

      {/* Email Button */}
      <a
        href="mailto:nirmalkiran20@gmail.com"
        className="inline-block bg-transparent border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400 hover:text-black transition font-medium mb-6"
      >
        Say Hello
      </a>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center gap-6 text-teal-400">
        <a
          href="https://github.com/nirmalkiran20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/kiran-nirmal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Linkedin size={28} />
        </a>
      </div>
	</FadeInWhenVisible>
    </section>
  );
}
