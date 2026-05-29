export default function DepthMarker({ depth = '0m', label = 'Surface' }) {
  return (
    <aside className="depth-marker" aria-label={`Depth ${depth} ${label}`}>
      <span className="depth-dot" />
      <span className="depth-line" />
      <strong>{depth}</strong>
      <small>{label}</small>
    </aside>
  )
}
