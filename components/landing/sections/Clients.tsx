"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CLIENTS } from "@/components/landing/content";
import { scroller } from "../SmoothScroll";
import { Eyebrow, ScrollFloat } from "../ui/TextFx";

import brik from "@/components/landing/assets/clients/Logo-Brik.jpeg";
import cgc from "@/components/landing/assets/clients/Logo-CGC.jpg";
import carcinoma from "@/components/landing/assets/clients/Logo-Carcinoma.avif";
import chimera from "@/components/landing/assets/clients/Logo-Chimera.png";
import goto from "@/components/landing/assets/clients/Logo-Goto.webp";
import medikart from "@/components/landing/assets/clients/Logo-Medikart.png";
import prasiddhi from "@/components/landing/assets/clients/Logo-Prasiddhi.jpeg";
import tseries from "@/components/landing/assets/clients/Logo-T-SeriesEducation.png";
import vilton from "@/components/landing/assets/clients/Logo-TheVilton.jpeg";
import thinkgas from "@/components/landing/assets/clients/Logo-ThinkGas.png";
import stageworks from "@/components/landing/assets/clients/Logo-Tstageworks.png";
import vectus from "@/components/landing/assets/clients/Logo-Vectus.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Client = {
  name: string;
  src: StaticImageData;
  /** Plate colour — matches the logo's own background so it reads as one tile. */
  bg: string;
  /** Inner padding of the logo inside its plate. */
  pad: string;
};

const LOGOS: Client[] = [
  { name: "Medikart", src: medikart, bg: "#ffffff", pad: "px-[12%] py-[22%]" },
  { name: "Brik Marketing Studio", src: brik, bg: "#3da9d8", pad: "p-0" },
  { name: "Chhattisgarh Gold Center", src: cgc, bg: "#ffffff", pad: "p-[4%]" },
  { name: "Prasiddhi", src: prasiddhi, bg: "#000000", pad: "px-[8%] py-[14%]" },
  { name: "Think Gas", src: thinkgas, bg: "#ffffff", pad: "px-[7%] py-0" },
  { name: "The Vilton", src: vilton, bg: "#efefef", pad: "p-[3%]" },
  { name: "T-Series Education", src: tseries, bg: "#b1040e", pad: "px-[10%] py-[20%]" },
  { name: "Carcinoma Care Center", src: carcinoma, bg: "#ffffff", pad: "px-[10%] py-[18%]" },
  { name: "Go-To Friend", src: goto, bg: "#ffffff", pad: "p-[8%]" },
  { name: "Vectus", src: vectus, bg: "#ffffff", pad: "px-[14%] py-[20%]" },
  { name: "Chimera", src: chimera, bg: "#f2f5f1", pad: "p-[8%]" },
  { name: "T-Series Stageworks", src: stageworks, bg: "#e6001c", pad: "px-[12%] py-[10%]" },
];

// Three distinct orderings so the rows never read as copies of each other.
const ROWS = [1, 7, 5].map((step, r) => LOGOS.map((_, i) => LOGOS[(i * step + r * 3) % LOGOS.length]));

function Tile({ c }: { c: Client }) {
  return (
    <figure
      data-tile
      className="group/tile relative aspect-[16/10] h-[clamp(78px,9.5vw,128px)] shrink-0 rounded-[18px] shadow-[0_18px_40px_-12px_rgb(0_0_0/0.7)] ring-1 ring-white/10 transition-[transform,box-shadow] duration-500 [transition-timing-function:cubic-bezier(.2,.8,.2,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-14px_rgb(43_238_124/0.35)] hover:ring-signal/60"
      style={{ background: c.bg }}
    >
      <div className={`absolute inset-0 overflow-hidden rounded-[18px] ${c.pad}`}>
        <div className="relative h-full w-full">
          <Image src={c.src} alt={c.name} fill sizes="(min-width: 1024px) 210px, 130px" className="object-contain" />
        </div>
      </div>
      {/* glossy sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[18px] bg-[linear-gradient(135deg,rgb(255_255_255/0.35)_0%,transparent_40%)] opacity-60 mix-blend-overlay"
      />
      <figcaption className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-signal opacity-0 transition-[opacity,transform] duration-300 group-hover/tile:translate-y-0 group-hover/tile:opacity-100">
        {c.name.toUpperCase()}
      </figcaption>
    </figure>
  );
}

export function Clients() {
  const root = useRef<HTMLElement>(null);
  const plane = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.from("[data-reveal]", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });

      // The wall tilts back like a floor, then rises to face you as you scroll in.
      gsap.fromTo(
        plane.current,
        { rotateX: 38, rotateZ: -9, yPercent: 14, scale: 1.08 },
        {
          rotateX: 14,
          rotateZ: -4,
          yPercent: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "center center", scrub: true },
        },
      );

      if (reduced) return;

      // Endless rows in alternating directions.
      const tweens = gsap.utils.toArray<HTMLElement>("[data-track]").map((t, i) =>
        i % 2 === 0
          ? gsap.to(t, { xPercent: -50, duration: 46 + i * 6, ease: "none", repeat: -1 })
          : gsap.fromTo(t, { xPercent: -50 }, { xPercent: 0, duration: 46 + i * 6, ease: "none", repeat: -1 }),
      );

      // Scroll velocity pushes the rows; hovering the wall slows them to a drift.
      let ts = 1;
      const tick = () => {
        const base = hovering.current ? 0.12 : 1;
        const boost = gsap.utils.clamp(-5, 5, scroller.velocity * 0.25);
        ts += (base + boost - ts) * 0.08;
        tweens.forEach((tw) => tw.timeScale(ts));
      };
      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    },
    { scope: root },
  );

  const onMove = (e: React.PointerEvent) => {
    const r = root.current!.getBoundingClientRect();
    glow.current!.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px) translate(-50%, -50%)`;
  };

  return (
    <section
      ref={root}
      id="clients"
      onPointerMove={onMove}
      className="relative overflow-hidden bg-ink pb-24 pt-28 md:pb-32 md:pt-36"
    >
      <div aria-hidden className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-[55%] opacity-50" />
      <div
        ref={glow}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[460px] w-[460px] rounded-full bg-signal/[0.10] blur-[110px] transition-transform duration-700 ease-out"
        style={{ transform: "translate(50vw, 70%) translate(-50%, -50%)" }}
      />

      {/* header */}
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
        <div>
          <Eyebrow label="OUR CLIENTS" />
          <ScrollFloat
            text={CLIENTS.title}
            className="mt-5 text-[clamp(2.4rem,min(6vw,9vh),5.2rem)] font-medium leading-[0.92] tracking-[-0.055em]"
          />
        </div>
        <div className="max-w-md lg:pb-2">
          <p data-reveal className="text-[clamp(0.98rem,1.2vw,1.12rem)] leading-[1.4] text-dim">
            {CLIENTS.sub}
          </p>
          <div data-reveal className="mt-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-bone/50">
            <span className="flex -space-x-2">
              {LOGOS.slice(0, 4).map((c) => (
                <span
                  key={c.name}
                  className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-ink"
                  style={{ background: c.bg }}
                >
                  <Image src={c.src} alt="" fill sizes="28px" className="object-contain p-1" />
                </span>
              ))}
            </span>
            {LOGOS.length}+ BRANDS ON BOARD
          </div>
        </div>
      </div>

      {/* the brand wall */}
      <div
        className="relative mt-14 md:mt-20"
        style={{
          perspective: "1600px",
          maskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent), linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent), linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskComposite: "source-in",
        }}
      >
        <div
          ref={plane}
          className="flex flex-col gap-[clamp(1.6rem,2.6vw,2.4rem)] py-20 will-change-transform"
          style={{ transformOrigin: "50% 60%" }}
          onPointerEnter={() => (hovering.current = true)}
          onPointerLeave={() => (hovering.current = false)}
        >
          {ROWS.map((row, ri) => (
            <div key={ri} className="flex w-max" style={{ marginLeft: `${-ri * 6}vw` }}>
              <div data-track className="flex w-max gap-[clamp(0.8rem,1.4vw,1.25rem)] pr-[clamp(0.8rem,1.4vw,1.25rem)]">
                {[...row, ...row].map((c, i) => (
                  <Tile key={`${c.name}-${i}`} c={c} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
