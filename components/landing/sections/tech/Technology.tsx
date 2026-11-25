"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TECH } from "@/components/landing/content";
import { BrandIcon } from "../../ui/BrandIcon";
import { Eyebrow, ScrollFloat } from "../../ui/TextFx";
import { techState } from "./techState";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ChipScene = dynamic(() => import("./ChipScene"), { ssr: false });

/* ---------- per-pillar visuals ---------- */

function ModelRouter({ items }: { items: readonly string[] }) {
  const [pick, setPick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPick((p) => (p + 1) % items.length), 1400);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <div className="rounded-[15px] border border-hairline bg-ink p-4">
      <div className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-dim">
        <span className="h-1.5 w-1.5 animate-[pulse-dot_1s_infinite] rounded-full bg-signal" />
        ROUTING TO BEST MODEL
      </div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((m, i) => (
          <div
            key={m}
            className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-[13px] font-medium transition-all duration-500 ${
              i === pick ? "border-signal/60 bg-signal/10 text-bone" : "border-hairline text-dim"
            }`}
          >
            <BrandIcon name={m} className="h-4 w-4 shrink-0" />
            <span className="truncate">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((m) => (
        <div
          key={m}
          className="group flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-[15px] border border-hairline bg-ink text-dim transition-colors hover:border-signal/50 hover:text-bone"
        >
          <BrandIcon name={m} className="h-6 w-6 transition-transform group-hover:-translate-y-0.5" />
          <span className="text-center text-[12px] font-medium leading-tight">{m}</span>
        </div>
      ))}
    </div>
  );
}

function CodeBlock({ items }: { items: readonly string[] }) {
  return (
    <div>
      <pre className="overflow-x-auto rounded-[15px] border border-hairline bg-ink p-4 font-mono text-[12px] leading-[1.7] text-dim">
        <span className="text-signal">POST</span> <span className="text-bone">/v1/messages</span>
        {"\n"}
        {"{"}
        {"\n  "}
        <span className="text-bone">&quot;channel&quot;</span>: <span className="text-signal">&quot;whatsapp&quot;</span>,
        {"\n  "}
        <span className="text-bone">&quot;to&quot;</span>: <span className="text-signal">&quot;+91 98xxx xxx21&quot;</span>,
        {"\n  "}
        <span className="text-bone">&quot;template&quot;</span>: <span className="text-signal">&quot;order_update&quot;</span>
        {"\n}"}
        {"\n"}
        <span className="text-bone/40">{"// → 202 Accepted · webhook: message.delivered"}</span>
        <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-[pulse-dot_1s_steps(1)_infinite] bg-signal" />
      </pre>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((m) => (
          <span key={m} className="rounded-full bg-surface-2 px-3 py-1.5 font-mono text-[11px] text-bone/80">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function Certs({ items }: { items: readonly string[] }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((m) => (
        <div key={m} className="flex items-center gap-3 rounded-[15px] border border-hairline bg-ink px-4 py-4">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-signal/10 text-signal">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
              <path d="M9 12l2 2 4-4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-[13px] font-medium leading-tight">{m}</span>
        </div>
      ))}
    </div>
  );
}

const VISUALS = [ModelRouter, ToolGrid, CodeBlock, Certs];

const CYCLE_MS = 6000;

export function Technology() {
  const root = useRef<HTMLElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "200px" });
    io.observe(root.current!);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    techState.active = active;
  }, [active]);

  // Auto-advance while on screen; the active tab's hairline fills as a timer.
  useGSAP(
    () => {
      if (!visible || hold || !bar.current) return;
      const t = gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: CYCLE_MS / 1000,
          ease: "none",
          onComplete: () => setActive((a) => (a + 1) % TECH.pillars.length),
        },
      );
      return () => t.kill();
    },
    { dependencies: [active, visible, hold], scope: root },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-panel] > *",
        { y: 24, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.7, stagger: 0.06, ease: "expo.out" },
      );
    },
    { dependencies: [active], scope: root },
  );

  const p = TECH.pillars[active];
  const Visual = VISUALS[active];

  return (
    <section
      ref={root}
      id="technology"
      className="relative flex min-h-svh items-center bg-ink pb-10 pt-24 lg:h-svh lg:min-h-[680px] lg:py-0 lg:pt-[76px]"
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        {/* left: narrative + 3D chip */}
        <div className="flex min-h-0 flex-col">
          <Eyebrow label="TECHNOLOGY" />
          <ScrollFloat
            text={TECH.title}
            className="mt-5 text-[clamp(2.1rem,min(4.8vw,8vh),4.6rem)] font-medium leading-[0.92] tracking-[-0.055em]"
          />
          <p className="mt-4 max-w-md text-[clamp(0.98rem,1.2vw,1.12rem)] leading-[1.35] text-dim max-lg:hidden">{TECH.sub}</p>
          <div className="relative mt-5 h-[clamp(140px,32vh,330px)] overflow-hidden max-lg:h-[138px] rounded-[30px] border border-hairline">
            <ChipScene active={visible} />
            <div className="pointer-events-none absolute left-4 top-4 font-mono text-[10px] tracking-[0.25em] text-dim">
              BTX-CORE · <span className="text-signal">{p.label.toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* right: tabs + active pillar */}
        <div onPointerEnter={() => setHold(true)} onPointerLeave={() => setHold(false)}>
          <div className="grid grid-cols-4 gap-1.5 rounded-full bg-surface-1 p-1.5" role="tablist" aria-label="Technology pillars">
            {TECH.pillars.map((pl, i) => (
              <button
                key={pl.label}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-full px-2 py-2.5 text-[12px] font-medium transition-colors md:text-[13px] ${
                  i === active ? "bg-surface-2 text-bone" : "text-dim hover:text-bone"
                }`}
              >
                <span className="mr-1.5 font-mono text-[10px] text-signal max-sm:hidden">{String(i + 1).padStart(2, "0")}</span>
                {pl.label}
                {i === active && (
                  <span
                    ref={bar}
                    className="absolute inset-x-4 bottom-1 h-px origin-left bg-signal"
                  />
                )}
              </button>
            ))}
          </div>

          <article
            key={active}
            data-panel
            role="tabpanel"
            className="light-edge mt-4 flex flex-col rounded-[30px] border border-hairline bg-surface-1 p-5 md:p-8 lg:min-h-[clamp(360px,56vh,500px)]"
          >
            <div className="flex items-start justify-between">
              <span className="text-[clamp(2.8rem,5vw,4.2rem)] font-medium leading-none tracking-[-0.06em] text-bone/10 max-lg:hidden">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full bg-surface-2 px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-signal">
                {p.label.toUpperCase()}
              </span>
            </div>
            <h3 className="mt-3 text-[clamp(1.6rem,2.4vw,2.2rem)] font-medium leading-[1.05] tracking-[-0.04em]">{p.title}</h3>
            <p className="mt-2.5 max-w-md text-[15px] leading-[1.45] text-dim">{p.desc}</p>
            <div className="mt-auto pt-5">
              <Visual items={p.items} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
