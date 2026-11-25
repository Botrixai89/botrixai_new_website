"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Truck, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, Package, MapPin, Users, Building } from "lucide-react"
import Image from "next/image"

export default function AviationLogisticsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Plane className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Aviation & Logistics
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Streamline Operations with Intelligent Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your aviation and logistics operations with AI agents that handle customer inquiries, track shipments, manage bookings, and provide real-time updates. Enhance efficiency and customer satisfaction across your entire supply chain.
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
              Aviation & Logistics AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Specialized AI agents designed for the complex needs of aviation and logistics industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Package className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Shipment Tracking</CardTitle>
                <CardDescription className="text-dim">
                  Provide real-time shipment updates, delivery estimates, and handle tracking inquiries automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Plane className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Flight Management</CardTitle>
                <CardDescription className="text-dim">
                  Handle flight bookings, cancellations, rebooking, and provide flight status updates to passengers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Customer Support</CardTitle>
                <CardDescription className="text-dim">
                  24/7 customer service for shipping inquiries, claims processing, and general support requests
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <MapPin className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Route Optimization</CardTitle>
                <CardDescription className="text-dim">
                  Provide route information, delivery windows, and coordinate with customers for optimal delivery times
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Compliance Support</CardTitle>
                <CardDescription className="text-dim">
                  Handle customs documentation, regulatory inquiries, and ensure compliance with international shipping laws
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Clock className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Emergency Response</CardTitle>
                <CardDescription className="text-dim">
                  Immediate assistance for urgent shipments, flight disruptions, and emergency logistics coordination
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
              Optimize Your Operations
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can revolutionize your aviation and logistics operations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Logistics Tracking Flow */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                Smart Logistics & Aviation AI System
              </h3>
              
              <div className="relative">
                {/* Main Flow */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                  {/* Package/Flight Origin */}
                  <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                    <div className="w-8 h-8 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-2">
                      <Plane className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Origin</h4>
                    <p className="text-xs opacity-90">Package/Flight Dispatch</p>
                  </div>
                  
                  {/* Transit Hub 1 */}
                  <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                    <div className="w-8 h-8 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-2">
                      <Building className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Hub 1</h4>
                    <p className="text-xs opacity-90">Processing Center</p>
                  </div>
                  
                  {/* Transit Hub 2 */}
                  <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                    <div className="w-8 h-8 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-2">
                      <Truck className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Transit</h4>
                    <p className="text-xs opacity-90">En Route</p>
                  </div>
                  
                  {/* Final Hub */}
                  <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl p-4 text-bone text-center">
                    <div className="w-8 h-8 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Local Hub</h4>
                    <p className="text-xs opacity-90">Final Sort</p>
                  </div>
                  
                  {/* Destination */}
                  <div className="bg-gradient-to-br from-surface-1 to-surface-1 rounded-xl p-4 text-bone text-center">
                    <div className="w-8 h-8 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Delivered</h4>
                    <p className="text-xs opacity-90">Customer Received</p>
                  </div>
                </div>
                
                {/* AI Monitoring Dashboard */}
                <div className="bg-gradient-to-r from-surface-1 to-surface-1 rounded-xl p-6 border border-hairline">
                  <h4 className="text-lg text-bone mb-4 text-center font-medium tracking-[-0.01em]">🤖 AI Monitoring & Customer Communication</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Real-time Tracking */}
                    <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-signal rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-bone">Real-time Updates</span>
                      </div>
                      <p className="text-xs text-dim">Automatic location tracking and status updates sent to customers</p>
                    </div>
                    
                    {/* Proactive Alerts */}
                    <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-bone">Proactive Alerts</span>
                      </div>
                      <p className="text-xs text-dim">Delay notifications and delivery window updates</p>
                    </div>
                    
                    {/* Instant Support */}
                    <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-bone">Instant Support</span>
                      </div>
                      <p className="text-xs text-dim">24/7 customer queries about shipments and flights</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">99.2%</div>
                  <div className="text-sm text-dim">Tracking Accuracy</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">75%</div>
                  <div className="text-sm text-dim">Reduced Inquiries</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">60%</div>
                  <div className="text-sm text-dim">Faster Resolution</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">92%</div>
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Customer Inquiries</h4>
                    <p className="text-dim">Handle 80% of common shipping and flight inquiries automatically, reducing call center volume and improving response times.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Improve Delivery Experience</h4>
                    <p className="text-dim">Proactive updates, delivery coordination, and instant tracking information enhance customer satisfaction and reduce failed deliveries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Streamline Operations</h4>
                    <p className="text-dim">Automate routine tasks, optimize resource allocation, and improve operational efficiency across your logistics network.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Scale Without Limits</h4>
                    <p className="text-dim">Handle increasing shipment volumes and customer inquiries without proportional increases in support staff.</p>
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
              Industry Applications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Real-world solutions transforming aviation and logistics operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Airlines & Airports</h3>
                <p className="text-dim">
                  Handle flight bookings, gate changes, baggage inquiries, loyalty program questions, and provide real-time flight status updates to passengers.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Shipping & Freight</h3>
                <p className="text-dim">
                  Automate shipment tracking, delivery notifications, customs clearance updates, and handle customer inquiries about shipping status and costs.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Warehouse Management</h3>
                <p className="text-dim">
                  Coordinate inventory inquiries, order processing, pick-up scheduling, and provide real-time warehouse capacity and processing updates.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Last-Mile Delivery</h3>
                <p className="text-dim">
                  Manage delivery scheduling, route optimization, customer notifications, and handle delivery exceptions and rescheduling requests.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Supply Chain Visibility</h3>
                <p className="text-dim">
                  Provide end-to-end supply chain tracking, vendor coordination, inventory management, and proactive issue resolution.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">International Trade</h3>
                <p className="text-dim">
                  Handle customs documentation, trade compliance, international shipping regulations, and cross-border logistics coordination.
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
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join leading aviation and logistics companies using AI to enhance efficiency and customer satisfaction.
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
