import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { CheckCircle, Globe, Sparkles, MessageSquare, Brain, Zap, Settings, Bot, Workflow, Target, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
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
              { title: "Response Time \u003c1 sec", desc: "Lightning-fast responses that keep customers engaged." },
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

      {/* AI Technology Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our AI Technology Stack</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our advanced AI agents and automation transform customer interactions
            </p>
          </div>

          {/* Interactive AI Workflow */}
          <div className="bg-white rounded-2xl p-8 mb-12 border-2 border-black shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🤖 AI Agent Workflow & Automation
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Input Processing */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h5 className="font-semibold mb-2">Input Processing</h5>
                  <p className="text-sm opacity-90">Multi-channel input analysis with NLP</p>
                </div>
              </div>

              {/* AI Understanding */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h5 className="font-semibold mb-2">AI Understanding</h5>
                  <p className="text-sm opacity-90">Intent recognition & context analysis</p>
                </div>
              </div>

              {/* Smart Response */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h5 className="font-semibold mb-2">Smart Response</h5>
                  <p className="text-sm opacity-90">Personalized AI-generated responses</p>
                </div>
              </div>

              {/* Action Execution */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h5 className="font-semibold mb-2">Action Execution</h5>
                  <p className="text-sm opacity-90">Automated task completion</p>
                </div>
              </div>
            </div>

            {/* AI Capabilities Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Real-time Processing */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">⚡ Real-time AI Processing</h5>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Natural Language Processing</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Sentiment Analysis</span>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Processing</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Context Awareness</span>
                    </div>
                    <span className="text-sm text-purple-600 font-medium">Learning</span>
                  </div>
                </div>
              </div>
              
              {/* Right: Automation Features */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">🔧 Automation Features</h5>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white text-center hover:scale-105 transform transition-all duration-300">
                    <Bot className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">Smart Routing</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg text-white text-center hover:scale-105 transform transition-all duration-300">
                    <Workflow className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">Process Automation</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg text-white text-center hover:scale-105 transform transition-all duration-300">
                    <Target className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">Predictive Analytics</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg text-white text-center hover:scale-105 transform transition-all duration-300">
                    <Sparkles className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">Auto-Learning</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-2xl font-bold text-blue-600">&lt; 1sec</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
            </div>
          </div>

          {/* AI Agent Types */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/images/integrations/icons8-whatsapp-48.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">WhatsApp Agent</h5>
              <p className="text-gray-600 mb-4">Intelligent WhatsApp bots for seamless customer interactions on the world's most popular messaging platform</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Multi-turn conversations</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Rich media support</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Business API integration</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">Voice AI</h5>
              <p className="text-gray-600 mb-4">Intelligent voice agents for phone-based customer interactions</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Speech-to-text</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Voice synthesis</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Real-time processing</li>
              </ul>
          </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-600" />
            </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">Web Agents</h5>
              <p className="text-gray-600 mb-4">Smart web-based assistants integrated across digital touchpoints</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Website integration</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Live chat support</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Proactive engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


