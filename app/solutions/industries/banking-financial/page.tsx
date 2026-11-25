"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, CreditCard, Building, Lock } from "lucide-react"
import Image from "next/image"

export default function BankingFinancialPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Banknote className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Banking & Financial Services
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Secure, Intelligent Financial Service Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your financial institution with AI agents that handle customer inquiries, process transactions, provide account information, and deliver personalized financial guidance while maintaining the highest security standards.
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
              Financial Services AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Secure, compliant AI agents built specifically for banking and financial institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Account Management</CardTitle>
                <CardDescription className="text-dim">
                  Handle balance inquiries, transaction history, account statements, and basic account maintenance requests
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Lock className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Fraud Prevention</CardTitle>
                <CardDescription className="text-dim">
                  Instantly verify suspicious transactions, guide customers through security protocols, and assist with fraud reporting
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Building className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Loan Processing</CardTitle>
                <CardDescription className="text-dim">
                  Pre-qualify loan applications, provide loan information, and guide customers through the application process
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Investment Guidance</CardTitle>
                <CardDescription className="text-dim">
                  Provide investment product information, portfolio updates, and basic financial planning assistance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Customer Onboarding</CardTitle>
                <CardDescription className="text-dim">
                  Guide new customers through account opening, KYC processes, and initial product setup
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Clock className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">24/7 Banking</CardTitle>
                <CardDescription className="text-dim">
                  Provide round-the-clock banking support for urgent transactions, card blocks, and emergency assistance
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
              Modernize Your Financial Services
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can transform your banking operations while maintaining security and compliance
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Banking AI System */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                AI-Powered Banking & Financial Services
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Customer Interaction Flow */}
                <div>
                  <h4 className="text-lg text-bone mb-4 font-medium tracking-[-0.01em]">Customer Journey</h4>
                  <div className="space-y-4">
                    {/* Customer Inquiry */}
                    <div className="flex items-center space-x-4 p-4 bg-surface-2 rounded-lg border-l-4 border-signal/50">
                      <div className="w-10 h-10 bg-surface-2 rounded-full flex items-center justify-center text-bone font-semibold">1</div>
                      <div>
                        <h5 className="text-bone font-medium tracking-[-0.01em]">Customer Inquiry</h5>
                        <p className="text-sm text-dim">"What's my account balance?" or "I need to transfer money"</p>
                      </div>
                    </div>
                    
                    {/* AI Processing */}
                    <div className="flex items-center space-x-4 p-4 bg-surface-2 rounded-lg border-l-4 border-signal/50">
                      <div className="w-10 h-10 bg-surface-2 rounded-full flex items-center justify-center text-bone font-semibold">2</div>
                      <div>
                        <h5 className="text-bone font-medium tracking-[-0.01em]">AI Security & Authentication</h5>
                        <p className="text-sm text-dim">Secure identity verification and intent analysis</p>
                      </div>
                    </div>
                    
                    {/* Service Delivery */}
                    <div className="flex items-center space-x-4 p-4 bg-surface-2 rounded-lg border-l-4 border-signal/60">
                      <div className="w-10 h-10 bg-signal rounded-full flex items-center justify-center text-ink font-semibold">3</div>
                      <div>
                        <h5 className="text-bone font-medium tracking-[-0.01em]">Instant Service Delivery</h5>
                        <p className="text-sm text-dim">Account info, transfers, loan guidance, or escalation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right: AI Capabilities Dashboard */}
                <div>
                  <h4 className="text-lg text-bone mb-4 font-medium tracking-[-0.01em]">AI Capabilities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-surface-2 to-surface-1 p-4 rounded-xl text-bone text-center">
                      <Lock className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Fraud Detection</div>
                      <div className="text-xs opacity-90 mt-1">Real-time monitoring</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] p-4 rounded-xl text-bone text-center">
                      <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Investment Advice</div>
                      <div className="text-xs opacity-90 mt-1">Portfolio insights</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-surface-2 to-surface-1 p-4 rounded-xl text-bone text-center">
                      <Building className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Loan Processing</div>
                      <div className="text-xs opacity-90 mt-1">Quick pre-approval</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-surface-2 to-surface-1 p-4 rounded-xl text-bone text-center">
                      <Users className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Account Support</div>
                      <div className="text-xs opacity-90 mt-1">24/7 assistance</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Security & Compliance Banner */}
              <div className="mt-8 bg-gradient-to-r from-surface-1 to-surface-1 rounded-xl p-6 text-bone">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Bank-Grade Security</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">GDPR Compliant</div>
                  </div>
                  <div className="text-center">
                    <Lock className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">End-to-End Encryption</div>
                  </div>
                  <div className="text-center">
                    <Building className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Regulatory Approved</div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">90%</div>
                  <div className="text-sm text-dim">Query Resolution</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">3sec</div>
                  <div className="text-sm text-dim">Average Response</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">99.9%</div>
                  <div className="text-sm text-dim">Security Score</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">65%</div>
                  <div className="text-sm text-dim">Cost Reduction</div>
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Enhance Customer Experience</h4>
                    <p className="text-dim">Provide instant, personalized banking services 24/7, reducing wait times and improving customer satisfaction scores.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Operational Costs</h4>
                    <p className="text-dim">Handle 70% of routine inquiries automatically, allowing human agents to focus on complex financial advisory services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Ensure Compliance</h4>
                    <p className="text-dim">Built-in compliance controls ensure all interactions meet regulatory requirements and maintain audit trails.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Strengthen Security</h4>
                    <p className="text-dim">Advanced security protocols protect customer data while enabling seamless authentication and fraud detection.</p>
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
              Banking Applications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive solutions for all areas of banking and financial services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Retail Banking</h3>
                <p className="text-dim">
                  Handle personal banking inquiries, account management, card services, and provide financial guidance to individual customers.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Corporate Banking</h3>
                <p className="text-dim">
                  Manage business account inquiries, cash management services, trade finance, and corporate lending support.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Wealth Management</h3>
                <p className="text-dim">
                  Provide portfolio updates, investment research, market insights, and schedule consultations with financial advisors.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Digital Banking</h3>
                <p className="text-dim">
                  Support mobile and online banking platforms with technical assistance, feature guidance, and transaction support.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Insurance Services</h3>
                <p className="text-dim">
                  Handle insurance inquiries, policy information, claims processing, and cross-sell insurance products to existing customers.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Credit Services</h3>
                <p className="text-dim">
                  Manage credit card applications, credit monitoring services, payment processing, and credit education programs.
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
            Ready to Modernize Your Banking Services?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join forward-thinking financial institutions using AI to enhance customer experiences and operational efficiency.
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
