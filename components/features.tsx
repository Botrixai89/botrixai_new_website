"use client"

import { useRef, type PointerEvent, type ReactNode } from "react"
import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap"
import {
  WhatsAppVisual,
  VoiceVisual,
  WebChatVisual,
  BuilderVisual,
  IntegrationsVisual,
  SecurityVisual,
} from "@/components/features-visuals"
import { cn } from "@/lib/utils"

type Feature = {
  title: string
  description: string
  technical: string
  unique: boolean
}

const FEATURES: Record<"whatsapp" | "web" | "voice" | "builder" | "crm" | "security", Feature> = {
  whatsapp: {
    title: "WhatsApp Business Chatbots",
    description:
      "Automate customer chats, broadcast campaigns, and support on WhatsApp Business API the channel your customers already use every day.",
    unique: true,
    technical: "Official WhatsApp Business API",
  },
  web: {
    title: "Intelligent Web Chatbots",
    description:
      "Engage website visitors 24/7, capture leads, and answer FAQs instantly with AI-powered chat widgets trained on your business.",
    unique: true,
    technical: "GenAI + Lead Capture",
  },
  voice: {
    title: "AI Voice Agents",
    description:
      "Handle inbound calls with natural voice bots for bookings, support, and IVR — reducing wait times and staffing costs.",
    unique: true,
    technical: "Multi-language Voice AI",
  },
  builder: {
    title: "No-Code Chatbot Builder",
    description:
      "Design conversation flows with drag-and-drop, Deploy chatbots across channels in minutes without writing a single line of code.",
    unique: false,
    technical: "Visual Flow Designer",
  },
  crm: {
    title: "CRM & Tool Integrations",
    description:
      "Sync conversations with Salesforce, HubSpot, Zoho, and 100+ platforms every chat logged, every lead captured automatically.",
    unique: false,
    technical: "100+ Pre-built Connectors",
  },
  security: {
    title: "Secure & Compliant",
    description:
      "Enterprise-grade encryption, GDPR-ready data handling, and WhatsApp policy compliance so your customer data stays protected.",
    unique: false,
    technical: "SOC 2 · GDPR · E2E Encryption",
  },
}

// Cursor-following spotlight on the card surface and its border
function trackPointer(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty("--mx", `${e.clientX - r.left}px`)
  el.style.setProperty("--my", `${e.clientY - r.top}px`)
}

function BentoCard({
  feature,
  visual,
  visualClassName,
  horizontal = false,
  className,
}: {
  feature: Feature
  visual: ReactNode
  visualClassName?: string
  horizontal?: boolean
  className?: string
}) {
  return (
    <article
      onPointerMove={trackPointer}
      className={cn(
        "fx-card group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-2",
        "shadow-[0_1px_2px_rgba(16,24,20,0.04),0_16px_40px_-24px_rgba(16,24,20,0.18)]",
        "transition-shadow duration-500 hover:shadow-[0_1px_2px_rgba(16,24,20,0.04),0_28px_60px_-28px_rgba(16,24,20,0.28)]",
        horizontal && "xl:flex-row-reverse xl:items-stretch",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(480px circle at var(--mx) var(--my), rgba(0,213,99,0.06), transparent 45%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: 1,
          background: "radial-gradient(320px circle at var(--mx) var(--my), rgba(0,184,90,0.45), transparent 45%)",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className={cn("relative", horizontal ? "xl:min-w-0 xl:flex-1" : "", visualClassName)}>{visual}</div>

      <div className={cn("relative px-4 pb-4 pt-5 sm:px-5 sm:pb-5", horizontal && "xl:w-[38%] xl:self-center xl:px-7")}>
        <div className="mb-2.5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00D563]" />
          {feature.technical}
          {feature.unique && (
            <span className="ml-auto rounded-full bg-[#00D563]/10 px-2 py-0.5 text-[10px] font-semibold tracking-[0.06em] text-[#00894a]">
              Unique
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">{feature.title}</h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-gray-600 sm:text-[15px]">{feature.description}</p>
      </div>
    </article>
  )
}

export default function Features() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(".fx-title", { type: "words", mask: "words" })
        const head = gsap.timeline({ scrollTrigger: { trigger: ".fx-title", start: "top 85%" } })
        head
          .from(split.words, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.07 })
          .from(".fx-sub", { y: 16, autoAlpha: 0, duration: 0.8, ease: "power3.out" }, "-=0.55")

        gsap.set(".fx-card", { autoAlpha: 0, y: 60, rotateX: -10, transformPerspective: 1200, transformOrigin: "50% 0%" })
        ScrollTrigger.batch(".fx-card", {
          start: "top 90%",
          once: true,
          onEnter: (cards) =>
            gsap.to(cards, { autoAlpha: 1, y: 0, rotateX: 0, duration: 1.1, ease: "power3.out", stagger: 0.12 }),
        })
      })
    },
    { scope: root }
  )

  return (
    <section ref={root} className="relative -mt-12 bg-[#f7f9f8] pb-16 pt-24 sm:-mt-16 sm:pb-20 sm:pt-28">
      <style>{`
        @keyframes fv-dot { 0%, 60%, 100% { transform: translateY(0); opacity: .45; } 30% { transform: translateY(-3px); opacity: 1; } }
        .fv-dot { animation: fv-dot 1.1s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .fv-dot { animation: none; } }
      `}</style>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        style={{ backgroundImage: "radial-gradient(rgba(16,24,20,0.07) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <h2 className="fx-title text-3xl/[1.2] font-semibold tracking-[-0.03em] text-gray-900 sm:text-4xl/[1.2] lg:text-5xl/[1.2]">
            Why Choose <span className="text-[#00b85a]">BotrixAI?</span>
          </h2>
          <p className="fx-sub mt-4 text-base leading-relaxed text-gray-600 sm:mt-5 sm:text-lg">
            From WhatsApp to your website and phone lines intelligent chatbots that automate support, capture leads, and delight customers around the clock
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          <BentoCard
            feature={FEATURES.whatsapp}
            visual={<WhatsAppVisual />}
            horizontal
            className="md:col-span-2 lg:col-span-12 xl:col-span-7"
          />
          <BentoCard
            feature={FEATURES.voice}
            visual={<VoiceVisual />}
            visualClassName="h-[190px]"
            className="md:col-span-2 lg:col-span-12 xl:col-span-5"
          />
          <BentoCard feature={FEATURES.web} visual={<WebChatVisual />} visualClassName="h-[180px]" className="lg:col-span-6 xl:col-span-4" />
          <BentoCard feature={FEATURES.builder} visual={<BuilderVisual />} visualClassName="h-[180px]" className="lg:col-span-6 xl:col-span-4" />
          <BentoCard
            feature={FEATURES.crm}
            visual={<IntegrationsVisual />}
            visualClassName="h-[180px]"
            className="md:col-span-2 lg:col-span-12 xl:col-span-4"
          />
          <BentoCard
            feature={FEATURES.security}
            visual={<SecurityVisual badges={FEATURES.security.technical.split(" · ")} />}
            horizontal
            className="md:col-span-2 lg:col-span-12"
          />
        </div>
      </div>
    </section>
  )
}
