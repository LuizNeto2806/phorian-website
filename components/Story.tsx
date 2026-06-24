"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Story() {
  const { t } = useI18n();

  return (
    <main className="relative min-h-screen">
      <div className="section-padding pt-16 sm:pt-24">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-10 flex flex-col items-start gap-4 sm:mb-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <Button href="/">{t.story.home}</Button>
            <LanguageSwitcher />
          </div>

          <h1 className="text-balance text-center text-[1.75rem] font-light sm:text-3xl md:text-left md:text-4xl lg:text-5xl">
            {t.story.title}
          </h1>

          <div className="mobile-copy mt-8 space-y-6 text-center text-base font-normal text-muted sm:mt-10 sm:space-y-5 md:text-left md:text-lg">
            {t.story.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 flex justify-center sm:mt-16">
            <Button href="/">{t.story.home}</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
