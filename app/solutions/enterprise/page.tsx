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
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Enterprise Solutions
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Scalable AI Infrastructure
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade AI infrastructure designed for large-scale business operations with advanced security, compliance, and customization capabilities for Fortune 500 companies.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" className="border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced infrastructure designed for enterprise-scale operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Scalable Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Cloud-native architecture that scales automatically to handle millions of concurrent users and conversations without performance degradation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  SOC 2 Type II, ISO 27001, and GDPR compliant with end-to-end encryption, role-based access control, and advanced threat protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Custom Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Deep integration with enterprise systems including SAP, Salesforce, Oracle, and custom legacy systems with dedicated API support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Compliance Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Built-in compliance for HIPAA, PCI DSS, SOX, and industry-specific regulations with audit trails and data governance controls.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Enterprise-grade analytics with custom dashboards, real-time reporting, predictive insights, and executive-level KPIs for strategic decision making.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  24/7 dedicated support with assigned account managers, priority response times, and custom training programs for your team.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Your Enterprise Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our Enterprise Solutions can revolutionize your business operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Key Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Operational Costs</h4>
                    <p className="text-gray-600">Achieve 60% cost reduction in customer service operations while improving efficiency and customer satisfaction scores.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Scale Globally</h4>
                    <p className="text-gray-600">Deploy AI solutions across multiple regions, languages, and time zones with centralized management and control.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ensure Compliance</h4>
                    <p className="text-gray-600">Meet industry-specific compliance requirements with built-in controls, audit trails, and data governance features.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Drive Innovation</h4>
                    <p className="text-gray-600">Leverage cutting-edge AI technology to gain competitive advantages and transform customer experiences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Pricing</h4>
                <div className="text-4xl font-bold text-[#00D563] mb-2">Custom</div>
                <p className="text-gray-600">tailored to your needs</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Unlimited Scalability</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Enterprise Security</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Custom Integration</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Compliance Ready</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Dedicated Support</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
              </div>
              <Button className="w-full bg-[#00D563] hover:bg-[#00D563]/90 text-white py-3">
                Contact Sales Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Fortune 500 companies are leveraging our Enterprise Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Financial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Secure AI solutions for banking, insurance, and fintech with compliance for PCI DSS, SOX, and financial regulations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  HIPAA-compliant AI solutions for patient engagement, appointment scheduling, and healthcare provider support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Retail & E-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Scalable customer service solutions for global retail chains with multi-language support and 24/7 availability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Industrial AI solutions for supply chain management, quality control, and customer support across global operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Telecommunications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  High-volume customer service automation for telecom providers with advanced routing and escalation capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Government</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Secure AI solutions for government agencies with strict compliance requirements and citizen engagement capabilities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00D563] to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join Fortune 500 companies that have already deployed BotrixAI Enterprise Solutions
          </p>
          <div className="flex justify-center">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#00D563] px-12 py-4 text-lg font-semibold transition-all duration-300 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 