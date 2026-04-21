import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";

type NavigationItem = {
  label: string;
  href: string;
};

type LanguageItem = {
  code: string;
  label: string;
  active: boolean;
};

type PageShellProps = {
  children: ReactNode;
  navigation: readonly NavigationItem[];
  languages: readonly LanguageItem[];
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
};

type MetricProps = {
  label: string;
  value: string;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function PageShell({ children, navigation, languages }: PageShellProps) {
  return (
    <main className="relative isolate overflow-x-hidden px-5 pb-14 pt-32 text-[#153252] sm:px-8 sm:pt-36 lg:px-10 lg:pt-40">
      <SiteHeader languages={languages} navigation={navigation} />

      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_68%)]" />
      <div className="absolute left-[-7rem] top-10 -z-10 h-64 w-64 rounded-full bg-[#70afe9]/24 blur-3xl" />
      <div className="absolute right-[-6rem] top-24 -z-10 h-80 w-80 rounded-full bg-[#b9dcfb]/40 blur-3xl" />

      {children}
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="mx-auto max-w-[1240px] overflow-hidden rounded-[36px] border border-[#5885b633] bg-white/70 px-6 pb-8 pt-10 shadow-[0_40px_120px_-84px_rgba(46,86,130,0.5)] backdrop-blur-[18px] sm:px-8 lg:px-[34px] lg:pb-10 lg:pt-12">
      <div className="inline-flex rounded-full border border-[#5885b62e] bg-[#f8fbff] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
        {eyebrow}
      </div>

      <h1 className="display-font mt-6 max-w-5xl text-5xl leading-[0.94] tracking-[-0.05em] text-[#153252] sm:text-6xl lg:text-7xl">
        {title}
      </h1>

      {intro ? (
        <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5d7691] sm:text-[19px]">
          {intro}
        </p>
      ) : null}

      {(primaryCta || secondaryCta) && (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {primaryCta ? (
            <Link
              className="rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)] transition hover:brightness-105"
              href={primaryCta.href}
            >
              {primaryCta.label}
            </Link>
          ) : null}

          {secondaryCta ? (
            <Link
              className="rounded-full border border-[#5885b62e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#153252] transition hover:bg-white"
              href={secondaryCta.href}
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      )}
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
          {eyebrow}
        </p>
        <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
          {title}
        </h2>
      </div>

      {text ? (
        <p className="max-w-2xl text-base leading-8 text-[#5d7691]">{text}</p>
      ) : null}
    </div>
  );
}

export function InfoCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-[28px] border border-[#5885b626] bg-[#f8fbff] p-6 ${className}`.trim()}
    >
      {children}
    </article>
  );
}

export function MetricCard({ label, value }: MetricProps) {
  return (
    <article className="rounded-[24px] border border-[#5885b62e] bg-white/70 px-5 py-5">
      <p className="text-[28px] font-semibold text-[#153252]">{value}</p>
      <p className="mt-2 text-sm leading-7 text-[#5d7691]">{label}</p>
    </article>
  );
}
