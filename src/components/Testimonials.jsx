import useScrollReveal from "./useScrollReveal";

const testimonials = [
  {
    quote:
      '"Salawudeen delivered a beautiful and professional Islamic bookstore website for Darul Arqam. The design feels clean, trustworthy, and easy to navigate. Our customers can now browse and purchase books effortlessly. Since launch, our online orders have increased significantly. Highly recommended for anyone needing a premium eBook or bookstore platform."',
    name: "Abdulazeez Abdulwaheed",
    role: "Director, Darul Arqam Islamic Bookshop",
    initial: "A",
  },
  {
    quote:
      '"The luxury furniture website exceeded our expectations. Salawudeen created a visually stunning platform that perfectly represents our high-end brand. The layout, animations, and product presentation feel truly premium. Our clients constantly compliment the design and smooth experience."',
    name: "Mayor Kenneth",
    role: "Founder, Imperium Furniture",
    initial: "M",
  },
  {
    quote:
      '"Working with Salawudeen was seamless. He built a modern IPTV website that looks professional and converts extremely well. The interface is fast, responsive, and clearly structured for users to choose plans easily. The backend setup also makes management simple. Exceptional work',
    name: "Michael Grant",
    role: "CEO, Best Server IPTV",
    initial: "M",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal({ once: false });

  return (
    <section
      id="testimonials"
      className="py-24 max-w-7xl mx-auto px-6 relative z-10"
    >
      <div ref={ref} className="reveal">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[10px] text-cyan-400 tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Trusted by Real Clients.
          </h2>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-0 bg-white/[0.03] border border-cyan-500/10 rounded-2xl p-8 flex flex-col snap-center hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <iconify-icon
                icon="solar:quote-left-bold"
                width="32"
                height="32"
                class="text-cyan-500/30 mb-6"
              ></iconify-icon>
              <p className="text-sm text-slate-300 mb-8 flex-grow leading-relaxed">
                {t.quote}
              </p>
              <div className="h-px w-full bg-white/5 mb-6"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-semibold border border-white/10">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    {t.role}
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-4 text-cyan-400">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <iconify-icon
                      key={idx}
                      icon="solar:star-bold"
                      width="14"
                    ></iconify-icon>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
