"use client"

import { useEffect, useRef, useState, type RefObject } from "react"
import { Facebook, Instagram, Mail, Phone, Smartphone, type LucideIcon } from "lucide-react"
import WhatsAppGlyph from "@/components/whatsapp-glyph"

const HEADER_H = 116
const GREEN = "#00D563"

type Glyph = LucideIcon | typeof WhatsAppGlyph

// Order matters: landscape puts [0,2,3] left and [1,4,5] right; portrait puts [0,1,2] on top
const CHANNELS: { label: string; Icon: Glyph }[] = [
  { label: "WhatsApp", Icon: WhatsAppGlyph },
  { label: "Instagram", Icon: Instagram },
  { label: "Messenger", Icon: Facebook },
  { label: "Voice", Icon: Phone },
  { label: "RCS", Icon: Smartphone },
  { label: "Email", Icon: Mail },
]

type Node = { x: number; y: number; channel: number; path: string }
type Layout = {
  w: number
  h: number
  hub: { x: number; y: number }
  text: { rx: number; ry: number }
  rings: number[]
  nodeR: number
  nodes: Node[]
}

function curveTo(x: number, y: number, hx: number, hy: number) {
  const mx = (x + hx) / 2
  const my = (y + hy) / 2
  const dx = hx - x
  const dy = hy - y
  // bend every link the same way so the network reads as a gentle swirl into the core
  const k = 0.2
  return `M${x} ${y} Q${mx - dy * k} ${my + dx * k} ${hx} ${hy}`
}

function computeLayout(w: number, h: number, c: DOMRect, root: DOMRect): Layout {
  const left = c.left - root.left
  const right = c.right - root.left
  const top = c.top - root.top
  const bottom = c.bottom - root.top
  const hub = { x: (left + right) / 2, y: (top + bottom) / 2 }
  const nodeR = w < 640 ? 22 : 28
  const need = nodeR * 2 + 28
  const placed: Omit<Node, "path">[] = []

  const gutterL = left
  const gutterR = w - right
  if (Math.min(gutterL, gutterR) >= need + 24) {
    const t = HEADER_H + 40
    const b = h - 40
    const ys = [0.16, 0.5, 0.84].map((f) => t + (b - t) * f)
    const jitter = Math.min(gutterL * 0.16, 48)
    const xl = gutterL / 2
    const xr = w - gutterR / 2
    ;[0, 2, 3].forEach((channel, i) => placed.push({ x: xl + (i === 1 ? -jitter : jitter), y: ys[i], channel }))
    ;[1, 4, 5].forEach((channel, i) => placed.push({ x: xr + (i === 1 ? jitter : -jitter), y: ys[i] + 14, channel }))
  } else {
    const xs = [0.2, 0.5, 0.8]
    if (top - HEADER_H >= need) {
      const y = (HEADER_H + top) / 2
      ;[0, 1, 2].forEach((channel, i) => placed.push({ x: w * xs[i], y: y + (i === 1 ? -8 : 6), channel }))
    }
    if (h - bottom >= need) {
      const y = (bottom + h) / 2
      ;[3, 4, 5].forEach((channel, i) => placed.push({ x: w * xs[i], y: y + (i === 1 ? 8 : -6), channel }))
    }
  }

  const base = Math.min(w, h * 1.15)
  return {
    w,
    h,
    hub,
    text: { rx: (right - left) / 2 + 24, ry: (bottom - top) / 2 + 24 },
    rings: [0.3, 0.43, 0.58].map((f) => base * f),
    nodeR,
    nodes: placed.map((n) => ({ ...n, path: curveTo(n.x, n.y, hub.x, hub.y) })),
  }
}

type Particle = { fx: number; fy: number; r: number; delay: number; dur: number }

export default function HeroBackground({ contentRef }: { contentRef: RefObject<HTMLElement | null> }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState<Layout | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const coreRefs = useRef<(SVGPathElement | null)[]>([])
  const glowRefs = useRef<(SVGPathElement | null)[]>([])
  const haloRefs = useRef<(SVGCircleElement | null)[]>([])
  const rippleRef = useRef<SVGCircleElement>(null)
  const flashRef = useRef<SVGEllipseElement>(null)
  const visibleRef = useRef(true)

  // Measure the hero and the text block; recompute whenever either resizes
  useEffect(() => {
    const root = rootRef.current
    const content = contentRef.current
    if (!root || !content) return
    const measure = () => {
      const r = root.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return
      setLayout(computeLayout(r.width, r.height, content.getBoundingClientRect(), r))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    ro.observe(content)
    return () => ro.disconnect()
  }, [contentRef])

  useEffect(() => {
    setParticles(
      Array.from({ length: 26 }, () => ({
        fx: Math.random(),
        fy: 0.15 + Math.random() * 0.85,
        r: 0.6 + Math.random() * 1.2,
        delay: -Math.random() * 12,
        dur: 9 + Math.random() * 8,
      }))
    )
  }, [])

  // Pause everything while the hero is off screen
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting
      root.classList.toggle("hb-paused", !entry.isIntersecting)
    })
    io.observe(root)
    return () => io.disconnect()
  }, [])

  // Message pulses: channel → core (AI processing) → reply out to another channel
  useEffect(() => {
    if (!layout || layout.nodes.length < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let alive = true
    const timers: number[] = []
    const busy = new Set<number>()
    const n = layout.nodes.length
    const pick = (pool: number[]) => pool[Math.floor(Math.random() * pool.length)]

    const send = (i: number, inbound: boolean, done: () => void) => {
      const core = coreRefs.current[i]
      const glow = glowRefs.current[i]
      if (!core || !glow) return done()
      const len = core.getTotalLength()
      const seg = Math.min(110, len * 0.28)
      const frames = inbound
        ? [{ strokeDashoffset: seg }, { strokeDashoffset: -len }]
        : [{ strokeDashoffset: -len }, { strokeDashoffset: seg }]
      const opts: KeyframeAnimationOptions = {
        duration: 1600 + Math.random() * 700,
        easing: inbound ? "cubic-bezier(.45,0,.8,1)" : "cubic-bezier(.2,0,.55,1)",
        fill: "forwards",
      }
      for (const el of [core, glow]) el.style.strokeDasharray = `${seg} ${len + seg}`
      glow.animate(frames, opts)
      core.animate(frames, opts).onfinish = () => alive && done()
    }

    const ping = (i: number) =>
      haloRefs.current[i]?.animate(
        [
          { opacity: 0, transform: "scale(0.85)" },
          { opacity: 0.9, transform: "scale(1)", offset: 0.25 },
          { opacity: 0, transform: "scale(1.6)" },
        ],
        { duration: 1200, easing: "ease-out" }
      )

    const ripple = () => {
      rippleRef.current?.animate(
        [
          { opacity: 0.55, transform: "scale(0.7)" },
          { opacity: 0, transform: "scale(1.35)" },
        ],
        { duration: 1600, easing: "cubic-bezier(.2,.6,.3,1)" }
      )
      flashRef.current?.animate([{ opacity: 0 }, { opacity: 1, offset: 0.2 }, { opacity: 0 }], {
        duration: 1400,
        easing: "ease-out",
      })
    }

    const cycle = () => {
      if (!visibleRef.current || document.hidden) return
      const free = [...Array(n).keys()].filter((i) => !busy.has(i))
      if (free.length < 2) return
      const from = pick(free)
      busy.add(from)
      ping(from)
      send(from, true, () => {
        ripple()
        busy.delete(from)
        timers.push(
          window.setTimeout(() => {
            if (!alive) return
            const pool = [...Array(n).keys()].filter((i) => i !== from && !busy.has(i))
            if (!pool.length) return
            const to = pick(pool)
            busy.add(to)
            send(to, false, () => {
              ping(to)
              busy.delete(to)
            })
          }, 350)
        )
      })
    }

    timers.push(window.setTimeout(cycle, 900))
    const iv = window.setInterval(cycle, 1700)
    return () => {
      alive = false
      window.clearInterval(iv)
      timers.forEach(window.clearTimeout)
    }
  }, [layout])

  return (
    <div ref={rootRef} aria-hidden="true" className="hb-root pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes hb-spin { to { transform: rotate(360deg); } }
        @keyframes hb-spin-rev { to { transform: rotate(-360deg); } }
        @keyframes hb-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes hb-breathe { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
        @keyframes hb-grid { to { background-position: 0 64px, 0 0; } }
        @keyframes hb-rise {
          0%   { opacity: 0; transform: translateY(0); }
          20%  { opacity: .9; }
          100% { opacity: 0; transform: translateY(-60px); }
        }
        .hb-root .hb-rotor { transform-box: fill-box; transform-origin: center; }
        .hb-root .hb-spin { animation: hb-spin var(--d, 80s) linear infinite; }
        .hb-root .hb-spin-rev { animation: hb-spin-rev var(--d, 80s) linear infinite; }
        .hb-root .hb-float { animation: hb-float 6s ease-in-out infinite; }
        .hb-root .hb-breathe { animation: hb-breathe 7s ease-in-out infinite; }
        .hb-root .hb-grid { animation: hb-grid 4s linear infinite; }
        .hb-root .hb-rise { animation: hb-rise var(--d, 12s) linear infinite; }
        .hb-root .hb-scale { transform-box: fill-box; transform-origin: center; }
        .hb-paused * { animation-play-state: paused !important; }
        @media (prefers-reduced-motion: reduce) {
          .hb-root * { animation: none !important; }
        }
      `}</style>

      {/* Base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,#0b1f14_0%,#060d09_55%,#030705_100%)]" />

      {/* Perspective floor grid */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] overflow-hidden [perspective:600px] [mask-image:linear-gradient(to_top,black_0%,black_25%,transparent_100%)]">
        <div
          className="hb-grid absolute -inset-x-1/2 bottom-0 h-[220%] origin-bottom [transform:rotateX(64deg)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,213,99,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(0,213,99,0.11) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {layout && (
        <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${layout.w} ${layout.h}`}>
          <defs>
            <radialGradient id="hb-core">
              <stop offset="0%" stopColor={GREEN} stopOpacity="0.22" />
              <stop offset="45%" stopColor={GREEN} stopOpacity="0.07" />
              <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
            </radialGradient>
            {/* Fades links out before they reach the text */}
            <radialGradient id="hb-hole">
              <stop offset="0%" stopColor="#000" stopOpacity="1" />
              <stop offset="65%" stopColor="#000" stopOpacity="1" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <mask id="hb-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={layout.w} height={layout.h}>
              <rect width={layout.w} height={layout.h} fill="#fff" />
              <ellipse
                cx={layout.hub.x}
                cy={layout.hub.y}
                rx={layout.text.rx * 1.1}
                ry={layout.text.ry * 1.25}
                fill="url(#hb-hole)"
              />
            </mask>
          </defs>

          {/* Core glow */}
          <ellipse
            className="hb-breathe"
            cx={layout.hub.x}
            cy={layout.hub.y}
            rx={layout.text.rx * 1.5}
            ry={layout.text.ry * 1.6}
            fill="url(#hb-core)"
          />
          <ellipse
            ref={flashRef}
            cx={layout.hub.x}
            cy={layout.hub.y}
            rx={layout.text.rx * 1.1}
            ry={layout.text.ry * 1.2}
            fill="url(#hb-core)"
            opacity="0"
          />

          {/* Orbital geometry */}
          <g fill="none" stroke={GREEN}>
            <g className="hb-rotor hb-spin" style={{ ["--d" as string]: "90s" }}>
              <circle cx={layout.hub.x} cy={layout.hub.y} r={layout.rings[0]} strokeOpacity="0.09" strokeDasharray="2 10" />
              {[0, 120, 240].map((a) => (
                <circle
                  key={a}
                  cx={layout.hub.x + layout.rings[0] * Math.cos((a * Math.PI) / 180)}
                  cy={layout.hub.y + layout.rings[0] * Math.sin((a * Math.PI) / 180)}
                  r="2.5"
                  fill={GREEN}
                  fillOpacity="0.5"
                  stroke="none"
                />
              ))}
            </g>
            <g className="hb-rotor hb-spin-rev" style={{ ["--d" as string]: "140s" }}>
              <circle cx={layout.hub.x} cy={layout.hub.y} r={layout.rings[1]} strokeOpacity="0.07" />
              <circle
                cx={layout.hub.x}
                cy={layout.hub.y}
                r={layout.rings[1]}
                strokeOpacity="0.35"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray={`${layout.rings[1] * 0.5} ${layout.rings[1] * Math.PI - layout.rings[1] * 0.5}`}
              />
            </g>
            <g className="hb-rotor hb-spin" style={{ ["--d" as string]: "200s" }}>
              <circle cx={layout.hub.x} cy={layout.hub.y} r={layout.rings[2]} strokeOpacity="0.06" strokeDasharray="1 6" />
              <polygon
                points={[0, 60, 120, 180, 240, 300]
                  .map((a) => {
                    const r = layout.rings[2] * 0.97
                    const t = ((a + 30) * Math.PI) / 180
                    return `${layout.hub.x + r * Math.cos(t)},${layout.hub.y + r * Math.sin(t)}`
                  })
                  .join(" ")}
                strokeOpacity="0.05"
              />
            </g>
          </g>

          <circle
            ref={rippleRef}
            className="hb-scale"
            cx={layout.hub.x}
            cy={layout.hub.y}
            r={layout.rings[0]}
            fill="none"
            stroke={GREEN}
            strokeWidth="1.5"
            opacity="0"
          />

          {/* Links + travelling pulses */}
          <g mask="url(#hb-mask)" fill="none" strokeLinecap="round">
            {layout.nodes.map((node, i) => (
              <g key={i}>
                <path d={node.path} stroke={GREEN} strokeOpacity="0.16" strokeWidth="1" />
                <path
                  ref={(el) => {
                    glowRefs.current[i] = el
                  }}
                  d={node.path}
                  stroke={GREEN}
                  strokeOpacity="0.25"
                  strokeWidth="7"
                  strokeDasharray="0 100000"
                />
                <path
                  ref={(el) => {
                    coreRefs.current[i] = el
                  }}
                  d={node.path}
                  stroke="#b9ffd8"
                  strokeWidth="1.8"
                  strokeDasharray="0 100000"
                />
              </g>
            ))}
          </g>

          {/* Drifting particles */}
          {particles.map((p, i) => (
            <circle
              key={i}
              className="hb-rise"
              style={{ ["--d" as string]: `${p.dur}s`, animationDelay: `${p.delay}s` }}
              cx={p.fx * layout.w}
              cy={p.fy * layout.h}
              r={p.r}
              fill={GREEN}
            />
          ))}

          {/* Channel nodes */}
          {layout.nodes.map((node, i) => {
            const { Icon, label } = CHANNELS[node.channel]
            const R = layout.nodeR
            const s = Math.round(R * 0.86)
            return (
              <g key={label} transform={`translate(${node.x} ${node.y})`}>
                <g className="hb-float" style={{ animationDelay: `${-i * 1.3}s` }}>
                  <circle
                    ref={(el) => {
                      haloRefs.current[i] = el
                    }}
                    className="hb-scale"
                    r={R + 12}
                    fill={GREEN}
                    fillOpacity="0.12"
                    stroke={GREEN}
                    strokeOpacity="0.6"
                    opacity="0"
                  />
                  <circle r={R + 6} fill="none" stroke={GREEN} strokeOpacity="0.08" />
                  <circle r={R} fill="#07130d" stroke={GREEN} strokeOpacity="0.4" />
                  <Icon x={-s / 2} y={-s / 2} size={s} color="#a7f3c9" strokeWidth={1.5} opacity={0.9} />
                </g>
              </g>
            )
          })}
        </svg>
      )}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_70%_at_50%_50%,transparent_40%,rgba(2,6,4,0.85)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#020604]/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020604]/70 to-transparent" />
    </div>
  )
}
