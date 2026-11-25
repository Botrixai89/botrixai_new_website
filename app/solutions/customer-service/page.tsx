"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Clock, CheckCircle, Star, Headphones, Zap, Shield, TrendingUp, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CustomerServicePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Customer Service
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              24/7 Intelligent Customer Support
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your customer service with AI agents that provide instant, accurate, and personalized support across all channels. Reduce response times and increase customer satisfaction.
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

      {/* Live Demo Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
                See AI Customer Service in Action
              </h2>
              <p className="text-xl text-dim mb-8 leading-relaxed">
                Watch how our AI agents handle customer inquiries with intelligence, empathy, and efficiency. Real conversations, real solutions.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-semibold text-signal mb-1">24/7</div>
                  <div className="text-sm text-dim">Always Available</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-semibold text-signal mb-1">85%</div>
                  <div className="text-sm text-dim">Issues Resolved</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-semibold text-signal mb-1">2s</div>
                  <div className="text-sm text-dim">Response Time</div>
                </div>
              </div>
            </div>

            {/* Right Visual Demo */}
            <div className="relative">
              <div className="bg-surface-1 rounded-2xl light-edge p-6 border border-hairline">
                <div className="flex items-center mb-4 bg-signal text-ink p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Customer Support AI</span>
                  <div className="ml-auto flex items-center">
                    <div className="w-2 h-2 bg-signal/20 rounded-full animate-pulse"></div>
                    <span className="ml-2 text-sm">Online</span>
                  </div>
                </div>
                
                <div className="space-y-4 h-80 overflow-y-auto">
                  <div className="bg-surface-2 p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">Hello! How can I assist you today?</p>
                    <span className="text-xs text-dim">Just now</span>
                  </div>
                  <div className="bg-surface-2 text-bone p-3 rounded-lg rounded-br-none ml-8">
                    <p className="text-sm">I'm having trouble with my recent order</p>
                    <span className="text-xs text-bone/75">Just now</span>
                  </div>
                  <div className="bg-surface-2 p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">I'd be happy to help! Let me look up your order details. Can you provide your order number?</p>
                    <span className="text-xs text-dim">Just now</span>
                  </div>
                  <div className="bg-surface-2 text-bone p-3 rounded-lg rounded-br-none ml-8">
                    <p className="text-sm">#ORD-12345</p>
                    <span className="text-xs text-bone/75">Just now</span>
                  </div>
                  <div className="bg-surface-2 p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">Found it! Your order was shipped yesterday and should arrive tomorrow. Here's your tracking link:</p>
                    <div className="mt-2">
                      <button className="bg-signal text-ink px-3 py-1 rounded text-xs hover:bg-signal">
                        Track Package
                      </button>
                    </div>
                    <span className="text-xs text-dim">Just now</span>
                  </div>
                  <div className="bg-surface-2 text-bone p-3 rounded-lg rounded-br-none ml-8">
                    <p className="text-sm">Perfect! Thank you so much 😊</p>
                    <span className="text-xs text-bone/75">Just now</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-hairline">
                  <div className="flex items-center text-sm text-dim">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Resolved in 2 minutes</span>
                    <div className="ml-auto flex items-center">
                      <Star className="w-4 h-4 text-signal mr-1" />
                      <span>5.0 rating</span>
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
              Why Choose AI Customer Service Agents?
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Intelligent automation that enhances your customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-surface-2 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Provide instant support to customers anytime, anywhere with AI agents that never sleep or take breaks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Instant Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Reduce response times from hours to seconds with AI agents that provide immediate, accurate answers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Personalized Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Deliver tailored experiences based on customer history, preferences, and previous interactions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Consistent Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Maintain high service standards with AI agents that follow your brand guidelines and best practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Scalable Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Handle unlimited customer inquiries simultaneously without adding more human agents.
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
                  Serve customers in their preferred language with AI agents that speak 50+ languages fluently.
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
              Transform Your Customer Service
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how AI agents can revolutionize your customer support operations
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Response Time</h4>
                    <p className="text-dim">Cut average response times from 2 hours to under 30 seconds with instant AI support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Increase Satisfaction</h4>
                    <p className="text-dim">Improve customer satisfaction scores by 40% with faster, more accurate responses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Lower Costs</h4>
                    <p className="text-dim">Reduce customer service costs by up to 60% while improving service quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Handle Peak Loads</h4>
                    <p className="text-dim">Scale instantly during high-traffic periods without hiring additional staff.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-surface-1 p-8 rounded-2xl light-edge overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-1 via-surface-1 to-surface-1" />
              <div className="relative z-10">
                <h4 className="text-2xl text-bone mb-4 font-medium tracking-[-0.01em]">Multi-Channel Support</h4>
                <p className="text-dim mb-6">AI agents seamlessly handle customer inquiries across all communication channels.</p>
                
                {/* Interactive Channel Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-1/80 backdrop-blur p-4 rounded-lg border border-hairline transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <MessageCircle className="w-5 h-5 text-signal mr-2" />
                      <span className="font-medium text-sm">Live Chat</span>
                    </div>
                    <div className="text-xs text-dim">187 active conversations</div>
                    <div className="w-full bg-hairline rounded-full h-1.5 mt-2">
                      <div className="bg-surface-2 h-1.5 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-surface-1/80 backdrop-blur p-4 rounded-lg border border-hairline transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Globe className="w-5 h-5 text-signal mr-2" />
                      <span className="font-medium text-sm">Email</span>
                    </div>
                    <div className="text-xs text-dim">42 pending responses</div>
                    <div className="w-full bg-hairline rounded-full h-1.5 mt-2">
                      <div className="bg-signal h-1.5 rounded-full w-2/3"></div>
                    </div>
                  </div>
                  
                  <div className="bg-surface-1/80 backdrop-blur p-4 rounded-lg border border-hairline transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-signal mr-2" />
                      <span className="font-medium text-sm">Social Media</span>
                    </div>
                    <div className="text-xs text-dim">23 mentions handled</div>
                    <div className="w-full bg-hairline rounded-full h-1.5 mt-2">
                      <div className="bg-surface-2 h-1.5 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  
                  <div className="bg-surface-1/80 backdrop-blur p-4 rounded-lg border border-hairline transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Headphones className="w-5 h-5 text-signal mr-2" />
                      <span className="font-medium text-sm">Phone</span>
                    </div>
                    <div className="text-xs text-dim">15 calls in queue</div>
                    <div className="w-full bg-hairline rounded-full h-1.5 mt-2">
                      <div className="bg-surface-2 h-1.5 rounded-full w-1/2"></div>
                    </div>
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
              Customer Service Use Cases
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how businesses are transforming their customer service with AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-surface-2 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">FAQ Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Automate responses to common questions and reduce repetitive inquiries handled by human agents.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Order Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Help customers track orders, process returns, and resolve shipping issues with intelligent assistance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Account Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Assist customers with account updates, password resets, and profile management tasks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Appointment Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Automate appointment scheduling, rescheduling, and cancellation processes for service businesses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-red-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Provide step-by-step troubleshooting guides and technical assistance for product issues.
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
                  Serve international customers with AI agents that speak their native language fluently.
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
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl text-bone/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses that have already deployed AI customer service agents
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
