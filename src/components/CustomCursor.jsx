import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      gsap.to(cursor, { x, y, duration: 0.4, ease: 'power3.out' });
      gsap.to(dot, { x, y, duration: 0.1, ease: 'power2.out' });
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, .interactive-card')) {
        gsap.to(cursor, { scale: 2, backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: '#10b981', duration: 0.3 });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, .interactive-card')) {
        gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.2)', duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="hidden md:block fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 border border-white/20 rounded-full pointer-events-none z-50 mix-blend-difference" />
      <div ref={dotRef} className="hidden md:block fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-emerald-400 rounded-full pointer-events-none z-50" />
    </>
  );
}