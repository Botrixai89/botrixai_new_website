"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LogoMark } from "../../hero/Logo";
import { BrandIcon } from "../../ui/BrandIcon";
import { scrambleTo } from "../../hero/scramble";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Looping timeline that only runs while its card is on screen. */
function useLoop(scope: React.RefObject<HTMLElement | null>, build: (tl: gsap.core.Timeline) => void) {
  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, paused: true });
      build(tl);
      ScrollTrigger.create({
        trigger: scope.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: (s) => (s.isActive ? tl.play() : tl.pause()),
      });
    },
    { scope },
  );
}

function Typing() {
  return (
    <span className="inline-flex gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-[pulse-dot_1s_ease-in-out_infinite] rounded-full bg-bone/60"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------- 01 WhatsApp */
export function WhatsAppViz() {
  const ref = useRef<HTMLDivElement>(null);
  useLoop(ref, (tl) => {
    const q = gsap.utils.selector(ref);
    const steps = q("[data-step]");
    tl.set(steps, { autoAlpha: 0, y: 14, scale: 0.96 });
    steps.forEach((el, i) => {
      const typing = el.hasAttribute("data-typing");
      tl.to(el, { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(2)" }, i === 0 ? 0.4 : ">0.55");
      if (typing) tl.to(el, { autoAlpha: 0, height: 0, marginTop: 0, padding: 0, duration: 0.25 }, ">0.9");
    });
    tl.to(steps, { autoAlpha: 0, y: -10, duration: 0.5, stagger: 0.03 }, ">2.2");
    tl.set(q("[data-typing]"), { clearProps: "height,marginTop,padding" });
  });

  const me = "ml-auto rounded-2xl rounded-br-md bg-signal-deep px-3.5 py-2 text-[13px] text-bone";
  const bot = "mr-auto rounded-2xl rounded-bl-md bg-surface-2 px-3.5 py-2 text-[13px] text-bone/90";

  return (
    <div ref={ref} className="light-edge flex h-full min-h-[220px] flex-col lg:min-h-0 overflow-hidden rounded-[20px] bg-ink/85 backdrop-blur-md">
      <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-surface-2">
          <LogoMark className="h-5 w-5 text-bone" />
        </span>
        <div className="leading-tight">
          <div className="flex items-center gap-1.5 text-[13px] font-medium">
            Botrix Assistant
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-signal" fill="currentColor" aria-hidden>
              <path d="M12 2l2.4 2.1 3.2-.4.9 3.1 2.8 1.6-1.2 3 1.2 3-2.8 1.6-.9 3.1-3.2-.4L12 22l-2.4-2.1-3.2.4-.9-3.1-2.8-1.6 1.2-3-1.2-3 2.8-1.6.9-3.1 3.2.4z" />
              <path d="M8.5 12.5l2.2 2.2 4.8-4.8" stroke="#090909" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div className="text-[11px] text-signal">online</div>
        </div>
        <BrandIcon name="WhatsApp" className="ml-auto h-4 w-4 text-dim" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden p-4 [mask-image:linear-gradient(transparent,#000_22%)]">
        <div data-step className={me}>Hi! Where&apos;s my order #4821?</div>
        <div data-step data-typing className={`${bot} py-3`}>
          <Typing />
        </div>
        <div data-step className={bot}>It&apos;s out for delivery and arrives today by 6 PM.</div>
        <div data-step className="mr-auto flex flex-wrap gap-1.5">
          {["Track live", "Change address", "Talk to agent"].map((b) => (
            <span key={b} className="rounded-full border border-signal/40 px-3 py-1 text-[12px] text-signal">
              {b}
            </span>
          ))}
        </div>
        <div data-step className={me}>Track live</div>
        <div data-step className={bot}>
          Here&apos;s your live link → <span className="text-signal">botrix.link/t/4821</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- 02 Voice */
const LANGS = ["English", "हिन्दी", "Español", "العربية", "Français", "தமிழ்"];
const BARS = Array.from({ length: 28 }, (_, i) => ({
  d: 0.7 + ((i * 37) % 11) / 12,
  delay: ((i * 53) % 17) / 20,
}));

export function VoiceViz() {
  const [lang, setLang] = useState(0);
  const [secs, setSecs] = useState(42);
  useEffect(() => {
    const a = setInterval(() => setLang((l) => (l + 1) % LANGS.length), 1800);
    const b = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => (clearInterval(a), clearInterval(b));
  }, []);

  return (
    <div className="flex h-full min-h-[150px] flex-col items-center justify-center gap-[clamp(0.5rem,2vh,1.4rem)]">
      <div className="relative grid h-[clamp(3.5rem,9vh,5.5rem)] w-[clamp(3.5rem,9vh,5.5rem)] place-items-center">
        {[0, 0.8, 1.6].map((d) => (
          <span
            key={d}
            className="absolute inset-0 rounded-full border border-signal/50"
            style={{ animation: `ring-out 2.4s ${d}s cubic-bezier(.2,.6,.3,1) infinite` }}
          />
        ))}
        <span className="relative grid h-[72%] w-[72%] place-items-center rounded-full bg-signal text-ink shadow-[0_0_40px_rgb(43_238_124/0.45)]">
          <svg viewBox="0 0 24 24" className="h-[45%] w-[45%]" fill="currentColor" aria-hidden>
            <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" />
          </svg>
        </span>
      </div>
      <div className="flex h-8 items-center gap-[3px]" aria-hidden>
        {BARS.map((b, i) => (
          <span
            key={i}
            className="h-full w-[3px] origin-center rounded-full bg-bone/70"
            style={{ animation: `wave-bar ${b.d}s ${b.delay}s ease-in-out infinite` }}
          />
        ))}
      </div>
      <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest text-dim">
        <span className="tabular-nums">
          {String(Math.floor(secs / 60)).padStart(2, "0")}:{String(secs % 60).padStart(2, "0")}
        </span>
        <span className="h-3 w-px bg-hairline" />
        <span key={lang} className="animate-[pulse-dot_1.8s_ease-in-out] text-bone">
          {LANGS[lang]}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- 03 Web chat */
export function WebChatViz() {
  const ref = useRef<HTMLDivElement>(null);
  useLoop(ref, (tl) => {
    const q = gsap.utils.selector(ref);
    tl.set(q("[data-panel]"), { autoAlpha: 0, scale: 0.6, transformOrigin: "100% 100%" })
      .set(q("[data-msg]"), { autoAlpha: 0, y: 8 })
      .set(q("[data-toast]"), { autoAlpha: 0, y: -16 })
      .to(q("[data-launch]"), { scale: 1.15, duration: 0.3, yoyo: true, repeat: 1 }, 0.5)
      .to(q("[data-panel]"), { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)" }, 1.1)
      .to(q("[data-msg]"), { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.9 }, 1.6)
      .to(q("[data-panel]"), { autoAlpha: 0, scale: 0.9, duration: 0.35 }, ">1.2")
      .to(q("[data-toast]"), { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(2)" }, ">0.05")
      .to(q("[data-toast]"), { autoAlpha: 0, duration: 0.4 }, ">2.2");
  });

  return (
    <div ref={ref} className="relative h-full min-h-[200px] overflow-hidden rounded-[15px] border border-hairline bg-ink">
      <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-surface-2" />
        ))}
        <span className="ml-3 rounded-full bg-surface-1 px-3 py-0.5 font-mono text-[10px] text-dim">yourbrand.com</span>
      </div>
      <div className="space-y-2 p-4" aria-hidden>
        <div className="h-3 w-2/5 rounded bg-surface-2" />
        <div className="h-2 w-4/5 rounded bg-surface-1" />
        <div className="h-2 w-3/5 rounded bg-surface-1" />
        <div className="mt-4 h-14 w-1/2 rounded-lg bg-surface-1" />
      </div>
      <div data-toast className="absolute left-3 right-3 top-12 flex items-center gap-2 rounded-xl bg-bone px-3 py-2 text-[12px] text-ink">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-signal-deep text-[10px] text-bone">✓</span>
        <span className="font-medium">Lead captured</span>
        <span className="ml-auto truncate font-mono text-[10px] text-ink/60">priya@acme.co</span>
      </div>
      <div data-panel className="absolute bottom-14 right-3 flex max-h-[calc(100%-5.25rem)] w-[78%] flex-col justify-end gap-1.5 overflow-hidden rounded-xl border border-hairline bg-surface-1 p-2.5">
        <div data-msg className="mr-auto w-fit rounded-lg bg-surface-2 px-2.5 py-1.5 text-[11px]">Hi there! Looking for pricing?</div>
        <div data-msg className="ml-auto w-fit rounded-lg bg-signal-deep px-2.5 py-1.5 text-[11px]">Yes, for 5 agents</div>
        <div data-msg className="mr-auto w-fit rounded-lg bg-surface-2 px-2.5 py-1.5 text-[11px]">Great — what&apos;s your email?</div>
      </div>
      <span data-launch className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-signal text-ink">
        <LogoMark className="h-5 w-5 brightness-0" />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------- 04 Builder */
const NODE_W = 116;
const NODE_H = 48;
const INITIAL = [
  { x: 0.0, y: 0.4, tag: "Trigger", label: "New WhatsApp msg" },
  { x: 0.25, y: 0.4, tag: "AI", label: "Detect intent" },
  { x: 0.52, y: 0.05, tag: "Branch", label: "Book a demo" },
  { x: 0.52, y: 0.75, tag: "Branch", label: "Support query" },
  { x: 1, y: 0.4, tag: "Action", label: "Create CRM lead" },
];
/** Two-column zig-zag used when the card is phone-narrow. */
const NARROW_POS = [
  { x: 0, y: 0 },
  { x: 1, y: 0.22 },
  { x: 0, y: 0.55 },
  { x: 1, y: 0.75 },
  { x: 0.1, y: 1 },
];
const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
];

export function BuilderViz() {
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [nodes, setNodes] = useState(INITIAL);
  const drag = useRef<{ i: number; dx: number; dy: number } | null>(null);
  const NW = size.w < 520 ? 92 : NODE_W; // compact nodes on narrow cards

  useEffect(() => {
    let first = true;
    const ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width;
      if (first && w > 0 && w < 520) setNodes(INITIAL.map((n, i) => ({ ...n, ...NARROW_POS[i] })));
      first = false;
      setSize({ w, h: e.contentRect.height });
    });
    ro.observe(box.current!);
    return () => ro.disconnect();
  }, []);

  const px = (n: { x: number; y: number }) => ({
    x: n.x * Math.max(0, size.w - NW),
    y: n.y * Math.max(0, size.h - NODE_H),
  });

  const onDown = (i: number) => (e: React.PointerEvent) => {
    const p = px(nodes[i]);
    const r = box.current!.getBoundingClientRect();
    drag.current = { i, dx: e.clientX - r.left - p.x, dy: e.clientY - r.top - p.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const r = box.current!.getBoundingClientRect();
    const { i, dx, dy } = drag.current;
    const nx = (e.clientX - r.left - dx) / Math.max(1, size.w - NW);
    const ny = (e.clientY - r.top - dy) / Math.max(1, size.h - NODE_H);
    setNodes((ns) => ns.map((n, j) => (j === i ? { ...n, x: Math.min(1, Math.max(0, nx)), y: Math.min(1, Math.max(0, ny)) } : n)));
  };

  return (
    <div
      ref={box}
      className="relative h-full min-h-[170px] w-full touch-none select-none max-sm:min-h-[300px] lg:min-h-0"
      onPointerMove={onMove}
      onPointerUp={() => (drag.current = null)}
    >
      {size.w > 0 && (
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden>
          {EDGES.map(([a, b]) => {
            const pa = px(nodes[a]);
            const pb = px(nodes[b]);
            const x1 = pa.x + NW, y1 = pa.y + NODE_H / 2;
            const x2 = pb.x, y2 = pb.y + NODE_H / 2;
            const mx = (x1 + x2) / 2;
            const d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
            return (
              <g key={`${a}-${b}`}>
                <path d={d} fill="none" stroke="var(--hairline)" strokeWidth="1.5" />
                <path
                  d={d}
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth="1.5"
                  pathLength={1}
                  strokeDasharray="0.04 0.04"
                  style={{ animation: "dash-flow 2.5s linear infinite" }}
                  opacity={0.7}
                />
                <circle r="3.5" fill="var(--signal)">
                  <animateMotion dur="2.4s" repeatCount="indefinite" path={d} />
                </circle>
              </g>
            );
          })}
        </svg>
      )}
      {size.w > 0 &&
        nodes.map((n, i) => {
          const p = px(n);
          return (
            <div
              key={i}
              onPointerDown={onDown(i)}
              className="absolute flex cursor-grab flex-col justify-center rounded-xl border border-hairline bg-surface-2 px-3 shadow-[0_8px_24px_rgb(0_0_0/0.4)] transition-[border-color,box-shadow] hover:border-signal/60 hover:shadow-[0_0_0_4px_rgb(43_238_124/0.08)] active:cursor-grabbing"
              style={{ width: NW, height: NODE_H, transform: `translate(${p.x}px, ${p.y}px)` }}
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal">{n.tag}</span>
              <span className="truncate text-[12px] font-medium">{n.label}</span>
            </div>
          );
        })}
      <span className="pointer-events-none absolute -bottom-1 right-0 font-mono text-[10px] tracking-[0.25em] text-dim">
        ↖ DRAG THE NODES
      </span>
    </div>
  );
}

/* ------------------------------------------------------------- 05 CRM */
const RING_A = ["Salesforce", "HubSpot", "Zoho", "Shopify"];
const RING_B = ["Google Sheets", "Zendesk", "Notion", "Slack", "Stripe", "Mailchimp"];

/** Radius is a fraction of the box's smaller side (container-query `cqmin`), so it scales to any card. */
function Orbit({ items, radius, duration, reverse }: { items: string[]; radius: number; duration: number; reverse?: boolean }) {
  const spin = `${reverse ? "spin-rev" : "spin"} ${duration}s linear infinite`;
  const counter = `${reverse ? "spin" : "spin-rev"} ${duration}s linear infinite`;
  const r = `${radius}cqmin`;
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-hairline"
      style={{ width: `calc(${r} * 2)`, height: `calc(${r} * 2)`, translate: "-50% -50%", animation: spin }}
    >
      {items.map((name, i) => {
        const a = (i / items.length) * Math.PI * 2;
        return (
          <div
            key={name}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(${Math.cos(a).toFixed(4)} * ${r}), calc(${Math.sin(a).toFixed(4)} * ${r}))` }}
          >
            {/* `translate` (centering) composes with the counter-rotating `transform` animation */}
            <span
              title={name}
              className="grid h-[clamp(1.75rem,13cqmin,2.4rem)] w-[clamp(1.75rem,13cqmin,2.4rem)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-hairline bg-surface-2 text-bone/85"
              style={{ animation: counter }}
            >
              <BrandIcon name={name} className="h-[45%] w-[45%]" />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function CrmViz() {
  return (
    <div className="relative h-full min-h-[150px] w-full overflow-hidden [container-type:size] max-sm:min-h-[240px]" aria-hidden>
      <Orbit items={RING_A} radius={24} duration={28} />
      <Orbit items={RING_B} radius={42} duration={46} reverse />
      <div className="absolute left-1/2 top-1/2 grid h-[22cqmin] w-[22cqmin] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[28%] bg-bone text-ink shadow-[0_0_50px_rgb(43_238_124/0.35)]">
        <LogoMark className="h-[60%] w-[60%]" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- 06 Secure */
export function SecureViz() {
  const out = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const plain = "Your OTP is 482190";
    const cipher = "9f3a·e1c0·77b2·d48e";
    let enc = false;
    const id = setInterval(() => {
      enc = !enc;
      if (out.current) scrambleTo(out.current, enc ? cipher : plain, 0.9);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-full min-h-[150px] items-center gap-4">
      <div className="relative aspect-[4/5] h-full max-h-[150px] shrink-0">
        <svg viewBox="0 0 160 200" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="shieldStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--signal)" />
              <stop offset="1" stopColor="var(--signal)" stopOpacity="0.1" />
            </linearGradient>
            <clipPath id="shieldClip">
              <path d="M80 8 148 34v58c0 46-30 82-68 100C42 174 12 138 12 92V34z" />
            </clipPath>
          </defs>
          <path d="M80 8 148 34v58c0 46-30 82-68 100C42 174 12 138 12 92V34z" fill="rgb(43 238 124 / 0.04)" stroke="url(#shieldStroke)" strokeWidth="1.5" />
          <g clipPath="url(#shieldClip)">
            {Array.from({ length: 9 }, (_, i) => (
              <line key={i} x1="0" x2="160" y1={20 + i * 20} y2={20 + i * 20} stroke="var(--hairline)" strokeWidth="1" />
            ))}
          </g>
          <rect x="60" y="88" width="40" height="32" rx="6" fill="var(--bone)" />
          <path d="M68 88v-10a12 12 0 0124 0v10" fill="none" stroke="var(--bone)" strokeWidth="5" />
          <circle cx="80" cy="102" r="4" fill="#090909" />
        </svg>
        <div className="absolute inset-x-4 top-2 bottom-6 overflow-hidden [clip-path:polygon(50%_0,100%_13%,100%_46%,50%_100%,0_46%,0_13%)]">
          <div className="h-10 w-full animate-[scan_2.8s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-signal/40 to-transparent" />
        </div>
      </div>
      <div className="min-w-0 flex-1 space-y-2.5">
        <div className="truncate font-mono text-[9px] tracking-[0.25em] text-dim">AES-256 · PAYLOAD</div>
        <div className="truncate rounded-xl border border-hairline bg-ink px-3 py-2.5 font-mono text-[11px] text-signal">
          <span ref={out}>Your OTP is 482190</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["SOC 2", "GDPR", "E2E"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-2 py-1 text-[10.5px]">
              <span className="text-signal">✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
