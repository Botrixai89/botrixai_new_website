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
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Public Services & Utilities
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Smart Public Service Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform public services and utilities with AI agents that handle citizen inquiries, service requests, billing support, and emergency responses. Improve service delivery while reducing operational costs across all public service departments.
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
              Public Services AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive AI agents designed for the unique needs of public services and utilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Citizen Services</CardTitle>
                <CardDescription className="text-dim">
                  Handle citizen inquiries, service requests, permit applications, and provide information about public services
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Utility Management</CardTitle>
                <CardDescription className="text-dim">
                  Manage electricity, water, gas, and waste services including billing, outages, and service connections
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Emergency Response</CardTitle>
                <CardDescription className="text-dim">
                  Coordinate emergency services, disaster response, and provide critical information during emergencies
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <FileText className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Permit & Licensing</CardTitle>
                <CardDescription className="text-dim">
                  Process permit applications, licensing requests, and guide citizens through regulatory requirements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Wrench className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Infrastructure Support</CardTitle>
                <CardDescription className="text-dim">
                  Handle infrastructure maintenance requests, road repairs, and coordinate public works projects
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Compliance & Reporting</CardTitle>
                <CardDescription className="text-dim">
                  Ensure regulatory compliance, manage public records, and handle information requests
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
              Enhance Public Service Delivery
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can improve citizen satisfaction and operational efficiency
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Utilities Management System */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                AI-Powered Public Services & Utilities Management
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {/* Service Requests */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Service Requests</h4>
                    <p className="text-sm opacity-90">Automated intake and routing of citizen inquiries</p>
                  </div>
                </div>

                {/* Outage Management */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Outage Reports</h4>
                    <p className="text-sm opacity-90">Real-time outage tracking and status updates</p>
                  </div>
                </div>

                {/* Billing Support */}
                <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Billing Support</h4>
                    <p className="text-sm opacity-90">Account management and payment assistance</p>
                  </div>
                </div>

                {/* Emergency Response */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Emergency Response</h4>
                    <p className="text-sm opacity-90">Crisis communication and resource coordination</p>
                  </div>
                </div>
              </div>
              
              {/* AI Public Services Dashboard */}
              <div className="bg-gradient-to-r from-surface-1 to-surface-1 rounded-xl p-6 border border-hairline">
                <h4 className="text-lg text-bone mb-4 text-center font-medium tracking-[-0.01em]">🏛️ Smart City AI Services</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Multi-Language Support</span>
                    </div>
                    <p className="text-xs text-dim">Serve diverse communities in their preferred language</p>
                  </div>
                  
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-signal rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Resource Optimization</span>
                    </div>
                    <p className="text-xs text-dim">Efficient allocation of public resources and staff</p>
                  </div>
                  
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Compliance Tracking</span>
                    </div>
                    <p className="text-xs text-dim">Automated compliance monitoring and reporting</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">73%</div>
                  <div className="text-sm text-dim">Faster Response Time</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">58%</div>
                  <div className="text-sm text-dim">Cost Reduction</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">91%</div>
                  <div className="text-sm text-dim">Citizen Satisfaction</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">24/7</div>
                  <div className="text-sm text-dim">Service Availability</div>
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Improve Citizen Satisfaction</h4>
                    <p className="text-dim">Provide 24/7 access to public services and instant responses to citizen inquiries, improving overall satisfaction with government services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Administrative Costs</h4>
                    <p className="text-dim">Automate routine inquiries and processes, allowing staff to focus on complex cases and reducing operational expenses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Enhance Emergency Response</h4>
                    <p className="text-dim">Faster emergency coordination and information dissemination improve public safety and disaster response capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Increase Service Accessibility</h4>
                    <p className="text-dim">Make public services more accessible to all citizens, including those with disabilities or language barriers.</p>
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
              Public Service Applications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive solutions for all areas of public administration and utilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Municipal Government</h3>
                <p className="text-dim">
                  Handle city services, permit applications, tax inquiries, public works requests, and community information services.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Electric Utilities</h3>
                <p className="text-dim">
                  Manage power outage reports, billing inquiries, service connections, energy efficiency programs, and grid maintenance updates.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Water & Wastewater</h3>
                <p className="text-dim">
                  Handle water quality reports, service disruptions, billing support, conservation programs, and infrastructure maintenance.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Transportation Services</h3>
                <p className="text-dim">
                  Coordinate public transit information, road maintenance, traffic updates, and transportation planning initiatives.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Social Services</h3>
                <p className="text-dim">
                  Support benefit applications, eligibility checks, program information, and connect citizens with appropriate resources.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Environmental Services</h3>
                <p className="text-dim">
                  Manage waste collection schedules, recycling programs, environmental permits, and pollution reporting systems.
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
            Ready to Modernize Public Services?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join forward-thinking public organizations using AI to improve citizen services and operational efficiency.
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

