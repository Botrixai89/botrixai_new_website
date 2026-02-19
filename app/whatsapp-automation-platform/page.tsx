import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "WhatsApp Automation Platform | Best Chatbot for Business",
    description: "Automate your sales and support on WhatsApp with BotrixAI's intelligent platform. Build powerful chatbots, send bulk notifications, and manage leads in Raipur and India.",
    keywords: ["WhatsApp Automation Platform", "WhatsApp Chatbot India", "Business Automation Software", "WhatsApp Marketing Tool"],
    alternates: {
        canonical: "https://www.botrixai.com/whatsapp-automation-platform"
    }
}

export default function WhatsAppAutomation() {
    const faqs = [
        {
            question: "What is a WhatsApp Automation Platform?",
            answer: "It's a software that uses the WhatsApp Business API to automate customer interactions, send timely notifications, and manage lead workflows without human intervention."
        },
        {
            question: "Is WhatsApp automation legal?",
            answer: "Yes, as long as you use the official WhatsApp Business API provided by an authorized partner like BotrixAI. Avoid using unauthorized 'scanners' or 'clone' apps."
        }
    ]

    const content = (
        <>
            <h2>Transform Your ROI with the Best WhatsApp Automation Platform</h2>
            <p>
                Modern businesses in <strong>India</strong> are moving away from reactive support to
                proactive <strong>WhatsApp automation</strong>. BotrixAI offers the most comprehensive
                platform for scaling your operations in <strong>Raipur, Chhattisgarh</strong>, and beyond.
            </p>

            <h3>Key Benefits of Our Platform</h3>
            <ul>
                <li><strong>24/7 Availability:</strong> Never miss a lead from your <strong>Raipur</strong> showroom or online store.</li>
                <li><strong>Bulk Broadcasting:</strong> Send marketing updates to thousands of opted-in customers in <strong>India</strong> safely.</li>
                <li><strong>Direct CRM Sync:</strong> Automatically push WhatsApp leads to your sales team's dashboard.</li>
            </ul>

            <h3>Use Cases for WhatsApp Automation in Raipur</h3>
            <p>
                From real estate site visit bookings to restaurant table reservations, our
                <strong>automation platform for business</strong> is tailored for the local <strong>Chhattisgarh</strong> ecosystem.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="WhatsApp Automation Platform & Chatbot Builder"
            subtitle="Automate every customer touchpoint on India's favorite messaging app. Build bots that sell while you sleep."
            faqs={faqs}
            content={content}
        />
    )
}
