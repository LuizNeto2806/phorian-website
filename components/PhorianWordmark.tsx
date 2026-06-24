type PhorianWordmarkProps = {
  className?: string;
  alt?: string;
};

export function PhorianWordmark({
  className = "h-10 w-auto md:h-12",
  alt = "PHORIAN",
}: PhorianWordmarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/phorian-wordmark.svg"
      alt={alt}
      className={`invert ${className}`}
    />
  );
}
