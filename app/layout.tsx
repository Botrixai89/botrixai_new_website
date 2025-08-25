import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import CookieConsent from '@/components/cookie-consent'
import BackgroundLines from '@/components/background-lines'

export const metadata: Metadata = {
  title: 'BotrixAI - AI Agent & Automation Platform for WhatsApp & Customer Service',
  description: 'BotrixAI is the premier AI automation platform for WhatsApp marketing, voice bots, and customer service. Transform business communication with intelligent AI agents from BotrixAI.',
  generator: 'BotrixAI',
  keywords: ['BotrixAI', 'Botrix AI', 'Botrix', 'BotrixAI platform', 'BotrixAI WhatsApp automation', 'BotrixAI customer service', 'BotrixAI voice bots'],
  applicationName: 'BotrixAI Platform',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    siteName: 'BotrixAI',
    title: 'BotrixAI - AI Agent & Automation Platform for WhatsApp & Customer Service',
    description: 'BotrixAI is the premier AI automation platform for WhatsApp marketing, voice bots, and customer service. Transform business communication with intelligent AI agents from BotrixAI.',
    url: 'https://botrixai.com',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BotrixAI',
    creator: '@BotrixAI',
    title: 'BotrixAI - AI Agent & Automation Platform for WhatsApp & Customer Service',
    description: 'BotrixAI is the premier AI automation platform for WhatsApp marketing, voice bots, and customer service. Transform business communication with intelligent AI agents from BotrixAI.',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <BackgroundLines />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
