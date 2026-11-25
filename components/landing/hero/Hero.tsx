"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BlueprintTitle } from "./BlueprintTitle";
import { scrollState } from "./state";
import { scrollToId } from "../SmoothScroll";
import { Magnet } from "../ui/Magnet";
import { HeroCrosshair } from "./Cursor";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Scene = dynamic(() => import("./scene/Scene"), { ssr: false });

function Words({ text, accent }: { text: string; accent?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
          <span data-word className={`inline-block ${accent && w.includes(accent) ? "text-signal" : ""}`}>
            {w}&nbsp;
          </span>
        </span>
      ))}
    </>
  );
}

function Eyebrow({ label }: { label: string }) {
  return (
    <div data-fade className="mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-bone/55">
      <span className="h-px w-10 bg-signal/60" />
      {label}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      data-fade
      className="inline-flex items-center gap-2 rounded-full border border-bone/15 bg-ink/40 px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-bone/75 backdrop-blur-md"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
      {children}
    </span>
  );
}

const STAGES = ["Wordmark", "Conversations", "Automation", "AI Workforce"];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const stageLabel = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(true);

  // Pause WebGL entirely once the hero is off-screen.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { rootMargin: "100px" });
    io.observe(stage.current!);
    return () => io.disconnect();
  }, []);

  useGSAP(
    () => {
      gsap.from("[data-chrome]", { opacity: 0, y: 10, duration: 1.2, delay: 1.8, stagger: 0.08, ease: "expo.out" });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: track.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          onUpdate: (self) => {
            scrollState.target = self.progress;
            const i = Math.min(3, Math.floor(self.progress * 4.2));
            if (counter.current) counter.current.textContent = String(i).padStart(2, "0");
            if (stageLabel.current) stageLabel.current.textContent = STAGES[i];
          },
        },
      });

      // ---- 00: the wordmark flies past the camera ----
      tl.to("[data-title]", { scale: 1.9, opacity: 0, filter: "blur(14px)", ease: "power2.in", duration: 0.14 }, 0.03);

      const chapterIn = (sel: string, at: number) =>
        tl
          .set(sel, { autoAlpha: 1 }, at)
          .from(`${sel} [data-word]`, { yPercent: 110, rotate: 4, duration: 0.07, stagger: 0.008, ease: "power3.out" }, at)
          .from(`${sel} [data-fade]`, { opacity: 0, y: 24, duration: 0.06, stagger: 0.01, ease: "power2.out" }, at + 0.03);
      const chapterOut = (sel: string, at: number) =>
        tl
          .to(`${sel} [data-word]`, { yPercent: -110, duration: 0.05, stagger: 0.005, ease: "power2.in" }, at)
          .to(`${sel} [data-fade]`, { opacity: 0, y: -20, duration: 0.05, ease: "power2.in" }, at)
          .set(sel, { autoAlpha: 0 }, at + 0.07);

      chapterIn("[data-ch='1']", 0.2);
      chapterOut("[data-ch='1']", 0.39);
      chapterIn("[data-ch='2']", 0.5);
      chapterOut("[data-ch='2']", 0.66);
      chapterIn("[data-ch='3']", 0.8);

      tl.fromTo("[data-progress]", { scaleY: 0 }, { scaleY: 1, duration: 1 }, 0);
      tl.to({}, { duration: 0.01 }, 0.99); // timeline length == 1 → positions equal scroll progress

      // ---- hand-off: the next section slides over a receding hero ----
      gsap.to(stage.current, {
        scale: 0.9,
        yPercent: -4,
        filter: "brightness(0.35)",
        borderRadius: 30,
        ease: "none",
        scrollTrigger: { trigger: track.current, start: "bottom bottom", end: "+=100%", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="relative h-[700vh]">
      {/* scroll track for the 3D story (the last 100vh is the hand-off to the next section) */}
      <div ref={track} className="pointer-events-none absolute inset-x-0 top-0 h-[600vh]" />

      <div ref={stage} className="sticky top-0 h-svh w-full origin-top overflow-hidden bg-ink will-change-transform">
        <div className="absolute inset-0">
          <Scene active={active} />
        </div>

        <div className="blueprint-grid pointer-events-none absolute inset-0" />
        <div className="grain pointer-events-none absolute inset-0 overflow-hidden" />

        {/* ---------- 00 · WORDMARK ---------- */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div data-title className="will-change-transform">
            <BlueprintTitle />
          </div>
        </div>

        {/* ---------- 01 · CONVERSATIONS ---------- */}
        <div
          data-ch="1"
          className="invisible absolute inset-0 z-10 flex items-center px-6 max-md:items-end max-md:pb-24 md:px-16 lg:px-24"
        >
          <div className="max-w-xl">
            <Eyebrow label="CONVERSATIONAL AI" />
            <h2 className="text-[clamp(2.6rem,5.6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.04em]">
              <Words text="Conversations that never sleep." accent="sleep" />
            </h2>
            <p data-fade className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/60 md:text-base">
              Botrix deploys intelligent WhatsApp chatbots that answer, qualify and convert your customers —
              instantly, in their language, around the clock.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <Chip>Instant replies</Chip>
              <Chip>Multilingual</Chip>
              <Chip>Human handoff</Chip>
            </div>
          </div>
        </div>

        {/* ---------- 02 · AUTOMATION ---------- */}
        <div
          data-ch="2"
          className="invisible absolute inset-0 z-10 flex items-center justify-end px-6 max-md:items-end max-md:pb-24 md:px-16 lg:px-24"
        >
          <div className="max-w-xl md:text-right">
            <div className="flex md:justify-end">
              <Eyebrow label="AI AUTOMATION" />
            </div>
            <h2 className="text-[clamp(2.6rem,5.6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.04em]">
              <Words text="Workflows that think for themselves." accent="think" />
            </h2>
            <p data-fade className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/60 md:ml-auto md:text-base">
              Connect WhatsApp to your CRM, payments, bookings and support stack. Botrix orchestrates every
              step — from the first message to the closed deal.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5 md:justify-end">
              <Chip>CRM sync</Chip>
              <Chip>Payments</Chip>
              <Chip>Bookings</Chip>
              <Chip>Webhooks</Chip>
            </div>
          </div>
        </div>

        {/* ---------- 03 · AI WORKFORCE ---------- */}
        <div
          data-ch="3"
          className="invisible absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-14 text-center md:pb-16"
        >
          <Eyebrow label="YOUR AI WORKFORCE" />
          <h2 className="max-w-4xl text-[clamp(2.6rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.045em]">
            <Words text="Scale without adding headcount." accent="headcount" />
          </h2>
          <div data-fade className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-3">
            <Magnet>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("contact");
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-3.5 text-sm font-medium text-ink transition-transform active:scale-95"
              >
                Book Free Demo
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Magnet>
            <a
              href="#why"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("why");
              }}
              className="inline-flex items-center gap-2.5 rounded-full bg-surface-1 px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-surface-2"
            >
              <span className="h-2 w-2 animate-[pulse-dot_1.6s_ease-in-out_infinite] rounded-full bg-signal" />
              See how it works
            </a>
          </div>
        </div>

        {/* ---------- HUD ---------- */}
        <HeroCrosshair />

        <div
          data-chrome
          className="absolute bottom-8 left-5 z-20 hidden font-mono text-[10px] tracking-[0.3em] text-bone/40 md:left-10 md:block"
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-[pulse-dot_1.6s_ease-in-out_infinite] rounded-full bg-signal" />
          SYSTEMS ONLINE
        </div>

        <div
          data-chrome
          className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 md:right-10 md:flex"
        >
          <span ref={counter} className="font-mono text-[11px] text-signal">
            00
          </span>
          <span className="relative block h-32 w-px bg-bone/15">
            <span data-progress className="absolute inset-0 origin-top bg-signal" />
          </span>
          <span className="font-mono text-[11px] text-bone/40">03</span>
        </div>

        <div
          data-chrome
          className="absolute bottom-8 right-5 z-20 hidden font-mono text-[10px] tracking-[0.3em] text-bone/40 md:right-10 md:block"
        >
          <span ref={stageLabel}>Wordmark</span>
        </div>
      </div>
    </section>
  );
}
