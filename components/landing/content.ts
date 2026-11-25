// Copy sourced from botrixai.com (titles/labels verbatim, descriptions lightly tightened).

export const STATS = [
  { value: 500, suffix: "+", label: "Businesses served" },
  { value: 99, suffix: "%", label: "Client retention" },
  { value: 100, suffix: "+", label: "Pre-built connectors" },
];

export const WHY = {
  title: "Why choose *BotrixAI*?",
  intro:
    "From WhatsApp to your website and phone lines — intelligent chatbots that automate support, capture leads, and delight customers around the clock.",
  features: [
    {
      key: "whatsapp",
      title: "WhatsApp Business Chatbots",
      desc: "Automate customer chats, broadcast campaigns, and support on the WhatsApp Business API — with instant, accurate replies at any scale.",
      badge: "Official WhatsApp Business API",
    },
    {
      key: "voice",
      title: "AI Voice Agents",
      desc: "Natural voice bots that handle inbound calls, bookings, support and IVR — cutting wait times and staffing costs.",
      badge: "Multi-language Voice AI",
    },
    {
      key: "web",
      title: "Intelligent Web Chatbots",
      desc: "Engage website visitors 24/7, capture leads, and answer FAQs instantly with AI chat widgets trained on your business.",
      badge: "GenAI + Lead Capture",
    },
    {
      key: "builder",
      title: "No-Code Chatbot Builder",
      desc: "Design conversation flows with drag-and-drop, then deploy across every channel in minutes — no code required.",
      badge: "Drag · Drop · Deploy",
    },
    {
      key: "crm",
      title: "CRM & Tool Integrations",
      desc: "Sync conversations with Salesforce, HubSpot, Zoho and 100+ platforms. Every chat logged, every lead captured automatically.",
      badge: "100+ Pre-built Connectors",
    },
    {
      key: "secure",
      title: "Secure & Compliant",
      desc: "Enterprise-grade encryption, GDPR-ready data handling and full WhatsApp policy compliance — built in, not bolted on.",
      badge: "SOC 2 · GDPR · E2E Encryption",
    },
  ],
} as const;

export const CLIENTS = {
  title: "Brands that *talk* with Botrix",
  sub: "From healthcare and education to energy, retail and creative studios — growing teams run their customer conversations on BotrixAI.",
} as const;

export const INTEGRATIONS = {
  title: "Seamless *Integration*",
  sub: "Connect WhatsApp, Salesforce, Zendesk, HubSpot & more to BotrixAI with a single click.",
  trustedTitle: "Trusted by Leading Platforms",
  trustedSub: "Seamlessly integrate with your existing tech stack and payment processors.",
  groups: [
    { id: "channels", label: "Channels", items: ["WhatsApp", "Instagram", "Telegram", "Discord"] },
    { id: "crm", label: "CRM & Support", items: ["Salesforce", "HubSpot", "Zendesk", "Zoho"] },
    { id: "payments", label: "Payments", items: ["Razorpay", "Paddle", "Stripe", "PayPal", "Chargebee", "Shopify"] },
    { id: "marketing", label: "Marketing", items: ["ActiveCampaign", "ConvertKit", "Mailchimp"] },
    { id: "work", label: "Productivity", items: ["Asana", "Notion", "Trello", "Slack", "Google Sheets", "Microsoft Teams"] },
  ],
};

export const TECH = {
  title: "Built on Cutting-Edge *Technology*",
  sub: "Our platform leverages the latest AI models and enterprise-grade infrastructure to deliver exceptional performance.",
  pillars: [
    {
      label: "AI Models",
      title: "Powered by Advanced LLMs",
      desc: "GPT-4, Claude, Gemini and custom-trained models — routed per conversation for natural, context-aware replies.",
      items: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Custom NLP Models"],
    },
    {
      label: "Integrations",
      title: "Seamless Connectivity",
      desc: "Connect with your favorite business tools and keep every system in sync, in real time.",
      items: ["Salesforce", "HubSpot", "Shopify", "Google Sheets", "Slack", "Microsoft Teams"],
    },
    {
      label: "APIs",
      title: "Developer-Friendly",
      desc: "RESTful APIs and webhooks for custom integrations — build on Botrix the way your stack already works.",
      items: ["REST APIs", "GraphQL", "Webhooks", "SDKs", "Real-time Events"],
    },
    {
      label: "Security",
      title: "Enterprise-Grade Security",
      desc: "SOC 2 compliant infrastructure with end-to-end encryption protecting every conversation.",
      items: ["SOC 2 Type II", "GDPR Compliant", "ISO 27001", "End-to-End Encryption"],
    },
  ],
};

export const COMPANY = {
  phone: "+91 99812 92605",
  email: "contact@botrixai.com",
};
