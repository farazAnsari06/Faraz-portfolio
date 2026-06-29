import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Component Imports
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import DSAUpskill from './components/DSAUpskill';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useRef(null);

  useEffect(() => {
    // Premium Smooth Scroll & Entrance Timeline
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.scroll-section');
      
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 40%',
          end: 'bottom 40%',
          onEnter: () => setActiveSection(section.id),
          onEnterBack: () => setActiveSection(section.id),
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#030304] text-[#f4f4f6] min-h-screen font-sans relative antialiased selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home" className="scroll-section">
          <Hero />
        </section>
        
        <section id="about" className="scroll-section">
          <About />
        </section>
        
        <section id="work" className="scroll-section">
          <Work />
        </section>
        
        <section id="dsa" className="scroll-section">
          <DSAUpskill />
        </section>
        
        <section id="contact" className="scroll-section">
          <Contact />
        </section>
      </main>

      <footer className="w-full py-8 text-center text-xs font-mono text-slate-600 border-t border-slate-900 bg-[#030304]">
        <p>© 2026 Faraz Ansari. Engine optimized for seamless interaction.</p>
      </footer>
    </div>
  );
}