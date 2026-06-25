"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { HeroLogo } from "./HeroLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SnapScrollLink, snapScrollTo } from "./SnapScrollLink";
import { SocialLinksBar } from "./SocialLinksBar";

const heroButtonClass =
  "inline-flex h-12 w-[12.5rem] shrink-0 items-center justify-center border border-white/45 text-[11px] font-normal tracking-[3px] text-foreground uppercase transition-opacity duration-300 ease-out hover:opacity-60 md:h-auto md:min-h-11 md:w-auto md:min-w-[12.5rem] md:max-w-none md:px-10 md:py-3.5 md:text-[0.6875rem] md:tracking-[0.28em]";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative flex h-svh snap-start snap-always flex-col items-center justify-center px-5 pb-16 pt-14 md:px-6 md:pb-0 md:pt-0"
    >
      <SocialLinksBar className="hero-fade" />

      <div className="hero-fade absolute top-4 right-4 flex h-11 items-center md:top-8 md:right-8 md:h-auto">
        <LanguageSwitcher />
      </div>

      <div className="hero-fade flex w-full max-w-lg -translate-y-3 flex-col items-center md:-translate-y-4">
        <HeroLogo className="block h-auto w-[min(300px,78vw)] max-w-full invert md:w-[min(364px,85vw)]" />

        <div className="mt-10 flex w-full justify-center md:mt-20">
          <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-center md:gap-6">
            <SnapScrollLink href="#music" className={heroButtonClass}>
              {t.hero.music}
            </SnapScrollLink>
            <SnapScrollLink href="#services" className={heroButtonClass}>
              {t.hero.services}
            </SnapScrollLink>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t.hero.scroll}
        onClick={(event) => {
          event.preventDefault();
          snapScrollTo("about");
        }}
        className="hero-fade group absolute bottom-5 left-1/2 flex min-h-11 min-w-11 -translate-x-1/2 items-end justify-center p-3 md:bottom-8"
      >
        <span className="relative block h-12 w-px overflow-hidden bg-muted/15 transition-colors duration-300 ease-out group-hover:bg-muted/30">
          <span className="section-scroll-travel absolute top-0 left-0 block h-4 w-px bg-muted/70" />
        </span>
      </a>
    </section>
  );
}
