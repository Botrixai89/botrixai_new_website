"use client";

import { useRef } from "react";
import { TangleStrings } from "../ui/TangleStrings";

/** Giant BotrixAI wordmark over drifting strings; a mint fill follows the cursor. */
export function Wordmark() {
  const mark = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const r = mark.current!.getBoundingClientRect();
    mark.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
    mark.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      onPointerMove={onMove}
      className="relative select-none overflow-hidden bg-ink pb-[clamp(1.25rem,4vh,2.5rem)] pt-[clamp(3rem,10vh,6rem)]"
      aria-hidden
    >
      <TangleStrings className="pointer-events-none absolute inset-0 h-full w-full" />
      <div ref={mark} className="relative [--mx:-999px] [--my:-999px]">
        <div className="whitespace-nowrap text-center text-[min(17vw,20vh)] font-semibold leading-[1] tracking-[-0.035em] text-bone">
          Botrix<span className="text-signal">AI</span>
        </div>
        <div
          className="absolute inset-0 whitespace-nowrap text-center text-[min(17vw,20vh)] font-semibold leading-[1] tracking-[-0.035em] text-[#9dffc6]"
          style={{
            maskImage: "radial-gradient(260px circle at var(--mx) var(--my), #000 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(260px circle at var(--mx) var(--my), #000 0%, transparent 70%)",
          }}
        >
          BotrixAI
        </div>
      </div>
    </div>
  );
}
