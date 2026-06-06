import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import OceanFooterSection from '../components/layout/OceanFooterSection.jsx'

const assetBackground = (path) => `url("./assets/${path}")`

const appAssetStyles = {
  '--asset-stats-fish-silhouette': assetBackground('stats/fish-silhouette.svg'),
  '--asset-hero-bg': assetBackground('hero/hero_bg.png'),
  '--asset-hero-port-bg': assetBackground('hero/hero-port-bg.svg'),
  '--asset-footer-wave-floor': assetBackground('footer/footer-wave-floor.svg'),
  '--asset-hero-water-surface': assetBackground('hero/water-surface.svg'),
  '--asset-stats-shallow-depth-grid': assetBackground('stats/shallow-depth-grid.svg'),
  '--asset-stats-underwater-particles': assetBackground('stats/underwater-particles.svg'),
}

export default function Root() {
  const location = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1))

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return (
    <div className="app-shell" style={appAssetStyles}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <OceanFooterSection />
    </div>
  )
}
