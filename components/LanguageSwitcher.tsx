"use client";

import { Fragment } from "react";
import { localeLabels, locales } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <nav
      aria-label="Language"
      className="flex items-center gap-1.5 text-[0.6875rem] tracking-[0.28em] uppercase sm:gap-2"
    >
      {locales.map((code, index) => (
        <Fragment key={code}>
          {index > 0 && (
            <span aria-hidden="true" className="text-muted/50">
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(code)}
            aria-current={locale === code ? "true" : undefined}
            className={`inline-flex min-h-11 min-w-9 items-center justify-center px-1 opacity-100 transition-opacity duration-300 ease-out hover:opacity-60 sm:min-w-0 ${
              locale === code ? "text-foreground" : "text-muted"
            }`}
          >
            {localeLabels[code]}
          </button>
        </Fragment>
      ))}
    </nav>
  );
}
