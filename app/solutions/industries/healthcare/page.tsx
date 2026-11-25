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
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Healthcare
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Compassionate Care Through Intelligent Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Enhance patient care and streamline healthcare operations with AI agents that handle appointment scheduling, patient inquiries, insurance verification, and provide 24/7 health support while maintaining HIPAA compliance.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="px-10 py-4 text-lg transition-all duration-300 rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
                onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Healthcare AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              HIPAA-compliant AI agents designed to enhance patient care and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Calendar className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Appointment Management</CardTitle>
                <CardDescription className="text-dim">
                  Automate appointment scheduling, rescheduling, cancellations, and send appointment reminders to patients
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Stethoscope className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Patient Support</CardTitle>
                <CardDescription className="text-dim">
                  Provide 24/7 patient support for basic health questions, medication reminders, and care coordination
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <FileText className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Insurance Verification</CardTitle>
                <CardDescription className="text-dim">
                  Handle insurance eligibility checks, prior authorization requests, and billing inquiries automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Patient Onboarding</CardTitle>
                <CardDescription className="text-dim">
                  Guide new patients through registration, medical history collection, and insurance documentation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Prescription Management</CardTitle>
                <CardDescription className="text-dim">
                  Handle prescription refill requests, medication inquiries, and coordinate with pharmacy partners
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Clock className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Emergency Triage</CardTitle>
                <CardDescription className="text-dim">
                  Provide initial symptom assessment and guide patients to appropriate care levels and emergency services
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-ink border-t border-hairline-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Transform Patient Care
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can improve patient outcomes and operational efficiency
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Healthcare AI System */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                AI-Powered Healthcare Patient Journey
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {/* Appointment Booking */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Appointment</h4>
                  <p className="text-xs opacity-90">Schedule & manage appointments</p>
                </div>
                
                {/* Pre-Visit */}
                <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Pre-Visit</h4>
                  <p className="text-xs opacity-90">Forms & preparation guidance</p>
                </div>
                
                {/* During Visit */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Care</h4>
                  <p className="text-xs opacity-90">Medical consultation & treatment</p>
                </div>
                
                {/* Post-Visit */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Pill className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Follow-up</h4>
                  <p className="text-xs opacity-90">Medication & care instructions</p>
                </div>
                
                {/* Ongoing Care */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Monitoring</h4>
                  <p className="text-xs opacity-90">Health tracking & reminders</p>
                </div>
              </div>
              
              {/* AI Support Features */}
              <div className="bg-gradient-to-r from-surface-1 to-surface-1 rounded-xl p-6 border border-hairline">
                <h4 className="text-lg text-bone mb-4 text-center font-medium tracking-[-0.01em]">🤖 AI Healthcare Assistant</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Symptom Assessment */}
                  <div className="bg-surface-2 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-signal/10 rounded-full flex items-center justify-center mr-3">
                        <Heart className="w-4 h-4 text-signal" />
                      </div>
                      <span className="font-medium text-bone">Symptom Check</span>
                    </div>
                    <p className="text-sm text-dim">AI-guided symptom assessment and triage recommendations</p>
                  </div>
                  
                  {/* Insurance Support */}
                  <div className="bg-surface-2 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-signal/10 rounded-full flex items-center justify-center mr-3">
                        <Shield className="w-4 h-4 text-signal" />
                      </div>
                      <span className="font-medium text-bone">Insurance Help</span>
                    </div>
                    <p className="text-sm text-dim">Coverage verification and claims assistance</p>
                  </div>
                  
                  {/* Medication Management */}
                  <div className="bg-surface-2 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-signal/10 rounded-full flex items-center justify-center mr-3">
                        <Pill className="w-4 h-4 text-signal" />
                      </div>
                      <span className="font-medium text-bone">Medication Tracker</span>
                    </div>
                    <p className="text-sm text-dim">Reminders, refills, and interaction checks</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">87%</div>
                  <div className="text-sm text-dim">Patient Satisfaction</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">45%</div>
                  <div className="text-sm text-dim">Reduced Wait Times</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">80%</div>
                  <div className="text-sm text-dim">Administrative Efficiency</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">24/7</div>
                  <div className="text-sm text-dim">Patient Support</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                Key Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Improve Patient Experience</h4>
                    <p className="text-dim">Provide instant responses to patient inquiries, reduce wait times, and ensure seamless communication across all care touchpoints.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Administrative Burden</h4>
                    <p className="text-dim">Automate routine tasks like appointment scheduling and insurance verification, allowing staff to focus on patient care.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Ensure HIPAA Compliance</h4>
                    <p className="text-dim">Built-in security measures and compliance controls protect patient data while enabling efficient care coordination.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Scale Care Access</h4>
                    <p className="text-dim">Extend care availability beyond office hours and provide support to more patients without increasing staff requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Healthcare Applications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive solutions for all areas of healthcare delivery and administration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Primary Care Practices</h3>
                <p className="text-dim">
                  Handle appointment scheduling, patient intake, prescription refills, and basic health inquiries for family medicine and internal medicine practices.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Specialty Clinics</h3>
                <p className="text-dim">
                  Manage specialized appointment scheduling, pre-visit preparation, and coordinate care between specialists and primary care providers.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Hospitals & Health Systems</h3>
                <p className="text-dim">
                  Provide patient navigation, discharge planning support, and coordinate complex care across multiple departments and providers.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Telehealth Platforms</h3>
                <p className="text-dim">
                  Support virtual care delivery with technical assistance, appointment coordination, and follow-up care management.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Mental Health Services</h3>
                <p className="text-dim">
                  Provide crisis support, appointment scheduling for therapy sessions, and connect patients with appropriate mental health resources.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Pharmaceutical Services</h3>
                <p className="text-dim">
                  Handle medication inquiries, side effect reporting, drug interaction checks, and medication adherence support programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 site-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
            Ready to Enhance Patient Care?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join healthcare organizations using AI to improve patient outcomes and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="px-8 py-4 text-lg rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
              onClick={() => window.open('https://calendly.com/connectbotrixai/new-meeting?back=1&month=2025-08', '_blank')}
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 text-lg rounded-full border-0 bg-surface-1 text-bone hover:bg-surface-2 font-medium"
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
