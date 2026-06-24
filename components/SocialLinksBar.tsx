import { headerSocialLinks } from "@/lib/content";
import { PlatformIcon } from "./PlatformIcon";

type SocialLinksBarProps = {
  className?: string;
};

export function SocialLinksBar({ className = "" }: SocialLinksBarProps) {
  return (
    <nav
      aria-label="Social media"
      className={`absolute top-4 left-4 z-40 flex h-11 max-w-[calc(100%-5rem)] flex-nowrap items-center gap-2.5 md:top-8 md:left-8 md:h-auto md:max-w-none md:gap-5 ${className}`}
    >
      {headerSocialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="inline-flex h-full shrink-0 items-center justify-center px-0.5 text-foreground opacity-100 transition-opacity duration-300 ease-out hover:opacity-60 md:min-h-11 md:min-w-11 md:px-0"
        >
          <PlatformIcon
            name={link.name}
            className="h-3 w-3 text-foreground md:h-[1.125rem] md:w-[1.125rem]"
          />
        </a>
      ))}
    </nav>
  );
}
