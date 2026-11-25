"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, Shield, Users, BarChart3, Globe, Clock, Lock, Settings, Brain, Mic, Eye } from "lucide-react"

export default function ProductPage() {
  const features = [
    {
      icon: Brain,
      title: "Real-time Voice Emotion Detection",
      description: "First AI platform with live emotion analysis during voice calls. Understand customer sentiment and escalate when needed.",
      unique: true
    },
    {
      icon: Zap,
      title: "Zero-Code Visual Builder",
      description: "Deploy AI agents in 10 minutes with our drag-and-drop conversation builder. No technical skills required.",
      unique: true
    },
    {
      icon: Globe,
      title: "Industry-Specific AI Models",
      description: "Pre-trained models for E-commerce, Healthcare, Banking, and SaaS. 40% better accuracy than generic AI.",
      unique: true
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Insights",
      description: "Real-time performance metrics, customer journey mapping, and predictive analytics for optimization.",
      unique: false
    }
  ]

  const industrySolutions = [
    {
      name: "E-commerce",
      icon: "🛒",
      description: "Boost sales and reduce support costs",
      useCases: [
        "Order tracking & status updates",
        "Product recommendations",
        "Returns & refund processing",
        "Inventory inquiries",
        "Payment support"
      ],
      metrics: ["40% increase in conversion", "70% reduction in support tickets", "3x faster order processing"],
      customers: ["FashionHub", "TechStore", "HomeGoods"]
    },
    {
      name: "Healthcare",
      icon: "🏥",
      description: "Improve patient care and operational efficiency",
      useCases: [
        "Appointment scheduling",
        "Symptom assessment",
        "Medication reminders",
        "Insurance verification",
        "Patient education"
      ],
      metrics: ["24/7 patient support", "HIPAA compliant", "50% faster appointment booking"],
      customers: ["HealthFirst", "MedCare", "WellnessPlus"]
    },
    {
      name: "Banking",
      icon: "🏦",
      description: "Enhance security and customer experience",
      useCases: [
        "Account inquiries",
        "Transaction support",
        "Fraud detection",
        "Loan applications",
        "Investment guidance"
      ],
      metrics: ["SOC 2 Type II compliant", "Real-time fraud detection", "90% query resolution"],
      customers: ["SecureBank", "DigitalFinance", "TrustCredit"]
    },
    {
      name: "SaaS",
      icon: "💻",
      description: "Scale customer success and reduce churn",
      useCases: [
        "Onboarding assistance",
        "Feature tutorials",
        "Technical support",
        "Billing inquiries",
        "Account management"
      ],
      metrics: ["65% cost reduction", "94% customer satisfaction", "80% query automation"],
      customers: ["TechFlow", "CloudSoft", "DataSync"]
    }
  ]

  const technicalSpecs = [
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Multi-region deployment with 99.99% uptime SLA and edge computing capabilities",
      specs: ["AWS, Azure, GCP", "Edge locations worldwide", "Auto-scaling", "Load balancing"]
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Sub-200ms response times with intelligent caching and optimization algorithms",
      specs: ["< 200ms average response", "Real-time streaming", "Intelligent caching", "Predictive scaling"]
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade security with comprehensive compliance and data protection",
      specs: ["SOC 2 Type II", "GDPR, HIPAA, CCPA", "End-to-end encryption", "Role-based access"]
    },
    {
      icon: Settings,
      title: "Easy Integration",
      description: "Simple API integration with 100+ popular platforms and custom solutions",
      specs: ["RESTful APIs", "Webhook support", "SDK libraries", "Custom connectors"]
    }
  ]

  const competitiveAdvantages = [
    {
      title: "Voice Emotion Detection",
      description: "Only platform with real-time emotion analysis",
      vsCompetitors: "Others: No emotion detection",
      impact: "35% better customer satisfaction"
    },
    {
      title: "Industry-Specific AI",
      description: "Pre-trained models for your industry",
      vsCompetitors: "Others: Generic AI models",
      impact: "40% better accuracy"
    },
    {
      title: "Zero-Code Deployment",
      description: "Deploy in 10 minutes, not 10 weeks",
      vsCompetitors: "Others: Complex development",
      impact: "10x faster implementation"
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
              <span className="text-sm font-medium text-signal">Enterprise AI Platform</span>
            </div>
            <h1 className="text-6xl text-bone mb-8 leading-tight font-medium tracking-[-0.045em]">
              The Complete AI Agent Platform
            </h1>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your customer engagement with intelligent automation. Deploy AI agents across web, WhatsApp, and voice channels with enterprise-grade security, scalability, and performance that drives measurable business outcomes.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="px-10 py-4 text-lg transition-all duration-300 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
                onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Why BotrixAI Beats the Competition
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              See how our unique features give you a competitive edge
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="bg-surface-1 p-8 rounded-2xl border border-signal/60 light-edge">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-signal rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-bone" />
                  </div>
                  <h3 className="text-xl text-bone font-medium tracking-[-0.02em]">{advantage.title}</h3>
                  <p className="text-dim">{advantage.description}</p>
                  <div className="bg-surface-2 rounded-lg p-3">
                    <div className="text-sm font-medium text-bone/80">{advantage.vsCompetitors}</div>
                  </div>
                  <div className="bg-signal/10 rounded-lg p-3">
                    <div className="text-sm font-semibold text-signal">{advantage.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Tailored AI solutions for your specific industry needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-surface-1 p-8 rounded-2xl light-edge transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl text-bone mb-2 font-medium tracking-[-0.02em]">{industry.name}</h3>
                <p className="text-dim mb-6">{industry.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="text-bone font-medium tracking-[-0.01em]">Use Cases:</h4>
                  <div className="space-y-2">
                    {industry.useCases.slice(0, 3).map((useCase, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-signal flex-shrink-0" />
                        <span className="text-sm text-bone/80">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {industry.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-signal/10 rounded-lg p-2 text-center">
                      <div className="text-sm font-semibold text-signal">{metric}</div>
                    </div>
                  ))}
                </div>
                
                <div className="text-sm text-dim">
                  Trusted by: {industry.customers.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Why Leading Companies Choose BotrixAI
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade features that scale with your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl border border-signal/60 bg-surface-1 transition-all duration-300 hover:scale-105 light-edge">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-signal">
                      <feature.icon className="w-6 h-6 text-bone" />
                    </div>
                    {feature.unique && (
                      <div className="bg-signal text-ink px-2 py-1 rounded-full text-xs font-semibold">
                        UNIQUE
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg text-bone font-medium tracking-[-0.02em]">{feature.title}</h3>
                  <p className="text-dim text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Technical Specifications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade infrastructure and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-surface-1 p-8 rounded-2xl light-edge">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-signal rounded-2xl flex items-center justify-center mx-auto">
                    <spec.icon className="w-8 h-8 text-bone" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl text-bone mb-2 font-medium tracking-[-0.02em]">{spec.title}</h3>
                    <p className="text-dim mb-4">{spec.description}</p>
                    <div className="space-y-2">
                      {spec.specs.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-signal flex-shrink-0" />
                          <span className="text-sm text-bone/80">{item}</span>
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

      {/* CTA Section */}
      <section className="py-24 site-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-bone/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 500+ companies that have already automated their customer support with BotrixAI
          </p>
           <div className="flex justify-center">
             <Button 
               className="px-12 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
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