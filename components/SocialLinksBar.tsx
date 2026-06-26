import { headerSocialLinks } from "@/lib/content";
import { PlatformIcon } from "./PlatformIcon";

type SocialLinksBarProps = {
  className?: string;
};

export function SocialLinksBar({ className = "" }: SocialLinksBarProps) {
  return (
    <nav
      aria-label="Social media"
      className={`flex min-w-0 items-center gap-3 md:gap-2.5 ${className}`}
    >
      {headerSocialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center p-2.5 text-white opacity-80 transition-opacity duration-300 ease-out hover:opacity-100 md:h-auto md:min-h-11 md:min-w-11 md:p-0"
        >
          <PlatformIcon
            name={link.name}
            className="h-3.5 w-3.5 text-white md:h-[0.6875rem] md:w-[0.6875rem]"
          />
        </a>
      ))}
    </nav>
  );
}
