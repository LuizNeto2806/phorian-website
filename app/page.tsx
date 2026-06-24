import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GhostProduction } from "@/components/GhostProduction";
import { Hero } from "@/components/Hero";
import { LogoMark } from "@/components/LogoMark";
import { Music } from "@/components/Music";

export default function Home() {
  return (
    <main className="snap-root">
      <Hero />
      <About />
      <GhostProduction />
      <Music />
      <Contact />
      <LogoMark />
      <Footer />
    </main>
  );
}
