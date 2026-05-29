export default function OceanParticles() {
  return (
    <div className="ocean-particles" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  )
}
