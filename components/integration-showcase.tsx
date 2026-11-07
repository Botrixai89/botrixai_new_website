"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BotrixMark from "@/components/botrix-mark"
import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap"

const icon = (file: string) => `/images/integrations/${file}`

// Inner orbits are shorter and quicker, as in a real solar system
const ORBITS = [
  {
    scale: 0.47,
    period: 38,
    offset: 20,
    size: 54,
    services: [
      { name: "WhatsApp", src: icon("icons8-whatsapp-48.png") },
      { name: "Salesforce", src: icon("icons8-salesforce-50.png") },
      { name: "Zendesk", src: icon("icons8-zendesk-50.png") },
      { name: "HubSpot", src: icon("icons8-hubspot-24.png") },
    ],
  },
  {
    scale: 0.73,
    period: 58,
    offset: 65,
    size: 48,
    services: [
      { name: "Slack", src: icon("icons8-slack-48.png") },
      { name: "Stripe", src: icon("icons8-stripe-48.png") },
      { name: "PayPal", src: icon("icons8-paypal-48.png") },
      { name: "Discord", src: icon("icons8-discord-48.png") },
    ],
  },
  {
    scale: 1,
    period: 84,
    offset: 110,
    size: 44,
    services: [
      { name: "Telegram", src: icon("icons8-telegram-94.png") },
      { name: "Notion", src: icon("icons8-notion-48.png") },
      { name: "Trello", src: icon("icons8-trello-48.png") },
      { name: "Chargebee", src: icon("Chargebee.png") },
    ],
  },
]

const PLANETS = ORBITS.flatMap((orbit, o) =>
  orbit.services.map((service, i) => ({ ...service, o, base: ((orbit.offset + i * 90) * Math.PI) / 180 }))
)

const PARTNERS = [
  { name: "Razorpay", logo: icon("Razorpay.png") },
  { name: "Paddle", logo: icon("Paddle.jpeg") },
  { name: "ActiveCampaign", logo: icon("ActiveCampaign.png") },
  { name: "Asana", logo: icon("Asana.png") },
  { name: "ConvertKit", logo: icon("ConvertKit.png") },
  { name: "Mailchimp", logo: icon("icons8-mailchimp-24.png") },
]

const TILT_DEG = -18
const TILT = (TILT_DEG * Math.PI) / 180
const SQUASH = 0.42

type Layout = { w: number; h: number; cx: number; cy: number; outer: number; compact: boolean }

function computeLayout(w: number, h: number): Layout {
  const desktop = w >= 1024
  const outer = Math.min(w * (desktop ? 0.38 : 0.62), 640, h * 0.72)
  return {
    w,
    h,
    // Far enough right that the screen edge cuts the outer orbit to about three-quarters
    cx: desktop ? w - outer * 0.475 : w * 0.7,
    cy: h / 2,
    outer,
    compact: w < 640,
  }
}

export default function IntegrationShowcase() {
  const root = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const planets = useRef<(HTMLDivElement | null)[]>([])
  const layoutRef = useRef<Layout | null>(null)
  const clock = useRef(0)
  const spread = useRef(1)
  const hovering = useRef(false)
  const visible = useRef(true)
  const [layout, setLayout] = useState<Layout | null>(null)

  const draw = () => {
    const l = layoutRef.current
    if (!l) return
    PLANETS.forEach((planet, i) => {
      const el = planets.current[i]
      if (!el) return
      const orbit = ORBITS[planet.o]
      const a = planet.base + (clock.current * 2 * Math.PI) / orbit.period
      const rx = l.outer * orbit.scale * spread.current
      const ox = rx * Math.cos(a)
      const oy = rx * SQUASH * Math.sin(a)
      const x = ox * Math.cos(TILT) - oy * Math.sin(TILT)
      const y = ox * Math.sin(TILT) + oy * Math.cos(TILT)
      // The lower half of the ellipse is nearest the viewer: larger, solid, and in front of the sun
      const depth = Math.sin(a)
      el.style.transform = `translate3d(${l.cx + x}px, ${l.cy + y}px, 0) translate(-50%, -50%) scale(${0.82 + 0.13 * (depth + 1)})`
      el.style.setProperty("--ig-fade", String(0.7 + 0.15 * (depth + 1)))
      el.style.zIndex = String(Math.round(20 + depth * 10))
      el.style.visibility = "visible"
    })
  }

  useEffect(() => {
    const el = stage.current
    if (!el) return
    const measure = () => {
      const r = el.getBoundingClientRect()
      if (!r.width || !r.height) return
      const next = computeLayout(r.width, r.height)
      layoutRef.current = next
      setLayout(next)
      draw()
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(".ig-title", { type: "words", mask: "words" })
        gsap
          .timeline({ scrollTrigger: { trigger: ".ig-title", start: "top 85%" } })
          .from(split.words, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.07 })
          .from(".ig-reveal", { y: 18, autoAlpha: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 }, "-=0.55")

        // The system opens outward from the sun the first time it scrolls into view
        spread.current = 0.55
        gsap.to(spread, {
          current: 1,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        })
        gsap.from(".ig-system", {
          autoAlpha: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        })

        ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => {
            visible.current = self.isActive
          },
        })

        const tick = (_time: number, deltaMs: number) => {
          if (!visible.current) return
          if (!hovering.current) clock.current += Math.min(deltaMs, 100) / 1000
          draw()
        }
        gsap.ticker.add(tick)
        return () => {
          gsap.ticker.remove(tick)
          spread.current = 1
        }
      })
    },
    { scope: root }
  )

  const compact = layout?.compact ?? false

  return (
    <section ref={root} className="relative w-full overflow-hidden bg-white pt-16 sm:pt-20 lg:flex lg:min-h-[calc(100svh-64px)] lg:items-center lg:py-8">
      <div className="pointer-events-none relative z-40 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-auto mx-auto max-w-xl text-center lg:mx-0 lg:max-w-[400px] lg:text-left xl:max-w-[470px]">
          <h2 className="ig-title text-3xl/[1.2] font-semibold tracking-[-0.03em] text-gray-900 sm:text-4xl/[1.2] lg:text-5xl/[1.2]">
            Seamless <span className="text-[#00b85a]">Integration</span>
          </h2>
          <p className="ig-reveal mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Connect WhatsApp, Salesforce, Zendesk, HubSpot &amp; more to BotrixAI with a single click
          </p>

          <h3 className="ig-reveal mt-6 text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
            Trusted by Leading Platforms
          </h3>
          <p className="ig-reveal mt-1.5 text-[15px] leading-relaxed text-gray-600">
            Seamlessly integrate with your existing tech stack and payment processors
          </p>

          <div className="ig-reveal mt-5 grid grid-cols-3 gap-3">
            {PARTNERS.map((partner) => (
              <div key={partner.name}>
                <div className="grid h-14 place-items-center rounded-xl border border-gray-200/80 bg-white shadow-[0_1px_2px_rgba(16,24,20,0.04)] transition-colors duration-300 hover:border-[#00b85a]/40">
                  <Image src={partner.logo} alt="" width={36} height={36} className="h-8 w-8 object-contain" />
                </div>
                <div className="mt-1.5 truncate text-center text-xs font-medium text-gray-500">{partner.name}</div>
              </div>
            ))}
          </div>

          <div className="ig-reveal mt-5">
            <Link
              href="/integrations"
              className="group inline-flex items-center rounded-full bg-[#00D563] px-6 py-3 text-[15px] font-medium text-[#04160c] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_24px_-10px_rgba(0,160,75,0.55)] transition-colors duration-200 hover:bg-[#14de72]"
            >
              View All Integrations
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Solar system: its own band on small screens, the full section behind the text on desktop */}
      <div ref={stage} className="ig-system pointer-events-none relative mt-6 h-[420px] sm:h-[480px] lg:absolute lg:inset-0 lg:mt-0 lg:h-auto">
        {layout && (
          <>
            <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${layout.w} ${layout.h}`} fill="none">
              {ORBITS.map((orbit) => (
                <ellipse
                  key={orbit.period}
                  cx={layout.cx}
                  cy={layout.cy}
                  rx={layout.outer * orbit.scale}
                  ry={layout.outer * orbit.scale * SQUASH}
                  transform={`rotate(${TILT_DEG} ${layout.cx} ${layout.cy})`}
                  stroke="#0f8a4d"
                  strokeOpacity="0.28"
                />
              ))}
            </svg>

            <div
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ left: layout.cx, top: layout.cy, width: compact ? 68 : 92, height: compact ? 68 : 92 }}
            >
              <div className="relative grid h-full w-full place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#6ff0ab,#00c866_55%,#00994f)]">
                <div className="brightness-0 invert">
                  <BotrixMark size={compact ? 32 : 44} />
                </div>
              </div>
            </div>
          </>
        )}

        {PLANETS.map((planet, i) => {
          const size = Math.round(ORBITS[planet.o].size * (compact ? 0.78 : 1))
          return (
            <div
              key={planet.name}
              ref={(el) => {
                planets.current[i] = el
              }}
              onPointerEnter={() => {
                hovering.current = true
              }}
              onPointerLeave={() => {
                hovering.current = false
              }}
              className="group pointer-events-auto invisible absolute left-0 top-0"
              style={{ width: size, height: size }}
            >
              <div className="grid h-full w-full place-items-center rounded-full border border-gray-200/90 bg-[radial-gradient(circle_at_35%_30%,#ffffff,#f4f7f5_65%,#e3eae6)] shadow-[0_10px_22px_-10px_rgba(16,24,20,0.4)] transition-transform duration-300 group-hover:scale-110">
                <Image src={planet.src} alt="" width={28} height={28} className="object-contain" style={{ width: size * 0.5, height: size * 0.5, opacity: "var(--ig-fade)" }} />
              </div>
              <span
                className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium text-gray-600"
                style={{ opacity: "var(--ig-fade)" }}
              >
                {planet.name}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
