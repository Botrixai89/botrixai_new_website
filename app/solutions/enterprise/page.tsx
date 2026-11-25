"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Zap, Shield, TrendingUp, Users, Clock, Globe, ArrowRight, CheckCircle, Star, Server, Database, Lock } from "lucide-react"
import Image from "next/image"

export default function EnterprisePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                Enterprise Solutions
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Scalable AI Infrastructure
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade AI infrastructure designed for large-scale business operations with advanced security, compliance, and customization capabilities for Fortune 500 companies.
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

      {/* Features Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Why Choose Our Enterprise Solutions?
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Advanced infrastructure designed for enterprise-scale operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-surface-2 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Scalable Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Cloud-native architecture that scales automatically to handle millions of concurrent users and conversations without performance degradation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  SOC 2 Type II, ISO 27001, and GDPR compliant with end-to-end encryption, role-based access control, and advanced threat protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Custom Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Deep integration with enterprise systems including SAP, Salesforce, Oracle, and custom legacy systems with dedicated API support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Compliance Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Built-in compliance for HIPAA, PCI DSS, SOX, and industry-specific regulations with audit trails and data governance controls.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Enterprise-grade analytics with custom dashboards, real-time reporting, predictive insights, and executive-level KPIs for strategic decision making.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-red-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  24/7 dedicated support with assigned account managers, priority response times, and custom training programs for your team.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-ink border-t border-hairline-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Transform Your Enterprise Operations
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our Enterprise Solutions can revolutionize your business operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-bone mb-8 font-medium tracking-[-0.02em]">
                Key Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Operational Costs</h4>
                    <p className="text-dim">Achieve 60% cost reduction in customer service operations while improving efficiency and customer satisfaction scores.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Scale Globally</h4>
                    <p className="text-dim">Deploy AI solutions across multiple regions, languages, and time zones with centralized management and control.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Ensure Compliance</h4>
                    <p className="text-dim">Meet industry-specific compliance requirements with built-in controls, audit trails, and data governance features.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Drive Innovation</h4>
                    <p className="text-dim">Leverage cutting-edge AI technology to gain competitive advantages and transform customer experiences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-1 p-8 rounded-2xl light-edge">
              <div className="text-center mb-6">
                <h4 className="text-2xl text-bone mb-2 font-medium tracking-[-0.01em]">Enterprise Pricing</h4>
                <div className="text-4xl font-semibold text-signal mb-2">Custom</div>
                <p className="text-dim">tailored to your needs</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-dim">Unlimited Scalability</span>
                  <CheckCircle className="w-5 h-5 text-signal" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dim">Enterprise Security</span>
                  <CheckCircle className="w-5 h-5 text-signal" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dim">Custom Integration</span>
                  <CheckCircle className="w-5 h-5 text-signal" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dim">Compliance Ready</span>
                  <CheckCircle className="w-5 h-5 text-signal" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dim">Dedicated Support</span>
                  <CheckCircle className="w-5 h-5 text-signal" />
                </div>
              </div>
              <Button className="w-full py-3 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                Contact Sales Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Enterprise Use Cases
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how Fortune 500 companies are leveraging our Enterprise Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-surface-2 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Financial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Secure AI solutions for banking, insurance, and fintech with compliance for PCI DSS, SOX, and financial regulations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  HIPAA-compliant AI solutions for patient engagement, appointment scheduling, and healthcare provider support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-signal/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Retail & E-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Scalable customer service solutions for global retail chains with multi-language support and 24/7 availability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Industrial AI solutions for supply chain management, quality control, and customer support across global operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-red-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Telecommunications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  High-volume customer service automation for telecom providers with advanced routing and escalation capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-hairline transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-signal/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-signal" />
                </div>
                <CardTitle className="text-xl font-medium tracking-[-0.02em]">Government</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dim">
                  Secure AI solutions for government agencies with strict compliance requirements and citizen engagement capabilities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 site-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-bone/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join Fortune 500 companies that have already deployed BotrixAI Enterprise Solutions
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="px-12 py-4 text-lg transition-all duration-300 rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium"
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 