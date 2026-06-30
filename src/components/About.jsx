import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Layers, Rocket } from 'lucide-react';

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
            <div className="flex items-center gap-2 mb-2">
              <Award size={16} className="text-emerald-400" />
              <span className="font-mono text-[10px] text-slate-500 uppercase">
                FORMAL ACCREDITATION
              </span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Bachelor in Computer Applications (BCA)</h4>
            <p className="text-xs text-slate-400 font-mono">Tilak Maharashtra Vidyapeeth, Pune (Class of 2026)</p>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <p className="about-reveal text-slate-400 text-base md:text-lg leading-relaxed">
            As a frontend developer, I enjoy building responsive and interactive user interfaces using React, Next.js, and modern JavaScript. I focus on writing clean, reusable components, creating smooth animations with GSAP, and delivering intuitive user experiences that feel fast and polished across devices.
          </p>

          <div className="about-reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[#08080b] border border-white/[0.03] rounded-xl hover:border-white/[0.08] transition-colors">
              <div className='flex gap-2'>
                <Layers size={24} className="text-emerald-400 mb-3" />
                <h3 className="font-bold text-white mb-1">Component Architecture</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Building modular, maintainable React components that simplify development and keep applications scalable.</p>
            </div>
            
            <div className="p-5 bg-[#08080b] border border-white/[0.03] rounded-xl hover:border-white/[0.08] transition-colors">
              <div className='flex gap-2'>
                <Rocket size={24} className="text-emerald-400 mb-3" />
                <h3 className="font-bold text-white mb-1">Reactive States</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Leveraging Redux for predictable state management and Context API where lightweight shared state is needed.</p>
            </div>
          </div>

          <div className="about-reveal border-l-2 border-emerald-500/30 pl-6 py-2 font-mono text-sm text-slate-300 italic">
            "I enjoy transforming ideas into intuitive, responsive, and engaging digital experiences."
          </div>
        </div>

      </div>
    </div>
  );
}