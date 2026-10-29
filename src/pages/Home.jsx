import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/optimized/salawudeen-portrait.jpg";
import { serviceCategories, homepageHelpServices, portfolioProjects, processSteps, testimonials, about, contactLinks, workflowVisualExamples } from "../data/portfolio";
import ContactSection from "../components/ContactSection";
import { ProjectCard, SectionHeading, ServiceCard } from "../components/PortfolioUI";

const projectFilters = ["All Work", "Websites", "Interface Concepts"];

function matchesProjectFilter(project, filter) {
  if (filter === "All Work") return true;
  if (filter === "Websites") return project.kind === "Website Project";
  if (filter === "Interface Concepts") return project.kind === "Concept Project";
  return false;
}

function HeroWorkGallery() {
  const project = portfolioProjects[0];
  const workflow = workflowVisualExamples[0];

  return (
    <aside className="hero-gallery" aria-label="A real website project and an illustrative workflow example">
      <div className="hero-gallery-topline"><span>FEATURED WEBSITE</span><span>REAL PROJECT</span></div>
      <Link to={`/projects/${project.slug}`} className="hero-featured-link" aria-label={`View ${project.title} project details`}>
        <img src={project.image} alt={`${project.title} website screenshot`} fetchPriority="high" />
        <span className="hero-image-caption"><small>{project.kind}</small><strong>{project.title}</strong></span>
      </Link>
      <div className="hero-gallery-foot"><span>{project.tags.join(" · ")}</span><Link to={`/projects/${project.slug}`}>View project <span aria-hidden="true">→</span></Link></div>
      <Link to={`/services/business-workflow-automation#workflow-example-${workflow.id}`} className="hero-workflow-proof" aria-label={`View illustrative workflow example: ${workflow.title}`}>
        <img src={workflow.image} alt="" loading="lazy" />
        <span className="hero-workflow-copy"><span>Illustrative workflow example</span><strong>Lead qualification</strong><small>From a new enquiry to a clear next step.</small></span>
        <span className="hero-workflow-arrow" aria-hidden="true">↗</span>
      </Link>
    </aside>
  );
}

function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="section-container about-grid">
        <div className="about-image-wrap">
          <img src={profileImage} alt="Salawudeen Mustapha" loading="lazy" />
          <div className="about-image-caption"><span className="status-indicator" /> Currently accepting freelance projects</div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="A little about me" title="Thoughtful digital work, built around real business needs." />
          <p className="about-lead">I’m Salawudeen Mustapha, a developer based in Lagos, Nigeria. I build websites and practical customer-support and business workflows that solve real problems.</p>
          <p className="about-body">I focus on clear customer experiences, useful tools, and systems that are easier to understand and manage. Every project starts with the process and the people who will use it.</p>
          <div className="about-facts">
            <div><span>BASED IN</span><strong>{about.location}</strong></div>
            <div><span>WORKING STYLE</span><strong>Remote · Flexible · Reliable</strong></div>
          </div>
          <div className="tool-list"><span className="tool-label">TOOLS & TECHNOLOGIES</span><div>{about.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="process-section section-pad" id="process">
      <div className="section-container">
        <SectionHeading eyebrow="How I work" title="From Business Problem to Practical Solution" copy="Understand the need, choose a useful approach, build and test it, then hand it over clearly." align="center" />
        <ol className="process-list">
          {processSteps.map((step, index) => (
            <li className="process-item" key={step.title}>
              <span className="process-number">0{index + 1}</span>
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
              {index < processSteps.length - 1 && <span className="process-connector" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ServiceMark({ type }) {
  if (type === "website") {
    return <svg viewBox="0 0 40 40" aria-hidden="true"><rect x="5" y="7" width="30" height="26" rx="2" /><path d="M5 14h30M10 10.5h.1M13 10.5h.1M16 10.5h.1M11 20h17M11 24h13M11 28h9" /></svg>;
  }
  if (type === "support") {
    return <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M7 8h26v19H20l-8 6v-6H7z" /><circle cx="14" cy="18" r="1" /><circle cx="20" cy="18" r="1" /><circle cx="26" cy="18" r="1" /></svg>;
  }
  return <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M7 11h11v18H7zM22 7h11v8H22zM22 24h11v9H22zM18 20h4M18 11h4M18 29h4" /><circle cx="12.5" cy="20" r="1" /><circle cx="27.5" cy="11" r="1" /><circle cx="27.5" cy="28.5" r="1" /></svg>;
}

function HowIHelpSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;
    const rows = section.querySelectorAll(".help-row");
    section.classList.add("help-section--reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -24px 0px" });
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="help-section section-pad" id="how-i-help" ref={sectionRef}>
      <div className="section-container">
        <SectionHeading eyebrow="What I do" title="How I Help Businesses" copy="Thoughtful digital work to earn trust, support customers, and make everyday business tasks easier." />
        <div className="help-rows">
          {homepageHelpServices.map((service) => (
            <article className="help-row" key={service.number}>
              <span className="help-number">{service.number}</span>
              <div className="help-copy">
                <div className="help-title-row"><ServiceMark type={service.visual} /><h3>{service.title}</h3></div>
                <p>{service.description}</p>
              </div>
              <Link className="help-service-link" to={service.href}>Explore service <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
        <div className="help-cta-row"><a className="button button-primary" href="#contact">Discuss a Project <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonial-section section-pad" id="testimonials">
      <div className="section-container">
        <SectionHeading eyebrow="Client feedback" title="Good work should feel good to use." align="center" />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.name}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{item.quote}</blockquote>
              <figcaption><span className="testimonial-initial">{item.initial}</span><span><strong>{item.name}</strong><small>{item.role}</small></span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const visibleProjects = useMemo(() => portfolioProjects.filter((project) => matchesProjectFilter(project, activeFilter)), [activeFilter]);
  const whatsapp = contactLinks.find((item) => item.label === "WhatsApp");

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="section-container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">WEBSITE DEVELOPMENT <b>•</b> CUSTOMER SUPPORT AI <b>•</b> WORKFLOW AUTOMATION</p>
            <h1>Websites That Convert.<br /><span>AI That Automates.</span></h1>
            <p className="hero-description">I build professional websites, AI-powered customer support systems, and automated workflows that help businesses capture enquiries, serve customers, and reduce repetitive work.</p>
            <p className="hero-description hero-description-secondary">Start with the problem — missed enquiries, repetitive questions, or manual follow-ups — and shape a practical digital solution around it.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let’s Work Together <span aria-hidden="true">↗</span></a>
              <a className="button button-quiet" href="#projects">Explore My Work <span aria-hidden="true">↓</span></a>
              {whatsapp && <a className="hero-whatsapp" href={whatsapp.href} target="_blank" rel="noopener noreferrer">Message me on WhatsApp <span aria-hidden="true">↗</span></a>}
            </div>
            <div className="hero-footnote"><span className="status-indicator" /> Lagos, Nigeria <span className="footnote-separator">·</span> Available for freelance projects</div>
          </div>
          <HeroWorkGallery />
        </div>
      </section>

      <section className="services-overview section-pad" id="services">
        <div className="section-container">
          <div className="section-heading-row">
            <SectionHeading eyebrow="What I build" title="Three ways to move your business forward." copy="Start with the challenge. Choose the digital solution that fits." />
            <span className="section-aside">01 — 03 / SERVICE AREAS</span>
          </div>
          <div className="service-grid">
            {serviceCategories.map((category, index) => <ServiceCard key={category.slug} category={category} index={index} />)}
          </div>
        </div>
      </section>

      <section className="projects-section section-pad" id="projects">
        <div className="section-container">
          <div className="projects-heading section-heading-row">
            <SectionHeading eyebrow="Selected work" title="Work, clearly described." copy="Explore two website projects and one clearly identified interface concept. Each page explains what it is—and what it isn't." />
            <span className="section-aside">03 SELECTED WORKS</span>
          </div>
          <div className="project-filters" role="group" aria-label="Filter selected work">
            {projectFilters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? "filter-button is-active" : "filter-button"} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <HowIHelpSection />

      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
