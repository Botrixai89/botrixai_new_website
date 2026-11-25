import Header from "@/components/header";
import Footer from "@/components/footer";
import { Hero } from "./hero/Hero";
import { SmoothScroll } from "./SmoothScroll";
import { WhyChoose } from "./sections/why/WhyChoose";
import { Clients } from "./sections/Clients";
import { Integrations } from "./sections/Integrations";
import { Technology } from "./sections/tech/Technology";
import { Contact } from "./sections/Contact";
import "./landing.css";

/**
 * The BotrixAI home landing page (ported from the botrixlanding project).
 * Fonts (Inter Tight / JetBrains Mono) come from the root layout. The site-wide
 * Header and Footer (which carries the BotrixAI wordmark) wrap the landing.
 */
export default function LandingPage() {
  return (
    <>
      {/* See-through header over the hero, solid once scrolled */}
      <Header transparentOnTop />
      <div className="botrix-landing antialiased">
        <main className="relative overflow-x-clip">
          <SmoothScroll />
          <Hero />
          <WhyChoose />
          <Clients />
          <Integrations />
          <Technology />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
