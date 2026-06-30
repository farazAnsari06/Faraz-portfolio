import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, ArrowUpRight, ShieldCheck, CircleUserRound } from 'lucide-react';

export default function Contact() {
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.contact-animate').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 30,
          delay: i * 0.2,
          duration: 0.2,
          ease: 'power3.out'
        });
      })
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="py-32 px-6 md:px-24 max-w-7xl mx-auto border-t border-white/[0.03]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-6">
          <span className="contact-animate font-mono text-xs tracking-widest text-emerald-400 block mb-2">// COMMUNICATION HUB</span>
          <h2 className="contact-animate text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Let's build scale.</h2>
          <p className="contact-animate text-slate-400 text-sm md:text-base leading-relaxed max-w-md mb-8">
            Available for technical software engineer tracks focused on high-density web systems, UI architecture, and complex view layouts.
          </p>
          <div className="contact-animate flex items-center gap-2 font-mono text-xs text-slate-500">
            <ShieldCheck size={14} className="text-emerald-400" /> Secure network point verified.
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
          <a 
            href="mailto:raibansari919@gmail.com" 
            className="contact-animate group flex items-center justify-between p-6 bg-[#060609] border border-white/[0.03] hover:border-emerald-500/30 rounded-2xl transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0a0a10] text-emerald-400 rounded-xl">
                <Mail size={20} />
                </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 block uppercase">ELECTRONIC MAIL</span>
                <span className="text-sm md:text-base text-white font-mono">raibansari919@gmail.com</span>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
          </a>

          <a 
            href="tel:+919372086854" 
            className="contact-animate group flex items-center justify-between p-6 bg-[#060609] border border-white/[0.03] hover:border-emerald-500/30 rounded-2xl transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0a0a10] text-emerald-400 rounded-xl">
                <Phone size={20} />
                </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 block uppercase">TELEPHONY</span>
                <span className="text-sm md:text-base text-white font-mono">+91 9372086854</span>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
          </a>

          <a 
            href="https://www.linkedin.com/in/faraz-ansari-794608367/" 
            target="_blank" 
            rel="noreferrer"
            className="contact-animate group flex items-center justify-between p-6 bg-[#060609] border border-white/[0.03] hover:border-emerald-500/30 rounded-2xl transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0a0a10] text-emerald-400 rounded-xl">
                {/* <Linkedin size={20} /> */}
                <CircleUserRound size={20}/>
                </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 block uppercase">PROFESSIONAL NETWORKING</span>
                <span className="text-sm md:text-base text-white font-mono">linkedin.com/in/faraz-ansari</span>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
          </a>
        </div>

      </div>
    </div>
  );
}