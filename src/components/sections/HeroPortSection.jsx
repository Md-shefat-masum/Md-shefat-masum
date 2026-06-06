import { Link } from 'react-router-dom';
import {
  Anchor,
  ArrowDownToLine,
  ArrowRight,
  Compass,
  Download,
  Mail,
  Radio,
  ShipWheel,
  Waves,
} from "lucide-react";
import "./HeroPortSection.css";

const missionItems = [
  { label: "Status", value: "Online", tone: "green" },
  { label: "Availability", value: "Open for New Opportunities", tone: "cyan" },
  { label: "Experience", value: "4+ Years", tone: "cyan" },
  { label: "Role", value: "Full-Stack Engineer", tone: "cyan" },
  { label: "Base", value: "Dhaka, Bangladesh", tone: "cyan" },
];

export default function HeroPortSection() {
  return (
    <section id="home" className="ocean-section hero-port-section" aria-labelledby="hero-title">
      <div className="depth-marker hero-depth">0m · Surface Port</div>

      <div className="hero-port-bg" aria-hidden="true">
        <div className="hero-bg-image" />
        <div className="hero-grid" />
        <div className="hero-light hero-light--left" />
        <div className="hero-light hero-light--right" />
        <span className="hero-bubble hero-bubble--one" />
        <span className="hero-bubble hero-bubble--two" />
        <span className="hero-bubble hero-bubble--three" />
      </div>

      <div className="ocean-section-inner hero-port-inner">
        <div className="hero-port-copy">
          <div className="hero-port-kicker">
            <span className="hud-dot" />
            <span>Port: Shefat-01</span>
            <span className="hero-kicker-separator" />
            <span>Weather 18°C</span>
          </div>

          <p className="section-kicker hero-system-label">System Online</p>

          <h1 className="display-title hero-title" id="hero-title">
            <span>Shefat</span>
            <span className="outline-text">Masum</span>
          </h1>

          <div className="hero-role-chip">
            <Waves size={18} />
            <span>Full-Stack Software Engineer</span>
          </div>

          <p className="section-text hero-description">
            I build scalable web applications and digital experiences, turning ideas into impactful solutions through clean code, modern systems, and mentoring.
          </p>

          <div className="hero-actions">
            <Link className="glow-btn" to="/projects">
              Explore My Work <ArrowRight size={18} />
            </Link>
            <a className="ghost-btn" href="./assets/hero/shefat-cv.pdf" download>
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="hero-social-row" aria-label="Social links">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              GH
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              IN
            </a>
            <a href="mailto:hello@shefat.dev" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-port-visual">
          <div className="hero-portrait-stage">
            <div className="hero-holo-core" aria-hidden="true">
              <div className="hero-holo-rings">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-holo-grid" />
              <div className="hero-holo-beam" />
              <div className="hero-holo-noise" />
              <div className="hero-holo-side-glow hero-holo-side-glow--left" />
              <div className="hero-holo-side-glow hero-holo-side-glow--right" />
            </div>

            <img className="hero-hud-frame" src="./assets/hero/hud-frame.svg" alt="" aria-hidden="true" />

            <div className="hero-holo-subject-wrap">
              <div className="hud-profile">
                {/* <img
                  className="hero-profile-image hero-profile-image--back "
                  src="./assets/hero/shefat_hero_for_hud.png"
                  alt=""
                  aria-hidden="true"
                /> */}

                <img
                  className="hero-profile-image hero-profile-image--main hud-profile__image"
                  src="./assets/hero/shefat_hero_for_hud.png"
                  alt="Shefat Masum portrait"
                />
              </div>
              {/* <img
                className="hero-profile-image hero-profile-image--back"
                src="./assets/hero/shefat-hero-fit.png"
                alt=""
                aria-hidden="true"
              />

              <img
                className="hero-profile-image hero-profile-image--main"
                src="./assets/hero/shefat-hero-fit.png"
                alt="Shefat Masum portrait"
              /> */}

              <div className="hero-hologram-overlay" aria-hidden="true" />
            </div>

            <div className="hero-holo-projection" aria-hidden="true">
              <span className="ring ring-a" />
              <span className="ring ring-b" />
              <span className="ring ring-c" />
              <span className="ring ring-d" />
            </div>
            <div className="hero-holo-data hero-holo-data--top" aria-hidden="true" />
            <div className="hero-holo-data hero-holo-data--mid" aria-hidden="true" />
            <div className="scan-line" aria-hidden="true" />
          </div>

          <aside className="hud-card hero-mission-card" aria-label="Current mission status">
            <div className="hud-card-content">
              <p className="hud-label"><span className="hud-dot" /> Current Mission</p>
              <h2>Build · Solve · Impact</h2>
              <div className="mission-list">
                {missionItems.map((item) => (
                  <div className="mission-row" key={item.label}>
                    <span>{item.label}</span>
                    <strong className={item.tone === "green" ? "is-green" : ""}>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* <div className="hero-stats-panel hud-panel">
          {heroStats.map(({ icon: Icon, value, label }) => (
            <article className="hero-stat" key={label}>
              <Icon size={28} />
              <div>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </article>
          ))}
        </div> */}
        <div className="scroll-to-dive-container">
          <Link className="scroll-to-dive" to="/#stats" aria-label="Scroll to next section">
            <span>Scroll to dive</span>
            <ArrowDownToLine size={18} />
          </Link>
        </div>
      </div>

      {/* <div className="hero-waterline" aria-hidden="true" /> */}
      <div className="hero-sea-floor" aria-hidden="true" />
    </section>
  );
}