import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Best Chatbot for Finance in India | BFSI Automation Raipur",
    description: "Secure and intelligent AI chatbots for banking and finance. Automate KYC, loan inquiries, and investment advice for finance companies in Raipur and India.",
    keywords: ["Best Chatbot for Finance in India", "BFSI Automation Raipur", "Banking WhatsApp Bot Chhattisgarh", "Finance AI Agents"],
    alternates: {
        canonical: "https://www.botrixai.com/chatbot-for-finance"
    }
}

export default function FinanceChatbot() {
    const faqs = [
        {
            question: "Are finance chatbots secure?",
            answer: "Yes, BotrixAI uses enterprise-grade encryption and official WhatsApp API to ensure all financial data remains secure and private."
        }
    ]

    const content = (
        <>
            <h2>The Best Chatbot for Finance: Secure Automation for the BFSI Sector in India</h2>
            <p>
                Trust is the currency of the finance industry. In <strong>India</strong>,
                BotrixAI provides the <strong>best chatbot for finance</strong>, helping banks, NBFCs, and
                fintechs automate their customer support while maintaining the highest security standards.
                For finance companies in <strong>Raipur, Chhattisgarh</strong>, this means faster processing and higher customer retention.
            </p>

            <h3>Key Solutions for Banking & Finance</h3>
            <ul>
                <li><strong>KYC Automation:</strong> Collect and verify identity documents via secure <a href="/whatsapp-business-api-provider-india">WhatsApp API</a>.</li>
                <li><strong>Loan Tracking:</strong> Real-time status updates for loan or credit card applications.</li>
                <li><strong>24/7 Support:</strong> Instant answers to queries about interest rates and branch locations.</li>
            </ul>

            <h3>Automation Platform for Finance in Raipur</h3>
            <p>
                Local financial advisors and insurance agents in <strong>Raipur</strong> can now compete with
                national giants by using BotrixAI's <strong>automation platform</strong>. We help you stay
                connected with your clients 24/7.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Best Chatbot for Finance & Banking"
            subtitle="Secure, intelligent, and scalable AI solutions for the BFSI sector. Serving Raipur and India."
            faqs={faqs}
            content={content}
        />
    )
}
