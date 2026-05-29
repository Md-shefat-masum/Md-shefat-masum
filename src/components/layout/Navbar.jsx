import { useEffect, useState } from "react";
import { Anchor, Menu, X, Radio, Mail } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const current = navLinks
        .map((link) => {
          const section = document.querySelector(link.href);
          if (!section) return null;

          const rect = section.getBoundingClientRect();

          return {
            href: link.href,
            distance: Math.abs(rect.top - 120),
            visible: rect.top <= 180 && rect.bottom >= 180,
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.distance - b.distance);

      const visibleSection = current.find((item) => item.visible);

      if (visibleSection) {
        setActiveHash(visibleSection.href);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`ocean-navbar ${isScrolled ? "ocean-navbar--scrolled" : ""}`}>
      <div className="ocean-navbar__shell">
        <a className="ocean-navbar__brand" href="#home" onClick={closeMenu}>
          <span className="ocean-navbar__logo">
            <Anchor size={18} />
            <span>SM</span>
          </span>

          <span className="ocean-navbar__brand-text">
            <strong>Shefat OceanOS</strong>
            <small>Build · Solve · Dive</small>
          </span>
        </a>

        <nav className="ocean-navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={activeHash === link.href ? "is-active" : ""}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ocean-navbar__actions">
          <div className="ocean-navbar__signal" aria-label="System status online">
            <Radio size={15} />
            <span>Online</span>
          </div>

          <div className="ocean-navbar__socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              GH
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="mailto:hello@shefat.dev" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>

          <a className="ocean-navbar__cta" href="#contact">
            Let’s Connect
          </a>

          <button
            className="ocean-navbar__menu-btn"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`ocean-mobile-menu ${isOpen ? "is-open" : ""}`}>
        <div className="ocean-mobile-menu__panel">
          <div className="ocean-mobile-menu__top">
            <span className="hud-label">
              <span className="hud-dot"></span>
              Navigation System
            </span>
          </div>

          <nav className="ocean-mobile-menu__links" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                className={activeHash === link.href ? "is-active" : ""}
                href={link.href}
                onClick={closeMenu}
              >
                <span>0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="glow-btn ocean-mobile-menu__cta" href="#contact" onClick={closeMenu}>
            Start a Mission
          </a>
        </div>
      </div>
    </header>
  );
}