export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-primary/5 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl2 bg-accent/10 text-primary grid place-items-center text-sm font-semibold">
            SW
          </div>
          <span className="text-sm text-primary/90">Sean Wotherspoon</span>
        </div>
        <nav className="hidden gap-6 text-sm text-primary/70 md:flex">
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#experience" className="hover:text-primary">Experience</a>
          <a href="#education" className="hover:text-primary">Education</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}