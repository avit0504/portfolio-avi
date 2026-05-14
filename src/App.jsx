import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg selection:bg-primary-500/30 selection:text-primary-900 dark:selection:text-primary-100 overflow-hidden transition-colors duration-500">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-[0.4] dark:opacity-[0.05] pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary-400/20 dark:bg-primary-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-accent-400/20 dark:bg-accent-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40rem] h-[40rem] bg-blue-400/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
