import type { SVGProps } from "react"

// lucide has no WhatsApp glyph — bubble outline with lucide's phone handset inside
const PHONE_PATH =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"

export default function WhatsAppGlyph({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  ...rest
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M3.5 20.5l1.3-4.2A8.4 8.4 0 1 1 8 19.4z" />
      <path d={PHONE_PATH} transform="translate(7.6 7.6) scale(0.37)" strokeWidth={Number(strokeWidth) / 0.37} />
    </svg>
  )
}
