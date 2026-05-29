import { Activity, Circle, Mail, Terminal } from "lucide-react";
import DepthMarker from "../common/DepthMarker.jsx";
import { techStackTerminalContent } from "../../data/techStackTerminalContent.js";
import "./TechStackTerminalSection.css";

export default function TechStackTerminalSection() {
  const { depth, label, prompt, command, preface, topStatus, groups, footer } = techStackTerminalContent;

  return (
    <div className="ocean-section tech-terminal-section">
      <DepthMarker depth={depth} label={label} />

      <div className="tech-terminal-bg" aria-hidden="true">
        <div className="tech-terminal-grid" />
        <div className="tech-terminal-glow tech-terminal-glow--left" />
        <div className="tech-terminal-glow tech-terminal-glow--right" />
        <img className="tech-terminal-wave" src="/assets/skills/terminal-surface-wave.svg" alt="" />
        <img className="tech-terminal-dock" src="/assets/skills/terminal-dock-decor.svg" alt="" />
      </div>

      <div className="ocean-section-inner tech-terminal-inner">
        <div className="tech-terminal-headline">
          <div>
            <p className="section-kicker">Ship Systems / Tech Stack</p>
            <h2 className="section-title">
              Terminal <span className="gradient-text">skill map</span>
            </h2>
            <p className="section-text">
              A command-line inspired skill section that keeps the same ocean-tech vibe,
              but presents capabilities in a cleaner, more scannable terminal board.
            </p>
          </div>

          <div className="tech-terminal-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              GH
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              IN
            </a>
            <a href="mailto:hello@shefat.dev" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="tech-terminal-shell hud-card">
          <div className="hud-card-content tech-terminal-card-content">
            <div className="tech-terminal-topbar">
              <div className="tech-terminal-topbar__left">
                <div className="tech-terminal-lights" aria-hidden="true">
                  <span className="is-red" />
                  <span className="is-yellow" />
                  <span className="is-green" />
                </div>

                <div className="tech-terminal-title">
                  <span>{prompt}</span>
                  <i>›</i>
                  <strong>{command}</strong>
                </div>
              </div>

              <div className="tech-terminal-topbar__right">
                <span className="tech-terminal-status">
                  <Circle size={8} fill="currentColor" strokeWidth={0} />
                  {topStatus.signal}
                </span>
                <span>{topStatus.alerts}</span>
              </div>
            </div>

            <div className="tech-terminal-body">
              <div className="tech-terminal-preface">
                {preface.map((item) => (
                  <div key={item.key} className="tech-terminal-preface__row">
                    <span>{item.key}</span>
                    <p>{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="tech-terminal-groups">
                {groups.map((group) => (
                  <section key={group.title} className="tech-terminal-group">
                    <header className="tech-terminal-group__header">
                      <span>{group.title}</span>
                      <i />
                    </header>

                    <div className="tech-terminal-tags">
                      {group.items.map((item) => (
                        <div key={item} className="tech-terminal-tag">
                          <b>+</b>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <div className="tech-terminal-footer">
              <div className="tech-terminal-footer__left">
                <Activity size={16} />
                <span>{footer[0]}</span>
              </div>

              <div className="tech-terminal-footer__right">
                <Terminal size={15} />
                <span>{footer[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
