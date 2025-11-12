import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <section className="text-center text-xs text-slate-500 py-6 px-4">
        Currently creating Spark / Airflow pipelines at Samsung R&D and building Mealpository v2.  
        Main stack: Spark • Airflow • React • Angular • Django • Supabase • AWS.
      </section>
      <Footer />
    </div>
  );
}

export default App;