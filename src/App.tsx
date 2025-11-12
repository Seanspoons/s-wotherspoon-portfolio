import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Sean Wotherspoon
      </footer>
    </div>
  );
}

export default App;