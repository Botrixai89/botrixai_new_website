"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { mouseState } from "./state";

/** Blueprint guides for the hero only: hairline crosshair + live coordinates. */
export function HeroCrosshair() {
  const wrap = useRef<HTMLDivElement>(null);
  const hLine = useRef<HTMLDivElement>(null);
  const vLine = useRef<HTMLDivElement>(null);
  const readout = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      wrap.current!.style.display = "none";
      return;
    }
    let shown = false;
    const tick = () => {
      const { px, py } = mouseState;
      if (!shown && (px || py)) {
        shown = true;
        gsap.to(wrap.current, { opacity: 1, duration: 0.6 });
      }
      hLine.current!.style.transform = `translateY(${py}px)`;
      vLine.current!.style.transform = `translateX(${px}px)`;
      readout.current!.style.transform = `translate(${px + 20}px, ${py + 22}px)`;
      readout.current!.textContent = `X ${String(Math.round(px)).padStart(4, "0")}  Y ${String(Math.round(py)).padStart(4, "0")}`;
    };
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  });

  return (
    <div ref={wrap} className="pointer-events-none absolute inset-0 z-30 overflow-hidden opacity-0" aria-hidden>
      <div ref={hLine} className="absolute left-0 top-0 h-px w-full bg-bone/[0.07]" />
      <div ref={vLine} className="absolute left-0 top-0 h-full w-px bg-bone/[0.07]" />
      <div ref={readout} className="absolute left-0 top-0 whitespace-pre font-mono text-[9px] tracking-widest text-bone/40" />
    </div>
  );
}
