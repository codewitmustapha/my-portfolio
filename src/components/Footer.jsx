import { Link } from "react-router-dom";
import { contactLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-inner">
        <div className="footer-main">
          <Link to="/" className="brand-mark footer-brand" aria-label="codewitmustapha home"><span className="brand-bracket">&lt;</span><span className="brand-name">codewitmustapha</span><span className="brand-bracket">/&gt;</span></Link>
          <p>Websites, useful AI, and workflows—built around the way your business works.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/#services">Services</Link><Link to="/#projects">Selected work</Link><Link to="/#tools">Planning tools</Link><Link to="/#contact">Contact</Link>
        </nav>
        <div className="footer-socials" aria-label="Contact and social links">
          {contactLinks.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}<span aria-hidden="true">↗</span></a>)}
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} codewitmustapha</span><span>Lagos, Nigeria · Available for remote projects</span><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
