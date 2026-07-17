
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Cpu, FileDown, PlugZap, Terminal } from "lucide-react";

export default function Hero() {
  const scopeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline()
        .from(".mask-line span", {
          y: "100%",
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
        })
        .from(
          ".fade-trigger",
          {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

      gsap.to(".profile-card", {
        y: -18,
        rotate: 3,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="relative min-h-screen overflow-hidden flex items-center px-6 md:px-16 xl:px-24 pt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <div className="fade-trigger flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-emerald-400 uppercase mb-6">
            <Terminal size={14} />
            UI & Performance Specialized Engineer
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95]">
            <div className="overflow-hidden mask-line py-2">
              <span className="inline-block text-white">FARAZ ANSARI.</span>
            </div>

            <div className="overflow-hidden mask-line py-2">
              <span className="inline-block text-slate-500">
                CRAFTING HIGH-THROUGHPUT
              </span>
            </div>

            <div className="overflow-hidden mask-line py-2">
              <span className="inline-block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                FRONTEND LAYERS.
              </span>
            </div>
          </h1>

          <p className="fade-trigger mt-8 max-w-2xl text-slate-400 text-lg leading-relaxed">
            I architect application view-models that power modern, scalable
            interfaces. Focused on reusable component architecture, intuitive
            user experiences, and seamless interactions across complex
            applications.
          </p>

          <div className="fade-trigger mt-10 flex flex-wrap gap-4 font-mono text-xs">
            <button
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center gap-2"
            >
              <Cpu size={16} />
              EXPLORE REPOS & SHIPS
            </button>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-4 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 flex items-center gap-2"
            >
              <PlugZap size={16} />
              INITIALIZE COMMUNICATOR
            </button>

            <a
              href="/Faraz_Ansari_Resume_Updated.pdf"
              download
              className="px-6 py-4 rounded-xl border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-black flex items-center gap-2 transition"
            >
              <FileDown size={16} />
              DOWNLOAD CV
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[420px] lg:h-[520px]">
          <div className="absolute w-80 h-80 rounded-full blur-[90px] bg-emerald-500/20 animate-pulse" />

          <svg
            className="absolute w-[380px] h-[380px]"
            viewBox="0 0 300 300"
          >
            <path
              id="infinity"
              d="M75 150
              C75 80 225 80 225 150
              C225 220 75 220 75 150
              C75 80 225 80 225 150"
              fill="none"
              stroke="rgba(52,211,153,.25)"
              strokeWidth="2"
            />

            <circle r="5" fill="#34d399">
              <animateMotion dur="8s" repeatCount="indefinite">
                <mpath href="#infinity" />
              </animateMotion>
            </circle>

            <circle r="4" fill="#2dd4bf">
              <animateMotion
                dur="8s"
                begin="-4s"
                repeatCount="indefinite"
              >
                <mpath href="#infinity" />
              </animateMotion>
            </circle>
          </svg>

          <div className="profile-card relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[420px]">
            <div className="absolute inset-0 rounded-[42%_58%_55%_45%/40%_35%_65%_60%] bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 blur-xl" />

            <div className="absolute inset-0 rounded-[42%_58%_55%_45%/40%_35%_65%_60%] border border-white/10 backdrop-blur-xl bg-white/5 overflow-hidden shadow-2xl">
              <img
                src="/profilePicture2.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -inset-4 rounded-[45%_55%_50%_50%/50%_35%_65%_50%] border border-emerald-400/20" />

            <div className="absolute top-8 -left-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <div className="absolute bottom-10 -right-3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
