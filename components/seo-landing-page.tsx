import React from 'react';
import { Metadata } from 'next';
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LocalBusinessSchema } from "@/components/schema/local-business-schema"
import { FAQSchema } from "@/components/schema/faq-schema"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { BookingForm } from "@/components/booking-form"

interface FAQItem {
    question: string;
    answer: string;
}

interface SEOPageProps {
    title: string;
    subtitle: string;
    content: React.ReactNode;
    faqs: FAQItem[];
    ctaText?: string;
}

export const SEOLandingPage = ({ title, subtitle, content, faqs, ctaText = "Book Free Demo" }: SEOPageProps) => {
    return (
        <div className="w-full overflow-x-hidden pt-20">
            <LocalBusinessSchema />
            <FAQSchema items={faqs} />
            <Header />

            <main className="bg-white">
                {/* SEO Hero */}
                <section className="relative py-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {title}
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                                {subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-xl text-lg font-bold group">
                                    {ctaText}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-emerald-200 text-emerald-700 px-8 py-6 rounded-xl text-lg font-bold">
                                    View Pricing
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Content & Booking Form */}
                <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-7 prose prose-emerald prose-lg max-w-none">
                            {content}
                        </div>
                        <div className="lg:col-span-5">
                            <div className="sticky top-32">
                                <BookingForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Global CTA */}
                <section className="py-20 bg-emerald-900 text-white">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Business in Raipur and Beyond?</h2>
                        <p className="text-xl text-emerald-100 mb-10">Join 50+ businesses trust BotrixAI for their automation needs.</p>
                        <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 px-10 py-7 rounded-2xl text-xl font-bold">
                            Get in touch now
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
