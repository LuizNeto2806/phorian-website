"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type SnapScrollLinkProps = ComponentProps<typeof Link>;

export function snapScrollTo(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
}

export function SnapScrollLink({
  href,
  onClick,
  ...props
}: SnapScrollLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (typeof href !== "string" || !href.startsWith("#")) return;

    event.preventDefault();
    snapScrollTo(href.slice(1));
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
