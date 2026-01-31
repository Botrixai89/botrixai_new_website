"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Instagram, TrendingUp, Users, Zap, MessageSquare, Clock, BarChart3, Target, Heart, Share2, Eye, Bell, Send, UserPlus, ShoppingCart, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InstagramAutomationPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Automated DM Responses",
      description: "Reply to Instagram DMs instantly with AI-powered automation. Never miss a customer inquiry again."
    },
    {
      icon: Bell,
      title: "Smart Comment Replies",
      description: "Auto-respond to comments on your posts and stories with personalized, contextual messages."
    },
    {
      icon: Users,
      title: "Lead Qualification",
      description: "Automatically qualify leads through intelligent conversations and route them to your sales team."
    },
    {
      icon: Target,
      title: "Story Reply Automation",
      description: "Engage followers who reply to your stories with automated, personalized responses."
    },
    {
      icon: Zap,
      title: "Instant Engagement",
      description: "Respond within seconds to maintain high engagement rates and build stronger connections."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track response times, engagement rates, conversion metrics, and customer satisfaction."
    }
  ]

  const useCases = [
    {
      icon: ShoppingCart,
      title: "E-commerce Sales",
      description: "Handle product inquiries, share catalog links, process orders, and provide tracking updates",
      benefits: ["24/7 instant responses", "Automated order updates", "Product recommendations"]
    },
    {
      icon: UserPlus,
      title: "Lead Generation",
      description: "Capture leads, qualify prospects, book appointments, and nurture relationships automatically",
      benefits: ["Auto lead capture", "Smart qualification", "Calendar integration"]
    },
    {
      icon: Heart,
      title: "Customer Support",
      description: "Answer FAQs, resolve issues, provide information, and escalate complex queries",
      benefits: ["Instant FAQ responses", "Issue resolution", "Smart escalation"]
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Build relationships, respond to followers, share content, and grow your community",
      benefits: ["Automated engagement", "Personalized responses", "Community building"]
    },
    {
      icon: Bell,
      title: "Event Management",
      description: "Send event reminders, handle RSVPs, share updates, and answer event-related questions",
      benefits: ["RSVP automation", "Event reminders", "Info sharing"]
    },
    {
      icon: TrendingUp,
      title: "Influencer Marketing",
      description: "Manage collaboration requests, share media kits, coordinate campaigns automatically",
      benefits: ["Collaboration management", "Media kit sharing", "Campaign coordination"]
    }
  ]

  const statistics = [
    {
      value: "10x",
      label: "Faster Response",
      description: "Reduce wait times from hours to seconds"
    },
    {
      value: "85%",
      label: "Workload Reduction",
      description: "Automate repetitive queries and tasks"
    },
    {
      value: "3x",
      label: "Higher Conversions",
      description: "Turn more conversations into sales"
    }
  ]

  const benefits = [
    "Automated DM & comment replies",
    "Story reply automation",
    "Lead capture & qualification",
    "AI-powered responses",
    "Multi-account management",
    "Custom response templates",
    "Smart keyword triggers",
    "Conversation analytics",
    "CRM integrations",
    "Sentiment analysis",
    "Auto-translation support",
    "24/7 customer support"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeUp">
              <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-8 animate-fadeIn shadow-sm">
                <Instagram className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">Instagram Automation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                Scale Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                  Instagram Growth
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg animate-fadeUp delay-100">
                Automate DMs, comments, and stories with AI. Engage followers instantly and turn conversations into conversions 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp delay-200">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-200 text-gray-700 hover:border-pink-600 hover:text-pink-600 px-8 py-6 text-lg rounded-full hover:bg-pink-50 transition-all duration-300"
                  onClick={() => window.open('tel:+919981292605')}
                >
                  Talk to Expert
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float delay-100">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[2rem] blur-2xl opacity-50"></div>
              <div className="relative z-10 bg-white rounded-[2rem] p-2 shadow-2xl border border-gray-100 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/Instagram automation .png"
                  alt="Instagram Automation Interface"
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
                  <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeUp">
            <span className="text-pink-600 font-semibold tracking-wider uppercase text-sm">Smart Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Automate Everything
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From DMs to story mentions, handle all your interactions automatically.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-pink-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Endless Possibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored automation for every business need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 border border-gray-200 hover:border-pink-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps & Benefits */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get Started in Minutes</h2>
              <div className="space-y-12">
                {[
                  { num: "01", title: "Connect Account", desc: "Securely link your Instagram Business profile." },
                  { num: "02", title: "Set Triggers", desc: "Define keywords and automation rules." },
                  { num: "03", title: "Go Live", desc: "Watch your engagement skyrocket automatically." }
                ].map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg shadow-pink-500/20">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8">Why Choose BotrixAI?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#00D563]" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
             <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Ready to Automate?
              </h2>
              <p className="text-xl md:text-2xl text-pink-50 mb-12 max-w-3xl mx-auto">
                Join thousands of creators and brands using BotrixAI to dominate Instagram.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-7 text-lg rounded-full shadow-lg transition-transform hover:-translate-y-1"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Book Demo
                </Button>
                <Button 
                  size="lg" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 px-10 py-7 text-lg rounded-full backdrop-blur-sm transition-all hover:-translate-y-1"
                  onClick={() => window.location.href = 'mailto:contact@botrixai.com'}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
