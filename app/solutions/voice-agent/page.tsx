"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Users, Clock, CheckCircle, Star, Mic, Zap, Shield, TrendingUp, Globe, ArrowRight, Volume2 } from "lucide-react"
import Image from "next/image"

export default function VoiceAgentPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Phone className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Voice Agent
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Natural Voice Conversations
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform customer interactions with AI voice agents that speak naturally, understand context, and provide human-like conversations. Perfect for calls, IVR systems, and voice assistants.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Interface Demo Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Voice AI in Action
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience natural, human-like conversations with our voice AI that understands context, emotion, and intent. Perfect for phone support, sales calls, and customer interactions.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#00D563] mb-1">98%</div>
                  <div className="text-sm text-gray-600">Speech Accuracy</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#00D563] mb-1">200ms</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#00D563] mb-1">12+</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>
            </div>

            {/* Right Voice Interface Visualization */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="flex items-center mb-4 bg-indigo-600 text-white p-3 rounded-lg">
                  <Mic className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Voice AI Assistant</span>
                  <div className="ml-auto flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span className="ml-2 text-sm">Listening</span>
                  </div>
                </div>
                
                {/* Voice Conversation Visualization */}
                <div className="space-y-4">
                  
                  {/* Audio Waveform */}
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(20)].map((_, i) => (
                        <div 
                          key={i}
                          className="bg-indigo-500 rounded-full animate-pulse"
                          style={{
                            width: '3px',
                            height: `${Math.random() * 40 + 10}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-center text-sm text-indigo-600 mt-2">
                      "Hi, I need help with my account balance..."
                    </div>
                  </div>
                  
                  {/* AI Processing */}
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Volume2 className="w-4 h-4 text-yellow-600 mr-2" />
                      <span className="text-sm font-medium">AI Processing</span>
                    </div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div>✓ Speech Recognition: "account balance"</div>
                      <div>✓ Intent Detection: Account Inquiry</div>
                      <div>✓ Sentiment Analysis: Neutral</div>
                      <div>✓ Context: Returning Customer</div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800">AI Response</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">
                      "I'd be happy to help you with your account balance. Let me pull that up for you right now."
                    </div>
                    <div className="text-xs text-gray-500">
                      Voice: Natural • Tone: Helpful • Speed: Optimal
                    </div>
                  </div>

                  {/* Real-time Analytics */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-2">Call Analytics</div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-gray-500">Call Duration</div>
                        <div className="font-semibold text-[#00D563]">2:34</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Confidence</div>
                        <div className="font-semibold text-[#00D563]">96%</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Sentiment</div>
                        <div className="font-semibold text-[#00D563]">Positive</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Resolution</div>
                        <div className="font-semibold text-[#00D563]">In Progress</div>
                      </div>
                    </div>
                  </div>

                  {/* Voice Features */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Active Features</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Noise Cancellation</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Emotion Detection</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Real-time Translation</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Call Recording</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose AI Voice Agents?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced voice technology that delivers natural conversations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Mic className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Natural Speech</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Human-like voice with natural intonation, pauses, and emotional expression for authentic conversations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Real-time Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Advanced speech recognition that understands accents, dialects, and natural language patterns.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Context Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Maintains conversation context and remembers previous interactions for seamless experiences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Secure & Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Enterprise-grade security with encryption, compliance, and audit trails for sensitive conversations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Scalable Voice</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Handle thousands of simultaneous voice conversations without quality degradation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Multi-Language Voice</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Support 50+ languages with native accents and cultural understanding for global audiences.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Your Voice Interactions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI voice agents can revolutionize your customer communications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Key Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Improve Customer Experience</h4>
                    <p className="text-gray-600">Provide instant, natural voice support that customers prefer over traditional IVR systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Call Abandonment</h4>
                    <p className="text-gray-600">Cut call abandonment rates by 70% with engaging, helpful voice interactions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Lower Operational Costs</h4>
                    <p className="text-gray-600">Reduce voice support costs by up to 80% while improving service quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Voice Support</h4>
                    <p className="text-gray-600">Provide round-the-clock voice assistance without the need for human agents on night shifts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-white p-8 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Live Voice Interaction</h4>
                <p className="text-gray-600 mb-6">Real-time voice processing with natural conversation flow and emotion detection.</p>
                
                {/* Voice Interaction Interface */}
                <div className="space-y-4">
                  {/* Active Call Status */}
                  <div className="bg-white/80 backdrop-blur p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-medium text-sm">Active Call</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                        <span className="text-sm text-gray-600">02:34</span>
                      </div>
                    </div>
                    
                    {/* Voice Waveform */}
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg mb-3">
                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(15)].map((_, i) => (
                          <div 
                            key={i}
                            className="bg-indigo-500 rounded-full animate-pulse"
                            style={{
                              width: '3px',
                              height: `${Math.random() * 20 + 8}px`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="text-center text-xs text-indigo-600 mt-2">
                        "Can you help me check my order status?"
                      </div>
                    </div>
                    
                    {/* AI Analysis */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-green-50 p-2 rounded">
                        <span className="text-green-800 font-medium">Sentiment:</span>
                        <span className="text-green-700"> Neutral</span>
                      </div>
                      <div className="bg-blue-50 p-2 rounded">
                        <span className="text-blue-800 font-medium">Intent:</span>
                        <span className="text-blue-700"> Order Inquiry</span>
                      </div>
                      <div className="bg-purple-50 p-2 rounded">
                        <span className="text-purple-800 font-medium">Confidence:</span>
                        <span className="text-purple-700"> 97%</span>
                      </div>
                      <div className="bg-orange-50 p-2 rounded">
                        <span className="text-orange-800 font-medium">Language:</span>
                        <span className="text-orange-700"> English</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Response Generation */}
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center mb-2">
                      <Mic className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800">AI Response</span>
                      <div className="ml-auto flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                        <span className="text-xs text-green-600">Speaking</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">
                      "Of course! Let me look up your order for you. Could you please provide your order number or the email associated with your account?"
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Voice: Natural Female</span>
                      <span>Speed: 1.2x</span>
                      <span>Response: 0.4s</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating animations */}
              <div className="pointer-events-none">
                <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-indigo-500/20 blur-xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-400/20 blur-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Voice Agent Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are transforming voice interactions with AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Customer Service Calls</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Handle customer inquiries, complaints, and support requests with natural voice conversations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Volume2 className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">IVR Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Replace traditional IVR systems with intelligent voice agents that understand natural language.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Appointment Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automate appointment booking, rescheduling, and reminders through natural voice interactions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Order Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Process orders, track shipments, and handle returns through voice conversations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Provide step-by-step troubleshooting and technical assistance through voice interactions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#00D563]" />
                </div>
                <CardTitle className="text-xl">Voice Assistants</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Create custom voice assistants for smart devices, mobile apps, and IoT applications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00D563] to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Voice Interactions?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join innovative companies that have already deployed AI voice agents
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#00D563] px-12 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
