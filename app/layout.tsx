import type { Metadata } from 'next'
import { Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CookieConsent from '@/components/cookie-consent'

// Site-wide type (design.md): Inter Tight for display + body, JetBrains Mono for
// eyebrows/meta. Inter Tight is variable (wght 100–900) — the home hero uses it.
const interTight = Inter_Tight({ variable: '--font-display', subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ variable: '--font-mono-tech', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.botrixai.com'),
  title: {
    default: 'BotrixAI - Best Automation Platform & WhatsApp Business API Provider',
    template: '%s | BotrixAI'
  },
  description: 'BotrixAI is the premier AI automation platform in India for WhatsApp Business API, RCS messaging, and Instagram automation. Scale your business with intelligent AI agents.',
  keywords: [
    'Best Automation Platform',
    'WhatsApp Business API Provider in India',
    'RCS Messaging Platform',
    'Instagram Automation Tool',
    'AI Chatbot Company in India',
    'BotrixAI',
    'WhatsApp Automation India',
    'Best Chatbot Automation in Raipur',
    'WhatsApp Automation Company in Chhattisgarh'
  ],
  authors: [{ name: 'BotrixAI Team' }],
  creator: 'BotrixAI',
  publisher: 'BotrixAI',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.botrixai.com',
    siteName: 'BotrixAI',
    title: 'BotrixAI - Scale Your Business with AI Automation',
    description: 'The #1 WhatsApp Business API and AI Automation platform for Indian enterprises.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BotrixAI - Best Automation Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BotrixAI | Best WhatsApp Automation Platform',
    description: 'Transform your customer engagement with official WhatsApp Business API and AI agents.',
    images: ['/og-image.jpg'],
    creator: '@botrixai'
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.botrixai.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

import { FloatingWidgets } from '@/components/floating-widgets'
import ChatbotWidget from '@/components/chatbot-widget'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <CookieConsent />
        <FloatingWidgets />
        <ChatbotWidget />
      </body>
    </html>
  )
}
