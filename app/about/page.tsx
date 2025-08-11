import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { CheckCircle, Globe, Leaf, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm text-gray-600 border border-gray-200 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-[#00D563] mr-2" /> About BotrixAI
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Building the future of AI-powered customer engagement
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              BotrixAI is a global leader in AI-powered customer service solutions, delivering cutting-edge chatbot and AI agent automation to revolutionize customer interactions. Our platform enables businesses to provide instant, personalized, and intelligent support across multiple channels, 24/7.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-[#00D563]/20 blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-400/20 blur-2xl animate-pulse" />
            <Image
              src={"/ChatGPT Image Aug 8, 2025, 09_21_02 PM.png"}
              alt="BotrixAI Team"
              width={900}
              height={700}
              priority
              className="rounded-2xl shadow-2xl ring-1 ring-gray-200 bg-white object-cover"
            />
          </div>
        </div>
      </section>

      {/* Empowering */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Empowering businesses with AI-driven automation</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Seamless human-like conversations</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Global reach with multi-language support</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Be part of the future of AI-driven customer engagement</span></li>
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                At BotrixAI, our mission is to empower businesses with advanced AI solutions that enhance customer experience, streamline operations, and drive growth.
              </p>
              <p><span className="font-semibold">Enhance Customer Experience:</span> Personalized AI interactions that understand and anticipate customer needs.</p>
              <p><span className="font-semibold">Streamline Operations:</span> Automation that reduces costs and improves efficiency.</p>
              <p><span className="font-semibold">Drive Business Growth:</span> Always-on support that scales effortlessly.</p>
              <p>We believe the future lies in the perfect blend of human-like AI interactions and intelligent automation.</p>
            </div>
          </div>
          <div className="relative bg-white rounded-2xl p-6 shadow-xl overflow-hidden">
            <Globe className="pointer-events-none absolute top-4 right-4 w-12 h-12 text-blue-400/20 animate-float" strokeWidth={1.5} />
            <h4 className="text-xl font-semibold text-gray-900 mb-4">At a glance</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#00D563] mr-2" /> Response time under 1 second</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#00D563] mr-2" /> 50+ languages supported</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#00D563] mr-2" /> Multi-channel: chat, web, voice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Conversational AI", desc: "Intelligent assistants that understand context and intent with human-like interactions." },
              { title: "Speech AI", desc: "Advanced speech-to-text and text-to-speech for natural voice interactions." },
              { title: "Agent Assist", desc: "Co-pilots that boost agent productivity with real-time suggestions and knowledge." },
              { title: "Cognitive Search", desc: "RAG-based knowledge retrieval for accurate, context-aware answers." },
              { title: "Response Time <1 sec", desc: "Lightning-fast responses that keep customers engaged." },
              { title: "Multi-Language", desc: "Seamless global communication across 50+ languages." },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-white">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Solutions</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>24/7 Real-time Support – Chatbots handle customer queries instantly.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Product Recommendations – AI-driven suggestions tailored to user needs.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Self-service Automation – Reduce wait times with intelligent problem-solving.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Intelligent IVR – AI-powered voice support for customer inquiries.</span></li>
          </ul>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose BotrixAI?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Seamless Customer Experience", d: "Human-like AI conversations for superior engagement." },
              { t: "Cost Efficiency & Scalability", d: "Automate interactions to cut costs and scale easily." },
              { t: "Data-driven Insights", d: "Analytics to track trends and optimize experiences." },
              { t: "Continuous Improvement", d: "Models that learn and improve over time." },
              { t: "Industry Expertise", d: "Solutions tailored for banking, insurance, e‑commerce, telecom and more." },
            ].map((k, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-white">
                <h4 className="font-semibold text-gray-900 mb-2">{k.t}</h4>
                <p className="text-gray-600">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Leaf className="w-6 h-6 text-emerald-500 mr-2" />
            <h3 className="text-3xl font-bold text-gray-900">Sustainability & Carbon Reduction Commitment</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-4 text-gray-700">
              <p><span className="font-semibold">Energy Efficiency:</span> Optimized AI infrastructure for lower energy consumption.</p>
              <p><span className="font-semibold">Renewable Energy Adoption:</span> Transitioning to 100% sustainable power sources by 2025.</p>
              <p><span className="font-semibold">Eco-Friendly Practices:</span> Reducing carbon footprint through AI-driven efficiency.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Our 2023 Carbon Emissions Baseline</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Scope 1 (Direct Emissions) – 1.5 tCO₂e</li>
                <li>Scope 2 (Indirect Energy) – 11.5 tCO₂e</li>
                <li>Scope 3 (Value Chain) – 1,582 tCO₂e</li>
                <li className="font-semibold">Total Carbon Footprint – 1,595 tCO₂e</li>
                <li className="text-emerald-600">Committed to reducing emissions by 15% annually</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


