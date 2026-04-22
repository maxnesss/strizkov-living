import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  compact?: boolean;
  href?: string;
};

export function SiteLogo({
  compact = false,
  href = "/",
}: SiteLogoProps) {
  return (
    <Link
      className={`group inline-flex items-center text-[#3f3125] ${
        compact ? "gap-3" : "gap-4"
      }`}
      href={href}
    >
      <span className="flex shrink-0 items-center justify-center">
        <Image
          alt="Střítež Living logo"
          className={compact ? "h-[28px] w-auto" : "h-[36px] w-auto"}
          height={252}
          priority
          src="/log-tight.png"
          width={1152}
        />
      </span>

      <span className="min-w-0">
        <span
          className={`display-font block leading-none tracking-[-0.08em] ${
            compact ? "text-[26px] sm:text-[28px]" : "text-[31px] sm:text-[35px]"
          }`}
        >
          Střítež Living
        </span>
        <span
          className={`mt-1 block font-extrabold uppercase text-[#a18168] ${
            compact
              ? "text-[10px] tracking-[0.34em]"
              : "text-[11px] tracking-[0.4em]"
          }`}
        >
          Domov pod Beskydy
        </span>
      </span>
    </Link>
  );
}
