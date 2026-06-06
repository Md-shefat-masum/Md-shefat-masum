import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Signal, Sparkles } from "lucide-react";
import DepthMarker from "../common/DepthMarker.jsx";
import { glanceBadges, glanceStats, missionSignals } from "../../data/atAGlanceContent.js";
import "./AtAGlanceSection.css";

export default function AtAGlanceSection() {
  return (
    <div id="stats" className="ocean-section at-glance-section">
      <DepthMarker depth="-50m" label="Key Highlights" />

      <div className="at-glance-bg" aria-hidden="true">
        <span className="at-glance-bg__glow at-glance-bg__glow--left" />
        <span className="at-glance-bg__glow at-glance-bg__glow--right" />
        <span className="at-glance-bubble at-glance-bubble--one" />
        <span className="at-glance-bubble at-glance-bubble--two" />
        <span className="at-glance-bubble at-glance-bubble--three" />
        <span className="at-glance-fish at-glance-fish--one" />
        <span className="at-glance-fish at-glance-fish--two" />
      </div>

      <div className="ocean-section-inner at-glance-inner">
        <div className="at-glance-header">
          <div>
            <p className="section-kicker">Dive Level 01 · Portfolio Signals</p>
            <h2 className="section-title">
              At a <span className="gradient-text">Glance</span>
            </h2>
          </div>

          <div className="at-glance-sonar" aria-label="Sonar signal active">
            <span className="at-glance-sonar__ring" />
            <span className="at-glance-sonar__ring at-glance-sonar__ring--two" />
            <span className="at-glance-sonar__core">
              <Gauge size={22} />
            </span>
          </div>
        </div>

        <div className="at-glance-layout">
          <aside className="at-glance-console hud-card">
            <div className="hud-card-content">
              <span className="hud-label">
                <span className="hud-dot" />
                Shallow Dive System
              </span>

              <h3>Quick identity scan from the surface.</h3>
              <p>
                A compact mission dashboard showing the most important numbers before
                visitors dive deeper into skills, projects, and journey.
              </p>

              <div className="at-glance-signal-list">
                {missionSignals.map((signal) => (
                  <div key={signal.label} className="at-glance-signal-row">
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                  </div>
                ))}
              </div>

              <Link className="at-glance-console__link" to="/#skills">
                Continue to Ship Systems <ArrowRight size={16} />
              </Link>
            </div>
          </aside>

          <div className="at-glance-main">
            <div className="at-glance-card-grid">
              {glanceStats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className={`at-glance-card at-glance-card--${item.tone}`}
                    key={item.id}
                    style={{ "--delay": `${index * 120}ms` }}
                  >
                    <div className="at-glance-card__scan" />
                    <div className="at-glance-card__top">
                      <span className="at-glance-card__icon">
                        <Icon size={30} />
                      </span>
                      <span className="at-glance-card__code">0{index + 1}</span>
                    </div>

                    <strong className="at-glance-card__value">{item.value}</strong>
                    <span className="at-glance-card__label">{item.label}</span>
                    <p>{item.description}</p>

                    <div className="at-glance-card__bar">
                      <span />
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="at-glance-bottom-panel">
              <div className="at-glance-route">
                <span className="at-glance-route__dot" />
                <span className="at-glance-route__line" />
                <span className="at-glance-route__dot" />
                <span className="at-glance-route__line" />
                <span className="at-glance-route__dot" />
              </div>

              {glanceBadges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <div className="at-glance-badge" key={badge.label}>
                    <Icon size={19} />
                    <span>{badge.label}</span>
                    <strong>{badge.value}</strong>
                  </div>
                );
              })}

              <div className="at-glance-live">
                <Signal size={18} />
                <span>Live Signal</span>
                <strong>Online</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="at-glance-depth-strip" aria-hidden="true">
          <Sparkles size={15} />
          <span>Shallow zone unlocked</span>
          <span>Next: -200m Ship Systems</span>
        </div>
      </div>
    </div>
  );
}
