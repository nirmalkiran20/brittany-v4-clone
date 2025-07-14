import Email from '../components/Email';
import Socials from '../components/Socials';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Socials />
      <Email />
      <main className="bg-[#0a192f] text-white">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
