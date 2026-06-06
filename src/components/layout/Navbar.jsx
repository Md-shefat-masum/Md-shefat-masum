import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Anchor, Menu, X, Radio, Mail } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const getNavClassName = ({ isActive }) => (isActive ? 'is-active' : '')

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={`ocean-navbar ${isScrolled ? 'ocean-navbar--scrolled' : ''}`}>
      <div className="ocean-navbar__shell">
        <Link className="ocean-navbar__brand" to="/" onClick={closeMenu}>
          <span className="ocean-navbar__logo">
            <Anchor size={18} />
            <span>SM</span>
          </span>

          <span className="ocean-navbar__brand-text">
            <strong>Shefat OceanOS</strong>
            <small>Build · Solve · Dive</small>
          </span>
        </Link>

        <nav className="ocean-navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} className={getNavClassName} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
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

          <Link className="ocean-navbar__cta" to="/contact" onClick={closeMenu}>
            Let’s Connect
          </Link>

          <button
            className="ocean-navbar__menu-btn"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`ocean-mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <div className="ocean-mobile-menu__panel">
          <div className="ocean-mobile-menu__top">
            <span className="hud-label">
              <span className="hud-dot"></span>
              Navigation System
            </span>
          </div>

          <nav className="ocean-mobile-menu__links" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                className={getNavClassName}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
              >
                <span>0{index + 1}</span>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link className="glow-btn ocean-mobile-menu__cta" to="/contact" onClick={closeMenu}>
            Start a Mission
          </Link>
        </div>
      </div>
    </header>
  )
}
