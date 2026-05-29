import Navbar from './components/layout/Navbar.jsx'
import HeroPortSection from './components/sections/HeroPortSection.jsx'
import AtAGlanceSection from './components/sections/AtAGlanceSection.jsx'
import TechStackSection from './components/sections/TechStackSection.jsx'
import FeaturedProjectsSection from './components/sections/FeaturedProjectsSection.jsx'
import JourneySection from './components/sections/JourneySection.jsx'
import AboutDeepCoreSection from './components/sections/AboutDeepCoreSection.jsx'
import ContactDeepStationSection from './components/sections/ContactDeepStationSection.jsx'
import TechStackTerminalSection from './components/sections/TechStackTerminalSection.jsx'
import OceanFooterSection from './components/layout/OceanFooterSection.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HeroPortSection />
        <AtAGlanceSection />
        <TechStackTerminalSection />
        {/* <TechStackSection /> */}
        <FeaturedProjectsSection />
        <JourneySection />
        <AboutDeepCoreSection />
        <ContactDeepStationSection />
      </main>
      <OceanFooterSection />
    </div>
  )
}
