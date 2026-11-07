"use client"

import Image from "next/image"

const clients = [
  { src: "/clients/Logo-Brik.jpeg",              name: "Brik" },
  { src: "/clients/Logo-CGC.jpg",                name: "CGC" },
  { src: "/clients/Logo-Carcinoma.avif",         name: "Carcinoma" },
  { src: "/clients/Logo-Chimera.png",            name: "Chimera" },
  { src: "/clients/Logo-Goto.webp",              name: "Goto" },
  { src: "/clients/Logo-Medikart.png",           name: "Medikart" },
  { src: "/clients/Logo-Prasiddhi.jpeg",         name: "Prasiddhi" },
  // { src: "/clients/Logo-T-SeriesEducation.png",  name: "T-Series Education" },
  { src: "/clients/Logo-TheVilton.jpeg",         name: "The Vilton" },
  { src: "/clients/Logo-ThinkGas.png",           name: "ThinkGas" },
  { src: "/clients/Logo-Tstageworks.png",        name: "Tstageworks" },
  { src: "/clients/Logo-Vectus.png",             name: "Vectus" },
]

const row1 = clients.slice(0, 6)
const row2 = clients.slice(6)

// Half of each track must be wider than the screen for the -50% loop to stay seamless
const SETS_PER_HALF = 3
const trackOf = <T,>(row: T[]) => Array.from({ length: SETS_PER_HALF * 2 }, () => row).flat()

function LogoCard({ src, name }: { src: string; name: string }) {
  return (
    <div className="client-logo-card flex-shrink-0 mx-3 w-[136px] h-[68px] bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center px-3">
      <Image
        src={src}
        alt={name}
        width={112}
        height={52}
        className="w-full h-full object-contain transition-[filter,opacity] duration-300"
        unoptimized
      />
    </div>
  )
}

export default function OurClients() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#f5fff9] to-white py-12 overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .track-left  { animation: scroll-left  90s linear infinite; }
        .track-right { animation: scroll-right 90s linear infinite; }

        .client-logo-card:hover {
          border-color: #00D563;
          box-shadow: 0 0 0 1px #00D56340, 0 8px 24px #00D56320;
        }
        /* Hovering one logo drops every other logo to black and white, and holds the rows still */
        .client-logos:has(.client-logo-card:hover) .client-logo-card:not(:hover) img {
          filter: grayscale(1);
          opacity: 0.6;
        }
        .client-logos:has(.client-logo-card:hover) :is(.track-left, .track-right) {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-green-500" />

      <div className="max-w-6xl mx-auto px-6 text-center mb-8">
        <span className="inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-3">
          Our Clients
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Trusted by{" "}
          <span className="text-emerald-600">Leading Brands</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          Businesses of every size rely on BotrixAI to automate customer engagement and drive growth.
        </p>
      </div>

      <div className="client-logos">
        {/* Row 1 — scrolls left */}
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] mb-6">
          <div className="flex w-max items-center track-left">
            {trackOf(row1).map((c, i) => (
              <LogoCard key={`r1-${i}`} src={c.src} name={c.name} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max items-center track-right">
            {trackOf(row2).map((c, i) => (
              <LogoCard key={`r2-${i}`} src={c.src} name={c.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="mt-8 max-w-3xl mx-auto px-6 grid grid-cols-3 gap-6 text-center">
        {[
          { value: "12+", label: "Active Clients" },
          { value: "500+", label: "Businesses Served" },
          { value: "99%", label: "Client Retention" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-emerald-600">{value}</span>
            <span className="text-xs sm:text-sm text-gray-500 mt-1">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
