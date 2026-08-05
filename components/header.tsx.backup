"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Globe, ArrowRight, Sparkles, MessageCircle, Smartphone, Mic, Building, Headphones, BarChart3, Phone, Car, Plane, Banknote, Shield, Heart, Settings, ShoppingCart, Users, GraduationCap, MapPin } from "lucide-react"
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

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
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3">
            <Sparkles className="w-4 h-4 text-[#00D563] mr-2" />
            <span className="text-sm font-medium text-gray-800">Introducing AI Agent Builder - Deploy intelligent agents in minutes</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/botrix-logo01.png"
                  alt="BotrixAI Logo"
                  width={80}
                  height={40}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#00D563] cursor-pointer font-medium transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isSolutionsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-0 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-8 px-6">
                      {/* Left Column: Smart AI Workforce */}
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-gray-900">Introducing Smart AI Workforce</h3>
                          <div className="flex items-start space-x-3">
                            <div className="relative">
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                  <MessageCircle className="w-6 h-6 text-blue-600" />
                                </div>
                              </div>
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <Image src="/images/integrations/icons8-whatsapp-48.png" alt="WhatsApp" width={12} height={12} />
                              </div>
                              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <Image src="/images/integrations/icons8-telegram-94.png" alt="Telegram" width={12} height={12} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 leading-relaxed">
                                Turn your Traditional Customer Engagements into 24X7 customer delightful Experience.
                              </p>
                              <Link href="/solutions/enterprise" className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block">
                                Explore Enterprise AI Agent
                              </Link>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">
                            AI Agents By Category
                          </h4>
                          <div className="space-y-2">
                            {aiAgentCategories.map((category, index) => (
                              <Link
                                key={index}
                                href={`/solutions/${category.slug}`}
                                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#00D563] transition-colors cursor-pointer"
                                onClick={() => setIsSolutionsOpen(false)}
                              >
                                <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                                  <category.icon className="w-3 h-3 text-blue-600" />
                                </div>
                                <span>{category.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Middle Column: Enterprise Integrations */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 underline">Enterprise Integrations</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {enterpriseIntegrations.map((integration, index) => (
                            <Link
                              key={index}
                              href="/integrations"
                              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#00D563] transition-colors cursor-pointer"
                              onClick={() => setIsSolutionsOpen(false)}
                            >
                              <div className="w-6 h-6 flex items-center justify-center">
                                <Image 
                                  src={integration.logo} 
                                  alt={integration.name} 
                                  width={20} 
                                  height={20}
                                  className="w-5 h-5 object-contain"
                                />
                              </div>
                              <span>{integration.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: By Industry */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 underline">By Industry</h3>
                        <div className="space-y-2">
                          {industries.map((industry, index) => (
                            <Link
                              key={index}
                              href={`/solutions/industries/${industry.slug}`}
                              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#00D563] transition-colors cursor-pointer"
                              onClick={() => setIsSolutionsOpen(false)}
                            >
                              <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                                <industry.icon className="w-3 h-3 text-blue-600" />
                              </div>
                              <span>{industry.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/product" className="text-gray-700 hover:text-[#00D563] font-medium transition-colors">
                Product
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-[#00D563] font-medium transition-colors">
                Features
              </Link>

              <Link href="/integrations" className="text-gray-700 hover:text-[#00D563] font-medium transition-colors">
                Integrations
              </Link>
            </nav>

            {/* Right Side CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <Globe className="w-5 h-5 text-gray-500 cursor-pointer hover:text-[#00D563] transition-colors" />
              <Button
                variant="outline"
                className="border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white bg-transparent font-medium"
                onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              >
                Book Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Solutions Dropdown */}
              <div>
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#00D563] font-medium py-2"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSolutionsOpen && (
                  <div className="mt-2 ml-4 space-y-4 bg-gray-50 rounded-lg p-4">
                    {/* Smart AI Workforce Section */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Smart AI Workforce</h4>
                      <p className="text-sm text-gray-600">
                        Turn your Traditional Customer Engagements into 24X7 customer delightful Experience.
                      </p>
                      <div className="space-y-2">
                          {aiAgentCategories.map((category, index) => (
                          <Link
                            key={index}
                              href={`/solutions/${category.slug}`}
                            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#00D563] transition-colors"
                            onClick={() => {
                              setIsSolutionsOpen(false)
                              setIsMenuOpen(false)
                            }}
                          >
                            <category.icon className="w-4 h-4 text-blue-600" />
                            <span>{category.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enterprise Integrations Section */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Enterprise Integrations</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {enterpriseIntegrations.slice(0, 6).map((integration, index) => (
                          <Link
                            key={index}
                            href="/integrations"
                            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#00D563] transition-colors"
                            onClick={() => {
                              setIsSolutionsOpen(false)
                              setIsMenuOpen(false)
                            }}
                          >
                            <div className="w-5 h-5 flex items-center justify-center">
                              <Image 
                                src={integration.logo} 
                                alt={integration.name} 
                                width={16} 
                                height={16}
                                className="w-4 h-4 object-contain"
                              />
                            </div>
                            <span>{integration.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Industries Section */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">By Industry</h4>
                      <div className="space-y-2">
                        {industries.slice(0, 6).map((industry, index) => (
                          <Link
                            key={index}
                            href={`/solutions/industries/${industry.slug}`}
                            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#00D563] transition-colors"
                            onClick={() => {
                              setIsSolutionsOpen(false)
                              setIsMenuOpen(false)
                            }}
                          >
                            <industry.icon className="w-4 h-4 text-blue-600" />
                            <span>{industry.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/product" 
                className="block text-gray-700 hover:text-[#00D563] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <Link 
                href="/features" 
                className="block text-gray-700 hover:text-[#00D563] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/integrations" 
                className="block text-gray-700 hover:text-[#00D563] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrations
              </Link>
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-[#00D563] text-[#00D563] bg-transparent font-medium"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
