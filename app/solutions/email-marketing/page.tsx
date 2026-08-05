import { Metadata } from "next";
import EmailMarketingContent from "./content";

export const metadata: Metadata = {
  title: "Email Marketing Platform | BotrixAI Solutions",
  description: "Create, automate, and track powerful email campaigns with BotrixAI. Drag-and-drop builder, advanced segmentation, and real-time analytics for better ROI.",
  keywords: ["Email Marketing", "Marketing Automation", "Email Campaigns", "Newsletter Service", "Email Analytics", "BotrixAI"],
  openGraph: {
    title: "Email Marketing Platform | Automation & Analytics | BotrixAI",
    description: "Create, automate, and track powerful email campaigns. Enterprise-grade platform trusted by businesses.",
    images: [
      {
        url: "/Email marketing.png",
        width: 1200,
        height: 630,
        alt: "BotrixAI Email Marketing Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function EmailMarketingPage() {
  return <EmailMarketingContent />;
}

