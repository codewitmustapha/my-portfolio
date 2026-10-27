import { useState } from "react";
import { contactLinks } from "../data/portfolio";
import { SectionHeading } from "./PortfolioUI";

const formspreeEndpoint = "https://formspree.io/f/mojnoylo";
const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (form.message.trim().length < 10) {
      setError("Please add a little more detail to your message.");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Message could not be sent.");
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setError("The message could not be sent right now. Please try WhatsApp instead.");
    }
  }

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  const whatsapp = contactLinks.find((item) => item.label === "WhatsApp");

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-container contact-grid">
        <div className="contact-intro">
          <SectionHeading eyebrow="Start a conversation" title="Let’s make your next step easier." copy="Share what you’re trying to improve. We can shape the right website, AI agent, or workflow together." />
          <div className="contact-direct">
            <span className="contact-direct-label">Prefer a direct message?</span>
            {whatsapp && <a className="button button-whatsapp" href={whatsapp.href} target="_blank" rel="noreferrer">Message me on WhatsApp <span aria-hidden="true">↗</span></a>}
            <p>Based in Lagos, Nigeria · Working remotely</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>PROJECT INQUIRY</span><span className="form-required">* Required</span></div>
          {status === "sent" && <p className="form-status form-success" role="status">Thanks for reaching out. Your message has been sent.</p>}
          {error && <p className="form-status form-error" role="alert">{error}</p>}
          <div className="form-row">
            <label>Name <span>*</span><input name="name" autoComplete="name" value={form.name} onChange={update} required placeholder="Your name" /></label>
            <label>Email <span>*</span><input type="email" name="email" autoComplete="email" value={form.email} onChange={update} required placeholder="you@company.com" /></label>
          </div>
          <label>What would you like to build? <span>*</span><input name="subject" value={form.subject} onChange={update} required placeholder="Website, AI agent, or workflow" /></label>
          <label>Tell me a little about it <span>*</span><textarea name="message" value={form.message} onChange={update} required minLength={10} rows={5} placeholder="What is the challenge, and what would a good outcome look like?" /></label>
          <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send project inquiry"}<span aria-hidden="true">→</span>
          </button>
          <p className="form-note">Messages are sent through the existing contact form service. Demo forms elsewhere on this site do not transmit data.</p>
        </form>
      </div>
    </section>
  );
}
