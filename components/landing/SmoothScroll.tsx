"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { mouseState } from "./hero/state";

gsap.registerPlugin(ScrollTrigger);

/** Shared Lenis instance so nav links can glide to anchors. */
export const scroller: { lenis: Lenis | null; velocity: number } = { lenis: null, velocity: 0 };

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (scroller.lenis) scroller.lenis.scrollTo(el, { duration: 1.8 });
  else el.scrollIntoView({ behavior: "smooth" });
}

/**
 * Global page plumbing: Lenis smooth scroll synced to GSAP, pointer tracking,
 * and `data-speed` parallax for any element on the page.
 */
export function SmoothScroll() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouseState.px = e.clientX;
      mouseState.py = e.clientY;
      mouseState.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseState.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
    scroller.lenis = lenis;
    lenis.on("scroll", (l: Lenis) => {
      scroller.velocity = l.velocity;
      ScrollTrigger.update();
    });
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // data-speed parallax: speed < 1 lags behind the scroll, > 1 rushes ahead
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "1");
        const dist = (1 - speed) * 220;
        gsap.fromTo(
          el,
          { y: -dist },
          {
            y: dist,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });

    // Fonts/3D can shift layout after mount — re-measure once settled.
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 1200);

    return () => {
      window.clearTimeout(refresh);
      window.removeEventListener("pointermove", onMove);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      scroller.lenis = null;
    };
  }, []);

  return null;
}
