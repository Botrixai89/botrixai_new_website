"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, MessageCircle, Smartphone, Mic, ArrowRight, Send, Bot, User, Zap, Clock, TrendingUp, Volume2 } from "lucide-react"

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState("web-agents")
  const [isPlaying, setIsPlaying] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", message: "Hi! I'm your AI assistant. How can I help you today?", time: "Just now" },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [showWaveform, setShowWaveform] = useState(false)

  // Demo sequences for different tabs
  const demoSequences = {
    "web-agents": [
      { type: "bot", message: "Hi! I'm your AI assistant. How can I help you today?", time: "Just now" },
      { type: "user", message: "I need help with my order", time: "Just now" },
      { type: "bot", message: "I'd be happy to help! Can you provide your order number?", time: "Just now" },
      { type: "user", message: "It's #ORD-2024-001", time: "Just now" },
      { type: "bot", message: "Perfect! I found your order. It's currently being processed and will ship within 24 hours. You'll receive tracking information via email.", time: "Just now" }
    ],
    "whatsapp": [
      { type: "bot", message: "🚀 Welcome to our store! Check out our latest offers:", time: "Just now" },
      { type: "user", message: "Show me the deals", time: "Just now" },
      { type: "bot", message: "🎉 FLASH SALE: 50% off on all items!\n⏰ Limited time offer\n🛒 Use code: FLASH50", time: "Just now" },
      { type: "user", message: "I want to buy a laptop", time: "Just now" },
      { type: "bot", message: "Great choice! 💻 Here are our top laptop deals:\n\n1. MacBook Air M2 - ₹89,999 (was ₹1,19,999)\n2. Dell XPS 13 - ₹64,999 (was ₹84,999)\n3. HP Pavilion - ₹39,999 (was ₹54,999)\n\nWhich one interests you?", time: "Just now" }
    ],
    "voice-agents": [
      { type: "bot", message: "Hello! I'm your AI voice assistant. How can I help you today?", time: "Just now" },
      { type: "user", message: "I need to schedule an appointment", time: "Just now" },
      { type: "bot", message: "I'd be happy to help! What type of appointment do you need?", time: "Just now" },
      { type: "user", message: "Doctor appointment for next week", time: "Just now" },
      { type: "bot", message: "I can help schedule that. I have availability on Tuesday at 2 PM or Thursday at 10 AM. Which works better for you?", time: "Just now" }
    ]
  }

  // Auto-play demo functionality
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && demoStep < demoSequences[activeTab as keyof typeof demoSequences].length) {
      setIsTyping(true)
      interval = setTimeout(() => {
        setChatMessages(demoSequences[activeTab as keyof typeof demoSequences].slice(0, demoStep + 1))
        setDemoStep(prev => prev + 1)
        setIsTyping(false)
      }, 2000)
    } else if (demoStep >= demoSequences[activeTab as keyof typeof demoSequences].length) {
      setIsPlaying(false)
    }
    return () => clearTimeout(interval)
  }, [isPlaying, demoStep, activeTab])

  // Reset demo when changing tabs
  useEffect(() => {
    setIsPlaying(false)
    setDemoStep(0)
    setChatMessages([demoSequences[activeTab as keyof typeof demoSequences][0]])
  }, [activeTab])

  // Start/stop demo
  const toggleDemo = () => {
    if (!isPlaying && demoStep >= demoSequences[activeTab as keyof typeof demoSequences].length) {
      // Restart demo
      setDemoStep(0)
      setChatMessages([demoSequences[activeTab as keyof typeof demoSequences][0]])
    }
    setIsPlaying(!isPlaying)
  }

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
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-green-400'}`}></div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 max-h-80 overflow-y-auto">
              <div className="space-y-3">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`animate-fadeIn ${msg.type === 'user' ? 'ml-auto' : ''} max-w-xs`}>
                    <div className={`rounded-lg p-3 ${
                      msg.type === 'bot' 
                        ? 'bg-white' 
                        : 'bg-[#00D563] text-white ml-auto'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.type === 'bot' ? 'text-gray-500' : 'opacity-70'}`}>{msg.time}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-white rounded-lg p-3 max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
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
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-green-400'}`}></div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 max-h-80 overflow-y-auto">
              <div className="space-y-3">
                {activeTab === 'whatsapp' && chatMessages.map((msg, index) => (
                  <div key={index} className={`animate-fadeIn ${msg.type === 'user' ? 'ml-auto' : ''} max-w-xs`}>
                    <div className={`rounded-lg p-3 ${
                      msg.type === 'bot' 
                        ? 'bg-white' 
                        : 'bg-green-500 text-white ml-auto'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.type === 'bot' ? 'text-gray-500' : 'opacity-70'}`}>{msg.time}</p>
                    </div>
                  </div>
                ))}
                {isTyping && activeTab === 'whatsapp' && (
                  <div className="bg-white rounded-lg p-3 max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
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
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-green-400'}`}></div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 max-h-80 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-red-400 animate-pulse' : 'bg-gray-400'}`}></div>
                  <span className="text-sm text-gray-600">{isPlaying ? 'Call in progress...' : 'Call ready'}</span>
                  <Volume2 className="w-4 h-4 text-purple-500" />
                </div>
                
                {/* Voice Waveform Animation */}
                {isPlaying && (
                  <div className="flex items-center justify-center space-x-1 py-2">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-purple-400 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 20 + 10}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '0.8s'
                        }}
                      />
                    ))}
                  </div>
                )}

                {activeTab === 'voice-agents' && chatMessages.map((msg, index) => (
                  <div key={index} className={`animate-fadeIn ${msg.type === 'user' ? 'ml-auto' : ''} max-w-xs`}>
                    <div className={`rounded-lg p-3 ${
                      msg.type === 'bot' 
                        ? 'bg-white' 
                        : 'bg-purple-500 text-white ml-auto'
                    }`}>
                      {msg.type === 'bot' && <span className="text-sm mr-1">🎵</span>}
                      <p className="text-sm whitespace-pre-line">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.type === 'bot' ? 'text-gray-500' : 'opacity-70'}`}>{msg.time}</p>
                    </div>
                  </div>
                ))}
                {isTyping && activeTab === 'voice-agents' && (
                  <div className="bg-white rounded-lg p-3 max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
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
                <button 
                  onClick={toggleDemo}
                  className="w-12 h-12 bg-[#00D563] hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer group"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  )}
                </button>
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
