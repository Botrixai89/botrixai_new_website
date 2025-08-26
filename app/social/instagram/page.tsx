import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "BotrixAI Instagram - Follow BotrixAI on Instagram for AI Automation Content",
  description: "Follow BotrixAI on Instagram for visual content on AI automation, behind-the-scenes looks at our technology, WhatsApp marketing tips, and creative business automation solutions.",
  keywords: [
    "BotrixAI Instagram",
    "Botrix AI Instagram", 
    "BotrixAI Instagram page",
    "BotrixAI social media",
    "AI automation Instagram",
    "WhatsApp automation Instagram",
    "BotrixAI visual content",
    "Botrix Technologies Instagram",
    "AI business solutions Instagram",
    "Customer service automation Instagram",
    "Voice agents Instagram",
    "Chatbot solutions Instagram",
    "BotrixAI behind the scenes",
    "Enterprise AI Instagram",
    "Business automation Instagram",
    "AI technology Instagram",
    "BotrixAI stories"
  ],
  openGraph: {
    title: "BotrixAI Instagram - Visual AI Automation Content",
    description: "Follow BotrixAI on Instagram for visual insights into AI automation, technology updates, and creative business solutions.",
    url: "https://botrixai.com/social/instagram",
    siteName: "BotrixAI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BotrixAI Instagram - Visual AI Content",
    description: "Follow BotrixAI on Instagram for visual AI automation content and technology insights.",
  },
  alternates: {
    canonical: "https://botrixai.com/social/instagram",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function InstagramPage() {
  // Immediately redirect to Instagram page
  redirect("https://www.instagram.com/botrixai/")
}
