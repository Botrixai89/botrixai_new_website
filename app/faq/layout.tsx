import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - WhatsApp Automation & AI Agent Questions | BotrixAI",
  description: "Find answers to common questions about WhatsApp marketing automation, AI voice agents, web chatbots, pricing, integration, and enterprise security features.",
  keywords: [
    "WhatsApp automation FAQ",
    "AI agent questions",
    "chatbot implementation FAQ",
    "voice bot pricing",
    "CRM integration questions",
    "enterprise AI security",
    "customer service automation FAQ",
    "WhatsApp business API questions",
    "AI platform support",
    "automation ROI questions"
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
    title: "FAQ - WhatsApp Automation & AI Agent Questions | BotrixAI",
    description: "Find answers to common questions about WhatsApp marketing automation, AI voice agents, web chatbots, pricing, integration, and enterprise security features.",
    url: "https://botrixai.com/faq",
    siteName: "BotrixAI",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI FAQ - WhatsApp Automation and AI Agent Questions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - WhatsApp Automation & AI Agent Questions | BotrixAI",
    description: "Find answers to common questions about WhatsApp marketing automation, AI voice agents, web chatbots, pricing, integration, and enterprise security features.",
    images: ["/Automation 11.png"],
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com/faq",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
