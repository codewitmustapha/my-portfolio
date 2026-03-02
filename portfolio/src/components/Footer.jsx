const socials = [
  {
    icon: "mdi:github",
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    icon: "ic:baseline-discord",
    label: "Discord",
    href: "https://discord.com/users/yourid",
  },
  {
    icon: "ic:baseline-telegram",
    label: "Telegram",
    href: "https://t.me/yourusername",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080c14] py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo — matches Navbar style */}
        <a
          href="#"
          className="flex items-center gap-0.5 text-base font-semibold tracking-tight"
        >
          <span className="text-cyan-400 font-light">&lt;</span>
          <span className="text-white font-bold px-1">codewithmustapha</span>
          <span className="text-cyan-400 font-light">/&gt;</span>
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon, label, href }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition"
            >
              <iconify-icon icon={icon} width="18"></iconify-icon>
            </a>
          ))}
        </div>

        {/* Copyright + Back to Top */}
        <div className="flex items-center gap-4 text-xs">
          <span className="text-slate-600">
            &copy; {new Date().getFullYear()} codewithmustapha. All rights
            reserved.
          </span>
          <a
            href="#"
            className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
          >
            Top <iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}
