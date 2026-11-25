"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TechText from "../ui/TechText";
import { LogoMark } from "./Logo";
import { scrambleTo } from "./scramble";

const INTRO_SECONDS = 1.8;

/**
 * The opening wordmark — React Bits <TechText />: letters are typed in under a
 * selection frame, then turn into dashed vector outlines under the cursor, can
 * be dragged off the baseline, and kick upward on click.
 */
export function BlueprintTitle() {
  const rootRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const sub = () => {
        if (subRef.current) scrambleTo(subRef.current, "WhatsApp chatbots  ·  AI automation  ·  always on", 1.4);
      };
      if (reduced) {
        sub();
        return;
      }
      gsap
        .timeline({ delay: 0.15, defaults: { ease: "expo.out" } })
        .from("[data-logo]", { scale: 0.6, rotate: -25, opacity: 0, duration: 1.2, ease: "back.out(1.8)" }, 0)
        .from("[data-meta]", { opacity: 0, y: 8, duration: 1, stagger: 0.08 }, 0.3)
        .add(sub, INTRO_SECONDS + 0.2);
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="relative flex flex-col items-center">
      {/* logo mark */}
      <div className="mb-2 flex flex-col items-center gap-3 md:mb-4">
        <LogoMark animated priority className="h-14 w-14 md:h-16 md:w-16" />
        <span data-meta className="font-mono text-[10px] tracking-[0.35em] text-bone/45">
          [ BTX — 001 ]
        </span>
      </div>

      {/* the wordmark */}
      <div role="heading" aria-level={1} aria-label="BotrixAI" className="h-[clamp(190px,34vh,400px)] w-[min(94vw,1500px)]">
        <TechText
          text="BotrixAI"
          fontWeight={600}
          fontSize={300}
          letterSpacing={-0.05}
          color="#f2f5f1"
          accentColor="#2bee7c"
          highlightLast={2}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          intro="type"
          introDuration={INTRO_SECONDS}
          clickKick
          guides={false}
        />
      </div>

      <p
        ref={subRef}
        data-meta
        className="mt-2 min-h-4 max-w-[85vw] text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-bone/60 md:mt-4 md:text-xs md:tracking-[0.35em]"
      >
        &nbsp;
      </p>
    </div>
  );
}
