import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import xjoins from '../assets/project-icons/xjoins.png';
import goSchoolify from '../assets/project-icons/goSchoolify.png';
import aryventory from '../assets/project-icons/aryventory.png';

export default function Work() {
  const containerRef = useRef(null);

  const projects = [
    {
      title: "XJOINS",
      category: "Enterprise ETL Platform",
      role: "Frontend Lead",
      icon: xjoins,
      url: 'https://xjoins.com/',
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
      icon: goSchoolify,
      url: "https://goschoolify.com",
      highlights: [
        "Built core staff/student scheduling engines with modular offline tracking features.",
        "Implemented high-performance mobile map integration engines with zero-latency vehicle location loops via React Native Reanimated."
      ],
      tech: ["React Native", "Redux Toolkit", "React Native Reanimated", "REST APIs", "Swagger"]
    },
    {
      title: "Aryventory",
      category: "Inventory Management Application",
      role: "Frontend Developer",
      icon: aryventory,
      url: "https://aryventory.com",
      highlights: [
        "Developed mobile inventory workflows for stock management, item tracking, and warehouse operations.",
        "Built responsive React Native interfaces for real-time inventory updates, search, filtering, and transaction history."
      ],
      tech: [
        "React Native",
        "Redux Toolkit",
        "REST APIs",
        "Axios",
        "React Navigation",
        "Offline Storage"
      ]
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div className='flex items-center gap-4'>
                    <div className="w-16 h-16 p-3 bg-[#0a0a10] border border-white/[0.05] rounded-xl shrink-0 flex items-center justify-center">
                      <img
                        src={proj.icon}
                        alt={`${proj.title} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">{proj.role}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mt-0.5">{proj.title}</h3>
                    </div>
                  </div>
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between gap-2 px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium hover:bg-emerald-500 hover:text-black transition-all duration-300"
                    >
                      Visit Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 3h7v7m0-7L10 14m11 7H3V3"
                        />
                      </svg>
                    </a>
                  )}
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