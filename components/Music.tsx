"use client";

import { streamingPlatforms } from "@/lib/content";
import { useI18n } from "@/i18n/I18nProvider";
import { PlatformIcon } from "./PlatformIcon";
import { ScrollIndicator } from "./ScrollIndicator";
import { ScrollReveal } from "./ScrollReveal";

export function Music() {
  const { t } = useI18n();

  return (
    <section id="music" className="snap-section">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center md:items-start md:text-left">
        <ScrollReveal>
          <p className="section-label mb-5 w-full sm:mb-6">{t.music.label}</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="w-full text-[1.75rem] font-light sm:text-3xl md:text-4xl lg:text-5xl">
            {t.music.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:mt-12 md:mt-14 md:justify-start md:gap-x-10 lg:gap-x-14">
            {streamingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.name}
                className="opacity-75 transition-opacity duration-500 ease-out hover:opacity-100"
              >
                <PlatformIcon
                  name={platform.name}
                  className="h-4 w-4 text-foreground sm:h-[1.125rem] sm:w-[1.125rem]"
                />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="flex shrink-0 justify-center pb-1 sm:pb-2">
        <ScrollIndicator href="#contact" />
      </div>
    </section>
  );
}
