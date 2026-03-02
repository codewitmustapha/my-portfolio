import { useState } from "react";
import useScrollReveal from "./useScrollReveal";

import boutique1Img from "../assets/boutique1.png";
import lawfirm1Img from "../assets/lawfirm1.png";
import newproject1Img from "../assets/newproject1.png";

const wpProjects = [
  {
    image: boutique1Img,
    title: "The Grange Ashford",
    desc: "A clean, professional WordPress website built for a residential care home in Kent. Designed to showcase services, facilities, and build trust with families seeking senior care.",
    tags: ["WordPress"],
    category: "WooCommerce",
    link: "https://thegrangeashford.co.uk/",
  },
  {
    image: lawfirm1Img,
    title: "Phone Repair & More",
    desc: "A fully responsive multi-location WordPress website built for a Florida-based device repair company. Designed to showcase services, locations, and drive repair bookings.",
    tags: ["WordPress", "Custom Theme"],
    category: "Custom Theme",
    link: "https://phonerepairmore.com/c:\Users\USER\Downloads\lawfirm1.png",
  },
  {
    image: newproject1Img,
    title: "Best Server IPTV",
    desc: "A fully responsive WordPress WooCommerce website built for an IPTV subscription service. Designed to showcase pricing plans, features, and drive subscription purchases.",
    tags: ["WordPress", "WooCommerce"],
    category: "Elementor",
    link: "https://bestserveriptv.net/",
  },
];

const filters = ["All", "Custom Theme", "WooCommerce", "Elementor"];

export default function WordPressProjects() {
  const [active, setActive] = useState("All");
  const ref = useScrollReveal({ once: false });

  const filtered =
    active === "All"
      ? wpProjects
      : wpProjects.filter((p) => p.category === active);

  return (
    <section
      id="wordpress"
      className="py-24 max-w-7xl mx-auto px-6 relative z-10"
    >
      <div ref={ref} className="reveal">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/5 text-[10px] text-[#a855f7] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]"></span>
            WordPress Work
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
            WordPress Projects.
          </h2>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition border ${
                  active === f
                    ? "bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/20"
                    : "text-slate-400 border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-[#a855f7]/10 rounded-2xl p-3 hover:border-[#a855f7]/40 hover:-translate-y-2 transition-all duration-500 group flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="w-full aspect-video bg-[#0d1320] rounded-xl mb-4 relative overflow-hidden border border-white/5 group-hover:border-[#a855f7]/30 transition">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#a855f7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-medium text-white tracking-tight mb-1.5">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-400 mb-4 flex-grow leading-relaxed">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] border border-[#a855f7]/30 text-[#a855f7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/30 text-xs font-medium hover:bg-[#a855f7] hover:text-black hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition"
                >
                  Live Site {">"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
