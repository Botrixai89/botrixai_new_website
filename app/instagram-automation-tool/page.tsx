import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Instagram Automation Tool India | DM & Comment Bot",
    description: "Automate your Instagram growth with BotrixAI. Reply to comments, send auto-DMs to interested buyers, and scale your social sales in Raipur and India.",
    keywords: ["Instagram Automation Tool India", "IG DM Bot India", "Instagram Sales Automation", "Social Commerce Raipur"],
    alternates: {
        canonical: "https://www.botrixai.com/instagram-automation-tool"
    }
}

export default function InstagramAutomation() {
    const faqs = [
        {
            question: "Is Instagram automation safe?",
            answer: "Yes, when you use BotrixAI's official API-based tools. We follow Meta's strict guidelines to ensure your account remains safe and compliant."
        },
        {
            question: "Can I automate replies to my Instagram Stories?",
            answer: "Absolutely. Our tool can trigger automated DM sequences whenever someone mentions you in their story or replies to yours."
        }
    ]

    const content = (
        <>
            <h2>Instagram Automation Tool: Turn Engagement into Sales in India</h2>
            <p>
                Stop losing customers in the comments section. BotrixAI's <strong>Instagram automation tool</strong>
                helps D2C brands in <strong>India</strong> to instantly respond to every query, moving
                prospects from social media to sales faster than ever.
            </p>

            <h3>Grow Your Brand in Raipur with Social Automation</h3>
            <ul>
                <li><strong>Comment to DM:</strong> Automatically send details to anyone who comments 'Price' or 'Interested' on your posts.</li>
                <li><strong>Story Reply Automation:</strong> Engage every single story interaction without lifting a finger.</li>
                <li><strong>Catalog Integration:</strong> Showcase your products directly in the Instagram DM.</li>
            </ul>
        </>
    )

    return (
        <SEOLandingPage
            title="Instagram Sales & Growth Automation"
            subtitle="Don't just post content—start conversations. The ultimate tool for social commerce in India."
            faqs={faqs}
            content={content}
        />
    )
}
