"use client"

import { useRef, useState } from "react"
import { Brain, Code, Database, Globe, Shield, Zap, type LucideIcon } from "lucide-react"
import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap"
import { cn } from "@/lib/utils"

type Tech = {
  category: string
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

// Listed top-down as you read them; the stack draws them bottom-up (Security is the foundation)
const TECHNOLOGIES: Tech[] = [
  {
    category: "AI Models",
    icon: Brain,
    title: "Powered by Advanced LLMs",
    description: "GPT-4, Claude, Gemini, and custom-trained models",
    items: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Custom NLP Models"],
  },
  {
    category: "Integrations",
    icon: Globe,
    title: "Seamless Connectivity",
    description: "Connect with your favorite business tools",
    items: ["Salesforce", "HubSpot", "Shopify", "Google Sheets", "Slack", "Microsoft Teams"],
  },
  {
    category: "APIs",
    icon: Code,
    title: "Developer-Friendly",
    description: "RESTful APIs and Webhooks for seamless integration",
    items: ["REST APIs", "GraphQL", "Webhooks", "SDKs", "Real-time Events"],
  },
  {
    category: "Security",
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliant with enterprise-grade security",
    items: ["SOC 2 Type II", "GDPR Compliant", "ISO 27001", "End-to-End Encryption"],
  },
]

const ARCHITECTURE = [
  { icon: Globe, title: "Multi-Channel", description: "Deploy across web, mobile, WhatsApp, and voice channels" },
  { icon: Zap, title: "Real-Time Processing", description: "Lightning-fast response times with edge computing" },
  { icon: Database, title: "Scalable Infrastructure", description: "Auto-scaling to handle millions of conversations" },
]

const HEADER_OFFSET = 64
const SLAB = 280
const GAP = 34
const RAISE = 96
const EDGE_PLATES = 5

function IsoStack({ active }: { active: number }) {
  const activeLayer = TECHNOLOGIES.length - 1 - active
  const top = (TECHNOLOGIES.length - 2) * GAP
  return (
    <div className="relative grid h-[420px] place-items-center sm:h-[480px]">
      <div className="absolute inset-x-8 bottom-6 h-24 rounded-[50%] bg-[#00b85a]/10 blur-3xl" />
      <div className="scale-[0.72] sm:scale-90 xl:scale-100">
        <div
          className="relative"
          style={{
            width: SLAB,
            height: SLAB,
            transformStyle: "preserve-3d",
            transform: "translateY(80px) rotateX(58deg) rotateZ(-45deg)",
          }}
        >
          {/* Requests rising through the layers */}
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="ts-rise absolute left-1/2 top-1/2 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-[#00D563] shadow-[0_0_14px_4px_rgba(0,213,99,0.45)]"
              style={{ animationDelay: `${i * 1.1}s` }}
            />
          ))}

          {[...TECHNOLOGIES].reverse().map((tech, layer) => {
            const on = layer === activeLayer
            // The active layer floats clear above the rest so its face is never covered; the others close ranks below
            const z = on ? top + RAISE : (layer > activeLayer ? layer - 1 : layer) * GAP
            const Icon = tech.icon
            return (
              <div
                key={tech.category}
                className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                style={{ transformStyle: "preserve-3d", transform: `translateZ(${z}px)` }}
              >
                {/* Stacked plates fake the slab's thickness */}
                {Array.from({ length: EDGE_PLATES }, (_, p) => (
                  <div
                    key={p}
                    className={cn(
                      "absolute inset-0 rounded-[28px] transition-colors duration-700",
                      on ? "bg-[#9fe3bf]" : "bg-[#dfe5e1]"
                    )}
                    style={{ transform: `translateZ(${-(p + 1) * 2}px)` }}
                  />
                ))}
                <div
                  className={cn(
                    "absolute inset-0 overflow-hidden rounded-[28px] border p-5 transition-colors duration-700",
                    on
                      ? "border-[#00b85a]/50 bg-gradient-to-br from-white via-[#f1fcf6] to-[#dff7ea] shadow-[0_30px_60px_-20px_rgba(0,120,60,0.35)]"
                      : "border-gray-200 bg-gradient-to-br from-white to-[#f4f6f5]"
                  )}
                >
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(16,24,20,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,20,0.05) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "grid h-9 w-9 place-items-center rounded-xl transition-colors duration-700",
                          on ? "bg-[#0b1510] text-[#00D563]" : "bg-white text-gray-400 ring-1 ring-gray-200"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span
                        className={cn(
                          "text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-700",
                          on ? "text-gray-900" : "text-gray-400"
                        )}
                      >
                        {tech.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tech.items.map((item) => (
                        <span
                          key={item}
                          className={cn(
                            "rounded-md px-2 py-1 text-[11px] font-medium transition-colors duration-700",
                            on
                              ? "bg-white text-gray-800 shadow-sm ring-1 ring-[#00b85a]/20"
                              : "bg-white/70 text-gray-400 ring-1 ring-gray-200"
                          )}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function TechnologyStack() {
  const root = useRef<HTMLElement>(null)
  const stepper = useRef<ScrollTrigger | null>(null)
  const settled = useRef(0)
  const [active, setActive] = useState(0)
  const last = TECHNOLOGIES.length - 1

  // Rail click: scroll to where that step sits inside the pinned range
  const goTo = (i: number) => {
    const st = stepper.current
    if (!st) return setActive(i)
    settled.current = i
    window.scrollTo({ top: st.start + ((st.end - st.start) * i) / last, behavior: "smooth" })
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Desktop: pin the stage and step through one technology per scroll, snapping to each
      mm.add("(min-width: 1024px)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".ts-panel")
        gsap.set(panels.slice(1), { autoAlpha: 0, y: 48 })

        // Step the snap from the last step we settled on, so even a long flick only moves one technology
        settled.current = 0
        const tl = gsap.timeline({
          defaults: { duration: 0.5, ease: "power2.inOut" },
          scrollTrigger: {
            trigger: ".ts-pin",
            start: `top ${HEADER_OFFSET}px`,
            end: () => `+=${last * window.innerHeight * 0.85}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            snap: {
              snapTo: (value) => {
                const pos = value * last
                const from = settled.current
                const next = pos > from + 0.12 ? from + 1 : pos < from - 0.12 ? from - 1 : from
                return Math.min(last, Math.max(0, next)) / last
              },
              // judge the step from where the scroll actually stopped, not a momentum projection
              inertia: false,
              duration: { min: 0.4, max: 0.8 },
              delay: 0.12,
              ease: "power2.inOut",
              onComplete: (self) => {
                settled.current = Math.round(self.progress * last)
              },
            },
            onEnter: () => {
              settled.current = 0
            },
            onEnterBack: () => {
              settled.current = last
            },
            onUpdate: (self) => setActive(Math.round(self.progress * last)),
          },
        })
        tl.addLabel("step0")
        panels.slice(1).forEach((panel, i) => {
          tl.to(panels[i], { autoAlpha: 0, y: -48 })
            .to(panel, { autoAlpha: 1, y: 0 }, "<")
            .addLabel(`step${i + 1}`)
        })
        tl.fromTo(".ts-progress", { scaleY: 0 }, { scaleY: 1, ease: "none", duration: tl.duration() }, 0)
        stepper.current = tl.scrollTrigger ?? null

        return () => {
          stepper.current = null
        }
      })

      // Smaller screens: the stack sits above the list, so step through layers on a timer while it's visible
      mm.add(`(max-width: 1023px) and ${MOTION_OK}`, () => {
        let timer = 0
        const st = ScrollTrigger.create({
          trigger: ".ts-stack",
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => {
            window.clearInterval(timer)
            if (self.isActive) timer = window.setInterval(() => setActive((a) => (a + 1) % TECHNOLOGIES.length), 2400)
          },
        })
        gsap.utils.toArray<HTMLElement>(".ts-panel").forEach((panel) => {
          gsap.from(panel.children, {
            y: 24,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: panel, start: "top 85%" },
          })
        })
        return () => {
          window.clearInterval(timer)
          st.kill()
        }
      })

      mm.add(MOTION_OK, () => {
        const split = SplitText.create(".ts-title", { type: "words", mask: "words" })
        gsap
          .timeline({ scrollTrigger: { trigger: ".ts-title", start: "top 85%" } })
          .from(split.words, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.07 })
          .from(".ts-sub", { y: 16, autoAlpha: 0, duration: 0.8, ease: "power3.out" }, "-=0.55")

        gsap.from(".ts-stack", {
          autoAlpha: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ts-stack", start: "top 85%" },
        })

        // Scalable Architecture animations: disabled along with its markup below
        // gsap.from(".ts-line", {
        //   scaleX: 0,
        //   ease: "none",
        //   scrollTrigger: { trigger: ".ts-arch", start: "top 75%", end: "top 35%", scrub: 0.6 },
        // })
        // gsap.from(".ts-node", {
        //   y: 30,
        //   autoAlpha: 0,
        //   duration: 0.9,
        //   ease: "power3.out",
        //   stagger: 0.15,
        //   scrollTrigger: { trigger: ".ts-arch", start: "top 75%" },
        // })
      })
    },
    { scope: root }
  )

  return (
    <section ref={root} className="relative w-full overflow-clip bg-white pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-0 lg:pt-32">
      <style>{`
        @keyframes ts-rise {
          0%   { transform: translateZ(-20px); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateZ(260px); opacity: 0; }
        }
        .ts-rise { animation: ts-rise 3.3s cubic-bezier(.45,0,.55,1) infinite; }
        @keyframes ts-pulse { from { left: 0%; } to { left: 100%; } }
        .ts-pulse { animation: ts-pulse 3s cubic-bezier(.45,0,.55,1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ts-rise, .ts-pulse { animation: none; opacity: 0; }
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,20,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,20,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-4">
          <h2 className="ts-title text-3xl/[1.2] font-semibold tracking-[-0.03em] text-gray-900 sm:text-4xl/[1.2] lg:text-5xl/[1.2]">
            Built on <span className="text-[#00b85a]">Cutting-Edge Technology</span>
          </h2>
          <p className="ts-sub mt-4 text-base leading-relaxed text-gray-600 sm:mt-5 sm:text-lg">
            Our platform leverages the latest AI models and enterprise-grade infrastructure to deliver exceptional
            performance
          </p>
        </div>

        {/* Pinned stage on desktop: stack on the left, one technology at a time on the right */}
        <div className="ts-pin grid gap-10 lg:h-[calc(100vh-64px)] lg:min-h-[500px] lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
          <div className="ts-stack">
            <IsoStack active={active} />
          </div>

          <div className="lg:flex lg:items-center lg:gap-10">
            {/* Step rail */}
            <div className="relative hidden shrink-0 py-1 pl-5 lg:block">
              <div className="absolute bottom-0 left-0 top-0 w-px bg-gray-200">
                <div className="ts-progress h-full w-full origin-top bg-[#00b85a]" />
              </div>
              <div className="flex flex-col gap-5">
                {TECHNOLOGIES.map((tech, i) => (
                  <button
                    key={tech.category}
                    type="button"
                    onClick={() => goTo(i)}
                    className={cn(
                      "flex items-baseline gap-2 text-left text-[13px] font-medium transition-colors duration-300",
                      i === active ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                    )}
                  >
                    <span className={cn("font-mono text-[11px]", i === active ? "text-[#00894a]" : "")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {tech.category}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative lg:h-[340px] lg:flex-1">
              {TECHNOLOGIES.map((tech, i) => {
                const Icon = tech.icon
                const on = i === active
                return (
                  <div
                    key={tech.category}
                    className={cn(
                      "ts-panel border-l py-8 pl-6 transition-colors duration-500 sm:pl-8",
                      "lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center lg:border-0 lg:p-0",
                      on ? "border-[#00b85a]" : "border-gray-200"
                    )}
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0b1510] text-[#00D563]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#00894a]">
                        {String(i + 1).padStart(2, "0")} · {tech.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">{tech.title}</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-gray-600 sm:text-base">
                      {tech.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tech.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[13px] font-medium text-gray-700 shadow-[0_1px_2px_rgba(16,24,20,0.04)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Architecture pipeline: disabled for now. To re-enable, uncomment this block and the .ts-line/.ts-node animations above.
        <div className="ts-arch relative mt-20 overflow-hidden rounded-3xl border border-gray-200/80 bg-[#f7f9f8] px-6 py-12 sm:mt-28 sm:px-10 sm:py-16 lg:mt-16">
          <div
            className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]"
            style={{ backgroundImage: "radial-gradient(rgba(16,24,20,0.08) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />
          <h3 className="relative mb-12 text-center text-2xl font-semibold tracking-tight text-gray-900 sm:mb-16 sm:text-3xl">
            Scalable Architecture
          </h3>

          <div className="relative">
            Connector: horizontal on desktop, hidden on mobile where nodes stack
            <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px md:block">
              <div className="ts-line h-full origin-left bg-gradient-to-r from-[#00b85a]/30 via-[#00b85a]/60 to-[#00b85a]/30" />
              <span className="ts-pulse absolute top-1/2 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#00D563] shadow-[0_0_12px_3px_rgba(0,213,99,0.5)]" />
            </div>

            <div className="grid gap-10 text-center md:grid-cols-3 md:gap-8">
              {ARCHITECTURE.map(({ icon: Icon, title, description }, i) => (
                <div key={title} className="ts-node relative">
                  <span className="relative mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[#0b1510] text-[#00D563] shadow-[0_16px_32px_-16px_rgba(11,21,16,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-white text-[11px] font-semibold text-gray-700 shadow ring-1 ring-gray-200">
                      {i + 1}
                    </span>
                  </span>
                  <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">{title}</h4>
                  <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}
