"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, Settings, MessageCircle, Wrench } from "lucide-react"
import Image from "next/image"

export default function AutomotivePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Car className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Automotive
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Drive Customer Excellence with Intelligent Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your automotive business with AI agents that enhance customer service, streamline operations, and boost sales. From dealership inquiries to service appointments, deliver exceptional experiences at every touchpoint.
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

      {/* Key Features Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Automotive-Specific AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Purpose-built AI agents designed for the unique needs of automotive businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Lead Qualification</CardTitle>
                <CardDescription className="text-dim">
                  Automatically qualify leads, schedule test drives, and connect prospects with the right sales representative
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Wrench className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Service Scheduling</CardTitle>
                <CardDescription className="text-dim">
                  Streamline service appointments, maintenance reminders, and warranty inquiries with intelligent automation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Car className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Vehicle Information</CardTitle>
                <CardDescription className="text-dim">
                  Provide instant access to vehicle specifications, pricing, availability, and financing options
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Customer Support</CardTitle>
                <CardDescription className="text-dim">
                  Handle warranty claims, parts inquiries, and general support with 24/7 intelligent assistance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Sales Analytics</CardTitle>
                <CardDescription className="text-dim">
                  Track lead conversion, customer satisfaction, and sales performance with detailed insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Clock className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">24/7 Availability</CardTitle>
                <CardDescription className="text-dim">
                  Provide round-the-clock support for emergency roadside assistance and urgent inquiries
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-ink border-t border-hairline-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Transform Your Automotive Business
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can revolutionize your automotive operations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Automotive Customer Journey */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                Automotive Customer Journey with AI
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Step 1: Initial Inquiry */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-semibold">1</span>
                      </div>
                      <h4 className="mb-2 font-medium tracking-[-0.01em]">Initial Inquiry</h4>
                      <p className="text-sm opacity-90">Customer asks about vehicles, pricing, or features</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-hairline"></div>
                    <div className="w-0 h-0 border-l-4 border-l-hairline border-t-2 border-b-2 border-t-transparent border-b-transparent absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Step 2: AI Analysis */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-semibold">2</span>
                      </div>
                      <h4 className="mb-2 font-medium tracking-[-0.01em]">AI Analysis</h4>
                      <p className="text-sm opacity-90">AI identifies intent and matches customer needs</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-hairline"></div>
                    <div className="w-0 h-0 border-l-4 border-l-hairline border-t-2 border-b-2 border-t-transparent border-b-transparent absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Step 3: Personalized Response */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-semibold">3</span>
                      </div>
                      <h4 className="mb-2 font-medium tracking-[-0.01em]">Personalized Response</h4>
                      <p className="text-sm opacity-90">Provides specific vehicle info, pricing, and availability</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-hairline"></div>
                    <div className="w-0 h-0 border-l-4 border-l-hairline border-t-2 border-b-2 border-t-transparent border-b-transparent absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Step 4: Action */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-semibold">4</span>
                      </div>
                      <h4 className="mb-2 font-medium tracking-[-0.01em]">Take Action</h4>
                      <p className="text-sm opacity-90">Schedule test drive, service appointment, or connect to sales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">85%</div>
                  <div className="text-sm text-dim">Lead Qualification Rate</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">40%</div>
                  <div className="text-sm text-dim">Faster Response Time</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">95%</div>
                  <div className="text-sm text-dim">Customer Satisfaction</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                Key Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Increase Sales Conversion</h4>
                    <p className="text-dim">Convert more leads with intelligent qualification and instant responses to customer inquiries about vehicles and financing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Streamline Service Operations</h4>
                    <p className="text-dim">Automate appointment scheduling, reduce no-shows, and improve customer satisfaction with proactive service reminders.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Enhance Customer Experience</h4>
                    <p className="text-dim">Provide instant access to vehicle information, pricing, and support, creating a seamless customer journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Operational Costs</h4>
                    <p className="text-dim">Lower staffing costs while maintaining high-quality customer service with intelligent automation that works 24/7.</p>
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
              Real-world applications transforming automotive businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Dealership Sales Support</h3>
                <p className="text-dim">
                  AI agents handle initial customer inquiries, provide vehicle information, schedule test drives, and qualify leads before connecting them with sales representatives.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Service Center Management</h3>
                <p className="text-dim">
                  Automate service appointment scheduling, send maintenance reminders, handle warranty inquiries, and provide service status updates to customers.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Parts & Accessories</h3>
                <p className="text-dim">
                  Help customers find the right parts, check availability, provide pricing information, and process orders through integrated systems.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Insurance & Financing</h3>
                <p className="text-dim">
                  Guide customers through financing options, insurance products, and warranty packages with personalized recommendations.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Fleet Management</h3>
                <p className="text-dim">
                  Support fleet customers with bulk vehicle inquiries, maintenance scheduling, and comprehensive fleet management solutions.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Customer Retention</h3>
                <p className="text-dim">
                  Proactively engage customers with service reminders, special offers, and loyalty programs to increase retention and lifetime value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 site-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
            Ready to Transform Your Automotive Business?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join leading automotive companies using AI to enhance customer experiences and drive growth.
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
      </section>

      <Footer />
    </>
  )
}
