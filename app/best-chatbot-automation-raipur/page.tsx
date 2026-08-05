import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Best Chatbot Automation in Raipur | WhatsApp API Raipur",
    description: "Ranked #1 for chatbot automation in Raipur. BotrixAI provides the best WhatsApp automation and AI chatbot services for local business growth in Chhattisgarh.",
    keywords: ["Best Chatbot Automation in Raipur", "Chatbot Services Raipur", "AI Automation Chhattisgarh", "WhatsApp Bot Raipur"],
    alternates: {
        canonical: "https://www.botrixai.com/best-chatbot-automation-raipur"
    }
}

export default function BestChatbotRaipur() {
    const faqs = [
        {
            question: "How can chatbot automation help my Raipur business?",
            answer: "In Raipur, businesses use chatbots to automate appointment bookings, customer support, and sales lead qualification via WhatsApp and Web."
        }
    ]

    const content = (
        <>
            <h2>Best Chatbot Automation in Raipur for Explosive Growth</h2>
            <p>
                If you are looking for the <strong>best chatbot automation in Raipur</strong>, your search
                ends here. BotrixAI has helped 50+ businesses in <strong>Chhattisgarh</strong> to
                streamline their customer service and multiply their sales using intelligent AI agents.
            </p>

            <h3>Complete Automation for Raipur Stores & Showrooms</h3>
            <p>
                Whether you run a jewellery store in <strong>Pandri</strong> or a car showroom on
                <strong>VIP Road</strong>, our <strong>automation platform for business</strong>
                is designed to capture every walk-in and web inquiry automatically.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Best Chatbot Automation in Raipur"
            subtitle="Transform your local Raipur business into an automated profit machine. Trusted by 50+ local brands."
            faqs={faqs}
            content={content}
        />
    )
}
