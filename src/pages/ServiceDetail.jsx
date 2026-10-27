import { Link, useParams } from "react-router-dom";
import { aiAgentServiceGroups, serviceCategories, websiteDevelopmentServices, workflowAutomationServices, portfolioProjects } from "../data/portfolio";
import { ProjectCard, SectionHeading, WorkflowDiagram } from "../components/PortfolioUI";
import NotFound from "./NotFound";

const serviceContent = {
  "website-development": {
    items: websiteDevelopmentServices,
    intro: "Build a useful, clear web presence that supports how customers discover and choose your business.",
    related: ["imperium-art-decor", "darul-arqam-islamic-bookshop", "flowsync", "the-grange-ashford", "phone-repair-more", "best-server-iptv"],
  },
  "ai-agent-development": {
    groups: aiAgentServiceGroups,
    intro: "Give customers and teams a practical assistant for the questions and tasks they handle every day.",
    related: ["website-support-sales-agent", "whatsapp-telegram-assistant", "appointment-booking-system"],
  },
  "business-workflow-automation": {
    items: workflowAutomationServices,
    intro: "Connect the tools you already use and make repeatable business processes easier to run.",
    related: ["lead-crm-automation", "content-social-automation", "end-to-end-business-workflow"],
  },
};

function ServiceItems({ items }) {
  return <div className="service-detail-grid">{items.map((item, index) => <article className="service-detail-card" key={item.title}><span className="service-detail-index">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>;
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const category = serviceCategories.find((item) => item.slug === slug);
  const content = serviceContent[slug];
  if (!category || !content) return <NotFound />;
  const relatedProjects = portfolioProjects.filter((project) => content.related.includes(project.slug));

  return (
    <>
      <section className="detail-hero section-pad">
        <div className="section-container">
          <Link to="/#services" className="breadcrumb">← All service categories</Link>
          <p className="eyebrow"><span className="eyebrow-dot" />{category.shortLabel || category.title}</p>
          <h1>{category.title}</h1>
          <p className="detail-lead">{content.intro}</p>
          <div className="detail-hero-note"><span>Designed around your process</span><span>Clear scope · Practical build · Thoughtful handover</span></div>
        </div>
      </section>
      <section className="section-pad service-detail-section">
        <div className="section-container">
          <SectionHeading eyebrow="Service menu" title="A focused set of ways I can help." copy="Each engagement starts with your goals, existing tools, and the experience you want customers or staff to have." />
          {content.groups ? content.groups.map((group) => <div className="service-group" key={group.name}><div className="service-group-heading"><h2>{group.name}</h2><span>{group.services.length} service options</span></div><ServiceItems items={group.services} /></div>) : <ServiceItems items={content.items} />}
        </div>
      </section>
      <section className="section-pad workflow-explainer">
        <div className="section-container workflow-explainer-grid">
          <div><SectionHeading eyebrow="A sensible starting point" title="Make the process clearer before adding complexity." copy="We map the current experience, identify where effort is lost, then choose the smallest useful improvement. Integrations are scoped and tested before being described as live." /></div>
          <WorkflowDiagram steps={["Understand the need", "Choose the right solution", "Build and connect", "Test with real scenarios", "Deliver with guidance"]} />
        </div>
      </section>
      {relatedProjects.length > 0 && <section className="section-pad related-work-section"><div className="section-container"><SectionHeading eyebrow="Related work" title="Explore projects in this area." /><div className="project-grid related-project-grid">{relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>}
      <section className="detail-cta section-pad"><div className="section-container detail-cta-inner"><div><p className="eyebrow"><span className="eyebrow-dot" />NEXT STEP</p><h2>Have a challenge in mind?</h2><p>Share a little about your business and we can work out what fits.</p></div><Link className="button button-primary" to="/#contact">Let's Work Together <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
