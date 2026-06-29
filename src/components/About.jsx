import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Award, Layers, Rocket } from 'lucide-react';

export default function About() {
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="py-32 px-6 md:px-24 max-w-7xl mx-auto border-t border-white/[0.03]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="about-reveal font-mono text-xs tracking-widest text-emerald-400 block mb-3 uppercase">// ARCHITECTURE VISION</span>
            <h2 className="about-reveal text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              UI is not just visuals; it's computed performance.
            </h2>
          </div>
          
          <div className="about-reveal bg-[#0a0a0d] border border-white/[0.04] p-6 rounded-2xl mt-8">
            <span className="font-mono text-[10px] text-slate-500 block mb-1">FORMAL ACCREDITATION</span>
            <h4 className="text-sm font-bold text-white mb-1">Bachelor in Computer Applications (BCA)</h4>
            <p className="text-xs text-slate-400 font-mono">Tilak Maharashtra Vidyapeeth, Pune (Class of 2026)</p>
            <div className="mt-4 flex items-center gap-6 border-t border-white/[0.04] pt-4 text-xs font-mono">
              <div><span className="text-slate-500">CGPA:</span> <span className="text-emerald-400 font-bold">6.920</span></div>
              <div><span className="text-slate-500">PERCENTAGE:</span> <span className="text-emerald-400 font-bold">64.43%</span></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <p className="about-reveal text-slate-400 text-base md:text-lg leading-relaxed">
            As a developer, my focus rests entirely at the intersection of rendering efficiency and rich component behaviors. I optimize runtime loops, prevent canvas layout thrashing, and isolate component micro-states to prevent unnecessary reflow cycles across complex visual screens.
          </p>

          <div className="about-reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[#08080b] border border-white/[0.03] rounded-xl hover:border-white/[0.08] transition-colors">
              {/* <Layers size={24} className="text-emerald-400 mb-3" /> */}
              <h3 className="font-bold text-white mb-1">Memory-Efficient Viewports</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Configuring virtualization engines to cycle huge datasets smoothly at 60fps.</p>
            </div>
            
            <div className="p-5 bg-[#08080b] border border-white/[0.03] rounded-xl hover:border-white/[0.08] transition-colors">
              {/* <Rocket size={24} className="text-emerald-400 mb-3" /> */}
              <h3 className="font-bold text-white mb-1">Reactive States</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Leveraging TanStack Query cache layouts and custom Context state isolation mechanisms.</p>
            </div>
          </div>

          <div className="about-reveal border-l-2 border-emerald-500/30 pl-6 py-2 font-mono text-sm text-slate-300 italic">
            "I construct data-driven applications that maintain high frame-rates and smooth interactivity under dense workloads."
          </div>
        </div>

      </div>
    </div>
  );
}