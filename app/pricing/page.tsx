"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Shield, Users, BarChart3, Globe, Clock, Award, TrendingUp, MessageCircle, Phone, Bot } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const webAgentPlans = [
    {
      name: "Starter",
      monthlyPrice: "₹2,499",
      yearlyPrice: "₹26,990",
      period: "per month",
      description: "For Freelancers & Small Businesses",
      features: [
        "Basic GenAI Bot",
        "Normal Integration",
        "Email Support",
        "Basic Analytics"
      ],
      popular: false,
      icon: Bot
    },
    {
      name: "Pro",
      monthlyPrice: "₹5,999",
      yearlyPrice: "₹64,790",
      period: "per month",
      description: "For SMEs & Growing Startups",
      features: [
        "CRM Integration",
        "Google Sheets Integration",
        "Advanced Analytics",
        "Priority Support"
      ],
      popular: true,
      icon: TrendingUp
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      period: "contact us",
      description: "For Large Organizations",
      features: [
        "Custom AI Models",
        "Advanced Integrations",
        "Dedicated Support",
        "Custom Analytics",
        "White-label Solutions",
        "SLA Guarantees"
      ],
      popular: false,
      icon: Shield
    }
  ]

  const whatsappPlans = [
    {
      name: "Starter Plan",
      monthlyPrice: "₹2,499",
      yearlyPrice: "₹26,990",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Unlimited Number Of Chats",
        "2 Flows for Bot",
        "100 Max Steps per Flow",
        "20 FAQ entries",
        "WhatsApp Widget",
        "5 Marketing Customizations",
        "5 Segments",
        "2 Automated Flows",
        "10 Users",
        "Shopify Integration",
        "Email Support"
      ],
      popular: false,
      icon: MessageCircle
    },
    {
      name: "Growth Plan",
      monthlyPrice: "₹4,999",
      yearlyPrice: "₹53,990",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited Number Of Clients",
        "12 Flows for Bot",
        "100 Max Steps per Flow",
        "50 FAQ entries",
        "WhatsApp Widget with Customization",
        "25 Marketing Lists",
        "10 Segments",
        "Conversations Inbox (Chat History)",
        "Broadcast Capabilities",
        "2 Automations",
        "Multiple Integrations (Shopify, FB & More)",
        "Quick Email Support"
      ],
      popular: true,
      icon: TrendingUp
    },
    {
      name: "Pro Plan",
      monthlyPrice: "₹9,999",
      yearlyPrice: "₹107,990",
      period: "per month",
      description: "For established businesses",
      features: [
        "Unlimited Number Of Chats",
        "25 Flows for Bot",
        "200 Max Steps per Flow",
        "200 FAQ entries",
        "Smart AI Integration",
        "Fully Customizable WhatsApp Widget",
        "50 Marketing Lists",
        "40 Segments",
        "Comprehensive Conversations Inbox",
        "15 Automations",
        "API Integrations & Webhooks",
        "Premium Support (Email & Call)"
      ],
      popular: false,
      icon: Award
    }
  ]

  const voiceAgentPlans = [
    {
      name: "VoiceBot Basic",
      usagePrice: "₹0.05/sec",
      setupFee: "₹50,000",
      description: "Perfect for basic voice interactions",
      features: [
        "1 Agent",
        "1 Language",
        "Basic Analytics",
        "Email Support"
      ],
      popular: false,
      icon: Phone
    },
    {
      name: "VoiceBot Pro",
      usagePrice: "₹0.05/sec",
      setupFee: "₹70,000",
      description: "Advanced voice automation",
      features: [
        "2 Agents",
        "2 Languages",
        "Advanced Dashboard",
        "Custom Integrations",
        "Priority Support"
      ],
      popular: true,
      icon: Award
    }
  ]

  const enterpriseFeatures = [
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 dedicated account management and technical support"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliance with advanced security protocols"
    },
    {
      icon: BarChart3,
      title: "Custom Analytics",
      description: "Advanced reporting and custom analytics dashboards"
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Multi-region deployment with edge computing capabilities"
    },
    {
      icon: Clock,
      title: "Custom SLA",
      description: "Guaranteed uptime and performance SLAs"
    },
    {
      icon: Award,
      title: "White-label Solutions",
      description: "Complete white-label options for resellers and partners"
    }
  ]

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for our Web Agents and WhatsApp Marketing plans. Voice Agents have one-time setup fees as listed in the pricing table."
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Yes, we offer volume discounts for high-volume usage and annual commitments. Contact our sales team for custom pricing."
    },
    {
      question: "What's included in the free trial?",
      answer: "Our 14-day free trial includes all Professional plan features. No credit card required to start."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
    }
  ]

  const getPrice = (plan: any) => {
    if (plan.monthlyPrice === "Custom") return "Custom"
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice
  }

  const getPeriod = (plan: any) => {
    if (plan.monthlyPrice === "Custom") return "contact us"
    return isYearly ? "per year" : "per month"
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 mb-8">
              <span className="text-sm font-medium text-green-800">Transparent Pricing</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI capabilities with enterprise-grade security and support.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-gray-600 ${!isYearly ? 'font-semibold text-gray-900' : ''}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D563] focus:ring-offset-2"
                style={{ backgroundColor: isYearly ? '#00D563' : '#D1D5DB' }}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-gray-600 ${isYearly ? 'font-semibold text-gray-900' : ''}`}>
                Annual <span className="text-[#00D563] font-semibold">(Save 10%)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Web Agents Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Web Agents - Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Intelligent AI-powered chatbots tailored for every business size
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {webAgentPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'border-[#00D563] scale-105' : 'border-gray-100'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#00D563] to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00D563] to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{getPrice(plan)}</span>
                      <span className="text-gray-600 ml-2">{getPeriod(plan)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#00D563] flex-shrink-0 mt-1" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full py-4 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#00D563] to-green-600 hover:from-green-600 hover:to-[#00D563] text-white shadow-xl hover:shadow-2xl'
                      : 'bg-white border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white'
                  } transition-all duration-300`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Marketing Pricing */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/integrations/icons8-whatsapp-48.png"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8 mr-3"
              />
              <h2 className="text-4xl font-bold text-gray-900">
                WhatsApp Marketing - Pricing Plans
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Engage your customers where they are most active
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {whatsappPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'border-[#00D563] scale-105' : 'border-gray-100'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#00D563] to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00D563] to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{getPrice(plan)}</span>
                      <span className="text-gray-600 ml-2">{getPeriod(plan)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#00D563] flex-shrink-0 mt-1" />
                        <span className="text-gray-700 leading-relaxed text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full py-4 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#00D563] to-green-600 hover:from-green-600 hover:to-[#00D563] text-white shadow-xl hover:shadow-2xl'
                      : 'bg-white border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white'
                  } transition-all duration-300`}>
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Agents Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Voice Agents - Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced voice assistants for seamless customer interactions
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#00D563] to-green-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-semibold">Plan</th>
                    <th className="px-8 py-6 text-left text-lg font-semibold">Usage Price</th>
                    <th className="px-8 py-6 text-left text-lg font-semibold">Setup Fee</th>
                    <th className="px-8 py-6 text-left text-lg font-semibold">Key Features</th>
                    <th className="px-8 py-6 text-left text-lg font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {voiceAgentPlans.map((plan, index) => (
                    <tr key={index} className={`hover:bg-gray-50 transition-colors ${plan.popular ? 'bg-green-50' : ''}`}>
                      <td className="px-8 py-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#00D563] to-green-600 rounded-lg flex items-center justify-center mr-4">
                            <plan.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="text-gray-600">{plan.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-2xl font-bold text-gray-900">{plan.usagePrice}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-xl font-semibold text-gray-900">{plan.setupFee}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <Check className="w-4 h-4 text-[#00D563] flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <Button className="bg-gradient-to-r from-[#00D563] to-green-600 hover:from-green-600 hover:to-[#00D563] text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                          Get Started
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced capabilities designed for large organizations with complex requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
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

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#00D563] to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Start your free trial today and experience the power of AI automation. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#00D563] px-12 py-4 text-lg font-semibold transition-all duration-300 bg-transparent">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 