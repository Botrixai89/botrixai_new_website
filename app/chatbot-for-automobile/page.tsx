import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Best Chatbot for Automobile Industry India | Car Dealer Automation Raipur",
    description: "Automate test-drive bookings, service reminders, and lead gen for car showrooms. Best automobile chatbot for dealers in Raipur and India.",
    keywords: ["Best Chatbot for Automobile Industry India", "Automobile Automation Raipur", "Car Dealer Bot Chhattisgarh", "Service Booking Bot"],
    alternates: {
        canonical: "https://www.botrixai.com/chatbot-for-automobile"
    }
}

export default function AutomobileChatbot() {
    const faqs = [
        {
            question: "How can chatbots help car dealerships in Raipur?",
            answer: "Dealers use our bots to automate test-drive bookings, send service reminders, and instantly share brochures with interested buyers."
        }
    ]

    const content = (
        <>
            <h2>The Best Chatbot for Automobile Industry: Accelerating Sales in India</h2>
            <p>
                The <strong>automobile industry in India</strong> is highly driven by customer experience.
                BotrixAI provides the <strong>best chatbot for the automobile sector</strong>, helping manufacturers
                and dealers in <strong>Raipur, Chhattisgarh</strong>, to capture and qualify leads 24/7.
            </p>

            <h3>Solutions for Car Showrooms & Service Centers</h3>
            <ul>
                <li><strong>Test Drive Booking:</strong> Automate the entire booking process via <a href="/whatsapp-business-api-provider-india">WhatsApp API</a>.</li>
                <li><strong>Service Reminders:</strong> Send timely alerts for vehicle maintenance to increase service revenue.</li>
                <li><strong>Interactive Brochures:</strong> Share high-quality images and specs of the latest models instantly.</li>
            </ul>

            <h3>Automaton Platform for Automobile in Raipur</h3>
            <p>
                Raipur's bustling automotive market can benefit immensely from BotrixAI's <strong>automation platform</strong>.
                We help you stay ahead of the competition by providing instant responses to every potential buyer.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Best Chatbot for Automobile & Showrooms"
            subtitle="Smart automation to drive test-drives and service bookings. Empowering Raipur's automotive sector."
            faqs={faqs}
            content={content}
        />
    )
}
