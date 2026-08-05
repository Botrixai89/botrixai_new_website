"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, MessageSquare, Phone as PhoneIcon, Calendar, MapPin, CreditCard, Download, Globe, Mail, FileText, Image as ImageIcon, Video, LayoutGrid, Shield, Building2, Zap, Users, TrendingUp, CheckCircle, ShoppingCart, Sparkles, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RCSMessagingPage() {
  const mediaTypes = [
    {
      icon: MessageSquare,
      title: "Text Message",
      description: "Send text-based messages with rich formatting"
    },
    {
      icon: ImageIcon,
      title: "Images",
      description: "Share high-quality images and galleries"
    },
    {
      icon: Video,
      title: "Videos",
      description: "Send engaging video content directly"
    },
    {
      icon: LayoutGrid,
      title: "Carousels",
      description: "Multiple items in one interactive message"
    },
    {
      icon: FileText,
      title: "PDFs",
      description: "Share documents and brochures instantly"
    }
  ];

  const ctaButtons = [
    {
      icon: Download,
      title: "App Download",
      description: "Drive app installs directly from the message stream"
    },
    {
      icon: PhoneIcon,
      title: "Click To Call",
      description: "One-tap calling for instant customer support"
    },
    {
      icon: Calendar,
      title: "Calendar Event",
      description: "Seamless event scheduling and reminders"
    },
    {
      icon: CreditCard,
      title: "Payments",
      description: "Secure, one-tap payment integration"
    },
    {
      icon: Globe,
      title: "Visit Website",
      description: "Drive traffic to your landing pages"
    },
    {
      icon: MapPin,
      title: "View Map",
      description: "Share location and get directions instantly"
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Trusted Branding",
      description: "Verified sender identity builds customer trust instantly"
    },
    {
      icon: Building2,
      title: "Company Profile",
      description: "Complete brand profile with logo, description and info"
    },
    {
      icon: ImageIcon,
      title: "Rich Media",
      description: "Combine text, images, and video for maximum impact"
    },
    {
      icon: Shield,
      title: "Authenticated Sender",
      description: "Secure, verified communication channel"
    },
    {
      icon: Zap,
      title: "Interactive Actions",
      description: "Quick reply buttons and automated flows"
    },
    {
      icon: MessageSquare,
      title: "Smart Replies",
      description: "Suggested responses for faster engagement"
    }
  ];

  const statistics = [
    {
      value: "75%",
      label: "Higher Engagement",
      description: "Customers are 74% more likely to engage via RCS"
    },
    {
      value: "72%",
      label: "Conversion Lift",
      description: "Increase in online purchase probability"
    },
    {
      value: "35×",
      label: "Better Read Rates",
      description: "More effective than traditional email marketing"
    }
  ];

  const integrations = [
    { name: "Google Wallet", description: "Seamless digital wallet integration", logo: "/Google-Wallet.png" },
    { name: "Google Pay", description: "Direct payment processing", logo: "/Google pay.png" },
    { name: "Gemini AI", description: "AI-powered messaging insights", logo: "/gemini-color.png" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeUp">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8 animate-fadeIn">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">Next Gen Messaging</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                RCS Messaging <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#00D563]">
                  Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg animate-fadeUp delay-100">
                Upgrade your SMS to a rich, interactive experience. Trusted by global brands for secure and engaging customer communication.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp delay-200">
                <Button 
                  size="lg" 
                  className="bg-[#00D563] hover:bg-[#00C557] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-6 text-lg rounded-full hover:bg-blue-50 transition-all duration-300"
                  onClick={() => window.open('tel:+919981292605')}
                >
                  Talk to Expert
                </Button>
              </div>
              
              <div className="mt-10 animate-fadeUp delay-300">
                <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
                  <div className="flex -space-x-2 mr-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">G</div>
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border-2 border-white">A</div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white">M</div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-900 block">Google RBM Partner</span>
                    <span className="text-xs text-gray-500">Asia Pacific | Africa | Middle East</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fadeUp delay-100">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-green-500/20 rounded-[2rem] blur-2xl opacity-50"></div>
              <div className="relative z-10 bg-white rounded-[2rem] p-2 shadow-2xl border border-gray-100">
                <Image
                  src="/RCS.png"
                  alt="RCS Messaging Interface"
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-[1.5rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-white relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-[#00D563] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Types Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rich Media Capabilities
            </h2>
            <p className="text-xl text-gray-600">Beyond simple text messages</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {mediaTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group cursor-pointer">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <type.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900">{type.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#00D563] font-semibold tracking-wider uppercase text-sm">Why Choose RCS?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Transform Customer Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deliver app-like experiences directly in the native messaging inbox.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#00D563] transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Elements / CTA Buttons */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Drive Action with <span className="text-[#00D563]">Smart Buttons</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guide customers to the next step with intuitive, one-tap actions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ctaButtons.map((button, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D563] transition-colors duration-300">
                    <button.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{button.title}</h3>
                    <p className="text-sm text-gray-600">{button.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900">Success Stories</h2>
          </div>

          <div className="space-y-24">
            {/* Case 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative animate-float">
                <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                  {/* Mockup Content */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">KT</div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">Kerala Tourism</div>
                        <div className="text-xs text-blue-600 font-medium uppercase tracking-wider">Verified Business</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                      <div className="h-32 bg-green-100 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-green-800 font-medium">🌴 Visit God's Own Country</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Plan your perfect getaway this summer! Exclusive packages available.</p>
                      <Button className="w-full bg-blue-600 h-8 text-xs">Book Now</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">Travel & Tourism</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Kerala Tourism</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Achieved higher tourist engagement and steady visitor flow through interactive RCS campaigns.
                </p>
                <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">45%</div>
                    <div className="text-sm text-gray-500">Bookings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">30%</div>
                    <div className="text-sm text-gray-500">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">25%</div>
                    <div className="text-sm text-gray-500">Repeats</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">Retail</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Kalyan Silks</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Increased footfall and customer acquisition with rich media catalogs and instant location sharing.
                </p>
                <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-1">40%</div>
                    <div className="text-sm text-gray-500">Engagement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-1">15%</div>
                    <div className="text-sm text-gray-500">Leads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-1">30%</div>
                    <div className="text-sm text-gray-500">Growth</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-float delay-200">
                <div className="absolute -inset-4 bg-red-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                  {/* Mockup Content */}
                  <div className="bg-red-50 rounded-2xl p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">KS</div>
                      <div>
                        <div className="font-bold text-gray-900">Kalyan Silks</div>
                        <div className="text-xs text-gray-500">Verified Business</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                      <div className="grid grid-cols-2 gap-2 mb-3">
                         <div className="h-20 bg-red-100 rounded"></div>
                         <div className="h-20 bg-orange-100 rounded"></div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">New Wedding Collection is out now! 🌸</p>
                      <div className="grid grid-cols-2 gap-2">
                        <Button size="sm" variant="outline" className="w-full text-xs">View Catalog</Button>
                        <Button size="sm" className="w-full bg-red-600 text-xs">Visit Store</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#00D563] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Seamless Ecosystem Integration
              </h2>
              <p className="text-green-50 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Connect RCS with your favorite Google services for payments, AI, and passes.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {integrations.map((integration, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                    <div className="bg-white rounded-xl p-4 mb-6 inline-block shadow-lg w-20 h-20 flex items-center justify-center mx-auto">
                      <Image
                        src={integration.logo}
                        alt={integration.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{integration.name}</h3>
                    <p className="text-green-50 text-sm">{integration.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-20">
            Get Started in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
            {[
              { num: "01", title: "Submit KYC", desc: "Connect with us and submit your brand details." },
              { num: "02", title: "Get Verified", desc: "Receive your official Google Verification Badge." },
              { num: "03", title: "Launch", desc: "Start sending rich, interactive campaigns." }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-white border-4 border-[#00D563] text-[#00D563] rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-lg group-hover:scale-110 group-hover:bg-[#00D563] group-hover:text-white transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Button 
              size="lg" 
              className="bg-gray-900 text-white hover:bg-gray-800 px-10 py-6 text-lg rounded-full shadow-lg"
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
