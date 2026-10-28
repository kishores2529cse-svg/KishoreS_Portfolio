import React, { useEffect, useState } from 'react';
import HeroVideoScroll from './components/HeroVideoScroll';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import { initSmoothScroll } from './utils/smoothScroll';

function PortfolioContent() {
  const [showFloatingToggle, setShowFloatingToggle] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll & sync with GSAP
    const cleanup = initSmoothScroll();

    // Show floating toggle only after scrolling past hero video
    const handleScroll = () => {
      setShowFloatingToggle(window.scrollY > window.innerHeight * 1.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cleanup?.();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-heading)] flex flex-col font-sans transition-colors duration-350 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Floating Day/Night Luxury Toggle (Available when browsing deep content) */}
      <div
        className={`fixed top-6 right-6 z-50 transition-all duration-500 ${
          showFloatingToggle
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
      >
        <ThemeToggle />
      </div>

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Ultra-Clean 80fps+ Hero Video Scrubbing Showcase */}
        <HeroVideoScroll />

        {/* About Section (Contains the primary threshold Day/Night switch) */}
        <About />

        {/* Featured Projects */}
        <Projects />

        {/* Capabilities & Tech Stack */}
        <Skills />

        {/* Direct Contact Form & Links */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
