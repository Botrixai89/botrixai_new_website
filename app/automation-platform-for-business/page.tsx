import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Automation Platform for Business | Unified AI Solutions",
    description: "The most powerful automation platform for business in India. Scale your sales, marketing, and support with BotrixAI's unified AI ecosystem. Serving Raipur and India.",
    keywords: ["Automation Platform for Business India", "Business AI Software Raipur", "Enterprise Automation Tool", "Unified Chatbot Platform"],
    alternates: {
        canonical: "https://www.botrixai.com/automation-platform-for-business"
    }
}

export default function BusinessAutomation() {
    const faqs = [
        {
            question: "Can this platform integrate with my CRM?",
            answer: "Yes, BotrixAI is a versatile automation platform for business that integrates with Zoho, Salesforce, HubSpot, and local ERP systems commonly used in India."
        }
    ]

    const content = (
        <>
            <h2>The Definitive Automation Platform for Business in India</h2>
            <p>
                Efficiency is no longer a luxury; it's a necessity. BotrixAI provides the
                <strong>best automation platform</strong> for modern enterprises in <strong>India</strong>.
                From early-stage startups in <strong>Raipur</strong> to national giants, our platform
                scales with your needs.
            </p>

            <h3>One Platform, Endless Possibilities</h3>
            <ul>
                <li><strong>Unified Dashboard:</strong> Manage WhatsApp, Instagram, and RCS in one place.</li>
                <li><strong>No-Code Builder:</strong> Build complex AI agents without writing a single line of code.</li>
                <li><strong>Advanced Analytics:</strong> Track every conversation and measure your ROI accurately.</li>
            </ul>
        </>
    )

    return (
        <SEOLandingPage
            title="Comprehensive Automation Platform for Business"
            subtitle="The all-in-one AI ecosystem to grow your brand. Built for the ambitious entrepreneurs of India."
            faqs={faqs}
            content={content}
        />
    )
}
