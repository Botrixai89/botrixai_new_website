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
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Factory className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agents for Manufacturing
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Smart Manufacturing with Intelligent Automation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your manufacturing operations with AI agents that handle supplier communications, quality control inquiries, equipment maintenance, and production scheduling. Optimize efficiency and reduce downtime across your entire manufacturing process.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Manufacturing AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industrial-grade AI agents designed for the complex needs of modern manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Settings className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Equipment Maintenance</CardTitle>
                <CardDescription className="text-gray-600">
                  Automate maintenance scheduling, equipment status updates, and coordinate repairs with service teams
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Package className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Supply Chain Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle supplier communications, inventory tracking, and procurement inquiries automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Quality Control</CardTitle>
                <CardDescription className="text-gray-600">
                  Manage quality inspections, compliance reporting, and coordinate corrective actions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Production Planning</CardTitle>
                <CardDescription className="text-gray-600">
                  Optimize production schedules, resource allocation, and coordinate between departments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Workforce Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle shift scheduling, training coordination, and safety compliance communications
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Wrench className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Technical Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide 24/7 technical assistance, troubleshooting guides, and equipment documentation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Optimize Manufacturing Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI agents can revolutionize your manufacturing efficiency and productivity
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Manufacturing Process Flow */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                AI-Powered Manufacturing Operations
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {/* Order Management */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Order Processing</h4>
                  <p className="text-xs opacity-90">Automated order intake & scheduling</p>
                </div>
                
                {/* Supply Chain */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Supply Chain</h4>
                  <p className="text-xs opacity-90">Inventory & supplier coordination</p>
                </div>
                
                {/* Production */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cog className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Production</h4>
                  <p className="text-xs opacity-90">Real-time process monitoring</p>
                </div>
                
                {/* Quality Control */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Quality Control</h4>
                  <p className="text-xs opacity-90">Automated inspection & testing</p>
                </div>
                
                {/* Delivery */}
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Delivery</h4>
                  <p className="text-xs opacity-90">Shipment & customer updates</p>
                </div>
              </div>
              
              {/* AI Manufacturing Dashboard */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Real-time Monitoring */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">🤖 AI Monitoring Dashboard</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium">Production Line A</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">98% Efficiency</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium">Quality Check Station</span>
                      </div>
                      <span className="text-sm text-yellow-600 font-medium">Maintenance Due</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium">Inventory Levels</span>
                      </div>
                      <span className="text-sm text-blue-600 font-medium">Optimal</span>
                    </div>
                  </div>
                </div>
                
                {/* Right: AI Capabilities */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Capabilities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white text-center">
                      <AlertTriangle className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">Predictive Maintenance</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg text-white text-center">
                      <BarChart3 className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">Demand Forecasting</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg text-white text-center">
                      <Zap className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">Process Optimization</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg text-white text-center">
                      <Users className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">Customer Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">35%</div>
                  <div className="text-sm text-gray-600">Production Increase</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">67%</div>
                  <div className="text-sm text-gray-600">Reduced Downtime</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-gray-600">Quality Improvement</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">42%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Key Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Equipment Downtime</h4>
                    <p className="text-gray-600">Predictive maintenance alerts and automated scheduling reduce unplanned downtime by up to 40%, keeping production lines running smoothly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Improve Supply Chain Efficiency</h4>
                    <p className="text-gray-600">Automated supplier communications and inventory tracking optimize procurement processes and reduce material shortages.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhance Quality Control</h4>
                    <p className="text-gray-600">Consistent quality monitoring and automated reporting ensure compliance and reduce defect rates across production.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Increase Operational Efficiency</h4>
                    <p className="text-gray-600">Streamlined communications and automated processes reduce administrative overhead and improve overall productivity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Manufacturing Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all areas of manufacturing and industrial operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automotive Manufacturing</h3>
                <p className="text-gray-600">
                  Handle production line coordination, parts tracking, quality inspections, and supplier communications for automotive assembly operations.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electronics & Technology</h3>
                <p className="text-gray-600">
                  Manage component sourcing, assembly line optimization, testing protocols, and technical documentation for electronics manufacturing.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Food & Beverage Processing</h3>
                <p className="text-gray-600">
                  Coordinate production schedules, quality control, safety compliance, and supply chain management for food processing operations.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chemical & Pharmaceutical</h3>
                <p className="text-gray-600">
                  Handle batch tracking, regulatory compliance, safety protocols, and quality assurance for chemical and pharmaceutical manufacturing.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Machinery & Equipment</h3>
                <p className="text-gray-600">
                  Manage complex assembly processes, custom order tracking, technical specifications, and customer communications.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Textile & Apparel</h3>
                <p className="text-gray-600">
                  Coordinate seasonal production, inventory management, quality control, and order fulfillment for textile manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00D563] to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Manufacturing?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join leading manufacturers using AI to optimize operations and increase productivity.
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
      </section>

      <Footer />
    </>
  )
}

