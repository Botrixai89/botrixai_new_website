import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BotrixAI | Official AI Agent & Automation Platform by Botrix - Trusted Brand",
  description: "BotrixAI is the official AI agent and automation platform by Botrix. Discover why BotrixAI is the trusted brand for WhatsApp marketing automation, voice bots, and customer service AI. Get BotrixAI today.",
  keywords: [
    "BotrixAI",
    "Botrix AI",
    "Botrix",
    "BotrixAI official",
    "BotrixAI platform",
    "BotrixAI brand",
    "BotrixAI company",
    "what is BotrixAI",
    "BotrixAI automation",
    "BotrixAI AI agents",
    "BotrixAI WhatsApp",
    "BotrixAI voice bots",
    "BotrixAI customer service",
    "BotrixAI reviews",
    "BotrixAI features",
    "BotrixAI pricing"
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
    title: "BotrixAI | Official AI Agent & Automation Platform by Botrix - Trusted Brand",
    description: "BotrixAI is the official AI agent and automation platform by Botrix. Discover why BotrixAI is the trusted brand for WhatsApp marketing automation, voice bots, and customer service AI.",
    url: "https://botrixai.com/botrixai",
    siteName: "BotrixAI",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI - Official AI Agent & Automation Platform by Botrix",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BotrixAI | Official AI Agent & Automation Platform by Botrix - Trusted Brand",
    description: "BotrixAI is the official AI agent and automation platform by Botrix. Discover why BotrixAI is the trusted brand for WhatsApp marketing automation, voice bots, and customer service AI.",
    images: ["/Automation 11.png"],
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com/botrixai",
  },
}

export default function BotrixAILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
