import type { ReactNode } from 'react'

/** Compact Indian flag for location labels (inline SVG, no CDN). */
export function IndiaFlag({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`india-flag${className ? ` ${className}` : ''}`}
      viewBox="0 0 21 15"
      width="16"
      height="12"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="21" height="5" fill="#FF9933" />
      <rect y="5" width="21" height="5" fill="#FFFFFF" />
      <rect y="10" width="21" height="5" fill="#138808" />
      <circle cx="10.5" cy="7.5" r="2.15" fill="none" stroke="#000080" strokeWidth="0.55" />
      <circle cx="10.5" cy="7.5" r="0.35" fill="#000080" />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * Math.PI) / 6
        const x2 = 10.5 + Math.cos(angle) * 2.05
        const y2 = 7.5 + Math.sin(angle) * 2.05
        return (
          <line
            key={i}
            x1="10.5"
            y1="7.5"
            x2={x2}
            y2={y2}
            stroke="#000080"
            strokeWidth="0.35"
          />
        )
      })}
    </svg>
  )
}

/** Location text with a subtle India flag aligned beside it. */
export function LocationWithIndia({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={`location-with-india${className ? ` ${className}` : ''}`}>
      <IndiaFlag />
      <span>{children}</span>
    </span>
  )
}
