"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, Wrench, Package, Factory, Truck, Cog, MapPin, AlertTriangle, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function ManufacturingPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Factory className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Manufacturing
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Smart Manufacturing with Intelligent Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your manufacturing operations with AI agents that handle supplier communications, quality control inquiries, equipment maintenance, and production scheduling. Optimize efficiency and reduce downtime across your entire manufacturing process.
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
              Manufacturing AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Industrial-grade AI agents designed for the complex needs of modern manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Settings className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Equipment Maintenance</CardTitle>
                <CardDescription className="text-dim">
                  Automate maintenance scheduling, equipment status updates, and coordinate repairs with service teams
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Package className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Supply Chain Management</CardTitle>
                <CardDescription className="text-dim">
                  Handle supplier communications, inventory tracking, and procurement inquiries automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Quality Control</CardTitle>
                <CardDescription className="text-dim">
                  Manage quality inspections, compliance reporting, and coordinate corrective actions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Production Planning</CardTitle>
                <CardDescription className="text-dim">
                  Optimize production schedules, resource allocation, and coordinate between departments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Workforce Management</CardTitle>
                <CardDescription className="text-dim">
                  Handle shift scheduling, training coordination, and safety compliance communications
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Wrench className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Technical Support</CardTitle>
                <CardDescription className="text-dim">
                  Provide 24/7 technical assistance, troubleshooting guides, and equipment documentation
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
              Optimize Manufacturing Operations
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can revolutionize your manufacturing efficiency and productivity
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Manufacturing Process Flow */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                AI-Powered Manufacturing Operations
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {/* Order Management */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Order Processing</h4>
                  <p className="text-xs opacity-90">Automated order intake & scheduling</p>
                </div>
                
                {/* Supply Chain */}
                <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Supply Chain</h4>
                  <p className="text-xs opacity-90">Inventory & supplier coordination</p>
                </div>
                
                {/* Production */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cog className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Production</h4>
                  <p className="text-xs opacity-90">Real-time process monitoring</p>
                </div>
                
                {/* Quality Control */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Quality Control</h4>
                  <p className="text-xs opacity-90">Automated inspection & testing</p>
                </div>
                
                {/* Delivery */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Delivery</h4>
                  <p className="text-xs opacity-90">Shipment & customer updates</p>
                </div>
              </div>
              
              {/* AI Manufacturing Dashboard */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Real-time Monitoring */}
                <div className="bg-gradient-to-r from-surface-1 to-surface-1 rounded-xl p-6">
                  <h4 className="text-lg text-bone mb-4 font-medium tracking-[-0.01em]">🤖 AI Monitoring Dashboard</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-surface-2 rounded-lg border">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-signal rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium">Production Line A</span>
                      </div>
                      <span className="text-sm text-signal font-medium">98% Efficiency</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-surface-2 rounded-lg border">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium">Quality Check Station</span>
                      </div>
                      <span className="text-sm text-signal font-medium">Maintenance Due</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-surface-2 rounded-lg border">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium">Inventory Levels</span>
                      </div>
                      <span className="text-sm text-signal font-medium">Optimal</span>
                    </div>
                  </div>
                </div>
                
                {/* Right: AI Capabilities */}
                <div>
                  <h4 className="text-lg text-bone mb-4 font-medium tracking-[-0.01em]">AI Capabilities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-surface-2 to-surface-1 p-3 rounded-lg text-bone text-center">
                      <AlertTriangle className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">Predictive Maintenance</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] p-3 rounded-lg text-bone text-center">
                      <BarChart3 className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">Demand Forecasting</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-surface-2 to-surface-1 p-3 rounded-lg text-bone text-center">
                      <Zap className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">Process Optimization</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-surface-2 to-surface-1 p-3 rounded-lg text-bone text-center">
                      <Users className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">Customer Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">35%</div>
                  <div className="text-sm text-dim">Production Increase</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">67%</div>
                  <div className="text-sm text-dim">Reduced Downtime</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">85%</div>
                  <div className="text-sm text-dim">Quality Improvement</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">42%</div>
                  <div className="text-sm text-dim">Cost Savings</div>
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Equipment Downtime</h4>
                    <p className="text-dim">Predictive maintenance alerts and automated scheduling reduce unplanned downtime by up to 40%, keeping production lines running smoothly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Improve Supply Chain Efficiency</h4>
                    <p className="text-dim">Automated supplier communications and inventory tracking optimize procurement processes and reduce material shortages.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Enhance Quality Control</h4>
                    <p className="text-dim">Consistent quality monitoring and automated reporting ensure compliance and reduce defect rates across production.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Increase Operational Efficiency</h4>
                    <p className="text-dim">Streamlined communications and automated processes reduce administrative overhead and improve overall productivity.</p>
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
              Manufacturing Applications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive solutions for all areas of manufacturing and industrial operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Automotive Manufacturing</h3>
                <p className="text-dim">
                  Handle production line coordination, parts tracking, quality inspections, and supplier communications for automotive assembly operations.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Electronics & Technology</h3>
                <p className="text-dim">
                  Manage component sourcing, assembly line optimization, testing protocols, and technical documentation for electronics manufacturing.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Food & Beverage Processing</h3>
                <p className="text-dim">
                  Coordinate production schedules, quality control, safety compliance, and supply chain management for food processing operations.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Chemical & Pharmaceutical</h3>
                <p className="text-dim">
                  Handle batch tracking, regulatory compliance, safety protocols, and quality assurance for chemical and pharmaceutical manufacturing.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Heavy Machinery & Equipment</h3>
                <p className="text-dim">
                  Manage complex assembly processes, custom order tracking, technical specifications, and customer communications.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Textile & Apparel</h3>
                <p className="text-dim">
                  Coordinate seasonal production, inventory management, quality control, and order fulfillment for textile manufacturing.
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
            Ready to Modernize Your Manufacturing?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join leading manufacturers using AI to optimize operations and increase productivity.
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

