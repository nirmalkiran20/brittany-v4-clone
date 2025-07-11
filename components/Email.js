'use client';

export default function Email() {
  return (
    <div className="fixed bottom-0 right-8 hidden lg:flex flex-col items-center z-40">
      <a
        href="mailto:nirmalkiran20@gmail.com"
        className="text-slate-400 hover:text-teal-400 transition text-sm tracking-wide [writing-mode:vertical-rl] mb-4"
      >
        nirmalkiran20@gmail.com
      </a>
      <div className="w-px h-24 bg-slate-600"></div>
    </div>
  );
}
