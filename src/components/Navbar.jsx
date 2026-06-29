import React from 'react';

export default function Navbar({ activeSection }) {
  const navItems = [
    { id: 'home', label: '// index' },
    { id: 'about', label: '// story' },
    { id: 'work', label: '// engineering' },
    { id: 'dsa', label: '// algorithms' },
    { id: 'contact', label: '// connection' }
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl border-b border-white/[0.04] bg-[#030304]/80 px-6 md:px-16 py-5 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScroll('home')}>
        <span className="font-mono text-sm tracking-widest text-emerald-400 font-bold">&lt;ANSARI.FA /&gt;</span>
      </div>
      
      <nav className="hidden md:flex gap-10 font-mono text-xs tracking-wider">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`transition-colors relative py-1 duration-300 ${
              activeSection === item.id ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-400 rounded-full" />
            )}
          </button>
        ))}
      </nav>

      <div className="text-right hidden sm:block">
        <span className="text-[10px] font-mono text-slate-500 block">CURRENT STATUS</span>
        <span className="text-xs font-mono text-emerald-400 flex items-center justify-end gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> UPSKILL RUN
        </span>
      </div>
    </header>
  );
}