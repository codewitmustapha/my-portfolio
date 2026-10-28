import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./PortfolioUI";

export default function WorkflowShowcase({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [visibleIds, setVisibleIds] = useState(() => new Set());
  const [motionReady, setMotionReady] = useState(false);
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;

    setMotionReady(true);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id.replace("workflow-example-", "");
        setActiveId(id);
        setVisibleIds((current) => {
          if (current.has(id)) return current;
          const next = new Set(current);
          next.add(id);
          return next;
        });
      }
    }, { rootMargin: "-112px 0px -52% 0px", threshold: 0.01 });

    const cards = items.map((item) => document.getElementById(`workflow-example-${item.id}`)).filter(Boolean);
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (selected && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }, [selected]);

  const closeDialog = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setSelected(null);
  };

  return (
    <section className="section-pad workflow-showcase" id="real-world-examples">
      <div className="section-container">
        <SectionHeading
          eyebrow="Business problems, connected workflows"
          title="Start with the work that keeps repeating."
          copy="These workflow examples show how a business request can move between tools, decisions, and people. The right setup depends on your process; integrations are agreed and tested before they are described as live."
        />

        <nav className="workflow-example-nav" aria-label="Jump to a workflow example">
          {items.map((item, index) => (
            <a
              key={item.id}
              href={`#workflow-example-${item.id}`}
              className={`workflow-example-nav-link ${activeId === item.id ? "is-active" : ""}`}
              aria-current={activeId === item.id ? "location" : undefined}
              onClick={() => setActiveId(item.id)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>{item.navLabel}
            </a>
          ))}
        </nav>

        <div className={`workflow-showcase-list ${motionReady ? "workflow-showcase-motion-ready" : ""}`}>
          {items.map((item, index) => (
            <article
              className={`workflow-showcase-card ${activeId === item.id ? "is-active" : ""} ${!motionReady || visibleIds.has(item.id) ? "is-visible" : ""}`}
              id={`workflow-example-${item.id}`}
              key={item.id}
              style={{ animationDelay: `${index * 65}ms` }}
              aria-labelledby={`workflow-title-${item.id}`}
            >
              <div className="workflow-showcase-copy">
                <div className="workflow-showcase-meta">
                  <span className="workflow-showcase-index">0{index + 1}</span>
                  <span className="workflow-showcase-badge">Workflow example</span>
                </div>
                <h3 id={`workflow-title-${item.id}`}>{item.title}</h3>
                <p className="workflow-showcase-problem">{item.problem}</p>
                <p className="workflow-showcase-label">A possible flow</p>
                <ol className="workflow-showcase-steps">
                  {item.steps.map((step, stepIndex) => (
                    <li key={step}>
                      <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
                <p className="workflow-showcase-outcome"><strong>Why it helps</strong>{item.outcome}</p>
              </div>

              <figure className="workflow-showcase-figure">
                <button
                  className="workflow-image-button"
                  type="button"
                  onClick={() => setSelected(item)}
                  aria-label={`Open full-size workflow diagram: ${item.title}`}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="workflow-image-zoom" aria-hidden="true">Open diagram ↗</span>
                </button>
                <figcaption>{item.caption}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>

      <dialog
        className="workflow-image-dialog"
        ref={dialogRef}
        aria-label={selected ? `Full-size diagram: ${selected.title}` : "Full-size workflow diagram"}
        onClose={() => setSelected(null)}
        onClick={(event) => { if (event.target === event.currentTarget) closeDialog(); }}
      >
        {selected && (
          <div className="workflow-dialog-content">
            <div className="workflow-dialog-heading">
              <div><p className="eyebrow">Workflow example</p><h2>{selected.title}</h2></div>
              <button className="workflow-dialog-close" type="button" onClick={closeDialog} autoFocus aria-label="Close full-size workflow diagram">Close <span aria-hidden="true">×</span></button>
            </div>
            <img src={selected.image} alt={selected.alt} />
            <p>{selected.caption}</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
