import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "BotrixAI Twitter - Follow BotrixAI on Twitter for Real-time AI Updates",
  description: "Follow BotrixAI on Twitter for real-time updates on AI automation, quick tips on WhatsApp marketing, instant customer service solutions, and breaking news in business automation technology.",
  keywords: [
    "BotrixAI Twitter",
    "Botrix AI Twitter",
    "BotrixAI Twitter page", 
    "BotrixAI X account",
    "BotrixAI social media",
    "AI automation Twitter",
    "WhatsApp automation Twitter",
    "BotrixAI tweets",
    "Botrix Technologies Twitter",
    "AI business solutions Twitter",
    "Customer service automation Twitter",
    "Voice agents Twitter",
    "Chatbot solutions Twitter",
    "BotrixAI real-time updates",
    "Enterprise AI Twitter",
    "Business automation Twitter",
    "AI technology Twitter",
    "BotrixAI news",
    "AI automation tips Twitter"
  ],
  openGraph: {
    title: "BotrixAI Twitter - Real-time AI Automation Updates",
    description: "Follow BotrixAI on Twitter for instant updates on AI automation, business solutions, and technology insights.",
    url: "https://botrixai.com/social/twitter",
    siteName: "BotrixAI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BotrixAI Twitter - Real-time AI Updates",
    description: "Follow BotrixAI on Twitter for instant AI automation updates and business insights.",
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com/social/twitter",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function TwitterPage() {
  // Immediately redirect to Twitter page
  redirect("https://twitter.com/botrixai")
}
