"use client"

import { useEffect, useState } from "react"
import { Menu, X, ChevronDown, Globe, ArrowRight, Sparkles, MessageCircle, Smartphone, Mic, Building, Headphones, BarChart3, Phone, Car, Plane, Banknote, Shield, Heart, Settings, ShoppingCart, Users, GraduationCap, MapPin, Mail, Instagram, Headset, PhoneCall, TrendingUp, Mic2, MessageSquareCode } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <Image
    src="/images/integrations/icons8-whatsapp-48.png"
    alt="WhatsApp"
    width={16}
    height={16}
    className={className}
  />
)

export default function Header({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!transparentOnTop) return
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [transparentOnTop])

  // Always dark (design.md top-nav). Over the home hero it starts see-through and
  // frosts to canvas once the user scrolls; every other page is frosted from the start.
  const isClear = transparentOnTop && !isScrolled && !isMenuOpen
  const navLink = "rounded-full px-4 py-2 text-sm font-medium text-dim transition-colors hover:bg-surface-1 hover:text-bone"
  const openCalendly = () => window.open("https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08", "_blank")

  const aiAgentCategories = [
    {
      title: "AI Agents for Customer Service",
      icon: MessageCircle,
      slug: "customer-service",
    },
    {
      title: "AI Agents for Contact Center",
      icon: Headphones,
      slug: "contact-center",
    },
    {
      title: "AI Agent for Sales & Marketing",
      icon: BarChart3,
      slug: "sales-marketing",
    },
    {
      title: "AI Voice Agent",
      icon: Phone,
      slug: "voice-agent",
    },
    {
      title: "WhatsApp Bot & Automation",
      icon: WhatsAppIcon,
      slug: "whatsapp-bot",
    },
    {
      title: "RCS Messaging",
      icon: Smartphone,
      slug: "rcs-messaging",
    },
    {
      title: "Email Marketing",
      icon: Mail,
      slug: "email-marketing",
    },
    {
      title: "Instagram DM Automation",
      icon: Instagram,
      slug: "instagram-automation",
    }
  ]

  const enterpriseIntegrations = [
    { name: "Shopify", logo: "/images/integrations/shopify.svg" },
    { name: "ZOHO", logo: "/images/integrations/zoho-1.svg" },
    { name: "Salesforce", logo: "/images/integrations/salesforce-2.svg" },
    { name: "SAP", logo: "/images/integrations/sap-3.svg" },
    { name: "Microsoft Dynamics", logo: "/images/integrations/microsoft_dynamics_365-logo_brandlogos.net_usypi-512x515.png" },
    { name: "Zapier", logo: "/images/integrations/zapier-logo_brandlogos.net_ccjch.png" },
    { name: "Paddle", logo: "/images/integrations/Paddle.jpeg" },
    { name: "Chargebee", logo: "/images/integrations/Chargebee.png" }
  ]

  // Add stable slugs for industries for routing
  const industries = [
    { name: "AI Agents for Automotive", icon: Car, slug: "automotive" },
    { name: "AI Agents for Aviation & logistics", icon: Plane, slug: "aviation-logistics" },
    { name: "AI Agent for Banking & Financial services", icon: Banknote, slug: "banking-financial" },
    { name: "AI Agent for Insurance", icon: Shield, slug: "insurance" },
    { name: "AI Agents for Healthcare", icon: Heart, slug: "healthcare" },
    { name: "AI Agent Manufacturing", icon: Settings, slug: "manufacturing" },
    { name: "AI Agents for Retail & E-Commerce", icon: ShoppingCart, slug: "retail-ecommerce" },
    { name: "AI Agents for Public Services & Utilities", icon: Users, slug: "utilities" },
    { name: "AI Agents for Education", icon: GraduationCap, slug: "education" },
    { name: "AI Agents for Travel & Tourism", icon: MapPin, slug: "travel-tourism" }
  ]

  return (
    <>
      {/* Announcement Bar: disabled for now. To re-enable, uncomment this block and restore the bar's height:
            - header below: top-0 -> top-[52px]
            - components/hero.tsx: pt-16 -> pt-[116px]
            - components/technology-stack.tsx: HEADER_OFFSET 64 -> 116, and lg:h-[calc(100vh-64px)] -> lg:h-[calc(100vh-116px)]
      <div className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${isClear ? "bg-white/[0.03] border-white/10" : "bg-gradient-to-r from-green-50/85 via-blue-50/85 to-purple-50/85 border-green-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3">
            <Sparkles className="w-4 h-4 text-[#00D563] mr-2" />
            <span className={`text-sm font-medium ${isClear ? "text-white/80" : "text-gray-800"}`}>Introducing AI Agent Builder - Deploy intelligent agents in minutes</span>
          </div>
        </div>
      </div>
      */}

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 top-0 z-[999] border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          isClear ? "border-transparent bg-transparent" : "border-hairline-soft bg-ink/75 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="BotrixAI home">
              <Image src="/images/botrix-logo.png" alt="BotrixAI Logo" width={80} height={40} className="h-11 w-auto" priority />
            </Link>

            {/* Desktop Navigation */}
            <nav className="relative z-50 hidden items-center gap-1 lg:flex">
              {/* Solutions Dropdown */}
              <div
                className="relative z-50"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className={`${navLink} flex items-center gap-1 ${isSolutionsOpen ? "bg-surface-1 text-bone" : ""}`}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  style={{ pointerEvents: "auto" }}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {isSolutionsOpen && (
                  <div
                    className="absolute left-1/2 top-full z-[9999] w-[920px] -translate-x-[38%] pt-3"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    style={{ pointerEvents: "auto" }}
                  >
                    <div className="light-edge grid grid-cols-3 gap-8 rounded-[20px] border border-hairline bg-surface-1 p-7">
                      {/* Left Column: Smart AI Workforce */}
                      <div className="space-y-6">
                        <div className="spotlight-card rounded-[15px] p-5">
                          <div className="font-mono text-[10px] tracking-[0.3em] text-signal">SMART AI WORKFORCE</div>
                          <h3 className="mt-2 text-[17px] font-medium leading-tight tracking-[-0.02em] text-bone">Introducing Smart AI Workforce</h3>
                          <p className="mt-2 text-[13px] leading-[1.45] text-bone/70">
                            Turn your Traditional Customer Engagements into 24X7 customer delightful Experience.
                          </p>
                          <Link
                            href="/solutions/enterprise"
                            className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-signal hover:underline"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            Explore Enterprise AI Agent <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>

                        <div>
                          <h4 className="font-mono text-[10px] tracking-[0.3em] text-bone/50">AI AGENTS BY CATEGORY</h4>
                          <div className="mt-3 space-y-0.5">
                            {aiAgentCategories.map((category, index) => (
                              <Link
                                key={index}
                                href={`/solutions/${category.slug}`}
                                className="group flex items-center gap-2.5 rounded-[10px] px-2 py-1.5 text-[13px] font-medium text-dim transition-colors hover:bg-surface-2 hover:text-bone"
                                onClick={() => setIsSolutionsOpen(false)}
                              >
                                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-surface-2 text-signal group-hover:bg-ink">
                                  <category.icon className="h-3.5 w-3.5" />
                                </span>
                                <span>{category.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Middle Column: Enterprise Integrations */}
                      <div>
                        <h3 className="font-mono text-[10px] tracking-[0.3em] text-bone/50">ENTERPRISE INTEGRATIONS</h3>
                        <div className="mt-3 grid grid-cols-1 gap-0.5">
                          {enterpriseIntegrations.map((integration, index) => (
                            <Link
                              key={index}
                              href="/integrations"
                              className="flex items-center gap-2.5 rounded-[10px] px-2 py-1.5 text-[13px] font-medium text-dim transition-colors hover:bg-surface-2 hover:text-bone"
                              onClick={() => setIsSolutionsOpen(false)}
                            >
                              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-bone p-0.5">
                                <Image src={integration.logo} alt={integration.name} width={20} height={20} className="h-full w-full object-contain" />
                              </span>
                              <span>{integration.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: By Industry */}
                      <div>
                        <h3 className="font-mono text-[10px] tracking-[0.3em] text-bone/50">BY INDUSTRY</h3>
                        <div className="mt-3 space-y-0.5">
                          {industries.map((industry, index) => (
                            <Link
                              key={index}
                              href={`/solutions/industries/${industry.slug}`}
                              className="group flex items-center gap-2.5 rounded-[10px] px-2 py-1.5 text-[13px] font-medium text-dim transition-colors hover:bg-surface-2 hover:text-bone"
                              onClick={() => setIsSolutionsOpen(false)}
                            >
                              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-surface-2 text-signal group-hover:bg-ink">
                                <industry.icon className="h-3.5 w-3.5" />
                              </span>
                              <span>{industry.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/product" className={navLink}>Product</Link>
              <Link href="/features" className={navLink}>Features</Link>
              <Link href="/integrations" className={navLink}>Integrations</Link>
            </nav>

            {/* Right Side CTAs */}
            <div className="hidden items-center gap-3 lg:flex">
              <Globe className="h-5 w-5 cursor-pointer text-dim transition-colors hover:text-bone" />
              <button
                className="inline-flex items-center gap-2 rounded-full bg-bone px-4 py-2.5 text-sm font-medium text-ink transition-transform active:scale-95"
                onClick={openCalendly}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-signal-deep" />
                Book Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-1 text-bone lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-hairline-soft bg-ink lg:hidden">
            <div className="space-y-1 px-5 py-6">
              {/* Mobile Solutions Dropdown */}
              <div>
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex w-full items-center justify-between rounded-[10px] px-3 py-3 text-[15px] font-medium text-bone hover:bg-surface-1"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                </button>
                {isSolutionsOpen && (
                  <div className="mt-2 space-y-6 rounded-[15px] bg-surface-1 p-4">
                    {/* Smart AI Workforce Section */}
                    <div>
                      <h4 className="font-mono text-[10px] tracking-[0.3em] text-signal">SMART AI WORKFORCE</h4>
                      <p className="mt-2 text-[13px] leading-[1.45] text-dim">
                        Turn your Traditional Customer Engagements into 24X7 customer delightful Experience.
                      </p>
                      <div className="mt-3 space-y-0.5">
                        {aiAgentCategories.map((category, index) => (
                          <Link
                            key={index}
                            href={`/solutions/${category.slug}`}
                            className="flex items-center gap-2.5 rounded-[10px] px-2 py-2 text-[14px] text-dim transition-colors hover:bg-surface-2 hover:text-bone"
                            onClick={() => {
                              setIsSolutionsOpen(false)
                              setIsMenuOpen(false)
                            }}
                          >
                            <category.icon className="h-4 w-4 text-signal" />
                            <span>{category.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Enterprise Integrations Section */}
                    <div>
                      <h4 className="font-mono text-[10px] tracking-[0.3em] text-bone/50">ENTERPRISE INTEGRATIONS</h4>
                      <div className="mt-3 grid grid-cols-2 gap-1">
                        {enterpriseIntegrations.slice(0, 6).map((integration, index) => (
                          <Link
                            key={index}
                            href="/integrations"
                            className="flex items-center gap-2 rounded-[10px] px-2 py-2 text-[13px] text-dim transition-colors hover:bg-surface-2 hover:text-bone"
                            onClick={() => {
                              setIsSolutionsOpen(false)
                              setIsMenuOpen(false)
                            }}
                          >
                            <span className="flex h-5 w-5 items-center justify-center rounded bg-bone p-0.5">
                              <Image src={integration.logo} alt={integration.name} width={16} height={16} className="h-full w-full object-contain" />
                            </span>
                            <span>{integration.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Industries Section */}
                    <div>
                      <h4 className="font-mono text-[10px] tracking-[0.3em] text-bone/50">BY INDUSTRY</h4>
                      <div className="mt-3 space-y-0.5">
                        {industries.slice(0, 6).map((industry, index) => (
                          <Link
                            key={index}
                            href={`/solutions/industries/${industry.slug}`}
                            className="flex items-center gap-2.5 rounded-[10px] px-2 py-2 text-[14px] text-dim transition-colors hover:bg-surface-2 hover:text-bone"
                            onClick={() => {
                              setIsSolutionsOpen(false)
                              setIsMenuOpen(false)
                            }}
                          >
                            <industry.icon className="h-4 w-4 text-signal" />
                            <span>{industry.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {[
                { href: "/product", label: "Product" },
                { href: "/features", label: "Features" },
                { href: "/integrations", label: "Integrations" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-[10px] px-3 py-3 text-[15px] font-medium text-bone hover:bg-surface-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-bone px-5 py-3.5 text-sm font-medium text-ink active:scale-[0.98]"
                  onClick={openCalendly}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-deep" />
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
