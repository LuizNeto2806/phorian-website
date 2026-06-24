type SymbolLogoProps = {
  className?: string;
  alt?: string;
};

export function SymbolLogo({
  className = "h-auto w-full max-w-[min(280px,55vw)]",
  alt = "PHORIAN",
}: SymbolLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/phorian-symbol.svg"
      alt={alt}
      className={`invert ${className}`}
    />
  );
}
