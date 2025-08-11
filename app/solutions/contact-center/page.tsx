import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Headphones, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, CallCenter } from "lucide-react"
import Image from "next/image"

export default function ContactCenterPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Headphones className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agents for Contact Center
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Intelligent Call Center Automation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your contact center with AI agents that handle calls, route inquiries, and provide intelligent support. Reduce wait times and improve customer satisfaction.
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
              Why Choose AI Contact Center Agents?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced automation that revolutionizes your contact center operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Intelligent Call Routing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automatically route calls to the right department or agent based on customer needs and agent availability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Instant Response</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Eliminate hold times with AI agents that provide immediate assistance and resolve common issues instantly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Agent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Provide real-time assistance to human agents with relevant information and suggested responses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Monitor call quality, compliance, and performance with AI-powered analytics and insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Scalable Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Handle peak call volumes without adding infrastructure or hiring additional agents.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Multi-Language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Serve customers in their native language with AI agents that understand and respond in 50+ languages.
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
              Transform Your Contact Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI agents can revolutionize your contact center operations
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Wait Times</h4>
                    <p className="text-gray-600">Cut average wait times by 80% with intelligent call routing and instant AI responses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Improve Efficiency</h4>
                    <p className="text-gray-600">Increase agent productivity by 50% with AI assistance and automated routine tasks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Lower Costs</h4>
                    <p className="text-gray-600">Reduce operational costs by up to 40% while improving service quality and customer satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h4>
                    <p className="text-gray-600">Provide round-the-clock support without the need for night shifts or overtime pay.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-white p-8 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Live Call Orchestration</h4>
                <p className="text-gray-600 mb-6">Animated call flow shows how intents are detected and routed in milliseconds.</p>
                <div className="relative h-56 rounded-xl bg-white/70 backdrop-blur border border-gray-200 overflow-hidden">
                  <Image src="/placeholder.jpg" alt="Contact Center AI" fill className="object-cover" />
                </div>
              </div>
              <div className="pointer-events-none">
                <Phone className="absolute top-6 left-6 w-8 h-8 text-blue-500 animate-float" />
                <Headphones className="absolute bottom-6 right-8 w-8 h-8 text-green-500 animate-float animate-float-slow animate-delay-500" />
                <Globe className="absolute bottom-10 left-1/3 w-8 h-8 text-purple-500 animate-float animate-float-fast animate-delay-200" />
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
              Contact Center Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are transforming their contact centers with AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Call Routing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Intelligently route calls to the appropriate department or agent based on customer needs and agent skills.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">IVR Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Replace traditional IVR systems with intelligent AI agents that understand natural language.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Agent Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Provide real-time coaching and suggestions to agents during calls to improve performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Call Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Monitor call quality, compliance, and performance with AI-powered analytics and insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Compliance Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Ensure regulatory compliance with automated monitoring and reporting capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Multi-Language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Serve customers in their native language with AI agents that understand and respond fluently.
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
            Ready to Transform Your Contact Center?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join leading companies that have already deployed AI contact center agents
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
