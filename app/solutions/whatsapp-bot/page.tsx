"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, Send, Bot, Smartphone, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function WhatsAppBotPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-surface-1 rounded-3xl p-8 lg:p-12 border border-hairline transition-all duration-300">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="bg-signal/10 p-4 rounded-3xl mr-6 light-edge">
                    <Image 
                      src="/images/integrations/icons8-whatsapp-48.png" 
                      alt="WhatsApp" 
                      width={72} 
                      height={72}
                      className="w-18 h-18"
                    />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl text-bone leading-tight font-medium tracking-[-0.045em]">
                  WhatsApp Bot &<br className="hidden sm:block" />
                  <span className="text-signal">Automation</span>
                </h1>
              </div>
              <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
                Transform Customer Engagement with Intelligent WhatsApp Automation
              </h2>
              <p className="text-xl text-dim mb-8 leading-relaxed">
                Reach 2+ billion WhatsApp users with intelligent bots that handle customer support, sales, marketing campaigns, and order management. Achieve 98% message open rates and instant customer engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="px-8 py-4 text-lg rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-4 text-lg rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Sales
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-signal mb-1">98%</div>
                  <div className="text-sm text-dim">Message Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-signal mb-1">2B+</div>
                  <div className="text-sm text-dim">WhatsApp Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-signal mb-1">3x</div>
                  <div className="text-sm text-dim">Higher Conversion</div>
                </div>
              </div>
            </div>

            {/* Right Image/Demo */}
            <div className="relative">
              <div className="bg-surface-1 rounded-2xl light-edge p-6 border border-hairline">
                <div className="flex items-center mb-4 bg-[#075E54] text-bone p-3 rounded-lg">
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
                  <div className="bg-surface-2 p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">Hi! I'm your AI assistant. How can I help you today?</p>
                  </div>
                  <div className="bg-[#005c4b] p-3 rounded-lg rounded-br-none ml-8">
                    <p className="text-sm">I want to know about your products</p>
                  </div>
                  <div className="bg-surface-2 p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">Great! I can help you with:</p>
                    <div className="mt-2 space-y-1">
                      <button className="block w-full text-left bg-surface-2 p-2 rounded border text-sm hover:bg-surface-2">
                        🛍️ Browse Products
                      </button>
                      <button className="block w-full text-left bg-surface-2 p-2 rounded border text-sm hover:bg-surface-2">
                        📞 Talk to Sales
                      </button>
                      <button className="block w-full text-left bg-surface-2 p-2 rounded border text-sm hover:bg-surface-2">
                        📋 Check Order Status
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between text-xs text-dim">
                  <span>✓ Delivered</span>
                  <span>🤖 Powered by BotrixAI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Integration Flow Diagram */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-1 rounded-3xl p-8 lg:p-12 border border-hairline transition-all duration-300">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
                Make WhatsApp your go-to support channel—stay connected with your customers 24*7
              </h2>
              <p className="text-xl text-dim max-w-4xl mx-auto">
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
                  className="w-full h-auto rounded-2xl light-edge border border-hairline"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-surface-1 p-6 rounded-xl border border-hairline transition-all duration-300">
              <div className="text-3xl font-semibold text-signal mb-2">50%</div>
              <p className="text-bone/80">Cost Reduction in Support</p>
            </div>
            <div className="text-center bg-surface-1 p-6 rounded-xl border border-hairline transition-all duration-300">
              <div className="text-3xl font-semibold text-signal mb-2">24/7</div>
              <p className="text-bone/80">Automated Customer Service</p>
            </div>
            <div className="text-center bg-surface-1 p-6 rounded-xl border border-hairline transition-all duration-300">
              <div className="text-3xl font-semibold text-signal mb-2">80%</div>
              <p className="text-bone/80">Queries Resolved Automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-1 to-surface-1 rounded-3xl p-8 lg:p-12 border border-hairline transition-all duration-300">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
                Complete WhatsApp Business Solution
              </h2>
              <p className="text-xl text-dim max-w-3xl mx-auto">
                Everything you need to automate and scale your WhatsApp business communications
              </p>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <Bot className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Intelligent Chatbots</CardTitle>
                <CardDescription className="text-dim">
                  AI-powered chatbots that understand context, handle complex queries, and provide human-like conversations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <Send className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Broadcast Campaigns</CardTitle>
                <CardDescription className="text-dim">
                  Send personalized bulk messages, promotional campaigns, and notifications to thousands of customers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Workflow Automation</CardTitle>
                <CardDescription className="text-dim">
                  Create automated workflows for lead generation, customer support, and order processing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Team Collaboration</CardTitle>
                <CardDescription className="text-dim">
                  Multi-agent dashboard with shared inbox, internal notes, and team performance tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Advanced Analytics</CardTitle>
                <CardDescription className="text-dim">
                  Detailed insights on message delivery, engagement rates, conversion tracking, and ROI analysis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">WhatsApp Business API</CardTitle>
                <CardDescription className="text-dim">
                  Official WhatsApp Business API integration with enterprise-grade security and compliance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-ink border-t border-hairline-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-1 rounded-3xl p-8 lg:p-12 border border-hairline transition-all duration-300">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
                WhatsApp Automation Use Cases
              </h2>
              <p className="text-xl text-dim max-w-3xl mx-auto">
                Discover how businesses across industries use WhatsApp bots to drive growth
              </p>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-surface-1 to-surface-1 p-6 rounded-xl border border-hairline transition-all duration-300">
              <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-signal" />
              </div>
              <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Customer Support</h3>
              <p className="text-dim mb-4">Handle FAQs, order inquiries, technical support, and escalate complex issues to human agents.</p>
              <ul className="text-sm text-dim space-y-1">
                <li>• 24/7 instant responses</li>
                <li>• Multi-language support</li>
                <li>• Ticket escalation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-surface-1 to-surface-1 p-6 rounded-xl border border-hairline transition-all duration-300">
              <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-signal" />
              </div>
              <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Sales & Lead Generation</h3>
              <p className="text-dim mb-4">Qualify leads, showcase products, handle pricing inquiries, and convert prospects into customers.</p>
              <ul className="text-sm text-dim space-y-1">
                <li>• Lead qualification</li>
                <li>• Product catalogs</li>
                <li>• Price quotes</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-surface-1 to-surface-1 p-6 rounded-xl border border-hairline transition-all duration-300">
              <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-signal" />
              </div>
              <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Marketing Campaigns</h3>
              <p className="text-dim mb-4">Send promotional messages, product launches, event invitations, and personalized offers.</p>
              <ul className="text-sm text-dim space-y-1">
                <li>• Broadcast messages</li>
                <li>• Personalized offers</li>
                <li>• Event promotions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-surface-1 to-surface-1 p-6 rounded-xl border border-hairline transition-all duration-300">
              <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-signal" />
              </div>
              <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Order Management</h3>
              <p className="text-dim mb-4">Process orders, send confirmations, provide tracking updates, and handle delivery notifications.</p>
              <ul className="text-sm text-dim space-y-1">
                <li>• Order processing</li>
                <li>• Tracking updates</li>
                <li>• Delivery confirmations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-surface-1 to-surface-1 p-6 rounded-xl border border-hairline transition-all duration-300">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Appointment Booking</h3>
              <p className="text-dim mb-4">Schedule appointments, send reminders, handle rescheduling, and confirm bookings automatically.</p>
              <ul className="text-sm text-dim space-y-1">
                <li>• Calendar integration</li>
                <li>• Automated reminders</li>
                <li>• Rescheduling options</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-surface-1 to-surface-1 p-6 rounded-xl border border-hairline transition-all duration-300">
              <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-signal" />
              </div>
              <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">E-commerce Integration</h3>
              <p className="text-dim mb-4">Connect with online stores, show product catalogs, process payments, and manage inventory.</p>
              <ul className="text-sm text-dim space-y-1">
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
      <section className="py-20 site-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bone/[0.06] backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 transition-all duration-300 text-center">
          <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
            Ready to Automate Your WhatsApp Business?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join 10,000+ businesses using our WhatsApp automation to increase sales and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
              className="px-8 py-4 text-lg rounded-full border-0 bg-bone text-ink hover:bg-white font-medium" 
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 text-lg rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium"
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

