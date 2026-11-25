import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Download, Play, BookOpen, FileText, Video, Users, Zap, TrendingUp, Award } from "lucide-react"

export default function ResourcesPage() {
  const contentSections = [
    {
      title: "AI Chatbot Guide",
      description: "Complete guide to building effective AI chatbots that convert",
      type: "E-book",
      icon: BookOpen,
      downloads: "2,500+",
      color: "bg-surface-2 border-hairline"
    },
    {
      title: "WhatsApp Business API Masterclass",
      description: "Everything you need to know about WhatsApp automation",
      type: "Webinar",
      icon: Video,
      downloads: "1,800+",
      color: "bg-surface-2 border-signal/30"
    },
    {
      title: "Industry Templates Library",
      description: "Pre-built conversation flows for your industry",
      type: "Template Library",
      icon: FileText,
      downloads: "3,200+",
      color: "bg-surface-2 border-hairline"
    }
  ]

  const quickLinks = [
    {
      title: "Getting Started",
      description: "Quick setup guide and best practices",
      href: "#",
      icon: Zap
    },
    {
      title: "API Documentation",
      description: "Complete API reference and examples",
      href: "#",
      icon: FileText
    },
    {
      title: "Integration Guides",
      description: "Step-by-step integration tutorials",
      href: "#",
      icon: ArrowRight
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      href: "#",
      icon: Users
    }
  ]

  const resourceCategories = [
    {
      title: "Documentation",
      description: "Comprehensive guides and technical documentation",
      icon: BookOpen,
      resources: [
        "API Reference",
        "SDK Documentation", 
        "Integration Guides",
        "Best Practices"
      ]
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and walkthroughs",
      icon: Video,
      resources: [
        "Getting Started",
        "Advanced Features",
        "Integration Tutorials",
        "Case Studies"
      ]
    },
    {
      title: "Case Studies",
      description: "Real-world implementations and success stories",
      icon: TrendingUp,
      resources: [
        "E-commerce Success",
        "Healthcare Implementation",
        "Banking Solutions",
        "SaaS Automation"
      ]
    },
    {
      title: "Community",
      description: "Connect with other users and share knowledge",
      icon: Users,
      resources: [
        "Developer Forum",
        "User Groups",
        "Webinars",
        "Events"
      ]
    }
  ]

  const latestUpdates = [
    {
      title: "Voice Emotion Detection Beta",
      description: "Try our new real-time emotion analysis feature",
      date: "2024-01-15",
      type: "Feature"
    },
    {
      title: "Healthcare Templates Released",
      description: "HIPAA-compliant conversation templates for healthcare",
      date: "2024-01-10",
      type: "Template"
    },
    {
      title: "API v2.1 Documentation",
      description: "Updated API documentation with new endpoints",
      date: "2024-01-05",
      type: "Documentation"
    }
  ]

  const industryTemplates = [
    {
      industry: "E-commerce",
      templates: [
        "Order Tracking Bot",
        "Product Recommendation",
        "Returns & Refunds",
        "Customer Support"
      ],
      icon: "🛒"
    },
    {
      industry: "Healthcare",
      templates: [
        "Appointment Scheduler",
        "Symptom Checker",
        "Medication Reminder",
        "Insurance Verification"
      ],
      icon: "🏥"
    },
    {
      industry: "Banking",
      templates: [
        "Account Inquiry",
        "Transaction Support",
        "Loan Application",
        "Fraud Detection"
      ],
      icon: "🏦"
    }
  ]

  return (
    <div className="min-h-screen bg-ink">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-surface-1/80 backdrop-blur-sm rounded-full border border-signal/30 mb-8">
              <span className="text-sm font-medium text-signal">Knowledge Hub</span>
            </div>
            <h1 className="text-6xl text-bone mb-8 leading-tight font-medium tracking-[-0.045em]">
              Resources & Learning Center
            </h1>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Everything you need to master AI automation. From getting started guides to advanced tutorials, industry templates, and thought leadership content.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="from-[#0b5d2f] to-[#063a1e] hover:from-[#0b5d2f] hover:to-[#063a1e] px-10 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                Start Learning
              </Button>
              <Button variant="outline" className="px-10 py-4 text-lg transition-all duration-300 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                Browse Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Featured Resources
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Most popular downloads and guides to get you started
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contentSections.map((content, index) => (
              <Card key={index} className={`${content.color} transition-all duration-300 hover:-translate-y-2`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-signal rounded-xl flex items-center justify-center">
                      <content.icon className="w-6 h-6 text-bone" />
                    </div>
                    <span className="text-sm font-medium text-dim">{content.type}</span>
                  </div>
                  <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">{content.title}</CardTitle>
                  <CardDescription className="text-dim">{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dim">{content.downloads} downloads</span>
                    <Button className="rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                      Download
                      <Download className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Quick Access
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Get started quickly with these essential resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-surface-1 p-8 rounded-2xl light-edge transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-signal rounded-xl flex items-center justify-center">
                    <link.icon className="w-6 h-6 text-bone" />
                  </div>
                  <h3 className="text-lg text-bone font-medium tracking-[-0.02em]">{link.title}</h3>
                  <p className="text-dim text-sm">{link.description}</p>
                  <Button variant="outline" className="w-full rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                    Access
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Templates */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Industry Templates
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Pre-built conversation flows tailored for your industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industryTemplates.map((industry, index) => (
              <div key={index} className="bg-surface-1 p-8 rounded-2xl light-edge transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl text-bone mb-4 font-medium tracking-[-0.02em]">{industry.industry}</h3>
                <div className="space-y-3 mb-6">
                  {industry.templates.map((template, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-signal rounded-full"></div>
                      <span className="text-bone/80">{template}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                  Download Templates
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Resource Categories
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive library of resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-surface-1 p-8 rounded-2xl light-edge transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-signal rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-bone" />
                  </div>
                  <div>
                    <h3 className="text-xl text-bone mb-2 font-medium tracking-[-0.02em]">{category.title}</h3>
                    <p className="text-dim text-sm mb-4">{category.description}</p>
                    <div className="space-y-2">
                      {category.resources.map((resource, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-signal rounded-full"></div>
                          <span className="text-sm text-bone/80">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Latest Updates
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto leading-relaxed">
              Stay up to date with the latest features and improvements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestUpdates.map((update, index) => (
              <div key={index} className="bg-surface-1 p-8 rounded-2xl light-edge transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-dim">{update.date}</span>
                    <span className="bg-signal/10 text-signal px-3 py-1 rounded-full text-xs font-semibold">
                      {update.type}
                    </span>
                  </div>
                  <h3 className="text-lg text-bone font-medium tracking-[-0.02em]">{update.title}</h3>
                  <p className="text-dim">{update.description}</p>
                  <Button variant="outline" className="w-full rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 site-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-bone/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            Access all resources and start building your AI automation today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="outline" className="px-12 py-4 text-lg transition-all duration-300 rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 