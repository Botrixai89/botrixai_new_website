import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Automation Blog - Customer Service Insights & Case Studies | BotrixAI",
  description: "Discover the latest insights on AI customer service automation, WhatsApp marketing strategies, voice bot implementations, and enterprise automation case studies.",
  keywords: [
    "AI automation blog",
    "customer service automation insights",
    "WhatsApp marketing case studies",
    "voice bot implementation guides",
    "chatbot best practices",
    "enterprise AI automation",
    "conversational AI trends",
    "customer service technology",
    "AI agent use cases",
    "automation ROI studies"
  ],
  authors: [{ name: "BotrixAI" }],
  creator: "BotrixAI",
  publisher: "BotrixAI",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AI Automation Blog - Customer Service Insights & Case Studies | BotrixAI",
    description: "Discover the latest insights on AI customer service automation, WhatsApp marketing strategies, voice bot implementations, and enterprise automation case studies.",
    url: "https://botrixai.com/blog",
    siteName: "BotrixAI",
    images: [
      {
        url: "/Automation 11.png",
        width: 900,
        height: 700,
        alt: "BotrixAI Blog - AI Automation Insights and Case Studies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Blog - Customer Service Insights & Case Studies | BotrixAI",
    description: "Discover the latest insights on AI customer service automation, WhatsApp marketing strategies, voice bot implementations, and enterprise automation case studies.",
    images: ["/Automation 11.png"],
    creator: "@BotrixAI",
  },
  alternates: {
    canonical: "https://botrixai.com/blog",
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: "whatsapp-automation-roi",
      title: "How E-commerce Giant Increased Customer Engagement by 350% with WhatsApp Automation",
      excerpt: "Detailed case study showing how automated WhatsApp marketing campaigns transformed customer interactions and drove revenue growth for a major e-commerce platform.",
      category: "Case Study",
      readTime: "8 min read",
      date: "January 15, 2025",
      author: "BotrixAI Team",
      tags: ["WhatsApp Automation", "E-commerce", "ROI", "Customer Engagement"],
      featured: true
    },
    {
      id: "voice-ai-contact-center",
      title: "Implementing Voice AI in Contact Centers: Complete Technical Guide",
      excerpt: "Step-by-step implementation guide for deploying voice AI agents in contact centers, including integration patterns, security considerations, and performance optimization.",
      category: "Technical Guide",
      readTime: "12 min read", 
      date: "January 10, 2025",
      author: "BotrixAI Team",
      tags: ["Voice AI", "Contact Center", "Implementation", "Technical"],
      featured: true
    },
    {
      id: "ai-customer-service-trends-2025",
      title: "AI Customer Service Trends 2025: What Enterprises Need to Know",
      excerpt: "Comprehensive analysis of emerging AI customer service trends, including conversational AI advancements, integration capabilities, and industry predictions.",
      category: "Industry Insights",
      readTime: "6 min read",
      date: "January 8, 2025", 
      author: "BotrixAI Team",
      tags: ["AI Trends", "Customer Service", "Enterprise", "2025"],
      featured: false
    },
    {
      id: "crm-integration-best-practices",
      title: "CRM Integration with AI Agents: Best Practices and Common Pitfalls",
      excerpt: "Essential guide for integrating AI chatbots with CRM systems, covering data synchronization, workflow automation, and customer data management.",
      category: "Best Practices",
      readTime: "10 min read",
      date: "January 5, 2025",
      author: "BotrixAI Team", 
      tags: ["CRM Integration", "AI Agents", "Workflow", "Data Management"],
      featured: false
    },
    {
      id: "multi-language-chatbot-deployment",
      title: "Deploying Multi-Language Chatbots: Scaling Global Customer Support",
      excerpt: "Practical strategies for implementing multi-language AI agents, including localization techniques, cultural considerations, and performance optimization.",
      category: "Implementation",
      readTime: "9 min read",
      date: "January 3, 2025",
      author: "BotrixAI Team",
      tags: ["Multi-language", "Global Support", "Localization", "Deployment"],
      featured: false
    },
    {
      id: "security-compliance-ai-agents",
      title: "Security and Compliance in Enterprise AI Agent Deployments",
      excerpt: "Comprehensive overview of security best practices, compliance requirements (GDPR, CCPA), and risk mitigation strategies for enterprise AI implementations.",
      category: "Security & Compliance",
      readTime: "11 min read",
      date: "December 30, 2024",
      author: "BotrixAI Team",
      tags: ["Security", "Compliance", "Enterprise", "GDPR", "Risk Management"],
      featured: false
    }
  ]

  const categories = ["All", "Case Study", "Technical Guide", "Industry Insights", "Best Practices", "Implementation", "Security & Compliance"]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://botrixai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://botrixai.com/blog"
      }
    ]
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BotrixAI AI Automation Blog",
    "description": "Insights, case studies, and technical guides on AI customer service automation, WhatsApp marketing, and enterprise chatbot implementations",
    "url": "https://botrixai.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "BotrixAI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://botrixai.com/images/botrix-logo01.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization", 
        "name": "BotrixAI"
      },
      "url": `https://botrixai.com/blog/${post.id}`,
      "keywords": post.tags.join(", ")
    }))
  }

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                AI Automation Insights & <span className="text-[#00D563]">Case Studies</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover proven strategies, technical guides, and real-world case studies on AI customer service automation, WhatsApp marketing, and enterprise chatbot implementations.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    index === 0 
                      ? 'bg-[#00D563] text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white" aria-labelledby="featured-posts">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="featured-posts" className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#00D563]/10 text-[#00D563] text-sm font-medium">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-[#00D563] transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#00D563] hover:text-[#00D563]/80 font-medium"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-gray-50" aria-labelledby="all-posts">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="all-posts" className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-[#00D563] transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#00D563] hover:text-[#00D563]/80 font-medium text-sm"
                    >
                      Read Article <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-[#00D563]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with AI Automation Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest case studies, technical guides, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20"
              />
              <button className="px-6 py-3 bg-white text-[#00D563] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
