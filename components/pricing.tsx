import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Pricing() {
  const webAgentPlans = [
    {
      name: "Starter",
      price: "₹2,499",
      period: "/month",
      description: "For Small Businesses",
      features: [
        "Basic GenAI Bot",
        "Normal Integration",
        "Email Support",
        "Basic Analytics",
        "Up to 1,000 conversations/month",
        "Standard response time",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "₹5,999",
      period: "/month",
      description: "Most Popular",
      features: [
        "Advanced GenAI Bot",
        "CRM Integration",
        "Advanced Analytics",
        "Priority Support",
        "Google Sheets Integration",
        "Up to 10,000 conversations/month",
        "Custom branding",
        "API access",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For Large Organizations",
      features: [
        "Custom AI Models",
        "Dedicated Support",
        "Advanced Integration",
        "White-label Solution",
        "Unlimited conversations",
        "Custom SLA",
        "On-premise deployment",
        "Advanced security features",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const whatsappPlans = [
    {
      name: "Starter",
      price: "₹2,499",
      period: "/month",
      features: [
        "Up to 1,000 messages/month",
        "Basic automation",
        "Contact management",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "Growth",
      price: "₹4,999",
      period: "/month",
      features: [
        "Up to 10,000 messages/month",
        "Advanced automation",
        "Broadcast campaigns",
        "Advanced analytics",
        "Priority support",
        "API access",
      ],
    },
    {
      name: "Pro",
      price: "₹9,999",
      period: "/month",
      features: [
        "Unlimited messages",
        "Advanced AI responses",
        "Multi-agent support",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Simple, Transparent
            <span className="text-[#00D563]"> Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. Start free, scale as you grow.
          </p>
        </div>

        {/* Web Agents Pricing */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Web Agents Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {webAgentPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-2 border-[#00D563] shadow-xl sm:scale-105" : "border border-gray-200"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#00D563] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-6 sm:pb-8">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600">{plan.description}</CardDescription>
                  <div className="mt-3 sm:mt-4">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm sm:text-base text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D563] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-[#00D563] hover:bg-[#00D563]/90 text-white" : "border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white"}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* WhatsApp Marketing Pricing */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <Image
              src="/images/integrations/icons8-whatsapp-48.png"
              alt="WhatsApp"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">WhatsApp Marketing Pricing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whatsappPlans.map((plan, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center pb-6 sm:pb-8">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <Image
                      src="/images/integrations/icons8-whatsapp-48.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                    />
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm sm:text-base text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D563] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#00D563] hover:bg-[#00D563]/90 text-white">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Voice Agents Pricing */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Voice Agents Pricing</h3>
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00D563]">₹0.05</div>
              <div className="text-lg sm:text-xl text-gray-600">per second + Setup fee</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="space-y-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D563] mx-auto" />
                <div className="text-sm sm:text-base font-semibold">Multi-language Support</div>
                <div className="text-xs sm:text-sm text-gray-600">Support for 50+ languages</div>
              </div>
              <div className="space-y-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D563] mx-auto" />
                <div className="text-sm sm:text-base font-semibold">Custom Integration</div>
                <div className="text-xs sm:text-sm text-gray-600">Seamless API integration</div>
              </div>
              <div className="space-y-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D563] mx-auto" />
                <div className="text-sm sm:text-base font-semibold">Real-time Analytics</div>
                <div className="text-xs sm:text-sm text-gray-600">Detailed call analytics</div>
              </div>
            </div>
            <Button size="lg" className="bg-[#00D563] hover:bg-[#00D563]/90 text-white">
              Start Voice Agent Trial
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
