import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle, Rocket, Handshake, Layers, Cog, ArrowRight, BookOpen, LineChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PartnersPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl text-bone mb-4 font-medium tracking-[-0.045em] leading-[1.02]">Become a BotrixAI Partner</h1>
            <p className="text-lg text-dim leading-relaxed mb-6">
              Empower businesses with AI-driven customer service solutions. Join the <span className="font-semibold">BotrixAI Partner Program</span> and be part of the revolution in AI-powered customer engagement.
            </p>
            <ul className="space-y-2 text-bone/80 mb-8">
              <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-signal mt-1" /><span>Drive business growth</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-signal mt-1" /><span>Enhance customer support</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-signal mt-1" /><span>Expand your market reach</span></li>
            </ul>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 transition-colors rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
              Apply Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-signal/20 blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-signal/20 blur-2xl animate-pulse" />
            <Image
              src={"/ChatGPT Image Aug 9, 2025, 09_12_57 PM.png"}
              alt="BotrixAI Partners"
              width={900}
              height={600}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="relative w-full max-w-[560px] mx-auto rounded-2xl light-edge ring-1 ring-hairline object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-bone mb-8 font-medium tracking-[-0.035em] leading-[1.08]">Why Partner with BotrixAI?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Innovative AI Technology", d: "Leverage industry‑leading AI chatbot solutions for next‑gen automation.", icon: Rocket },
              { t: "Scalable Solutions", d: "From startups to enterprises, our AI agents adapt to any business size.", icon: Layers },
              { t: "High Revenue Potential", d: "Unlock new revenue streams by delivering AI‑powered automation.", icon: LineChart },
              { t: "Expert Training & Support", d: "Access exclusive resources, enablement, and technical assistance.", icon: BookOpen },
              { t: "Seamless Integration", d: "Works with CRM, ERP and enterprise tools for easy deployment.", icon: Cog },
              { t: "Trusted Partnership", d: "Work closely with our team to ensure mutual success.", icon: Handshake },
            ].map(({ t, d, icon: Icon }, idx) => (
              <div key={idx} className="border border-hairline rounded-xl p-5 bg-surface-2 transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-signal" />
                </div>
                <h3 className="text-bone mb-1 font-medium tracking-[-0.02em]">{t}</h3>
                <p className="text-dim">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 bg-ink border-t border-hairline-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">Partner Benefits</h2>
          <ul className="space-y-3 text-bone/80">
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-signal mt-1" /><span>Go-To-Market Support – Marketing materials, sales enablement, and joint campaigns.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-signal mt-1" /><span>Dedicated Partner Manager – Work closely with experts to maximize success.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-signal mt-1" /><span>Exclusive AI Insights – Research, trends, and product updates.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-signal mt-1" /><span>Customizable Solutions – Tailor AI chatbots to fit client needs.</span></li>
          </ul>
        </div>
      </section>

      {/* Who Can Partner */}
      <section className="py-16 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-bone mb-8 font-medium tracking-[-0.035em] leading-[1.08]">Who Can Partner with Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Technology Providers", d: "Enhance your software with intelligent chatbot capabilities." },
              { t: "Consulting & AI Firms", d: "Help businesses automate and optimize interactions." },
              { t: "System Integrators", d: "Seamlessly integrate BotrixAI into enterprise ecosystems." },
              { t: "Resellers & Distributors", d: "Offer AI‑powered solutions and expand your portfolio." },
            ].map((k, i) => (
              <div key={i} className="border border-hairline rounded-xl p-5 bg-surface-2 transition-shadow">
                <h3 className="text-bone mb-1 font-medium tracking-[-0.02em]">{k.t}</h3>
                <p className="text-dim">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Become */}
      <section className="py-16 bg-ink border-t border-hairline-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">How to Become a Partner</h2>
          <ol className="grid md:grid-cols-3 gap-6 list-decimal list-inside text-bone/80">
            <li className="bg-surface-2 rounded-xl p-5 border border-hairline">Apply – Submit your application and tell us about your business.</li>
            <li className="bg-surface-2 rounded-xl p-5 border border-hairline">Get Approved – Our team reviews applications and onboards qualified partners.</li>
            <li className="bg-surface-2 rounded-xl p-5 border border-hairline">Start Selling – Access partner resources and bring AI automation to clients.</li>
          </ol>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 transition-colors rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
              Join the BotrixAI Partner Program <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-bone mb-4 font-medium tracking-[-0.035em] leading-[1.08]">Join the AI Revolution</h2>
          <p className="text-lg text-dim mb-6">Let's build the future of customer engagement—together!</p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 transition-colors rounded-full border-0 bg-bone text-ink hover:bg-white font-medium">
            Become a Partner <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}


