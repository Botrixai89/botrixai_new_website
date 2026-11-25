"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Headphones, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ContactCenterPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Headphones className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Contact Center
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Intelligent Call Center Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your contact center with AI agents that handle calls, route inquiries, and provide intelligent support. Reduce wait times and improve customer satisfaction.
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

      {/* Live Dashboard Demo Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
                Real-Time Call Center Intelligence
              </h2>
              <p className="text-xl text-dim mb-8 leading-relaxed">
                Experience our AI-powered call center dashboard that intelligently routes calls, analyzes sentiment, and provides real-time insights to boost efficiency.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-semibold text-signal mb-1">80%</div>
                  <div className="text-sm text-dim">Call Resolution</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-semibold text-signal mb-1">30s</div>
                  <div className="text-sm text-dim">Avg Wait Time</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-semibold text-signal mb-1">95%</div>
                  <div className="text-sm text-dim">Customer Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Call Center Visualization */}
            <div className="relative">
              <div className="bg-surface-1 rounded-2xl light-edge p-6 border border-hairline">
                <div className="flex items-center mb-4 bg-surface-2 text-bone p-3 rounded-lg">
                  <Phone className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Call Center Dashboard</span>
                  <div className="ml-auto flex items-center">
                    <div className="w-2 h-2 bg-signal/20 rounded-full animate-pulse"></div>
                    <span className="ml-2 text-sm">Live</span>
                  </div>
                </div>
                
                {/* Call Flow Visualization */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg text-bone mb-4 font-medium tracking-[-0.02em]">Live Call Orchestration</h3>
                  </div>
                  
                  {/* Incoming Call */}
                  <div className="flex items-center justify-between bg-surface-2 p-3 rounded-lg">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-signal mr-2" />
                      <span className="text-sm font-medium">Incoming Call #1247</span>
                    </div>
                    <div className="text-xs text-signal bg-surface-2 px-2 py-1 rounded">Routing...</div>
                  </div>

                  {/* Intent Detection */}
                  <div className="flex items-center">
                    <div className="w-full bg-hairline rounded-full h-2">
                      <div className="bg-signal h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                    <span className="ml-2 text-xs text-dim">Intent: Billing Issue</span>
                  </div>

                  {/* Agent Assignment */}
                  <div className="bg-surface-2 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Headphones className="w-5 h-5 text-signal mr-2" />
                        <div>
                          <div className="text-sm font-medium">AI Agent Sarah</div>
                          <div className="text-xs text-dim">Billing Specialist</div>
                        </div>
                      </div>
                      <div className="text-xs text-signal bg-signal/20 px-2 py-1 rounded">Connected</div>
                    </div>
                  </div>

                  {/* Live Metrics */}
                  <div className="bg-surface-2 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-2">Real-time Metrics</div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-dim">Queue Time</div>
                        <div className="font-semibold text-signal">12s</div>
                      </div>
                      <div>
                        <div className="text-dim">Resolution Rate</div>
                        <div className="font-semibold text-signal">87%</div>
                      </div>
                      <div>
                        <div className="text-dim">Active Calls</div>
                        <div className="font-semibold text-signal">23</div>
                      </div>
                      <div>
                        <div className="text-dim">Avg Rating</div>
                        <div className="font-semibold text-signal">4.8⭐</div>
                      </div>
                    </div>
                  </div>

                  {/* Queue Status */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Current Queue</div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between bg-surface-2 p-2 rounded text-xs">
                        <span>Call #1248 - Technical</span>
                        <span className="text-signal">Waiting: 8s</span>
                      </div>
                      <div className="flex items-center justify-between bg-surface-2 p-2 rounded text-xs">
                        <span>Call #1249 - Sales</span>
                        <span className="text-signal">Waiting: 15s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Why Choose AI Contact Center Agents?
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Advanced automation that revolutionizes your contact center operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-surface-2 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Intelligent Call Routing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Automatically route calls to the right department or agent based on customer needs and agent availability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Instant Response</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Eliminate hold times with AI agents that provide immediate assistance and resolve common issues instantly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Agent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Provide real-time assistance to human agents with relevant information and suggested responses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Monitor call quality, compliance, and performance with AI-powered analytics and insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Scalable Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Handle peak call volumes without adding infrastructure or hiring additional agents.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-red-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Multi-Language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Serve customers in their native language with AI agents that understand and respond in 50+ languages.
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
              Transform Your Contact Center
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how AI agents can revolutionize your contact center operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-bone mb-8 font-medium tracking-[-0.02em]">
                Key Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Wait Times</h4>
                    <p className="text-dim">Cut average wait times by 80% with intelligent call routing and instant AI responses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Improve Efficiency</h4>
                    <p className="text-dim">Increase agent productivity by 50% with AI assistance and automated routine tasks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Lower Costs</h4>
                    <p className="text-dim">Reduce operational costs by up to 40% while improving service quality and customer satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">24/7 Availability</h4>
                    <p className="text-dim">Provide round-the-clock support without the need for night shifts or overtime pay.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-surface-1 p-8 rounded-2xl light-edge overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-1 via-surface-1 to-surface-1" />
              <div className="relative z-10">
                <h4 className="text-2xl text-bone mb-4 font-medium tracking-[-0.01em]">Call Routing Intelligence</h4>
                <p className="text-dim mb-6">Smart call distribution based on agent expertise and customer intent.</p>
                
                {/* Call Flow Diagram */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-signal/10 p-3 rounded-lg flex items-center">
                      <Phone className="w-5 h-5 text-signal mr-2" />
                      <span className="text-sm font-medium">Incoming Call</span>
                    </div>
                    <div className="flex-1 mx-3 border-t-2 border-dashed border-hairline"></div>
                    <div className="bg-signal/10 p-3 rounded-lg flex items-center">
                      <Globe className="w-5 h-5 text-signal mr-2" />
                      <span className="text-sm font-medium">Intent Analysis</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="flex-1 border-l-2 border-dashed border-hairline h-8"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-signal/10 p-3 rounded-lg text-center">
                      <Headphones className="w-5 h-5 text-signal mx-auto mb-1" />
                      <span className="text-xs font-medium">Support Agent</span>
                      <div className="text-xs text-dim">Available</div>
                    </div>
                    <div className="bg-signal/10 p-3 rounded-lg text-center">
                      <Users className="w-5 h-5 text-signal mx-auto mb-1" />
                      <span className="text-xs font-medium">Sales Agent</span>
                      <div className="text-xs text-dim">Busy</div>
                    </div>
                    <div className="bg-signal/10 p-3 rounded-lg text-center">
                      <ArrowRight className="w-5 h-5 text-signal mx-auto mb-1" />
                      <span className="text-xs font-medium">Billing Agent</span>
                      <div className="text-xs text-dim">Available</div>
                    </div>
                  </div>
                  
                  <div className="bg-surface-2 p-3 rounded-lg border border-signal/30">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-signal mr-2" />
                      <span className="text-sm font-medium text-signal">Connected to Best Agent</span>
                    </div>
                    <div className="text-xs text-dim mt-1">Routing completed in 0.8 seconds</div>
                  </div>
                </div>
              </div>
              
              {/* Floating animations */}
              <div className="pointer-events-none">
                <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-signal/20 blur-xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-signal/20 blur-2xl animate-pulse" />
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
              Contact Center Use Cases
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how businesses are transforming their contact centers with AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-surface-2 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Call Routing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Intelligently route calls to the appropriate department or agent based on customer needs and agent skills.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">IVR Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Replace traditional IVR systems with intelligent AI agents that understand natural language.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Agent Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Provide real-time coaching and suggestions to agents during calls to improve performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Call Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Monitor call quality, compliance, and performance with AI-powered analytics and insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-red-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Compliance Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Ensure regulatory compliance with automated monitoring and reporting capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Multi-Language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Serve customers in their native language with AI agents that understand and respond fluently.
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
            Ready to Transform Your Contact Center?
          </h2>
          <p className="text-xl text-bone/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join leading companies that have already deployed AI contact center agents
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
