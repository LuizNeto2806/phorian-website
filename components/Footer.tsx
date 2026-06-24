"use client";

import { siteConfig } from "@/lib/content";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer
      id="footer"
      className="border-t border-border px-5 py-7 text-center sm:px-6 sm:py-8 md:px-12 lg:px-20"
    >
      <p className="mobile-copy text-xs text-muted">
        © {siteConfig.year} {siteConfig.name}. {t.footer.rights}
      </p>
    </footer>
  );
}
