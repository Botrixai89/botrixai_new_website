import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Privacy Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-[#00D563]/30 border border-[#00D563]/20 p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <div className="text-gray-600 space-y-2">
                <p><strong>Effective Date:</strong> 03.06.2025</p>
                <p><strong>Last Updated:</strong> 03.06.2025</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to BotrixAI ("we," "us," "our," or "Company"). We are committed to protecting your privacy and being transparent about how we handle your personal information. This Privacy Policy explains how we collect, use, process, store, share, and protect your information when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Visit our website at https://www.botrixai.com</li>
                  <li>Use our AI-powered services (Voice bots, Web bots, WhatsApp bots)</li>
                  <li>Interact with our customer support</li>
                  <li>Subscribe to our services or newsletters</li>
                </ul>
                <p className="text-gray-700">
                  By using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information You Provide</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Account Information:</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Full name, email address, phone number</li>
                      <li>Company name, job title, business address</li>
                      <li>Profile picture (optional)</li>
                      <li>Authentication credentials (username, password)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Payment Information:</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Billing address and payment method details</li>
                      <li>Transaction history and invoices</li>
                      <li>Tax identification numbers (when required)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Communication Data:</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Messages sent through our platform</li>
                      <li>Support tickets and correspondence</li>
                      <li>Feedback, surveys, and testimonials</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Information Collected Automatically</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Information:</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>IP address, browser type, and version</li>
                      <li>Operating system and device information</li>
                      <li>Screen resolution and time zone settings</li>
                      <li>Referral URLs and exit pages</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Usage Analytics:</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Pages visited and time spent on our platform</li>
                      <li>Features used and interaction patterns</li>
                      <li>Error logs and performance metrics</li>
                      <li>Session recordings (anonymized)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bot Interaction Data:</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Chat transcripts and conversation logs</li>
                      <li>Voice recordings and audio files</li>
                      <li>Response times and user satisfaction ratings</li>
                      <li>Training data for AI model improvement</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
                <p className="text-gray-700 mb-3">We use the following types of cookies:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how you use our site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
                <p className="text-gray-700">
                  You can manage cookie preferences through your browser settings or our cookie consent banner.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.4 Third-Party Information</h3>
                <p className="text-gray-700 mb-3">We may receive information about you from:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Social media platforms (when you connect accounts)</li>
                  <li>Business partners and integrators</li>
                  <li>Public databases and data enrichment services</li>
                  <li>Analytics and marketing service providers</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Legal Basis for Processing (GDPR Compliance)</h2>
                <p className="text-gray-700 mb-3">We process your personal data based on:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li><strong>Contractual Necessity:</strong> To provide services you've requested</li>
                  <li><strong>Legitimate Interests:</strong> To improve our services and prevent fraud</li>
                  <li><strong>Legal Obligations:</strong> To comply with applicable laws and regulations</li>
                  <li><strong>Consent:</strong> When you've given explicit permission (can be withdrawn anytime)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Service Delivery</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide, maintain, and improve our AI bot services</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Deliver customer support and technical assistance</li>
                  <li>Send service-related notifications and updates</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Platform Enhancement</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Analyze usage patterns to optimize performance</li>
                  <li>Train and improve our AI models and algorithms</li>
                  <li>Develop new features and functionalities</li>
                  <li>Conduct research and development activities</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Communication</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Send newsletters and marketing communications (with consent)</li>
                  <li>Provide product updates and announcements</li>
                  <li>Respond to inquiries and support requests</li>
                  <li>Conduct surveys and gather feedback</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Legal and Security</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Prevent fraud, abuse, and unauthorized access</li>
                  <li>Protect intellectual property rights</li>
                  <li>Investigate and resolve disputes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Service Providers</h3>
                <p className="text-gray-700 mb-3">We share data with trusted third parties who assist us in:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cloud hosting and infrastructure (AWS, Google Cloud, etc.)</li>
                  <li>Payment processing (Stripe, PayPal, etc.)</li>
                  <li>Analytics and monitoring (Google Analytics, etc.)</li>
                  <li>Customer relationship management</li>
                  <li>Email and communication services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Business Transfers</h3>
                <p className="text-gray-700 mb-4">
                  In case of merger, acquisition, or sale of assets, your information may be transferred to the new entity with appropriate safeguards.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Legal Requirements</h3>
                <p className="text-gray-700 mb-4">
                  We may disclose information when required by law, court order, or government regulation, or to protect our rights and safety.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.4 Aggregate Data</h3>
                <p className="text-gray-700">
                  We may share anonymized, aggregated data that cannot identify individual users for research, marketing, or business purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security and Protection</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Security Measures</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
                  <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
                  <li><strong>Network Security:</strong> Firewalls, intrusion detection, and regular security audits</li>
                  <li><strong>Compliance:</strong> SOC 2 Type II and ISO 27001 standards adherence</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Incident Response</h3>
                <p className="text-gray-700">
                  We maintain a comprehensive incident response plan and will notify affected users within 72 hours of discovering any data breach that poses a risk to their rights and freedoms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Retention Periods</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Account Data:</strong> Retained while your account is active plus 90 days</li>
                  <li><strong>Usage Data:</strong> Aggregated data retained for up to 3 years</li>
                  <li><strong>Chat Logs:</strong> Retained for 1 year for service improvement</li>
                  <li><strong>Financial Records:</strong> Retained for 7 years for tax and audit purposes</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Deletion Requests</h3>
                <p className="text-gray-700">
                  You can request deletion of your data at any time. We will complete deletion within 30 days unless retention is required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Choices</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Access Rights</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete information</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to Portability:</strong> Receive your data in a structured, machine-readable format</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Control Options</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Cookie Management:</strong> Control cookie preferences</li>
                  <li><strong>Account Settings:</strong> Update privacy preferences in your dashboard</li>
                  <li><strong>Data Export:</strong> Download your data at any time</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, contact us at <a href="mailto:contact@botrixai.com" className="text-[#00D563] hover:underline">contact@botrixai.com</a> with your request and identity verification.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children. If we discover that we have collected information from a child, we will delete it immediately and take steps to prevent future collection.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1 Cross-Border Processing</h3>
                <p className="text-gray-700 mb-4">
                  We may process your data in countries outside your residence, including India, the United States, and European Union, where our servers and service providers are located.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">10.2 Safeguards</h3>
                <p className="text-gray-700 mb-3">We implement appropriate safeguards including:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Standard Contractual Clauses (SCCs)</li>
                  <li>Adequacy decisions by competent authorities</li>
                  <li>Binding Corporate Rules where applicable</li>
                  <li>Additional security measures as required</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. California Privacy Rights (CCPA)</h2>
                <p className="text-gray-700 mb-3">California residents have additional rights under the California Consumer Privacy Act:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
                <p className="text-gray-700">
                  We do not sell personal information to third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Updates to This Policy</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12.1 Notification of Changes</h3>
                <p className="text-gray-700 mb-3">We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Post the updated policy on our website</li>
                  <li>Send email notifications for material changes</li>
                  <li>Provide 30 days' notice before significant changes take effect</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">12.2 Version Control</h3>
                <p className="text-gray-700">
                  Each version will be dated and archived for reference. Continued use of our services after updates constitutes acceptance of the revised policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">13.1 Privacy Officer</h3>
                <p className="text-gray-700 mb-3">For privacy-related questions, concerns, or requests:</p>
                <ul className="list-none pl-6 text-gray-700">
                  <li><strong>Email:</strong> <a href="mailto:contact@botrixai.com" className="text-[#00D563] hover:underline">contact@botrixai.com</a></li>
                  <li><strong>Subject Line:</strong> Privacy Policy Inquiry</li>
                  <li><strong>Response Time:</strong> Within 5 business days</li>
                </ul>
              </section>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 text-center">
                  This Privacy Policy is effective as of the date listed above and applies to all information collected by BotrixAI through its services and platforms.
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