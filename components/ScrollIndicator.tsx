"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { SnapScrollLink, snapScrollTo } from "./SnapScrollLink";

type ScrollIndicatorProps = {
  href: string;
  className?: string;
};

export function ScrollIndicator({ href, className = "" }: ScrollIndicatorProps) {
  const { t } = useI18n();
  const targetId = href.startsWith("#") ? href.slice(1) : href;

  return (
    <a
      href={href}
      aria-label={t.hero.scroll}
      onClick={(event) => {
        event.preventDefault();
        snapScrollTo(targetId);
      }}
      className={`group inline-flex min-h-11 min-w-11 items-end justify-center p-3 ${className}`}
    >
      <span className="relative block h-12 w-px overflow-hidden bg-muted/20 transition-colors duration-300 ease-out group-hover:bg-muted/40">
        <span className="section-scroll-travel absolute top-0 left-0 block h-4 w-px bg-muted" />
      </span>
    </a>
  );
}
