import { Link } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Code2,
  Compass,
  Container,
  Database,
  GraduationCap,
  LayoutList,
  Radio,
  Rocket,
  ServerCog,
  ShipWheel,
  UsersRound,
  Waves,
} from 'lucide-react';
import { journeyContent } from '../../data/journeyContent';
import './JourneySection.css';

const segmentIconMap = [Code2, Database, ServerCog, GraduationCap, LayoutList, UsersRound];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

export default function JourneySection() {
  const sectionRef = useRef(null);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const frameRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const { kicker, subtitle, currentMission, stages } = journeyContent;

  const segmentIcons = useMemo(
    () => stages.slice(0, -1).map((_, index) => segmentIconMap[index] || ShipWheel),
    [stages]
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let latestProgress = 0;

    const calculateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;

      // Slower progression: progress starts after the section enters and ends late.
      const startPoint = viewport * 0.72;
      const endPoint = -rect.height + viewport * 0.34;
      const totalDistance = startPoint - endPoint;
      const travelled = startPoint - rect.top;

      latestProgress = clamp(travelled / totalDistance, 0, 1);
      targetRef.current = latestProgress;
    };

    const animate = () => {
      progressRef.current = lerp(progressRef.current, targetRef.current, 0.055);

      const nextProgress = progressRef.current;
      const nextActive = clamp(Math.round(nextProgress * (stages.length - 1)), 0, stages.length - 1);

      setProgress(nextProgress);
      setActiveIndex(nextActive);
      frameRef.current = requestAnimationFrame(animate);
    };

    calculateProgress();
    frameRef.current = requestAnimationFrame(animate);

    window.addEventListener('scroll', calculateProgress, { passive: true });
    window.addEventListener('resize', calculateProgress);

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [stages.length]);

  const progressPercent = `${progress * 100}%`;

  return (
    <section
      ref={sectionRef}
      className="ocean-section journey-section journey-section--scroll-track"
      id="journey"
      style={{ '--journey-progress': progressPercent }}
    >
      <div className="depth-marker">-1000m · Journey Route</div>

      <div className="journey-bg" aria-hidden="true">
        <img src="./assets/journey/journey-route-grid.svg" alt="" className="journey-bg__grid" />
        <img src="./assets/journey/journey-current-lines.svg" alt="" className="journey-bg__lines" />
        <span className="journey-bg__glow journey-bg__glow--one" />
        <span className="journey-bg__glow journey-bg__glow--two" />
        <span className="journey-bg__bubble journey-bg__bubble--one" />
        <span className="journey-bg__bubble journey-bg__bubble--two" />
        <span className="journey-bg__bubble journey-bg__bubble--three" />
      </div>

      <div className="ocean-section-inner journey-inner">
        <div className="journey-header">
          <div className="journey-header__copy">
            <p className="section-kicker">{kicker}</p>
            <h2 className="section-title">
              Scroll <span className="gradient-text">Journey Track</span>
            </h2>
            <p className="section-text">{subtitle}</p>
          </div>

          <div className="journey-command hud-card">
            <div className="hud-card-content">
              <div className="journey-command__top">
                <span className="hud-label">
                  <span className="hud-dot" />
                  {currentMission.label}
                </span>
                <Radio size={18} />
              </div>

              <h3>{currentMission.value}</h3>
              <div className="journey-command__meter">
                {Array.from({ length: 6 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>

              <div className="journey-command__meta">
                <span>Route status</span>
                <strong>ACTIVE</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="journey-scroll-map hud-card">
          <div className="hud-card-content journey-scroll-map__content">
            <div className="journey-map__topbar">
              <span>
                <Compass size={16} />
                Scroll Route / Career Depth Scanner
              </span>
              <small>Mission path: Designer → Present Status</small>
            </div>

            <div className="journey-track-layout">
              <aside className="journey-track" aria-label="Scroll progress track">
                <div className="journey-track__rail" />
                <div className="journey-track__fill" />

                <div className="journey-submarine-tracker" aria-hidden="true">
                  <div className="journey-submarine-svg">
                    <Container size={27} />
                    <span className="journey-submarine-window" />
                  </div>
                  <span className="journey-submarine-wave journey-submarine-wave--one" />
                  <span className="journey-submarine-wave journey-submarine-wave--two" />
                  <span className="journey-submarine-wave journey-submarine-wave--three" />
                </div>

                {stages.map((stage, index) => {
                  const isActive = activeIndex === index;
                  const isPassed = index < activeIndex;
                  return (
                    <span
                      key={stage.id}
                      className={`journey-track__node ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                      style={{ '--node-top': `${(index / (stages.length - 1)) * 100}%` }}
                    >
                      <span>{index + 1}</span>
                    </span>
                  );
                })}

                {segmentIcons.map((Icon, index) => {
                  const segmentProgress = progress * (stages.length - 1) - index;
                  const isActive = segmentProgress > 0 && segmentProgress < 1;
                  const isPassed = segmentProgress >= 1;

                  return (
                    <span
                      key={`segment-${index}`}
                      className={`journey-track__segment-icon ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                      style={{ '--segment-top': `${(((index + 0.5) / (stages.length - 1)) * 100).toFixed(3)}%` }}
                    >
                      <Icon size={15} />
                    </span>
                  );
                })}
              </aside>

              <div className="journey-steps">
                {stages.map((stage, index) => {
                  const isActive = activeIndex === index;
                  const isPassed = index < activeIndex;

                  return (
                    <article
                      key={stage.id}
                      className={`journey-step ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                    >
                      <div className="journey-step__connector" />

                      <div className="journey-step__year-block">
                        <span>{stage.node}</span>
                        <strong>{stage.year}</strong>
                      </div>

                      <div className="journey-step__main">
                        <div className="journey-step__topline">
                          <span>{stage.title}</span>
                          <small>{stage.depth}</small>
                        </div>
                        <h3>{stage.title}</h3>
                        <p>{stage.description}</p>
                      </div>

                      <div className="journey-step__status">
                        <span className="hud-dot" />
                        <strong>{isActive ? 'Active Now' : isPassed ? 'Passed' : stage.status}</strong>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="journey-footer-panel">
          <div>
            <span className="hud-label">
              <Waves size={14} />
              Next Depth
            </span>
            <strong>-2000m · Deep Core Identity Station</strong>
          </div>
          <Link to="/about" className="ghost-btn">
            Continue Dive <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
