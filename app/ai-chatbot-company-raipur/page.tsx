import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "AI Chatbot Company in Raipur | Best Chatbot Automation Chhattisgarh",
    description: "BotrixAI is Raipur's leading AI chatbot company. We provide custom WhatsApp bots, sales automation, and customer support solutions for businesses in Chhattisgarh.",
    keywords: ["AI Chatbot Company in Raipur", "Chatbot Company Chhattisgarh", "Best AI Company Raipur", "Raipur Automation Services"],
    alternates: {
        canonical: "https://www.botrixai.com/ai-chatbot-company-raipur"
    }
}

export default function AIChatbotRaipur() {
    const faqs = [
        {
            question: "Which is the best chatbot company in Raipur?",
            answer: "BotrixAI is the #1 AI chatbot company in Raipur, trusted by leading local brands for WhatsApp and customer service automation."
        },
        {
            question: "Where is BotrixAI located?",
            answer: "We are headquartered in Raipur, Chhattisgarh, providing local support and on-ground implementation for our regional clients."
        }
    ]

    const content = (
        <>
            <h2>The Best AI Chatbot Company in Raipur, Chhattisgarh</h2>
            <p>
                Raipur is becoming a hub for technology and innovation. As the
                <strong>top AI chatbot company in Raipur</strong>, BotrixAI is at the forefront of this
                revolution, helping local businesses dominate their market using advanced AI agents.
            </p>

            <h3>Why Raipur Businesses Prefer Local AI Experts</h3>
            <ul>
                <li><strong>On-ground Support:</strong> We understand the <strong>Raipur</strong> market and provide physical support when needed.</li>
                <li><strong>Regional Context:</strong> Our bots are optimized to understand the language and nuances of <strong>Chhattisgarh</strong>.</li>
                <li><strong>Fast Implementation:</strong> Get your automation project live in days, not weeks.</li>
            </ul>
        </>
    )

    return (
        <SEOLandingPage
            title="Leading AI Chatbot Company in Raipur"
            subtitle="Supporting Raipur's digital growth with intelligent automation. Experience the power of local AI expertise."
            faqs={faqs}
            content={content}
        />
    )
}
