import Head from 'next/head';
import Image from 'next/image';

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
    <main className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl text-teal-400 font-bold">📸 Photos Page</h1>
      <p className="mt-4">Your photo gallery will appear here.</p>
    </main>
  );
}
