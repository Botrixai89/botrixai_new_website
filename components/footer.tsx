import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, Instagram } from "lucide-react"
import Image from "next/image"
import { Wordmark } from "@/components/landing/sections/Wordmark"

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/botrix-ai/", icon: Linkedin, external: true },
  { label: "Facebook", href: "https://www.facebook.com/botrixai", icon: Facebook, external: true },
  { label: "Instagram", href: "https://www.instagram.com/botrixai/", icon: Instagram, external: true },
  { label: "Email", href: "mailto:contact@botrixai.com", icon: Mail, external: false },
]

/** Site footer (design.md `footer`): canvas, mono column eyebrows, caption links, giant wordmark. */
export default function Footer() {
  const footerSections = [
    {
      title: "AI Agent Solutions",
      links: [
        { name: "WhatsApp Marketing Automation", href: "/solutions/whatsapp-bot" },
        { name: "AI Voice Agents & Phone Bots", href: "/solutions/voice-agent" },
        { name: "Web Chatbots & Customer Service", href: "/solutions/customer-service" },
        { name: "RCS Messaging", href: "/solutions/rcs-messaging" },
        { name: "Email Marketing Platform", href: "/solutions/email-marketing" },
        { name: "Instagram DM Automation", href: "/solutions/instagram-automation" },
        { name: "Enterprise AI Workforce", href: "/solutions/enterprise" },
        { name: "Contact Center Automation", href: "/solutions/contact-center" },
        { name: "Sales & Marketing AI Agents", href: "/solutions/sales-marketing" },
        { name: "AI Platform Features", href: "/features" },
      ],
    },
    {
      title: "Industry Solutions",
      links: [
        { name: "E-commerce & Retail AI", href: "/solutions/industries/retail-ecommerce" },
        { name: "Healthcare Automation", href: "/solutions/industries/healthcare" },
        { name: "Banking & Financial AI", href: "/solutions/industries/banking-financial" },
        { name: "Insurance Automation", href: "/solutions/industries/insurance" },
        { name: "Automotive AI Solutions", href: "/solutions/industries/automotive" },
        { name: "Education Technology", href: "/solutions/industries/education" },
        { name: "Manufacturing Automation", href: "/solutions/industries/manufacturing" },
        { name: "Travel & Tourism AI", href: "/solutions/industries/travel-tourism" },
      ],
    },
    {
      title: "Resources & Support",
      links: [
        { name: "Integration Marketplace", href: "/integrations" },
        { name: "Partner Program", href: "/partners" },
      ],
    },
    {
      title: "Company & Legal",
      links: [
        { name: "About BotrixAI", href: "/about" },
        { name: "Contact & Demo", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Products & Solutions",
      links: [
        { name: "Hemant Jewellers", href: "#" },
      ],
    },
  ]

  const columns = [
    { title: "Solutions", links: footerSections[0].links },
    { title: "Industries", links: footerSections[1].links },
    { title: "Company", links: footerSections[3].links },
    { title: "Products", links: footerSections[4].links },
  ]

  return (
    <footer className="relative border-t border-hairline-soft bg-ink text-bone">
      <div className="mx-auto max-w-[1240px] px-5 pb-10 pt-16 md:px-8 md:pt-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr_0.8fr] lg:gap-8">
          {/* Company info */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center" aria-label="BotrixAI home">
              <Image src="/images/botrix-logo.png" alt="BotrixAI Logo" width={80} height={40} className="h-11 w-auto" />
            </Link>

            <p className="max-w-xs text-[14px] leading-[1.55] text-dim">
              Empowering businesses with intelligent automation solutions that transform customer interactions and streamline operations.
            </p>

            <div className="space-y-2 text-[14px] font-medium">
              <a href="tel:+919981292605" className="flex items-center gap-2.5 text-dim transition-colors hover:text-bone">
                <Phone className="h-4 w-4" /> +91 99812 92605
              </a>
              <a href="mailto:contact@botrixai.com" className="flex items-center gap-2.5 text-bone transition-colors hover:text-signal">
                <Mail className="h-4 w-4" /> contact@botrixai.com
              </a>
            </div>

            {/* Social — design.md button-icon-circular */}
            <div className="flex gap-2.5">
              {SOCIALS.map(({ label, href, icon: Icon, external }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-1 text-dim transition-colors hover:bg-surface-2 hover:text-signal"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[10px] tracking-[0.3em] text-bone/50">{col.title.toUpperCase()}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] font-medium leading-[1.35] text-dim transition-colors hover:text-bone">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline-soft pt-6 text-[12px] text-dim md:flex-row">
          <span>© 2025 Botrix Technologies. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="transition-colors hover:text-bone">Terms</Link>
            <Link href="/privacy" className="transition-colors hover:text-bone">Privacy</Link>
            <span className="font-mono tracking-[0.2em]">
              <span className="mr-2 inline-block h-1.5 w-1.5 animate-[pulse-dot_1.6s_ease-in-out_infinite] rounded-full bg-signal" />
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      {/* Giant BotrixAI wordmark over drifting strings */}
      <Wordmark />
    </footer>
  )
}
