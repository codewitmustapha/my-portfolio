import { Link, useParams } from "react-router-dom";
import { portfolioProjects } from "../data/portfolio";
import { Pill } from "../components/PortfolioUI";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = portfolioProjects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;

  const canVisit = Boolean(project.link && project.linkStatus !== "unverified");
  const linkNote = project.linkStatus === "unverified"
    ? "The previous external address could not be verified, so it is not presented as a confirmed live link."
    : !project.link
      ? "The source project URL was malformed, so a live-site link is not shown."
      : "";

  return (
    <>
      <section className="project-detail-hero section-pad">
        <div className="section-container">
          <Link to="/#projects" className="breadcrumb">← Back to selected website work</Link>
          <div className="project-detail-meta"><Pill>{project.kind}</Pill><span>{project.tags.join(" · ")}</span></div>
          <h1>{project.title}</h1>
          <p className="detail-lead">{project.description}</p>
          <div className="project-detail-image"><img src={project.image} alt={`${project.title} website screenshot`} /></div>
        </div>
      </section>
      <section className="project-story-section section-pad">
        <div className="section-container project-story-grid">
          <article><p className="eyebrow">PROJECT OVERVIEW</p><h2>A website shaped around its subject.</h2><p>{project.description}</p>{project.note && <aside className="project-note">{project.note}</aside>}</article>
          <article><p className="eyebrow">PROJECT DETAILS</p><ul className="feature-list">{project.features.map((feature) => <li key={feature}><span aria-hidden="true">—</span>{feature}</li>)}</ul></article>
        </div>
      </section>
      <section className="project-detail-footer section-pad">
        <div className="section-container project-detail-footer-inner">
          <Link className="text-link" to="/#projects">← Return to selected work</Link>
          {canVisit ? <a className="button button-secondary" href={project.link} target="_blank" rel="noopener noreferrer">Visit live site <span aria-hidden="true">↗</span></a> : <span className="unavailable-link-note">{linkNote}</span>}
          <Link className="button button-primary" to="/#contact">Let’s Work Together <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
