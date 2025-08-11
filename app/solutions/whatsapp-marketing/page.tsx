import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Zap, Shield, TrendingUp, Users, Clock, Globe, ArrowRight, CheckCircle, Star, MessageSquare, Megaphone, Bot } from "lucide-react"
import Image from "next/image"

export default function WhatsAppMarketingPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/integrations/icons8-whatsapp-48.png"
                alt="WhatsApp"
                width={48}
                height={48}
                className="w-12 h-12 mr-3"
              />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                WhatsApp Marketing
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              WhatsApp Business Automation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Automate customer engagement, run marketing campaigns, and manage conversations at scale on the world's most popular messaging platform with 2+ billion users.
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
              Why Choose Our WhatsApp Marketing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced automation capabilities combined with WhatsApp's massive reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Unlimited Chats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Handle unlimited conversations with customers without any per-message costs, perfect for high-volume customer support and marketing campaigns.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Broadcast Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Send targeted marketing messages, promotional offers, and announcements to your customer base with advanced segmentation and scheduling.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Smart Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  AI-powered automation that handles common queries, qualifies leads, and provides instant responses while seamlessly transferring complex issues to human agents.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">WhatsApp Business API</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Official WhatsApp Business API integration with verified business profile, ensuring high deliverability and trust with your customers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Comprehensive analytics dashboard showing message delivery rates, response times, customer engagement metrics, and campaign performance insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Multi-agent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Support for multiple team members with role-based access, conversation assignment, and team collaboration features for seamless customer service.
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
              Transform Your WhatsApp Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our WhatsApp Marketing can revolutionize your customer engagement
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reach 2+ Billion Users</h4>
                    <p className="text-gray-600">Tap into WhatsApp's massive user base with 98% message open rates and instant engagement capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Increase Conversion Rates</h4>
                    <p className="text-gray-600">Achieve 3x higher conversion rates compared to email marketing with personalized, interactive conversations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Support Costs</h4>
                    <p className="text-gray-600">Handle 70% of customer inquiries automatically, reducing support costs while improving response times.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Build Customer Trust</h4>
                    <p className="text-gray-600">Leverage WhatsApp's trusted platform to build stronger relationships and increase customer loyalty.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Starting Price</h4>
                <div className="text-4xl font-bold text-[#00D563] mb-2">₹2,499</div>
                <p className="text-gray-600">per month</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Unlimited Messages</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Broadcast Campaigns</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">AI Automation</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Multi-agent Support</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Advanced Analytics</span>
                  <CheckCircle className="w-5 h-5 text-[#00D563]" />
                </div>
              </div>
              <Button className="w-full bg-[#00D563] hover:bg-[#00D563]/90 text-white py-3">
                Get Started Now
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
              Popular Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are leveraging WhatsApp Marketing for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Customer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Provide instant customer support with automated responses for common queries and seamless handoff to human agents for complex issues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Marketing Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Run targeted marketing campaigns with personalized offers, product announcements, and promotional messages to drive sales and engagement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automate lead qualification and collection with interactive forms, product demos, and appointment scheduling directly through WhatsApp.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Order Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Keep customers informed with real-time order status updates, delivery tracking, and post-purchase support through automated notifications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Appointment Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Streamline appointment scheduling with automated booking systems, reminders, and rescheduling capabilities for service-based businesses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">International Business</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Expand globally with multi-language support and localized conversations for international markets and diverse customer bases.
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
            Ready to Transform Your WhatsApp Business?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 500+ companies that have already automated their customer engagement with BotrixAI WhatsApp Marketing
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