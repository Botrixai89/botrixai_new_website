"use client"

import { useEffect, useRef, useState, type RefObject } from "react"
import { Facebook, Instagram, Mail, Phone, Smartphone, type LucideIcon } from "lucide-react"
import WhatsAppGlyph from "@/components/whatsapp-glyph"

type Glyph = LucideIcon | typeof WhatsAppGlyph

const CHANNELS: { label: string; Icon: Glyph }[] = [
  { label: "WhatsApp", Icon: WhatsAppGlyph },
  { label: "Instagram", Icon: Instagram },
  { label: "Messenger", Icon: Facebook },
  { label: "RCS", Icon: Smartphone },
  { label: "Email", Icon: Mail },
  { label: "Voice", Icon: Phone },
]

// Sample exchanges shown in the side cards — channel index into CHANNELS
const CONVERSATIONS = [
  { channel: 0, q: "Has my order #4821 shipped?", a: "Yes, it arrives tomorrow by 6 PM. Tracking link sent." },
  { channel: 1, q: "Is this available in size M?", a: "Size M is in stock. Shall I reserve one for you?" },
  { channel: 4, q: "Can I get the invoice for March?", a: "Done. INV-0392 is in your inbox." },
  { channel: 5, q: "Table for two at 8 PM tonight", a: "Booked. Confirmation sent by SMS." },
  { channel: 3, q: "Please move my appointment", a: "Moved to Thursday, 11:30 AM." },
  { channel: 2, q: "What are your store hours?", a: "Open daily, 10 AM to 9 PM." },
  { channel: 0, q: "I want to know the EMI options", a: "3, 6 and 12 month plans. Sending details now." },
  { channel: 1, q: "Do you ship to Raipur?", a: "Yes, delivery in 2–3 business days." },
]

const CARD_H = 118

type Card = { x: number; y: number; w: number; depth: number }
type Layout = {
  w: number
  h: number
  arc: { cx: number; cy: number; R: number }
  compact: boolean
  cards: Card[]
}

function computeLayout(root: DOMRect, c: DOMRect): Layout {
  const w = root.width
  const h = root.height
  const left = c.left - root.left
  const right = c.right - root.left
  const top = c.top - root.top
  const bottom = c.bottom - root.top

  // Planet-edge horizon: wide, gently curved, crest just below the text block; the channel hub sits on it
  const R = Math.max(w * 0.95, 520)
  const compact = w < 720
  const crest = Math.min(Math.max(bottom + (compact ? 105 : 140), h * 0.8), h - (compact ? 78 : 100))
  const cy = crest + R

  const cards: Card[] = []
  const gutter = Math.min(left, w - right)
  if (gutter >= 236) {
    const cw = Math.min(272, gutter - 44)
    const rimY = (x: number) => cy - Math.sqrt(Math.max(0, R * R - (x - w / 2) ** 2))
    const place = (x: number, y: number, depth: number) =>
      cards.push({ x, y: Math.min(y, rimY(x + (x < w / 2 ? cw : 0)) - CARD_H - 24), w: cw, depth })
    const xl = (left - cw) / 2
    const xr = right + (w - right - cw) / 2
    const gap = CARD_H + 44
    place(xl + 12, top - 40, 1)
    place(xl - 14, top - 40 + gap, 0.9)
    place(xr - 12, top + 10, 0.92)
    place(xr + 14, top + 10 + gap, 1)
  }

  return { w, h, arc: { cx: w / 2, cy, R }, compact, cards }
}

type CardState = { convo: number; phase: "q" | "typing" | "a"; rev: number }

function ConversationCard({ card, state, index }: { card: Card; state: CardState; index: number }) {
  const convo = CONVERSATIONS[state.convo]
  const { Icon, label } = CHANNELS[convo.channel]
  return (
    <div
      className="hz-float absolute"
      style={{
        left: card.x,
        top: card.y,
        width: card.w,
        opacity: 0.35 + card.depth * 0.55,
        transform: `scale(${card.depth})`,
        filter: card.depth < 0.9 ? "blur(0.6px)" : undefined,
        animationDelay: `${-index * 2.1}s`,
      }}
    >
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <div className="mb-3 flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-white/[0.06] text-white/70">
            <Icon size={13} strokeWidth={1.75} />
          </span>
          <span className="text-[11px] font-medium text-white/50">{label}</span>
          <span className="ml-auto text-[10px] text-white/30">now</span>
        </div>
        <div key={`q${state.rev}`} className="hz-in text-[13px] leading-snug text-white/85">
          {convo.q}
        </div>
        <div className="mt-2.5 flex min-h-[34px] items-start gap-2 border-t border-white/[0.06] pt-2.5">
          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D563]/80" />
          {state.phase === "typing" ? (
            <span key={`t${state.rev}`} className="hz-in flex gap-1 pt-1.5">
              {[0, 1, 2].map((d) => (
                <span key={d} className="hz-dot h-1 w-1 rounded-full bg-white/50" style={{ animationDelay: `${d * 0.16}s` }} />
              ))}
            </span>
          ) : state.phase === "a" ? (
            <span key={`a${state.rev}`} className="hz-in text-[12px] leading-snug text-white/55">
              {convo.a}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}

// Botrix mark cropped out of the white logo (mark occupies x 52–192, y 86–221 of the 752×332 PNG)
function BotrixMark({ size }: { size: number }) {
  const k = size / 140
  return (
    <div
      style={{
        width: size,
        height: 135 * k,
        backgroundImage: "url(/images/botrix-logo.png)",
        backgroundSize: `${752 * k}px ${332 * k}px`,
        backgroundPosition: `${-52 * k}px ${-86 * k}px`,
      }}
    />
  )
}

type Ping = { channel: number; n: number }

// Channels fan into the Botrix core: a message travels in, the core processes it, the reply travels back out
function ChannelHub({ layout, ping }: { layout: Layout; ping: Ping }) {
  const compact = layout.compact
  const W = compact ? 340 : 620
  const H = compact ? 150 : 200
  const t = compact ? 38 : 46
  const c = compact ? 56 : 68
  const row = compact ? 46 : 62
  const cx = W / 2
  const cy = H / 2

  // [0,1,2] curve down the left, [3,4,5] down the right — middle tile pushed outward
  const tiles = CHANNELS.map((_, i) => {
    const side = i < 3 ? -1 : 1
    const r = i % 3
    const x = side < 0 ? t / 2 + (r === 1 ? 0 : 22) : W - t / 2 - (r === 1 ? 0 : 22)
    const y = cy + (r - 1) * row
    const x1 = x - side * (t / 2)
    const x2 = cx + side * (c / 2)
    const k = (x2 - x1) * 0.55
    return { x, y, path: `M${x1} ${y} C${x1 + k} ${y} ${x2 - k} ${cy} ${x2} ${cy}` }
  })

  const beamRefs = useRef<(SVGPathElement | null)[]>([])
  const glowRefs = useRef<(SVGPathElement | null)[]>([])
  const ringRef = useRef<SVGCircleElement>(null)
  const [lit, setLit] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (ping.n === 0) return
    const i = ping.channel
    const beam = beamRefs.current[i]
    const glow = glowRefs.current[i]
    if (!beam || !glow) return
    const len = beam.getTotalLength()
    const seg = Math.min(56, len * 0.4)
    for (const el of [beam, glow]) el.style.strokeDasharray = `${seg} ${len + seg}`
    const run = (frames: Keyframe[], easing: string) => {
      const opts: KeyframeAnimationOptions = { duration: 950, easing, fill: "forwards" }
      glow.animate(frames, opts)
      return beam.animate(frames, opts)
    }
    let cancelled = false
    const timers: number[] = []
    setLit(i)
    run([{ strokeDashoffset: seg }, { strokeDashoffset: -len }], "cubic-bezier(.5,0,.75,1)").onfinish = () => {
      if (cancelled) return
      setBusy(true)
      ringRef.current?.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
        duration: 900,
        easing: "cubic-bezier(.45,0,.2,1)",
      })
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return
          setBusy(false)
          run([{ strokeDashoffset: -len }, { strokeDashoffset: seg }], "cubic-bezier(.25,0,.5,1)").onfinish = () => {
            if (!cancelled) timers.push(window.setTimeout(() => setLit(null), 700))
          }
        }, 750)
      )
    }
    return () => {
      cancelled = true
      timers.forEach(window.clearTimeout)
      setBusy(false)
      setLit(null)
    }
  }, [ping])

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ top: layout.arc.cy - layout.arc.R, width: W, height: H }}
    >
      {/* Light from the core spilling onto the horizon */}
      <div
        className={`absolute left-1/2 top-1/2 h-24 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2fd486] blur-3xl transition-opacity duration-700 ${
          busy ? "opacity-30" : "opacity-[0.14]"
        }`}
      />

      <svg className="absolute inset-0 overflow-visible" width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
        {tiles.map((tile, i) => (
          <g key={i} strokeLinecap="round">
            <path d={tile.path} stroke="#ffffff" strokeOpacity="0.09" strokeWidth="1" />
            <path
              ref={(el) => {
                glowRefs.current[i] = el
              }}
              d={tile.path}
              stroke="#7ef0b4"
              strokeOpacity="0.18"
              strokeWidth="5"
              strokeDasharray="0 100000"
            />
            <path
              ref={(el) => {
                beamRefs.current[i] = el
              }}
              d={tile.path}
              stroke="#d4fbe6"
              strokeOpacity="0.85"
              strokeWidth="1.25"
              strokeDasharray="0 100000"
            />
          </g>
        ))}
        {/* Processing ring around the core */}
        <circle
          ref={ringRef}
          cx={cx}
          cy={cy}
          r={c / 2 + 7}
          stroke="#7ef0b4"
          strokeOpacity={busy ? 0.7 : 0}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeDasharray={`${(c / 2 + 7) * 1.4} ${(c / 2 + 7) * 5}`}
          style={{ transformBox: "fill-box", transformOrigin: "center", transition: "stroke-opacity .4s" }}
        />
        <circle cx={cx} cy={cy} r={c / 2 + 7} stroke="#ffffff" strokeOpacity="0.06" />
      </svg>

      {tiles.map((tile, i) => {
        const { Icon, label } = CHANNELS[i]
        const on = lit === i
        return (
          <div
            key={label}
            className={`absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border bg-[#09110d]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_24px_-12px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-500 ${
              on ? "border-[#7ef0b4]/35 text-[#a9f5cc]" : "border-white/[0.09] text-white/55"
            }`}
            style={{ left: tile.x, top: tile.y, width: t, height: t }}
          >
            <Icon size={compact ? 16 : 18} strokeWidth={1.6} />
          </div>
        )
      })}

      <div
        className="absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[20px] border border-white/[0.12] bg-[linear-gradient(180deg,#112019,#070d0a)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-16px_rgba(0,0,0,0.95)]"
        style={{ left: cx, top: cy, width: c, height: c }}
      >
        <BotrixMark size={c * 0.5} />
      </div>
    </div>
  )
}

export default function HeroHorizon({ contentRef }: { contentRef: RefObject<HTMLElement | null> }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const visibleRef = useRef(true)
  const [layout, setLayout] = useState<Layout | null>(null)
  const [ping, setPing] = useState<Ping>({ channel: 0, n: 0 })
  const [cards, setCards] = useState<CardState[]>(() =>
    [0, 1, 2, 3].map((i) => ({ convo: i, phase: "a" as const, rev: 0 }))
  )

  useEffect(() => {
    const root = rootRef.current
    const content = contentRef.current
    if (!root || !content) return
    const measure = () => {
      const r = root.getBoundingClientRect()
      if (r.width && r.height) setLayout(computeLayout(r, content.getBoundingClientRect()))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    ro.observe(content)
    return () => ro.disconnect()
  }, [contentRef])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting
      root.classList.toggle("hz-paused", !entry.isIntersecting)
    })
    io.observe(root)
    return () => io.disconnect()
  }, [])

  // One card at a time receives a new message, then the AI types and replies.
  // The hub plays the same message through its channel; without cards it just cycles channels.
  const showCards = (layout?.cards.length ?? 0) > 0
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let turn = 0
    let next = 4
    const timers: number[] = []
    const setPhase = (i: number, patch: Partial<CardState>) =>
      setCards((prev) => prev.map((c, j) => (j === i ? { ...c, ...patch } : c)))
    const iv = window.setInterval(() => {
      if (!visibleRef.current || document.hidden) return
      if (!showCards) {
        setPing((p) => ({ channel: (p.channel + 1 + Math.floor(Math.random() * 4)) % CHANNELS.length, n: p.n + 1 }))
        return
      }
      const i = turn++ % 4
      const convo = next++ % CONVERSATIONS.length
      setPing((p) => ({ channel: CONVERSATIONS[convo].channel, n: p.n + 1 }))
      setCards((prev) => prev.map((c, j) => (j === i ? { convo, phase: "q", rev: c.rev + 1 } : c)))
      timers.push(window.setTimeout(() => setPhase(i, { phase: "typing" }), 900))
      timers.push(window.setTimeout(() => setPhase(i, { phase: "a" }), 2300))
    }, showCards ? 3600 : 2800)
    return () => {
      window.clearInterval(iv)
      timers.forEach(window.clearTimeout)
    }
  }, [showCards])

  return (
    <div ref={rootRef} aria-hidden="true" className="hz-root pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes hz-drift-a { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(6%,4%,0); } }
        @keyframes hz-drift-b { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(-5%,-3%,0); } }
        @keyframes hz-float { 0%,100% { translate: 0 0; } 50% { translate: 0 -8px; } }
        @keyframes hz-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
        @keyframes hz-dot { 0%,80%,100% { opacity: .25; } 40% { opacity: 1; } }
        @keyframes hz-breathe { 0%,100% { opacity: .75; } 50% { opacity: 1; } }
        .hz-root .hz-drift-a { animation: hz-drift-a 26s ease-in-out infinite; will-change: transform; }
        .hz-root .hz-drift-b { animation: hz-drift-b 32s ease-in-out infinite; will-change: transform; }
        .hz-root .hz-float { animation: hz-float 9s ease-in-out infinite; transform-origin: center; }
        .hz-root .hz-in { animation: hz-in .5s cubic-bezier(.22,1,.36,1) both; }
        .hz-root .hz-dot { animation: hz-dot 1.2s ease-in-out infinite; }
        .hz-root .hz-breathe { animation: hz-breathe 8s ease-in-out infinite; }
        .hz-paused * { animation-play-state: paused !important; }
        @media (prefers-reduced-motion: reduce) { .hz-root * { animation: none !important; } }
      `}</style>

      {/* Haze */}
      <div className="hz-drift-a absolute left-[8%] top-[6%] h-[55%] w-[55%] rounded-full bg-[#0e3b2a] opacity-60 blur-[120px]" />
      <div className="hz-drift-b absolute right-[4%] top-[18%] h-[45%] w-[45%] rounded-full bg-[#0c3233] opacity-50 blur-[120px]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_20%,transparent_75%)]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {layout && (
        <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${layout.w} ${layout.h}`}>
          <defs>
            <radialGradient id="hz-sky" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3ddc97" stopOpacity="0.28" />
              <stop offset="40%" stopColor="#1f8a62" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0b2a1e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hz-planet" cx="50%" cy="0%" r="55%">
              <stop offset="0%" stopColor="#0c1f17" />
              <stop offset="18%" stopColor="#050b08" />
              <stop offset="100%" stopColor="#020403" />
            </radialGradient>
            <linearGradient id="hz-rim" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={layout.w} y2="0">
              <stop offset="0%" stopColor="#d9f7e8" stopOpacity="0" />
              <stop offset="28%" stopColor="#d9f7e8" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#ecfff5" stopOpacity="0.75" />
              <stop offset="72%" stopColor="#d9f7e8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#d9f7e8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Light rising from behind the horizon */}
          <ellipse
            className="hz-breathe"
            cx={layout.arc.cx}
            cy={layout.arc.cy - layout.arc.R}
            rx={layout.w * 0.42}
            ry={Math.min(220, layout.h * 0.28)}
            fill="url(#hz-sky)"
          />
          <circle cx={layout.arc.cx} cy={layout.arc.cy} r={layout.arc.R} fill="url(#hz-planet)" />
          <circle cx={layout.arc.cx} cy={layout.arc.cy} r={layout.arc.R} fill="none" stroke="url(#hz-rim)" strokeWidth="1.25" />
          <circle
            cx={layout.arc.cx}
            cy={layout.arc.cy}
            r={layout.arc.R - 1}
            fill="none"
            stroke="url(#hz-rim)"
            strokeWidth="6"
            strokeOpacity="0.12"
          />

        </svg>
      )}

      {layout && <ChannelHub layout={layout} ping={ping} />}

      {/* Conversation cards (wide screens only, placed in the side gutters) */}
      {layout?.cards.map((card, i) => (
        <ConversationCard key={i} card={card} state={cards[i]} index={i} />
      ))}

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_75%_at_50%_45%,transparent_45%,rgba(2,4,3,0.75)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020403]/80 to-transparent" />
    </div>
  )
}
