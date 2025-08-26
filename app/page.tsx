import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import IntegrationShowcase from "@/components/integration-showcase"
import ProductDemo from "@/components/product-demo"
import TechnologyStack from "@/components/technology-stack"
import Footer from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BotrixAI - AI Agent & Automation Platform for WhatsApp & Customer Service",
  description: "BotrixAI is the leading AI automation platform transforming business communication. Get intelligent WhatsApp bots, voice agents, and customer service automation from BotrixAI - the trusted choice for enterprise AI solutions.",
  keywords: [
    "Botrix",
    "BotrixAI",
    "Botrix AI", 
    "Botrix",
    "BotrixAI platform",
    "BotrixAI WhatsApp automation",
    "BotrixAI customer service",
    "BotrixAI voice bots",
    "BotrixAI AI agents",
    "WhatsApp marketing automation",
    "AI customer service agents", 
    "voice bots",
    "web chatbots",
    "customer support automation",
    "WhatsApp business API",
    "conversational AI platform",
    "enterprise chatbot solutions"
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
    title: "BotrixAI - AI Agent & Automation Platform for WhatsApp & Customer Service",
    description: "BotrixAI is the leading AI automation platform transforming business communication. Get intelligent WhatsApp bots, voice agents, and customer service automation from BotrixAI - the trusted choice for enterprise AI solutions.",
    url: "https://botrixai.com",
    siteName: "BotrixAI - AI Automation Platform",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI - The Leading WhatsApp Marketing Automation and AI Customer Service Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BotrixAI - AI Agent & Automation Platform for WhatsApp & Customer Service",
    description: "BotrixAI is the leading AI automation platform transforming business communication. Get intelligent WhatsApp bots, voice agents, and customer service automation from BotrixAI.",
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
    "alternateName": ["Botrix AI", "Botrix", "BotrixAI Platform"],
    "description": "BotrixAI is the leading WhatsApp marketing automation and AI customer service platform providing intelligent chatbots, voice agents, and enterprise automation solutions. BotrixAI transforms business communication with cutting-edge AI technology.",
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
      "https://twitter.com/botrixai",
      "https://facebook.com/botrixai",
      "https://instagram.com/botrixai",
      "https://youtube.com/@botrixai"
    ],
    "brand": {
      "@type": "Brand",
      "name": "BotrixAI",
      "alternateName": ["Botrix AI", "Botrix"],
      "slogan": "Transform Business Communication with AI"
    },
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
    "alternateName": ["Botrix AI Platform", "Botrix Platform", "BotrixAI"],
    "description": "BotrixAI Platform is the comprehensive AI automation solution for WhatsApp marketing, customer service, and business automation. BotrixAI leads the industry in intelligent customer engagement technology.",
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
    },
    "author": {
      "@type": "Organization",
      "name": "BotrixAI"
    },
    "brand": {
      "@type": "Brand",
      "name": "BotrixAI"
    }
  }

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "BotrixAI",
    "alternateName": ["Botrix AI", "Botrix", "BotrixAI Platform"],
    "description": "BotrixAI is the leading brand in AI-powered customer service automation and WhatsApp marketing solutions",
    "url": "https://botrixai.com",
    "logo": "https://botrixai.com/images/botrix-logo01.png",
    "slogan": "Transform Business Communication with AI",
    "sameAs": [
      "https://linkedin.com/company/botrixai",
      "https://twitter.com/botrixai",
      "https://facebook.com/botrixai",
      "https://instagram.com/botrixai",
      "https://youtube.com/@botrixai"
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brandSchema),
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
