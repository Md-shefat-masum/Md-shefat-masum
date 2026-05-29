import { ArrowUpRight, Anchor, Radar, Route, ShipWheel, ExternalLink } from 'lucide-react';
import { featuredProjects, projectSignals } from '../../data/projectsContent';
import './FeaturedProjectsSection.css';

export default function FeaturedProjectsSection() {
  return (
    <section className="ocean-section projects-destinations" aria-labelledby="projects-title">
      <div className="depth-marker">-500m · Destinations</div>

      <div className="projects-destinations__bg" aria-hidden="true">
        <img className="projects-destinations__grid" src="./assets/projects/project-depth-grid.svg" alt="" />
        <img className="projects-destinations__route" src="./assets/projects/project-route-map.svg" alt="" />
        <span className="projects-destinations__glow projects-destinations__glow--one" />
        <span className="projects-destinations__glow projects-destinations__glow--two" />
        <span className="projects-destinations__submarine" />
      </div>

      <div className="ocean-section-inner projects-destinations__inner">
        <div className="projects-destinations__header">
          <div>
            <p className="section-kicker">Featured Projects / Destinations</p>
            <h2 id="projects-title" className="section-title">
              Mission docks built for <span className="gradient-text">real impact</span>
            </h2>
          </div>

          <div className="projects-destinations__radar hud-panel">
            <div className="projects-destinations__radar-ring">
              <Radar size={34} />
            </div>
            <div>
              <span className="hud-label"><span className="hud-dot" /> Project sonar</span>
              <strong>03 active docks</strong>
            </div>
          </div>
        </div>

        <div className="projects-destinations__signals" aria-label="Project summary">
          {projectSignals.map((signal) => (
            <div className="projects-destinations__signal hud-panel" key={signal.label}>
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
              <small>{signal.helper}</small>
            </div>
          ))}
        </div>

        <div className="projects-destinations__cards">
          {featuredProjects.map((project, index) => (
            <article className="project-dock hud-card" key={project.title} style={{ '--delay': `${index * 120}ms` }}>
              <div className="hud-card-content project-dock__content">
                <div className="project-dock__topline">
                  <span className="project-dock__dock"><Anchor size={14} /> {project.dock}</span>
                  <span className="project-dock__status">{project.status}</span>
                </div>

                <div className="project-dock__screen">
                  <img src={project.image} alt={`${project.title} preview`} />
                  <span className="project-dock__scan" />
                  <span className="project-dock__depth">{project.depth}</span>
                </div>

                <div className="project-dock__body">
                  <h3>{project.title}</h3>
                  <p className="project-dock__subtitle">{project.subtitle}</p>
                  <p>{project.description}</p>
                </div>

                <div className="project-dock__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a className="project-dock__link" href={project.link}>
                  View Mission <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-destinations__bottom hud-panel">
          <div className="projects-destinations__bottom-left">
            <ShipWheel size={22} />
            <div>
              <strong>Destination route active</strong>
              <span>Each dock represents a solved problem, a shipped system, and a new learning depth.</span>
            </div>
          </div>

          <a href="#journey" className="ghost-btn projects-destinations__next">
            Continue to Journey <Route size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
