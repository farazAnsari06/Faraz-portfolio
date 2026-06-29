import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { Terminal, Cpu } from 'lucide-react';

export default function Hero() {
  const scopeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from('.mask-line span', {
        y: '100%',
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      })
      .from('.fade-trigger', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6');
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scopeRef} className="min-h-screen w-full flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto relative pt-24 overflow-hidden">
      {/* Structural Tech Grid Underlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl relative z-10">
        <div className="fade-trigger flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-emerald-400 mb-6 uppercase">
          {/* <Terminal size={14} /> */}
           UI & Performance Specialized Engineer
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.95] mb-4">
          <div className="overflow-hidden mask-line py-2">
            <span className="inline-block">FARAZ ANSARI.</span>
          </div>
          <div className="overflow-hidden mask-line py-2 text-slate-500">
            <span className="inline-block">CRAFTING HIGH-THROUGHPUT</span>
          </div>
          <div className="overflow-hidden mask-line py-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
            <span className="inline-block">FRONTEND LAYERS.</span>
          </div>
        </h1>

        <p className="fade-trigger max-w-2xl text-slate-400 text-base md:text-xl leading-relaxed font-normal mt-8 mb-10">
          I architecture application view-models capable of handling heavy data pipelines. Focused on runtime optimization, reactive data visualization grid infrastructures, and frame-perfect interactions.
        </p>

        <div className="fade-trigger flex flex-wrap gap-4 font-mono text-xs">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="interactive-card px-8 py-4 bg-emerald-500 text-black font-bold tracking-wider rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10 flex items-center gap-2"
          >
            {/* <Cpu size={16} />  */}
            EXPLORE REPOS & SHIPS
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="interactive-card px-8 py-4 bg-[#0e0e12] border border-white/[0.08] text-slate-300 font-medium rounded-xl hover:border-white/20 transition-all hover:text-white"
          >
            INITIALIZE COMMUNICATOR
          </button>
        </div>
      </div>

      {/* Floating Status Card */}
      <div className="fade-trigger absolute bottom-12 right-6 md:right-24 bg-[#0a0a0d] border border-white/[0.05] p-4 rounded-xl hidden lg:block max-w-xs shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <p className="font-mono text-[11px] text-slate-400 leading-normal">
            Currently refining algorithmic logic capabilities via dedicated algorithmic complexity analysis.
          </p>
        </div>
      </div>
    </div>
  );
}