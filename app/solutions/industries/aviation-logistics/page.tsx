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
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Plane className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agents for Aviation & Logistics
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Streamline Operations with Intelligent Automation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your aviation and logistics operations with AI agents that handle customer inquiries, track shipments, manage bookings, and provide real-time updates. Enhance efficiency and customer satisfaction across your entire supply chain.
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
              Aviation & Logistics AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI agents designed for the complex needs of aviation and logistics industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Package className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Shipment Tracking</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide real-time shipment updates, delivery estimates, and handle tracking inquiries automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Plane className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Flight Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle flight bookings, cancellations, rebooking, and provide flight status updates to passengers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Customer Support</CardTitle>
                <CardDescription className="text-gray-600">
                  24/7 customer service for shipping inquiries, claims processing, and general support requests
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <MapPin className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Route Optimization</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide route information, delivery windows, and coordinate with customers for optimal delivery times
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Compliance Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle customs documentation, regulatory inquiries, and ensure compliance with international shipping laws
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Clock className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Emergency Response</CardTitle>
                <CardDescription className="text-gray-600">
                  Immediate assistance for urgent shipments, flight disruptions, and emergency logistics coordination
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
              Optimize Your Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI agents can revolutionize your aviation and logistics operations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Logistics Tracking Flow */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Smart Logistics & Aviation AI System
              </h3>
              
              <div className="relative">
                {/* Main Flow */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                  {/* Package/Flight Origin */}
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Plane className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Origin</h4>
                    <p className="text-xs opacity-90">Package/Flight Dispatch</p>
                  </div>
                  
                  {/* Transit Hub 1 */}
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Building className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Hub 1</h4>
                    <p className="text-xs opacity-90">Processing Center</p>
                  </div>
                  
                  {/* Transit Hub 2 */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Truck className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Transit</h4>
                    <p className="text-xs opacity-90">En Route</p>
                  </div>
                  
                  {/* Final Hub */}
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Local Hub</h4>
                    <p className="text-xs opacity-90">Final Sort</p>
                  </div>
                  
                  {/* Destination */}
                  <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl p-4 text-white text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Delivered</h4>
                    <p className="text-xs opacity-90">Customer Received</p>
                  </div>
                </div>
                
                {/* AI Monitoring Dashboard */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">🤖 AI Monitoring & Customer Communication</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Real-time Tracking */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-900">Real-time Updates</span>
                      </div>
                      <p className="text-xs text-gray-600">Automatic location tracking and status updates sent to customers</p>
                    </div>
                    
                    {/* Proactive Alerts */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-900">Proactive Alerts</span>
                      </div>
                      <p className="text-xs text-gray-600">Delay notifications and delivery window updates</p>
                    </div>
                    
                    {/* Instant Support */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-900">Instant Support</span>
                      </div>
                      <p className="text-xs text-gray-600">24/7 customer queries about shipments and flights</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">99.2%</div>
                  <div className="text-sm text-gray-600">Tracking Accuracy</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">75%</div>
                  <div className="text-sm text-gray-600">Reduced Inquiries</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">60%</div>
                  <div className="text-sm text-gray-600">Faster Resolution</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">92%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Customer Inquiries</h4>
                    <p className="text-gray-600">Handle 80% of common shipping and flight inquiries automatically, reducing call center volume and improving response times.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Improve Delivery Experience</h4>
                    <p className="text-gray-600">Proactive updates, delivery coordination, and instant tracking information enhance customer satisfaction and reduce failed deliveries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Streamline Operations</h4>
                    <p className="text-gray-600">Automate routine tasks, optimize resource allocation, and improve operational efficiency across your logistics network.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Scale Without Limits</h4>
                    <p className="text-gray-600">Handle increasing shipment volumes and customer inquiries without proportional increases in support staff.</p>
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world solutions transforming aviation and logistics operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Airlines & Airports</h3>
                <p className="text-gray-600">
                  Handle flight bookings, gate changes, baggage inquiries, loyalty program questions, and provide real-time flight status updates to passengers.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shipping & Freight</h3>
                <p className="text-gray-600">
                  Automate shipment tracking, delivery notifications, customs clearance updates, and handle customer inquiries about shipping status and costs.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Warehouse Management</h3>
                <p className="text-gray-600">
                  Coordinate inventory inquiries, order processing, pick-up scheduling, and provide real-time warehouse capacity and processing updates.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Last-Mile Delivery</h3>
                <p className="text-gray-600">
                  Manage delivery scheduling, route optimization, customer notifications, and handle delivery exceptions and rescheduling requests.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Supply Chain Visibility</h3>
                <p className="text-gray-600">
                  Provide end-to-end supply chain tracking, vendor coordination, inventory management, and proactive issue resolution.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">International Trade</h3>
                <p className="text-gray-600">
                  Handle customs documentation, trade compliance, international shipping regulations, and cross-border logistics coordination.
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
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join leading aviation and logistics companies using AI to enhance efficiency and customer satisfaction.
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
