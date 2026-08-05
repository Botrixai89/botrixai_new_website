import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Automation Company in Chhattisgarh | Best AI Solutions",
    description: "BotrixAI is the leading automation company in Chhattisgarh. Providing AI chatbots, WhatsApp API, and enterprise automation for businesses in Raipur, Bhilai, and Durg.",
    keywords: ["Automation Company in Chhattisgarh", "AI Solutions Chhattisgarh", "Business Automation Raipur", "Chhattisgarh Tech Hub"],
    alternates: {
        canonical: "https://www.botrixai.com/automation-company-in-chhattisgarh"
    }
}

export default function AutomationChhattisgarh() {
    const faqs = [
        {
            question: "Is BotrixAI based in Chhattisgarh?",
            answer: "Yes, BotrixAI is fundamentally a Chhattisgarh-born company, with its main headquarters in Raipur, serving the entire state."
        }
    ]

    const content = (
        <>
            <h2>Empowering the Heart of India: The Leading Automation Company in Chhattisgarh</h2>
            <p>
                <strong>Chhattisgarh</strong> is a land of massive industrial and retail opportunity.
                BotrixAI is proud to be the foremost <strong>automation company in Chhattisgarh</strong>,
                bridging the gap between traditional business and modern AI technology.
            </p>

            <h3>Complete Automation for Chhattisgarh Enterprises</h3>
            <ul>
                <li><strong>AI Chatbots:</strong> Smart agents for Raipur showrooms and national brands.</li>
                <li><strong>WhatsApp API Integration:</strong> Official Meta partnership for <strong>Raipur</strong> brands.</li>
                <li><strong>Custom CRM Automation:</strong> Streamlining local sales cycles in <strong>Durg, Bhilai, and Bilaspur</strong>.</li>
            </ul>

            <p>
                Our mission is to take <strong>Chhattisgarh</strong> businesses to the national stage using
                advanced <a href="/automation-platform-for-business">business automation</a>.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Premier Automation Company in Chhattisgarh"
            subtitle="Local roots, global technology. Transforming Chhattisgarh's business landscape with AI."
            faqs={faqs}
            content={content}
        />
    )
}
