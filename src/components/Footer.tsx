export default function Footer() {
  return (
    <footer className="text-center text-xs text-slate-400 py-8">
      © {new Date().getFullYear()} Sean Wotherspoon • Built with React + Tailwind
      <span className="hidden sm:inline"> • </span>
      <span className="block sm:inline mt-1 sm:mt-0">Made in Metro Vancouver, Canada 🇨🇦</span>
    </footer>
  );
}