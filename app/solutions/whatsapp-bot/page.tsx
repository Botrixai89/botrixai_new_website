"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, Send, Bot, Smartphone, BarChart3 } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WhatsApp Bot & Marketing Automation - 98% Open Rate | BotrixAI",
  description: "Transform your business with intelligent WhatsApp bots. Automated customer service, marketing campaigns, and sales on WhatsApp Business API. 98% message open rates guaranteed.",
  keywords: [
    "WhatsApp bot automation",
    "WhatsApp marketing automation",
    "WhatsApp business API",
    "automated WhatsApp messaging",
    "WhatsApp customer service bot",
    "WhatsApp sales automation",
    "intelligent WhatsApp assistant",
    "WhatsApp broadcast automation",
    "WhatsApp lead generation",
    "WhatsApp order management"
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
    title: "WhatsApp Bot & Marketing Automation - 98% Open Rate | BotrixAI",
    description: "Transform your business with intelligent WhatsApp bots. Automated customer service, marketing campaigns, and sales on WhatsApp Business API. 98% message open rates guaranteed.",
    url: "https://botrixai.com/solutions/whatsapp-bot",
    siteName: "BotrixAI",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI WhatsApp Bot and Marketing Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Bot & Marketing Automation - 98% Open Rate | BotrixAI",
    description: "Transform your business with intelligent WhatsApp bots. Automated customer service, marketing campaigns, and sales on WhatsApp Business API. 98% message open rates guaranteed.",
    images: ["/Automation 11.png"],
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com/solutions/whatsapp-bot",
  },
}

export default function WhatsAppBotPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 border-2 border-black shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="bg-green-100 p-4 rounded-3xl mr-6 shadow-lg">
                    <Image 
                      src="/images/integrations/icons8-whatsapp-48.png" 
                      alt="WhatsApp" 
                      width={72} 
                      height={72}
                      className="w-18 h-18"
                    />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  WhatsApp Bot &<br className="hidden sm:block" />
                  <span className="text-[#00D563]">Automation</span>
                </h1>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Transform Customer Engagement with Intelligent WhatsApp Automation
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Reach 2+ billion WhatsApp users with intelligent bots that handle customer support, sales, marketing campaigns, and order management. Achieve 98% message open rates and instant customer engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="bg-[#00D563] hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Sales
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00D563] mb-1">98%</div>
                  <div className="text-sm text-gray-600">Message Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00D563] mb-1">2B+</div>
                  <div className="text-sm text-gray-600">WhatsApp Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00D563] mb-1">3x</div>
                  <div className="text-sm text-gray-600">Higher Conversion</div>
                </div>
              </div>
            </div>

            {/* Right Image/Demo */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="flex items-center mb-4 bg-[#075E54] text-white p-3 rounded-lg">
                  <Image 
                    src="/images/integrations/icons8-whatsapp-48.png" 
                    alt="WhatsApp" 
                    width={24} 
                    height={24}
                    className="w-6 h-6 mr-3"
                  />
                  <span className="font-semibold">BotrixAI Assistant</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">Hi! I'm your AI assistant. How can I help you today?</p>
                  </div>
                  <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-br-none ml-8">
                    <p className="text-sm">I want to know about your products</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">Great! I can help you with:</p>
                    <div className="mt-2 space-y-1">
                      <button className="block w-full text-left bg-white p-2 rounded border text-sm hover:bg-gray-50">
                        🛍️ Browse Products
                      </button>
                      <button className="block w-full text-left bg-white p-2 rounded border text-sm hover:bg-gray-50">
                        📞 Talk to Sales
                      </button>
                      <button className="block w-full text-left bg-white p-2 rounded border text-sm hover:bg-gray-50">
                        📋 Check Order Status
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>✓ Delivered</span>
                  <span>🤖 Powered by BotrixAI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Integration Flow Diagram */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-black shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Make WhatsApp your go-to support channel—stay connected with your customers 24*7
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Drive customers from different channels to WhatsApp & manage ticket volumes smartly & efficiently. 
                Save up to 50% on your support costs.
              </p>
            </div>

            {/* WhatsApp Support Hero Image */}
            <div className="flex justify-center">
              <div className="max-w-5xl w-full">
                <Image 
                  src="/edit 2.png" 
                  alt="WhatsApp for Support - Customer Journey Flow" 
                  width={1200} 
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-white p-6 rounded-xl border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <p className="text-gray-700">Cost Reduction in Support</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <p className="text-gray-700">Automated Customer Service</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
              <p className="text-gray-700">Queries Resolved Automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border-2 border-black shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete WhatsApp Business Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to automate and scale your WhatsApp business communications
              </p>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <CardHeader>
                <Bot className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Intelligent Chatbots</CardTitle>
                <CardDescription className="text-gray-600">
                  AI-powered chatbots that understand context, handle complex queries, and provide human-like conversations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <CardHeader>
                <Send className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Broadcast Campaigns</CardTitle>
                <CardDescription className="text-gray-600">
                  Send personalized bulk messages, promotional campaigns, and notifications to thousands of customers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Workflow Automation</CardTitle>
                <CardDescription className="text-gray-600">
                  Create automated workflows for lead generation, customer support, and order processing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Team Collaboration</CardTitle>
                <CardDescription className="text-gray-600">
                  Multi-agent dashboard with shared inbox, internal notes, and team performance tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Advanced Analytics</CardTitle>
                <CardDescription className="text-gray-600">
                  Detailed insights on message delivery, engagement rates, conversion tracking, and ROI analysis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">WhatsApp Business API</CardTitle>
                <CardDescription className="text-gray-600">
                  Official WhatsApp Business API integration with enterprise-grade security and compliance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-black shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                WhatsApp Automation Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how businesses across industries use WhatsApp bots to drive growth
              </p>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-xl border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Support</h3>
              <p className="text-gray-600 mb-4">Handle FAQs, order inquiries, technical support, and escalate complex issues to human agents.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 24/7 instant responses</li>
                <li>• Multi-language support</li>
                <li>• Ticket escalation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-xl border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sales & Lead Generation</h3>
              <p className="text-gray-600 mb-4">Qualify leads, showcase products, handle pricing inquiries, and convert prospects into customers.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Lead qualification</li>
                <li>• Product catalogs</li>
                <li>• Price quotes</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-xl border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Campaigns</h3>
              <p className="text-gray-600 mb-4">Send promotional messages, product launches, event invitations, and personalized offers.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Broadcast messages</li>
                <li>• Personalized offers</li>
                <li>• Event promotions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-xl border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Order Management</h3>
              <p className="text-gray-600 mb-4">Process orders, send confirmations, provide tracking updates, and handle delivery notifications.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Order processing</li>
                <li>• Tracking updates</li>
                <li>• Delivery confirmations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-xl border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Appointment Booking</h3>
              <p className="text-gray-600 mb-4">Schedule appointments, send reminders, handle rescheduling, and confirm bookings automatically.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Calendar integration</li>
                <li>• Automated reminders</li>
                <li>• Rescheduling options</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-xl border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Integration</h3>
              <p className="text-gray-600 mb-4">Connect with online stores, show product catalogs, process payments, and manage inventory.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Product showcases</li>
                <li>• Payment processing</li>
                <li>• Inventory updates</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00D563] to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-300 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your WhatsApp Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join 10,000+ businesses using our WhatsApp automation to increase sales and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
              className="bg-white text-[#00D563] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" 
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#00D563] px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Sales
            </Button>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

