import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function IntegrationShowcase() {
  const ring1Services = [
    { name: "WhatsApp", icon: "/images/integrations/icons8-whatsapp-48.png", color: "from-green-500 to-green-600" },
    { name: "Salesforce", icon: "/images/integrations/icons8-salesforce-50.png", color: "from-blue-500 to-blue-600" },
    { name: "Zendesk", icon: "/images/integrations/icons8-zendesk-50.png", color: "from-yellow-500 to-yellow-600" },
    { name: "HubSpot", icon: "/images/integrations/icons8-hubspot-24.png", color: "from-orange-500 to-orange-600" }
  ]

  const ring2Services = [
    { name: "Slack", icon: "/images/integrations/icons8-slack-48.png", color: "from-purple-500 to-purple-600" },
    { name: "Stripe", icon: "/images/integrations/icons8-stripe-48.png", color: "from-blue-400 to-blue-500" },
    { name: "PayPal", icon: "/images/integrations/icons8-paypal-48.png", color: "from-blue-600 to-blue-700" },
    { name: "Discord", icon: "/images/integrations/icons8-discord-48.png", color: "from-indigo-500 to-indigo-600" }
  ]

  const ring3Services = [
    { name: "Telegram", icon: "/images/integrations/icons8-telegram-94.png", color: "from-blue-500 to-blue-600" },
    { name: "Notion", icon: "/images/integrations/icons8-notion-48.png", color: "from-gray-600 to-gray-700" },
    { name: "Trello", icon: "/images/integrations/icons8-trello-48.png", color: "from-blue-500 to-blue-600" },
    { name: "Chargebee", icon: "/images/integrations/Chargebee.png", color: "from-red-500 to-red-600" }
  ]

  const partnerLogos = [
    { name: "Razorpay", logo: "/images/integrations/Razorpay.png" },
    { name: "Paddle", logo: "/images/integrations/Paddle.jpeg" },
    { name: "ActiveCampaign", logo: "/images/integrations/ActiveCampaign.png" },
    { name: "Asana", logo: "/images/integrations/Asana.png" },
    { name: "ConvertKit", logo: "/images/integrations/ConvertKit.png" },
    { name: "Mailchimp", logo: "/images/integrations/icons8-mailchimp-24.png" }
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Seamless</span>
            <span className="text-[#00D563]"> Integration</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect WhatsApp, Salesforce, Zendesk, HubSpot & more to BotrixAI with a single click
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Integration Hub */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            {/* Central BotrixAI Hub */}
            <div className="relative w-24 h-24 z-20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D563] to-green-600 rounded-full animate-pulse shadow-2xl shadow-[#00D563]/50"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <Image 
                  src="/favicon.png"
                  alt="BotrixAI"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>

                         {/* Ring 1 - Inner Ring */}
             <div className="absolute w-80 h-80 border-2 border-[#00D563]/20 rounded-full animate-rotate-slow">
               {ring1Services.map((service, index) => {
                 const angle = (index * 90) * (Math.PI / 180)
                 const radius = 160
                 const x = Math.cos(angle) * radius
                 const y = Math.sin(angle) * radius
                 
                 return (
                   <div 
                     key={index}
                     className="absolute w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center p-2 hover:scale-110 transition-all duration-300 cursor-pointer group"
                     style={{
                       left: `calc(50% + ${x}px - 32px)`,
                       top: `calc(50% + ${y}px - 32px)`,
                       animationDelay: `${index * 0.5}s`
                     }}
                   >
                     <Image 
                       src={service.icon}
                       alt={service.name}
                       width={24}
                       height={24}
                       className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                     />
                     <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                       <span className="text-xs font-medium text-gray-300 whitespace-nowrap">{service.name}</span>
                     </div>
                   </div>
                 )
               })}
             </div>

             {/* Ring 2 - Middle Ring */}
             <div className="absolute w-96 h-96 border-2 border-[#00D563]/15 rounded-full animate-rotate-reverse">
               {ring2Services.map((service, index) => {
                 const angle = (index * 90 + 45) * (Math.PI / 180)
                 const radius = 192
                 const x = Math.cos(angle) * radius
                 const y = Math.sin(angle) * radius
                 
                 return (
                   <div 
                     key={index}
                     className="absolute w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center p-2 hover:scale-110 transition-all duration-300 cursor-pointer group"
                     style={{
                       left: `calc(50% + ${x}px - 28px)`,
                       top: `calc(50% + ${y}px - 28px)`,
                       animationDelay: `${index * 0.5}s`
                     }}
                   >
                     <Image 
                       src={service.icon}
                       alt={service.name}
                       width={20}
                       height={20}
                       className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                     />
                     <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-center">
                       <span className="text-xs font-medium text-gray-300 whitespace-nowrap">{service.name}</span>
                     </div>
                   </div>
                 )
               })}
             </div>

             {/* Ring 3 - Outer Ring */}
             <div className="absolute w-[28rem] h-[28rem] border-2 border-[#00D563]/10 rounded-full animate-rotate-slow">
               {ring3Services.map((service, index) => {
                 const angle = (index * 90 + 22.5) * (Math.PI / 180)
                 const radius = 224
                 const x = Math.cos(angle) * radius
                 const y = Math.sin(angle) * radius
                 
                 return (
                   <div 
                     key={index}
                     className="absolute w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center p-2 hover:scale-110 transition-all duration-300 cursor-pointer group"
                     style={{
                       left: `calc(50% + ${x}px - 24px)`,
                       top: `calc(50% + ${y}px - 24px)`,
                       animationDelay: `${index * 0.5}s`
                     }}
                   >
                     <Image 
                       src={service.icon}
                       alt={service.name}
                       width={16}
                       height={16}
                       className="w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-300"
                     />
                     <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                       <span className="text-xs font-medium text-gray-300 whitespace-nowrap">{service.name}</span>
                     </div>
                   </div>
                 )
               })}
             </div>
          </div>

          {/* Right Section - Partner Logos */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Trusted by Leading Platforms</h3>
              <p className="text-gray-400 mb-8">
                Seamlessly integrate with your existing tech stack and payment processors
              </p>
            </div>

            {/* Partner Logos Grid */}
            <div className="grid grid-cols-3 gap-6">
              {partnerLogos.map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center h-20">
                    <Image 
                      src={partner.logo}
                      alt={partner.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-sm font-medium text-gray-400">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Link href="/integrations" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00D563] to-green-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D563]/25 transition-all duration-300 hover:scale-105">
                View All Integrations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 