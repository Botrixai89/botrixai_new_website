const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+/<>";

/** Decrypt-style text reveal: characters resolve left → right out of noise. */
export function scrambleTo(el: HTMLElement, text: string, duration = 1.2) {
  const start = performance.now();
  const total = duration * 1000;
  let raf = 0;

  const frame = (now: number) => {
    const t = Math.min(1, (now - start) / total);
    const revealed = Math.floor(t * text.length);
    let out = "";
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (i < revealed || ch === " " || ch === "·") out += ch;
      else out += CHARS[(Math.random() * CHARS.length) | 0];
    }
    el.textContent = out;
    if (t < 1) raf = requestAnimationFrame(frame);
  };

  raf = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(raf);
}
