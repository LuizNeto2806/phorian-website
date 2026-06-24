"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "./Button";
import { SymbolLogo } from "./SymbolLogo";

export function LogoMark() {
  const { t } = useI18n();

  return (
    <section
      id="mark"
      aria-label="PHORIAN"
      className="relative flex h-svh snap-start snap-always flex-col items-center justify-center px-5 sm:px-6"
    >
      <SymbolLogo className="mx-auto h-auto w-full max-w-[min(220px,58vw)] sm:max-w-[min(280px,55vw)]" />

      <div className="mt-10 flex justify-center sm:mt-12">
        <Button href="#hero">{t.story.home}</Button>
      </div>
    </section>
  );
}
