"use client";

import { Fragment } from "react";
import { localeLabels, locales } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <nav
      aria-label="Language"
      className="flex shrink-0 items-center gap-3 text-sm font-normal tracking-[0.28em] text-white uppercase md:gap-2 md:text-[0.6875rem]"
    >
      {locales.map((code, index) => (
        <Fragment key={code}>
          {index > 0 && (
            <span aria-hidden="true" className="px-0.5 text-white/50 md:px-0">
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(code)}
            aria-current={locale === code ? "true" : undefined}
            className={`inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center p-2.5 transition-opacity duration-300 ease-out hover:opacity-100 md:h-auto md:min-h-11 md:min-w-11 md:p-0 ${
              locale === code ? "opacity-100" : "opacity-70"
            }`}
          >
            {localeLabels[code]}
          </button>
        </Fragment>
      ))}
    </nav>
  );
}
