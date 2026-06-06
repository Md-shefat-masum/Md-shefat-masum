import { ArrowUpRight, BookOpen, FileCode2, RadioTower } from 'lucide-react'
import { staticPosts } from '../../data/staticPosts.js'
import './StaticPostsSection.css'

export default function StaticPostsSection() {
  return (
    <section id="static-posts" className="ocean-section static-posts" aria-labelledby="static-posts-title">
      <div className="depth-marker">-420m · Field Notes</div>

      <div className="static-posts__bg" aria-hidden="true">
        <span className="static-posts__glow static-posts__glow--one" />
        <span className="static-posts__glow static-posts__glow--two" />
        <span className="static-posts__signal" />
      </div>

      <div className="ocean-section-inner static-posts__inner">
        <div className="static-posts__header">
          <div>
            <p className="section-kicker">Independent HTML Posts / Field Notes</p>
            <h2 id="static-posts-title" className="section-title">
              Manually curated <span className="gradient-text">deep-dive logs</span>
            </h2>
            <p className="static-posts__intro">
              Standalone HTML articles published directly from the portfolio archive. Each note opens as an
              independent page in a new tab.
            </p>
          </div>

          <div className="static-posts__summary hud-panel">
            <div className="static-posts__summary-icon">
              <RadioTower size={28} />
            </div>
            <div>
              <span className="hud-label"><span className="hud-dot" /> Manual feed online</span>
              <strong>{String(staticPosts.length).padStart(2, '0')} field note{staticPosts.length === 1 ? '' : 's'}</strong>
            </div>
          </div>
        </div>

        <div className="static-posts__cards">
          {staticPosts.map((post, index) => (
            <article className="static-post-card hud-card" key={post.slug} style={{ '--delay': `${index * 120}ms` }}>
              <div className="hud-card-content static-post-card__content">
                <div className="static-post-card__media">
                  <img src={post.thumbnail} alt={`${post.title} thumbnail`} loading="lazy" />
                  <span className="static-post-card__scan" />
                  <span className="static-post-card__type"><FileCode2 size={14} /> Static HTML</span>
                </div>

                <div className="static-post-card__meta">
                  <span>{post.category}</span>
                  <span><BookOpen size={14} /> Independent post</span>
                </div>

                <div className="static-post-card__body">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>

                <a
                  className="static-post-card__link"
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Field Note <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
