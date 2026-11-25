"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Phone, X } from "lucide-react"

interface ThankYouPopupProps {
  isVisible: boolean
  onClose: () => void
}

export default function ThankYouPopup({ isVisible, onClose }: ThankYouPopupProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShow(true)
    }
  }, [isVisible])

  const handleClose = () => {
    setShow(false)
    setTimeout(() => onClose(), 200) // Wait for animation to complete
  }

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-200 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-surface-1 rounded-xl light-edge max-w-md w-full p-8 transform transition-all duration-200 relative ${show ? 'scale-100' : 'scale-95'}`}>
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-dim hover:text-dim transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto mb-6 w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-signal" />
          </div>

          {/* Thank You Message */}
          <h3 className="text-2xl text-bone mb-3 font-medium tracking-[-0.02em]">
            🎉 Thank You!
          </h3>
          
          <p className="text-dim text-lg mb-6">
            Your message has been submitted successfully.
          </p>

          {/* Information Cards */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center space-x-2 text-signal bg-surface-2 rounded-lg py-2 px-4">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">We've received your inquiry</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-signal bg-surface-2 rounded-lg py-2 px-4">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">You'll hear from us within 24 hours</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-signal bg-surface-2 rounded-lg py-2 px-4">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">For urgent matters: +91 99813 42605</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleClose}
              className="py-3 px-6 transition-all duration-300 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
            >
              Continue Browsing
            </Button>
            <Button 
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              variant="outline"
              className="py-3 px-6 transition-all duration-300 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
