"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, MessageCircle, Smartphone, Mic, ArrowRight, Send, Bot, User, Zap, Clock, TrendingUp } from "lucide-react"

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState("web-agents")
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", message: "Hi! I'm your AI assistant. How can I help you today?", time: "Just now" },
    { type: "user", message: "I need help with my order", time: "Just now" },
    { type: "bot", message: "I'd be happy to help! Can you provide your order number?", time: "Just now" }
  ])
  const [inputMessage, setInputMessage] = useState("")

  const demos = {
    "web-agents": {
      title: "Web Agents Demo",
      description: "See how our AI chatbots engage visitors and capture leads",
      content: (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-[#00D563] rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">BotrixAI Assistant</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Hi! I'm your AI assistant. How can I help you today?</p>
                  <p className="text-xs text-gray-500 mt-1">Just now</p>
                </div>
                <div className="bg-[#00D563] text-white rounded-lg p-3 max-w-xs ml-auto">
                  <p className="text-sm">I need help with my order</p>
                  <p className="text-xs opacity-70 mt-1">Just now</p>
                </div>
                <div className="bg-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">I'd be happy to help! Can you provide your order number?</p>
                  <p className="text-xs text-gray-500 mt-1">Just now</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#00D563]">200ms</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#00D563]">95%</div>
                <div className="text-sm text-gray-600">Resolution Rate</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    "whatsapp": {
      title: "WhatsApp Business Demo",
      description: "Experience seamless WhatsApp automation and marketing",
      content: (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">WhatsApp Business</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">🚀 Welcome to our store! Check out our latest offers:</p>
                </div>
                <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs ml-auto">
                  <p className="text-sm">Show me the deals</p>
                </div>
                <div className="bg-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">🎉 FLASH SALE: 50% off on all items!</p>
                  <p className="text-sm">⏰ Limited time offer</p>
                  <p className="text-sm">🛒 Use code: FLASH50</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#00D563]">80%</div>
                <div className="text-sm text-gray-600">Automation Rate</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#00D563]">3x</div>
                <div className="text-sm text-gray-600">Engagement</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    "voice-agents": {
      title: "Voice Agents Demo",
      description: "Advanced voice assistants with emotion detection",
      content: (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <Mic className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">Voice Assistant</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Call in progress...</span>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm">🎵 "Hello! I'm your AI assistant. How can I help you today?"</p>
                </div>
                <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs ml-auto">
                  <p className="text-sm">I need to schedule an appointment</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm">I'd be happy to help! What type of appointment do you need?</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#00D563]">200ms</div>
                <div className="text-xs text-gray-600">Response</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#00D563]">99.9%</div>
                <div className="text-xs text-gray-600">Accuracy</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#00D563]">😊</div>
                <div className="text-xs text-gray-600">Emotion</div>
              </div>
            </div>
          </div>
        </div>
      ),
    }
  }

  function handleSendMessage() {
    if (!inputMessage.trim()) return

    const newMessage = {
      type: "user" as const,
      message: inputMessage,
      time: "Just now"
    }

    setChatMessages(prev => [...prev, newMessage])
    setInputMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: "bot" as const,
        message: "Thank you for your message! I'm processing your request and will get back to you shortly.",
        time: "Just now"
      }
      setChatMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const demoStats = [
    { icon: Clock, value: "200ms", label: "Response Time" },
    { icon: TrendingUp, value: "99.9%", label: "Accuracy" },
    { icon: Zap, value: "24/7", label: "Availability" }
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See BotrixAI in
            <span className="text-[#00D563]"> Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience our AI agents across different channels. Try the interactive demos below to see how they work in real-time.
          </p>
        </div>

        {/* Demo Stats */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {demoStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#00D563] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(demos).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#00D563] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {demos[tab as keyof typeof demos].title}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Display */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {demos[activeTab as keyof typeof demos].title}
                  </h3>
                  <p className="text-gray-600">
                    {demos[activeTab as keyof typeof demos].description}
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#00D563] rounded-xl flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {demos[activeTab as keyof typeof demos].content}
            </div>
          </div>

          {/* Demo Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00D563] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Processing</h4>
                    <p className="text-gray-600 text-sm">Instant responses with sub-200ms latency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00D563] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Context Awareness</h4>
                    <p className="text-gray-600 text-sm">Maintains conversation context across sessions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00D563] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-language Support</h4>
                    <p className="text-gray-600 text-sm">50+ languages with regional dialects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00D563] to-green-600 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Try?</h3>
              <p className="mb-4 sm:mb-6 text-green-100 text-sm sm:text-base leading-relaxed">
                Start your free trial and experience the power of AI automation
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-[#00D563] bg-transparent font-semibold transition-all duration-300"
                onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
