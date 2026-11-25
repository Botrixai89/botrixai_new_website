// Shared, mutable (non-React) state read inside animation loops.
// Mutating plain objects avoids re-rendering React on every frame.

export const scrollState = {
  /** Raw scroll progress through the hero, 0 → 1 (set by ScrollTrigger). */
  target: 0,
  /** Damped progress used by the 3D scene. */
  current: 0,
};

export const mouseState = {
  /** Normalised pointer, -1 → 1 on both axes (y up). */
  x: 0,
  y: 0,
  /** Pixel position. */
  px: 0,
  py: 0,
};

/** Responsive layout factors, updated by the camera rig from the canvas size. */
export const viewState = {
  /** Multiplier for horizontal offsets (1 on desktop, smaller on portrait). */
  xs: 1,
  /** Vertical lift so objects sit above bottom-aligned copy on phones. */
  lift: 0,
};

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** Smoothstep between edges a and b. */
export const ramp = (a: number, b: number, v: number) => {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const BRAND = {
  ink: "#090909",
  bone: "#f2f5f1",
  signal: "#2bee7c",
} as const;
