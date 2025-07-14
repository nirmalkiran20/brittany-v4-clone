import Head from 'next/head';
import Image from 'next/image';

import Navbar  from '../components/Navbar';
import Socials from '../components/Socials';
import Email   from '../components/Email';
import Footer  from '../components/Footer';

const photos = [
  '/images/photos/photo1.png',
  '/images/photos/photo2.png',
  '/images/photos/photo3.png',
  '/images/photos/photo4.png',
  '/images/photos/photo5.png',
  '/images/photos/photo6.png',
];

export default function Photos() {
  return (
    <>
      <Head>
        <title>Photos</title>
        <meta name="description" content="Captured moments by Kiran Nirmal" />
      </Head>

      {/* shared chrome */}
      <Navbar />
      <Socials />
      <Email />

      <main className="bg-[#0a192f] min-h-screen px-6 sm:px-12 md:px-24 lg:px-40 py-24 text-white">
        <h1 className="text-teal-400 text-lg font-mono mb-2">Photos</h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-10">
          Captured Moments
        </h2>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-md border border-slate-700
                         hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                width={800}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}