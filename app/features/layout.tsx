import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Agent Features - Advanced Customer Service Automation | BotrixAI",
  description: "Explore BotrixAI's advanced AI agent features: enterprise security, omnichannel deployment, CRM integration, real-time analytics, and 24/7 customer support automation.",
  keywords: [
    "AI agent features",
    "customer service automation features", 
    "enterprise AI security",
    "omnichannel chatbot deployment",
    "CRM integration AI",
    "real-time customer analytics",
    "AI chatbot capabilities",
    "conversational AI features",
    "voice bot features",
    "WhatsApp automation features"
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
    title: "AI Agent Features - Advanced Customer Service Automation | BotrixAI",
    description: "Explore BotrixAI's advanced AI agent features: enterprise security, omnichannel deployment, CRM integration, real-time analytics, and 24/7 customer support automation.",
    url: "https://botrixai.com/features",
    siteName: "BotrixAI",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI AI Agent Features and Customer Service Automation Capabilities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Features - Advanced Customer Service Automation | BotrixAI",
    description: "Explore BotrixAI's advanced AI agent features: enterprise security, omnichannel deployment, CRM integration, real-time analytics, and 24/7 customer support automation.",
    images: ["/Automation 11.png"],
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com/features",
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
