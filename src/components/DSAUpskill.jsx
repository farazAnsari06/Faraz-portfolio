import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { Code, Binary, Cpu, Workflow } from 'lucide-react';

export default function DSAUpskill() {
  const containerRef = useRef(null);

  const modules = [
    { title: "Linear Sequences", items: ["Arrays", "Strings", "Linked Lists"], icon: 0 },
    { title: "Search Architecture", items: ["Binary Search", "Two Pointers", "Sliding Window"], icon: 0 },
    { title: "Sorting & Combinatorics", items: ["Sorting Algorithms", "Recursion", "Backtracking"], icon: 0 },
    { title: "Core Logic Foundations", items: ["Hashing Techniques", "Greedy Logic Structures", "Heaps"], icon: 0 },
    { title: "Non-Linear Formations", items: ["Binary Trees", "Binary Search Trees (BST)"], icon: 0 },
    { title: "Advanced Optimizations", items: ["Basic Graphs Theory", "Dynamic Programming Foundations"], icon: 0 }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.dsa-node', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.95,
        y: 20,
        // stagger: 0.08,
        duration: 0.8,
        ease: 'bounce.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  

  return (
    <div ref={containerRef} className="py-32 px-6 md:px-24 max-w-7xl mx-auto border-t border-white/[0.03]">
      <div className="bg-gradient-to-br from-[#06060a] to-[#0a0a12] border border-emerald-500/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-3xl mb-12 relative z-10">
          <span className="font-mono text-xs tracking-widest text-emerald-400 block mb-2">// RUNTIME INTELLECT</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Algorithmic Base (DSA)</h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Dedicating the current 5-6 month development sprint to mastering programmatic memory complexity and optimizing core execution runtime patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {modules.map((m, i) => (
            <div key={i} className="dsa-node p-6 bg-[#030305]/60 border border-white/[0.04] rounded-xl hover:border-emerald-500/20 transition-all">
              <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-xs font-bold mb-3 border-b border-white/[0.03] pb-2">
                {m.icon} <span>{m.title}</span>
              </div>
              <div className="space-y-1.5">
                {m.items.map((item, idx) => (
                  <div key={idx} className="text-slate-300 font-mono text-xs flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}