import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Best Chatbot for Real Estate in India | Property Automation Raipur",
    description: "Convert more site visits and leads with BotrixAI's real estate chatbots. The best chatbot for real estate developers and agents in Raipur and India.",
    keywords: ["Best Chatbot for Real Estate India", "Real Estate Automation Raipur", "Property Sales Bot", "Real Estate WhatsApp Marketing"],
    alternates: {
        canonical: "https://www.botrixai.com/chatbot-for-real-estate"
    }
}

export default function RealEstateChatbot() {
    const faqs = [
        {
            question: "How can chatbots help in real estate sales?",
            answer: "Our bots can instantly qualify leads, share property brochures, and even schedule site visits for your projects in Raipur automatically."
        }
    ]

    const content = (
        <>
            <h2>The Best Chatbot for Real Estate in India: Sell Smarter, Not Harder</h2>
            <p>
                The <strong>Indian real estate</strong> market is highly competitive. BotrixAI provides the
                <strong>best chatbot for real estate</strong>, helping developers in <strong>Raipur, Chhattisgarh</strong>,
                to capture high-intent buyers 24/7.
            </p>

            <h3>Project Sales Automation in Raipur</h3>
            <ul>
                <li><strong>Lead Qualification:</strong> Filter serious buyers from casual inquirers instantly on <strong>WhatsApp</strong>.</li>
                <li><strong>Brochure on Demand:</strong> Send high-quality PDFs and virtual tour links as soon as someone asks.</li>
                <li><strong>Site Visit Scheduling:</strong> Sync with your sales team's calendar to book property tours in <strong>Naya Raipur</strong> and beyond.</li>
            </ul>

            <h3>Why Real Estate Pros in Chhattisgarh Choose BotrixAI?</h3>
            <p>
                From RERA compliance info to location advantages, our <strong>automation platform</strong>
                is pre-trained for the <strong>India market</strong>.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Best Chatbot for Real Estate & Property"
            subtitle="Automate your property sales funnel and never miss a site visit again. Empowering Raipur's builders."
            faqs={faqs}
            content={content}
        />
    )
}
