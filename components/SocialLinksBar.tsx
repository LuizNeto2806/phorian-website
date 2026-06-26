import { headerSocialLinks } from "@/lib/content";
import { PlatformIcon } from "./PlatformIcon";

type SocialLinksBarProps = {
  className?: string;
};

export function SocialLinksBar({ className = "" }: SocialLinksBarProps) {
  return (
    <nav
      aria-label="Social media"
      className={`absolute top-4 left-4 z-40 flex h-11 max-w-[calc(100%-5rem)] flex-nowrap items-center gap-2.5 md:top-8 md:left-8 md:h-auto md:max-w-none md:gap-5 max-md:max-w-[calc(100%-5.5rem)] max-md:gap-0.5 ${className}`}
    >
      {headerSocialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="inline-flex shrink-0 items-center justify-center text-white opacity-80 transition-opacity duration-300 ease-out hover:opacity-100 max-md:min-h-11 max-md:min-w-5 md:min-h-11 md:min-w-11 md:p-0"
        >
          <PlatformIcon
            name={link.name}
            className="h-3 w-3 text-white max-md:h-3 max-md:w-3 md:h-[1.125rem] md:w-[1.125rem]"
          />
        </a>
      ))}
    </nav>
  );
}
