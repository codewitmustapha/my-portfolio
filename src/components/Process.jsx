import useScrollReveal from './useScrollReveal';

const steps = [
  { num: 1, title: 'Discovery', desc: 'Understanding your business goals, target audience, and project requirements.' },
  { num: 2, title: 'Design', desc: 'Creating wireframes and UI mockups tailored to your brand identity.' },
  { num: 3, title: 'Build', desc: 'Writing clean, responsive code. Turning designs into functional reality.' },
  { num: 4, title: 'Launch', desc: 'Final testing, SEO optimization, and deploying to live servers seamlessly.' },
];

export default function Process() {
  const ref = useScrollReveal({ once: false });

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
      <div ref={ref} className="reveal">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[10px] text-cyan-400 tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            How I Work
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">My Process.</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          {/* Mobile connector line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[23px] w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex md:flex-col gap-6 md:gap-0 md:items-center md:text-center group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#080c14] border border-cyan-500 text-cyan-400 flex items-center justify-center font-semibold text-lg md:mb-6 shadow-[0_0_15px_rgba(0,245,255,0.2)] group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white tracking-tight mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
