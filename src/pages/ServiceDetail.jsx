import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { aiAgentExamples, aiAgentServiceGroups, serviceCategories, websiteDevelopmentServices, workflowAutomationServices, workflowExamples, workflowVisualExamples, portfolioProjects } from "../data/portfolio";
import { ProjectCard, SectionHeading, SolutionExampleGrid, WorkflowDiagram } from "../components/PortfolioUI";
import WorkflowShowcase from "../components/WorkflowShowcase";
import NotFound from "./NotFound";

const serviceContent = {
  "website-development": {
    items: websiteDevelopmentServices,
    intro: "Build a useful, clear web presence that supports how customers discover and choose your business.",
    related: ["imperium-art-decor", "darul-arqam-islamic-bookshop", "flowsync"],
    toolHref: "/#project-planner",
    toolLabel: "Use the project planner",
  },
  "ai-agent-development": {
    groups: aiAgentServiceGroups,
    examples: {
      items: aiAgentExamples,
      eyebrow: "Customer problems, practical AI support",
      title: "Help customers get answers and move forward.",
      copy: "These examples show practical ways AI can help with customer questions and sales follow-up—not completed client work. People approve information, make decisions, and handle enquiries that need a person.",
    },
    intro: "Support customer questions, organize enquiries, and guide each request toward a useful next step—with people in control.",
    note: "Start with the customer or team problem. AI is used only where it helps; approved information, privacy, channel access, and human review are agreed for the specific process.",
    toolHref: "/#project-planner",
    toolLabel: "Plan a customer-support solution",
  },
  "business-workflow-automation": {
    items: workflowAutomationServices,
      examples: {
        items: workflowExamples,
      eyebrow: "More everyday workflows",
      title: "Other repeat tasks you can simplify.",
      copy: "These additional examples show possible uses for automation. The apps, approvals, and messages are selected for the process and tested before activation.",
    },
    intro: "Connect the tools you already use and make repeatable business processes easier to run.",
    toolHref: "/#workflow-audit",
    toolLabel: "Run the workflow time audit",
  },
};

function ServiceItems({ items }) {
  return <div className="service-detail-grid">{items.map((item, index) => <article className="service-detail-card" key={item.title}><span className="service-detail-index">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>;
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const category = serviceCategories.find((item) => item.slug === slug);
  const content = serviceContent[slug];

  useEffect(() => {
    if (!location.hash) return undefined;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (!target) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  if (!category || !content) return <NotFound />;
  const relatedProjects = content.related ? portfolioProjects.filter((project) => content.related.includes(project.slug)) : [];

  return (
    <>
      <section className="detail-hero section-pad">
        <div className="section-container">
          <Link to="/#services" className="breadcrumb">← All service categories</Link>
          <p className="eyebrow">{category.shortLabel || category.title}</p>
          <h1>{category.title}</h1>
          <p className="detail-lead">{content.intro}</p>
          <div className="detail-hero-note"><span>Designed around your process</span><span>Clear scope · Practical build · Thoughtful handover</span></div>
          {content.note && <p className="service-accuracy-note">{content.note}</p>}
          {content.examples && <a className="detail-example-link" href="#real-world-examples">See practical examples <span aria-hidden="true">↓</span></a>}
        </div>
      </section>
      {slug === "business-workflow-automation" && <WorkflowShowcase items={workflowVisualExamples} />}
      {content.examples && slug === "business-workflow-automation" ? (
        <details className="more-workflow-examples">
          <summary>Explore eight more everyday workflow examples</summary>
          <SolutionExampleGrid {...content.examples} id="more-workflow-examples" />
        </details>
      ) : content.examples && <SolutionExampleGrid {...content.examples} />}
      <section className="section-pad service-detail-section">
        <div className="section-container">
          <SectionHeading eyebrow="Service menu" title="A focused set of ways I can help." copy="Each engagement starts with your goals, existing tools, and the experience you want customers or staff to have." />
          {content.groups ? content.groups.map((group) => <div className="service-group" key={group.name}><div className="service-group-heading"><h2>{group.name}</h2><span>{group.services.length} service options</span></div><ServiceItems items={group.services} /></div>) : <ServiceItems items={content.items} />}
        </div>
      </section>
      <section className="section-pad workflow-explainer">
        <div className="section-container workflow-explainer-grid">
          <div><SectionHeading eyebrow="A sensible starting point" title="Make the process clearer before adding complexity." copy="Map the current experience, identify where effort is lost, then choose the smallest useful improvement. Integrations are scoped and tested before being described as live." /></div>
          <WorkflowDiagram steps={["Understand the need", "Choose the right solution", "Build and connect", "Test with real scenarios", "Deliver with guidance"]} />
        </div>
      </section>
      <section className="service-tool-cta section-pad">
        <div className="section-container service-tool-cta-inner"><div><p className="eyebrow">A useful first step</p><h2>Start with your actual process.</h2><p>Use a short planning tool to organize the questions before deciding what to build.</p></div><Link className="button button-primary" to={content.toolHref}>{content.toolLabel} <span aria-hidden="true">↗</span></Link></div>
      </section>
      {relatedProjects.length > 0 && <section className="section-pad related-work-section"><div className="section-container"><SectionHeading eyebrow="Related website work" title="Explore projects in this area." /><div className="project-grid related-project-grid">{relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>}
      <section className="detail-cta section-pad"><div className="section-container detail-cta-inner"><div><p className="eyebrow">NEXT STEP</p><h2>Have a challenge in mind?</h2><p>Share a little about your business and we can work out what fits.</p></div><Link className="button button-primary" to="/#contact">Let’s Work Together <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
