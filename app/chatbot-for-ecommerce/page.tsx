import { Metadata } from 'next'
import { SEOLandingPage } from "@/components/seo-landing-page"

export const metadata: Metadata = {
    title: "Best Chatbot for E-commerce in India | Retail Automation Raipur",
    description: "Boost your online sales with BotrixAI's e-commerce chatbots. Automate order tracking, abandoned cart recovery, and customer support for D2C brands in Raipur and India.",
    keywords: ["Best Chatbot for E-commerce in India", "Retail Automation Raipur", "Shopify WhatsApp Bot India", "E-commerce Bot Chhattisgarh"],
    alternates: {
        canonical: "https://www.botrixai.com/chatbot-for-ecommerce"
    }
}

export default function EcommerceChatbot() {
    const faqs = [
        {
            question: "How do chatbots help in abandoned cart recovery?",
            answer: "Our bots send automated WhatsApp reminders to customers who left items in their cart, often including a discount code to encourage completion."
        }
    ]

    const content = (
        <>
            <h2>The Best Chatbot for E-commerce: Scaling D2C Brands in India</h2>
            <p>
                The <strong>Indian e-commerce</strong> market is booming. To stay ahead, brands need the
                <strong>best chatbot for e-commerce in India</strong>. BotrixAI helps retail businesses
                in <strong>Raipur, Chhattisgarh</strong>, and across the nation to automate their entire
                sales and support lifecycle.
            </p>

            <h3>Drive Sales with E-commerce Automation</h3>
            <ul>
                <li><strong>Order Tracking:</strong> Automated updates on shipping and delivery via <a href="/whatsapp-automation-platform">WhatsApp</a>.</li>
                <li><strong>Abandoned Cart Recovery:</strong> Re-engage shoppers and boost revenue with timely reminders.</li>
                <li><strong>FAQ Automation:</strong> Handle common queries about returns, refunds, and sizing instantly.</li>
            </ul>

            <h3>Retail Automation in Raipur</h3>
            <p>
                Local retailers in <strong>Raipur</strong> can now go digital with ease. Our <strong>automation platform for retail in Raipur</strong>
                is perfect for small and medium enterprises looking to expand their reach.
            </p>
        </>
    )

    return (
        <SEOLandingPage
            title="Best Chatbot for E-commerce & Retail"
            subtitle="Automate your sales funnel and delight your customers. The essential tool for e-commerce in Raipur and India."
            faqs={faqs}
            content={content}
        />
    )
}
