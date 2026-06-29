import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ExternalLink, Database, ShieldAlert, Smartphone } from 'lucide-react';

export default function Work() {
  const containerRef = useRef(null);

  const projects = [
    {
      title: "XJOINS",
      category: "Enterprise ETL Platform",
      role: "Frontend Lead",
      icon: 0,
      highlights: [
        "Led frontend architecture using React.js, TanStack Query, AG Grid, Handsontable, and React Flow for real-time asynchronous pipelines.",
        "Engineered custom enterprise AG Grid rendering layout with deep column mutations, dropping custom commercial grids to save ~$1,000/year.",
        "Engineered browser-native Excel workspaces via modular Handsontable overrides with rich ribbon manipulation options.",
        "Architected extensive visual data mapping canvas components completely via clean multi-node React Flow pipelines."
      ],
      tech: ["React.js", "TanStack Query", "AG Grid", "Handsontable", "React Flow", "GSAP", "Context API"]
    },
    {
      title: "School Management System",
      category: "Cross-Platform Application",
      role: "Frontend Developer",
      icon: 0,
      highlights: [
        "Built core staff/student scheduling engines with modular offline tracking features.",
        "Implemented high-performance mobile map integration engines with zero-latency vehicle location loops via React Native Reanimated."
      ],
      tech: ["React Native", "Redux Toolkit", "React Native Reanimated", "REST APIs", "Swagger"]
    },
    {
      title: "Aryventory",
      category: "Operations Module",
      role: "Frontend Developer",
      icon: 0,
      highlights: [
        "Developed operations view-models mapping high-throughput warehouse logistics and live stock fluctuations.",
        "Optimized reporting interfaces with AG Grid visual layer extensions for corporate metrics analytics."
      ],
      tech: ["React.js", "AG Grid", "GSAP", "React Flow", "Custom Dashboards", "REST Integration"]
    }
  ];

useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.utils.toArray(".work-card").forEach((card, i) => {
      gsap.set(card, {opacity: 0, y: 60})
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: .5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          markers: true,
        }
      });
    });

    ScrollTrigger.refresh();

  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <div ref={containerRef} className="py-32 px-6 md:px-24 max-w-7xl mx-auto border-t border-white/[0.03]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-emerald-400 block mb-2">// EXPERIENCE RECORD</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white">Arysoft Production Ships</h2>
        </div>
        <p className="font-mono text-xs text-slate-500 max-w-xs leading-relaxed">
          Production applications developed and maintained as a Software Engineer, focusing on deep data handling.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((proj, idx) => (
          <div key={idx} className="work-card group relative bg-[#060609] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#0a0a10] border border-white/[0.05] rounded-xl shrink-0">
                    {proj.icon}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">{proj.role}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-0.5">{proj.title}</h3>
                  </div>
                </div>
                
                <p className="font-mono text-xs text-slate-500 mb-6">{proj.category}</p>
                
                <ul className="space-y-3 text-slate-400 text-sm md:text-base list-none pl-0">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 leading-relaxed">
                      <span className="text-emerald-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-80 shrink-0 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.04] pt-6 lg:pt-0 lg:pl-8">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 block mb-3 uppercase tracking-widest">DEPLOYED SPECTRUM</span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#0a0a0f] border border-white/[0.04] rounded-md text-xs font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}