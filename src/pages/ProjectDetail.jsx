import { Link, useParams } from "react-router-dom";
import { portfolioProjects } from "../data/portfolio";
import { Pill, WorkflowDiagram } from "../components/PortfolioUI";
import DemoExperience from "../components/DemoExperience";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = portfolioProjects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  const workflow = project.workflow || [];

  return (
    <>
      <section className="project-detail-hero section-pad">
        <div className="section-container">
          <Link to="/#projects" className="breadcrumb">← Back to selected projects</Link>
          <div className="project-detail-meta"><Pill tone={project.isDemo ? "demo" : "default"}>{project.kind}</Pill><span>{project.category}</span></div>
          <h1>{project.title}</h1>
          <p className="detail-lead">{project.description}</p>
          <div className="project-detail-tags">{project.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="project-detail-image">
            {project.image ? <img src={project.image} alt={`${project.title} project preview`} /> : <div className={`project-preview-art preview-${project.previewTone || "teal"}`}><div className="preview-topline"><span /><span /><span /><b>{project.previewLabel || "DEMO INTERFACE"}</b></div><div className="detail-preview-title">{project.previewHeadline || project.title}</div><div className="preview-flow">{(project.previewNodes || workflow).slice(0, 3).map((node, index) => <div className="preview-node-wrap" key={`${node}-${index}`}><div className={`preview-node ${index === 1 ? "preview-node-active" : ""}`}><i>{["↗", "✳", "✓"][index]}</i><span>{node}</span></div>{index < 2 && <span className="preview-connector" />}</div>)}</div></div>}
          </div>
        </div>
      </section>
      <section className="project-story-section section-pad">
        <div className="section-container project-story-grid">
          <article><p className="eyebrow"><span className="eyebrow-dot" />THE CHALLENGE</p><h2>{project.problem || "Project overview"}</h2><p>{project.solution || project.description}</p></article>
          <article><p className="eyebrow"><span className="eyebrow-dot" />WHAT IT COVERS</p><ul className="feature-list">{(project.features || project.tags || []).map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul><p className="business-value">{project.businessValue || "A clear, responsive experience focused on the needs described in the project brief."}</p></article>
        </div>
      </section>
      {workflow.length > 0 && <section className="workflow-section section-pad"><div className="section-container"><p className="eyebrow"><span className="eyebrow-dot" />HOW IT WORKS</p><h2>One clear flow, step by step.</h2><WorkflowDiagram steps={workflow} /></div></section>}
      {project.isDemo && <section className="demo-interaction-section section-pad"><div className="section-container"><div className="demo-heading"><div><p className="eyebrow"><span className="eyebrow-dot" />TRY THE CONCEPT</p><h2>Explore the demo.</h2><p>Everything below is a local interactive simulation. No customer data leaves your browser and no external integrations are connected.</p></div><Pill tone="demo">Simulation only</Pill></div><DemoExperience demoSlug={project.slug} /></div></section>}
      {project.slug === "whatsapp-telegram-assistant" && <section className="deployment-note-section"><div className="section-container"><aside className="deployment-note"><p className="eyebrow"><span className="eyebrow-dot" />LIVE DEPLOYMENT CONSIDERATIONS</p><p>A real rollout would need the appropriate WhatsApp Business or Telegram bot connection, secure webhooks, approved business information, and a tested hand-off path. This page has none of those integrations connected.</p></aside></div></section>}
      <section className="project-detail-footer section-pad"><div className="section-container project-detail-footer-inner"><Link className="text-link" to="/#projects">← Return to all projects</Link>{project.link && project.linkStatus !== "unverified" ? <a className="button button-secondary" href={project.link} target="_blank" rel="noreferrer">Visit live site <span aria-hidden="true">↗</span></a> : <span className="unavailable-link-note">{project.linkStatus === "unverified" ? "Existing external URL could not be verified here" : project.isDemo ? "Concept demonstration — no external service connected" : "Live link not available in the current source"}</span>}<Link className="button button-primary" to="/#contact">Let's Work Together <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
