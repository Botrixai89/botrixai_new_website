import React from 'react';
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LocalBusinessSchema } from "@/components/schema/local-business-schema"
import { FAQSchema } from "@/components/schema/faq-schema"
import { ArrowRight } from "lucide-react"
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

const CALENDLY = "https://calendly.com/connectbotrixai/"

/**
 * Shared template for the location / industry SEO pages (design.md):
 * canvas hero with blueprint grid, long-form copy beside a sticky booking
 * card, hairline FAQ rows, and one green spotlight card to close.
 */
export const SEOLandingPage = ({ title, subtitle, content, faqs, ctaText = "Book Free Demo" }: SEOPageProps) => {
    return (
        <div className="w-full overflow-x-clip bg-ink">
            <LocalBusinessSchema />
            <FAQSchema items={faqs} />
            <Header />

            <main>
                {/* Hero */}
                <section className="site-hero px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-surface-1 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.3em] text-bone/70">
                            <span className="h-1.5 w-1.5 animate-[pulse-dot_1.6s_ease-in-out_infinite] rounded-full bg-signal" />
                            BOTRIXAI
                        </span>
                        <h1 className="mt-6 text-[clamp(2.4rem,6vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.05em] text-bone">
                            {title}
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.45] text-dim">
                            {subtitle}
                        </p>
                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <a
                                href={CALENDLY}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-medium text-ink transition-transform active:scale-95"
                            >
                                {ctaText}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-surface-1 px-7 py-4 text-sm font-medium text-bone transition-colors hover:bg-surface-2"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Content & booking form */}
                <section className="border-t border-hairline-soft px-5 py-20 md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
                        <article className="site-prose lg:col-span-7">
                            {content}
                        </article>
                        <aside className="lg:col-span-5">
                            <div className="sticky top-28">
                                <BookingForm />
                            </div>
                        </aside>
                    </div>
                </section>

                {/* FAQ — design.md faq-row: canvas rows split by soft hairlines */}
                <section className="border-t border-hairline-soft px-5 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center">
                            <span className="font-mono text-[11px] tracking-[0.3em] text-signal">FAQ</span>
                            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.02] tracking-[-0.045em] text-bone">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="mt-12 divide-y divide-hairline-soft border-y border-hairline-soft">
                            {faqs.map((faq, index) => (
                                <div key={index} className="grid gap-3 py-7 md:grid-cols-[3rem_1fr]">
                                    <span className="font-mono text-[12px] tracking-[0.2em] text-dim">{String(index + 1).padStart(2, "0")}</span>
                                    <div>
                                        <h3 className="text-[1.2rem] font-medium tracking-[-0.02em] text-bone">{faq.question}</h3>
                                        <p className="mt-2.5 leading-[1.6] text-dim">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing CTA — one gradient spotlight card */}
                <section className="px-5 pb-24 md:px-8">
                    <div className="spotlight-card mx-auto max-w-[1240px] rounded-[30px] px-6 py-16 text-center md:py-20">
                        <span className="font-mono text-[11px] tracking-[0.3em] text-signal">GET STARTED</span>
                        <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[1.0] tracking-[-0.045em] text-bone">
                            Ready to Scale Your Business in Raipur and Beyond?
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-[1.45] text-bone/70">
                            Join 50+ businesses trust BotrixAI for their automation needs.
                        </p>
                        <Link
                            href="/contact"
                            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-medium text-ink transition-transform active:scale-95"
                        >
                            Get in touch now
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
