import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import NotePage from "./components/NotePage";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;

    if (state?.scrollTo === "notes") {
      // wait one frame so Notes has rendered
      requestAnimationFrame(() => {
        const el = document.getElementById("notes");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        // clear the state so it doesn't re-trigger on back/refresh
        navigate(".", { replace: true, state: null });
      });
    }
  }, [location, navigate]);
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      <Hero />
      <About />
      <Now />
      <Projects />
      <Experience />
      <TechStack />
      <Education />
      <Certifications />
      <Notes />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:slug" element={<NotePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;