import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import IntegrationShowcase from "@/components/integration-showcase"
import ProductDemo from "@/components/product-demo"
import TechnologyStack from "@/components/technology-stack"
import Footer from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BotrixAI - WhatsApp Marketing Automation & AI Customer Service Agents",
  description: "Transform customer engagement with BotrixAI's intelligent WhatsApp bots, voice agents, and web chatbots. Enterprise AI automation platform for 24/7 customer support.",
  keywords: [
    "WhatsApp marketing automation",
    "AI customer service agents", 
    "voice bots",
    "web chatbots",
    "customer support automation",
    "WhatsApp business API",
    "conversational AI platform",
    "enterprise chatbot solutions",
    "AI agents for customer service",
    "automated customer support"
  ],
  authors: [{ name: "BotrixAI" }],
  creator: "BotrixAI",
  publisher: "BotrixAI",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "BotrixAI - WhatsApp Marketing Automation & AI Customer Service Agents",
    description: "Transform customer engagement with BotrixAI's intelligent WhatsApp bots, voice agents, and web chatbots. Enterprise AI automation platform for 24/7 customer support.",
    url: "https://botrixai.com",
    siteName: "BotrixAI",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI WhatsApp Marketing Automation and AI Customer Service Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BotrixAI - WhatsApp Marketing Automation & AI Customer Service Agents",
    description: "Transform customer engagement with BotrixAI's intelligent WhatsApp bots, voice agents, and web chatbots. Enterprise AI automation platform for 24/7 customer support.",
    images: ["/Automation 11.png"],
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com",
  },
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BotrixAI",
    "description": "Leading WhatsApp marketing automation and AI customer service platform providing intelligent chatbots, voice agents, and enterprise automation solutions",
    "url": "https://botrixai.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://botrixai.com/images/botrix-logo01.png",
      "width": 200,
      "height": 100
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Spanish", "French", "German", "Italian"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://linkedin.com/company/botrixai",
      "https://twitter.com/botrixai"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WhatsApp Marketing Automation",
            "description": "Automated WhatsApp business solutions for customer engagement"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Agents",
            "description": "Intelligent voice bots for customer support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Web Chatbots",
            "description": "AI-powered website customer service automation"
          }
        }
      ]
    }
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BotrixAI Platform",
    "description": "Comprehensive AI automation platform for WhatsApp marketing, customer service, and business automation",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "2499",
      "billingIncrement": "Monthly"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        <IntegrationShowcase />
        <ProductDemo />
        <TechnologyStack />
      </main>
      <Footer />
    </div>
  )
}
