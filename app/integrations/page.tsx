"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, Shield, Users, BarChart3, Globe, Clock, Award, TrendingUp, MessageCircle, Phone, Bot, Database, Settings, Lock } from "lucide-react"
import Image from "next/image"

export default function IntegrationsPage() {
  const integrationPartners = [
    { name: "Salesforce", logo: "/images/integrations/icons8-salesforce-50.png", category: "CRM" },
    { name: "Zendesk", logo: "/images/integrations/icons8-zendesk-50.png", category: "Support" },
    { name: "HubSpot", logo: "/images/integrations/icons8-hubspot-24.png", category: "Marketing" },
    { name: "WhatsApp", logo: "/images/integrations/icons8-whatsapp-48.png", category: "Messaging" },
    { name: "Stripe", logo: "/images/integrations/icons8-stripe-48.png", category: "Payments" },
    { name: "PayPal", logo: "/images/integrations/icons8-paypal-48.png", category: "Payments" },
    { name: "Razorpay", logo: "/images/integrations/Razorpay.png", category: "Payments" },
    { name: "Chargebee", logo: "/images/integrations/Chargebee.png", category: "Billing" },
    { name: "Paddle", logo: "/images/integrations/Paddle.jpeg", category: "Payments" },
    { name: "Slack", logo: "/images/integrations/icons8-slack-48.png", category: "Communication" },
    { name: "Discord", logo: "/images/integrations/icons8-discord-48.png", category: "Communication" },
    { name: "Telegram", logo: "/images/integrations/icons8-telegram-94.png", category: "Messaging" },
    { name: "Twilio", logo: "/images/integrations/twilio-icon-svgrepo-com.png", category: "Communication" },
    { name: "Mailchimp", logo: "/images/integrations/icons8-mailchimp-24.png", category: "Email" },
    { name: "SendGrid", logo: "/images/integrations/icons8-sendgrid-100.png", category: "Email" },
    { name: "ActiveCampaign", logo: "/images/integrations/ActiveCampaign.png", category: "Marketing" },
    { name: "ConvertKit", logo: "/images/integrations/ConvertKit.png", category: "Email" },
    { name: "Google Sheets", logo: "/images/integrations/icons8-google-sheets-48.png", category: "Productivity" },
    { name: "Google Calendar", logo: "/images/integrations/icons8-google-calendar-48.png", category: "Productivity" },
    { name: "Asana", logo: "/images/integrations/Asana.png", category: "Project Management" },
    { name: "Trello", logo: "/images/integrations/icons8-trello-48.png", category: "Project Management" },
    { name: "Notion", logo: "/images/integrations/icons8-notion-48.png", category: "Productivity" },
    { name: "Zoho Books", logo: "/images/integrations/icons8-zoho-books-48.png", category: "Accounting" }
  ]

  const integrationCategories = [
    {
      icon: Database,
      title: "CRM & Sales",
      description: "Connect with your customer relationship management tools",
      integrations: ["Salesforce", "HubSpot", "Zoho Books", "ActiveCampaign"]
    },
    {
      icon: MessageCircle,
      title: "Support & Helpdesk",
      description: "Integrate with customer support platforms",
      integrations: ["Zendesk", "Freshdesk", "Intercom", "Help Scout"]
    },
    {
      icon: TrendingUp,
      title: "E-commerce",
      description: "Connect with your online store platforms",
      integrations: ["Shopify", "BigCommerce", "WooCommerce", "Magento"]
    },
    {
      icon: Shield,
      title: "Payments & Finance",
      description: "Secure payment processing integrations",
      integrations: ["Stripe", "PayPal", "Razorpay", "Chargebee", "Paddle"]
    },
    {
      icon: Users,
      title: "Communication",
      description: "Team collaboration and messaging tools",
      integrations: ["Slack", "Discord", "Telegram", "Twilio", "Microsoft Teams"]
    },
    {
      icon: BarChart3,
      title: "Marketing & Email",
      description: "Data analysis and marketing automation",
      integrations: ["Mailchimp", "SendGrid", "ConvertKit", "ActiveCampaign"]
    }
  ]

  const integrationFeatures = [
    {
      icon: Zap,
      title: "One-Click Setup",
      description: "Connect your favorite tools with just a single click"
    },
    {
      icon: Settings,
      title: "Custom Workflows",
      description: "Create automated workflows between different platforms"
    },
    {
      icon: Lock,
      title: "Secure Connections",
      description: "Enterprise-grade security for all your integrations"
    },
    {
      icon: Clock,
      title: "Real-time Sync",
      description: "Data synchronization in real-time across all platforms"
    }
  ]

  return (
    <div className="min-h-screen bg-ink">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-surface-1/80 backdrop-blur-sm rounded-full border border-signal/30 mb-8">
              <span className="text-sm font-medium text-signal">Seamless Integration</span>
            </div>
            <h1 className="text-6xl text-bone mb-8 leading-tight font-medium tracking-[-0.045em]">
              Connect with Your Favorite Tools
            </h1>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Integrate BotrixAI with 100+ popular platforms and tools. Connect your CRM, e-commerce, support, and marketing tools with just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="outline" className="px-10 py-4 text-lg transition-all duration-300 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                View All Integrations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Partners Section */}
      <section className="py-16 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-bone mb-4 font-medium tracking-[-0.035em] leading-[1.08]">
              Trusted by Leading Platforms
            </h2>
            <p className="text-lg text-dim max-w-2xl mx-auto">
              Seamlessly integrate with the tools you already use and love
            </p>
          </div>
          
          {/* Scrolling Partners */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {/* First set of logos */}
              {integrationPartners.map((partner, index) => (
                <div key={index} className="flex-shrink-0 flex items-center space-x-3 bg-surface-2 rounded-xl px-6 py-4 border border-hairline light-edge transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-surface-1 rounded-lg flex items-center justify-center border border-hairline">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-bone">{partner.name}</span>
                    <span className="text-xs text-bone/70 block">{partner.category}</span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {integrationPartners.map((partner, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center space-x-3 bg-surface-2 rounded-xl px-6 py-4 border border-hairline light-edge transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-surface-1 rounded-lg flex items-center justify-center border border-hairline">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-bone">{partner.name}</span>
                    <span className="text-xs text-bone/70 block">{partner.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Integration Categories
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Connect with tools across all major business categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => (
              <div key={index} className="bg-surface-1 p-8 rounded-2xl light-edge transition-all duration-300 hover:-translate-y-2 border border-hairline">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl flex items-center justify-center mb-6">
                  <category.icon className="w-6 h-6 text-bone" />
                </div>
                <h3 className="text-xl text-bone mb-4 font-medium tracking-[-0.02em]">{category.title}</h3>
                <p className="text-dim mb-6 leading-relaxed">{category.description}</p>
                <div className="space-y-2">
                  {category.integrations.map((integration, integrationIndex) => (
                    <div key={integrationIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-signal flex-shrink-0" />
                      <span className="text-sm text-bone/80">{integration}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Why Choose Our Integrations?
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Powerful features that make integration seamless and secure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-bone" />
                </div>
                <h3 className="text-xl text-bone mb-4 font-medium tracking-[-0.02em]">{feature.title}</h3>
                <p className="text-dim leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
                Custom Integrations with API
              </h2>
              <p className="text-xl text-dim mb-8 leading-relaxed">
                Need a custom integration? Our comprehensive API allows you to connect with any platform or build your own integrations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-signal flex-shrink-0" />
                  <span className="text-bone/80">RESTful API with comprehensive documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-signal flex-shrink-0" />
                  <span className="text-bone/80">Webhook support for real-time data sync</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-signal flex-shrink-0" />
                  <span className="text-bone/80">SDK libraries for popular programming languages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-signal flex-shrink-0" />
                  <span className="text-bone/80">Dedicated support for custom integrations</span>
                </div>
              </div>
              <Button className="from-[#0b5d2f] to-[#063a1e] hover:from-[#0b5d2f] hover:to-[#063a1e] px-8 py-3 transition-all duration-300 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                View API Documentation
              </Button>
            </div>
            <div className="bg-surface-1 p-8 rounded-2xl light-edge border border-hairline">
              <h3 className="text-2xl text-bone mb-6 font-medium tracking-[-0.02em]">Get Started Today</h3>
              <p className="text-dim mb-6">
                Start integrating your tools with BotrixAI and transform your workflow.
              </p>
              <div className="space-y-4">
                <Button variant="outline" className="w-full py-3 transition-all duration-300 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 site-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-bone/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect your favorite tools with BotrixAI and start automating your workflows today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="outline" className="px-12 py-4 text-lg transition-all duration-300 rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 