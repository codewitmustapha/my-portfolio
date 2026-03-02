import { useEffect, useRef, useState } from "react";
import useScrollReveal from "./useScrollReveal";

function StatNumber({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame;
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const update = () => {
      current += increment;
      if (current < target) {
        setCount(Math.ceil(current));
        frame = requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useScrollReveal({ once: false });

  return (
    <section className="border-y border-white/5 bg-white/[0.01] relative z-10">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-cyan-500/20 text-center">
          <div className="px-4">
            <div className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-1 tracking-tight">
              <StatNumber target={10} suffix="+" />
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">
              Projects Completed
            </div>
          </div>
          <div className="px-4">
            <div className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-1 tracking-tight">
              <StatNumber target={3} suffix="+" />
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">
              Years Experience
            </div>
          </div>
          <div className="px-4">
            <div className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-1 tracking-tight">
              <StatNumber target={100} suffix="%" />
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">
              Client Satisfaction
            </div>
          </div>
          <div className="px-4">
            <div className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-1 tracking-tight">
              24/7
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">
              Always On Time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
