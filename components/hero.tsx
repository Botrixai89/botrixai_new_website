"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroHorizon from "@/components/hero-horizon"

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

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
      `}</style>

      <section className="relative isolate w-full min-h-[100svh] bg-[#040806] overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem] flex items-center justify-center pt-[116px]">

        <HeroHorizon contentRef={contentRef} />

        {/* ── Main content ── */}
        <div className="relative z-10 w-full px-4 sm:px-6 py-16 sm:py-20 flex justify-center">
          <div ref={contentRef} className="w-fit max-w-full flex flex-col items-center text-center">

            {/* Headline */}
            <h1
              className="animate-fadeUp text-4xl sm:text-5xl xl:text-[3.5rem] font-semibold leading-[1.08] tracking-[-0.03em] mb-6 bg-gradient-to-b from-white to-white/65 bg-clip-text text-transparent pb-1"
              style={{ animationDelay: '200ms' }}
            >
              Best AI Automation Platform &amp;{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-b from-[#7ef0b4] to-[#1fbf73] bg-clip-text text-transparent">
                WhatsApp Business
              </span>{' '}
              API.
            </h1>

            {/* Subheading */}
            <p
              className="animate-fadeUp text-[15px] sm:text-lg text-white/55 leading-relaxed mb-9 max-w-[34rem]"
              style={{ animationDelay: '500ms' }}
            >
              BotrixAI brings AI automation to your fingertips to streamline tasks, reduce costs, and delight your customers instantly.
            </p>

            {/* CTA Button */}
            <div
              className="animate-fadeUp flex justify-center"
              style={{ animationDelay: '700ms' }}
            >
              <Button
                size="lg"
                className="group bg-[#00D563] hover:bg-[#14de72] text-[#04160c] font-medium text-base px-7 py-6 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-12px_rgba(0,213,99,0.6)] transition-colors duration-200"
                onClick={() =>
                  window.open(
                    'https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08',
                    '_blank'
                  )
                }
              >
                Get in touch <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}
