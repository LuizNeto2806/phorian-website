import type { Locale } from "./config";
import en from "./locales/en.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";

/**
 * The English dictionary is the source of truth for the shape.
 * Every other locale must satisfy the same structure.
 */
export type Dictionary = typeof en;

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  pt,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
