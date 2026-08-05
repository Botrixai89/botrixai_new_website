import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WhatsApp Bot & Marketing Automation - 98% Open Rate | BotrixAI",
  description: "Transform your business with intelligent WhatsApp bots. Automated customer service, marketing campaigns, and sales on WhatsApp Business API. 98% message open rates guaranteed.",
  keywords: [
    "WhatsApp bot automation",
    "WhatsApp marketing automation",
    "WhatsApp business API",
    "automated WhatsApp messaging",
    "WhatsApp customer service bot",
    "WhatsApp sales automation",
    "intelligent WhatsApp assistant",
    "WhatsApp broadcast automation",
    "WhatsApp lead generation",
    "WhatsApp order management"
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
    title: "WhatsApp Bot & Marketing Automation - 98% Open Rate | BotrixAI",
    description: "Transform your business with intelligent WhatsApp bots. Automated customer service, marketing campaigns, and sales on WhatsApp Business API. 98% message open rates guaranteed.",
    url: "https://botrixai.com/solutions/whatsapp-bot",
    siteName: "BotrixAI",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI WhatsApp Bot and Marketing Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Bot & Marketing Automation - 98% Open Rate | BotrixAI",
    description: "Transform your business with intelligent WhatsApp bots. Automated customer service, marketing campaigns, and sales on WhatsApp Business API. 98% message open rates guaranteed.",
    images: ["/Automation 11.png"],
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com/solutions/whatsapp-bot",
  },
}

export default function WhatsAppBotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
