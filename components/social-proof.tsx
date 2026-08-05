import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, TrendingUp, Users, Clock, Award } from "lucide-react"

export default function SocialProof() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Head of Customer Experience",
      company: "TechFlow Solutions",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "BotrixAI reduced our support costs by 65% while improving customer satisfaction scores from 72% to 94%. The voice emotion detection feature is a game-changer for our call center.",
      rating: 5,
      metric: "65% cost reduction, 94% satisfaction",
      industry: "SaaS"
    },
    {
      name: "Rajesh Kumar",
      role: "Operations Director",
      company: "E-Commerce Plus",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Our WhatsApp automation handles 80% of customer queries automatically. The integration with our Shopify store is seamless, and we've seen a 3x increase in conversion rates.",
      rating: 5,
      metric: "80% automation, 3x conversions",
      industry: "E-commerce"
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Chief Medical Officer",
      company: "HealthFirst Clinic",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "The HIPAA-compliant AI agents handle patient scheduling and basic inquiries 24/7. Our staff can focus on critical care while patients get instant responses.",
      rating: 5,
      metric: "24/7 patient support, HIPAA compliant",
      industry: "Healthcare"
    },
  ]

  const companies = [
    "Shopify",
    "Zendesk", 
    "HubSpot",
    "Salesforce",
    "Microsoft",
    "Adobe"
  ]

  const successMetrics = [
    { value: "60%", label: "Average Cost Reduction", icon: TrendingUp },
    { value: "200ms", label: "Average Response Time", icon: Clock },
    { value: "500+", label: "Enterprise Customers", icon: Users },
    { value: "99.99%", label: "Uptime SLA", icon: Award },
  ]

  const industryCaseStudies = [
    {
      industry: "E-commerce",
      logo: "🛒",
      metrics: ["40% increase in conversion", "70% reduction in support tickets", "3x faster order processing"],
      customers: ["FashionHub", "TechStore", "HomeGoods"]
    },
    {
      industry: "Healthcare",
      logo: "🏥",
      metrics: ["24/7 patient support", "HIPAA compliant", "50% faster appointment booking"],
      customers: ["HealthFirst", "MedCare", "WellnessPlus"]
    },
    {
      industry: "Banking",
      logo: "🏦",
      metrics: ["SOC 2 Type II compliant", "Real-time fraud detection", "90% query resolution"],
      customers: ["SecureBank", "DigitalFinance", "TrustCredit"]
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by
            <span className="text-[#00D563]"> Fortune 500 Companies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join industry leaders who have transformed their customer engagement with BotrixAI
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20 bg-gradient-to-r from-[#E8FFF4] to-[#F0FFF8] rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {successMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-[#00D563] rounded-xl flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#00D563]">{metric.value}</div>
                <div className="text-gray-700 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Case Studies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry-Specific Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {industryCaseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{study.logo}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{study.industry}</h4>
                <div className="space-y-3 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#00D563] rounded-full"></div>
                      <span className="text-gray-700 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  Trusted by: {study.customers.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Industry Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-[#E8FFF4] rounded-full">
                    <span className="text-sm font-medium text-[#00D563]">{testimonial.industry}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-[#00D563] opacity-20 absolute -top-2 -left-2" />
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                  </div>

                  {/* Metric Highlight */}
                  <div className="bg-[#E8FFF4] rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-[#00D563]">{testimonial.metric}</div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards/Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Enterprise Certifications & Awards</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8FFF4] rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-8 h-8 text-[#00D563]" />
              </div>
              <div className="text-sm font-medium text-gray-600">SOC 2 Type II</div>
              <div className="text-xs text-gray-500">Compliant</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8FFF4] rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-8 h-8 text-[#00D563]" />
              </div>
              <div className="text-sm font-medium text-gray-600">GDPR</div>
              <div className="text-xs text-gray-500">Certified</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8FFF4] rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-8 h-8 text-[#00D563]" />
              </div>
              <div className="text-sm font-medium text-gray-600">HIPAA</div>
              <div className="text-xs text-gray-500">Compliant</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8FFF4] rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-8 h-8 text-[#00D563]" />
              </div>
              <div className="text-sm font-medium text-gray-600">ISO 27001</div>
              <div className="text-xs text-gray-500">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
