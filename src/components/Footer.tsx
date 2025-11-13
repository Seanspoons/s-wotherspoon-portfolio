export default function Footer() {
  return (
    <footer className="text-center text-xs text-slate-400 py-8">
      © {new Date().getFullYear()} Sean Wotherspoon • Built with React + Tailwind
    </footer>
  );
}