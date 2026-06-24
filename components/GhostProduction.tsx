"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "./Button";
import { ScrollIndicator } from "./ScrollIndicator";
import { ScrollReveal } from "./ScrollReveal";

export function GhostProduction() {
  const { t } = useI18n();

  return (
    <section id="services" className="snap-section">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center md:items-start md:text-left">
        <ScrollReveal>
          <p className="section-label mb-5 sm:mb-6">{t.services.label}</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-balance text-[1.75rem] font-light sm:text-3xl md:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mobile-copy mt-5 max-w-2xl space-y-5 font-light text-muted sm:mt-6 sm:space-y-4 md:mx-0">
            {t.services.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-8 flex justify-center sm:mt-10 md:justify-start">
            <Button href="#contact">{t.services.cta}</Button>
          </div>
        </ScrollReveal>
      </div>

      <div className="flex shrink-0 justify-center pb-1 sm:pb-2">
        <ScrollIndicator href="#music" />
      </div>
    </section>
  );
}
