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
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-12 h-12 text-[#00D563] mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Agents for Travel & Tourism
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Intelligent Travel Experience Automation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your travel business with AI agents that handle bookings, customer inquiries, itinerary planning, and travel support. Deliver exceptional experiences while managing complex travel operations efficiently.
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
              Travel & Tourism AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI agents designed for the dynamic travel and tourism industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Plane className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Travel Booking</CardTitle>
                <CardDescription className="text-gray-600">
                  Handle flight, hotel, and tour bookings with real-time availability and pricing information
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <MapPin className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Itinerary Planning</CardTitle>
                <CardDescription className="text-gray-600">
                  Create personalized travel itineraries and provide destination recommendations based on preferences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Customer Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide 24/7 travel assistance, handle changes, cancellations, and emergency support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Building className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Hotel Services</CardTitle>
                <CardDescription className="text-gray-600">
                  Manage room reservations, guest services, concierge requests, and special accommodations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Car className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Transportation</CardTitle>
                <CardDescription className="text-gray-600">
                  Coordinate transportation services, car rentals, transfers, and local transit information
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#00D563] transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Globe className="w-12 h-12 text-[#00D563] mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">Travel Information</CardTitle>
                <CardDescription className="text-gray-600">
                  Provide visa requirements, weather updates, local customs, and travel advisories
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
              Elevate Travel Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI agents can transform your travel business and customer satisfaction
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Travel AI System */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                AI-Powered Travel & Tourism Experience
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {/* Trip Planning */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Trip Planning</h4>
                  <p className="text-xs opacity-90">Personalized itineraries and recommendations</p>
                </div>
                
                {/* Booking Support */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Booking</h4>
                  <p className="text-xs opacity-90">Hotel, flight, and activity reservations</p>
                </div>
                
                {/* Travel Assistance */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Live Support</h4>
                  <p className="text-xs opacity-90">Real-time travel assistance and navigation</p>
                </div>
                
                {/* Local Insights */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Local Guide</h4>
                  <p className="text-xs opacity-90">Cultural insights and hidden gems</p>
                </div>
                
                {/* Emergency Help */}
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 text-white text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Emergency</h4>
                  <p className="text-xs opacity-90">24/7 crisis support and coordination</p>
                </div>
              </div>
              
              {/* AI Travel Features */}
              <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">✈️ Smart Travel AI</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900">Dynamic Pricing</span>
                    </div>
                    <p className="text-xs text-gray-600">Real-time fare monitoring and deal alerts</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900">Weather Integration</span>
                    </div>
                    <p className="text-xs text-gray-600">Weather-aware recommendations and alerts</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900">Multi-Language</span>
                    </div>
                    <p className="text-xs text-gray-600">Support in 50+ languages and dialects</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">92%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">65%</div>
                  <div className="text-sm text-gray-600">Booking Conversion</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">80%</div>
                  <div className="text-sm text-gray-600">Faster Response</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Travel Support</div>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Increase Booking Conversions</h4>
                    <p className="text-gray-600">Instant responses to travel inquiries and personalized recommendations increase booking rates and customer confidence.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhance Customer Experience</h4>
                    <p className="text-gray-600">24/7 support and personalized service throughout the entire travel journey improve customer satisfaction and loyalty.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Operational Costs</h4>
                    <p className="text-gray-600">Automate routine inquiries and booking processes, allowing staff to focus on complex travel arrangements and high-value customers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00D563] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Scale During Peak Seasons</h4>
                    <p className="text-gray-600">Handle increased demand during holidays and peak travel seasons without proportional increases in support staff.</p>
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
              Travel Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile solutions for all segments of the travel and tourism industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Travel Agencies</h3>
                <p className="text-gray-600">
                  Handle complex itinerary planning, multi-destination bookings, group travel coordination, and provide expert travel advice.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hotels & Resorts</h3>
                <p className="text-gray-600">
                  Manage reservations, guest services, concierge requests, room service, and coordinate special events and amenities.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Airlines</h3>
                <p className="text-gray-600">
                  Handle flight bookings, check-in processes, baggage inquiries, schedule changes, and frequent flyer program support.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tour Operators</h3>
                <p className="text-gray-600">
                  Coordinate tour bookings, provide destination information, manage group activities, and handle special requirements.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Car Rental Services</h3>
                <p className="text-gray-600">
                  Process vehicle reservations, handle upgrades and modifications, provide pickup/drop-off information, and manage fleet availability.
                </p>
              </div>

              <div className="border-l-4 border-[#00D563] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cruise Lines</h3>
                <p className="text-gray-600">
                  Manage cruise bookings, cabin selections, onboard services, shore excursions, and special dietary or accessibility needs.
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
            Ready to Transform Travel Experiences?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join leading travel companies using AI to enhance customer experiences and operational efficiency.
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

