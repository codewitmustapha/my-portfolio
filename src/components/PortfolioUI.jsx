import { Link } from "react-router-dom";

export function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

export function ServiceCard({ category, index }) {
  return (
    <article className="service-card">
      <div className="service-card-top"><span className="service-number">0{index + 1}</span><span className="service-arrow" aria-hidden="true">↗</span></div>
      <p className="service-kicker">{category.shortLabel || category.title}</p>
      <h3>{category.title}</h3>
      <p className="service-summary">{category.summary}</p>
      <div className="service-card-bottom">
        <span>{category.cardNote || "Service detail"}</span>
        <Link to={`/services/${category.slug}`} aria-label={`Explore ${category.title}`}>Explore category <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/projects/${project.slug}`} className="project-visual-link" aria-label={`View ${project.title} project details`}>
        <div className="project-visual">
          <img src={project.image} alt={`${project.title} ${project.kind === "Concept Project" ? "interface concept" : "website"} screenshot`} loading="lazy" />
          <span className={`project-kind ${project.kind === "Concept Project" ? "project-kind-concept" : ""}`}>{project.kind}</span>
        </div>
      </Link>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.tags.join(" · ")}</span><span className="meta-divider">/</span><span>{project.kind}</span></div>
        <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.description}</p>
        <div className="project-feature-list">{project.features.slice(0, 2).map((feature) => <span key={feature}>{feature}</span>)}</div>
        <div className="project-card-actions">
          <Link to={`/projects/${project.slug}`} className="text-link">View project <span aria-hidden="true">→</span></Link>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link-muted">{project.kind === "Concept Project" ? "View concept" : "Live site"} <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
    </article>
  );
}

export function WorkflowDiagram({ steps = [] }) {
  return (
    <ol className="workflow-diagram" aria-label="Workflow steps">
      {steps.map((step, index) => (
        <li className="workflow-step" key={`${step}-${index}`}>
          <span className="workflow-step-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="workflow-step-name">{step}</span>
          {index < steps.length - 1 && <span className="workflow-step-line" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

export function SolutionExampleGrid({ items = [], eyebrow, title, copy, id = "real-world-examples" }) {
  return (
    <section className="section-pad solution-examples" id={id}>
      <div className="section-container">
        <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
        <div className="solution-example-grid">
          {items.map((example, index) => (
            <article className="solution-example-card" key={example.title}>
              <div className="solution-example-meta">
                <span className="solution-example-number">0{index + 1}</span>
                <span className="solution-example-badge">Illustrative example</span>
              </div>
              <h3>{example.title}</h3>
              <p className="solution-example-situation">{example.situation}</p>
              <p className="solution-example-label">Typical flow</p>
              <ol className="solution-example-steps">
                {example.steps.map((step, stepIndex) => (
                  <li key={step}>
                    <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
              <p className="solution-example-outcome"><strong>What this helps with</strong>{example.helpsWith}</p>
              <p className="solution-example-note">{example.scopeNote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pill({ children, tone = "default" }) {
  return <span className={`pill pill-${tone}`}>{children}</span>;
}
