import { Link } from "react-router-dom";

export default function NotFound() {
  return <section className="not-found section-pad"><div className="section-container"><p className="eyebrow"><span className="eyebrow-dot" />PAGE NOT FOUND</p><h1>That page isn’t here.</h1><p>Try returning to the portfolio and exploring the projects or service categories.</p><Link className="button button-primary" to="/">Back to the homepage <span aria-hidden="true">→</span></Link></div></section>;
}
