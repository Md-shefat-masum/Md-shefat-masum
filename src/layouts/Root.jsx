import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import OceanFooterSection from '../components/layout/OceanFooterSection.jsx'

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
    <div className="app-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <OceanFooterSection />
    </div>
  )
}
