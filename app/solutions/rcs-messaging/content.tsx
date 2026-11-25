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
    <div className="min-h-screen bg-ink">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden site-hero">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeUp">
              <div className="inline-flex items-center space-x-2 bg-signal/10 text-signal px-4 py-2 rounded-full mb-8 animate-fadeIn">
                <Sparkles className="w-4 h-4" />
                <span className="uppercase font-mono text-[11px] tracking-[0.25em]">Next Gen Messaging</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl text-bone mb-8 leading-tight font-medium tracking-[-0.045em]">
                RCS Messaging <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-[#9dffc6]">
                  Platform
                </span>
              </h1>
              
              <p className="text-xl text-dim mb-10 leading-relaxed max-w-lg animate-fadeUp delay-100">
                Upgrade your SMS to a rich, interactive experience. Trusted by global brands for secure and engaging customer communication.
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
                  className="px-8 py-6 text-lg transition-all duration-300 rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium"
                  onClick={() => window.open('tel:+919981292605')}
                >
                  Talk to Expert
                </Button>
              </div>
              
              <div className="mt-10 animate-fadeUp delay-300">
                <div className="inline-flex items-center bg-surface-1/80 backdrop-blur-sm border border-hairline rounded-xl px-6 py-3">
                  <div className="flex -space-x-2 mr-4">
                    <div className="w-8 h-8 rounded-full bg-signal/10 flex items-center justify-center border border-bone/30">G</div>
                    <div className="w-8 h-8 rounded-full bg-signal/10 flex items-center justify-center border border-bone/30">A</div>
                    <div className="w-8 h-8 rounded-full bg-signal/10 flex items-center justify-center border border-bone/30">M</div>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-bone block">Google RBM Partner</span>
                    <span className="text-xs text-dim">Asia Pacific | Africa | Middle East</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fadeUp delay-100">
              <div className="absolute -inset-4 bg-gradient-to-r from-surface-2 to-[#063a1e] rounded-[2rem] blur-2xl opacity-50"></div>
              <div className="relative z-10 bg-surface-1 rounded-[2rem] p-2 light-edge border border-hairline">
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

      {/* Media Types Grid */}
      <section className="py-24 bg-ink border-t border-hairline-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeUp">
            <h2 className="text-4xl text-bone mb-4 font-medium tracking-[-0.035em] leading-[1.08]">
              Rich Media Capabilities
            </h2>
            <p className="text-xl text-dim">Beyond simple text messages</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {mediaTypes.map((type, index) => (
              <div key={index} className="bg-surface-1 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 border border-hairline group cursor-pointer">
                <div className="w-14 h-14 bg-surface-2 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-surface-2 transition-colors duration-300">
                  <type.icon className="w-7 h-7 text-signal group-hover:text-bone transition-colors duration-300" />
                </div>
                <h3 className="text-bone font-medium tracking-[-0.02em]">{type.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-signal uppercase font-mono text-[11px] tracking-[0.25em]">Why Choose RCS?</span>
            <h2 className="text-4xl md:text-5xl text-bone mt-2 mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Transform Customer Experience
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Deliver app-like experiences directly in the native messaging inbox.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-surface-2 rounded-3xl p-8 hover:bg-surface-1 transition-all duration-300 border border-transparent hover:border-hairline group">
                <div className="w-14 h-14 bg-surface-2 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-signal transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-bone group-hover:text-bone transition-colors duration-300" />
                </div>
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">{feature.title}</h3>
                <p className="text-dim leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Elements / CTA Buttons */}
      <section className="py-24 overflow-hidden relative bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Drive Action with <span className="text-signal">Smart Buttons</span>
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Guide customers to the next step with intuitive, one-tap actions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ctaButtons.map((button, index) => (
              <div key={index} className="bg-surface-2 rounded-2xl p-6 border border-hairline hover:border-hairline transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-surface-2 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-signal transition-colors duration-300">
                    <button.icon className="w-6 h-6 text-signal group-hover:text-bone transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg text-bone mb-1 font-medium tracking-[-0.02em]">{button.title}</h3>
                    <p className="text-sm text-dim">{button.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl text-bone font-medium tracking-[-0.035em] leading-[1.08]">Success Stories</h2>
          </div>

          <div className="space-y-24">
            {/* Case 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative animate-float">
                <div className="absolute -inset-4 bg-signal/10 rounded-full blur-3xl opacity-50"></div>
                <div className="relative bg-surface-1 rounded-3xl light-edge p-6 border border-hairline">
                  {/* Mockup Content */}
                  <div className="bg-surface-2 rounded-2xl p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-surface-2 rounded-full flex items-center justify-center text-bone font-semibold text-lg light-edge">KT</div>
                      <div>
                        <div className="font-semibold text-bone text-lg">Kerala Tourism</div>
                        <div className="text-signal uppercase font-mono text-[11px] tracking-[0.25em]">Verified Business</div>
                      </div>
                    </div>
                    <div className="bg-surface-2 rounded-xl p-4 mb-4">
                      <div className="h-32 bg-signal/10 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-signal font-medium">🌴 Visit God's Own Country</span>
                      </div>
                      <p className="text-sm text-dim mb-3">Plan your perfect getaway this summer! Exclusive packages available.</p>
                      <Button className="w-full h-8 text-xs rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">Book Now</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-signal/10 text-signal px-4 py-1 rounded-full text-sm font-semibold mb-4">Travel & Tourism</div>
                <h3 className="text-3xl text-bone mb-6 font-medium tracking-[-0.02em]">Kerala Tourism</h3>
                <p className="text-xl text-dim mb-8">
                  Achieved higher tourist engagement and steady visitor flow through interactive RCS campaigns.
                </p>
                <div className="grid grid-cols-3 gap-8 border-t border-hairline pt-8">
                  <div>
                    <div className="text-3xl font-semibold text-signal mb-1">45%</div>
                    <div className="text-sm text-dim">Bookings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-signal mb-1">30%</div>
                    <div className="text-sm text-dim">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-signal mb-1">25%</div>
                    <div className="text-sm text-dim">Repeats</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-red-500/10 text-red-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">Retail</div>
                <h3 className="text-3xl text-bone mb-6 font-medium tracking-[-0.02em]">Kalyan Silks</h3>
                <p className="text-xl text-dim mb-8">
                  Increased footfall and customer acquisition with rich media catalogs and instant location sharing.
                </p>
                <div className="grid grid-cols-3 gap-8 border-t border-hairline pt-8">
                  <div>
                    <div className="text-3xl font-semibold text-red-400 mb-1">40%</div>
                    <div className="text-sm text-dim">Engagement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-red-400 mb-1">15%</div>
                    <div className="text-sm text-dim">Leads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-red-400 mb-1">30%</div>
                    <div className="text-sm text-dim">Growth</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-float delay-200">
                <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-3xl opacity-50"></div>
                <div className="relative bg-surface-1 rounded-3xl light-edge p-6 border border-hairline">
                  {/* Mockup Content */}
                  <div className="bg-red-500/10 rounded-2xl p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-red-500/90 rounded-full flex items-center justify-center text-bone font-semibold">KS</div>
                      <div>
                        <div className="font-semibold text-bone">Kalyan Silks</div>
                        <div className="text-xs text-dim">Verified Business</div>
                      </div>
                    </div>
                    <div className="bg-surface-2 rounded-xl p-4 mb-4">
                      <div className="grid grid-cols-2 gap-2 mb-3">
                         <div className="h-20 bg-red-500/10 rounded"></div>
                         <div className="h-20 bg-signal/10 rounded"></div>
                      </div>
                      <p className="text-sm text-dim mb-3">New Wedding Collection is out now! 🌸</p>
                      <div className="grid grid-cols-2 gap-2">
                        <Button size="sm" variant="outline" className="w-full text-xs rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium">View Catalog</Button>
                        <Button size="sm" className="w-full text-xs rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">Visit Store</Button>
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
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-signal rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden light-edge">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl text-bone mb-8 font-medium tracking-[-0.035em] leading-[1.08]">
                Seamless Ecosystem Integration
              </h2>
              <p className="text-bone/75 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Connect RCS with your favorite Google services for payments, AI, and passes.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {integrations.map((integration, index) => (
                  <div key={index} className="bg-bone/[0.06] backdrop-blur-md rounded-2xl p-8 hover:bg-bone/[0.06] transition-all duration-300 transform hover:-translate-y-2 border border-white/10">
                    <div className="bg-surface-2 rounded-xl p-4 mb-6 inline-block light-edge w-20 h-20 flex items-center justify-center mx-auto">
                      <Image
                        src={integration.logo}
                        alt={integration.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl text-bone mb-2 font-medium tracking-[-0.02em]">{integration.name}</h3>
                    <p className="text-bone/75 text-sm">{integration.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-bone text-center mb-20 font-medium tracking-[-0.035em] leading-[1.08]">
            Get Started in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-surface-2 -z-10"></div>
            {[
              { num: "01", title: "Submit KYC", desc: "Connect with us and submit your brand details." },
              { num: "02", title: "Get Verified", desc: "Receive your official Google Verification Badge." },
              { num: "03", title: "Launch", desc: "Start sending rich, interactive campaigns." }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-surface-1 border-4 border-signal/60 text-signal rounded-full flex items-center justify-center text-3xl font-semibold mx-auto mb-8 light-edge group-hover:scale-110 group-hover:bg-signal group-hover:text-ink transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-2xl text-bone mb-4 font-medium tracking-[-0.02em]">{step.title}</h3>
                <p className="text-dim">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Button 
              size="lg" 
              className="px-10 py-6 text-lg rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
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
