// import { useEffect, useRef } from "react";

// export default function Hero() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;
//     const timer = setTimeout(() => el?.classList.add("active"), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
//       {/* Background Effects */}
//       <div
//         className="absolute inset-0 opacity-50 z-0"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />
//       <div
//         className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-20 z-0"
//         style={{ animation: "pulse 4s infinite" }}
//       />
//       <div
//         className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-400 rounded-full mix-blend-screen filter blur-[150px] opacity-10 z-0"
//         style={{ animation: "pulse 6s infinite" }}
//       />

//       {/* Static Particles */}
//       <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20 shadow-[0_0_5px_#fff] z-0" />
//       <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-30 shadow-[0_0_8px_#00f5ff] z-0" />
//       <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-20 shadow-[0_0_5px_#3b82f6] z-0" />

//       <div
//         ref={ref}
//         className="reveal max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full"
//       >
//         {/* Left Column */}
//         <div className="md:col-span-7 flex flex-col items-start">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-slate-300 mb-8 backdrop-blur-sm">
//             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
//             ABOUT
//           </div>

//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-4 leading-tight">
//             Salawudeen Mustapha
//           </h1>

//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent tracking-tight mb-6">
//             I build websites that help businesses get more clients.
//           </h2>

//           <div className="space-y-4 text-base lg:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
//             <p>
//               Your website should be your best salesperson. Most websites look
//               good but don't bring in clients — I fix that.
//             </p>
//             <p>
//               I hand-code every site from scratch using HTML, CSS, JavaScript
//               and React. Custom WordPress solutions, AI-powered workflows —
//               delivered fast, without cutting corners.
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-6">
//             <a
//               href="#contact"
//               className="bg-cyan-500 text-[#080c14] px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 flex items-center gap-2"
//             >
//               Start a Project{" "}
//               <iconify-icon
//                 icon="solar:arrow-right-linear"
//                 stroke-width="1.5"
//               ></iconify-icon>
//             </a>
//             <a
//               href="#case-studies"
//               className="text-white hover:text-cyan-400 text-sm font-medium transition flex items-center gap-2"
//             >
//               View My Work{" "}
//               <iconify-icon
//                 icon="solar:arrow-right-linear"
//                 stroke-width="1.5"
//               ></iconify-icon>
//             </a>
//           </div>
//         </div>

//         {/* Right Column — Profile Card */}
//         <div className="md:col-span-5 relative mt-12 md:mt-0">
//           <div className="bg-white/[0.04] backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-500">
//             {/* Profile Row */}
//             <div className="flex items-center gap-4 mb-6">
//               {/* Bouncing Avatar */}
//               <div
//                 className="w-14 h-14 rounded-full border border-cyan-500 shadow-[0_0_10px_rgba(0,245,255,0.3)] p-0.5 relative"
//                 style={{ animation: "bounceFloat 3s ease-in-out infinite" }}
//               >
//                 <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
//                   <img
//                     src="../assets/profile1.jpeg"
//                     alt="Salawudeen Mustapha"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1">
//                   Web Developer
//                 </div>
//                 <div className="text-base text-white font-medium tracking-tight">
//                   Salawudeen Mustapha
//                 </div>
//               </div>
//             </div>

//             {/* Info Grid */}
//             <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-y border-white/5 py-6 mb-6">
//               <div>
//                 <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1.5">
//                   Role
//                 </div>
//                 <div className="text-sm text-white">Web Developer</div>
//               </div>
//               <div>
//                 <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1.5">
//                   Based In
//                 </div>
//                 <div className="text-sm text-white">Nigeria, Lagos</div>
//               </div>
//               <div>
//                 <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1.5">
//                   Focus
//                 </div>
//                 <div className="text-sm text-white">
//                   Client Sites &amp; Own Projects
//                 </div>
//               </div>
//               <div>
//                 <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1.5">
//                   Working Style
//                 </div>
//                 <div className="text-sm text-white">
//                   Remote, Flexible, Reliable
//                 </div>
//               </div>
//             </div>

//             {/* Tools */}
//             <div className="mb-8">
//               <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-3">
//                 Tools I Use
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {["HTML", "CSS", "JavaScript", "React"].map((tool) => (
//                   <span
//                     key={tool}
//                     className="px-2.5 py-1 rounded bg-[#080c14] border border-white/10 text-xs text-slate-300"
//                   >
//                     {tool}
//                   </span>
//                 ))}
//                 <span className="px-2.5 py-1 rounded bg-[#080c14] border border-cyan-500/30 text-xs text-cyan-200">
//                   WordPress
//                 </span>
//                 <span className="px-2.5 py-1 rounded bg-[#080c14] border border-white/10 text-xs text-slate-300">
//                   AI Tools
//                 </span>
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
//               <div className="text-xs text-cyan-400 font-medium">
//                 Currently accepting freelance projects
//               </div>
//             </div>
//           </div>

//           {/* Floating Badge */}
//           <div className="absolute -bottom-4 right-6 bg-[#080c14] border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-slate-400 flex items-center gap-1.5 shadow-lg z-20">
//             <span className="w-1 h-1 rounded-full bg-slate-500"></span>
//             Selected projects only.
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes bounceFloat {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//       `}</style>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
// 1. We import the image so Vite can process it for the live site
import profileImg from "../assets/profile1.jpeg";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const timer = setTimeout(() => el?.classList.add("active"), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute inset-0 opacity-50 z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-20 z-0"
        style={{ animation: "pulse 4s infinite" }}
      />
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-400 rounded-full mix-blend-screen filter blur-[150px] opacity-10 z-0"
        style={{ animation: "pulse 6s infinite" }}
      />

      {/* Static Particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20 shadow-[0_0_5px_#fff] z-0" />
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-30 shadow-[0_0_8px_#00f5ff] z-0" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-20 shadow-[0_0_5px_#3b82f6] z-0" />

      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full"
      >
        {/* Left Column */}
        <div className="md:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-slate-300 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            ABOUT
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-4 leading-tight">
            Salawudeen Mustapha
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent tracking-tight mb-6">
            I build websites that help businesses get more clients.
          </h2>

          <div className="space-y-4 text-base lg:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            <p>
              Your website should be your best salesperson. Most websites look
              good but don't bring in clients — I fix that.
            </p>
            <p>
              I hand-code every site from scratch using HTML, CSS, JavaScript
              and React. Custom WordPress solutions, AI-powered workflows —
              delivered fast, without cutting corners.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="bg-cyan-500 text-[#080c14] px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 flex items-center gap-2"
            >
              Start a Project{" "}
              <iconify-icon
                icon="solar:arrow-right-linear"
                stroke-width="1.5"
              ></iconify-icon>
            </a>
            <a
              href="#case-studies"
              className="text-white hover:text-cyan-400 text-sm font-medium transition flex items-center gap-2"
            >
              View My Work{" "}
              <iconify-icon
                icon="solar:arrow-right-linear"
                stroke-width="1.5"
              ></iconify-icon>
            </a>
          </div>
        </div>

        {/* Right Column — Profile Card */}
        <div className="md:col-span-5 relative mt-12 md:mt-0">
          <div className="bg-white/[0.04] backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-500">
            {/* Profile Row */}
            <div className="flex items-center gap-4 mb-6">
              {/* Bouncing Avatar */}
              <div
                className="w-14 h-14 rounded-full border border-cyan-500 shadow-[0_0_10px_rgba(0,245,255,0.3)] p-0.5 relative"
                style={{ animation: "bounceFloat 3s ease-in-out infinite" }}
              >
                <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
                  {/* 2. We use the imported variable here */}
                  <img
                    src={profileImg}
                    alt="Salawudeen Mustapha"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1">
                  Web Developer
                </div>
                <div className="text-base text-white font-medium tracking-tight">
                  Salawudeen Mustapha
                </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-y border-white/5 py-6 mb-6">
              <div>
                <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1.5">
                  Role
                </div>
                <div className="text-sm text-white">Web Developer</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1.5">
                  Based In
                </div>
                <div className="text-sm text-white">Nigeria, Lagos</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1.5">
                  Focus
                </div>
                <div className="text-sm text-white">
                  Client Sites &amp; Own Projects
                </div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-1.5">
                  Working Style
                </div>
                <div className="text-sm text-white">
                  Remote, Flexible, Reliable
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="mb-8">
              <div className="text-[10px] text-slate-500 tracking-widest uppercase mb-3">
                Tools I Use
              </div>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded bg-[#080c14] border border-white/10 text-xs text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
                <span className="px-2.5 py-1 rounded bg-[#080c14] border border-cyan-500/30 text-xs text-cyan-200">
                  WordPress
                </span>
                <span className="px-2.5 py-1 rounded bg-[#080c14] border border-white/10 text-xs text-slate-300">
                  AI Tools
                </span>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <div className="text-xs text-cyan-400 font-medium">
                Currently accepting freelance projects
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 right-6 bg-[#080c14] border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-slate-400 flex items-center gap-1.5 shadow-lg z-20">
            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
            Selected projects only.
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounceFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
