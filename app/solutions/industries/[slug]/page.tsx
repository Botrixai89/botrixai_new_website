import Header from "@/components/header"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"

const INDUSTRY_TITLES: Record<string, string> = {
  "automotive": "AI Agents for Automotive",
  "aviation-logistics": "AI Agents for Aviation & Logistics",
  "banking-financial-services": "AI Agent for Banking & Financial Services",
  "insurance": "AI Agent for Insurance",
  "healthcare": "AI Agents for Healthcare",
  "manufacturing": "AI Agent Manufacturing",
  "retail-e-commerce": "AI Agents for Retail & E-Commerce",
  "public-services-utilities": "AI Agents for Public Services & Utilities",
  "education": "AI Agents for Education",
  "travel-tourism": "AI Agents for Travel & Tourism",
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const title = INDUSTRY_TITLES[params.slug]
  if (!title) return notFound()

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-lg text-gray-600">Content coming soon. We will add detailed solutions, use-cases, and benefits for this industry.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}



