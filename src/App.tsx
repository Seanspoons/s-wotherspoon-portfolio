import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";
import Notes from "./components/Notes";
import Now from "./components/Now";

function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-900 dark:bg-[#050816] dark:text-slate-100">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
        <Hero />
        <About />
        <Now />
        <TechStack />
        <Projects />
        <Notes />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;