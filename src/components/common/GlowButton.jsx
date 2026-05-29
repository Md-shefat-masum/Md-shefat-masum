import { ArrowUpRight } from 'lucide-react'

export default function GlowButton({ children, variant = 'primary', href = '#', icon = true }) {
  return (
    <a className={`glow-button glow-button--${variant}`} href={href}>
      <span>{children}</span>
      {icon && <ArrowUpRight size={18} />}
    </a>
  )
}
