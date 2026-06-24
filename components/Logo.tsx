type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-2xl tracking-[0.4em]",
  md: "text-4xl md:text-5xl tracking-[0.45em]",
  lg: "text-5xl md:text-7xl lg:text-8xl tracking-[0.5em]",
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <span
      className={`font-grotesk font-light uppercase ${sizes[size]} ${className}`}
    >
      PHORIAN
    </span>
  );
}
