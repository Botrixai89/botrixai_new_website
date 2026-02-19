import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Best Chatbot for Education India | School & College Automation Raipur",
    description: "Automate admissions, fees, and student queries with BotrixAI's education chatbots. Best chatbot for schools, colleges, and coaching centers in Raipur and India.",
    keywords: ["Best Chatbot for Education India", "Education Automation Raipur", "School Admission Bot", "Coaching Institute Chatbot"],
    alternates: {
        canonical: "https://www.botrixai.com/chatbot-for-education"
    }
}

export default function EducationChatbot() {
    const faqs = [
        {
            question: "Can chatbots manage student admissions?",
            answer: "Yes, our bots can handle initial entry queries, share course details, and even collect application forms for institutes in Raipur."
        }
    ]

    const content = (
        <>
            <h2>The Best Chatbot for Education in India: Smarter Admissions</h2>
            <p>
                Educational institutions in <strong>India</strong> are overwhelmed with queries during
                admission season. BotrixAI provides the <strong>best chatbot for education</strong>,
                helping schools and coaching centers in <strong>Raipur, Chhattisgarh</strong>, to
                manage student and parent interactions efficiently.
            </p>

            <h3>Automate Your Coaching Center in Raipur</h3>
            <ul>
                <li><strong>Admission Inquiries:</strong> Handle thousands of course queries instantly on <strong>WhatsApp</strong>.</li>
                <li><strong>Fee Reminders:</strong> Send automated alerts for upcoming fee payments.</li>
                <li><strong>Attendance & Results:</strong> Keep parents informed with automated result broadcasts.</li>
            </ul>

            <h3>Education Automation Platform for Chhattisgarh</h3>
            <p>
                Join top schools in <strong>Raipur</strong> using our <strong>automation platform for business</strong>
                to scale their outreach.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Best Chatbot for Education & Coaching"
            subtitle="Scale your enrollments and simplify student communication. The smart way to manage your Raipur institute."
            faqs={faqs}
            content={content}
        />
    )
}
