// import { useState } from "react";
// import useScrollReveal from "./useScrollReveal";

// const socials = [
//   {
//     icon: "mdi:github",
//     label: "GitHub",
//     href: "https://github.com/codewitmustapha", // 👈 replace
//   },
//   {
//     icon: "ic:baseline-discord",
//     label: "Discord",
//     href: "https://discord.gg/9smHSw5n", // 👈 replace
//   },
//   {
//     icon: "ic:baseline-telegram",
//     label: "Telegram",
//     href: "https://t.me/codewitmustapha", // 👈 replace
//   },
// ];

// export default function Contact() {
//   const ref = useScrollReveal({ once: false });

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState("idle"); // idle | loading | success | error

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name.trim()) newErrors.name = "Name is required.";
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = "Enter a valid email address.";
//     }
//     if (!form.subject.trim()) newErrors.subject = "Subject is required.";
//     if (!form.message.trim()) {
//       newErrors.message = "Message is required.";
//     } else if (form.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters.";
//     }
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setStatus("loading");

//     try {
//       const formData = new URLSearchParams();
//       formData.append("form-name", "contact");
//       Object.entries(form).forEach(([key, val]) => formData.append(key, val));

//       await fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: formData.toString(),
//       });

//       // Always show success — works on Netlify live, safe to ignore locally
//       setStatus("success");
//       setForm({ name: "", email: "", subject: "", message: "" });
//       setErrors({});
//     } catch {
//       setStatus("success"); // Still show success locally during dev
//     }
//   };

//   const inputClass = (field) =>
//     `w-full bg-[#080c14]/50 border rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition placeholder-slate-600 ${
//       errors[field]
//         ? "border-red-500/70 focus:border-red-500"
//         : "border-white/10 focus:border-cyan-500/50"
//     }`;

//   return (
//     <section
//       id="contact"
//       className="relative py-24 overflow-hidden border-t border-white/5 z-10"
//     >
//       {/* Aurora Background */}
//       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400 rounded-full mix-blend-screen filter blur-[150px] opacity-10 z-0"></div>
//       <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-20 z-0"></div>

//       {/* Hidden Netlify form for build-time detection */}
//       <form name="contact" data-netlify="true" hidden>
//         <input type="text" name="name" />
//         <input type="email" name="email" />
//         <input type="text" name="subject" />
//         <textarea name="message"></textarea>
//       </form>

//       <div
//         ref={ref}
//         className="reveal max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10"
//       >
//         {/* Left */}
//         <div>
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[10px] text-cyan-400 tracking-widest uppercase mb-6">
//             <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
//             Let's Work Together
//           </div>
//           <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
//             Ready to Start a Project?
//           </h2>
//           <p className="text-slate-400 text-base mb-10 max-w-md leading-relaxed">
//             Whether you need a hand-coded website, a React web app, or a
//             WordPress solution — I'm available and ready. Let's build something
//             great.
//           </p>

//           <div className="flex flex-wrap items-center gap-4 mb-12">
//             <button className="bg-cyan-500 text-[#080c14] px-6 py-3 rounded-full text-sm font-semibold hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.3)] transition">
//               Start a Project &rarr;
//             </button>
//             {/* 👇 Replace 2348012345678 with your actual WhatsApp number */}
//             <a
//               href="https://wa.me/2348165403997"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-transparent border border-green-500/50 text-green-400 px-6 py-3 rounded-full text-sm font-medium hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition"
//             >
//               WhatsApp Me &rarr;
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4">
//             {socials.map(({ icon, label, href }) => (
//               <a
//                 key={icon}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 title={label}
//                 className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition"
//               >
//                 <iconify-icon icon={icon} width="20"></iconify-icon>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Right — Form */}
//         <div>
//           <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
//             {/* Success Banner */}
//             {status === "success" && (
//               <div className="mb-6 flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg px-4 py-3">
//                 <iconify-icon
//                   icon="solar:check-circle-linear"
//                   width="18"
//                 ></iconify-icon>
//                 Message sent! I'll get back to you soon.
//               </div>
//             )}

//             {/* Error Banner */}
//             {status === "error" && (
//               <div className="mb-6 flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
//                 <iconify-icon
//                   icon="solar:close-circle-linear"
//                   width="18"
//                 ></iconify-icon>
//                 Something went wrong. Please try again.
//               </div>
//             )}

//             <form
//               onSubmit={handleSubmit}
//               noValidate
//               name="contact"
//               data-netlify="true"
//             >
//               <input type="hidden" name="form-name" value="contact" />

//               <div className="grid md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="John Doe"
//                     className={inputClass("name")}
//                   />
//                   {errors.name && (
//                     <p className="mt-1 text-[11px] text-red-400">
//                       {errors.name}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="john@example.com"
//                     className={inputClass("email")}
//                   />
//                   {errors.email && (
//                     <p className="mt-1 text-[11px] text-red-400">
//                       {errors.email}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={form.subject}
//                   onChange={handleChange}
//                   placeholder="Project Inquiry"
//                   className={inputClass("subject")}
//                 />
//                 {errors.subject && (
//                   <p className="mt-1 text-[11px] text-red-400">
//                     {errors.subject}
//                   </p>
//                 )}
//               </div>

//               <div className="mb-6">
//                 <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   rows="4"
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   placeholder="Tell me about your project..."
//                   className={`${inputClass("message")} resize-none`}
//                 ></textarea>
//                 {errors.message && (
//                   <p className="mt-1 text-[11px] text-red-400">
//                     {errors.message}
//                   </p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={status === "loading"}
//                 className="w-full bg-white/[0.05] border border-cyan-500/50 text-cyan-400 py-3 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {status === "loading" ? (
//                   <>
//                     <iconify-icon
//                       icon="solar:refresh-linear"
//                       width="16"
//                       class="animate-spin"
//                     ></iconify-icon>
//                     Sending...
//                   </>
//                 ) : (
//                   "Send Message →"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import useScrollReveal from "./useScrollReveal";

const socials = [
  {
    icon: "mdi:github",
    label: "GitHub",
    href: "https://github.com/codewitmustapha",
  },
  {
    icon: "ic:baseline-discord",
    label: "Discord",
    href: "https://discord.gg/9smHSw5n",
  },
  {
    icon: "ic:baseline-telegram",
    label: "Telegram",
    href: "https://t.me/codewitmustapha",
  },
];

export default function Contact() {
  const ref = useScrollReveal({ once: false });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      // ✅ Using your Formspree endpoint now!
      const response = await fetch("https://formspree.io/f/mojnoylo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full bg-[#080c14]/50 border rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition placeholder-slate-600 ${
      errors[field]
        ? "border-red-500/70 focus:border-red-500"
        : "border-white/10 focus:border-cyan-500/50"
    }`;

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden border-t border-white/5 z-10"
    >
      {/* Aurora Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400 rounded-full mix-blend-screen filter blur-[150px] opacity-10 z-0"></div>
      <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-20 z-0"></div>

      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10"
      >
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[10px] text-cyan-400 tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Let's Work Together
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Ready to Start a Project?
          </h2>
          <p className="text-slate-400 text-base mb-10 max-w-md leading-relaxed">
            Whether you need a hand-coded website, a React web app, or a
            WordPress solution — I'm available and ready. Let's build something
            great.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button className="bg-cyan-500 text-[#080c14] px-6 py-3 rounded-full text-sm font-semibold hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.3)] transition">
              Start a Project &rarr;
            </button>
            <a
              href="https://wa.me/2348165403997"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-green-500/50 text-green-400 px-6 py-3 rounded-full text-sm font-medium hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition"
            >
              WhatsApp Me &rarr;
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon, label, href }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition"
              >
                <iconify-icon icon={icon} width="20"></iconify-icon>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div>
          <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            {/* Success Banner */}
            {status === "success" && (
              <div className="mb-6 flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg px-4 py-3">
                <iconify-icon
                  icon="solar:check-circle-linear"
                  width="18"
                ></iconify-icon>
                Message sent! I'll get back to you soon.
              </div>
            )}

            {/* Error Banner */}
            {status === "error" && (
              <div className="mb-6 flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
                <iconify-icon
                  icon="solar:close-circle-linear"
                  width="18"
                ></iconify-icon>
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={inputClass("subject")}
                />
                {errors.subject && (
                  <p className="mt-1 text-[11px] text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClass("message")} resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-[11px] text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-white/[0.05] border border-cyan-500/50 text-cyan-400 py-3 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
