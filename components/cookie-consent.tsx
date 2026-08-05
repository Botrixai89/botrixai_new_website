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
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">About Cookies</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We use cookies and similar technologies to collect and process information about your use of our website. 
            This information is used to improve our website, tailor our marketing efforts, and provide you with a more 
            personalized experience. By clicking "Confirm my preferences", you consent to our use of cookies in accordance 
            with our Privacy Statement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <Button 
            onClick={handleAccept}
            className="bg-[#00D563] hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
          >
            Confirm my preferences
          </Button>
          <Button 
            onClick={handleViewPreferences}
            variant="outline"
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded"
          >
            View preferences
          </Button>
        </div>

        <div className="text-center">
          <div className="flex justify-center space-x-4 text-sm">
            <Link 
              href="/privacy" 
              className="text-[#00D563] hover:underline"
            >
              Cookie Policy
            </Link>
            <Link 
              href="/privacy" 
              className="text-[#00D563] hover:underline"
            >
              Privacy Statement
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 