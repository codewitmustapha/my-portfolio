import { useEffect, useRef } from 'react';
import useScrollReveal from './useScrollReveal';

const skills = [
  { label: 'HTML/CSS', pct: 95, color: 'cyan' },
  { label: 'React', pct: 85, color: 'cyan' },
  { label: 'JavaScript', pct: 90, color: 'cyan' },
  { label: 'AI Dev Tools', pct: 95, color: 'cyan' },
  { label: 'WordPress', pct: 90, color: 'purple' },
];

function ProgressBar({ label, pct, color }) {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.width = `${pct}%`;
          observer.unobserve(bar);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, [pct]);

  const isCyan = color === 'cyan';

  return (
    <div>
      <div className="flex justify-between text-xs mb-2">
        <span className="text-white font-medium">{label}</span>
        <span className={isCyan ? 'text-cyan-400' : 'text-[#a855f7]'}>{pct}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`h-full rounded-full ${
            isCyan
              ? 'bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_10px_#00f5ff]'
              : 'bg-gradient-to-r from-[#a855f7] to-[#c084fc] shadow-[0_0_10px_#a855f7]'
          }`}
          style={{ width: 0, transition: 'width 1.5s ease-out' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useScrollReveal({ once: false });

  return (
    <section className="py-24 bg-white/[0.01] border-y border-white/5 relative z-10">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[10px] text-cyan-400 tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            What I Do
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Code. Build. Deliver.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: 'solar:code-linear',
              title: 'Built From Scratch',
              desc: 'Hand-crafted HTML, CSS, JavaScript and React. Clean code, no bloat, pixel-perfect design translation.',
              accent: 'cyan',
            },
            {
              icon: 'solar:magic-stick-3-linear',
              title: 'AI-Powered Dev',
              desc: 'Leveraging the latest AI vibe coding tools and workflows to ship faster without sacrificing code quality or architecture.',
              accent: 'cyan',
            },
            {
              icon: 'solar:box-linear',
              title: 'WordPress Expert',
              desc: 'Custom themes, WooCommerce, and full business sites. SEO-ready, easy for clients to manage, built to convert.',
              accent: 'purple',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-cyan-500/10 rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${
                  card.accent === 'cyan'
                    ? 'bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(0,245,255,0.1)]'
                    : 'bg-[#a855f7]/10 border-[#a855f7]/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]'
                }`}
              >
                <iconify-icon
                  icon={card.icon}
                  width="24"
                  height="24"
                  class={card.accent === 'cyan' ? 'text-cyan-400' : 'text-[#a855f7]'}
                ></iconify-icon>
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight mb-3">{card.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <ProgressBar key={skill.label} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
