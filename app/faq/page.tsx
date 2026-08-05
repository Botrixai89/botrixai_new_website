"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDown, ChevronUp, MessageCircle, Phone, Settings, Shield } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const faqCategories = [
    {
      title: "General Platform Questions",
      icon: MessageCircle,
      questions: [
        {
          id: "what-is-botrixai",
          question: "What is BotrixAI and how does it work?",
          answer: "BotrixAI is a comprehensive AI automation platform that provides WhatsApp marketing automation, voice agents, and web chatbots. Our platform uses advanced natural language processing and machine learning to create intelligent agents that can handle customer service, sales, and marketing tasks 24/7. The system integrates with your existing business tools and can be deployed across multiple channels including WhatsApp Business API, voice systems, and web interfaces."
        },
        {
          id: "who-can-use-botrixai",
          question: "Who can benefit from using BotrixAI?",
          answer: "BotrixAI is designed for businesses of all sizes, from small startups to large enterprises. Our platform is particularly beneficial for e-commerce companies, customer service teams, sales organizations, healthcare providers, educational institutions, and any business that wants to automate customer interactions and improve engagement rates."
        },
        {
          id: "platform-features",
          question: "What are the key features of BotrixAI platform?",
          answer: "Key features include: Multi-channel AI agents (WhatsApp, Voice, Web), Advanced natural language processing, CRM and third-party integrations, Real-time analytics and reporting, Enterprise-grade security, Multi-language support (50+ languages), Custom workflow automation, Lead generation and qualification, 24/7 customer support automation, and Advanced conversation analytics."
        }
      ]
    },
    {
      title: "WhatsApp Automation",
      icon: MessageCircle,
      questions: [
        {
          id: "whatsapp-setup",
          question: "How do I set up WhatsApp automation for my business?",
          answer: "Setting up WhatsApp automation involves: 1) Verifying your WhatsApp Business API account, 2) Connecting your business phone number, 3) Configuring automated responses and workflows in our platform, 4) Setting up integrations with your CRM or other business tools, 5) Testing the automation with sample conversations, and 6) Going live. Our team provides full setup support and training to ensure smooth implementation."
        },
        {
          id: "whatsapp-compliance",
          question: "Is WhatsApp automation compliant with WhatsApp Business policies?",
          answer: "Yes, BotrixAI is fully compliant with WhatsApp Business API policies and guidelines. We follow all messaging guidelines, respect opt-in requirements, handle user preferences for communications, and ensure all automated messages meet WhatsApp's quality standards. Our platform includes built-in compliance features to help you maintain policy adherence."
        },
        {
          id: "whatsapp-limits",
          question: "Are there any limits on WhatsApp message volume?",
          answer: "WhatsApp Business API has messaging limits that depend on your account tier and approval status. BotrixAI helps you manage these limits effectively through our platform's built-in throttling and queue management features. We also assist with the approval process to increase your messaging limits as your business grows."
        }
      ]
    },
    {
      title: "Voice AI & Integration",
      icon: Phone,
      questions: [
        {
          id: "voice-ai-setup",
          question: "How does voice AI integration work?",
          answer: "Our voice AI agents integrate with your existing phone systems through SIP, WebRTC, or telephony APIs. The setup includes: Connecting to your phone system or provider, Configuring voice recognition and synthesis, Setting up conversation flows and responses, Integrating with your CRM for customer data, Testing call scenarios, and Training the AI on your specific use cases. Implementation typically takes 1-2 weeks with our technical support."
        },
        {
          id: "voice-languages",
          question: "What languages are supported for voice AI?",
          answer: "Our voice AI supports 50+ languages including English, Spanish, French, German, Italian, Portuguese, Hindi, Mandarin, Japanese, Korean, Arabic, and many more. We offer both speech recognition and text-to-speech capabilities in all supported languages, with accent and dialect variations for major languages."
        },
        {
          id: "crm-integration",
          question: "Which CRM systems can BotrixAI integrate with?",
          answer: "BotrixAI integrates with major CRM platforms including Salesforce, HubSpot, Zoho, Pipedrive, Microsoft Dynamics 365, Freshworks, and many others. We also offer custom API integrations for proprietary systems. Our integrations support real-time data sync, automatic lead creation, conversation logging, and customer profile updates."
        }
      ]
    },
    {
      title: "Security & Enterprise",
      icon: Shield,
      questions: [
        {
          id: "data-security",
          question: "How secure is customer data on BotrixAI platform?",
          answer: "BotrixAI employs enterprise-grade security measures including: 256-bit AES encryption for data at rest and in transit, SOC 2 Type II compliance, GDPR and CCPA compliance, Role-based access controls, Regular security audits and penetration testing, Secure API endpoints with OAuth 2.0, Data residency options, and Comprehensive audit logs. All data is processed in secure, certified data centers."
        },
        {
          id: "enterprise-features",
          question: "What enterprise features are available?",
          answer: "Enterprise features include: Single Sign-On (SSO) integration, Advanced user management and permissions, Custom SLA agreements, Dedicated account management, Priority technical support, Custom integrations and APIs, Advanced analytics and reporting, Multi-tenant architecture, Disaster recovery and backup, and Compliance certifications (SOC 2, HIPAA available)."
        },
        {
          id: "data-retention",
          question: "What is the data retention policy?",
          answer: "Data retention policies are configurable based on your business needs and compliance requirements. By default, conversation data is retained for 12 months, analytics data for 24 months, and system logs for 90 days. Enterprise customers can customize retention periods and implement automated data purging based on their specific compliance needs."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: Settings,
      questions: [
        {
          id: "pricing-model",
          question: "How does BotrixAI pricing work?",
          answer: "BotrixAI offers flexible pricing based on usage and features: Starter Plan (₹2,499/month) for small businesses with basic automation, Pro Plan (₹5,999/month) for growing companies with advanced features, Enterprise Plan (custom pricing) for large organizations with premium support and customization. Pricing is based on conversation volume, channels used, and feature requirements."
        },
        {
          id: "free-trial",
          question: "Is there a free trial available?",
          answer: "Yes, we offer a 14-day free trial with full access to our platform features. The trial includes up to 1,000 conversations, access to all channels (WhatsApp, Voice, Web), CRM integrations, and full customer support. No credit card required to start the trial."
        },
        {
          id: "custom-pricing",
          question: "Do you offer custom pricing for large enterprises?",
          answer: "Yes, we provide custom pricing for enterprise customers based on volume, specific requirements, and deployment complexity. Enterprise pricing includes volume discounts, custom SLAs, dedicated support, and additional security features. Contact our sales team for a personalized quote."
        }
      ]
    }
  ]

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
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
        "name": "FAQ",
        "item": "https://botrixai.com/faq"
      }
    ]
  }

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#00D563]">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about WhatsApp automation, AI agents, integrations, security, and pricing. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#00D563]/10 rounded-full flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-[#00D563]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <div 
                      key={faq.id} 
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {openItems.includes(faq.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {openItems.includes(faq.id) && (
                        <div className="px-6 pb-4 bg-gray-50">
                          <div className="pt-2 text-gray-700 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-[#00D563]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help you get the most out of BotrixAI. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 bg-white text-[#00D563] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              >
                Schedule a Demo
              </button>
              <button 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#00D563] transition-colors"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
