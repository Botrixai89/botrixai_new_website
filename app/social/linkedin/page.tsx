import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "BotrixAI LinkedIn - Follow BotrixAI on LinkedIn for AI Automation Updates",
  description: "Follow BotrixAI on LinkedIn for the latest updates on AI automation, WhatsApp marketing, voice agents, and business automation solutions. Connect with BotrixAI's professional network and stay updated on industry insights.",
  keywords: [
    "BotrixAI LinkedIn",
    "Botrix AI LinkedIn",
    "BotrixAI LinkedIn page",
    "BotrixAI professional network",
    "AI automation LinkedIn",
    "WhatsApp automation LinkedIn",
    "BotrixAI company LinkedIn",
    "Botrix Technologies LinkedIn",
    "AI business solutions LinkedIn",
    "Customer service automation LinkedIn",
    "Voice agents LinkedIn",
    "Chatbot solutions LinkedIn",
    "BotrixAI social media",
    "Enterprise AI LinkedIn",
    "Business automation LinkedIn"
  ],
  openGraph: {
    title: "BotrixAI LinkedIn - Follow for AI Automation Updates",
    description: "Connect with BotrixAI on LinkedIn for professional insights on AI automation, business solutions, and industry updates.",
    url: "https://botrixai.com/social/linkedin",
    siteName: "BotrixAI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BotrixAI LinkedIn - Professional AI Automation Network",
    description: "Follow BotrixAI on LinkedIn for AI automation insights and business solutions updates.",
  },
  alternates: {
    canonical: "https://botrixai.com/social/linkedin",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function LinkedInPage() {
  // Immediately redirect to LinkedIn page
  redirect("https://www.linkedin.com/company/botrix-ai/")
}
