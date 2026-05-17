"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  MessageCircle,
  Bot,
  Mic,
  Clock,
  Plug,
  Wand2,
  Shield,
  Zap,
  Users,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

function AnimatedCard({
  children,
  index,
  className,
  large = false,
}: {
  children: ReactNode
  index: number
  className?: string
  large?: boolean
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={cn(
        "group relative rounded-xl sm:rounded-2xl border-2 border-[#00D563]/30 bg-white shadow-lg",
        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-2 hover:border-[#00D563] hover:shadow-2xl hover:shadow-[#00D563]/15",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        large ? "p-7 sm:p-9 lg:p-10 min-h-[220px] lg:min-h-[260px]" : "p-6 sm:p-7 lg:p-8 min-h-[200px] lg:min-h-[220px]",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00D563]/0 to-[#00D563]/0 group-hover:from-[#00D563]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  )
}

function FeatureCardContent({
  icon: Icon,
  title,
  description,
  technical,
  unique,
  large,
}: {
  icon: LucideIcon
  title: string
  description: string
  technical: string
  unique?: boolean
  large?: boolean
}) {
  return (
    <div className="space-y-3 sm:space-y-4 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "rounded-xl sm:rounded-2xl flex items-center justify-center bg-[#00D563]",
            "transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3",
            large ? "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20" : "w-12 h-12 sm:w-14 sm:h-14"
          )}
        >
          <Icon
            className={cn(
              "text-white transition-transform duration-500 group-hover:scale-105",
              large ? "w-7 h-7 sm:w-8 sm:h-8" : "w-6 h-6 sm:w-7 sm:h-7"
            )}
          />
        </div>
        {unique && (
          <span className="bg-[#00D563] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
            UNIQUE
          </span>
        )}
      </div>
      <h3
        className={cn(
          "font-bold text-gray-900",
          large ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg sm:text-xl"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-gray-600 leading-relaxed flex-1",
          large ? "text-base sm:text-lg" : "text-sm sm:text-base"
        )}
      >
        {description}
      </p>
      <div className="bg-gray-50 rounded-lg p-2 sm:p-3 transition-colors duration-300 group-hover:bg-[#00D563]/5">
        <p className="text-xs sm:text-sm font-medium text-gray-700">{technical}</p>
      </div>
    </div>
  )
}

function getZigzagSpan(index: number) {
  const row = Math.floor(index / 2)
  const posInRow = index % 2
  const isLarge = (row % 2 === 0 && posInRow === 0) || (row % 2 === 1 && posInRow === 1)
  return { isLarge, colSpan: isLarge ? "lg:col-span-7" : "lg:col-span-5" }
}

const PLATFORM_STATS = [
  { icon: Users, value: "500+", label: "Businesses Automated" },
  { icon: MessageCircle, value: "10M+", label: "Chats Handled Monthly" },
  { icon: Zap, value: "< 200ms", label: "Chat Response" },
  { icon: Clock, value: "24/7", label: "AI Availability" },
] as const

function StatsBar() {
  const { ref, isInView } = useInView(0.2)

  return (
    <div
      ref={ref}
      className={cn(
        "bg-gradient-to-r from-[#00D563] to-[#00B553] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white",
        "transition-all duration-700 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {PLATFORM_STATS.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={cn(
                "text-center transition-all duration-500 ease-out",
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-green-100">{stat.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "WhatsApp Business Chatbots",
      description:
        "Automate customer chats, broadcast campaigns, and support on WhatsApp Business API — the channel your customers already use every day.",
      unique: true,
      technical: "Official WhatsApp Business API",
    },
    {
      icon: Bot,
      title: "Intelligent Web Chatbots",
      description:
        "Engage website visitors 24/7, capture leads, and answer FAQs instantly with AI-powered chat widgets trained on your business.",
      unique: true,
      technical: "GenAI + Lead Capture",
    },
    {
      icon: Mic,
      title: "AI Voice Agents",
      description:
        "Handle inbound calls with natural voice bots for bookings, support, and IVR — reducing wait times and staffing costs.",
      unique: true,
      technical: "Multi-language Voice AI",
    },
    {
      icon: Wand2,
      title: "No-Code Chatbot Builder",
      description:
        "Design conversation flows with drag-and-drop — deploy chatbots across channels in minutes without writing a single line of code.",
      unique: false,
      technical: "Visual Flow Designer",
    },
    {
      icon: Plug,
      title: "CRM & Tool Integrations",
      description:
        "Sync conversations with Salesforce, HubSpot, Zoho, and 100+ platforms — every chat logged, every lead captured automatically.",
      unique: false,
      technical: "100+ Pre-built Connectors",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description:
        "Enterprise-grade encryption, GDPR-ready data handling, and WhatsApp policy compliance so your customer data stays protected.",
      unique: false,
      technical: "SOC 2 · GDPR · E2E Encryption",
    },
  ]

  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-12 sm:mb-16 transition-all duration-700 ease-out",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose
            <span className="text-[#00D563]"> BotrixAI?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From WhatsApp to your website and phone lines — intelligent chatbots that automate support, capture leads, and delight customers around the clock
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {features.map((feature, index) => {
            const { isLarge, colSpan } = getZigzagSpan(index)
            return (
              <AnimatedCard
                key={feature.title}
                index={index}
                large={isLarge}
                className={cn("col-span-1", colSpan)}
              >
                <FeatureCardContent {...feature} large={isLarge} />
              </AnimatedCard>
            )
          })}
        </div>

        <StatsBar />
      </div>
    </section>
  )
}
