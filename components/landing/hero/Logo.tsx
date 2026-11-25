import Image from "next/image";
import logo from "@/components/landing/assets/logo.png";

type LogoProps = {
  className?: string;
  /** Adds a hook (data-logo) for the intro animation. */
  animated?: boolean;
  /** Eager-load (use for above-the-fold placements). */
  priority?: boolean;
};

/** Botrix mark — brand logo from src/assets/logo.png. */
export function LogoMark({ className, animated, priority }: LogoProps) {
  return (
    <Image
      src={logo}
      alt=""
      aria-hidden="true"
      priority={priority}
      draggable={false}
      className={`select-none object-contain ${className ?? ""}`}
      {...(animated ? { "data-logo": "" } : {})}
    />
  );
}
