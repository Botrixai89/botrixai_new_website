import { Metadata } from "next";
import InstagramAutomationContent from "./content";

export const metadata: Metadata = {
  title: "Instagram DM Automation | AI Chatbots | BotrixAI",
  description: "Automate Instagram DMs, comments, and story replies with AI. Increase engagement, capture leads, and drive sales 24/7.",
  keywords: ["Instagram Automation", "Instagram Chatbot", "DM Automation", "Social Media Marketing", "Instagram Growth", "BotrixAI"],
  openGraph: {
    title: "Instagram DM Automation & AI Chatbots | BotrixAI",
    description: "Automate your Instagram DMs, comments, and stories with AI. Engage followers instantly.",
    images: [
      {
        url: "/Instagram automation .png",
        width: 1200,
        height: 630,
        alt: "BotrixAI Instagram Automation Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function InstagramAutomationPage() {
  return <InstagramAutomationContent />;
}

