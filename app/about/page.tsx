import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { CheckCircle, Globe, Sparkles, MessageSquare, Brain, Zap, Settings, Bot, Workflow, Target, Phone } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About BotrixAI - WhatsApp Marketing Automation & AI Agents",
  description: "Leading AI automation platform for WhatsApp marketing, voice bots, and web agents. 24/7 customer service automation solutions for businesses.",
  authors: [{ name: "BotrixAI" }],
  creator: "BotrixAI",
  publisher: "BotrixAI",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "About BotrixAI - WhatsApp Marketing Automation & AI Agents",
    description: "Leading AI automation platform for WhatsApp marketing, voice bots, and web agents. 24/7 customer service automation solutions for businesses.",
    url: "https://botrixai.com/about",
    siteName: "BotrixAI",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI WhatsApp Marketing Automation and AI Agents Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BotrixAI - WhatsApp Marketing Automation & AI Agents",
    description: "Leading AI automation platform for WhatsApp marketing, voice bots, and web agents. 24/7 customer service automation solutions for businesses.",
    images: ["/Automation 11.png"],
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com/about",
  },
}

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BotrixAI",
    "description": "Leading WhatsApp marketing automation and AI agent platform providing voice bots, web agents, and customer service automation solutions",
    "url": "https://botrixai.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://botrixai.com/images/botrix-logo01.png",
      "width": 200,
      "height": 100
    },
    "foundingDate": "2023",
    "sameAs": [
      "https://linkedin.com/company/botrixai",
      "https://twitter.com/botrixai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Spanish", "French", "German", "Italian"],
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WhatsApp Marketing Automation",
            "description": "Automated WhatsApp business solutions for customer engagement and marketing campaigns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Agents",
            "description": "Intelligent voice bots for automated customer support and phone interactions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Chatbots",
            "description": "AI-powered web agents for website customer service automation"
          }
        }
      ]
    }
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BotrixAI Platform",
    "description": "WhatsApp marketing automation and AI agent platform for businesses",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR", 
      "price": "2499",
      "billingIncrement": "Monthly",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "WhatsApp Business API Integration",
      "AI Voice Agents", 
      "Web Chatbots",
      "Multi-language Support",
      "Real-time Analytics",
      "CRM Integration",
      "24/7 Customer Support"
    ],
    "author": {
      "@type": "Organization",
      "name": "BotrixAI"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://botrixai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://botrixai.com/about"
      }
    ]
  }

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <Header />

      {/* Hero */}
      <main>
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-br from-gray-50 to-blue-50" itemScope itemType="https://schema.org/Organization">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm text-gray-600 border border-gray-200 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-[#00D563] mr-2" /> About BotrixAI
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" itemProp="name">
              Leading WhatsApp Marketing Automation & AI Agent Platform
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed" itemProp="description">
              BotrixAI is the premier WhatsApp marketing automation platform and AI agent provider. We specialize in voice bots, web agents, WhatsApp business automation, and intelligent customer service solutions. Transform your business with our cutting-edge AI agents that deliver 24/7 automated customer engagement across multiple channels.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-[#00D563]/20 blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-400/20 blur-2xl animate-pulse" />
            <Image
              src={"/Automation 11.png"}
              alt="BotrixAI WhatsApp Marketing Automation and AI Agents Platform - Voice Bots, Web Agents, Customer Service Automation"
              width={900}
              height={700}
              priority
              className="rounded-2xl shadow-2xl ring-1 ring-gray-200 bg-white object-cover shadow-[0_0_50px_rgba(0,213,99,0.3),0_0_100px_rgba(0,213,99,0.2),0_0_150px_rgba(0,213,99,0.1)]"
            />
          </div>
        </div>
      </section>

      {/* Empowering */}
      <section className="py-16 bg-white" aria-labelledby="empowering-businesses">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="empowering-businesses" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Empowering Businesses with WhatsApp Marketing Automation & AI Agents</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>WhatsApp Business API integration for automated customer engagement</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>AI voice bots with multi-language support across 50+ languages</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Intelligent web agents for seamless customer service automation</span></li>
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50" aria-labelledby="our-mission">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="our-mission" className="text-3xl font-bold text-gray-900 mb-4">Our Mission: Revolutionizing Customer Engagement with AI Automation</h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                At BotrixAI, our mission is to revolutionize business communication through WhatsApp marketing automation, AI voice agents, and intelligent web chatbots. We empower businesses to deliver exceptional customer experiences with our comprehensive AI automation platform.
              </p>
              <p><span className="font-semibold">WhatsApp Marketing Excellence:</span> Automated WhatsApp business solutions that engage customers on their preferred messaging platform with personalized, AI-driven conversations.</p>
              <p><span className="font-semibold">Voice AI Innovation:</span> Advanced voice bots that handle phone-based customer interactions with natural language processing and speech recognition technology.</p>
              <p><span className="font-semibold">Web Agent Intelligence:</span> Smart web chatbots that provide 24/7 customer support, lead generation, and automated customer service across digital touchpoints.</p>
              <p>We envision a future where AI agents seamlessly integrate with business operations, providing intelligent automation that scales customer engagement while reducing operational costs. Learn more about our <a href="/solutions" className="text-[#00D563] hover:underline">AI solutions</a> and how they can transform your business.</p>
            </div>
          </div>
          <div className="relative bg-white rounded-2xl p-6 shadow-xl overflow-hidden">
            <Globe className="pointer-events-none absolute top-4 right-4 w-12 h-12 text-blue-400/20 animate-float" strokeWidth={1.5} />
            <h4 className="text-xl font-semibold text-gray-900 mb-4">At a glance</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#00D563] mr-2" /> Response time under 1 second</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#00D563] mr-2" /> 50+ languages supported</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#00D563] mr-2" /> Multi-channel: chat, web, voice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-white" aria-labelledby="our-expertise">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="our-expertise" className="text-3xl font-bold text-gray-900 mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Conversational AI", desc: "Intelligent assistants that understand context and intent with human-like interactions." },
              { title: "Speech AI", desc: "Advanced speech-to-text and text-to-speech for natural voice interactions." },
              { title: "Agent Assist", desc: "Co-pilots that boost agent productivity with real-time suggestions and knowledge." },
              { title: "Cognitive Search", desc: "RAG-based knowledge retrieval for accurate, context-aware answers." },
              { title: "Response Time \u003c1 sec", desc: "Lightning-fast responses that keep customers engaged." },
              { title: "Multi-Language", desc: "Seamless global communication across 50+ languages." },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-white">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Solutions</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>24/7 Real-time Support – Chatbots handle customer queries instantly.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Product Recommendations – AI-driven suggestions tailored to user needs.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Self-service Automation – Reduce wait times with intelligent problem-solving.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Intelligent IVR – AI-powered voice support for customer inquiries.</span></li>
          </ul>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose BotrixAI?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Seamless Customer Experience", d: "Human-like AI conversations for superior engagement." },
              { t: "Cost Efficiency & Scalability", d: "Automate interactions to cut costs and scale easily." },
              { t: "Data-driven Insights", d: "Analytics to track trends and optimize experiences." },
              { t: "Continuous Improvement", d: "Models that learn and improve over time." },
              { t: "Industry Expertise", d: "Solutions tailored for banking, insurance, e‑commerce, telecom and more." },
            ].map((k, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-white">
                <h4 className="font-semibold text-gray-900 mb-2">{k.t}</h4>
                <p className="text-gray-600">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our AI Technology Stack</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our advanced AI agents and automation transform customer interactions
            </p>
          </div>

          {/* Interactive AI Workflow */}
          <div className="bg-white rounded-2xl p-8 mb-12 border-2 border-black shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🤖 AI Agent Workflow & Automation
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Input Processing */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h5 className="font-semibold mb-2">Input Processing</h5>
                  <p className="text-sm opacity-90">Multi-channel input analysis with NLP</p>
                </div>
              </div>

              {/* AI Understanding */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h5 className="font-semibold mb-2">AI Understanding</h5>
                  <p className="text-sm opacity-90">Intent recognition & context analysis</p>
                </div>
              </div>

              {/* Smart Response */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h5 className="font-semibold mb-2">Smart Response</h5>
                  <p className="text-sm opacity-90">Personalized AI-generated responses</p>
                </div>
              </div>

              {/* Action Execution */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h5 className="font-semibold mb-2">Action Execution</h5>
                  <p className="text-sm opacity-90">Automated task completion</p>
                </div>
              </div>
            </div>

            {/* AI Capabilities Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Real-time Processing */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">⚡ Real-time AI Processing</h5>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Natural Language Processing</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Sentiment Analysis</span>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Processing</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Context Awareness</span>
                    </div>
                    <span className="text-sm text-purple-600 font-medium">Learning</span>
                  </div>
                </div>
              </div>
              
              {/* Right: Automation Features */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">🔧 Automation Features</h5>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white text-center hover:scale-105 transform transition-all duration-300">
                    <Bot className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">Smart Routing</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg text-white text-center hover:scale-105 transform transition-all duration-300">
                    <Workflow className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">Process Automation</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg text-white text-center hover:scale-105 transform transition-all duration-300">
                    <Target className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">Predictive Analytics</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg text-white text-center hover:scale-105 transform transition-all duration-300">
                    <Sparkles className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">Auto-Learning</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-2xl font-bold text-blue-600">&lt; 1sec</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
            </div>
          </div>

          {/* AI Agent Types */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/images/integrations/icons8-whatsapp-48.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">WhatsApp Agent</h5>
              <p className="text-gray-600 mb-4">Intelligent WhatsApp bots for seamless customer interactions on the world's most popular messaging platform</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Multi-turn conversations</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Rich media support</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Business API integration</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">Voice AI</h5>
              <p className="text-gray-600 mb-4">Intelligent voice agents for phone-based customer interactions</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Speech-to-text</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Voice synthesis</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Real-time processing</li>
              </ul>
          </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-600" />
            </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">Web Agents</h5>
              <p className="text-gray-600 mb-4">Smart web-based assistants integrated across digital touchpoints</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Website integration</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Live chat support</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Proactive engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  )
}


