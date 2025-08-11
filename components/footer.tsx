import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Introducing Smart AI Workforce", href: "/solutions/enterprise" },
        { name: "AI Agents for Customer Service", href: "/solutions/customer-service" },
        { name: "AI Agents for Contact Center", href: "/solutions/contact-center" },
        { name: "AI Agents for Sales & Marketing", href: "/solutions/sales-marketing" },
        { name: "AI Voice Agents", href: "/solutions/voice-agent" },
        { name: "AI Avataar Aradhya", href: "/solutions/enterprise" },
      ],
    },
    {
      title: "Industries",
      links: [
        { name: "Automotive", href: "/solutions/enterprise" },
        { name: "Aviation & Logistics", href: "/solutions/enterprise" },
        { name: "Banking & Financial Services", href: "/solutions/enterprise" },
        { name: "Healthcare", href: "/solutions/enterprise" },
        { name: "Insurance", href: "/solutions/enterprise" },
        { name: "Manufacturing", href: "/solutions/enterprise" },
        { name: "Retail & E-Commerce", href: "/solutions/enterprise" },
        { name: "Public Services & Utilities", href: "/solutions/enterprise" },
        { name: "Education", href: "/solutions/enterprise" },
        { name: "Travel & Tourism", href: "/solutions/enterprise" },
      ],
    },
    {
      title: "Platform",
      links: [
        { name: "BotrixAI Platform", href: "/product" },
        { name: "AI Agent Co-Pilot", href: "/product" },
        { name: "AI Search", href: "/product" },
        { name: "Vernacular", href: "/product" },
        { name: "Multimodal", href: "/product" },
        { name: "AI Multi-Agents", href: "/product" },
        { name: "Analytics & Reporting", href: "/product" },
        { name: "Enterprise Integrations", href: "/integrations" },
        { name: "Live Chat Agent", href: "/product" },
      ],
    },

    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Become Our Partner", href: "/partners" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
            <div className="flex items-center">
              <Image
                src="/images/botrix-logo.png"
                alt="BotrixAI Logo"
                width={80}
                height={40}
                className="h-10 sm:h-12 w-auto"
              />
            </div>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md">
              Empowering businesses with intelligent automation solutions that transform customer interactions and streamline operations.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+919981292605"
                className="flex items-center text-gray-300 hover:text-[#00D563] transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 mr-2" /> +91 99812 92605
              </a>
              <a
                href="mailto:contact@botrixai.com"
                className="flex items-center text-gray-300 hover:text-[#00D563] transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 mr-2" /> contact@botrixai.com
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4">
              <Link
                href="https://www.linkedin.com/company/botrix-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00D563] transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/botrixai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00D563] transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/botrixai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00D563] transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="mailto:contact@botrixai.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00D563] transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Solutions</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerSections[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href} className="text-sm sm:text-base text-gray-400 hover:text-[#00D563] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Industries</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerSections[1].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href} className="text-sm sm:text-base text-gray-400 hover:text-[#00D563] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Platform</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerSections[2].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href} className="text-sm sm:text-base text-gray-400 hover:text-[#00D563] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerSections[3].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href} className="text-sm sm:text-base text-gray-400 hover:text-[#00D563] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs sm:text-sm text-gray-400 text-center md:text-left">© 2025 Botrix Technologies. All rights reserved.</div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <Link href="/terms" className="hover:text-[#00D563] transition-colors">Terms</Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-[#00D563] transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
