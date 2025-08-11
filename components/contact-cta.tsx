"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Globe, ArrowRight, MessageCircle, Calendar } from "lucide-react"

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@botrixai.com",
      description: "Get in touch via email",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 99813 42605",
      description: "Speak with our experts",
    },
    {
      icon: Globe,
      title: "Visit Website",
      value: "www.botrixai.com",
      description: "Explore our platform",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#00D563] to-[#00B553] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your
            <br />
            Customer Engagement?
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Join 500+ businesses that have revolutionized their customer interactions with BotrixAI
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-[#00D563] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>

          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Get Started Today</CardTitle>
              <p className="text-green-100">Fill out the form and we'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-green-100"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-green-100"
                    />
                  </div>
                </div>

                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-green-100"
                />

                <Select onValueChange={(value) => setFormData({ ...formData, useCase: value })}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select Use Case" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-agents">Web Agents</SelectItem>
                    <SelectItem value="whatsapp-marketing">WhatsApp Marketing</SelectItem>
                    <SelectItem value="voice-agents">Voice Agents</SelectItem>
                    <SelectItem value="all-solutions">All Solutions</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-green-100 min-h-[100px]"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-[#00D563] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-green-100 text-lg leading-relaxed">
                Our team of AI experts is ready to help you transform your customer engagement. Reach out to us through
                any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{method.title}</h4>
                    <p className="text-green-100">{method.value}</p>
                    <p className="text-sm text-green-200">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Contact Numbers */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-4">Additional Contact Numbers</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-200" />
                  <span className="text-green-100">+91 72948 78246</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-200" />
                  <span className="text-green-100">+91 87329 66848</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">Quick Response Guarantee</h4>
              <p className="text-green-100">⚡ We respond to all inquiries within 2 hours during business hours</p>
              <p className="text-green-100">📞 Emergency support available 24/7 for enterprise customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
