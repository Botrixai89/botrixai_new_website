"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Particles from "@/components/particles"

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-32 sm:pt-40 pb-20 overflow-hidden flex flex-col items-center justify-center text-center">

      {/* Animated Background Effects */}
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0 w-full h-full"
          quantity={300}
          staticity={30} // Lower = move more with mouse
          ease={50}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/20 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-300/20 blur-[100px] rounded-full pointer-events-none z-0 animate-blob mix-blend-multiply filter" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-200/20 blur-[100px] rounded-full pointer-events-none z-0 animate-blob animation-delay-2000 mix-blend-multiply filter" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">

        {/* New Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-8 animate-fadeUp" style={{ animationDelay: '0ms' }}>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider">New</span>
          <span className="text-sm text-emerald-800 font-medium">BotrixAI 2.0 is here</span>
          <ArrowRight className="w-3 h-3 text-emerald-500" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-[1.1] animate-fadeUp" style={{ animationDelay: '100ms' }}>
          Intelligent Automation for <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">Modern Businesses.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeUp" style={{ animationDelay: '200ms' }}>
          BotrixAI brings AI automation to your fingertips to streamline tasks, reduce costs, and delight your customers instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fadeUp" style={{ animationDelay: '300ms' }}>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
          >
            Get in touch <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Trusted By Section (Moved to bottom center) */}
        <div className="mt-24 w-full animate-fadeUp" style={{ animationDelay: '500ms' }}>
          <p className="text-sm text-gray-500 font-medium mb-8">Trusted by 50+ businesses worldwide</p>
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto mask-linear-fade">
            <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
              {/* Set 1 */}
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-salesforce-50.png" alt="Salesforce" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">Salesforce</span>
              </div>
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-zendesk-50.png" alt="Zendesk" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">Zendesk</span>
              </div>
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-hubspot-24.png" alt="HubSpot" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">HubSpot</span>
              </div>
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-slack-48.png" alt="Slack" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">Slack</span>
              </div>
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-stripe-48.png" alt="Stripe" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">Stripe</span>
              </div>

              {/* Set 2 (Duplicate) */}
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-salesforce-50.png" alt="Salesforce" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">Salesforce</span>
              </div>
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-zendesk-50.png" alt="Zendesk" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">Zendesk</span>
              </div>
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-hubspot-24.png" alt="HubSpot" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">HubSpot</span>
              </div>
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-slack-48.png" alt="Slack" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">Slack</span>
              </div>
              <div className="flex items-center gap-2 min-w-[120px]">
                <Image src="/images/integrations/icons8-stripe-48.png" alt="Stripe" width={24} height={24} className="object-contain" />
                <span className="font-semibold text-gray-400">Stripe</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
