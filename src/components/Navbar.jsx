import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Services", to: "/#services" },
  { label: "Solutions", to: "/services/business-workflow-automation#real-world-examples", solution: true },
  { label: "Selected work", to: "/#projects" },
  { label: "Tools", to: "/#tools" },
  { label: "Process", to: "/#process" },
  { label: "About", to: "/#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  return (
    <header className={`site-header ${location.pathname !== "/" ? "site-header-solid" : ""}`}>
      <div className="nav-wrap">
        <Link to="/" className="brand-mark" aria-label="codewitmustapha home" onClick={close}>
          <span className="brand-bracket">&lt;</span>
          <span className="brand-name">codewitmustapha</span>
          <span className="brand-bracket">/&gt;</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
              <Link key={item.label} to={item.to} onClick={close} className="nav-link" aria-current={item.solution && location.pathname === "/services/business-workflow-automation" ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <Link to="/#contact" className="nav-cta" onClick={close}>
            Let's work together <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
