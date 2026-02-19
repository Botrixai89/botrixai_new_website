import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "RCS Messaging Platform India | Branded SMS with Rich Media",
    description: "Upgrade your SMS marketing with BotrixAI's RCS messaging platform. Send rich media, carousels, and interactive buttons to your customers in Raipur and India.",
    keywords: ["RCS Messaging Platform", "Rich Communication Services India", "Branded SMS India", "Next-gen Business Messaging"],
    alternates: {
        canonical: "https://www.botrixai.com/rcs-messaging-platform"
    }
}

export default function RCSMessaging() {
    const faqs = [
        {
            question: "What is RCS messaging?",
            answer: "RCS (Rich Communication Services) is the modern evolution of SMS, allowing brands to send high-res images, videos, and interactive carousels directly to the native messaging app of Android phones."
        },
        {
            question: "Is RCS better than SMS?",
            answer: "Yes, RCS offers verified sender profiles, better trust (brand name and logo), and much higher click-through rates than traditional plain text SMS."
        }
    ]

    const content = (
        <>
            <h2>RCS Messaging Platform: The Future of Branded Communication in India</h2>
            <p>
                While traditional SMS is cluttered, <strong>RCS messaging</strong> offers a premium,
                branded experience. BotrixAI empowers businesses in <strong>India</strong> to send
                visually stunning messages that drive action.
            </p>

            <h3>Why Your Brand in Raipur Needs RCS</h3>
            <ul>
                <li><strong>Trust & Verification:</strong> Send messages with your brand name and logo (Verified Sender).</li>
                <li><strong>No App Required:</strong> Reach customers directly on their default Android messaging app.</li>
                <li><strong>Interactive Elements:</strong> Add 'Book Now' or 'Shop Now' buttons directly into the message.</li>
            </ul>
        </>
    )

    return (
        <SEOLandingPage
            title="RCS Business Messaging Platform"
            subtitle="Stand out in the inbox with rich media, interactive buttons, and verified brand profiles."
            faqs={faqs}
            content={content}
        />
    )
}
