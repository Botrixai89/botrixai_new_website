"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Mail, TrendingUp, Users, Target, BarChart3, Zap, Shield, Clock, Globe, Palette, Code, Download, Eye, MousePointer, Calendar, Bell, Sparkles, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EmailMarketingPage() {
  const features = [
    {
      icon: Palette,
      title: "Drag & Drop Email Builder",
      description: "Create stunning emails with our intuitive visual editor. No coding required - just drag, drop, and customize."
    },
    {
      icon: Users,
      title: "Advanced Segmentation",
      description: "Target the right audience with smart segmentation based on behavior, demographics, and engagement."
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Set up automated email workflows for welcome series, abandoned carts, re-engagement, and more."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track opens, clicks, conversions, and ROI with comprehensive real-time reporting and insights."
    },
    {
      icon: Target,
      title: "A/B Testing",
      description: "Optimize your campaigns with multivariate testing for subject lines, content, and send times."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with GDPR compliance, encrypted data, and advanced authentication."
    }
  ]

  const campaigns = [
    {
      icon: Bell,
      title: "Welcome Series",
      description: "Automated onboarding emails to engage new subscribers from day one"
    },
    {
      icon: TrendingUp,
      title: "Promotional Campaigns",
      description: "Drive sales with targeted promotions, discounts, and special offers"
    },
    {
      icon: MousePointer,
      title: "Abandoned Cart Recovery",
      description: "Recover lost sales with timely reminders and personalized incentives"
    },
    {
      icon: Calendar,
      title: "Event Invitations",
      description: "Boost event attendance with beautiful invitations and RSVP tracking"
    },
    {
      icon: Users,
      title: "Customer Retention",
      description: "Keep customers engaged with newsletters, updates, and exclusive content"
    },
    {
      icon: Eye,
      title: "Re-engagement Campaigns",
      description: "Win back inactive subscribers with targeted reactivation campaigns"
    }
  ]

  const statistics = [
    {
      value: "4200%",
      label: "Average ROI",
      description: "Get maximum return on your marketing investment"
    },
    {
      value: "99%",
      label: "Daily Engagement",
      description: "Email users check their inbox every single day"
    },
    {
      value: "3x",
      label: "Higher Conversion",
      description: "More effective than social media marketing"
    }
  ]

  const benefits = [
    "Unlimited email sends",
    "Advanced automation workflows",
    "Responsive email templates",
    "List management & segmentation",
    "Personalization & dynamic content",
    "Detailed analytics & reporting",
    "A/B testing & optimization",
    "Spam score checking",
    "Mobile-optimized emails",
    "API & integrations",
    "Dedicated IP addresses",
    "24/7 expert support"
  ]

  return (
    <div className="min-h-screen bg-ink">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden site-hero">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeUp">
              <div className="inline-flex items-center space-x-2 bg-signal/10 text-signal px-4 py-2 rounded-full mb-8 animate-fadeIn">
                <Mail className="w-4 h-4" />
                <span className="uppercase font-mono text-[11px] tracking-[0.25em]">Email Marketing Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl text-bone mb-8 leading-tight font-medium tracking-[-0.045em]">
                Email Marketing <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-[#9dffc6]">
                  That Delivers
                </span>
              </h1>
              
              <p className="text-xl text-dim mb-10 leading-relaxed max-w-lg animate-fadeUp delay-100">
                Create, send, and track powerful email campaigns. The enterprise-grade platform trusted by businesses to boost conversions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp delay-200">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-6 text-lg transition-all duration-300 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
                  onClick={() => window.open('tel:+919981292605')}
                >
                  Talk to Sales
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float delay-100">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0b5d2f] to-[#063a1e] rounded-[2rem] blur-2xl opacity-50"></div>
              <div className="relative z-10 bg-surface-1 rounded-[2rem] p-2 light-edge border border-hairline transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/Email marketing.png"
                  alt="Email Marketing Platform Interface"
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
      <section className="py-24 relative z-10 -mt-10 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-surface-1 rounded-3xl p-8 light-edge border border-hairline hover:-translate-y-2 transition-all duration-500 group">
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-signal to-[#9dffc6] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <h3 className="text-xl text-bone mb-2 font-medium tracking-[-0.02em]">{stat.label}</h3>
                  <p className="text-dim">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-ink border-t border-hairline-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeUp">
            <span className="text-signal uppercase font-mono text-[11px] tracking-[0.25em]">Powerful Tools</span>
            <h2 className="text-4xl md:text-5xl text-bone mt-2 mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              From automation to analytics, we provide the tools to supercharge your growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-surface-2 rounded-3xl p-8 transition-all duration-300 border border-hairline hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-surface-2 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-signal transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-signal group-hover:text-bone transition-colors duration-300" />
                </div>
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">{feature.title}</h3>
                <p className="text-dim leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Campaigns That Convert
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Covering every stage of the customer journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <div key={index} className="bg-gradient-to-br from-surface-1 to-surface-1 rounded-3xl p-8 border border-hairline hover:border-signal/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-surface-2 rounded-2xl flex items-center justify-center mb-6 border border-hairline group-hover:scale-110 transition-transform duration-300">
                  <campaign.icon className="w-7 h-7 text-signal" />
                </div>
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">{campaign.title}</h3>
                <p className="text-dim">{campaign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 text-bone relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Why Businesses Choose Us
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              A complete platform designed for modern marketing teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-bone/[0.06] rounded-2xl p-5 border border-white/10 hover:bg-bone/[0.06] transition-colors duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-signal rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-bone" />
                </div>
                <span className="text-lg text-bone/85 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-[3rem] p-12 md:p-24 text-center light-edge relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
             <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl text-bone mb-8 font-medium tracking-[-0.035em] leading-[1.08]">
                Ready to Transform Your Email Marketing?
              </h2>
              <p className="text-xl md:text-2xl text-bone/75 mb-12 max-w-3xl mx-auto">
                Join thousands of businesses using BotrixAI to drive engagement and revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="px-10 py-7 text-lg transition-transform hover:-translate-y-1 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  Book Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  className="px-10 py-7 text-lg backdrop-blur-sm transition-all hover:-translate-y-1 rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium"
                  onClick={() => window.location.href = 'mailto:contact@botrixai.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
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
