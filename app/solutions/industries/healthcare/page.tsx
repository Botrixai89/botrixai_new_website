"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, Calendar, Stethoscope, FileText, Activity, Pill } from "lucide-react"
import Image from "next/image"

export default function HealthcarePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agents for Healthcare
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Compassionate Care Through Intelligent Automation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Enhance patient care and streamline healthcare operations with AI agents that handle appointment scheduling, patient inquiries, insurance verification, and provide 24/7 health support while maintaining HIPAA compliance.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="border-2 border-[#00D563] text-[#00D563] hover:bg-[#00D563] hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Healthcare AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HIPAA-compliant AI agents designed to enhance patient care and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Calendar className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Appointment Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Automate appointment scheduling, rescheduling, cancellations, and send appointment reminders to patients
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Stethoscope className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Patient Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide 24/7 patient support for basic health questions, medication reminders, and care coordination
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Insurance Verification</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle insurance eligibility checks, prior authorization requests, and billing inquiries automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Patient Onboarding</CardTitle>
                <CardDescription className="text-gray-600">
                  Guide new patients through registration, medical history collection, and insurance documentation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Prescription Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle prescription refill requests, medication inquiries, and coordinate with pharmacy partners
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Clock className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Emergency Triage</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide initial symptom assessment and guide patients to appropriate care levels and emergency services
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Patient Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI agents can improve patient outcomes and operational efficiency
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Healthcare AI System */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                AI-Powered Healthcare Patient Journey
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {/* Appointment Booking */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Appointment</h4>
                  <p className="text-xs opacity-90">Schedule & manage appointments</p>
                </div>
                
                {/* Pre-Visit */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Pre-Visit</h4>
                  <p className="text-xs opacity-90">Forms & preparation guidance</p>
                </div>
                
                {/* During Visit */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Care</h4>
                  <p className="text-xs opacity-90">Medical consultation & treatment</p>
                </div>
                
                {/* Post-Visit */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Pill className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Follow-up</h4>
                  <p className="text-xs opacity-90">Medication & care instructions</p>
                </div>
                
                {/* Ongoing Care */}
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Monitoring</h4>
                  <p className="text-xs opacity-90">Health tracking & reminders</p>
                </div>
              </div>
              
              {/* AI Support Features */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">🤖 AI Healthcare Assistant</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Symptom Assessment */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Heart className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900">Symptom Check</span>
                    </div>
                    <p className="text-sm text-gray-600">AI-guided symptom assessment and triage recommendations</p>
                  </div>
                  
                  {/* Insurance Support */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-900">Insurance Help</span>
                    </div>
                    <p className="text-sm text-gray-600">Coverage verification and claims assistance</p>
                  </div>
                  
                  {/* Medication Management */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <Pill className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-medium text-gray-900">Medication Tracker</span>
                    </div>
                    <p className="text-sm text-gray-600">Reminders, refills, and interaction checks</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">87%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">45%</div>
                  <div className="text-sm text-gray-600">Reduced Wait Times</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">80%</div>
                  <div className="text-sm text-gray-600">Administrative Efficiency</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Patient Support</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Key Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Improve Patient Experience</h4>
                    <p className="text-gray-600">Provide instant responses to patient inquiries, reduce wait times, and ensure seamless communication across all care touchpoints.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Administrative Burden</h4>
                    <p className="text-gray-600">Automate routine tasks like appointment scheduling and insurance verification, allowing staff to focus on patient care.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ensure HIPAA Compliance</h4>
                    <p className="text-gray-600">Built-in security measures and compliance controls protect patient data while enabling efficient care coordination.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Scale Care Access</h4>
                    <p className="text-gray-600">Extend care availability beyond office hours and provide support to more patients without increasing staff requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Healthcare Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all areas of healthcare delivery and administration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Primary Care Practices</h3>
                <p className="text-gray-600">
                  Handle appointment scheduling, patient intake, prescription refills, and basic health inquiries for family medicine and internal medicine practices.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialty Clinics</h3>
                <p className="text-gray-600">
                  Manage specialized appointment scheduling, pre-visit preparation, and coordinate care between specialists and primary care providers.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hospitals & Health Systems</h3>
                <p className="text-gray-600">
                  Provide patient navigation, discharge planning support, and coordinate complex care across multiple departments and providers.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Telehealth Platforms</h3>
                <p className="text-gray-600">
                  Support virtual care delivery with technical assistance, appointment coordination, and follow-up care management.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health Services</h3>
                <p className="text-gray-600">
                  Provide crisis support, appointment scheduling for therapy sessions, and connect patients with appropriate mental health resources.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pharmaceutical Services</h3>
                <p className="text-gray-600">
                  Handle medication inquiries, side effect reporting, drug interaction checks, and medication adherence support programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00D563] to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Enhance Patient Care?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join healthcare organizations using AI to improve patient outcomes and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-[#00D563] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#00D563] px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
