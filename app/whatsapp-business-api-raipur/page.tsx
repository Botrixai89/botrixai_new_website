import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "WhatsApp Business API in Raipur | WhatsApp Automation Raipur",
    description: "Get official WhatsApp Business API in Raipur from BotrixAI. Local support for WhatsApp marketing, automation, and customer support for businesses in Chhattisgarh.",
    keywords: ["WhatsApp Business API Raipur", "WhatsApp Automation Raipur", "WhatsApp Marketing Chhattisgarh", "Raipur WhatsApp Bot"],
    alternates: {
        canonical: "https://www.botrixai.com/whatsapp-business-api-raipur"
    }
}

export default function WhatsAppRaipur() {
    const faqs = [
        {
            question: "How to get WhatsApp Business API in Raipur?",
            answer: "Getting WhatsApp API in Raipur is easy with BotrixAI. We handle the entire verification process for your Raipur-based business."
        }
    ]

    const content = (
        <>
            <h2>Official WhatsApp Business API in Raipur: Power Your Local Marketing</h2>
            <p>
                WhatsApp is the heart of communication in <strong>Chhattisgarh</strong>.
                BotrixAI provides the official <strong>WhatsApp Business API in Raipur</strong>, enabling local
                businesses to communicate at scale.
            </p>

            <h3>Why Your Raipur Business Needs Our WhatsApp API</h3>
            <ul>
                <li><strong>Blue Tick Verification:</strong> Gain trust with an official business profile in Raipur.</li>
                <li><strong>Local Number Integration:</strong> Use your existing Raipur contact numbers.</li>
                <li><strong>24/7 Automation:</strong> Even when your office in Raipur is closed, your bot is working.</li>
            </ul>

            <p>
                As the premier <a href="/whatsapp-automation-platform">automation platform</a> in the state,
                we understand the unique requirements of <strong>Raipur</strong> businesses.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="WhatsApp Business API Provider in Raipur"
            subtitle="Scale your local business with the world's best WhatsApp automation. Headquartered in Raipur."
            faqs={faqs}
            content={content}
        />
    )
}
