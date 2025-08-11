import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Shield, Globe, Database, Code } from "lucide-react"

export default function TechnologyStack() {
  const technologies = [
    {
      category: "AI Models",
      icon: Brain,
      title: "Powered by Advanced LLMs",
      description: "GPT-4, Claude, Gemini, and custom-trained models",
      items: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Custom NLP Models"],
    },
    {
      category: "Integrations",
      icon: Globe,
      title: "Seamless Connectivity",
      description: "Connect with your favorite business tools",
      items: ["Salesforce", "HubSpot", "Shopify", "Google Sheets", "Slack", "Microsoft Teams"],
    },
    {
      category: "APIs",
      icon: Code,
      title: "Developer-Friendly",
      description: "RESTful APIs and Webhooks for seamless integration",
      items: ["REST APIs", "GraphQL", "Webhooks", "SDKs", "Real-time Events"],
    },
    {
      category: "Security",
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC 2 compliant with enterprise-grade security",
      items: ["SOC 2 Type II", "GDPR Compliant", "ISO 27001", "End-to-End Encryption"],
    },
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built on
            <span className="text-[#00D563]"> Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform leverages the latest AI models and enterprise-grade infrastructure to deliver exceptional
            performance
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#E8FFF4] rounded-xl flex items-center justify-center">
                      <tech.icon className="w-6 h-6 text-[#00D563]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#00D563] uppercase tracking-wide">{tech.category}</p>
                      <h3 className="text-xl font-bold text-gray-900">{tech.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600">{tech.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-br from-[#F9FAFB] to-[#E8FFF4] rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Scalable Architecture</h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#00D563] rounded-2xl flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Multi-Channel</h4>
              <p className="text-gray-600">Deploy across web, mobile, WhatsApp, and voice channels</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#00D563] rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Real-Time Processing</h4>
              <p className="text-gray-600">Lightning-fast response times with edge computing</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#00D563] rounded-2xl flex items-center justify-center mx-auto">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Scalable Infrastructure</h4>
              <p className="text-gray-600">Auto-scaling to handle millions of conversations</p>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#00D563]">{"<"}50ms</div>
            <div className="text-gray-600">Average Response Time</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#00D563]">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#00D563]">50+</div>
            <div className="text-gray-600">Languages Supported</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#00D563]">1M+</div>
            <div className="text-gray-600">Messages Processed Daily</div>
          </div>
        </div>
      </div>
    </section>
  )
}
