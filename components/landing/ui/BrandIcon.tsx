import {
  siAnthropic,
  siAsana,
  siDiscord,
  siGooglegemini,
  siGooglesheets,
  siGraphql,
  siHubspot,
  siInstagram,
  siKit,
  siMailchimp,
  siNotion,
  siPaddle,
  siPaypal,
  siRazorpay,
  siShopify,
  siStripe,
  siTelegram,
  siTrello,
  siWhatsapp,
  siZendesk,
  siZoho,
} from "simple-icons";

const ICONS: Record<string, { path: string }> = {
  Razorpay: siRazorpay,
  Paddle: siPaddle,
  Asana: siAsana,
  ConvertKit: siKit,
  Mailchimp: siMailchimp,
  WhatsApp: siWhatsapp,
  Zendesk: siZendesk,
  HubSpot: siHubspot,
  Stripe: siStripe,
  PayPal: siPaypal,
  Discord: siDiscord,
  Telegram: siTelegram,
  Notion: siNotion,
  Trello: siTrello,
  Shopify: siShopify,
  "Google Sheets": siGooglesheets,
  Zoho: siZoho,
  Instagram: siInstagram,
  GraphQL: siGraphql,
  "Anthropic Claude": siAnthropic,
  "Google Gemini": siGooglegemini,
};

export const hasBrandIcon = (name: string) => name in ICONS;

/** Monochrome brand glyph (simple-icons). Falls back to an initial monogram. */
export function BrandIcon({ name, className }: { name: string; className?: string }) {
  const icon = ICONS[name];
  if (!icon)
    return (
      <span
        aria-hidden
        className={`inline-flex items-center justify-center rounded-md border border-current text-[0.55em] font-semibold leading-none ${className ?? ""}`}
      >
        {name.replace(/^(OpenAI|Microsoft) /, "").charAt(0)}
      </span>
    );
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={icon.path} />
    </svg>
  );
}
