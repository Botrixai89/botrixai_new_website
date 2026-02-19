import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import CookieConsent from '@/components/cookie-consent'
import BackgroundLines from '@/components/background-lines'

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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
        <BackgroundLines />
        {children}
        <CookieConsent />
        <FloatingWidgets />
        <ChatbotWidget />
      </body>
    </html>
  )
}
