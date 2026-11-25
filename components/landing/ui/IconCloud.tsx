"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BrandIcon, hasBrandIcon } from "./BrandIcon";

export type CloudItem = { name: string; group: string };

/**
 * IconCloud (after Magic UI's IconCloud): brand tiles on a Fibonacci sphere,
 * auto-rotating, steered by the cursor and draggable. Tiles outside the
 * highlighted group fade back.
 */
export function IconCloud({ items, highlight }: { items: CloudItem[]; highlight: string | null }) {
  const box = useRef<HTMLDivElement>(null);
  const tiles = useRef<(HTMLDivElement | null)[]>([]);
  const hl = useRef(highlight);

  useEffect(() => {
    hl.current = highlight;
  }, [highlight]);

  useGSAP(() => {
    const el = box.current!;
    const n = items.length;
    // even distribution on a unit sphere
    const pts = items.map((_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * Math.PI * (3 - Math.sqrt(5));
      return { x: Math.cos(phi) * r, y, z: Math.sin(phi) * r };
    });

    let rx = 0.3;
    let ry = 0;
    let vx = 0.0015;
    let vy = 0.004;
    let hover = { x: 0, y: 0, on: false };
    let drag: { x: number; y: number } | null = null;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      hover = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5, on: true };
      if (drag) {
        vy = (e.clientX - drag.x) * 0.0009;
        vx = (e.clientY - drag.y) * 0.0009;
        drag = { x: e.clientX, y: e.clientY };
      }
    };
    const onLeave = () => (hover.on = false);
    const onDown = (e: PointerEvent) => {
      drag = { x: e.clientX, y: e.clientY };
      el.setPointerCapture(e.pointerId);
    };
    const onUp = () => (drag = null);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointerup", onUp);

    const tick = () => {
      if (!drag) {
        // steer toward the cursor, otherwise drift
        const tvx = hover.on ? hover.y * 0.02 : 0.0015;
        const tvy = hover.on ? hover.x * 0.025 : 0.004;
        vx += (tvx - vx) * 0.05;
        vy += (tvy - vy) * 0.05;
      }
      rx += vx;
      ry += vy;
      const R = el.clientWidth * 0.38;
      const cx = Math.cos(rx), sx = Math.sin(rx), cy = Math.cos(ry), sy = Math.sin(ry);
      pts.forEach((p, i) => {
        const t = tiles.current[i];
        if (!t) return;
        // rotate around Y then X
        const x1 = p.x * cy + p.z * sy;
        const z1 = -p.x * sy + p.z * cy;
        const y2 = p.y * cx - z1 * sx;
        const z2 = p.y * sx + z1 * cx;
        const depth = (z2 + 1) / 2; // 0 back → 1 front
        const lit = !hl.current || items[i].group === hl.current;
        const scale = 0.55 + depth * 0.6;
        t.style.transform = `translate(-50%,-50%) translate3d(${x1 * R}px, ${y2 * R}px, 0) scale(${scale})`;
        t.style.opacity = String((0.18 + depth * 0.82) * (lit ? 1 : 0.22));
        t.style.zIndex = String(Math.round(depth * 100));
        t.dataset.lit = String(lit && !!hl.current);
      });
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointerup", onUp);
    };
  });

  return (
    <div
      ref={box}
      className="relative aspect-square w-full touch-none select-none active:cursor-grabbing"
      role="img"
      aria-label={`Integrations: ${items.map((i) => i.name).join(", ")}`}
    >
      {/* orbit guides */}
      <div aria-hidden className="pointer-events-none absolute inset-[12%] rounded-full border border-hairline" />
      <div aria-hidden className="pointer-events-none absolute inset-[30%] rounded-full border border-dashed border-hairline" />
      <div aria-hidden className="pointer-events-none absolute inset-[20%] rounded-full bg-signal/[0.07] blur-3xl" />

      {items.map((it, i) => (
        <div
          key={it.name}
          ref={(el) => {
            tiles.current[i] = el;
          }}
          data-lit="false"
          title={it.name}
          className="group absolute left-1/2 top-1/2 will-change-transform"
        >
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-hairline bg-surface-2 text-bone shadow-[0_10px_30px_rgb(0_0_0/0.45)] transition-[border-color,box-shadow,background-color] duration-300 group-hover:border-bone/40 group-data-[lit=true]:border-signal/70 group-data-[lit=true]:bg-[#0f2418] group-data-[lit=true]:shadow-[0_0_30px_rgb(43_238_124/0.35)] md:h-16 md:w-16">
            {hasBrandIcon(it.name) ? (
              <BrandIcon name={it.name} className="h-6 w-6 md:h-7 md:w-7" />
            ) : (
              <span className="text-[15px] font-semibold tracking-[-0.04em]">
                {it.name
                  .split(/(?=[A-Z])| /)
                  .filter(Boolean)
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            )}
          </div>
          <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-bone px-2.5 py-1 text-[11px] font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100">
            {it.name}
          </span>
        </div>
      ))}
    </div>
  );
}
