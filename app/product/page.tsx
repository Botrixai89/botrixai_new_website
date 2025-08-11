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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 mb-8">
              <span className="text-sm font-medium text-green-800">Enterprise AI Platform</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              The Complete AI Agent Platform
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your customer engagement with intelligent automation. Deploy AI agents across web, WhatsApp, and voice channels with enterprise-grade security, scalability, and performance that drives measurable business outcomes.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" className="border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why BotrixAI Beats the Competition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how our unique features give you a competitive edge
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border-2 border-[#00D563] shadow-xl">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#00D563] rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-700">{advantage.vsCompetitors}</div>
                  </div>
                  <div className="bg-[#E8FFF4] rounded-lg p-3">
                    <div className="text-sm font-semibold text-[#00D563]">{advantage.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored AI solutions for your specific industry needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900">Use Cases:</h4>
                  <div className="space-y-2">
                    {industry.useCases.slice(0, 3).map((useCase, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#00D563] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {industry.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#E8FFF4] rounded-lg p-2 text-center">
                      <div className="text-sm font-semibold text-[#00D563]">{metric}</div>
                    </div>
                  ))}
                </div>
                
                <div className="text-sm text-gray-500">
                  Trusted by: {industry.customers.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Leading Companies Choose BotrixAI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade features that scale with your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl border-2 border-[#00D563] bg-white transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#00D563]">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    {feature.unique && (
                      <div className="bg-[#00D563] text-white px-2 py-1 rounded-full text-xs font-semibold">
                        UNIQUE
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade infrastructure and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-[#00D563] rounded-2xl flex items-center justify-center mx-auto">
                    <spec.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{spec.title}</h3>
                    <p className="text-gray-600 mb-4">{spec.description}</p>
                    <div className="space-y-2">
                      {spec.specs.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-[#00D563] flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
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
      <section className="py-24 bg-gradient-to-r from-[#00D563] to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 500+ companies that have already automated their customer support with BotrixAI
          </p>
           <div className="flex justify-center">
             <Button className="bg-white text-[#00D563] hover:bg-white/90 px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/60">
               Schedule Demo
             </Button>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 