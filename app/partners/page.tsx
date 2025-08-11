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
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Become a BotrixAI Partner</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Empower businesses with AI-driven customer service solutions. Join the <span className="font-semibold">BotrixAI Partner Program</span> and be part of the revolution in AI-powered customer engagement.
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Drive business growth</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Enhance customer support</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Expand your market reach</span></li>
            </ul>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00D563] text-white font-semibold hover:bg-[#00D563]/90 transition-colors">
              Apply Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-[#00D563]/20 blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-400/20 blur-2xl animate-pulse" />
            <Image
              src={"/ChatGPT Image Aug 9, 2025, 09_12_57 PM.png"}
              alt="BotrixAI Partners"
              width={900}
              height={600}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="relative w-full max-w-[560px] mx-auto rounded-2xl shadow-2xl ring-1 ring-gray-200 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Partner with BotrixAI?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Innovative AI Technology", d: "Leverage industry‑leading AI chatbot solutions for next‑gen automation.", icon: Rocket },
              { t: "Scalable Solutions", d: "From startups to enterprises, our AI agents adapt to any business size.", icon: Layers },
              { t: "High Revenue Potential", d: "Unlock new revenue streams by delivering AI‑powered automation.", icon: LineChart },
              { t: "Expert Training & Support", d: "Access exclusive resources, enablement, and technical assistance.", icon: BookOpen },
              { t: "Seamless Integration", d: "Works with CRM, ERP and enterprise tools for easy deployment.", icon: Cog },
              { t: "Trusted Partnership", d: "Work closely with our team to ensure mutual success.", icon: Handshake },
            ].map(({ t, d, icon: Icon }, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#00D563]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{t}</h3>
                <p className="text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Go-To-Market Support – Marketing materials, sales enablement, and joint campaigns.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Dedicated Partner Manager – Work closely with experts to maximize success.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Exclusive AI Insights – Research, trends, and product updates.</span></li>
            <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-[#00D563] mt-1" /><span>Customizable Solutions – Tailor AI chatbots to fit client needs.</span></li>
          </ul>
        </div>
      </section>

      {/* Who Can Partner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Can Partner with Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Technology Providers", d: "Enhance your software with intelligent chatbot capabilities." },
              { t: "Consulting & AI Firms", d: "Help businesses automate and optimize interactions." },
              { t: "System Integrators", d: "Seamlessly integrate BotrixAI into enterprise ecosystems." },
              { t: "Resellers & Distributors", d: "Offer AI‑powered solutions and expand your portfolio." },
            ].map((k, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">{k.t}</h3>
                <p className="text-gray-600">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Become */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Become a Partner</h2>
          <ol className="grid md:grid-cols-3 gap-6 list-decimal list-inside text-gray-700">
            <li className="bg-white rounded-xl p-5 border border-gray-200">Apply – Submit your application and tell us about your business.</li>
            <li className="bg-white rounded-xl p-5 border border-gray-200">Get Approved – Our team reviews applications and onboards qualified partners.</li>
            <li className="bg-white rounded-xl p-5 border border-gray-200">Start Selling – Access partner resources and bring AI automation to clients.</li>
          </ol>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00D563] text-white font-semibold hover:bg-[#00D563]/90 transition-colors">
              Join the BotrixAI Partner Program <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the AI Revolution</h2>
          <p className="text-lg text-gray-600 mb-6">Let's build the future of customer engagement—together!</p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00D563] text-white font-semibold hover:bg-[#00D563]/90 transition-colors">
            Become a Partner <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}


