import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  List,
  Search,
  ArrowUpDown,
  Hash,
  GitBranch,
  Brain,
  MoveUpRight,
} from "lucide-react";

export default function DSAUpskill() {
  const containerRef = useRef(null);

  const modules = [
    { title: "Linear Sequences", items: ["Arrays", "Strings", "Linked Lists"], icon: List },
    { title: "Search Architecture", items: ["Binary Search", "Two Pointers", "Sliding Window"], icon: Search},
    { title: "Sorting & Combinatorics", items: ["Sorting Algorithms", "Recursion", "Backtracking"], icon: ArrowUpDown },
    { title: "Core Logic Foundations", items: ["Hashing Techniques", "Greedy Logic Structures", "Heaps"], icon: Hash },
    { title: "Non-Linear Formations", items: ["Binary Trees", "Binary Search Trees (BST)"], icon: GitBranch },
    { title: "Advanced Optimizations", items: ["Basic Graphs Theory", "Dynamic Programming Foundations"], icon: Brain }
  ];

  const leetcode = "https://leetcode.com/u/raibansari919/";
  const tuf = "https://takeuforward.org/profile/faraz06";

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
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
            <div key={i} className="dsa-node p-6 bg-[#030305]/60 border border-white/[0.04] rounded-xl hover:border-emerald-500/20 transition-all">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/[0.03]">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Icon size={18} className="text-emerald-400" />
                </div>

                <span className="font-mono text-xs font-bold text-emerald-400">
                  {m.title}
                </span>
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
          )})}
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Problem Solving Progress
            </p>
            <p className="text-sm text-slate-400 mt-2">
              Solved 300+ DSA problems across LeetCode while systematically following the Take U Forward (TUF) A2Z DSA Sheet, strengthening algorithmic thinking, data structure fundamentals, and problem-solving patterns through consistent practice.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 px-5 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300"
            >
              <div>
                <p className="font-semibold text-sm">LeetCode</p>
                <p className="font-mono text-[11px] opacity-70">
                  View Profile
                </p>
              </div>

              <MoveUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href={tuf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
            >
              <div>
                <p className="font-semibold text-sm">Take U Forward</p>
                <p className="font-mono text-[11px] opacity-70">
                  View Profile
                </p>
              </div>

              <MoveUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}