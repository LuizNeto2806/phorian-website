import Link from "next/link";
import type { ReactNode } from "react";
import { SnapScrollLink } from "./SnapScrollLink";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex min-h-11 items-center justify-center border border-foreground/25 px-6 py-3.5 text-xs font-semibold tracking-[0.25em] text-foreground uppercase opacity-100 transition-opacity duration-300 ease-out hover:opacity-60 sm:px-8 sm:py-3";

export function Button({
  href,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${base} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <SnapScrollLink href={href} className={classes}>
        {children}
      </SnapScrollLink>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
