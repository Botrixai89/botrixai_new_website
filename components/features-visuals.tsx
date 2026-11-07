"use client"

import { useRef, type ReactNode, type RefObject } from "react"
import Image from "next/image"
import {
  CheckCheck,
  CircleCheck,
  Lock,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react"
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap"
import WhatsAppGlyph from "@/components/whatsapp-glyph"
import BotrixMark from "@/components/botrix-mark"
import { cn } from "@/lib/utils"

type Q = (selector: string) => Element[]

// Builds a looping timeline that only runs while the visual is on screen.
// Everything renders in its final state by default, so reduced-motion users see a still frame.
function useLoop(scope: RefObject<HTMLDivElement | null>, build: (tl: gsap.core.Timeline, q: Q) => void) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(scope) as Q
        const tl = gsap.timeline({ repeat: -1, paused: true })
        build(tl, q)
        ScrollTrigger.create({
          trigger: scope.current,
          start: "top 92%",
          end: "bottom 8%",
          onToggle: (self) => (self.isActive ? tl.play() : tl.pause()),
        })
      })
    },
    { scope }
  )
}

function Typing({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-2xl bg-white px-3 py-2.5 shadow-sm", className)}>
      {[0, 1, 2].map((i) => (
        <span key={i} className="fv-dot h-1.5 w-1.5 rounded-full bg-gray-400" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </span>
  )
}

/* ─────────────────────────── WhatsApp ─────────────────────────── */

function Bubble({ out, children, className }: { out?: boolean; children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-[78%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug shadow-[0_1px_1px_rgba(0,0,0,0.04)]",
        out ? "rounded-br-md bg-[#e3f8ea] text-gray-800" : "rounded-bl-md bg-white text-gray-800",
        className
      )}
    >
      {children}
      {out && (
        <span className="ml-2 inline-flex translate-y-0.5 items-center gap-0.5 text-[10px] text-gray-400">
          10:42 <CheckCheck className="h-3 w-3 text-[#34b7f1]" />
        </span>
      )}
    </div>
  )
}

export function WhatsAppVisual() {
  const root = useRef<HTMLDivElement>(null)
  useLoop(root, (tl, q) => {
    const steps = q(".wa-step")
    tl.set(steps, { autoAlpha: 0, y: 10 })
      .to(q(".wa-in1"), { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, 0.4)
      .to(q(".wa-typ1"), { autoAlpha: 1, y: 0, duration: 0.3 }, "+=0.4")
      .to(q(".wa-typ1"), { autoAlpha: 0, duration: 0.2 }, "+=1")
      .to(q(".wa-out1"), { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, "<")
      .to(q(".wa-in2"), { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, "+=1.1")
      .to(q(".wa-typ2"), { autoAlpha: 1, y: 0, duration: 0.3 }, "+=0.4")
      .to(q(".wa-typ2"), { autoAlpha: 0, duration: 0.2 }, "+=1")
      .to(q(".wa-out2"), { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, "<")
      .to(q(".wa-chip"), { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.12, ease: "power3.out" }, "+=0.25")
      .to(steps, { autoAlpha: 0, duration: 0.5 }, "+=2.6")
  })

  return (
    <div ref={root} className="flex h-full min-h-[300px] flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-[#eef3ef]">
      <div className="flex items-center gap-3 border-b border-gray-200/80 bg-white px-4 py-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0b1510]">
          <BotrixMark size={15} />
        </span>
        <div className="leading-tight">
          <div className="text-[13px] font-semibold text-gray-900">Botrix Store</div>
          <div className="text-[11px] text-[#00a650]">online · replies instantly</div>
        </div>
        <WhatsAppGlyph size={18} className="ml-auto text-gray-400" />
      </div>

      <div className="flex flex-1 flex-col justify-end gap-2.5 p-4">
        <div className="wa-step wa-in1 flex">
          <Bubble>Hi! Where&apos;s my order #4821?</Bubble>
        </div>
        <div className="relative flex justify-end">
          <Bubble out className="wa-step wa-out1">
            Out for delivery. Arriving today by 6 PM.
          </Bubble>
          <Typing className="wa-step wa-typ1 invisible absolute right-0 top-0" />
        </div>
        <div className="wa-step wa-in2 flex">
          <Bubble>Can I pay with UPI on delivery?</Bubble>
        </div>
        <div className="relative flex justify-end">
          <Bubble out className="wa-step wa-out2">
            Yes! You&apos;ll get a UPI link at your door.
          </Bubble>
          <Typing className="wa-step wa-typ2 invisible absolute right-0 top-0" />
        </div>
        <div className="flex justify-end gap-2">
          {["Track order", "Talk to an agent"].map((c) => (
            <span
              key={c}
              className="wa-step wa-chip rounded-full border border-[#00a650]/25 bg-white px-3 py-1 text-[12px] font-medium text-[#00894a]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────── Voice ─────────────────────────── */

const BARS = 40

export function VoiceVisual() {
  const root = useRef<HTMLDivElement>(null)
  const timer = useRef<HTMLSpanElement>(null)

  useLoop(root, (tl, q) => {
    const clock = { s: 0 }
    const bars = q(".vc-bar")
    const talk = gsap.to(bars, {
      scaleY: "random(0.12, 1)",
      duration: 0.22,
      ease: "sine.inOut",
      stagger: { each: 0.015, from: "random" },
      repeat: -1,
      repeatRefresh: true,
      paused: true,
    })
    tl.set(q(".vc-line"), { autoAlpha: 0, y: 6 })
      .set(bars, { scaleY: 0.12 })
      .call(() => {
        talk.play()
      })
      .to(clock, {
        s: 42,
        duration: 7.2,
        ease: "none",
        onUpdate: () => {
          if (timer.current) timer.current.textContent = `00:${String(Math.floor(clock.s)).padStart(2, "0")}`
        },
      }, 0)
      .to(q(".vc-ring"), { scale: 1.9, autoAlpha: 0, duration: 1.6, stagger: 0.8, repeat: 3, ease: "power1.out" }, 0)
      .to(q(".vc-l1"), { autoAlpha: 1, y: 0, duration: 0.4 }, 0.6)
      .to(q(".vc-l1"), { autoAlpha: 0, y: -6, duration: 0.3 }, 3.4)
      .to(q(".vc-l2"), { autoAlpha: 1, y: 0, duration: 0.4 }, 3.6)
      .call(() => {
        talk.pause()
      }, undefined, 6.8)
      .to(bars, { scaleY: 0.12, duration: 0.4 }, 6.8)
      .to(q(".vc-l2"), { autoAlpha: 0, duration: 0.3 }, 7.4)
  })

  return (
    <div ref={root} className="flex h-full flex-col justify-between gap-4 rounded-xl border border-gray-200/80 bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="flex items-center gap-3">
        <span className="relative grid h-10 w-10 place-items-center">
          <span className="vc-ring absolute inset-0 rounded-full border border-[#00D563]/50 opacity-0" />
          <span className="vc-ring absolute inset-0 rounded-full border border-[#00D563]/50 opacity-0" />
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[#0b1510] text-white">
            <Phone className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </span>
        <div className="leading-tight">
          <div className="text-[13px] font-semibold text-gray-900">AI Voice Agent</div>
          <div className="text-[11px] text-gray-500">Inbound call · Hindi / English</div>
        </div>
        <span ref={timer} className="ml-auto font-mono text-[12px] tabular-nums text-gray-500">
          00:42
        </span>
      </div>

      <div className="flex h-12 items-center gap-[3px]">
        {Array.from({ length: BARS }, (_, i) => (
          <span
            key={i}
            className="vc-bar h-full flex-1 origin-center rounded-full bg-gray-900/80"
            style={{ transform: `scaleY(${0.2 + 0.6 * Math.abs(Math.sin(i * 0.7))})` }}
          />
        ))}
      </div>

      <div className="relative h-5 text-[12px]">
        <p className="vc-line vc-l1 absolute inset-0 truncate text-gray-500 opacity-0">
          “Book a table for four on Saturday.”
        </p>
        <p className="vc-line vc-l2 absolute inset-0 flex items-center gap-1.5 truncate font-medium text-gray-800">
          <CircleCheck className="h-3.5 w-3.5 shrink-0 text-[#00a650]" /> Booked for Saturday, 8 PM. SMS sent.
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────────── Web chat ─────────────────────────── */

export function WebChatVisual() {
  const root = useRef<HTMLDivElement>(null)
  useLoop(root, (tl, q) => {
    tl.set(q(".wc-widget"), { autoAlpha: 0, scale: 0.6 })
      .set(q(".wc-msg"), { autoAlpha: 0, y: 6 })
      .set(q(".wc-toast"), { autoAlpha: 0, y: -10 })
      .set(q(".wc-launch"), { autoAlpha: 1, scale: 1 })
      .to(q(".wc-launch"), { scale: 1.12, duration: 0.3, yoyo: true, repeat: 3, ease: "sine.inOut" }, 0.4)
      .to(q(".wc-launch"), { autoAlpha: 0, scale: 0.6, duration: 0.25 })
      .to(q(".wc-widget"), { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)" }, "<")
      .to(q(".wc-msg"), { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.9, ease: "power3.out" }, "+=0.2")
      .to(q(".wc-toast"), { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, "+=0.3")
      .to(q(".wc-toast"), { autoAlpha: 0, y: -10, duration: 0.35 }, "+=2")
      .to(q(".wc-widget"), { autoAlpha: 0, scale: 0.6, duration: 0.35, ease: "power2.in" }, "<")
      .to(q(".wc-launch"), { autoAlpha: 1, scale: 1, duration: 0.3 })
      .to({}, { duration: 0.6 })
  })

  return (
    <div ref={root} className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white">
      <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-gray-300" />
        ))}
        <span className="mx-auto rounded-md bg-white px-6 py-0.5 text-[10px] text-gray-400 ring-1 ring-gray-200">yourbrand.com</span>
      </div>
      <div className="relative flex-1 p-4">
        <div className="space-y-2">
          <div className="h-2.5 w-1/3 rounded bg-gray-200" />
          <div className="h-2 w-2/3 rounded bg-gray-100" />
          <div className="h-2 w-1/2 rounded bg-gray-100" />
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="h-12 rounded-md bg-gray-100" />
            <div className="h-12 rounded-md bg-gray-100" />
          </div>
        </div>

        <div className="wc-toast absolute left-3 top-3 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-gray-800 shadow-md">
          <CircleCheck className="h-3.5 w-3.5 text-[#00a650]" /> Lead captured · Priya S.
        </div>

        <span className="wc-launch absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-[#0b1510] text-white opacity-0 shadow-lg">
          <MessageCircle className="h-4 w-4" />
        </span>

        <div className="wc-widget absolute bottom-3 right-3 w-[64%] max-w-[230px] origin-bottom-right overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          <div className="flex items-center gap-1.5 bg-[#0b1510] px-3 py-2 text-[11px] font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D563]" /> Botrix Assistant
          </div>
          <div className="space-y-1.5 p-2.5 text-[11px] leading-snug">
            <div className="wc-msg w-fit max-w-[90%] rounded-lg rounded-bl-sm bg-gray-100 px-2 py-1 text-gray-700">
              Hi! Looking for pricing?
            </div>
            <div className="wc-msg ml-auto w-fit max-w-[90%] rounded-lg rounded-br-sm bg-[#0b1510] px-2 py-1 text-white">
              Yes, for a team of 5
            </div>
            <div className="wc-msg w-fit max-w-[90%] rounded-lg rounded-bl-sm bg-gray-100 px-2 py-1 text-gray-700">
              Sent the Team plan to your email.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────── No-code builder ─────────────────────────── */

// Node boxes in a 360×180 canvas; rendered as HTML over an SVG of connectors
const FLOW_NODES = [
  { id: "t", x: 4, y: 73, label: "New message", Icon: MessageCircle },
  { id: "a", x: 128, y: 73, label: "AI Agent", Icon: Sparkles, accent: true },
  { id: "r", x: 252, y: 36, label: "Send reply", Icon: Send },
  { id: "h", x: 252, y: 110, label: "Assign agent", Icon: UserRound },
]
const FLOW_W = 104
const FLOW_H = 34
const FLOW_LINKS = ["M108 90 L128 90", "M232 90 C242 90 242 53 252 53", "M232 90 C242 90 242 127 252 127"]

export function BuilderVisual() {
  const root = useRef<HTMLDivElement>(null)
  useLoop(root, (tl, q) => {
    const [t, a, r, h] = ["t", "a", "r", "h"].map((id) => q(`.fl-${id}`))
    const [l1, l2, l3] = [0, 1, 2].map((i) => q(`.fl-l${i}`))
    const pulses = q(".fl-pulse")
    tl.set(q(".fl-node"), { autoAlpha: 0, scale: 0.85 })
      .set(q(".fl-link"), { strokeDashoffset: 1 })
      .set(pulses, { strokeDashoffset: 0.25, autoAlpha: 0 })
      .to(t, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }, 0.3)
      .to(l1, { strokeDashoffset: 0, duration: 0.4, ease: "power2.inOut" })
      .to(a, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(2)" })
      .to([l2, l3], { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" })
      .to([r, h], { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.12, ease: "back.out(2)" }, "-=0.1")
      .set(pulses, { autoAlpha: 1 }, "+=0.3")
      .to(q(".fl-pulse0"), { strokeDashoffset: -1, duration: 0.5, ease: "none" })
      .to(q(".fl-pulse1"), { strokeDashoffset: -1, duration: 0.6, ease: "none" })
      .to(q(".fl-pulse0"), { strokeDashoffset: 0.25, duration: 0 }, "+=0.5")
      .to(q(".fl-pulse0"), { strokeDashoffset: -1, duration: 0.5, ease: "none" })
      .to(q(".fl-pulse2"), { strokeDashoffset: -1, duration: 0.6, ease: "none" })
      .to([q(".fl-node"), q(".fl-link"), pulses], { autoAlpha: 0, duration: 0.4 }, "+=1.6")
      .set(q(".fl-link"), { autoAlpha: 1 })
  })

  return (
    <div
      ref={root}
      className="relative h-full overflow-hidden rounded-xl border border-gray-200/80 bg-white"
      style={{ backgroundImage: "radial-gradient(rgba(15,23,20,0.08) 1px, transparent 1px)", backgroundSize: "14px 14px" }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-1">
        <div className="relative aspect-[2/1] h-full max-w-full">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 180" fill="none">
            {FLOW_LINKS.map((d, i) => (
              <g key={i}>
                <path className={`fl-link fl-l${i}`} d={d} pathLength={1} strokeDasharray="1" stroke="#c7cfca" strokeWidth="1.5" />
                <path
                  className={`fl-pulse fl-pulse${i}`}
                  d={d}
                  pathLength={1}
                  strokeDasharray="0.25 1.25"
                  strokeDashoffset={0.25}
                  stroke="#00b85a"
                  strokeWidth="2"
                  strokeLinecap="round"
                 
                  opacity={0}
                />
              </g>
            ))}
          </svg>
          {FLOW_NODES.map(({ id, x, y, label, Icon, accent }) => (
            <div
              key={id}
              className={cn(
                `fl-node fl-${id} absolute flex items-center gap-1 rounded-lg border px-1.5 text-[10px] font-medium shadow-sm`,
                accent ? "border-[#0b1510] bg-[#0b1510] text-white" : "border-gray-200 bg-white text-gray-700"
              )}
              style={{
                left: `${(x / 360) * 100}%`,
                top: `${(y / 180) * 100}%`,
                width: `${(FLOW_W / 360) * 100}%`,
                height: `${(FLOW_H / 180) * 100}%`,
              }}
            >
              <Icon className={cn("h-3 w-3 shrink-0", accent ? "text-[#00D563]" : "text-gray-400")} />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────── Integrations ─────────────────────────── */

const LOGOS = [
  { name: "Salesforce", src: "/images/integrations/salesforce-2.svg", x: 14, y: 20 },
  { name: "HubSpot", src: "/images/integrations/icons8-hubspot-24.png", x: 8, y: 50 },
  { name: "Zoho", src: "/images/integrations/zoho-1.svg", x: 14, y: 80 },
  { name: "Shopify", src: "/images/integrations/shopify.svg", x: 86, y: 20 },
  { name: "Google Sheets", src: "/images/integrations/icons8-google-sheets-48.png", x: 92, y: 50 },
  { name: "Slack", src: "/images/integrations/icons8-slack-48.png", x: 86, y: 80 },
]

function linkTo(x: number, y: number) {
  // from the hub at (50%,50%) of a 320×180 canvas out to a logo
  const hx = x < 50 ? 160 - 24 : 160 + 24
  const lx = (x / 100) * 320 + (x < 50 ? 20 : -20)
  const ly = (y / 100) * 180
  const k = (lx - hx) * 0.5
  return `M${hx} 90 C${hx + k} 90 ${lx - k} ${ly} ${lx} ${ly}`
}

export function IntegrationsVisual() {
  const root = useRef<HTMLDivElement>(null)
  useLoop(root, (tl, q) => {
    const links = q(".in-link")
    tl.set(links, { strokeDashoffset: 1 })
      .set(q(".in-pulse"), { strokeDashoffset: 0.2, autoAlpha: 1 })
      .set(q(".in-ok"), { autoAlpha: 0, scale: 0.4 })
      .set(q(".in-logo"), { borderColor: "rgba(229,231,235,1)" })
      .to(links, { strokeDashoffset: 0, duration: 0.7, stagger: 0.08, ease: "power2.inOut" }, 0.2)
    LOGOS.forEach((_, i) => {
      tl.to(q(`.in-pulse${i}`), { strokeDashoffset: -1, duration: 0.6, ease: "power1.in" }, i === 0 ? "+=0.2" : "-=0.25")
        .to(q(`.in-logo${i}`), { borderColor: "rgba(0,184,90,0.45)", duration: 0.25 })
        .to(q(`.in-ok${i}`), { autoAlpha: 1, scale: 1, duration: 0.35, ease: "back.out(2.5)" }, "<")
    })
    tl.to([q(".in-ok"), links], { autoAlpha: 0, duration: 0.4 }, "+=1.6")
      .to(q(".in-logo"), { borderColor: "rgba(229,231,235,1)", duration: 0.4 }, "<")
      .set(links, { autoAlpha: 1 })
  })

  return (
    <div ref={root} className="relative h-full overflow-hidden rounded-xl border border-gray-200/80 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative aspect-[16/9] h-full max-w-full">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 180" fill="none">
            {LOGOS.map((l, i) => {
              const d = linkTo(l.x, l.y)
              return (
                <g key={l.name}>
                  <path className="in-link" d={d} pathLength={1} strokeDasharray="1" stroke="#d6dcd8" strokeWidth="1.25" />
                  <path
                    className={`in-pulse in-pulse${i}`}
                    d={d}
                    pathLength={1}
                    strokeDasharray="0.2 1.2"
                    strokeDashoffset={0.2}
                    stroke="#00b85a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              )
            })}
          </svg>

          {LOGOS.map((l, i) => (
            <div
              key={l.name}
              className={`in-logo in-logo${i} absolute grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-gray-200 bg-white shadow-sm`}
              style={{ left: `${l.x}%`, top: `${l.y}%` }}
            >
              <Image src={l.src} alt={l.name} width={22} height={22} className="h-[22px] w-[22px] object-contain" />
              <span className={`in-ok in-ok${i} absolute -right-1.5 -top-1.5 grid h-4 w-4 place-items-center rounded-full bg-[#00b85a] text-white ring-2 ring-white`}>
                <CheckCheck className="h-2.5 w-2.5" />
              </span>
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-[#0b1510] shadow-[0_12px_28px_-10px_rgba(11,21,16,0.6)]">
            <BotrixMark size={26} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────── Security ─────────────────────────── */

const RECORDS = [
  { plain: "Priya Sharma", masked: "P•••• S•••••" },
  { plain: "+91 98765 43210", masked: "+91 98••• •••10" },
  { plain: "Card ending 4821", masked: "AES-256 ••••••••" },
]

export function SecurityVisual({ badges }: { badges: string[] }) {
  const root = useRef<HTMLDivElement>(null)
  useLoop(root, (tl, q) => {
    tl.set(q(".sc-plain"), { autoAlpha: 1 })
      .set(q(".sc-masked"), { autoAlpha: 0 })
      .set(q(".sc-badge"), { autoAlpha: 0.35 })
      .set(q(".sc-check"), { scale: 0, autoAlpha: 0 })
      .set(q(".sc-scan"), { top: "0%", autoAlpha: 0 })
      .to(q(".sc-scan"), { autoAlpha: 1, duration: 0.2 }, 0.5)
      .to(q(".sc-scan"), { top: "100%", duration: 1.8, ease: "power1.inOut" }, "<")
    RECORDS.forEach((_, i) => {
      const at = 0.75 + i * 0.55
      tl.to(q(`.sc-plain${i}`), { autoAlpha: 0, duration: 0.2 }, at).to(q(`.sc-masked${i}`), { autoAlpha: 1, duration: 0.25 }, at)
    })
    tl.to(q(".sc-scan"), { autoAlpha: 0, duration: 0.2 })
      .to(q(".sc-badge"), { autoAlpha: 1, duration: 0.3, stagger: 0.25 }, "-=0.1")
      .to(q(".sc-check"), { scale: 1, autoAlpha: 1, duration: 0.3, stagger: 0.25, ease: "back.out(2.5)" }, "<")
      .to({}, { duration: 2.4 })
  })

  return (
    <div ref={root} className="flex h-full flex-col gap-4 sm:flex-row sm:items-center">
      <div className="relative flex-1 overflow-hidden rounded-xl border border-gray-200/80 bg-white p-4">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-gray-500">
          <ShieldCheck className="h-4 w-4 text-[#00a650]" /> Customer record
          <Lock className="ml-auto h-3.5 w-3.5 text-gray-400" />
        </div>
        <div className="space-y-2">
          {RECORDS.map((r, i) => (
            <div key={i} className="relative h-8 rounded-md bg-gray-50 px-3 font-mono text-[12px] leading-8 text-gray-700">
              <span className={`sc-plain sc-plain${i} invisible absolute inset-x-3`}>{r.plain}</span>
              <span className={`sc-masked sc-masked${i} absolute inset-x-3 text-gray-400`}>{r.masked}</span>
            </div>
          ))}
        </div>
        <div className="sc-scan pointer-events-none absolute inset-x-0 h-10 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#00D563]/15 to-transparent opacity-0">
          <div className="absolute inset-x-0 top-1/2 h-px bg-[#00b85a]/60" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:w-44 sm:flex-col">
        {badges.map((b) => (
          <span
            key={b}
            className="sc-badge flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[12px] font-semibold text-gray-800 shadow-sm"
          >
            <span className="sc-check grid h-4 w-4 place-items-center rounded-full bg-[#00b85a] text-white">
              <CheckCheck className="h-2.5 w-2.5" />
            </span>
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}
