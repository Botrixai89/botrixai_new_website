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
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Banknote className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agents for Banking & Financial Services
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Secure, Intelligent Financial Service Automation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your financial institution with AI agents that handle customer inquiries, process transactions, provide account information, and deliver personalized financial guidance while maintaining the highest security standards.
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
              Financial Services AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure, compliant AI agents built specifically for banking and financial institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Account Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle balance inquiries, transaction history, account statements, and basic account maintenance requests
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Lock className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Fraud Prevention</CardTitle>
                <CardDescription className="text-gray-600">
                  Instantly verify suspicious transactions, guide customers through security protocols, and assist with fraud reporting
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Building className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Loan Processing</CardTitle>
                <CardDescription className="text-gray-600">
                  Pre-qualify loan applications, provide loan information, and guide customers through the application process
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Investment Guidance</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide investment product information, portfolio updates, and basic financial planning assistance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Customer Onboarding</CardTitle>
                <CardDescription className="text-gray-600">
                  Guide new customers through account opening, KYC processes, and initial product setup
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Clock className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">24/7 Banking</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide round-the-clock banking support for urgent transactions, card blocks, and emergency assistance
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
              Modernize Your Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI agents can transform your banking operations while maintaining security and compliance
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Banking AI System */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                AI-Powered Banking & Financial Services
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Customer Interaction Flow */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Customer Journey</h4>
                  <div className="space-y-4">
                    {/* Customer Inquiry */}
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Customer Inquiry</h5>
                        <p className="text-sm text-gray-600">"What's my account balance?" or "I need to transfer money"</p>
                      </div>
                    </div>
                    
                    {/* AI Processing */}
                    <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">AI Security & Authentication</h5>
                        <p className="text-sm text-gray-600">Secure identity verification and intent analysis</p>
                      </div>
                    </div>
                    
                    {/* Service Delivery */}
                    <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Instant Service Delivery</h5>
                        <p className="text-sm text-gray-600">Account info, transfers, loan guidance, or escalation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right: AI Capabilities Dashboard */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Capabilities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white text-center">
                      <Lock className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Fraud Detection</div>
                      <div className="text-xs opacity-90 mt-1">Real-time monitoring</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-white text-center">
                      <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Investment Advice</div>
                      <div className="text-xs opacity-90 mt-1">Portfolio insights</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl text-white text-center">
                      <Building className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Loan Processing</div>
                      <div className="text-xs opacity-90 mt-1">Quick pre-approval</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl text-white text-center">
                      <Users className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Account Support</div>
                      <div className="text-xs opacity-90 mt-1">24/7 assistance</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Security & Compliance Banner */}
              <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
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
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">90%</div>
                  <div className="text-sm text-gray-600">Query Resolution</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">3sec</div>
                  <div className="text-sm text-gray-600">Average Response</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-gray-600">Security Score</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">65%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhance Customer Experience</h4>
                    <p className="text-gray-600">Provide instant, personalized banking services 24/7, reducing wait times and improving customer satisfaction scores.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Operational Costs</h4>
                    <p className="text-gray-600">Handle 70% of routine inquiries automatically, allowing human agents to focus on complex financial advisory services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ensure Compliance</h4>
                    <p className="text-gray-600">Built-in compliance controls ensure all interactions meet regulatory requirements and maintain audit trails.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Strengthen Security</h4>
                    <p className="text-gray-600">Advanced security protocols protect customer data while enabling seamless authentication and fraud detection.</p>
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
              Banking Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all areas of banking and financial services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Retail Banking</h3>
                <p className="text-gray-600">
                  Handle personal banking inquiries, account management, card services, and provide financial guidance to individual customers.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Banking</h3>
                <p className="text-gray-600">
                  Manage business account inquiries, cash management services, trade finance, and corporate lending support.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wealth Management</h3>
                <p className="text-gray-600">
                  Provide portfolio updates, investment research, market insights, and schedule consultations with financial advisors.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Banking</h3>
                <p className="text-gray-600">
                  Support mobile and online banking platforms with technical assistance, feature guidance, and transaction support.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Services</h3>
                <p className="text-gray-600">
                  Handle insurance inquiries, policy information, claims processing, and cross-sell insurance products to existing customers.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Credit Services</h3>
                <p className="text-gray-600">
                  Manage credit card applications, credit monitoring services, payment processing, and credit education programs.
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
            Ready to Modernize Your Banking Services?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join forward-thinking financial institutions using AI to enhance customer experiences and operational efficiency.
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
