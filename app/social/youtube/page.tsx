import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "BotrixAI YouTube - Subscribe for AI Automation Video Tutorials and Demos",
  description: "Subscribe to BotrixAI YouTube channel for comprehensive video tutorials on AI automation, WhatsApp marketing strategies, voice agent demos, customer service solutions, and business automation guides.",
  keywords: [
    "BotrixAI YouTube",
    "Botrix AI YouTube",
    "BotrixAI YouTube channel",
    "BotrixAI videos",
    "AI automation YouTube",
    "WhatsApp automation YouTube",
    "BotrixAI tutorials",
    "Botrix Technologies YouTube",
    "AI business solutions YouTube",
    "Customer service automation YouTube",
    "Voice agents YouTube",
    "Chatbot solutions YouTube",
    "BotrixAI demos",
    "Enterprise AI YouTube",
    "Business automation YouTube",
    "AI technology videos",
    "BotrixAI webinars",
    "AI automation training",
    "WhatsApp marketing tutorials",
    "Voice agent demos"
  ],
  openGraph: {
    title: "BotrixAI YouTube - AI Automation Video Content",
    description: "Subscribe to BotrixAI YouTube for comprehensive video tutorials, demos, and insights on AI automation and business solutions.",
    url: "https://botrixai.com/social/youtube",
    siteName: "BotrixAI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BotrixAI YouTube - AI Video Tutorials",
    description: "Subscribe to BotrixAI YouTube for AI automation tutorials and business solution demos.",
  },
  alternates: {
    canonical: "https://botrixai.com/social/youtube",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function YouTubePage() {
  // Immediately redirect to YouTube channel
  redirect("https://youtube.com/@botrixai")
}
