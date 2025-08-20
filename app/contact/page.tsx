"use client"

import { useState, useEffect, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, Search } from "lucide-react"
import Image from "next/image"
import ThankYouPopup from "@/components/thank-you-popup"

// Country codes data
const countryCodes = [
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+1", country: "Canada", flag: "🇨🇦" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+36", country: "Hungary", flag: "🇭🇺" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+40", country: "Romania", flag: "🇷🇴" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+51", country: "Peru", flag: "🇵🇪" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+53", country: "Cuba", flag: "🇨🇺" },
  { code: "+54", country: "Argentina", flag: "🇦🇷" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+56", country: "Chile", flag: "🇨🇱" },
  { code: "+57", country: "Colombia", flag: "🇨🇴" },
  { code: "+58", country: "Venezuela", flag: "🇻🇪" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+93", country: "Afghanistan", flag: "🇦🇫" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+95", country: "Myanmar", flag: "🇲🇲" },
  { code: "+98", country: "Iran", flag: "🇮🇷" },
  { code: "+212", country: "Morocco", flag: "🇲🇦" },
  { code: "+213", country: "Algeria", flag: "🇩🇿" },
  { code: "+216", country: "Tunisia", flag: "🇹🇳" },
  { code: "+218", country: "Libya", flag: "🇱🇾" },
  { code: "+220", country: "Gambia", flag: "🇬🇲" },
  { code: "+221", country: "Senegal", flag: "🇸🇳" },
  { code: "+222", country: "Mauritania", flag: "🇲🇷" },
  { code: "+223", country: "Mali", flag: "🇲🇱" },
  { code: "+224", country: "Guinea", flag: "🇬🇳" },
  { code: "+225", country: "Ivory Coast", flag: "🇨🇮" },
  { code: "+226", country: "Burkina Faso", flag: "🇧🇫" },
  { code: "+227", country: "Niger", flag: "🇳🇪" },
  { code: "+228", country: "Togo", flag: "🇹🇬" },
  { code: "+229", country: "Benin", flag: "🇧🇯" },
  { code: "+230", country: "Mauritius", flag: "🇲🇺" },
  { code: "+231", country: "Liberia", flag: "🇱🇷" },
  { code: "+232", country: "Sierra Leone", flag: "🇸🇱" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+235", country: "Chad", flag: "🇹🇩" },
  { code: "+236", country: "Central African Republic", flag: "🇨🇫" },
  { code: "+237", country: "Cameroon", flag: "🇨🇲" },
  { code: "+238", country: "Cape Verde", flag: "🇨🇻" },
  { code: "+239", country: "São Tomé and Príncipe", flag: "🇸🇹" },
  { code: "+240", country: "Equatorial Guinea", flag: "🇬🇶" },
  { code: "+241", country: "Gabon", flag: "🇬🇦" },
  { code: "+242", country: "Republic of the Congo", flag: "🇨🇬" },
  { code: "+243", country: "Democratic Republic of the Congo", flag: "🇨🇩" },
  { code: "+244", country: "Angola", flag: "🇦🇴" },
  { code: "+245", country: "Guinea-Bissau", flag: "🇬🇼" },
  { code: "+246", country: "British Indian Ocean Territory", flag: "🇮🇴" },
  { code: "+248", country: "Seychelles", flag: "🇸🇨" },
  { code: "+249", country: "Sudan", flag: "🇸🇩" },
  { code: "+250", country: "Rwanda", flag: "🇷🇼" },
  { code: "+251", country: "Ethiopia", flag: "🇪🇹" },
  { code: "+252", country: "Somalia", flag: "🇸🇴" },
  { code: "+253", country: "Djibouti", flag: "🇩🇯" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+255", country: "Tanzania", flag: "🇹🇿" },
  { code: "+256", country: "Uganda", flag: "🇺🇬" },
  { code: "+257", country: "Burundi", flag: "🇧🇮" },
  { code: "+258", country: "Mozambique", flag: "🇲🇿" },
  { code: "+260", country: "Zambia", flag: "🇿🇲" },
  { code: "+261", country: "Madagascar", flag: "🇲🇬" },
  { code: "+262", country: "Mayotte", flag: "🇾🇹" },
  { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
  { code: "+264", country: "Namibia", flag: "🇳🇦" },
  { code: "+265", country: "Malawi", flag: "🇲🇼" },
  { code: "+266", country: "Lesotho", flag: "🇱🇸" },
  { code: "+267", country: "Botswana", flag: "🇧🇼" },
  { code: "+268", country: "Eswatini", flag: "🇸🇿" },
  { code: "+269", country: "Comoros", flag: "🇰🇲" },
  { code: "+290", country: "Saint Helena", flag: "🇸🇭" },
  { code: "+291", country: "Eritrea", flag: "🇪🇷" },
  { code: "+297", country: "Aruba", flag: "🇦🇼" },
  { code: "+298", country: "Faroe Islands", flag: "🇫🇴" },
  { code: "+299", country: "Greenland", flag: "🇬🇱" },
  { code: "+350", country: "Gibraltar", flag: "🇬🇮" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+352", country: "Luxembourg", flag: "🇱🇺" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+354", country: "Iceland", flag: "🇮🇸" },
  { code: "+355", country: "Albania", flag: "🇦🇱" },
  { code: "+356", country: "Malta", flag: "🇲🇹" },
  { code: "+357", country: "Cyprus", flag: "🇨🇾" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+359", country: "Bulgaria", flag: "🇧🇬" },
  { code: "+370", country: "Lithuania", flag: "🇱🇹" },
  { code: "+371", country: "Latvia", flag: "🇱🇻" },
  { code: "+372", country: "Estonia", flag: "🇪🇪" },
  { code: "+373", country: "Moldova", flag: "🇲🇩" },
  { code: "+374", country: "Armenia", flag: "🇦🇲" },
  { code: "+375", country: "Belarus", flag: "🇧🇾" },
  { code: "+376", country: "Andorra", flag: "🇦🇩" },
  { code: "+377", country: "Monaco", flag: "🇲🇨" },
  { code: "+378", country: "San Marino", flag: "🇸🇲" },
  { code: "+380", country: "Ukraine", flag: "🇺🇦" },
  { code: "+381", country: "Serbia", flag: "🇷🇸" },
  { code: "+382", country: "Montenegro", flag: "🇲🇪" },
  { code: "+383", country: "Kosovo", flag: "🇽🇰" },
  { code: "+385", country: "Croatia", flag: "🇭🇷" },
  { code: "+386", country: "Slovenia", flag: "🇸🇮" },
  { code: "+387", country: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { code: "+389", country: "North Macedonia", flag: "🇲🇰" },
  { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
  { code: "+421", country: "Slovakia", flag: "🇸🇰" },
  { code: "+423", country: "Liechtenstein", flag: "🇱🇮" },
  { code: "+500", country: "Falkland Islands", flag: "🇫🇰" },
  { code: "+501", country: "Belize", flag: "🇧🇿" },
  { code: "+502", country: "Guatemala", flag: "🇬🇹" },
  { code: "+503", country: "El Salvador", flag: "🇸🇻" },
  { code: "+504", country: "Honduras", flag: "🇭🇳" },
  { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
  { code: "+506", country: "Costa Rica", flag: "🇨🇷" },
  { code: "+507", country: "Panama", flag: "🇵🇦" },
  { code: "+508", country: "Saint Pierre and Miquelon", flag: "🇵🇲" },
  { code: "+509", country: "Haiti", flag: "🇭🇹" },
  { code: "+590", country: "Guadeloupe", flag: "🇬🇵" },
  { code: "+591", country: "Bolivia", flag: "🇧🇴" },
  { code: "+592", country: "Guyana", flag: "🇬🇾" },
  { code: "+593", country: "Ecuador", flag: "🇪🇨" },
  { code: "+594", country: "French Guiana", flag: "🇬🇫" },
  { code: "+595", country: "Paraguay", flag: "🇵🇾" },
  { code: "+596", country: "Martinique", flag: "🇲🇶" },
  { code: "+597", country: "Suriname", flag: "🇸🇷" },
  { code: "+598", country: "Uruguay", flag: "🇺🇾" },
  { code: "+599", country: "Curaçao", flag: "🇨🇼" },
  { code: "+670", country: "Timor-Leste", flag: "🇹🇱" },
  { code: "+672", country: "Norfolk Island", flag: "🇳🇫" },
  { code: "+673", country: "Brunei", flag: "🇧🇳" },
  { code: "+674", country: "Nauru", flag: "🇳🇷" },
  { code: "+675", country: "Papua New Guinea", flag: "🇵🇬" },
  { code: "+676", country: "Tonga", flag: "🇹🇴" },
  { code: "+677", country: "Solomon Islands", flag: "🇸🇧" },
  { code: "+678", country: "Vanuatu", flag: "🇻🇺" },
  { code: "+679", country: "Fiji", flag: "🇫🇯" },
  { code: "+680", country: "Palau", flag: "🇵🇼" },
  { code: "+681", country: "Wallis and Futuna", flag: "🇼🇫" },
  { code: "+682", country: "Cook Islands", flag: "🇨🇰" },
  { code: "+683", country: "Niue", flag: "🇳🇺" },
  { code: "+684", country: "American Samoa", flag: "🇦🇸" },
  { code: "+685", country: "Samoa", flag: "🇼🇸" },
  { code: "+686", country: "Kiribati", flag: "🇰🇮" },
  { code: "+687", country: "New Caledonia", flag: "🇳🇨" },
  { code: "+688", country: "Tuvalu", flag: "🇹🇻" },
  { code: "+689", country: "French Polynesia", flag: "🇵🇫" },
  { code: "+690", country: "Tokelau", flag: "🇹🇰" },
  { code: "+691", country: "Micronesia", flag: "🇫🇲" },
  { code: "+692", country: "Marshall Islands", flag: "🇲🇭" },
  { code: "+850", country: "North Korea", flag: "🇰🇵" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
  { code: "+853", country: "Macau", flag: "🇲🇴" },
  { code: "+855", country: "Cambodia", flag: "🇰🇭" },
  { code: "+856", country: "Laos", flag: "🇱🇦" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+886", country: "Taiwan", flag: "🇹🇼" },
  { code: "+960", country: "Maldives", flag: "🇲🇻" },
  { code: "+961", country: "Lebanon", flag: "🇱🇧" },
  { code: "+962", country: "Jordan", flag: "🇯🇴" },
  { code: "+963", country: "Syria", flag: "🇸🇾" },
  { code: "+964", country: "Iraq", flag: "🇮🇶" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+967", country: "Yemen", flag: "🇾🇪" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+970", country: "Palestine", flag: "🇵🇸" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+972", country: "Israel", flag: "🇮🇱" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+975", country: "Bhutan", flag: "🇧🇹" },
  { code: "+976", country: "Mongolia", flag: "🇲🇳" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+992", country: "Tajikistan", flag: "🇹🇯" },
  { code: "+993", country: "Turkmenistan", flag: "🇹🇲" },
  { code: "+994", country: "Azerbaijan", flag: "🇦🇿" },
  { code: "+995", country: "Georgia", flag: "🇬🇪" },
  { code: "+996", country: "Kyrgyzstan", flag: "🇰🇬" },
  { code: "+998", country: "Uzbekistan", flag: "🇺🇿" }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    option: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  })

  const [countrySearch, setCountrySearch] = useState("")
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Filter countries based on search
  const filteredCountries = countryCodes.filter(country => 
    country.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch)
  )

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false)
        setCountrySearch("")
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    // Remove any non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, "")
    // Phone should be between 6-15 digits
    return cleanPhone.length >= 6 && cleanPhone.length <= 15
  }

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      option: "",
      message: "",
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (6-15 digits)"
    }

    // Option validation
    if (!formData.option) {
      newErrors.option = "Please select an option"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      try {
        // Prepare data for Google Sheets
        const submissionData = {
          timestamp: new Date().toISOString(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone, // Send just the phone number
          countryCode: formData.countryCode, // Send country code separately
          inquiryType: formData.option,
          message: formData.message,
          source: 'Website Contact Form'
        };

        // Send to Google Sheets via API route
        const response = await fetch('/api/submit-contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        const result = await response.json();

        if (result.success) {
          // Show thank you popup
          setShowThankYou(true)
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            countryCode: "+91",
            phone: "",
            option: "",
            message: "",
          })
          setErrors({
            name: "",
            email: "",
            phone: "",
            option: "",
            message: "",
          })
        } else {
          alert(`Error submitting form: ${result.error || 'Unknown error'}`)
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Error submitting form. Please try again later or contact us directly.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Form */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#00D563] via-green-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-8 bg-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"></div>
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-bounce delay-700"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping delay-1000"></div>
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-sm font-medium text-white">✨ Get in Touch</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  How can <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-emerald-200 animate-gradient-x">we help?</span>
                </h1>
                <p className="text-xl text-green-100 leading-relaxed max-w-xl">
                  Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <div>
                <Button 
                  variant="outline" 
                  className="group border-2 border-white text-white hover:bg-white hover:text-[#00D563] px-8 py-4 text-lg font-semibold transition-all duration-300 bg-[#00D563] shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:scale-105 transform"
                  onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
                >
                  <span>Book a Demo</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </div>
              
              {/* Contact info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-2 border-white/30 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-green-100">Email</p>
                      <p className="text-white font-medium">contact@botrixai.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-2 border-white/30 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-green-100">Phone</p>
                      <p className="text-white font-medium">+91 99812 92605</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all duration-500 transform hover:scale-[1.02]">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <Input
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`h-12 bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all duration-300 border-2 hover:border-[#00D563]/30 focus:border-[#00D563] focus:ring-2 focus:ring-[#00D563]/20 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] ${
                      errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.name}</p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="Enter Your Email ID"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`h-12 bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all duration-300 border-2 hover:border-[#00D563]/30 focus:border-[#00D563] focus:ring-2 focus:ring-[#00D563]/20 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] ${
                      errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.email}</p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <div className="flex gap-2">
                    {/* Custom Searchable Country Code Dropdown */}
                    <div className="relative w-32" ref={dropdownRef}>
                      <button
                        type="button"
                        className="w-full h-12 bg-gray-50 border-2 border-gray-200 hover:border-[#00D563]/30 focus:border-[#00D563] focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 rounded-md px-3 py-2 text-left focus:outline-none flex items-center justify-between"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      >
                        <div className="flex items-center gap-2">
                          <span>{countryCodes.find(c => c.code === formData.countryCode)?.flag}</span>
                          <span className="text-sm">{formData.countryCode}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isCountryDropdownOpen && (
                        <div className="absolute z-50 w-80 mt-1 bg-white border-2 border-black rounded-md shadow-[0_0_20px_rgba(16,185,129,0.3)] max-h-60 overflow-hidden">
                          {/* Search Input */}
                          <div className="p-2 border-b border-gray-200">
                            <div className="relative">
                              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                              <Input
                                placeholder="Search country or code..."
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                className="pl-10 h-8 border-gray-200 focus:border-[#00D563] focus:ring-1 focus:ring-[#00D563]"
                              />
                            </div>
                          </div>
                          
                          {/* Country List */}
                          <div className="max-h-48 overflow-y-auto">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((country, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  className="w-full px-3 py-2 text-left hover:bg-green-50 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] focus:bg-green-50 focus:outline-none flex items-center gap-3 transition-all duration-200"
                                  onClick={() => {
                                    handleInputChange("countryCode", country.code)
                                    setIsCountryDropdownOpen(false)
                                    setCountrySearch("")
                                  }}
                                >
                                  <span className="text-lg">{country.flag}</span>
                                  <span className="text-sm font-medium min-w-[3rem]">{country.code}</span>
                                  <span className="text-sm text-gray-600 truncate">{country.country}</span>
                                </button>
                              ))
                            ) : (
                              <div className="px-3 py-6 text-center text-gray-500 text-sm">
                                No countries found
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value.replace(/\D/g, ""))}
                      className={`h-12 bg-gray-50 text-gray-900 flex-1 transition-all duration-300 border-2 hover:border-[#00D563]/30 focus:border-[#00D563] focus:ring-2 focus:ring-[#00D563]/20 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] ${
                        errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.phone}</p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                  <Select value={formData.option} onValueChange={(value) => handleInputChange("option", value)}>
                    <SelectTrigger className={`h-12 bg-gray-50 text-gray-500 transition-all duration-300 border-2 hover:border-[#00D563]/30 focus:border-[#00D563] focus:ring-2 focus:ring-[#00D563]/20 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] ${
                      errors.option ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200"
                    }`}>
                      <SelectValue placeholder="Please choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-chatbot">🤖 AI Chatbot</SelectItem>
                      <SelectItem value="marketing-automation">📈 Marketing Automation</SelectItem>
                      <SelectItem value="whatsapp-bot">
                        <div className="flex items-center gap-2">
                          <Image 
                            src="/images/integrations/icons8-whatsapp-48.png" 
                            alt="WhatsApp" 
                            width={16} 
                            height={16}
                            className="w-4 h-4"
                          />
                          <span>WhatsApp Bot</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="internal-update">🔄 Internal Update</SelectItem>
                      <SelectItem value="bulk-broadcasting">📢 Bulk Broadcasting</SelectItem>
                      <SelectItem value="custom-solution">⚙️ Custom Solution</SelectItem>
                      <SelectItem value="become-partner">🤝 Become Our Partner</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.option && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.option}</p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`min-h-[120px] bg-gray-50 text-gray-900 placeholder:text-gray-400 resize-none transition-all duration-300 border-2 hover:border-[#00D563]/30 focus:border-[#00D563] focus:ring-2 focus:ring-[#00D563]/20 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] ${
                      errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.message}</p>
                  )}
                </div>

                                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-r from-[#00D563] to-green-600 hover:from-green-600 hover:to-[#00D563] text-white font-semibold py-4 px-8 rounded-xl border-2 border-green-700 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-[1.02] transform flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                   {isSubmitting ? (
                     <>
                       <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                       <span>Submitting...</span>
                     </>
                   ) : (
                     <>
                       <span>Send Message</span>
                       <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                       </svg>
                     </>
                   )}
                  </Button>
                
                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-[#00D563] hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>



      <Footer />
      
      {/* Thank You Popup */}
      <ThankYouPopup 
        isVisible={showThankYou} 
        onClose={() => setShowThankYou(false)} 
      />
    </div>
  )
}
