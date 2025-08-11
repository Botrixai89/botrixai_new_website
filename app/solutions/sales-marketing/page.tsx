import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, Clock, CheckCircle, Star, Target, Zap, Shield, TrendingUp, Globe, ArrowRight, DollarSign } from "lucide-react"
import Image from "next/image"

export default function SalesMarketingPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <BarChart3 className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agent for Sales & Marketing
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Intelligent Lead Generation & Conversion
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your sales and marketing operations with AI agents that generate leads, qualify prospects, and drive conversions. Boost revenue while reducing acquisition costs.
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
              Why Choose AI Sales & Marketing Agents?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent automation that drives revenue growth and customer acquisition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automatically identify and qualify high-value prospects across multiple channels and platforms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Instant Qualification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Qualify leads in real-time with intelligent questioning and scoring algorithms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Personalized Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Deliver tailored messages and offers based on prospect behavior and preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Follow-up Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automate follow-up sequences and nurture campaigns to keep prospects engaged.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Conversion Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Optimize conversion rates with AI-driven insights and A/B testing recommendations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Multi-Channel Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Coordinate campaigns across email, social media, web, and messaging platforms seamlessly.
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
              Transform Your Sales & Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI agents can revolutionize your revenue generation
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Increase Lead Volume</h4>
                    <p className="text-gray-600">Generate 3x more qualified leads with AI-powered prospecting and qualification.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Improve Conversion Rates</h4>
                    <p className="text-gray-600">Boost conversion rates by 40% with personalized messaging and optimal timing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Acquisition Costs</h4>
                    <p className="text-gray-600">Lower customer acquisition costs by 60% through automated lead nurturing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Scale Operations</h4>
                    <p className="text-gray-600">Handle unlimited prospects without adding more sales or marketing staff.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-white p-8 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Pipeline Visualizer</h4>
                <p className="text-gray-600 mb-6">Animated cards flow through stages to illustrate automated lead nurturing.</p>
                <div className="relative h-56 rounded-xl bg-white/70 backdrop-blur border border-gray-200 overflow-hidden">
                  <Image src="/placeholder.jpg" alt="Sales & Marketing AI" fill className="object-cover" />
                </div>
              </div>
              <div className="pointer-events-none">
                <Target className="absolute top-6 left-6 w-8 h-8 text-blue-500 animate-float" />
                <TrendingUp className="absolute bottom-6 right-8 w-8 h-8 text-green-500 animate-float animate-float-slow animate-delay-500" />
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
              Sales & Marketing Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are transforming their sales and marketing with AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Prospect Research</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automatically research and identify potential customers based on your ideal customer profile.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Lead Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Score and rank leads based on engagement, behavior, and fit with your product or service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Email Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automate personalized email sequences that nurture prospects through the sales funnel.
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
                  Automate the scheduling of sales calls and demos with qualified prospects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Social Media Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automate social media posts, engagement, and lead generation across platforms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Content Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Generate and distribute relevant content that attracts and engages your target audience.
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
            Ready to Transform Your Sales & Marketing?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join successful companies that have already deployed AI sales and marketing agents
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
