import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://botrixai.com'
  
  // Main pages
  const mainPages = [
    '',
    '/about',
    '/botrixai',
    '/features',
    '/blog',
    '/faq',
    '/contact',
    '/integrations',
    '/partners',
    '/resources',
    '/privacy',
    '/terms'
  ]

  // Solution pages
  const solutionPages = [
    '/solutions/enterprise',
    '/solutions/customer-service',
    '/solutions/contact-center',
    '/solutions/sales-marketing',
    '/solutions/voice-agent',
    '/solutions/voice-agents',
    '/solutions/web-agents',
    '/solutions/whatsapp-bot',
    '/solutions/whatsapp-marketing'
  ]

  // Industry pages
  const industryPages = [
    '/solutions/industries/automotive',
    '/solutions/industries/aviation-logistics',
    '/solutions/industries/banking-financial',
    '/solutions/industries/education',
    '/solutions/industries/healthcare',
    '/solutions/industries/insurance',
    '/solutions/industries/manufacturing',
    '/solutions/industries/retail-ecommerce',
    '/solutions/industries/travel-tourism',
    '/solutions/industries/utilities'
  ]

  // Blog post slugs (based on our created blog posts)
  const blogPosts = [
    '/blog/whatsapp-automation-roi',
    '/blog/voice-ai-contact-center',
    '/blog/ai-customer-service-trends-2025',
    '/blog/crm-integration-best-practices',
    '/blog/multi-language-chatbot-deployment',
    '/blog/security-compliance-ai-agents'
  ]

  // Social media SEO pages
  const socialPages = [
    '/social',
    '/social/linkedin',
    '/social/facebook',
    '/social/instagram',
    '/social/twitter',
    '/social/youtube'
  ]

  const allPages = [...mainPages, ...solutionPages, ...industryPages, ...blogPosts, ...socialPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 
                    page.startsWith('/blog/') ? 'weekly' :
                    page.startsWith('/solutions/') ? 'monthly' : 
                    page.startsWith('/social/') ? 'monthly' :
                    'yearly' as 'yearly' | 'daily' | 'weekly' | 'monthly',
    priority: page === '' ? 1 :
             page === '/botrixai' ? 0.95 :
             page.startsWith('/solutions/whatsapp') || page.startsWith('/solutions/voice') || page.startsWith('/solutions/customer') ? 0.9 :
             page.startsWith('/solutions/') || page === '/features' || page === '/about' ? 0.8 :
             page.startsWith('/blog/') || page === '/faq' ? 0.7 :
             page.startsWith('/social/') ? 0.5 :
             0.6,
  }))
}
