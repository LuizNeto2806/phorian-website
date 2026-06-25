"use client";

import { siteConfig, socialLinks } from "@/lib/content";
import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "./Button";
import { PlatformIcon } from "./PlatformIcon";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="snap-section">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center md:items-start md:text-left">
        <ScrollReveal>
          <p className="section-label mb-5 sm:mb-6">{t.contact.label}</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-[1.75rem] font-light sm:text-3xl md:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mobile-copy mt-5 font-light text-muted sm:mt-6">
            {t.contact.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-7 flex justify-center sm:mt-8 md:justify-start">
            <Button
              href={`mailto:${siteConfig.email}`}
              className="max-w-full break-all px-4 normal-case tracking-normal sm:px-8"
            >
              {siteConfig.email}
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:mt-12 md:justify-start md:gap-x-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="opacity-75 transition-opacity duration-500 ease-out hover:opacity-100"
              >
                <PlatformIcon
                  name={link.name}
                  className="h-4 w-4 text-foreground sm:h-[1.125rem] sm:w-[1.125rem]"
                />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
