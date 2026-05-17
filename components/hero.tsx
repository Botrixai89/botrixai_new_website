"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <>
      <style>{`
        /* ── Fade-up utility ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          opacity: 0;
          animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* ── Marquee ── */
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <section className="relative w-full bg-white pt-28 sm:pt-32 pb-12 overflow-hidden flex flex-col items-center justify-center">

        {/* ── Watermark — vertical, right edge, ALL screen sizes ── */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none z-0">
          <span
            className="font-extrabold text-black/[0.04] leading-none tracking-tighter whitespace-nowrap"
            style={{
              fontSize: 'clamp(40px, 10vw, 140px)',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
            }}
          >
            BotrixAI
          </span>
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-6 sm:mt-0">

          {/* Left — Text */}
          <div className="flex-1 min-w-0 text-center lg:text-left">

            {/* Headline */}
            <h1
              className="animate-fadeUp text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ animationDelay: '200ms' }}
            >
              Best AI Automation <br className="hidden sm:block" />
              Platform &amp;{' '}
              <span className="text-green-600">
                WhatsApp <br className="hidden sm:block" />
                Business
              </span>{' '}
              API.
            </h1>

            {/* Subheading */}
            <p
              className="animate-fadeUp text-sm sm:text-base text-gray-500 leading-relaxed mb-6 w-4/5 mx-auto lg:mx-0"
              style={{ animationDelay: '780ms' }}
            >
              BotrixAI brings AI automation to your fingertips to streamline tasks, reduce costs, and delight your customers instantly.
            </p>

            {/* CTA Button — centered on mobile & tablet, left-aligned on desktop */}
            <div
              className="animate-fadeUp flex justify-center lg:justify-start mb-8"
              style={{ animationDelay: '900ms' }}
            >
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1"
                onClick={() =>
                  window.open(
                    'https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08',
                    '_blank'
                  )
                }
              >
                Get in touch <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trusted By */}
            <div className="animate-fadeUp" style={{ animationDelay: '1050ms' }}>
              <p className="text-xs text-gray-400 font-medium mb-4 text-center lg:text-left">
                Trusted by 500+ businesses worldwide
              </p>
              <div className="relative overflow-hidden w-full max-w-sm mx-auto lg:mx-0 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="flex items-center space-x-10 animate-marquee whitespace-nowrap">
                  {[
                    { src: '/images/integrations/icons8-salesforce-50.png', label: 'Salesforce' },
                    { src: '/images/integrations/icons8-zendesk-50.png',    label: 'Zendesk' },
                    { src: '/images/integrations/icons8-hubspot-24.png',    label: 'HubSpot' },
                    { src: '/images/integrations/icons8-slack-48.png',      label: 'Slack' },
                    { src: '/images/integrations/icons8-stripe-48.png',     label: 'Stripe' },
                    { src: '/images/integrations/icons8-salesforce-50.png', label: 'Salesforce' },
                    { src: '/images/integrations/icons8-zendesk-50.png',    label: 'Zendesk' },
                    { src: '/images/integrations/icons8-hubspot-24.png',    label: 'HubSpot' },
                    { src: '/images/integrations/icons8-slack-48.png',      label: 'Slack' },
                    { src: '/images/integrations/icons8-stripe-48.png',     label: 'Stripe' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 min-w-[110px]">
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="font-semibold text-gray-400 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right — Hero Image */}
          <div className="flex-1 min-w-0 flex justify-center lg:justify-end">
            <div
              className="animate-fadeUp relative w-full max-w-xs sm:max-w-sm lg:max-w-md"
              style={{ animationDelay: '400ms' }}
            >
              <Image
                src="/herosidev2.png"
                alt="BotrixAI - Best AI Automation Platform for WhatsApp Business API"
                width={480}
                height={480}
                className="w-full h-auto object-contain"
                style={{
                  maskImage:
                    'radial-gradient(ellipse 85% 85% at 50% 50%, black 55%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 85% 85% at 50% 50%, black 55%, transparent 100%)',
                }}
                priority
              />
            </div>
          </div>

        </div>

      </section>
    </>
  )
}