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
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "WhatsApp Business API Masterclass",
      description: "Everything you need to know about WhatsApp automation",
      type: "Webinar",
      icon: Video,
      downloads: "1,800+",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Industry Templates Library",
      description: "Pre-built conversation flows for your industry",
      type: "Template Library",
      icon: FileText,
      downloads: "3,200+",
      color: "bg-purple-50 border-purple-200"
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 mb-8">
              <span className="text-sm font-medium text-green-800">Knowledge Hub</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Resources & Learning Center
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Everything you need to master AI automation. From getting started guides to advanced tutorials, industry templates, and thought leadership content.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-[#00D563] to-green-600 hover:from-green-600 hover:to-[#00D563] text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Start Learning
              </Button>
              <Button variant="outline" className="border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300">
                Browse Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Most popular downloads and guides to get you started
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contentSections.map((content, index) => (
              <Card key={index} className={`${content.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[#00D563] rounded-xl flex items-center justify-center">
                      <content.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{content.type}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{content.title}</CardTitle>
                  <CardDescription className="text-gray-600">{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{content.downloads} downloads</span>
                    <Button className="bg-[#00D563] hover:bg-[#00D563]/90 text-white">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get started quickly with these essential resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#00D563] rounded-xl flex items-center justify-center">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{link.title}</h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                  <Button variant="outline" className="w-full border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white">
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pre-built conversation flows tailored for your industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industryTemplates.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                <div className="space-y-3 mb-6">
                  {industry.templates.map((template, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#00D563] rounded-full"></div>
                      <span className="text-gray-700">{template}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-[#00D563] hover:bg-[#00D563]/90 text-white">
                  Download Templates
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive library of resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-[#00D563] rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="space-y-2">
                      {category.resources.map((resource, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-[#00D563] rounded-full"></div>
                          <span className="text-sm text-gray-700">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white">
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay up to date with the latest features and improvements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestUpdates.map((update, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">{update.date}</span>
                    <span className="bg-[#E8FFF4] text-[#00D563] px-3 py-1 rounded-full text-xs font-semibold">
                      {update.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{update.title}</h3>
                  <p className="text-gray-600">{update.description}</p>
                  <Button variant="outline" className="w-full border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white">
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
      <section className="py-24 bg-gradient-to-r from-[#00D563] to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Access all resources and start building your AI automation today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#00D563] px-12 py-4 text-lg font-semibold transition-all duration-300 bg-transparent">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 