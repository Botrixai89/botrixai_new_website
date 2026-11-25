"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { INTEGRATIONS } from "@/components/landing/content";
import { BrandIcon } from "../ui/BrandIcon";
import { IconCloud, type CloudItem } from "../ui/IconCloud";
import { Eyebrow, ScrollFloat } from "../ui/TextFx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TOTAL = INTEGRATIONS.groups.reduce((n, g) => n + g.items.length, 0);

export function Integrations() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const items: CloudItem[] = useMemo(
    () => INTEGRATIONS.groups.flatMap((g) => g.items.map((name) => ({ name, group: g.id }))),
    [],
  );

  // Cycle through the categories until the visitor picks one.
  useEffect(() => {
    if (paused) return;
    const order = [null, ...INTEGRATIONS.groups.map((g) => g.id)];
    const id = setInterval(() => setActive((a) => order[(order.indexOf(a) + 1) % order.length]), 2600);
    return () => clearInterval(id);
  }, [paused]);

  useGSAP(
    () => {
      gsap.from("[data-cloud]", {
        scale: 0.6,
        opacity: 0,
        rotation: -25,
        ease: "expo.out",
        duration: 1.6,
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
      gsap.from("[data-reveal]", {
        y: 30,
        opacity: 0,
        stagger: 0.07,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
    },
    { scope: root },
  );

  const group = INTEGRATIONS.groups.find((g) => g.id === active);
  const shown = group ? group.items : INTEGRATIONS.groups.flatMap((g) => g.items);

  return (
    <section
      ref={root}
      id="integrations"
      className="relative flex min-h-svh items-center overflow-hidden bg-ink pb-10 pt-24 lg:h-svh lg:min-h-[680px] lg:py-0 lg:pt-[76px]"
    >
      <div aria-hidden data-speed="0.8" className="pointer-events-none absolute right-[-10%] top-1/4 h-[620px] w-[620px] rounded-full bg-signal/[0.07] blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-5 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:grid-rows-[auto_auto] lg:gap-x-14 lg:gap-y-0">
        {/* narrative */}
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <Eyebrow label="INTEGRATIONS" />
          <ScrollFloat
            text={INTEGRATIONS.title}
            className="mt-5 text-[clamp(2.4rem,min(6vw,9vh),5.6rem)] font-medium leading-[0.9] tracking-[-0.055em]"
          />
          <p data-reveal className="mt-4 max-w-md text-[clamp(0.98rem,1.3vw,1.2rem)] leading-[1.35] text-dim">
            {INTEGRATIONS.sub}
          </p>
        </div>

        {/* 3D icon cloud */}
        <div
          data-cloud
          className="mx-auto w-full max-w-[min(100%,72svh)] max-lg:max-w-[min(300px,38svh)] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
        >
          <IconCloud items={items} highlight={active} />
          <p className="mt-1 text-center font-mono text-[10px] tracking-[0.3em] text-dim max-lg:hidden">
            DRAG TO SPIN · HOVER A TILE
          </p>
        </div>

        {/* category controls */}
        <div className="lg:col-start-1 lg:row-start-2 lg:self-start" onPointerEnter={() => setPaused(true)}>
          <div data-reveal className="mt-6 flex items-baseline gap-3 border-t border-hairline pt-5 max-lg:hidden lg:mt-8">
            <span className="text-[clamp(2.2rem,3.6vw,3.2rem)] font-medium leading-none tracking-[-0.05em]">100+</span>
            <span className="text-[13px] font-medium text-dim">
              connectors · {TOTAL} featured below · {INTEGRATIONS.trustedTitle.toLowerCase()}
            </span>
          </div>

          {/* segmented category control */}
          <div data-reveal className="mt-5 flex flex-wrap gap-1.5" role="tablist" aria-label="Integration categories">
            {[{ id: null, label: "All" }, ...INTEGRATIONS.groups].map((g) => {
              const on = active === g.id;
              return (
                <button
                  key={g.label}
                  role="tab"
                  aria-selected={on}
                  onClick={() => {
                    setPaused(true);
                    setActive(g.id);
                  }}
                  onPointerEnter={() => {
                    setPaused(true);
                    setActive(g.id);
                  }}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                    on ? "bg-bone text-ink" : "bg-surface-1 text-dim hover:text-bone"
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>

          {/* names in the active category */}
          <ul data-reveal className="mt-4 flex min-h-[52px] flex-wrap content-start gap-x-4 gap-y-2 max-lg:hidden" aria-live="polite">
            {shown.map((name) => (
              <li key={name} className="flex items-center gap-1.5 text-[13px] font-medium text-bone/80">
                <BrandIcon name={name} className="h-3.5 w-3.5 text-dim" />
                {name}
              </li>
            ))}
          </ul>

          <a
            data-reveal
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 text-sm font-medium text-ink transition-transform active:scale-95"
          >
            View All Integrations <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
