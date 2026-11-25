"use client";

import { useEffect, useRef } from "react";

/** Muted theme strands: greens and greys, kept faint so they sit behind type. */
const STRANDS = [
  { color: [43, 238, 124], alpha: 0.32, width: 1 },
  { color: [140, 150, 145], alpha: 0.3, width: 1 },
  { color: [4, 146, 63], alpha: 0.45, width: 1.25 },
  { color: [90, 100, 96], alpha: 0.35, width: 1 },
  { color: [43, 238, 124], alpha: 0.2, width: 1 },
  { color: [180, 190, 184], alpha: 0.18, width: 1 },
  { color: [20, 160, 110], alpha: 0.3, width: 1 },
  { color: [110, 120, 115], alpha: 0.25, width: 1 },
  { color: [4, 146, 63], alpha: 0.3, width: 1 },
  { color: [43, 238, 124], alpha: 0.16, width: 1 },
] as const;

/**
 * Thin strings loosely wound around each other like an unravelled rope,
 * twisting slowly along its length. Strands near the cursor brighten.
 * Pauses whenever it is off-screen.
 */
export function TangleStrings({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const host = canvas.parentElement!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const target = { x: -9999, y: -9999, on: 0 };
    const mouse = { x: -9999, y: -9999, on: 0 };
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      if (mouse.x < -999) {
        mouse.x = target.x;
        mouse.y = target.y;
      }
      target.on = 1;
    };
    const onLeave = () => (target.on = 0);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    // Rope: every strand winds around one shared, gently waving centre line.
    // Each strand has its own orbit radius, twist rate and phase, so they wrap
    // around each other loosely instead of lying in a tight braid.
    const N = STRANDS.length;
    const recipes = STRANDS.map((_, i) => ({
      phase: (i / N) * Math.PI * 2 + ((i * 0.37) % 1),
      radius: 0.16 + ((i * 0.53) % 1) * 0.2, // fraction of h
      breathe: 0.25 + ((i * 0.29) % 1) * 0.3,
      twist: 0.85 + ((i * 0.41) % 1) * 0.3, // relative twist rate
      drift: 0.5 + ((i * 0.71) % 1) * 0.5,
    }));

    const STEP = 8;
    let raf = 0;
    let t = 0;
    let last = performance.now();

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!visible) return;
      if (!reduced) t += dt;

      mouse.x += (target.x - mouse.x) * 0.1;
      mouse.y += (target.y - mouse.y) * 0.1;
      mouse.on += (target.on - mouse.on) * 0.06;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const glowR = Math.max(180, w * 0.14);

      STRANDS.forEach((s, i) => {
        const r = recipes[i];
        const [cr, cg, cb] = s.color;
        ctx.lineWidth = s.width;

        // base pass: the whole strand at its resting opacity
        const ys: number[] = [];
        const freq = (Math.PI * 2) / Math.max(520, w * 0.5); // ~2 loose twists across the width
        ctx.beginPath();
        for (let x = 0, n = 0; x <= w + STEP; x += STEP, n++) {
          // the rope's spine drifts slowly up and down
          const spine = h * (0.5 + 0.1 * Math.sin(x * 0.0018 + t * 0.25) + 0.05 * Math.sin(x * 0.0047 - t * 0.4));
          const theta = x * freq * r.twist - t * 0.45 * r.drift + r.phase;
          const rad = h * r.radius * (1 - r.breathe + r.breathe * (0.5 + 0.5 * Math.sin(x * 0.003 + t * 0.3 + r.phase)));
          const y = spine + Math.sin(theta) * rad;
          ys[n] = y;
          if (n === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${cr},${cg},${cb},${s.alpha})`;
        ctx.stroke();

        // highlight pass: only the stretch near the cursor, brighter
        if (mouse.on > 0.02) {
          const x0 = Math.max(0, mouse.x - glowR);
          const x1 = Math.min(w, mouse.x + glowR);
          if (x1 > x0) {
            const g = ctx.createLinearGradient(mouse.x - glowR, 0, mouse.x + glowR, 0);
            g.addColorStop(0, `rgba(${cr},${cg},${cb},0)`);
            g.addColorStop(0.5, `rgba(${cr},${cg},${cb},${Math.min(1, 0.9 * mouse.on)})`);
            g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
            ctx.beginPath();
            const k0 = Math.floor(x0 / STEP);
            const k1 = Math.ceil(x1 / STEP);
            let near = false;
            for (let k = k0; k <= k1 && k < ys.length; k++) {
              if (Math.abs(ys[k] - mouse.y) < glowR * 0.6) near = true;
              if (k === k0) ctx.moveTo(k * STEP, ys[k]);
              else ctx.lineTo(k * STEP, ys[k]);
            }
            if (near) {
              ctx.strokeStyle = g;
              ctx.stroke();
            }
          }
        }
      });
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
