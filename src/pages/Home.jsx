import HeroPortSection from '../components/sections/HeroPortSection.jsx'
import AtAGlanceSection from '../components/sections/AtAGlanceSection.jsx'
import TechStackTerminalSection from '../components/sections/TechStackTerminalSection.jsx'
import StaticPostsSection from '../components/sections/StaticPostsSection.jsx'
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection.jsx'
import JourneySection from '../components/sections/JourneySection.jsx'
import AboutDeepCoreSection from '../components/sections/AboutDeepCoreSection.jsx'
import ContactDeepStationSection from '../components/sections/ContactDeepStationSection.jsx'

export default function Home() {
  return (
    <>
      <HeroPortSection />
      <AtAGlanceSection />
      <TechStackTerminalSection />
      <StaticPostsSection />
      <FeaturedProjectsSection />
      <JourneySection />
      <AboutDeepCoreSection />
      <ContactDeepStationSection />
    </>
  )
}
