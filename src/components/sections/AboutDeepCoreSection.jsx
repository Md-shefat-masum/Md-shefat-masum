import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Compass,
  Cpu,
  Radio,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Target,
  Waves,
} from "lucide-react";
import { aboutContent } from "../../data/aboutContent";
import "./AboutDeepCoreSection.css";

const valueIcons = [BrainCircuit, Cpu, Sparkles, ShieldCheck];

export default function AboutDeepCoreSection() {
  const { kicker, subtitle, intro, mission, values, radarStats, identitySignals } = aboutContent;

  return (
    <div id="about" className="ocean-section about-core-section">
      <div className="depth-marker">-2000m · Deep Core</div>

      <div className="about-core-bg" aria-hidden="true">
        <img src="./assets/about/deep-core-grid.svg" alt="" className="about-core-bg__grid" />
        <img src="./assets/about/core-current-lines.svg" alt="" className="about-core-bg__lines" />
        <span className="about-core-bg__glow about-core-bg__glow--one" />
        <span className="about-core-bg__glow about-core-bg__glow--two" />
        <span className="about-core-bg__bubble about-core-bg__bubble--one" />
        <span className="about-core-bg__bubble about-core-bg__bubble--two" />
        <span className="about-core-bg__bubble about-core-bg__bubble--three" />
      </div>

      <div className="ocean-section-inner about-core-inner">
        <div className="about-core-header">
          <div>
            <p className="section-kicker">{kicker}</p>
            <h2 className="section-title">
              Deep <span className="gradient-text">Core</span> Identity
            </h2>
            <p className="section-text">{subtitle}</p>
          </div>

          <div className="about-core-status hud-panel">
            <span className="hud-label">
              <span className="hud-dot" /> Identity Verified
            </span>
            <strong>CORE ONLINE</strong>
          </div>
        </div>

        <div className="about-core-grid">
          <article className="about-core-profile hud-card">
            <div className="hud-card-content about-core-profile__content">
              <div className="about-core-profile__visual">
                <div className="about-core-profile__badge about-core-profile__badge--top">
                  <ScanFace size={15} /> ID : SHEFAT
                </div>

                <div className="about-core-profile__frame">
                  <span className="about-core-profile__corner about-core-profile__corner--tl" />
                  <span className="about-core-profile__corner about-core-profile__corner--tr" />
                  <span className="about-core-profile__corner about-core-profile__corner--bl" />
                  <span className="about-core-profile__corner about-core-profile__corner--br" />

                  <div className="about-core-profile__chamber">
                    <div className="about-core-profile__chamber-grid" />
                    <div className="about-core-profile__halo" />
                    <div className="about-core-profile__beam about-core-profile__beam--left" />
                    <div className="about-core-profile__beam about-core-profile__beam--right" />
                    <div className="about-core-profile__projector" />
                    <div className="about-core-profile__portrait-wrap">
                      <img src="./assets/about/shefat-core-portrait.png" alt="Shefat Masum" />
                      <span className="about-core-profile__portrait-glow" />
                    </div>
                    <div className="about-core-profile__scan" />
                  </div>
                </div>

                <div className="about-core-profile__badge about-core-profile__badge--bottom">
                  <Radio size={15} /> SIGNAL CLEAR
                </div>
              </div>

              <div className="about-core-profile__copy">
                <span className="hud-label">
                  <span className="hud-dot" /> Who Am I
                </span>
                <h3>Engineer. Mentor. Builder.</h3>
                <p>{intro}</p>
              </div>
            </div>
          </article>

          <article className="about-core-command hud-card">
            <div className="hud-card-content">
              <div className="about-core-command__top">
                <span className="hud-label">
                  <Target size={15} /> {mission.label}
                </span>
                <Compass size={20} />
              </div>

              <h3>{mission.value}</h3>

              <div className="about-core-values">
                {values.map((item, index) => {
                  const Icon = valueIcons[index] || Sparkles;
                  return (
                    <div className="about-core-value" key={item.label}>
                      <span>
                        <Icon size={18} />
                      </span>
                      <div>
                        <strong>{item.label}</strong>
                        <small>{item.detail}</small>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>

          <aside className="about-core-radar hud-card">
            <div className="hud-card-content about-core-radar__content">
              <div className="about-core-radar__top">
                <span className="hud-label">
                  <Activity size={15} /> Impact Radar
                </span>
                <small>LIVE</small>
              </div>

              <div className="about-core-radar__screen">
                <img src="./assets/about/core-radar.svg" alt="" />
                <span className="about-core-radar__sweep" />
                <span className="about-core-radar__center" />
              </div>

              <div className="about-core-radar__stats">
                {radarStats.map((stat) => (
                  <div key={stat.label}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <aside className="about-core-signals hud-card">
            <div className="hud-card-content">
              <span className="hud-label">
                <Waves size={15} /> Identity Signals
              </span>

              <div className="about-core-signal-list">
                {identitySignals.map((signal) => (
                  <div className="about-core-signal" key={signal.label}>
                    <small>{signal.label}</small>
                    <strong>{signal.value}</strong>
                  </div>
                ))}
              </div>

              <Link className="about-core-next ghost-btn" to="/contact">
                Dive to Contact <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
