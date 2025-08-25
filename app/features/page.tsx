"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Zap, Shield, Users, BarChart3, MessageCircle, Phone, Globe, Brain, Settings, Lock, Clock, Award, TrendingUp, Database, Cpu } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Agent Features - Advanced Customer Service Automation | BotrixAI",
  description: "Explore BotrixAI's advanced AI agent features: enterprise security, omnichannel deployment, CRM integration, real-time analytics, and 24/7 customer support automation.",
  keywords: [
    "AI agent features",
    "customer service automation features", 
    "enterprise AI security",
    "omnichannel chatbot deployment",
    "CRM integration AI",
    "real-time customer analytics",
    "AI chatbot capabilities",
    "conversational AI features",
    "voice bot features",
    "WhatsApp automation features"
  ],
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
    title: "AI Agent Features - Advanced Customer Service Automation | BotrixAI",
    description: "Explore BotrixAI's advanced AI agent features: enterprise security, omnichannel deployment, CRM integration, real-time analytics, and 24/7 customer support automation.",
    url: "https://botrixai.com/features",
    siteName: "BotrixAI",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI AI Agent Features and Customer Service Automation Capabilities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Features - Advanced Customer Service Automation | BotrixAI",
    description: "Explore BotrixAI's advanced AI agent features: enterprise security, omnichannel deployment, CRM integration, real-time analytics, and 24/7 customer support automation.",
    images: ["/Automation 11.png"],
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com/features",
  },
}

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Brain,
      title: "Advanced AI Intelligence",
      description: "State-of-the-art natural language processing and machine learning algorithms that deliver human-like conversations with context awareness and continuous learning capabilities",
      benefits: ["Context-aware conversations", "Multi-language support with 50+ languages", "Continuous learning and improvement", "Advanced intent recognition and entity extraction"]
    },
    {
      icon: MessageCircle,
      title: "Omnichannel Deployment",
      description: "Seamlessly deploy AI agents across web, WhatsApp, voice, and social media platforms with unified management and consistent customer experiences",
      benefits: ["Unified dashboard for all channels", "Consistent brand experience", "Cross-platform conversation sync", "Channel-specific optimization and customization"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 Type II compliance, end-to-end encryption, and comprehensive audit trails for complete data protection",
      benefits: ["256-bit AES encryption", "Role-based access controls", "Comprehensive audit trails", "GDPR and CCPA compliance"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Insights",
      description: "Comprehensive analytics and performance metrics to optimize your AI agents and drive data-driven business decisions",
      benefits: ["Real-time performance monitoring", "Custom reporting and dashboards", "Customer sentiment analysis", "ROI tracking and optimization"]
    }
  ]

  const technicalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast Deployment",
      description: "Deploy AI agents in minutes with our intuitive drag-and-drop interface and extensive library of pre-built templates"
    },
    {
      icon: Settings,
      title: "Seamless Integration",
      description: "Simple API integration with popular platforms including Salesforce, HubSpot, Zendesk, and custom enterprise solutions"
    },
    {
      icon: Users,
      title: "Scalable Infrastructure",
      description: "Auto-scaling infrastructure that grows with your business needs, handling millions of conversations simultaneously"
    },
    {
      icon: Lock,
      title: "Data Sovereignty",
      description: "Complete control over your data with on-premise and cloud deployment options for maximum security and compliance"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock AI agents that never sleep, providing instant responses and support to your customers worldwide"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Multi-region deployment with edge computing capabilities for optimal performance and local language support"
    }
  ]

  const advancedFeatures = [
    {
      icon: Cpu,
      title: "Custom AI Models",
      description: "Train and deploy custom AI models tailored to your specific industry and business requirements"
    },
    {
      icon: Database,
      title: "Knowledge Base Integration",
      description: "Seamlessly integrate with your existing knowledge base and CRM systems for comprehensive customer support"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage machine learning to predict customer behavior and proactively address their needs"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Built-in quality monitoring and automated testing to ensure consistent, high-quality customer interactions"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 mb-8">
              <span className="text-sm font-medium text-green-800">Enterprise Features</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Powerful Features for Modern Enterprises
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover the comprehensive suite of features that make BotrixAI the leading AI agent platform for customer engagement and automation, designed to scale with your business and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="outline" className="border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300">
                View Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to create, deploy, and manage intelligent AI agents that deliver exceptional customer experiences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00D563] to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{feature.description}</p>
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-[#00D563] flex-shrink-0 mt-1" />
                          <span className="text-gray-700 leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built with cutting-edge technology for reliability, performance, and scalability that meets enterprise standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00D563] to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade features that give you complete control and customization over your AI agents
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00D563] to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why BotrixAI Stands Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compare our features with traditional solutions and see the difference that AI-powered automation makes
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-3 divide-x divide-gray-200">
              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Solutions</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Limited automation capabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Single channel support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Basic analytics and reporting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Manual scaling and maintenance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Limited customization options</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 bg-gradient-to-br from-green-50 to-blue-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">BotrixAI Platform</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">✓</span>
                    <span>Full AI-powered automation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">✓</span>
                    <span>Omnichannel deployment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">✓</span>
                    <span>Advanced analytics and insights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">✓</span>
                    <span>Auto-scaling infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">✓</span>
                    <span>Complete customization</span>
                  </li>
                </ul>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Impact</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">→</span>
                    <span>10x faster deployment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">→</span>
                    <span>80% cost reduction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">→</span>
                    <span>24/7 availability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">→</span>
                    <span>95% customer satisfaction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00D563] font-bold">→</span>
                    <span>300% higher conversion rates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#00D563] to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Start your free trial today and explore all the powerful features BotrixAI has to offer. Transform your customer engagement and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#00D563] px-12 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 