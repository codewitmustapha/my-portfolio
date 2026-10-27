import { useMemo, useState } from "react";
import profileImage from "../assets/profile1.jpeg";
import { serviceCategories, portfolioProjects, processSteps, testimonials, about } from "../data/portfolio";
import ContactSectionComponent from "../components/ContactSection";
import { ProjectCard, SectionHeading, ServiceCard } from "../components/PortfolioUI";

const filters = ["All Projects", "Website Development", "AI Agents", "Workflow Automation"];

function HeroWorkflow() {
  return (
    <div className="hero-visual" aria-label="Illustration of a business inquiry moving through a website, AI agent and follow-up workflow">
      <div className="hero-visual-glow" />
      <div className="hero-visual-head"><span className="eyebrow-dot" /> SYSTEMS THAT WORK TOGETHER <span className="hero-visual-live">● Preview</span></div>
      <div className="hero-visual-title"><span>From first click</span><strong>to useful action.</strong></div>
      <div className="hero-flow-line" aria-hidden="true" />
      <div className="hero-flow-nodes">
        <div className="hero-flow-node"><span className="flow-icon flow-icon-browser">↗</span><span>Website</span><small>New inquiry</small></div>
        <div className="hero-flow-node hero-flow-node-active"><span className="flow-icon flow-icon-agent">✳</span><span>AI agent</span><small>Understands</small></div>
        <div className="hero-flow-node"><span className="flow-icon flow-icon-action">✓</span><span>Next step</span><small>Follow-up</small></div>
      </div>
      <div className="hero-visual-bottom"><span className="hero-status"><i /> One clear path, end to end</span><span className="hero-visual-id">FLOW / 001</span></div>
      <div className="hero-floating-card"><span className="floating-icon">↗</span><div><strong>Less busywork</strong><small>More time for real work</small></div><span className="floating-check">✓</span></div>
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
          <SectionHeading eyebrow="A little about me" title="Practical digital solutions, built around the way your business works." />
          <p className="about-lead">I’m Salawudeen Mustapha, a developer based in Lagos, Nigeria. I build websites, AI agents, and automated workflows that solve practical business problems.</p>
          <p className="about-body">From improving a customer’s first visit to connecting repetitive tasks behind the scenes, I focus on useful digital experiences that are clear to use and easier to manage.</p>
          <div className="about-facts">
            <div><span>BASED IN</span><strong>{about.location}</strong></div>
            <div><span>WORKING STYLE</span><strong>{about.workStyle}</strong></div>
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
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const visibleProjects = useMemo(() => activeFilter === "All Projects" ? portfolioProjects : portfolioProjects.filter((project) => project.category === activeFilter), [activeFilter]);

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="section-container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" />WEBSITE DEVELOPMENT <b>•</b> AI AGENTS <b>•</b> WORKFLOW AUTOMATION</p>
            <h1>Websites That Convert.<br /><span>AI That Automates.</span></h1>
            <p className="hero-description">I build modern websites, AI agents, and automated business workflows that help businesses attract customers, save time, and grow.</p>
            <p className="hero-description hero-description-secondary">From high-performing websites to intelligent AI solutions, I turn repetitive tasks into automated systems that work smarter for your business.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let's Work Together <span aria-hidden="true">↗</span></a>
              <a className="button button-quiet" href="#projects">Explore My Work <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-footnote"><span className="status-indicator" /> Lagos, Nigeria <span className="footnote-separator">·</span> Available for freelance projects</div>
          </div>
          <HeroWorkflow />
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
            <SectionHeading eyebrow="Selected projects" title="Built for real needs. Ready to explore." copy="A mix of published website work and clearly labeled AI and automation demos." />
            <span className="section-aside">WORK / DEMOS</span>
          </div>
          <div className="project-filters" role="group" aria-label="Filter projects by service category">
            {filters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? "filter-button is-active" : "filter-button"} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          {!visibleProjects.length && <p className="empty-state">No projects in this category yet.</p>}
        </div>
      </section>

      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSectionComponent />
    </>
  );
}
