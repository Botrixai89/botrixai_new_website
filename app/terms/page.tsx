import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      
      {/* Terms of Service Content */}
      <section className="py-16 site-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-1 rounded-2xl light-edge border border-signal/20 p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl text-bone mb-4 font-medium tracking-[-0.045em] leading-[1.02]">Terms & Conditions</h1>
              <div className="text-dim space-y-2">
                <p><strong>Effective Date:</strong> 03.06.2025</p>
                <p><strong>Last Updated:</strong> 03.06.2025</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8 bg-ink">
                <h2 className="text-2xl text-bone mb-4 font-medium tracking-[-0.035em] leading-[1.08]">1. Introduction and Acceptance</h2>
                <p className="text-bone/80 mb-4">
                  BotrixAI, including its affiliates ("BotrixAI," "we," "us," or "our"), operates the "Service," defined as any website, web page, mobile application, API, or platform on which these Terms appear. The Service includes AI-powered bots (Voice, Web, WhatsApp), integrations, analytics, and any data, transactions, or services provided through BotrixAI.
                </p>
                <p className="text-bone/80 mb-4">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer," "you," or "your") and BotrixAI.
                </p>
                <p className="text-bone/80 mb-3">You accept and agree to these Terms by:</p>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>Creating an account or using our services</li>
                  <li>Clicking "I Accept" or similar agreement buttons</li>
                  <li>Accessing or using any part of our platform</li>
                  <li>Subscribing to any of our paid services</li>
                </ul>
                <div className="bg-surface-2 border-l-4 border-signal/50 p-4 mb-4">
                  <p className="text-signal font-semibold">Important:</p>
                  <p className="text-signal">
                    If you violate these Terms or do not agree to them, you must not access or use our Service. If you intend to process data regarding European residents, please see Section 28 for additional GDPR compliance requirements.
                  </p>
                </div>
              </section>

              <section className="mb-8 bg-ink">
                <h2 className="text-2xl text-bone mb-4 font-medium tracking-[-0.035em] leading-[1.08]">2. Account Registration and Security</h2>
                
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">2.1 Registration Requirements</h3>
                <p className="text-bone/80 mb-3">To use our Services, you must:</p>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>Complete registration with current, complete, and accurate information</li>
                  <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                  <li>Have the legal authority to enter into this agreement</li>
                  <li>Provide valid business information if registering as a company</li>
                </ul>
                <p className="text-bone/80 mb-3">You may register using:</p>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>Direct registration through our platform</li>
                  <li>Third-party authentication (Google, Microsoft, etc.)</li>
                </ul>

                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">2.2 Account Security and Responsibilities</h3>
                <p className="text-bone/80 mb-3">You are solely responsible for:</p>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>Maintaining confidentiality of your account credentials</li>
                  <li>All activities occurring under your account</li>
                  <li>Restricting access to your devices and account</li>
                  <li>Immediately notifying us of suspected unauthorized access</li>
                </ul>
                
                <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Security Requirements:</h4>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>Use strong, unique passwords</li>
                  <li>Enable two-factor authentication when available</li>
                  <li>Keep contact information current for important notices</li>
                  <li>Regularly review account activity</li>
                </ul>
                
                <p className="text-bone/80 mb-3">We reserve the right to terminate accounts that are:</p>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>Inactive for more than 90 days (with 30 days' prior notice)</li>
                  <li>Used for violations of these Terms</li>
                  <li>Associated with fraudulent activity</li>
                  <li>Unpaid after the grace period</li>
                </ul>
                <p className="text-bone/80">
                  Contact <a href="mailto:contact@botrixai.com" className="text-signal hover:underline">contact@botrixai.com</a> immediately for security issues.
                </p>
              </section>

              <section className="mb-8 bg-ink">
                <h2 className="text-2xl text-bone mb-4 font-medium tracking-[-0.035em] leading-[1.08]">3. Services Overview</h2>
                
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">3.1 AI Bot Services</h3>
                <p className="text-bone/80 mb-3">BotrixAI provides access to various AI-powered services including:</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Voice Bots:</h4>
                    <ul className="list-disc pl-6 text-bone/80">
                      <li>Conversational AI for phone interactions</li>
                      <li>Voice synthesis and speech recognition</li>
                      <li>Call routing and automated responses</li>
                      <li>Integration with telephony systems</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Web Bots:</h4>
                    <ul className="list-disc pl-6 text-bone/80">
                      <li>Website chatbots and virtual assistants</li>
                      <li>Customer support automation</li>
                      <li>Lead generation and qualification</li>
                      <li>E-commerce assistance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">WhatsApp Bots:</h4>
                    <ul className="list-disc pl-6 text-bone/80">
                      <li>Business messaging automation</li>
                      <li>Customer service integration</li>
                      <li>Marketing and promotional messaging</li>
                      <li>Multi-language support</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Platform Features:</h4>
                    <ul className="list-disc pl-6 text-bone/80">
                      <li>Analytics and reporting dashboards</li>
                      <li>Integration APIs and webhooks</li>
                      <li>Custom training and model fine-tuning</li>
                      <li>Multi-channel conversation management</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">3.2 AI Technology and Limitations</h3>
                <p className="text-bone/80 mb-3">
                  Generative AI Services: Our services use artificial intelligence and machine learning to process user inputs ("Prompts") and generate responses ("Outputs").
                </p>
                
                <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Important Limitations:</h4>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>AI responses may be inaccurate, incomplete, or inappropriate</li>
                  <li>Outputs should not be relied upon for factual accuracy without verification</li>
                  <li>AI may generate content that appears realistic but is fabricated</li>
                  <li>Human review is recommended for critical business applications</li>
                </ul>
                
                <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Your Responsibilities:</h4>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>Evaluate AI outputs for accuracy and appropriateness</li>
                  <li>Provide appropriate disclaimers to end users about AI limitations</li>
                  <li>Do not rely on AI for legal, medical, or financial advice</li>
                  <li>Implement human oversight for sensitive applications</li>
                </ul>

                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">3.3 Software and Documentation</h3>
                <p className="text-bone/80 mb-3">
                  Software License: You receive a limited, non-exclusive license to use our software and APIs solely for authorized purposes. You may not:
                </p>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>Copy, reproduce, or redistribute our software</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Create derivative works or competing services</li>
                  <li>Sublicense or resell our technology</li>
                </ul>
                
                <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Documentation Use:</h4>
                <p className="text-bone/80 mb-3">You may use our documentation for internal purposes, including:</p>
                <ul className="list-disc pl-6 text-bone/80 mb-4">
                  <li>Integration and development activities</li>
                  <li>Training your team members</li>
                  <li>Creating internal procedures and guides</li>
                </ul>
                <p className="text-bone/80">
                  You must preserve all copyright notices and may not publish modifications or translations.
                </p>
              </section>

              <section className="mb-8 bg-ink">
                <h2 className="text-2xl text-bone mb-4 font-medium tracking-[-0.035em] leading-[1.08]">20. Contact Information and Legal Notices</h2>
                
                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">20.1 Primary Contact</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">General Inquiries:</h4>
                    <ul className="list-none pl-6 text-bone/80">
                      <li><strong>Email:</strong> <a href="mailto:contact@botrixai.com" className="text-signal hover:underline">contact@botrixai.com</a></li>
                      <li><strong>Response Time:</strong> 5 business days for general matters</li>
                      <li><strong>Subject Line:</strong> Please include relevant topic for faster routing</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl text-bone mb-3 font-medium tracking-[-0.02em]">20.2 Legal and Compliance Contacts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Legal Notices:</h4>
                    <ul className="list-none pl-6 text-bone/80">
                      <li><strong>Email:</strong> <a href="mailto:contact@botrixai.com" className="text-signal hover:underline">contact@botrixai.com</a></li>
                      <li><strong>Address:</strong> [BotrixAI Legal Department Address]</li>
                      <li><strong>Requirements:</strong> Written notice required for formal legal matters</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Data Protection:</h4>
                    <ul className="list-none pl-6 text-bone/80">
                      <li><strong>Email:</strong> <a href="mailto:contact@botrixai.com" className="text-signal hover:underline">contact@botrixai.com</a></li>
                      <li><strong>Subject:</strong> Data Protection Inquiry</li>
                      <li><strong>Response:</strong> Within 30 days as required by applicable law</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-bone mb-2 font-medium tracking-[-0.01em]">Security Issues:</h4>
                    <ul className="list-none pl-6 text-bone/80">
                      <li><strong>Email:</strong> <a href="mailto:contact@botrixai.com" className="text-signal hover:underline">contact@botrixai.com</a></li>
                      <li><strong>Urgency:</strong> Include "URGENT" for immediate security concerns</li>
                      <li><strong>Response:</strong> Within 24 hours for critical security matters</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="mt-12 p-6 bg-surface-2 rounded-lg">
                <p className="text-bone/80 text-center">
                  By using BotrixAI services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. For questions about these Terms, please contact us at <a href="mailto:contact@botrixai.com" className="text-signal hover:underline">contact@botrixai.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 