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
    <Link className="group inline-flex shrink-0 items-center" href={href}>
      <Image
        alt="Střítež Living — Domov pod Beskydy"
        className={`w-auto ${
          compact ? "h-[58px] sm:h-[72px]" : "h-[64px] sm:h-[76px]"
        }`}
        height={724}
        priority
        src="/stritez-living-logo-transparent.png"
        width={2171}
      />
    </Link>
  );
}
