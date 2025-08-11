"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Hero() {
  const [imageSrc, setImageSrc] = useState<string>(
    "/ChatGPT Image Aug 8, 2025, 08_19_13 PM.png"
  )
  return (
    <section className="relative w-full bg-gradient-to-br from-white via-[#F9FAFB] to-[#E8FFF4] pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      {/* Decorative curved lines background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg
          className="hidden sm:block absolute -right-40 -top-24 h-[120%] w-auto text-[#00D563]/10"
          viewBox="0 0 800 800"
          fill="none"
        >
          <defs>
            <linearGradient id="heroLinesGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#00D563" stopOpacity="0.25" />
              <stop offset="1" stopColor="#00D563" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 9 }).map((_, index) => {
            const y = 40 + index * 70
            const offset = index * 20
            return (
              <path
                key={index}
                d={`M 20 ${y} C ${200 + offset} ${y + 120}, ${450 + offset} ${y + 120}, 780 ${y}`}
                stroke="url(#heroLinesGradient)"
                strokeWidth="1.5"
                fill="none"
              />
            )
          })}
        </svg>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Mobile Image First */}
          <div className="w-full lg:hidden order-1">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={imageSrc}
                  alt="Hero visual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, 50vw"
                  priority
                  onError={() => setImageSrc("/placeholder.jpg")}
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white rounded-full border border-[#00D563]/20 shadow-sm">
              <span className="text-xs sm:text-sm font-medium text-gray-800">🏆 #1 AI Platform for Customer Support Automation</span>
            </div>

            {/* Headlines */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-[#00D563]">Automate Customer Support</span>
                <br />
                <span className="text-gray-900">with AI That Actually</span>
                <br />
                <span className="text-gray-900">Works</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 leading-relaxed">
                Reduce support costs by 60% while improving customer satisfaction. Deploy AI agents in 10 minutes, not 10 weeks.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-gray-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#00D563] rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">60%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 truncate">Cost Reduction</div>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-gray-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#00D563] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">10 min</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 truncate">Deployment</div>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-gray-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#00D563] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">99.9%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 truncate">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-gray-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#00D563] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">200ms</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 truncate">Response Time</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                The only AI platform with real-time voice emotion detection, zero-code deployment, and industry-specific AI models. Trusted by 500+ businesses worldwide.
              </p>
              <div className="flex items-center space-x-2 text-[#00D563] font-medium">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Powered by Advanced AI Models (GPT-4, Claude, Custom)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent"
              >
                Watch Live Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Trusted by leading companies worldwide</p>
              <div className="relative overflow-hidden">
                <div className="flex items-center space-x-6 sm:space-x-12 animate-marquee">
                  {/* First set of logos */}
                  <div className="flex items-center space-x-6 sm:space-x-12 min-w-max">
                    <div className="flex items-center space-x-2 sm:space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-1.5 sm:p-2">
                        <Image 
                          src="/images/integrations/icons8-salesforce-50.png" 
                          alt="Salesforce" 
                          width={24} 
                          height={24} 
                          className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">Salesforce</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-zendesk-50.png" 
                          alt="Zendesk" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">Zendesk</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-hubspot-24.png" 
                          alt="HubSpot" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">HubSpot</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-slack-48.png" 
                          alt="Slack" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">Slack</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-stripe-48.png" 
                          alt="Stripe" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">Stripe</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-paypal-48.png" 
                          alt="PayPal" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">PayPal</span>
                    </div>
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex items-center space-x-12 min-w-max">
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-salesforce-50.png" 
                          alt="Salesforce" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">Salesforce</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-zendesk-50.png" 
                          alt="Zendesk" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">Zendesk</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-hubspot-24.png" 
                          alt="HubSpot" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">HubSpot</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-slack-48.png" 
                          alt="Slack" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">Slack</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-stripe-48.png" 
                          alt="Stripe" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">Stripe</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                        <Image 
                          src="/images/integrations/icons8-paypal-48.png" 
                          alt="PayPal" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">PayPal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block relative order-2">
            <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden w-full max-w-[560px] mx-auto">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt="Hero visual"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                  onError={() => setImageSrc("/placeholder.jpg")}
                />
              </div>
            </div>

            {/* Optional background accents */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#00D563]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#00D563]/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
