import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "BotrixAI Facebook - Like BotrixAI on Facebook for AI Automation News",
  description: "Like and follow BotrixAI on Facebook for AI automation updates, WhatsApp marketing tips, customer service solutions, and business automation insights. Join our community of AI enthusiasts.",
  keywords: [
    "BotrixAI Facebook",
    "Botrix AI Facebook",
    "BotrixAI Facebook page",
    "BotrixAI social media",
    "AI automation Facebook",
    "WhatsApp automation Facebook",
    "BotrixAI community",
    "Botrix Technologies Facebook",
    "AI business solutions Facebook",
    "Customer service automation Facebook",
    "Voice agents Facebook",
    "Chatbot solutions Facebook",
    "BotrixAI fan page",
    "Enterprise AI Facebook",
    "Business automation Facebook",
    "AI marketing Facebook"
  ],
  openGraph: {
    title: "BotrixAI Facebook - Join Our AI Automation Community",
    description: "Like BotrixAI on Facebook for AI automation updates, tips, and community discussions on business solutions.",
    url: "https://botrixai.com/social/facebook",
    siteName: "BotrixAI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BotrixAI Facebook - AI Automation Community",
    description: "Join BotrixAI's Facebook community for AI automation updates and business insights.",
  },
  alternates: {
    canonical: "https://botrixai.com/social/facebook",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function FacebookPage() {
  // Immediately redirect to Facebook page
  redirect("https://www.facebook.com/botrixai")
}
