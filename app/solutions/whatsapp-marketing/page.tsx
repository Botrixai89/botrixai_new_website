"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Zap, Shield, TrendingUp, Users, Clock, Globe, ArrowRight, CheckCircle, Star, MessageSquare, Megaphone, Bot } from "lucide-react"
import Image from "next/image"

export default function WhatsAppMarketingPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/integrations/icons8-whatsapp-48.png"
                alt="WhatsApp"
                width={48}
                height={48}
                className="w-12 h-12 mr-3"
              />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                WhatsApp Marketing
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              WhatsApp Business Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Automate customer engagement, run marketing campaigns, and manage conversations at scale on the world's most popular messaging platform with 2+ billion users.
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

      {/* Features Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Why Choose Our WhatsApp Marketing?
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Advanced automation capabilities combined with WhatsApp's massive reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Unlimited Chats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Handle unlimited conversations with customers without any per-message costs, perfect for high-volume customer support and marketing campaigns.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Broadcast Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Send targeted marketing messages, promotional offers, and announcements to your customer base with advanced segmentation and scheduling.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Smart Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  AI-powered automation that handles common queries, qualifies leads, and provides instant responses while seamlessly transferring complex issues to human agents.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">WhatsApp Business API</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Official WhatsApp Business API integration with verified business profile, ensuring high deliverability and trust with your customers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Comprehensive analytics dashboard showing message delivery rates, response times, customer engagement metrics, and campaign performance insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Multi-agent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Support for multiple team members with role-based access, conversation assignment, and team collaboration features for seamless customer service.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-ink border-t border-hairline-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Transform Your WhatsApp Business
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our WhatsApp Marketing can revolutionize your customer engagement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div>
              <h3 className="text-3xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                Key Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reach 2+ Billion Users</h4>
                    <p className="text-dim">Tap into WhatsApp's massive user base with 98% message open rates and instant engagement capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Increase Conversion Rates</h4>
                    <p className="text-dim">Achieve 3x higher conversion rates compared to email marketing with personalized, interactive conversations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Support Costs</h4>
                    <p className="text-dim">Handle 70% of customer inquiries automatically, reducing support costs while improving response times.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Build Customer Trust</h4>
                    <p className="text-dim">Leverage WhatsApp's trusted platform to build stronger relationships and increase customer loyalty.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Popular Use Cases
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how businesses are leveraging WhatsApp Marketing for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Customer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Provide instant customer support with automated responses for common queries and seamless handoff to human agents for complex issues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Marketing Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Run targeted marketing campaigns with personalized offers, product announcements, and promotional messages to drive sales and engagement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Automate lead qualification and collection with interactive forms, product demos, and appointment scheduling directly through WhatsApp.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Order Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Keep customers informed with real-time order status updates, delivery tracking, and post-purchase support through automated notifications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-red-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Appointment Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Streamline appointment scheduling with automated booking systems, reminders, and rescheduling capabilities for service-based businesses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">International Business</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Expand globally with multi-language support and localized conversations for international markets and diverse customer bases.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 site-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
            Ready to Transform Your WhatsApp Business?
          </h2>
          <p className="text-xl text-bone/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 500+ companies that have already automated their customer engagement with BotrixAI WhatsApp Marketing
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="px-12 py-4 text-lg transition-all duration-300 rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium"
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 