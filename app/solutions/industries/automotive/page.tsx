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
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Car className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agents for Automotive
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Drive Customer Excellence with Intelligent Automation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your automotive business with AI agents that enhance customer service, streamline operations, and boost sales. From dealership inquiries to service appointments, deliver exceptional experiences at every touchpoint.
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
              Automotive-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built AI agents designed for the unique needs of automotive businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Lead Qualification</CardTitle>
                <CardDescription className="text-gray-600">
                  Automatically qualify leads, schedule test drives, and connect prospects with the right sales representative
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Wrench className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Service Scheduling</CardTitle>
                <CardDescription className="text-gray-600">
                  Streamline service appointments, maintenance reminders, and warranty inquiries with intelligent automation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Car className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Vehicle Information</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide instant access to vehicle specifications, pricing, availability, and financing options
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Customer Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle warranty claims, parts inquiries, and general support with 24/7 intelligent assistance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Sales Analytics</CardTitle>
                <CardDescription className="text-gray-600">
                  Track lead conversion, customer satisfaction, and sales performance with detailed insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Clock className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">24/7 Availability</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide round-the-clock support for emergency roadside assistance and urgent inquiries
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
              Transform Your Automotive Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI agents can revolutionize your automotive operations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Automotive Customer Journey */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Automotive Customer Journey with AI
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Step 1: Initial Inquiry */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <h4 className="font-semibold mb-2">Initial Inquiry</h4>
                      <p className="text-sm opacity-90">Customer asks about vehicles, pricing, or features</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gray-300"></div>
                    <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Step 2: AI Analysis */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <h4 className="font-semibold mb-2">AI Analysis</h4>
                      <p className="text-sm opacity-90">AI identifies intent and matches customer needs</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gray-300"></div>
                    <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Step 3: Personalized Response */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <h4 className="font-semibold mb-2">Personalized Response</h4>
                      <p className="text-sm opacity-90">Provides specific vehicle info, pricing, and availability</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gray-300"></div>
                    <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Step 4: Action */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold">4</span>
                      </div>
                      <h4 className="font-semibold mb-2">Take Action</h4>
                      <p className="text-sm opacity-90">Schedule test drive, service appointment, or connect to sales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#00D563]">85%</div>
                  <div className="text-sm text-gray-600">Lead Qualification Rate</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#00D563]">40%</div>
                  <div className="text-sm text-gray-600">Faster Response Time</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#00D563]">95%</div>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Increase Sales Conversion</h4>
                    <p className="text-gray-600">Convert more leads with intelligent qualification and instant responses to customer inquiries about vehicles and financing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Streamline Service Operations</h4>
                    <p className="text-gray-600">Automate appointment scheduling, reduce no-shows, and improve customer satisfaction with proactive service reminders.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhance Customer Experience</h4>
                    <p className="text-gray-600">Provide instant access to vehicle information, pricing, and support, creating a seamless customer journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Operational Costs</h4>
                    <p className="text-gray-600">Lower staffing costs while maintaining high-quality customer service with intelligent automation that works 24/7.</p>
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
              Popular Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications transforming automotive businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dealership Sales Support</h3>
                <p className="text-gray-600">
                  AI agents handle initial customer inquiries, provide vehicle information, schedule test drives, and qualify leads before connecting them with sales representatives.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service Center Management</h3>
                <p className="text-gray-600">
                  Automate service appointment scheduling, send maintenance reminders, handle warranty inquiries, and provide service status updates to customers.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Parts & Accessories</h3>
                <p className="text-gray-600">
                  Help customers find the right parts, check availability, provide pricing information, and process orders through integrated systems.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance & Financing</h3>
                <p className="text-gray-600">
                  Guide customers through financing options, insurance products, and warranty packages with personalized recommendations.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fleet Management</h3>
                <p className="text-gray-600">
                  Support fleet customers with bulk vehicle inquiries, maintenance scheduling, and comprehensive fleet management solutions.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Retention</h3>
                <p className="text-gray-600">
                  Proactively engage customers with service reminders, special offers, and loyalty programs to increase retention and lifetime value.
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
            Ready to Transform Your Automotive Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join leading automotive companies using AI to enhance customer experiences and drive growth.
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
