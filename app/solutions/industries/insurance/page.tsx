"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Clock, CheckCircle, Star, Phone, Zap, FileText, TrendingUp, Globe, ArrowRight, Car, Home, Heart, Brain, Camera, DollarSign } from "lucide-react"
import Image from "next/image"

export default function InsurancePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Insurance
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Intelligent Insurance Service Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your insurance operations with AI agents that handle claims processing, policy inquiries, quote generation, and customer support. Streamline workflows while delivering exceptional service to policyholders.
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
              Insurance AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive AI agents designed for the complex needs of insurance providers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <FileText className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Claims Processing</CardTitle>
                <CardDescription className="text-dim">
                  Automate claims intake, documentation, status updates, and guide customers through the claims process
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Quote Generation</CardTitle>
                <CardDescription className="text-dim">
                  Provide instant quotes for various insurance products and guide prospects through the application process
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Policy Management</CardTitle>
                <CardDescription className="text-dim">
                  Handle policy inquiries, renewals, modifications, and payment processing for existing customers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Car className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Auto Insurance</CardTitle>
                <CardDescription className="text-dim">
                  Specialized support for auto insurance claims, roadside assistance, and vehicle coverage inquiries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Home className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Property Insurance</CardTitle>
                <CardDescription className="text-dim">
                  Handle home and property insurance claims, damage assessments, and coverage verification
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Heart className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Life & Health Insurance</CardTitle>
                <CardDescription className="text-dim">
                  Support life and health insurance inquiries, beneficiary updates, and wellness program enrollment
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
              Streamline Insurance Operations
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can transform your insurance business efficiency and customer satisfaction
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Insurance Claims Processing */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                AI-Powered Insurance Claims Processing
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {/* Claim Submission */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Claim Submission</h4>
                    <p className="text-sm opacity-90">Customer submits claim via chat, phone, or app</p>
                  </div>
                </div>

                {/* AI Assessment */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">AI Assessment</h4>
                    <p className="text-sm opacity-90">Automated claim validation and fraud detection</p>
                  </div>
                </div>

                {/* Documentation */}
                <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Documentation</h4>
                    <p className="text-sm opacity-90">Guided photo uploads and document collection</p>
                  </div>
                </div>

                {/* Settlement */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Settlement</h4>
                    <p className="text-sm opacity-90">Automated approval and payment processing</p>
                  </div>
                </div>
              </div>
              
              {/* AI Insurance Services */}
              <div className="bg-gradient-to-r from-surface-1 to-surface-1 rounded-xl p-6 border border-hairline">
                <h4 className="text-lg text-bone mb-4 text-center font-medium tracking-[-0.01em]">🤖 AI Insurance Services</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Policy Guidance */}
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Policy Guidance</span>
                    </div>
                    <p className="text-xs text-dim">Coverage explanations and policy recommendations</p>
                  </div>
                  
                  {/* Quote Generation */}
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-signal rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Instant Quotes</span>
                    </div>
                    <p className="text-xs text-dim">Real-time premium calculations and comparisons</p>
                  </div>
                  
                  {/* Risk Assessment */}
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Risk Analysis</span>
                    </div>
                    <p className="text-xs text-dim">Automated underwriting and risk evaluation</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">78%</div>
                  <div className="text-sm text-dim">Faster Claims Processing</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">95%</div>
                  <div className="text-sm text-dim">Fraud Detection Rate</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">60%</div>
                  <div className="text-sm text-dim">Cost Reduction</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">89%</div>
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Accelerate Claims Processing</h4>
                    <p className="text-dim">Reduce claims processing time by 60% with automated intake, documentation, and status updates throughout the claims lifecycle.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Improve Customer Satisfaction</h4>
                    <p className="text-dim">Provide instant responses to policy inquiries and claims status, improving customer experience and retention rates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Increase Sales Conversion</h4>
                    <p className="text-dim">Generate instant quotes and guide prospects through applications, increasing conversion rates and reducing sales cycle time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Operational Costs</h4>
                    <p className="text-dim">Lower administrative costs by automating routine tasks and allowing agents to focus on complex cases and sales opportunities.</p>
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
              Insurance Applications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive solutions for all types of insurance providers and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Auto Insurance Providers</h3>
                <p className="text-dim">
                  Handle accident claims, roadside assistance requests, policy modifications, and provide instant quotes for vehicle coverage.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Property & Casualty</h3>
                <p className="text-dim">
                  Manage home insurance claims, property damage assessments, liability inquiries, and weather-related claim surges.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Health Insurance</h3>
                <p className="text-dim">
                  Support coverage inquiries, provider network questions, claims status, and benefits explanation for members.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Life Insurance Companies</h3>
                <p className="text-dim">
                  Handle policy inquiries, beneficiary updates, premium payments, and guide customers through application processes.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Commercial Insurance</h3>
                <p className="text-dim">
                  Manage business insurance policies, workers' compensation claims, liability coverage, and risk assessment inquiries.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Insurance Brokers</h3>
                <p className="text-dim">
                  Support multi-carrier comparisons, policy recommendations, client onboarding, and cross-selling opportunities.
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
            Ready to Modernize Your Insurance Operations?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join leading insurance companies using AI to enhance customer service and operational efficiency.
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
