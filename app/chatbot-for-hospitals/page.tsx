import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Best Chatbot for Hospitals in India | Healthcare Automation Raipur",
    description: "Automate patient appointments, lab reports, and inquiries with BotrixAI's healthcare chatbots. The best chatbot for hospitals in Raipur and India.",
    keywords: ["Best Chatbot for Hospitals India", "Healthcare Automation Raipur", "Patient Appointment Bot", "Hospital WhatsApp API"],
    alternates: {
        canonical: "https://www.botrixai.com/chatbot-for-hospitals"
    }
}

export default function HospitalChatbot() {
    const faqs = [
        {
            question: "Can chatbots handle patient appointments?",
            answer: "Yes, our bots can sync with your hospital management system to allow patients in Raipur to book appointments directly via WhatsApp."
        },
        {
            question: "Is patient data secure?",
            answer: "Security is our priority. Our healthcare bots are designed to be HIPAA compliant and use end-to-end encryption for all sensitive communication."
        }
    ]

    const content = (
        <>
            <h2>The Best Chatbot for Hospitals in India: Revolutionizing Patient Care</h2>
            <p>
                In the medical field, every second counts. BotrixAI provides the
                <strong>best chatbot for hospitals in India</strong>, helping healthcare providers in
                <strong>Raipur, Chhattisgarh</strong>, to reduce administrative load and improve patient satisfaction.
            </p>

            <h3>How Healthcare Automation Helps Your Raipur Clinic or Hospital</h3>
            <ul>
                <li><strong>Automated Bookings:</strong> Patients can book, reschedule, or cancel appointments via <strong>WhatsApp API</strong>.</li>
                <li><strong>Report Delivery:</strong> Send secure links to lab reports and prescriptions automatically.</li>
                <li><strong>Emergency FAQs:</strong> Provide instant answers to common queries about visiting hours, insurance, and locations.</li>
            </ul>

            <h3>Automation Platform for Healthcare in Raipur</h3>
            <p>
                Local diagnostic centers and large mult-speciality hospitals in <strong>Raipur</strong>
                are already seeing a 50% reduction in call volume by switching to
                our <strong>automation platform for business</strong>.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Best Chatbot for Hospitals & Healthcare"
            subtitle="Improve patient experience and streamline operations with intelligent AI agents. Serving Raipur's medical community."
            faqs={faqs}
            content={content}
        />
    )
}
