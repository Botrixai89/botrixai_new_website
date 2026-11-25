"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STATS, WHY } from "@/components/landing/content";
import { Eyebrow, ScrollFloat } from "../../ui/TextFx";
import { BuilderViz, CrmViz, SecureViz, VoiceViz, WebChatViz, WhatsAppViz } from "./Visuals";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Feature = (typeof WHY.features)[number];

/**
 * Keeps a visual fully inside its slot: lays it out at least `min` px tall and
 * scales it down uniformly when the card gives it less room (short viewports).
 */
function FitBox({ min, children }: { min: number; children: React.ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState({ h: 0, scale: 1 });

  useEffect(() => {
    const el = outer.current!;
    const update = () => {
      const h = el.clientHeight;
      const scale = h > 0 && h < min ? h / min : 1;
      setFit((f) => (f.h === h && f.scale === scale ? f : { h, scale }));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [min]);

  return (
    <div ref={outer} className="relative h-full w-full">
      <div
        className="absolute left-0 top-0"
        style={{
          width: `${100 / fit.scale}%`,
          height: fit.h ? `${fit.h / fit.scale}px` : "100%",
          transform: fit.scale < 1 ? `scale(${fit.scale})` : undefined,
          transformOrigin: "0 0",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Spotlight + subtle 3D tilt surface (React Bits "SpotlightCard" × "TiltedCard"). */
function FeatureCard({
  feature,
  index,
  spotlight,
  fit,
  className,
  children,
}: {
  feature: Feature;
  index: number;
  spotlight?: boolean;
  /** Design height (px) of the visual; it is scaled down to fit when the card is shorter. */
  fit?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current!;
      if (!window.matchMedia("(pointer: fine)").matches) return;
      const rx = gsap.quickTo(el, "rotationX", { duration: 0.8, ease: "power3.out" });
      const ry = gsap.quickTo(el, "rotationY", { duration: 0.8, ease: "power3.out" });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
        rx((0.5 - y) * 4);
        ry((x - 0.5) * 5);
      };
      const leave = () => (rx(0), ry(0));
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      };
    },
    { scope: ref },
  );

  const surface = spotlight
    ? "rounded-[30px] bg-[radial-gradient(120%_120%_at_0%_0%,#0b5d2f_0%,#063a1e_38%,#0b0f0c_80%)]"
    : "rounded-[20px] bg-surface-1";

  const text = (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.22em]">
        <span className={spotlight ? "text-bone/70" : "text-dim"}>{String(index + 1).padStart(2, "0")}</span>
        <span className="shiny truncate text-right">{feature.badge}</span>
      </div>
      <h3 className="text-[clamp(1.25rem,1.6vw,1.6rem)] font-medium leading-[1.05] tracking-[-0.035em]">{feature.title}</h3>
      <p
        className={`mt-2 line-clamp-2 text-[13.5px] leading-[1.4] [@media(max-height:820px)]:line-clamp-1 ${
          spotlight ? "text-bone/70" : "text-dim"
        }`}
      >
        {feature.desc}
      </p>
    </div>
  );

  return (
    <article
      ref={ref}
      data-card
      className={`spotlight light-edge group relative flex min-h-0 snap-center flex-col overflow-hidden p-5 [transform-style:preserve-3d] lg:p-6 ${surface} ${className ?? ""}`}
      style={{ transformPerspective: 1200 } as React.CSSProperties}
    >
      {spotlight && (
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/25 blur-[90px]" />
      )}
      {spotlight ? (
        <div className="relative grid min-h-0 flex-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-0 flex-col">
            {text}
            <ul className="mt-auto hidden space-y-2 pt-4 text-[13px] text-bone/80 lg:block [@media(max-height:820px)]:!hidden">
              {["Broadcast campaigns", "Verified business profile", "Seamless human handoff"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-signal text-[9px] text-ink">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-0">{children}</div>
        </div>
      ) : (
        <>
          <div className="relative">{text}</div>
          <div className="relative mt-4 min-h-0 flex-1" style={{ transform: "translateZ(30px)" }}>
            {fit ? <FitBox min={fit}>{children}</FitBox> : children}
          </div>
        </>
      )}
    </article>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    const o = { v: 0 };
    gsap.to(o, {
      v: value,
      duration: 2.2,
      ease: "expo.out",
      scrollTrigger: { trigger: ref.current, start: "top 95%" },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${Math.round(o.v)}${suffix}`;
      },
    });
  });
  return <span ref={ref}>0{suffix}</span>;
}

export function WhyChoose() {
  const root = useRef<HTMLElement>(null);
  const f = WHY.features;

  useGSAP(
    () => {
      gsap.set("[data-card]", { opacity: 0 });
      ScrollTrigger.batch("[data-card]", {
        start: "top 95%",
        once: true,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 90, opacity: 0, rotationX: -12, scale: 0.95 },
            { y: 0, opacity: 1, rotationX: 0, scale: 1, duration: 1.2, stagger: 0.08, ease: "expo.out" },
          ),
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="why"
      className="relative z-20 -mt-[100svh] flex h-svh min-h-[640px] flex-col overflow-hidden rounded-t-[30px] border-t border-hairline bg-ink pb-5 pt-[88px] shadow-[0_-40px_80px_rgb(0_0_0/0.6)] lg:pb-7 lg:pt-[96px]"
    >
      {/* atmosphere */}
      <div aria-hidden data-speed="0.7" className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-signal/[0.07] blur-[120px]" />
      <div aria-hidden data-speed="1.25" className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-signal/[0.06] blur-[120px]" />
      <div aria-hidden className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-[60%] opacity-60" />

      <div className="relative mx-auto flex min-h-0 w-full max-w-[1320px] flex-1 flex-col px-5 md:px-8">
        {/* header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div>
            <Eyebrow label="WHY CHOOSE BOTRIXAI" />
            <ScrollFloat
              text={WHY.title}
              className="mt-4 text-[clamp(2.3rem,min(5vw,8vh),4.6rem)] font-medium leading-[0.92] tracking-[-0.055em]"
            />
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[clamp(0.95rem,1.15vw,1.08rem)] leading-[1.4] text-dim max-md:line-clamp-2">{WHY.intro}</p>
            <dl className="mt-4 flex gap-8 max-md:hidden [@media(max-height:820px)]:hidden">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <dd className="text-[1.6rem] font-medium leading-none tracking-[-0.05em] tabular-nums">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="text-[12px] font-medium text-dim">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* bento: one screen on desktop, swipe rail on phones */}
        <div
          className="mt-5 flex min-h-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [perspective:1600px] [scrollbar-width:none] max-lg:-mx-5 max-lg:px-5 lg:mt-6 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 lg:overflow-visible lg:pb-0 [&>*]:max-lg:w-[84vw] [&>*]:max-lg:shrink-0 md:[&>*]:max-lg:w-[46vw]"
        >
          <FeatureCard feature={f[0]} index={0} spotlight className="lg:col-span-2">
            <WhatsAppViz />
          </FeatureCard>
          <FeatureCard feature={f[1]} index={1} fit={150}>
            <VoiceViz />
          </FeatureCard>
          <FeatureCard feature={f[2]} index={2} fit={200}>
            <WebChatViz />
          </FeatureCard>
          <FeatureCard feature={f[3]} index={3} className="lg:col-span-2">
            <BuilderViz />
          </FeatureCard>
          <FeatureCard feature={f[4]} index={4} fit={150}>
            <CrmViz />
          </FeatureCard>
          <FeatureCard feature={f[5]} index={5} fit={150}>
            <SecureViz />
          </FeatureCard>
        </div>
        <p className="mt-2 text-center font-mono text-[10px] tracking-[0.3em] text-dim lg:hidden">SWIPE →</p>
      </div>
    </section>
  );
}
