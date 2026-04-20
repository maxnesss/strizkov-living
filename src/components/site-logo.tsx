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
      className={`group inline-flex items-center text-[#153252] ${
        compact ? "gap-3" : "gap-4"
      }`}
      href={href}
    >
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-[20px] border border-[#6ea0d03a] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(232,243,255,0.88))] shadow-[0_20px_44px_-32px_rgba(49,96,146,0.75)] ${
          compact ? "h-11 w-11" : "h-14 w-14"
        }`}
      >
        <span className="absolute inset-x-2 bottom-2 h-px bg-[linear-gradient(90deg,transparent,#87b4e1,transparent)]" />
        <svg
          aria-hidden="true"
          className={compact ? "h-7 w-7" : "h-8 w-8"}
          fill="none"
          viewBox="0 0 48 48"
        >
          <path
            d="M10 24.5L24 13l14 11.5"
            stroke="#153252"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M15 28.5h18"
            stroke="#4d82c6"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M13.5 34h21"
            stroke="#79aee6"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <circle cx="33.5" cy="16" fill="#8cc0f3" r="2.5" />
        </svg>
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
          className={`mt-1 block font-extrabold uppercase text-[#6f92b8] ${
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
