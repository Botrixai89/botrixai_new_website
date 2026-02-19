import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Chatbot Company in Raipur | Best AI Automation Raipur",
    description: "BotrixAI is the #1 chatbot company in Raipur, Chhattisgarh. Leading the way in AI chatbots, WhatsApp automation, and customer support for local businesses.",
    keywords: ["Chatbot Company in Raipur", "AI Automation Raipur", "Chatbot Services Raipur", "Raipur Tech Companies"],
    alternates: {
        canonical: "https://www.botrixai.com/chatbot-company-in-raipur"
    }
}

export default function ChatbotRaipur() {
    const faqs = [
        {
            question: "Which is the best chatbot company in Raipur?",
            answer: "BotrixAI is recognized as the best chatbot company in Raipur, providing advanced AI solutions and localized support for Raipur's top brands."
        }
    ]

    const content = (
        <>
            <h2>Dominating Local Tech: The Best Chatbot Company in Raipur</h2>
            <p>
                Raipur is evolving, and so should your business. As the leading <strong>chatbot company in Raipur</strong>,
                BotrixAI is dedicated to helping local enterprises automate their operations.
                Whether you run a retail store in <strong>Pandri</strong> or a consultancy in <strong>Civil Lines</strong>,
                our AI agents are built to serve your Raipur-based clientele.
            </p>

            <h3>Hyper-Local Automation Solutions</h3>
            <ul>
                <li><strong>Local Tone & Language:</strong> Our bots understand the nuances of the Raipur market.</li>
                <li><strong>Face-to-Face Consultation:</strong> Being a <strong>Raipur-based company</strong>, we offer on-site demos.</li>
                <li><strong>Serving the Smart City:</strong> We align our tech with the vision of Raipur Smart City.</li>
            </ul>

            <h3>Serving Raipur, Bhilai, Durg, and Bilaspur</h3>
            <p>
                While we are the top <strong>chatbot company in Raipur</strong>, our footprint extends across
                <strong>Chhattisgarh</strong>. We provide <a href="/whatsapp-business-api-provider-india">WhatsApp API services</a>
                to all major hubs in the state.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Top-Rated Chatbot Company in Raipur"
            subtitle="The local automation experts Raipur trusts. Scaling Chhattisgarh businesses with world-class AI."
            faqs={faqs}
            content={content}
        />
    )
}
