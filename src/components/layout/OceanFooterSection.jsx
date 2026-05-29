import {
  footerContacts,
  footerIcons,
  footerIdentity,
  footerQuickLinks,
  footerServices,
  footerSocials,
  footerStats,
} from "../../data/footerContent";
import "./OceanFooterSection.css";

const { ArrowUpRight, Anchor, Radio } = footerIcons;

export default function OceanFooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="ocean-footer" id="footer">
      <div className="ocean-footer__bg" aria-hidden="true">
        <span className="ocean-footer__orb ocean-footer__orb--one" />
        <span className="ocean-footer__orb ocean-footer__orb--two" />
        <span className="ocean-footer__beam ocean-footer__beam--left" />
        <span className="ocean-footer__beam ocean-footer__beam--right" />
        <span className="ocean-footer__floor" />
      </div>

      <div className="ocean-container ocean-footer__inner">
        <div className="ocean-footer__topline">
          <span className="hud-label ocean-footer__depth">
            <span className="hud-dot" />
            {footerIdentity.depth}
          </span>

          <a className="ocean-footer__surface" href="#home">
            Back to Surface
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="ocean-footer__cta hud-card">
          <div className="ocean-footer__cta-content hud-card-content">
            <div>
              <span className="ocean-footer__mission">Final Transmission</span>
              <h2>Ready to launch the next mission?</h2>
              <p>
                Have a project idea, collaboration, or mentorship plan? Send the signal and
                let’s build something useful together.
              </p>
            </div>

            <div className="ocean-footer__cta-actions">
              <a className="glow-btn" href="mailto:hello@shefat.dev">
                Send Message
                <ArrowUpRight size={17} />
              </a>
              <a className="ghost-btn" href="#projects">
                View Projects
              </a>
            </div>
          </div>
        </div>

        <div className="ocean-footer__grid">
          <section className="ocean-footer__brand hud-panel">
            <div className="ocean-footer__brand-head">
              <span className="ocean-footer__logo">
                <Anchor size={20} />
                <strong>SM</strong>
              </span>

              <span className="ocean-footer__brand-title">
                <strong>{footerIdentity.brand}</strong>
                <small>{footerIdentity.role}</small>
              </span>
            </div>

            <p>{footerIdentity.description}</p>

            <div className="ocean-footer__status">
              <span>
                <Radio size={15} />
                {footerIdentity.status}
              </span>
              <em>{footerIdentity.tagline}</em>
            </div>

            <div className="ocean-footer__stats">
              {footerStats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="ocean-footer__column hud-panel">
            <h3>Navigation</h3>
            <nav aria-label="Footer navigation">
              {footerQuickLinks.map((link, index) => (
                <a href={link.href} key={link.href}>
                  <span>0{index + 1}</span>
                  {link.label}
                </a>
              ))}
            </nav>
          </section>

          <section className="ocean-footer__column hud-panel">
            <h3>Services</h3>
            <div className="ocean-footer__service-list">
              {footerServices.map((service) => {
                const Icon = service.icon;
                return (
                  <a href="#contact" key={service.label}>
                    <Icon size={17} />
                    {service.label}
                  </a>
                );
              })}
            </div>
          </section>

          <section className="ocean-footer__contact hud-panel">
            <h3>Signal Channels</h3>

            <div className="ocean-footer__contact-list">
              {footerContacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
                    <span>
                      <Icon size={17} />
                    </span>
                    <strong>{contact.label}</strong>
                    <small>{contact.value}</small>
                  </a>
                );
              })}
            </div>

            <div className="ocean-footer__socials">
              {footerSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <a href={social.href} key={social.label} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noreferrer" : undefined} aria-label={social.label}>
                    {Icon}
                  </a>
                );
              })}
            </div>
          </section>
        </div>

        <div className="ocean-footer__bottom">
          <p>© {year} {footerIdentity.name}. All rights reserved.</p>
          <span>Designed for deep portfolio exploration.</span>
          <a href="#home">Surface ↑</a>
        </div>
      </div>
    </footer>
  );
}
