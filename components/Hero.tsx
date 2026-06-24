"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { HeroLogo } from "./HeroLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SnapScrollLink, snapScrollTo } from "./SnapScrollLink";
import { SocialLinksBar } from "./SocialLinksBar";

const heroButtonClass =
  "inline-flex min-h-11 w-full max-w-[16rem] items-center justify-center border border-foreground/25 px-8 py-3.5 text-[0.6875rem] font-semibold tracking-[0.28em] text-foreground uppercase opacity-100 transition-opacity duration-300 ease-out hover:opacity-60 sm:w-auto sm:min-w-[12.5rem] sm:max-w-none sm:px-10";

export function Hero() {
  const { t } = useI18n();

  return (
    <>
      <style>{`
        @keyframes hero-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .hero-fade {
          opacity: 0;
          animation: hero-fade-in 1.32s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-fade {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>

      <section
        id="hero"
        className="relative flex h-svh snap-start snap-always flex-col items-center justify-center px-5 pb-16 pt-14 sm:px-6 sm:pb-0 sm:pt-0"
      >
        <SocialLinksBar className="hero-fade" />

        <div className="hero-fade absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8">
          <LanguageSwitcher />
        </div>

        <div className="flex w-full max-w-lg flex-col items-center text-center">
          <div className="hero-fade w-[min(300px,78vw)] sm:w-[min(364px,85vw)]">
            <HeroLogo />
          </div>

          <div className="hero-fade mt-10 flex w-full justify-center sm:mt-14 md:mt-20">
            <div className="flex w-full max-w-[16rem] flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-6">
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
          className="hero-fade group absolute bottom-5 left-1/2 flex min-h-11 min-w-11 -translate-x-1/2 items-end justify-center p-3 sm:bottom-8"
        >
          <span className="relative block h-12 w-px overflow-hidden bg-muted/20 transition-colors duration-300 ease-out group-hover:bg-muted/40">
            <span className="section-scroll-travel absolute top-0 left-0 block h-4 w-px bg-muted" />
          </span>
        </a>
      </section>
    </>
  );
}
