"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/** Magnetic hover (React Bits "Magnet" pattern): the child drifts toward the cursor. */
export function Magnet({
  children,
  strength = 0.35,
  padding = 40,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  padding?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current!;
    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const inside =
        e.clientX > r.left - padding &&
        e.clientX < r.right + padding &&
        e.clientY > r.top - padding &&
        e.clientY < r.bottom + padding;
      xTo(inside ? (e.clientX - cx) * strength : 0);
      yTo(inside ? (e.clientY - cy) * strength : 0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  });

  return (
    <div ref={ref} className={`inline-block will-change-transform ${className ?? ""}`}>
      {children}
    </div>
  );
}
