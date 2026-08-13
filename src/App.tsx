import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import TechnicalSkills from "./components/TechnicalSkills";
import TechnicalWriting from "./components/TechnicalWriting";
import NotePage from "./components/ArticlePage";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;

    if (state?.scrollTo === "articles") {
      // wait one frame so Articles has rendered
      requestAnimationFrame(() => {
        const el = document.getElementById("articles");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        // clear the state so it doesn't re-trigger on back/refresh
        navigate(".", { replace: true, state: null });
      });
    }
  }, [location, navigate]);
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      <Hero />
      <Experience />
      <Projects />
      <TechnicalWriting />
      <TechnicalSkills />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-surface text-slate-900">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:slug" element={<NotePage />} />
        </Routes>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
