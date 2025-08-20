"use client"

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

      {/* Sales Dashboard Demo Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI-Powered Sales Intelligence
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Watch our AI agents identify high-value prospects, nurture leads, and close deals while providing detailed analytics and insights for your sales team.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#00D563] mb-1">45%</div>
                  <div className="text-sm text-gray-600">More Qualified Leads</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#00D563] mb-1">67%</div>
                  <div className="text-sm text-gray-600">Faster Sales Cycle</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#00D563] mb-1">3x</div>
                  <div className="text-sm text-gray-600">ROI Increase</div>
                </div>
              </div>
            </div>

            {/* Right Sales Dashboard Visualization */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="flex items-center mb-4 bg-orange-600 text-white p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Sales Intelligence Hub</span>
                  <div className="ml-auto flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span className="ml-2 text-sm">Live</span>
                  </div>
                </div>
                
                {/* Sales Pipeline Visualization */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Sales Pipeline</h3>
                  </div>
                  
                  {/* Lead Scoring */}
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Hot Lead Identified</span>
                      <div className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded">Score: 95/100</div>
                    </div>
                    <div className="text-xs text-gray-600">
                      <span className="font-medium">TechCorp Inc.</span> - Downloaded 3 whitepapers, visited pricing page 5 times
                    </div>
                  </div>

                  {/* AI Recommendation */}
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Target className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800">AI Recommendation</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Send personalized demo invite + case study for similar company size
                    </div>
                    <button className="mt-2 bg-[#00D563] text-white px-3 py-1 rounded text-xs hover:bg-green-600">
                      Execute Action
                    </button>
                  </div>

                  {/* Sales Funnel Progress */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Pipeline Progress</div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between bg-gray-50 p-2 rounded text-xs">
                        <span>🔍 Lead Qualification</span>
                        <span className="text-[#00D563] font-medium">15 leads</span>
                      </div>
                      <div className="flex items-center justify-between bg-yellow-50 p-2 rounded text-xs">
                        <span>📞 Discovery Call</span>
                        <span className="text-yellow-600 font-medium">8 scheduled</span>
                      </div>
                      <div className="flex items-center justify-between bg-orange-50 p-2 rounded text-xs">
                        <span>🎯 Proposal Sent</span>
                        <span className="text-orange-600 font-medium">4 pending</span>
                      </div>
                      <div className="flex items-center justify-between bg-green-50 p-2 rounded text-xs">
                        <span>✅ Deal Closed</span>
                        <span className="text-green-600 font-medium">2 won</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-2">Today's Performance</div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-gray-500">Conversion Rate</div>
                        <div className="font-semibold text-[#00D563]">23.5%</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Avg Deal Size</div>
                        <div className="font-semibold text-[#00D563]">$12,400</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Response Time</div>
                        <div className="font-semibold text-[#00D563]">3 min</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Revenue Today</div>
                        <div className="font-semibold text-[#00D563]">$48.6K</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Sales Pipeline Flow</h4>
                <p className="text-gray-600 mb-6">Automated lead progression through your sales funnel with AI optimization.</p>
                
                {/* Pipeline Flow Diagram */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-3 rounded-lg flex-1 text-center">
                      <Target className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <span className="text-sm font-medium">Lead Generation</span>
                      <div className="text-xs text-gray-600">234 new leads</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="bg-yellow-100 p-3 rounded-lg flex-1 text-center">
                      <Users className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                      <span className="text-sm font-medium">Qualification</span>
                      <div className="text-xs text-gray-600">89 qualified</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-3 rounded-lg flex-1 text-center">
                      <BarChart3 className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                      <span className="text-sm font-medium">Demo/Proposal</span>
                      <div className="text-xs text-gray-600">34 in progress</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="bg-green-100 p-3 rounded-lg flex-1 text-center">
                      <DollarSign className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <span className="text-sm font-medium">Closed Won</span>
                      <div className="text-xs text-gray-600">12 deals</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-green-800">Conversion Rate</span>
                        <div className="text-xs text-gray-600">Lead to Customer: 5.1%</div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-green-800">Pipeline Value</span>
                        <div className="text-xs text-gray-600">$186,400</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating animations */}
              <div className="pointer-events-none">
                <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-orange-500/20 blur-xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-400/20 blur-2xl animate-pulse" />
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
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#00D563] px-12 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
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
