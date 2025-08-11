import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Clock, CheckCircle, Star, Headphones, Zap, Shield, TrendingUp, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CustomerServicePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agents for Customer Service
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              24/7 Intelligent Customer Support
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your customer service with AI agents that provide instant, accurate, and personalized support across all channels. Reduce response times and increase customer satisfaction.
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
              Why Choose AI Customer Service Agents?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent automation that enhances your customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Provide instant support to customers anytime, anywhere with AI agents that never sleep or take breaks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Instant Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Reduce response times from hours to seconds with AI agents that provide immediate, accurate answers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Personalized Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Deliver tailored experiences based on customer history, preferences, and previous interactions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Consistent Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Maintain high service standards with AI agents that follow your brand guidelines and best practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Scalable Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Handle unlimited customer inquiries simultaneously without adding more human agents.
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
                  Serve customers in their preferred language with AI agents that speak 50+ languages fluently.
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
              Transform Your Customer Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI agents can revolutionize your customer support operations
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Response Time</h4>
                    <p className="text-gray-600">Cut average response times from 2 hours to under 30 seconds with instant AI support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Increase Satisfaction</h4>
                    <p className="text-gray-600">Improve customer satisfaction scores by 40% with faster, more accurate responses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Lower Costs</h4>
                    <p className="text-gray-600">Reduce customer service costs by up to 60% while improving service quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Handle Peak Loads</h4>
                    <p className="text-gray-600">Scale instantly during high-traffic periods without hiring additional staff.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-white p-8 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">See It In Action</h4>
                <p className="text-gray-600 mb-6">Delightful, human-like support across chat, email and social. Subtle motion below shows multi-channel orchestration.</p>
                <div className="relative h-56 rounded-xl bg-white/70 backdrop-blur border border-gray-200 overflow-hidden">
                  <Image src="/placeholder.jpg" alt="Customer Service AI" fill className="object-cover" />
                </div>
              </div>
              <div className="pointer-events-none">
                <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-[#00D563]/20 blur-xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-400/20 blur-2xl animate-pulse" />
                <MessageCircle className="absolute top-6 left-6 w-8 h-8 text-blue-500 animate-float" />
                <Headphones className="absolute bottom-6 right-8 w-8 h-8 text-green-500 animate-float animate-float-slow animate-delay-800" />
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
              Customer Service Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are transforming their customer service with AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">FAQ Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automate responses to common questions and reduce repetitive inquiries handled by human agents.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Order Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Help customers track orders, process returns, and resolve shipping issues with intelligent assistance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Account Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Assist customers with account updates, password resets, and profile management tasks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Appointment Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automate appointment scheduling, rescheduling, and cancellation processes for service businesses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Provide step-by-step troubleshooting guides and technical assistance for product issues.
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
                  Serve international customers with AI agents that speak their native language fluently.
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
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses that have already deployed AI customer service agents
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
