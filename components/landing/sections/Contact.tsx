"use client";

import { COMPANY } from "@/components/landing/content";
import { Magnet } from "../ui/Magnet";
import { Eyebrow, ScrollFloat } from "../ui/TextFx";

/** Closing CTA band (the site-wide <Footer /> follows it). */
export function Contact() {
  return (
    <section id="contact" className="relative flex min-h-[80svh] flex-col overflow-hidden bg-ink py-24">
      <div aria-hidden data-speed="0.75" className="pointer-events-none absolute left-1/2 top-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-signal/[0.08] blur-[140px]" />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-1 flex-col items-center justify-center px-5 text-center md:px-8">
        <Eyebrow label="GET STARTED" />
        <ScrollFloat
          text="Put your conversations on *autopilot.*"
          className="mt-5 max-w-5xl text-[clamp(2.6rem,min(6.4vw,9vh),5.8rem)] font-medium leading-[0.9] tracking-[-0.055em]"
        />
        <p className="mt-4 max-w-lg text-[clamp(0.98rem,1.2vw,1.12rem)] leading-[1.35] text-dim">
          See BotrixAI answer, qualify and convert on your own WhatsApp number — set up in a single call.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Magnet>
            <a
              href={`mailto:${COMPANY.email}?subject=Book%20a%20free%20demo`}
              className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-medium text-ink transition-transform active:scale-95"
            >
              Book Free Demo
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Magnet>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-surface-1 px-7 py-4 text-sm font-medium transition-colors hover:bg-surface-2"
          >
            <span className="h-2 w-2 animate-[pulse-dot_1.6s_ease-in-out_infinite] rounded-full bg-signal" />
            Talk to an agent
          </a>
        </div>
      </div>

    </section>
  );
}
