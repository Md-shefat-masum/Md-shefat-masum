export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <header className="section-title">
      {kicker && <span className="hud-kicker">{kicker}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}
