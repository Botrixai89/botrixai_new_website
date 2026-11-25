"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Users, Clock, CheckCircle, Star, Phone, Zap, Shield, TrendingUp, Globe, ArrowRight, Package, CreditCard, Truck, Search } from "lucide-react"
import Image from "next/image"

export default function RetailEcommercePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 site-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <ShoppingCart className="w-12 h-12 text-signal mr-3" />
              <h1 className="text-5xl lg:text-6xl text-bone font-medium tracking-[-0.045em] leading-[1.02]">
                AI Agents for Retail & E-Commerce
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl text-bone mb-6 font-medium tracking-[-0.035em] leading-[1.08]">
              Intelligent Customer Experience & Sales Automation
            </h2>
            <p className="text-xl text-dim mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your retail operations with AI agents that handle customer inquiries, process orders, manage returns, and provide personalized shopping assistance. Boost sales and customer satisfaction across all channels.
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
              Retail & E-Commerce AI Solutions
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Comprehensive AI agents designed to enhance every aspect of the retail experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Order Management</CardTitle>
                <CardDescription className="text-dim">
                  Handle order processing, status updates, modifications, and customer inquiries about purchases
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Customer Support</CardTitle>
                <CardDescription className="text-dim">
                  Provide 24/7 customer service for product inquiries, sizing, availability, and general support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Truck className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Shipping & Returns</CardTitle>
                <CardDescription className="text-dim">
                  Manage shipping inquiries, tracking information, return requests, and exchange processes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Star className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Product Recommendations</CardTitle>
                <CardDescription className="text-dim">
                  Provide personalized product suggestions, cross-selling, and upselling opportunities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <Package className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Inventory Assistance</CardTitle>
                <CardDescription className="text-dim">
                  Check product availability, stock levels, and coordinate with store locations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-hairline hover:border-signal/60 transition-all duration-300">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-signal mb-4" />
                <CardTitle className="text-xl text-bone font-medium tracking-[-0.02em]">Payment Support</CardTitle>
                <CardDescription className="text-dim">
                  Handle payment inquiries, billing issues, refunds, and loyalty program management
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
              Boost Sales & Customer Satisfaction
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              See how our AI agents can transform your retail operations and customer experience
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive E-commerce Customer Journey */}
            <div className="bg-surface-1 rounded-2xl p-8 light-edge mb-12 border border-hairline">
              <h3 className="text-2xl text-bone mb-8 text-center font-medium tracking-[-0.02em]">
                AI-Powered Retail & E-Commerce Experience
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {/* Product Discovery */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Product Discovery</h4>
                    <p className="text-sm opacity-90">AI-powered product recommendations and search</p>
                  </div>
                </div>

                {/* Shopping Assistance */}
                <div className="bg-gradient-to-br from-[#0b5d2f] to-[#063a1e] rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Shopping Assistant</h4>
                    <p className="text-sm opacity-90">Personalized guidance and product comparisons</p>
                  </div>
                </div>

                {/* Checkout Support */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Checkout Support</h4>
                    <p className="text-sm opacity-90">Payment assistance and order confirmation</p>
                  </div>
                </div>

                {/* Post-Purchase */}
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl p-6 text-bone transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bone/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Package className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2 font-medium tracking-[-0.01em]">Post-Purchase</h4>
                    <p className="text-sm opacity-90">Order tracking, returns, and customer support</p>
                  </div>
                </div>
              </div>
              
              {/* AI Retail Features */}
              <div className="bg-gradient-to-r from-surface-1 to-surface-1 rounded-xl p-6 border border-hairline">
                <h4 className="text-lg text-bone mb-4 text-center font-medium tracking-[-0.01em]">🛍️ AI Retail Intelligence</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Inventory Management */}
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Smart Inventory</span>
                    </div>
                    <p className="text-xs text-dim">Real-time stock monitoring and automatic reordering</p>
                  </div>
                  
                  {/* Price Optimization */}
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-signal rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Dynamic Pricing</span>
                    </div>
                    <p className="text-xs text-dim">AI-driven pricing strategies and competitor analysis</p>
                  </div>
                  
                  {/* Customer Insights */}
                  <div className="bg-surface-2 rounded-lg p-4 border border-hairline">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-surface-2 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-bone">Customer Analytics</span>
                    </div>
                    <p className="text-xs text-dim">Behavioral insights and personalization engine</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">47%</div>
                  <div className="text-sm text-dim">Increased Conversion</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">38%</div>
                  <div className="text-sm text-dim">Higher AOV</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">82%</div>
                  <div className="text-sm text-dim">Customer Retention</div>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-signal">24/7</div>
                  <div className="text-sm text-dim">Shopping Support</div>
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
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Increase Sales Conversion</h4>
                    <p className="text-dim">Personalized product recommendations and instant support help customers make purchasing decisions, increasing conversion rates by up to 35%.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Reduce Cart Abandonment</h4>
                    <p className="text-dim">Proactive engagement and instant answers to customer questions during checkout reduce cart abandonment rates significantly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Improve Customer Retention</h4>
                    <p className="text-dim">Exceptional 24/7 customer service and personalized experiences increase customer loyalty and repeat purchases.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-bone mb-2 font-medium tracking-[-0.01em]">Scale Customer Support</h4>
                    <p className="text-dim">Handle increasing customer volume during peak seasons without proportional increases in support staff.</p>
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
              Retail Applications
            </h2>
            <p className="text-xl text-dim max-w-3xl mx-auto">
              Versatile solutions for all types of retail and e-commerce businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Fashion & Apparel</h3>
                <p className="text-dim">
                  Handle sizing questions, style recommendations, seasonal collections, and coordinate between online and in-store inventory.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Electronics & Technology</h3>
                <p className="text-dim">
                  Provide technical specifications, compatibility information, warranty details, and product comparison assistance.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Home & Garden</h3>
                <p className="text-dim">
                  Assist with product selection, installation guides, seasonal recommendations, and coordinate delivery scheduling.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Beauty & Cosmetics</h3>
                <p className="text-dim">
                  Provide personalized beauty recommendations, ingredient information, skin type matching, and product tutorials.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Sports & Fitness</h3>
                <p className="text-dim">
                  Handle equipment recommendations, size fitting, training advice, and coordinate with local store availability.
                </p>
              </div>

              <div className="border-l-4 border-signal/60 pl-6">
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">Marketplace Platforms</h3>
                <p className="text-dim">
                  Support multi-vendor operations, seller communications, dispute resolution, and customer onboarding processes.
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
            Ready to Boost Your Retail Performance?
          </h2>
          <p className="text-xl text-bone/75 mb-8 max-w-2xl mx-auto">
            Join successful retailers using AI to increase sales and enhance customer experiences.
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

