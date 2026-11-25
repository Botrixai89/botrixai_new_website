"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const handleViewPreferences = () => {
    // You can implement a more detailed preferences modal here
    localStorage.setItem("cookie-consent", "preferences")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface-1 rounded-lg light-edge max-w-md w-full p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg text-bone mb-2 font-medium tracking-[-0.02em]">About Cookies</h3>
          <p className="text-sm text-dim leading-relaxed">
            We use cookies and similar technologies to collect and process information about your use of our website. 
            This information is used to improve our website, tailor our marketing efforts, and provide you with a more 
            personalized experience. By clicking "Confirm my preferences", you consent to our use of cookies in accordance 
            with our Privacy Statement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <Button 
            onClick={handleAccept}
            className="py-2 px-4 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
          >
            Confirm my preferences
          </Button>
          <Button 
            onClick={handleViewPreferences}
            variant="outline"
            className="py-2 px-4 rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium"
          >
            View preferences
          </Button>
        </div>

        <div className="text-center">
          <div className="flex justify-center space-x-4 text-sm">
            <Link 
              href="/privacy" 
              className="text-signal hover:underline"
            >
              Cookie Policy
            </Link>
            <Link 
              href="/privacy" 
              className="text-signal hover:underline"
            >
              Privacy Statement
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 