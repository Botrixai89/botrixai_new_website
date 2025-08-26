import { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "BotrixAI Social Media - Connect with BotrixAI on All Platforms",
  description: "Connect with BotrixAI on all social media platforms. Follow us on LinkedIn, Facebook, Instagram, Twitter, and YouTube for AI automation updates, business solutions, and technology insights.",
  keywords: [
    "BotrixAI social media",
    "Botrix AI social networks",
    "BotrixAI LinkedIn Facebook Instagram",
    "BotrixAI Twitter YouTube",
    "AI automation social media",
    "WhatsApp automation social",
    "BotrixAI community",
    "Botrix Technologies social",
    "AI business solutions social",
    "Customer service automation social",
    "Voice agents social media",
    "Chatbot solutions social",
    "BotrixAI online presence",
    "Enterprise AI social",
    "Business automation social",
    "AI technology social media"
  ],
  openGraph: {
    title: "BotrixAI Social Media - Connect on All Platforms",
    description: "Connect with BotrixAI across all social media platforms for AI automation updates and business insights.",
    url: "https://botrixai.com/social",
    siteName: "BotrixAI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BotrixAI Social Media Hub",
    description: "Connect with BotrixAI on all social platforms for AI automation insights.",
  },
  alternates: {
    canonical: "https://botrixai.com/social",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function SocialPage() {
  // Redirect to main contact page where social links are available
  redirect("/contact")
}
