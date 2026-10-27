import { Link } from "react-router-dom";

export function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

export function ServiceCard({ category, index }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-number">0{index + 1}</span>
        <span className="service-arrow" aria-hidden="true">↗</span>
      </div>
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

function PreviewArt({ project }) {
  const labels = project.previewNodes || ["Capture", "Process", "Connect"];
  return (
    <div className={`project-preview-art preview-${project.previewTone || "teal"}`} aria-hidden="true">
      <div className="preview-topline"><span /><span /><span /><b>{project.previewLabel || "WORKFLOW PREVIEW"}</b></div>
      <div className="preview-flow">
        {labels.slice(0, 3).map((label, index) => (
          <div className="preview-node-wrap" key={`${label}-${index}`}>
            <div className={`preview-node ${index === 1 ? "preview-node-active" : ""}`}>
              <i>{["↗", "✳", "✓"][index]}</i><span>{label}</span>
            </div>
            {index < Math.min(labels.length, 3) - 1 && <span className="preview-connector" />}
          </div>
        ))}
      </div>
      <div className="preview-foot"><span className="preview-pulse" /> Interactive concept <span className="preview-chip">Local demo</span></div>
    </div>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/projects/${project.slug}`} className="project-visual-link" aria-label={`View ${project.title} project details`}>
        <div className="project-visual">
          {project.image ? (
            <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
          ) : (
            <PreviewArt project={project} />
          )}
          <span className={`project-kind ${project.isDemo ? "project-kind-demo" : ""}`}>{project.kind}</span>
        </div>
      </Link>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.category}</span><span className="meta-divider">/</span><span>{project.tags?.slice(0, 2).join(" · ")}</span></div>
        <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.description}</p>
        {project.features?.length > 0 && <div className="project-feature-list">{project.features.slice(0, 2).map((feature) => <span key={feature}>{feature}</span>)}</div>}
        <div className="project-card-actions">
          <Link to={`/projects/${project.slug}`} className="text-link">{project.isDemo ? "Explore demo" : "View project"}<span aria-hidden="true"> →</span></Link>
          {project.link && project.linkStatus !== "unverified" && <a href={project.link} target="_blank" rel="noreferrer" className="text-link-muted">Live site <span aria-hidden="true">↗</span></a>}
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

export function Pill({ children, tone = "default" }) {
  return <span className={`pill pill-${tone}`}>{children}</span>;
}
