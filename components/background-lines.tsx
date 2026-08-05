export default function BackgroundLines() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-normal">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00D563" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.08" />
          </linearGradient>
          <filter id="soften" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>

        {/* subtle background tint */}
        <rect width="100%" height="100%" fill="url(#fade)" opacity="0" />

        {/* curved lines */}
        <g fill="none" stroke="url(#lineGradient)" strokeWidth="3" filter="url(#soften)">
          <path d="M-100 120 C 300 220, 900 60, 1540 -40" />
          <path d="M-100 360 C 320 420, 920 260, 1540 120" />
          <path d="M-100 600 C 320 660, 980 520, 1540 360" />
          <path d="M-100 840 C 320 900, 980 760, 1540 600" />
        </g>
      </svg>
    </div>
  )
}


