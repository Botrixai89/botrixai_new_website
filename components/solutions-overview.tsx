import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Smartphone, Mic, ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export default function SolutionsOverview() {
  const solutions = [
    {
      icon: MessageCircle,
      title: "Intelligent Website Chatbots",
      category: "💬 Web Agents",
      description:
        "AI-powered conversational agents that engage visitors, capture leads, and provide 24/7 customer support",
      features: ["GenAI Integration", "CRM Sync", "Advanced Analytics"],
      price: "From ₹2,499/month",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: Smartphone,
      title: "WhatsApp Business Automation",
      category: "📱 WhatsApp Marketing",
      description: "Automate customer engagement, run marketing campaigns, and manage conversations at scale",
      features: ["Unlimited Chats", "Broadcast Campaigns", "Smart Automation"],
      price: "From ₹2,499/month",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: Mic,
      title: "AI Voice Assistants",
      category: "🎤 Voice Agents",
      description: "Advanced voice bots for phone support, IVR systems, and voice-based customer interactions",
      features: ["Multi-language", "Custom Integration", "Real-time Analytics"],
      price: "₹0.05/second + Setup",
      color: "bg-purple-50 border-purple-200",
    },
  ]

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete AI Solutions for
            <span className="text-[#00D563]"> Every Channel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your customer interactions across web, WhatsApp, and voice with our comprehensive AI-powered
            platform
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`${solution.color} hover:shadow-xl transition-all duration-300 hover:scale-105 border-2`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  {solution.title === "WhatsApp Business Automation" ? (
                    <Image
                      src="/images/integrations/icons8-whatsapp-48.png"
                      alt="WhatsApp"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  ) : (
                    <solution.icon className="w-12 h-12 text-[#00D563]" />
                  )}
                  <span className="text-2xl">{solution.category.split(" ")[0]}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">{solution.category}</p>
                  <CardTitle className="text-xl font-bold text-gray-900">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-gray-600 leading-relaxed">{solution.description}</CardDescription>

                <div className="space-y-3">
                  <p className="font-semibold text-gray-900">Key Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border"
                      >
                        <Zap className="w-3 h-3 mr-1 text-[#00D563]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Starting Price</p>
                      <p className="text-lg font-bold text-[#00D563]">{solution.price}</p>
                    </div>
                    <Button className="bg-[#00D563] hover:bg-[#00D563]/90 text-white">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#00D563] hover:bg-[#00D563]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore All Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
