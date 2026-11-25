"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Zap, Shield, TrendingUp, Users, Clock, Globe, ArrowRight, CheckCircle, Star, Phone, Volume2, Headphones } from "lucide-react"
import Image from "next/image"

export default function VoiceAgentsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Mic className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                Voice Agents
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              AI Voice Assistants
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Advanced voice bots for phone support, IVR systems, and voice-based customer interactions with natural language processing and human-like conversations.
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
              Why Choose Our Voice Agents?
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Advanced AI technology combined with natural voice interactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Volume2 className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Multi-language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Support for 50+ languages with natural accent recognition and cultural understanding for global customer engagement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Custom Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Seamless integration with existing phone systems, CRM platforms, and business applications for unified customer management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Comprehensive analytics dashboard providing insights into call patterns, customer satisfaction, and performance metrics for continuous optimization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Natural Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Human-like voice interactions with natural language processing, emotion detection, and contextual understanding for seamless customer experiences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-red-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Bank-level security with end-to-end encryption, compliance with industry standards, and secure data handling for sensitive customer information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Round-the-clock availability with instant response times, ensuring customers receive support whenever they need it, day or night.
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
              Transform Your Voice Communications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our Voice Agents can revolutionize your customer interactions
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Call Center Costs</h4>
                    <p className="text-dim">Handle 80% of incoming calls automatically, reducing operational costs while maintaining high customer satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Improve Response Times</h4>
                    <p className="text-dim">Provide instant responses to customer inquiries, eliminating wait times and improving overall customer experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Scale Without Limits</h4>
                    <p className="text-dim">Handle unlimited concurrent calls without additional infrastructure or staffing requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Enhance Customer Experience</h4>
                    <p className="text-dim">Provide consistent, personalized service across all voice interactions with intelligent routing and context awareness.</p>
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
              See how businesses are leveraging Voice Agents for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Customer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Handle customer inquiries, troubleshoot issues, and provide product information with intelligent voice responses and seamless human handoff.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Volume2 className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">IVR Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Replace traditional IVR menus with intelligent voice agents that understand natural language and provide personalized assistance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Appointment Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Automate appointment scheduling with voice-based booking systems that understand availability and customer preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Order Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Process orders, track deliveries, and handle returns through natural voice conversations with secure payment processing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-red-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Lead Qualification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Qualify leads through intelligent voice conversations that gather information and route prospects to the right sales team.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Multi-language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Serve global customers with voice agents that speak their language and understand cultural nuances for better engagement.
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
            Ready to Transform Your Voice Communications?
          </h2>
          <p className="text-xl text-bone/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 500+ companies that have already automated their voice interactions with BotrixAI Voice Agents
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