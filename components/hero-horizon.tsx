"use client"

import { useEffect, useRef, useState, type RefObject } from "react"
import { Facebook, Instagram, Mail, Phone, Smartphone, type LucideIcon } from "lucide-react"
import WhatsAppGlyph from "@/components/whatsapp-glyph"
import BotrixMark from "@/components/botrix-mark"

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
const CARD_TOP = 84 // keeps the side cards clear of the fixed header

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
  const crest = Math.min(Math.max(bottom + (compact ? 105 : 140), h * 0.76), h - (compact ? 78 : 100))
  const cy = crest + R

  const cards: Card[] = []
  const gutter = Math.min(left, w - right)
  if (gutter >= 236) {
    const cw = Math.min(272, gutter - 44)
    const rimY = (x: number) => cy - Math.sqrt(Math.max(0, R * R - (x - w / 2) ** 2))
    const place = (x: number, y: number, depth: number) =>
      cards.push({ x, y: Math.max(CARD_TOP, Math.min(y, rimY(x + (x < w / 2 ? cw : 0)) - CARD_H - 24)), w: cw, depth })
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
        opacity: 0.5 + card.depth * 0.5,
        transform: `scale(${card.depth})`,
        filter: card.depth < 0.9 ? "blur(0.6px)" : undefined,
        animationDelay: `${-index * 2.1}s`,
      }}
    >
      <div className="rounded-2xl border border-gray-200/80 bg-white/85 p-4 shadow-[0_1px_2px_rgba(16,24,20,0.04),0_20px_40px_-24px_rgba(16,24,20,0.25)] backdrop-blur-md">
        <div className="mb-3 flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gray-100 text-gray-600">
            <Icon size={13} strokeWidth={1.75} />
          </span>
          <span className="text-[11px] font-medium text-gray-500">{label}</span>
          <span className="ml-auto text-[10px] text-gray-400">now</span>
        </div>
        <div key={`q${state.rev}`} className="hz-in text-[13px] leading-snug text-gray-900">
          {convo.q}
        </div>
        <div className="mt-2.5 flex min-h-[34px] items-start gap-2 border-t border-gray-100 pt-2.5">
          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b85a]" />
          {state.phase === "typing" ? (
            <span key={`t${state.rev}`} className="hz-in flex gap-1 pt-1.5">
              {[0, 1, 2].map((d) => (
                <span key={d} className="hz-dot h-1 w-1 rounded-full bg-gray-400" style={{ animationDelay: `${d * 0.16}s` }} />
              ))}
            </span>
          ) : state.phase === "a" ? (
            <span key={`a${state.rev}`} className="hz-in text-[12px] leading-snug text-gray-600">
              {convo.a}
            </span>
          ) : null}
        </div>
      </div>
    </div>
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
          busy ? "opacity-25" : "opacity-10"
        }`}
      />

      <svg className="absolute inset-0 overflow-visible" width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
        {tiles.map((tile, i) => (
          <g key={i} strokeLinecap="round">
            <path d={tile.path} stroke="#101814" strokeOpacity="0.14" strokeWidth="1" />
            <path
              ref={(el) => {
                glowRefs.current[i] = el
              }}
              d={tile.path}
              stroke="#00b85a"
              strokeOpacity="0.16"
              strokeWidth="5"
              strokeDasharray="0 100000"
            />
            <path
              ref={(el) => {
                beamRefs.current[i] = el
              }}
              d={tile.path}
              stroke="#00a650"
              strokeOpacity="0.9"
              strokeWidth="1.5"
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
          stroke="#00b85a"
          strokeOpacity={busy ? 0.8 : 0}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeDasharray={`${(c / 2 + 7) * 1.4} ${(c / 2 + 7) * 5}`}
          style={{ transformBox: "fill-box", transformOrigin: "center", transition: "stroke-opacity .4s" }}
        />
        <circle cx={cx} cy={cy} r={c / 2 + 7} stroke="#101814" strokeOpacity="0.08" />
      </svg>

      {tiles.map((tile, i) => {
        const { Icon, label } = CHANNELS[i]
        const on = lit === i
        return (
          <div
            key={label}
            className={`absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border bg-white shadow-[0_1px_2px_rgba(16,24,20,0.05),0_12px_24px_-14px_rgba(16,24,20,0.3)] transition-all duration-500 ${
              on ? "border-[#00b85a]/50 text-[#00894a]" : "border-gray-200 text-gray-500"
            }`}
            style={{ left: tile.x, top: tile.y, width: t, height: t }}
          >
            <Icon size={compact ? 16 : 18} strokeWidth={1.6} />
          </div>
        )
      })}

      <div
        className="absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[20px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff,#f3faf6)] shadow-[0_1px_2px_rgba(16,24,20,0.05),0_20px_40px_-18px_rgba(0,120,60,0.35)]"
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
      <div className="hz-drift-a absolute left-[8%] top-[6%] h-[55%] w-[55%] rounded-full bg-[#d3f5e2] opacity-70 blur-[120px]" />
      <div className="hz-drift-b absolute right-[4%] top-[18%] h-[45%] w-[45%] rounded-full bg-[#d8f1f1] opacity-60 blur-[120px]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_20%,transparent_75%)]"
        style={{
          backgroundImage: "radial-gradient(rgba(16,24,20,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {layout && (
        <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${layout.w} ${layout.h}`}>
          <defs>
            <radialGradient id="hz-sky" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D563" stopOpacity="0.2" />
              <stop offset="40%" stopColor="#00D563" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#00D563" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hz-planet" cx="50%" cy="0%" r="55%">
              <stop offset="0%" stopColor="#e6f9ef" />
              <stop offset="18%" stopColor="#f3faf6" />
              <stop offset="100%" stopColor="#f7f9f8" />
            </radialGradient>
            <linearGradient id="hz-rim" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={layout.w} y2="0">
              <stop offset="0%" stopColor="#00b85a" stopOpacity="0" />
              <stop offset="28%" stopColor="#00b85a" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00b85a" stopOpacity="0.6" />
              <stop offset="72%" stopColor="#00b85a" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00b85a" stopOpacity="0" />
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

      {/* Foot fades into the next section's background */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f9f8] to-transparent" />

      {layout && <ChannelHub layout={layout} ping={ping} />}

      {/* Conversation cards (wide screens only, placed in the side gutters) */}
      {layout?.cards.map((card, i) => (
        <ConversationCard key={i} card={card} state={cards[i]} index={i} />
      ))}
    </div>
  )
}
