"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "./Button";
import { PhorianWordmark } from "./PhorianWordmark";
import { ScrollIndicator } from "./ScrollIndicator";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="snap-section">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center md:items-start md:text-left">
        <ScrollReveal>
          <p className="section-label mb-5 sm:mb-6">{t.about.label}</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="text-[1.75rem] font-light leading-none sm:text-3xl md:text-4xl lg:text-5xl">
            <PhorianWordmark
              alt={t.about.title}
              className="mx-auto block h-[1.68em] w-auto max-w-full md:mx-0"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mobile-copy mt-8 space-y-6 text-base font-normal text-muted sm:mt-10 sm:space-y-5 md:text-lg">
            {t.about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex justify-center sm:mt-12 md:justify-start">
            <Button href="/story">{t.about.cta}</Button>
          </div>
        </ScrollReveal>
      </div>

      <div className="flex shrink-0 justify-center pb-1 sm:pb-2">
        <ScrollIndicator href="#services" />
      </div>
    </section>
  );
}
