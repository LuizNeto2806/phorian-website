"use client";

import { siteConfig, socialLinks } from "@/lib/content";
import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "./Button";
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
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-6 sm:mt-12 sm:gap-8 md:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-11 flex-col items-center justify-center gap-1 underline-offset-[0.3em] decoration-transparent transition-all duration-300 ease-out hover:opacity-60 hover:underline hover:decoration-foreground/35 md:items-start"
              >
                <span className="text-xs tracking-[0.2em] uppercase text-muted">
                  {link.name}
                </span>
                <span className="text-sm font-light text-foreground">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
