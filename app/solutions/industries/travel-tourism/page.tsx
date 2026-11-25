"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, Plane, Car, Building, Calendar, CreditCard } from "lucide-react"
import Image from "next/image"

export default function TravelTourismPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Travel & Tourism
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Intelligent Travel Experience Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your travel business with AI agents that handle bookings, customer inquiries, itinerary planning, and travel support. Deliver exceptional experiences while managing complex travel operations efficiently.
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
              Travel & Tourism AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive AI agents designed for the dynamic travel and tourism industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Plane className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Travel Booking</CardTitle>
                <CardDescription className="text-dim">
                  Handle flight, hotel, and tour bookings with real-time availability and pricing information
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <MapPin className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Itinerary Planning</CardTitle>
                <CardDescription className="text-dim">
                  Create personalized travel itineraries and provide destination recommendations based on preferences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Customer Support</CardTitle>
                <CardDescription className="text-dim">
                  Provide 24/7 travel assistance, handle changes, cancellations, and emergency support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Building className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Hotel Services</CardTitle>
                <CardDescription className="text-dim">
                  Manage room reservations, guest services, concierge requests, and special accommodations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Car className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Transportation</CardTitle>
                <CardDescription className="text-dim">
                  Coordinate transportation services, car rentals, transfers, and local transit information
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Globe className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Travel Information</CardTitle>
                <CardDescription className="text-dim">
                  Provide visa requirements, weather updates, local customs, and travel advisories
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
              Elevate Travel Experiences
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can transform your travel business and customer satisfaction
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Travel AI System */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                AI-Powered Travel & Tourism Experience
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {/* Trip Planning */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Trip Planning</h4>
                  <p className="text-xs opacity-90">Personalized itineraries and recommendations</p>
                </div>
                
                {/* Booking Support */}
                <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Booking</h4>
                  <p className="text-xs opacity-90">Hotel, flight, and activity reservations</p>
                </div>
                
                {/* Travel Assistance */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Live Support</h4>
                  <p className="text-xs opacity-90">Real-time travel assistance and navigation</p>
                </div>
                
                {/* Local Insights */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Local Guide</h4>
                  <p className="text-xs opacity-90">Cultural insights and hidden gems</p>
                </div>
                
                {/* Emergency Help */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-4 text-bone text-center">
                  <div className="w-10 h-10 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm mb-1 font-medium tracking-[-0.01em]">Emergency</h4>
                  <p className="text-xs opacity-90">24/7 crisis support and coordination</p>
                </div>
              </div>
              
              {/* AI Travel Features */}
              <div className="bg-gradient-to-r from-surface-1 to-surface-1 rounded-xl p-6 border border-hairline">
                <h4 className="text-lg text-bone mb-4 text-center font-medium tracking-[-0.01em]">✈️ Smart Travel AI</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Dynamic Pricing</span>
                    </div>
                    <p className="text-xs text-dim">Real-time fare monitoring and deal alerts</p>
                  </div>
                  
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-signal rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Weather Integration</span>
                    </div>
                    <p className="text-xs text-dim">Weather-aware recommendations and alerts</p>
                  </div>
                  
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Multi-Language</span>
                    </div>
                    <p className="text-xs text-dim">Support in 50+ languages and dialects</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">92%</div>
                  <div className="text-sm text-dim">Customer Satisfaction</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">65%</div>
                  <div className="text-sm text-dim">Booking Conversion</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">80%</div>
                  <div className="text-sm text-dim">Faster Response</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">24/7</div>
                  <div className="text-sm text-dim">Travel Support</div>
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Increase Booking Conversions</h4>
                    <p className="text-dim">Instant responses to travel inquiries and personalized recommendations increase booking rates and customer confidence.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Enhance Customer Experience</h4>
                    <p className="text-dim">24/7 support and personalized service throughout the entire travel journey improve customer satisfaction and loyalty.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Operational Costs</h4>
                    <p className="text-dim">Automate routine inquiries and booking processes, allowing staff to focus on complex travel arrangements and high-value customers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Scale During Peak Seasons</h4>
                    <p className="text-dim">Handle increased demand during holidays and peak travel seasons without proportional increases in support staff.</p>
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
              Travel Industry Applications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Versatile solutions for all segments of the travel and tourism industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Travel Agencies</h3>
                <p className="text-dim">
                  Handle complex itinerary planning, multi-destination bookings, group travel coordination, and provide expert travel advice.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Hotels & Resorts</h3>
                <p className="text-dim">
                  Manage reservations, guest services, concierge requests, room service, and coordinate special events and amenities.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Airlines</h3>
                <p className="text-dim">
                  Handle flight bookings, check-in processes, baggage inquiries, schedule changes, and frequent flyer program support.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Tour Operators</h3>
                <p className="text-dim">
                  Coordinate tour bookings, provide destination information, manage group activities, and handle special requirements.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Car Rental Services</h3>
                <p className="text-dim">
                  Process vehicle reservations, handle upgrades and modifications, provide pickup/drop-off information, and manage fleet availability.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Cruise Lines</h3>
                <p className="text-dim">
                  Manage cruise bookings, cabin selections, onboard services, shore excursions, and special dietary or accessibility needs.
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
            Ready to Transform Travel Experiences?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join leading travel companies using AI to enhance customer experiences and operational efficiency.
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

