export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 text-center text-sm text-slate-500 border-t border-slate-700 bg-[#0a192f]">
      <p>
        © {currentYear} Kiran Nirmal. All rights reserved. Inspired by Brittany Chiang.
      </p>
    </footer>
  );
}
