import { useState } from "react";
import useScrollReveal from "./useScrollReveal";

import imperiumImg from "../assets/imperium.png";
import darulImg from "../assets/darul.PNG";
import newproject5Img from "../assets/newproject5.png";

const projects = [
  {
    image: imperiumImg,
    title: "Imperium Art & Decor",
    desc: "A high-end luxury furniture website built with React, featuring a fully responsive layout, elegant UI design, and a seamless mobile navigation experience tailored for a premium clientele.",
    tags: ["React", "Tailwind"],
    category: "React",
    link: "https://thunderous-medovik-fc2640.netlify.app/",
  },
  {
    image: darulImg,
    title: "Darul-Arqam Islamic Bookshop",
    desc: "Clean, fully responsive bookshop website hand-coded from scratch. Designed to sell physical books and eBooks rooted in Islamic knowledge and culture.",
    tags: ["React", "Tailwind CSS"],
    category: "HTML/CSS",
    link: "https://bookshop-usthaz.netlify.app/",
  },
  {
    image: newproject5Img,
    title: "FlowSync",
    desc: "A sleek and modern UI for an intelligent productivity platform that helps teams orchestrate workflows with AI-powered context, real-time analytics, and seamless collaboration tools",
    tags: ["React", "Tailwind CSS"],
    category: "JavaScript",
    link: "https://flowsync-react.netlify.app/",
  },
];

const filters = ["All", "HTML/CSS", "JavaScript", "React"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const ref = useScrollReveal({ once: false });

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="case-studies"
      className="py-24 max-w-7xl mx-auto px-6 relative z-10"
    >
      <div ref={ref} className="reveal">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[10px] text-cyan-400 tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            My Work
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
            Web Development Projects.
          </h2>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition border ${
                  active === f
                    ? "bg-white/10 text-white border-white/10"
                    : "text-slate-400 border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-cyan-500/10 rounded-2xl p-4 hover:border-cyan-500/40 hover:-translate-y-2 transition-all duration-500 group flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="w-full aspect-video bg-[#0d1320] rounded-xl mb-6 relative overflow-hidden border border-white/5 group-hover:border-cyan-500/30 transition">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-white tracking-tight mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-[10px] border border-cyan-500/30 text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Site Button */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-medium hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition"
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
