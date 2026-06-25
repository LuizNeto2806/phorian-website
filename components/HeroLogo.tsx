type HeroLogoProps = {
  className?: string;
};

export function HeroLogo({
  className = "block h-auto w-full invert",
}: HeroLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/phorian-logo.svg"
      alt="PHORIAN"
      width={354}
      height={283}
      className={className}
    />
  );
}
