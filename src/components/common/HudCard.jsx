export default function HudCard({ children, className = '' }) {
  return <div className={`hud-card ${className}`}>{children}</div>
}
