"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * ScrollFloat (React Bits pattern): characters stretch up out of a mask as the
 * heading scrolls into view, scrubbed to the scroll position.
 * Words wrapped in *asterisks* render in the signal green.
 */
export function ScrollFloat({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current!.querySelectorAll("[data-ch]"),
        { opacity: 0, yPercent: 120, scaleY: 2.3, scaleX: 0.7, transformOrigin: "50% 0%" },
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: 0.03,
          ease: "back.inOut(2)",
          scrollTrigger: { trigger: ref.current, start: "top bottom-=8%", end: "bottom center+=10%", scrub: true },
        },
      );
    },
    { scope: ref },
  );

  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className} aria-label={text.replaceAll("*", "")}>
      {words.map((w, wi) => {
        const accent = w.startsWith("*");
        const clean = w.replaceAll("*", "");
        return (
          <span key={wi} aria-hidden className={`inline-block overflow-hidden pb-[0.1em] ${accent ? "text-signal" : ""}`}>
            {clean.split("").map((c, ci) => (
              <span key={ci} data-ch className="inline-block">
                {c}
              </span>
            ))}
            {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </Tag>
  );
}

/** ScrollReveal (React Bits pattern): words brighten and un-blur as you read down. */
export function ScrollReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current!.querySelectorAll("[data-w]"),
        { opacity: 0.12, filter: "blur(5px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.05,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom-=12%", end: "bottom center", scrub: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} data-w className="inline-block">
          {w}&nbsp;
        </span>
      ))}
    </p>
  );
}

/** Mono eyebrow in the blueprint language of the hero: ——— LABEL */
export function Eyebrow({ label, className }: { label: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(ref.current!.querySelector("[data-line]"), {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%" },
      });
    },
    { scope: ref },
  );
  return (
    <div ref={ref} className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-dim ${className ?? ""}`}>
      <span data-line className="h-px w-12 bg-signal/60" />
      {label}
    </div>
  );
}
