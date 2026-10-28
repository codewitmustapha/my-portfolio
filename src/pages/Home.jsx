import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile1.jpeg";
import { serviceCategories, portfolioProjects, processSteps, testimonials, about } from "../data/portfolio";
import ContactSection from "../components/ContactSection";
import { ProjectCard, SectionHeading, ServiceCard } from "../components/PortfolioUI";
import { ProjectPlanner, WorkflowTimeAudit } from "../components/InteractiveTools";

const projectFilters = ["All Work", "Websites", "Interface Concepts"];

function matchesProjectFilter(project, filter) {
  if (filter === "All Work") return true;
  if (filter === "Websites") return project.kind === "Website Project";
  if (filter === "Interface Concepts") return project.kind === "Concept Project";
  return false;
}

function HeroWorkGallery() {
  const featured = [portfolioProjects[1], portfolioProjects[0], portfolioProjects[2]];
  const [main, ...side] = featured;

  return (
    <div className="hero-gallery" aria-label="Selected screenshots from two website projects and one interface concept">
      <div className="hero-gallery-topline"><span>SELECTED WORK</span><span>01 — 03</span></div>
      <div className="hero-gallery-board">
        <Link to={`/projects/${main.slug}`} className="hero-gallery-main" aria-label={`View ${main.title}`}>
          <img src={main.image} alt={`${main.title} ${main.kind === "Concept Project" ? "interface concept" : "website"} screenshot`} fetchPriority="high" />
          <span className="hero-image-caption"><strong>{main.title}</strong><small>{main.tags.join(" · ")}</small></span>
        </Link>
        <div className="hero-gallery-stack">
          {side.map((project) => (
            <Link to={`/projects/${project.slug}`} className="hero-gallery-small" key={project.slug} aria-label={`View ${project.title}`}>
              <img src={project.image} alt={`${project.title} ${project.kind === "Concept Project" ? "interface concept" : "website"} screenshot`} />
              <span className="hero-image-caption"><strong>{project.title}</strong><small>{project.kind === "Concept Project" ? "Interface concept" : project.tags.join(" · ")}</small></span>
            </Link>
          ))}
        </div>
      </div>
      <div className="hero-gallery-foot"><span>Real work, shown as it is.</span><Link to="/#projects">See all selected work <span aria-hidden="true">↘</span></Link></div>
    </div>
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
        <SectionHeading eyebrow="How I work" title="A clear path from idea to delivery." copy="The right solution starts with understanding the real problem—not adding tools for the sake of it." align="center" />
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

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="section-container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">WEBSITE DEVELOPMENT <b>•</b> CUSTOMER SUPPORT AI <b>•</b> WORKFLOW AUTOMATION</p>
            <h1>Websites That Convert.<br /><span>AI That Automates.</span></h1>
            <p className="hero-description">I build modern websites, customer-support and lead-handling solutions, and connected workflows that help businesses respond clearly and reduce repeat work.</p>
            <p className="hero-description hero-description-secondary">Start with the problem—missed enquiries, repetitive questions, or manual follow-ups—and shape a practical digital solution around it.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let’s Work Together <span aria-hidden="true">↗</span></a>
              <a className="button button-quiet" href="#projects">Explore My Work <span aria-hidden="true">↓</span></a>
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

      <section className="tools-section section-pad" id="tools">
        <div className="section-container">
          <div className="tools-intro">
            <SectionHeading eyebrow="Practical tools" title="Make your next step clearer." copy="Build a project starter from your goals, or calculate the time tied up in a recurring task." />
            <p className="tools-intro-note">A clearer first conversation starts with a good question.</p>
          </div>
          <div className="tools-grid">
            <ProjectPlanner />
            <WorkflowTimeAudit />
          </div>
        </div>
      </section>

      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
