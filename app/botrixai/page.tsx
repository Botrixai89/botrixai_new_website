"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { CheckCircle, Star, ArrowRight, Zap, Users, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

// Note: Metadata moved to layout.tsx since this is now a client component

export default function BotrixAIPage() {
  const brandStats = [
    { metric: "99%", label: "Customer Satisfaction", icon: Star },
    { metric: "50K+", label: "Businesses Trust BotrixAI", icon: Users },
    { metric: "150+", label: "Countries Served", icon: Globe },
    { metric: "#1", label: "AI Automation Platform", icon: Award }
  ]

  const whyBotrixAI = [
    {
      title: "Industry Leader in AI Automation",
      description: "BotrixAI has established itself as the leading brand in AI-powered customer service automation. When businesses search for reliable AI solutions, they choose BotrixAI for its proven track record and innovative technology."
    },
    {
      title: "Comprehensive BotrixAI Platform",
      description: "The BotrixAI platform offers the most comprehensive suite of AI automation tools including WhatsApp marketing automation, voice bots, web chatbots, and enterprise integration capabilities. BotrixAI's platform is designed for businesses of all sizes."
    },
    {
      title: "Trusted by Global Enterprises",
      description: "BotrixAI is the trusted choice of Fortune 500 companies and growing startups alike. Our BotrixAI brand represents reliability, innovation, and results in the AI automation space."
    },
    {
      title: "Award-Winning BotrixAI Technology",
      description: "BotrixAI's cutting-edge technology has won multiple industry awards. The BotrixAI platform continues to set new standards for AI automation excellence and customer satisfaction."
    }
  ]

  const botrixAIProducts = [
    {
      name: "BotrixAI WhatsApp Automation",
      description: "Industry-leading WhatsApp marketing automation powered by BotrixAI's advanced AI technology",
      features: ["98% Open Rate", "Smart Automation", "CRM Integration"]
    },
    {
      name: "BotrixAI Voice Agents",
      description: "Intelligent voice bots that deliver human-like conversations using BotrixAI's voice AI technology",
      features: ["Natural Speech", "Multi-language", "Real-time Processing"]
    },
    {
      name: "BotrixAI Web Chatbots",
      description: "Advanced web chatbots powered by BotrixAI's conversational AI platform for 24/7 customer support",
      features: ["Smart Routing", "Live Chat Handoff", "Analytics Dashboard"]
    }
  ]

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "BotrixAI",
    "alternateName": ["Botrix AI", "Botrix", "BotrixAI Platform"],
    "description": "BotrixAI is the leading AI automation platform brand trusted by businesses worldwide for WhatsApp marketing automation, voice bots, and customer service solutions",
    "url": "https://botrixai.com",
    "logo": "https://botrixai.com/images/botrix-logo01.png",
    "slogan": "Transform Business Communication with AI",
    "founder": {
      "@type": "Organization",
      "name": "BotrixAI"
    },
    "foundingDate": "2023",
    "sameAs": [
      "https://linkedin.com/company/botrixai",
      "https://twitter.com/botrixai",
      "https://facebook.com/botrixai",
      "https://instagram.com/botrixai",
      "https://youtube.com/@botrixai"
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BotrixAI",
    "alternateName": ["Botrix AI", "Botrix"],
    "description": "BotrixAI is the premier AI automation platform company specializing in WhatsApp marketing automation, voice bots, and customer service solutions",
    "url": "https://botrixai.com",
    "logo": "https://botrixai.com/images/botrix-logo01.png",
    "brand": {
      "@type": "Brand",
      "name": "BotrixAI"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brandSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-br from-[#00D563]/5 via-white to-blue-50" itemScope itemType="https://schema.org/Brand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-[#00D563]/10 px-4 py-2 text-sm text-[#00D563] border border-[#00D563]/20 shadow-sm mb-6">
                <Award className="w-4 h-4 mr-2" />
                Official BotrixAI Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" itemProp="name">
                <span className="text-[#00D563]">BotrixAI</span> - The #1 Trusted Brand
                <br />
                in AI Automation
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8" itemProp="description">
                <strong>BotrixAI</strong> is the leading AI automation platform trusted by 50,000+ businesses worldwide. 
                Discover why <strong>BotrixAI</strong> is the premier choice for WhatsApp marketing automation, 
                voice bots, and intelligent customer service solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  className="bg-[#00D563] hover:bg-[#00D563]/90 text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  Experience BotrixAI
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact BotrixAI Team
                </Button>
              </div>

              {/* Brand Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {brandStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#00D563]/10 rounded-full flex items-center justify-center mb-3">
                        <stat.icon className="w-6 h-6 text-[#00D563]" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.metric}</div>
                      <div className="text-sm text-gray-600 text-center">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose BotrixAI */}
        <section className="py-16 bg-white" aria-labelledby="why-botrixai">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="why-botrixai" className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose <span className="text-[#00D563]">BotrixAI</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {whyBotrixAI.map((reason, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BotrixAI Products */}
        <section className="py-16 bg-gray-50" aria-labelledby="botrixai-products">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="botrixai-products" className="text-3xl font-bold text-gray-900 text-center mb-12">
              <span className="text-[#00D563]">BotrixAI</span> Product Suite
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {botrixAIProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#00D563] mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#00D563]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Power of <strong>BotrixAI</strong>?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 50,000+ businesses that trust <strong>BotrixAI</strong> for their AI automation needs. 
              Get started with <strong>BotrixAI</strong> today and transform your customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-[#00D563] hover:bg-gray-100 px-8 py-3 font-semibold"
                onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              >
                Start with BotrixAI
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#00D563] px-8 py-3 font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                Talk to BotrixAI Expert
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
