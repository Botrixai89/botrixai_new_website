"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, BookOpen, Calendar, MessageCircle, FileText, MapPin } from "lucide-react"
import Image from "next/image"

export default function EducationPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Education
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Intelligent Educational Support & Administration
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform educational institutions with AI agents that handle student inquiries, admission processes, course information, and administrative tasks. Enhance learning experiences while streamlining educational operations.
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
              Educational AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive AI agents designed to support all aspects of educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Student Support</CardTitle>
                <CardDescription className="text-dim">
                  Provide 24/7 student assistance for academic questions, course information, and campus services
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Admissions Management</CardTitle>
                <CardDescription className="text-dim">
                  Handle admission inquiries, application processes, and guide prospective students through enrollment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Calendar className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Academic Scheduling</CardTitle>
                <CardDescription className="text-dim">
                  Manage course schedules, exam dates, academic calendar, and coordinate academic events
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Parent Communication</CardTitle>
                <CardDescription className="text-dim">
                  Facilitate communication between parents, students, and faculty with automated updates and responses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Academic Records</CardTitle>
                <CardDescription className="text-dim">
                  Handle transcript requests, grade inquiries, and academic record management securely
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Campus Services</CardTitle>
                <CardDescription className="text-dim">
                  Coordinate campus facilities, dining services, housing, and extracurricular activities
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
              Enhance Educational Excellence
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can improve student outcomes and institutional efficiency
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Education AI System */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                AI-Powered Education & Learning Support
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {/* Student Admissions */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Admissions Support</h4>
                    <p className="text-sm opacity-90">Application guidance and enrollment assistance</p>
                  </div>
                </div>

                {/* Academic Support */}
                <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Academic Help</h4>
                    <p className="text-sm opacity-90">Homework assistance and learning resources</p>
                  </div>
                </div>

                {/* Campus Services */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Campus Services</h4>
                    <p className="text-sm opacity-90">Navigation, schedules, and facility information</p>
                  </div>
                </div>

                {/* Student Success */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Student Success</h4>
                    <p className="text-sm opacity-90">Performance tracking and intervention alerts</p>
                  </div>
                </div>
              </div>
              
              {/* AI Education Features */}
              <div className="bg-gradient-to-r from-surface-1 to-surface-1 rounded-xl p-6 border border-hairline">
                <h4 className="text-lg text-bone mb-4 text-center font-medium tracking-[-0.01em]">🎓 Smart Education AI</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Personalized Learning</span>
                    </div>
                    <p className="text-xs text-dim">Adaptive learning paths and content recommendations</p>
                  </div>
                  
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-signal rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">24/7 Tutoring</span>
                    </div>
                    <p className="text-xs text-dim">Round-the-clock academic support and study assistance</p>
                  </div>
                  
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Progress Analytics</span>
                    </div>
                    <p className="text-xs text-dim">Detailed insights into student performance and engagement</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">89%</div>
                  <div className="text-sm text-dim">Student Satisfaction</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">45%</div>
                  <div className="text-sm text-dim">Improved Grades</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">67%</div>
                  <div className="text-sm text-dim">Reduced Dropouts</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">24/7</div>
                  <div className="text-sm text-dim">Learning Support</div>
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Improve Student Engagement</h4>
                    <p className="text-dim">Instant access to information and 24/7 support improves student satisfaction and engagement with the institution.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Streamline Admissions Process</h4>
                    <p className="text-dim">Automated guidance through admission requirements and application processes increases enrollment and reduces administrative burden.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Administrative Workload</h4>
                    <p className="text-dim">Automate routine inquiries and processes, allowing staff to focus on complex student needs and educational quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Enhance Communication</h4>
                    <p className="text-dim">Improve communication between students, parents, faculty, and administration with consistent and timely information delivery.</p>
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
              Educational Applications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Versatile solutions for all levels and types of educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">K-12 Schools</h3>
                <p className="text-dim">
                  Handle parent-teacher communications, student enrollment, attendance tracking, and coordinate with families for school events and activities.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Universities & Colleges</h3>
                <p className="text-dim">
                  Manage complex admissions processes, course registration, campus services, and support international student needs.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Online Learning Platforms</h3>
                <p className="text-dim">
                  Provide technical support, course guidance, certification information, and help students navigate digital learning environments.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Vocational & Trade Schools</h3>
                <p className="text-dim">
                  Support career guidance, certification tracking, job placement assistance, and coordinate with industry partners.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Continuing Education</h3>
                <p className="text-dim">
                  Manage professional development programs, corporate training, and adult education services with flexible scheduling.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Educational Technology</h3>
                <p className="text-dim">
                  Support EdTech platforms, learning management systems, and educational software with user assistance and technical support.
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
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join innovative educational institutions using AI to enhance student experiences and operational efficiency.
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

