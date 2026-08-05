"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Users, Clock, CheckCircle, Star, Phone, Settings, Shield, TrendingUp, Globe, ArrowRight, AlertTriangle, FileText, Wrench, CreditCard } from "lucide-react"
import Image from "next/image"

export default function UtilitiesPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agents for Public Services & Utilities
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Smart Public Service Automation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform public services and utilities with AI agents that handle citizen inquiries, service requests, billing support, and emergency responses. Improve service delivery while reducing operational costs across all public service departments.
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
              Public Services AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI agents designed for the unique needs of public services and utilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Citizen Services</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle citizen inquiries, service requests, permit applications, and provide information about public services
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Zap className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Utility Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Manage electricity, water, gas, and waste services including billing, outages, and service connections
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Emergency Response</CardTitle>
                <CardDescription className="text-gray-600">
                  Coordinate emergency services, disaster response, and provide critical information during emergencies
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Permit & Licensing</CardTitle>
                <CardDescription className="text-gray-600">
                  Process permit applications, licensing requests, and guide citizens through regulatory requirements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Wrench className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Infrastructure Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle infrastructure maintenance requests, road repairs, and coordinate public works projects
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Compliance & Reporting</CardTitle>
                <CardDescription className="text-gray-600">
                  Ensure regulatory compliance, manage public records, and handle information requests
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
              Enhance Public Service Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI agents can improve citizen satisfaction and operational efficiency
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Utilities Management System */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                AI-Powered Public Services & Utilities Management
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {/* Service Requests */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Service Requests</h4>
                    <p className="text-sm opacity-90">Automated intake and routing of citizen inquiries</p>
                  </div>
                </div>

                {/* Outage Management */}
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Outage Reports</h4>
                    <p className="text-sm opacity-90">Real-time outage tracking and status updates</p>
                  </div>
                </div>

                {/* Billing Support */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Billing Support</h4>
                    <p className="text-sm opacity-90">Account management and payment assistance</p>
                  </div>
                </div>

                {/* Emergency Response */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Emergency Response</h4>
                    <p className="text-sm opacity-90">Crisis communication and resource coordination</p>
                  </div>
                </div>
              </div>
              
              {/* AI Public Services Dashboard */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">🏛️ Smart City AI Services</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900">Multi-Language Support</span>
                    </div>
                    <p className="text-xs text-gray-600">Serve diverse communities in their preferred language</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900">Resource Optimization</span>
                    </div>
                    <p className="text-xs text-gray-600">Efficient allocation of public resources and staff</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900">Compliance Tracking</span>
                    </div>
                    <p className="text-xs text-gray-600">Automated compliance monitoring and reporting</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">73%</div>
                  <div className="text-sm text-gray-600">Faster Response Time</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">58%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">91%</div>
                  <div className="text-sm text-gray-600">Citizen Satisfaction</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Service Availability</div>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Improve Citizen Satisfaction</h4>
                    <p className="text-gray-600">Provide 24/7 access to public services and instant responses to citizen inquiries, improving overall satisfaction with government services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Administrative Costs</h4>
                    <p className="text-gray-600">Automate routine inquiries and processes, allowing staff to focus on complex cases and reducing operational expenses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhance Emergency Response</h4>
                    <p className="text-gray-600">Faster emergency coordination and information dissemination improve public safety and disaster response capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Increase Service Accessibility</h4>
                    <p className="text-gray-600">Make public services more accessible to all citizens, including those with disabilities or language barriers.</p>
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
              Public Service Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all areas of public administration and utilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Municipal Government</h3>
                <p className="text-gray-600">
                  Handle city services, permit applications, tax inquiries, public works requests, and community information services.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electric Utilities</h3>
                <p className="text-gray-600">
                  Manage power outage reports, billing inquiries, service connections, energy efficiency programs, and grid maintenance updates.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Water & Wastewater</h3>
                <p className="text-gray-600">
                  Handle water quality reports, service disruptions, billing support, conservation programs, and infrastructure maintenance.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation Services</h3>
                <p className="text-gray-600">
                  Coordinate public transit information, road maintenance, traffic updates, and transportation planning initiatives.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Services</h3>
                <p className="text-gray-600">
                  Support benefit applications, eligibility checks, program information, and connect citizens with appropriate resources.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Services</h3>
                <p className="text-gray-600">
                  Manage waste collection schedules, recycling programs, environmental permits, and pollution reporting systems.
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
            Ready to Modernize Public Services?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join forward-thinking public organizations using AI to improve citizen services and operational efficiency.
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

