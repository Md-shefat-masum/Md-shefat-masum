import { Cpu, Database, Gauge, Layers, Radio, Server, ShieldCheck, ShipWheel, Zap } from 'lucide-react';
import { techStackContent } from '../../data/techStackContent';
import './TechStackSection.css';

const categoryIcons = {
  frontend: Layers,
  backend: Server,
  database: Database,
  devops: ShipWheel,
};

export default function TechStackSection() {
  const { depth, kicker, title, intro, systemStatus, categories } = techStackContent;

  return (
    <div className="ocean-section tech-stack-section">
      <div className="depth-marker">{depth}</div>

      <div className="tech-stack-bg" aria-hidden="true">
        <img src="/assets/skills/ship-systems-grid.svg" alt="" className="tech-grid" />
        <img src="/assets/skills/system-routes.svg" alt="" className="tech-routes" />
        <span className="tech-glow tech-glow--one" />
        <span className="tech-glow tech-glow--two" />
      </div>

      <div className="ocean-section-inner tech-stack-inner">
        <div className="tech-stack-header">
          <div>
            <p className="section-kicker">{kicker}</p>
            <h2 className="section-title">
              Ship systems <span className="gradient-text">online</span>
            </h2>
            <p className="section-text tech-stack-lead">{intro}</p>
          </div>

          <aside className="hud-card tech-command-card" aria-label="System status panel">
            <div className="hud-card-content">
              <span className="hud-label">
                <span className="hud-dot" /> Control Room
              </span>
              <h3>{title}</h3>
              <div className="tech-status-list">
                {systemStatus.map((item) => (
                  <div key={item.label} className="tech-status-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="tech-grid-layout">
          <div className="tech-radar-panel hud-card">
            <div className="hud-card-content">
              <span className="hud-label">
                <Radio size={14} /> System Radar
              </span>
              <div className="tech-radar">
                <span className="tech-radar__ring" />
                <span className="tech-radar__ring tech-radar__ring--two" />
                <span className="tech-radar__sweep" />
                <span className="tech-radar__dot tech-radar__dot--one" />
                <span className="tech-radar__dot tech-radar__dot--two" />
                <span className="tech-radar__dot tech-radar__dot--three" />
                <Cpu className="tech-radar__icon" size={42} />
              </div>
              <div className="tech-radar-meta">
                <span>Frontend</span>
                <span>Backend</span>
                <span>Database</span>
                <span>Deploy</span>
              </div>
            </div>
          </div>

          <div className="tech-cards">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id] || ShieldCheck;

              return (
                <article key={category.id} className={`tech-card tech-card--${category.id}`}>
                  <div className="tech-card__top">
                    <div className="tech-card__icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3>{category.label}</h3>
                      <p>{category.subtitle}</p>
                    </div>
                  </div>

                  <div className="tech-card__progress" aria-label={`${category.label} ${category.progress}%`}>
                    <span style={{ width: `${category.progress}%` }} />
                  </div>

                  <div className="tech-card__items">
                    {category.items.map((item) => (
                      <div key={item.name} className="tech-chip">
                        <span>{item.short}</span>
                        <div>
                          <strong>{item.name}</strong>
                          <small>{item.level}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="tech-bottom-strip hud-panel">
          <div className="tech-bottom-strip__item">
            <Gauge size={18} />
            <span>Performance-first builds</span>
          </div>
          <div className="tech-bottom-strip__item">
            <ShieldCheck size={18} />
            <span>Secure API architecture</span>
          </div>
          <div className="tech-bottom-strip__item">
            <Zap size={18} />
            <span>Fast deployment workflow</span>
          </div>
        </div>
      </div>
    </div>
  );
}
