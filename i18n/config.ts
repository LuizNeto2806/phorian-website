export const locales = ["en", "pt", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/**
 * Short labels shown in the language switcher (EN · PT · ES).
 * Adding a new language: create its JSON in ./locales, register it in
 * ./dictionaries.ts, then add its code + label here.
 */
export const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
};

export const STORAGE_KEY = "phorian-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
