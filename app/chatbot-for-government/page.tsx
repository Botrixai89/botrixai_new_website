import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Best Chatbot for Government & Public Services India | GovTech Raipur",
    description: "Enhance citizen engagement with BotrixAI's government chatbots. Automate grievance redressal, info sharing, and public service alerts in Raipur and India.",
    keywords: ["Best Chatbot for Government India", "GovTech Raipur", "Public Service Bot Chhattisgarh", "Citizen Engagement Platform"],
    alternates: {
        canonical: "https://www.botrixai.com/chatbot-for-government"
    }
}

export default function GovernmentChatbot() {
    const faqs = [
        {
            question: "How can chatbots improve public services?",
            answer: "Chatbots provide citizens with instant information about government schemes, help with application processes, and offer a transparent channel for grievance redressal."
        }
    ]

    const content = (
        <>
            <h2>The Best Chatbot for Government: Modernizing Public Services in India</h2>
            <p>
                Digital India starts with efficient citizen engagement. BotrixAI offers the
                <strong>best chatbot for government</strong> and public services, helping departments in
                <strong>Raipur, Chhattisgarh</strong>, to communicate effectively with the public.
            </p>

            <h3>Solutions for Public Service & E-Governance</h3>
            <ul>
                <li><strong>Grievance Redressal:</strong> Brining transparency to citizen complaints via <a href="/whatsapp-business-api-provider-india">WhatsApp</a>.</li>
                <li><strong>Scheme Information:</strong> Instant access to details about local and national welfare schemes.</li>
                <li><strong>Emergency Alerts:</strong> Mass broadcasting of critical information and updates.</li>
            </ul>

            <h3>GovTech in Raipur, Chhattisgarh</h3>
            <p>
                As Raipur transforms into a Smart City, <strong>automation platforms</strong> like BotrixAI
                are essential for better governance. We help local bodies in <strong>Raipur</strong> bridge the gap.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Best Chatbot for Government & Public Services"
            subtitle="Bridging the gap between citizens and services with AI. Innovative GovTech for Raipur and India."
            faqs={faqs}
            content={content}
        />
    )
}
