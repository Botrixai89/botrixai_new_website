import { Globe, Bot, BarChart3, Zap, Shield, Rocket, Brain, Mic, Eye, Lock, Settings, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Real-time Voice Emotion Detection",
      description:
        "First AI platform with live emotion analysis during voice calls. Understand customer sentiment and escalate when needed.",
      unique: true,
      technical: "Advanced NLP + Audio Processing"
    },
    {
      icon: Zap,
      title: "Zero-Code Visual Builder",
      description:
        "Deploy AI agents in 10 minutes with our drag-and-drop conversation builder. No technical skills required.",
      unique: true,
      technical: "Visual Flow Designer"
    },
    {
      icon: Globe,
      title: "Industry-Specific AI Models",
      description:
        "Pre-trained models for E-commerce, Healthcare, Banking, and SaaS. 40% better accuracy than generic AI.",
      unique: true,
      technical: "Custom Fine-tuned Models"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Insights",
      description: "Real-time performance metrics, customer journey mapping, and predictive analytics for optimization.",
      unique: false,
      technical: "Real-time Dashboard"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "SOC 2 Type II, GDPR, HIPAA compliant with end-to-end encryption and role-based access controls.",
      unique: false,
      technical: "Bank-grade Security"
    },
    {
      icon: Rocket,
      title: "Auto-scaling Infrastructure",
      description: "Handles millions of conversations with 99.99% uptime. Scales automatically based on demand.",
      unique: false,
      technical: "Cloud-native Architecture"
    },
  ]

  const technicalSpecs = [
    {
      icon: Zap,
      metric: "Response Time",
      value: "< 200ms",
      description: "Average response time across all channels"
    },
    {
      icon: Shield,
      metric: "Uptime",
      value: "99.99%",
      description: "Enterprise-grade reliability SLA"
    },
    {
      icon: Globe,
      metric: "Languages",
      value: "50+",
      description: "Multi-language support with regional dialects"
    },
    {
      icon: Settings,
      metric: "Integrations",
      value: "100+",
      description: "Pre-built integrations with popular platforms"
    }
  ]

  const uniqueAdvantages = [
    {
      title: "Voice Emotion Detection",
      description: "Only platform with real-time emotion analysis during voice calls",
      impact: "Improves customer satisfaction by 35%"
    },
    {
      title: "Industry-Specific AI",
      description: "Pre-trained models for your specific industry",
      impact: "40% better accuracy than generic AI solutions"
    },
    {
      title: "Zero-Code Deployment",
      description: "Deploy in minutes, not weeks",
      impact: "10x faster implementation than competitors"
    }
  ]

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose
            <span className="text-[#00D563]"> BotrixAI?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Built for modern businesses that demand performance, security, and scalability in their AI solutions
          </p>
        </div>

        {/* Unique Advantages */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">What Makes Us Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {uniqueAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-[#00D563]/10 to-green-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-[#00D563]/20">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00D563] rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">{advantage.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{advantage.description}</p>
                  <div className="bg-white rounded-lg p-2 sm:p-3">
                    <div className="text-xs sm:text-sm font-semibold text-[#00D563]">{advantage.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl border-2 border-[#00D563] transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center bg-[#00D563] group-hover:bg-[#00D563] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-colors duration-300" />
                  </div>
                  {feature.unique && (
                    <div className="bg-[#00D563] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                      UNIQUE
                    </div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-xs sm:text-sm font-medium text-gray-700">{feature.technical}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mb-16 sm:mb-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Technical Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00D563] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <spec.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{spec.value}</div>
                <div className="text-sm sm:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">{spec.metric}</div>
                <div className="text-xs sm:text-sm text-gray-600">{spec.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#00D563] to-[#00B553] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-green-100">Enterprise Customers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">60%</div>
              <div className="text-xs sm:text-sm text-green-100">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">99.99%</div>
              <div className="text-xs sm:text-sm text-green-100">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-green-100">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
