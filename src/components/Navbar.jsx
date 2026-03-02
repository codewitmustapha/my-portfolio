import { useState, useEffect } from "react";

const navLinks = [
  { id: "case-studies", label: "Built/Coded" },
  { id: "testimonials", label: "Testimonials" },
  { id: "wordpress", label: "Custom Sites" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled || menuOpen
          ? "bg-[#080c14]/90 backdrop-blur-xl border-white/5"
          : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center w-full">
        {/* Logo with < DEV /> style */}
        <a
          href="#"
          className="mr-auto flex items-center gap-0.5 text-lg font-semibold tracking-tight"
        >
          <span className="text-cyan-400 font-light">&lt;</span>
          <span className="text-white font-bold px-1">codewitmustapha</span>
          <span className="text-cyan-400 font-light">/&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-slate-400 hover:text-white transition relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full duration-300"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-cyan-500/40 text-cyan-400 text-sm hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition"
          >
            Start a Project &rarr;
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/5 bg-[#080c14]/95 backdrop-blur-xl">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleLinkClick}
              className="text-sm text-slate-400 hover:text-cyan-400 transition py-2 border-b border-white/5 last:border-0"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-1 px-5 py-3 rounded-full border border-cyan-500/40 text-cyan-400 text-sm text-center hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition"
          >
            Start a Project &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
}
