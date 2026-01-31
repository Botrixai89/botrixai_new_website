import { Metadata } from "next";
import RCSMessagingContent from "./content";

export const metadata: Metadata = {
  title: "RCS Messaging Platform | Next Gen SMS | BotrixAI",
  description: "Upgrade your business messaging with Google RCS. Send rich media, carousels, and interactive buttons directly to native messaging apps.",
  keywords: ["RCS Messaging", "Rich Communication Services", "Google RBM", "Business Messaging", "SMS Marketing", "BotrixAI"],
  openGraph: {
    title: "RCS Messaging Platform | Rich Business Messaging | BotrixAI",
    description: "Upgrade to rich, interactive messaging with RCS. Trusted by global brands for secure communication.",
    images: [
      {
        url: "/RCS.png",
        width: 1200,
        height: 630,
        alt: "BotrixAI RCS Messaging Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RCSMessagingPage() {
  return <RCSMessagingContent />;
}
