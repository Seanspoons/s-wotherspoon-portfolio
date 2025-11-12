export default function Footer() {
  return (
    <footer className="text-center text-xs text-slate-400 py-8">
        © 2025 Sean Wotherspoon • Built with React + Tailwind
        <span className="hidden sm:inline"> • </span>
        <a
            href="mailto:seangwotherspoon3@gmail.com"
            className="text-accent hover:text-accent/80"
        >
            Contact
        </a>
    </footer>
  );
}