import Link from "next/link";
import type { ReactNode } from "react";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
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
    label: string;
    href?: string;
    kind?: "link" | "dialog";
  };
  secondaryCta?: {
    label: string;
    href?: string;
    kind?: "link" | "dialog";
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
    <main className="relative isolate overflow-x-hidden px-5 pb-14 pt-32 text-[#3f3125] sm:px-8 sm:pt-36 lg:px-10 lg:pt-40">
      <SiteHeader languages={languages} navigation={navigation} />

      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_68%)]" />
      <div className="absolute left-[-7rem] top-10 -z-10 h-64 w-64 rounded-full bg-[#dbc0a5]/16 blur-3xl" />
      <div className="absolute right-[-6rem] top-24 -z-10 h-80 w-80 rounded-full bg-[#efe0d0]/26 blur-3xl" />

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
    <section className="mx-auto max-w-[1240px] overflow-hidden rounded-[36px] border border-[#b89a7c33] bg-white/70 px-6 pb-8 pt-10 shadow-[0_40px_120px_-84px_rgba(98,69,45,0.28)] backdrop-blur-[18px] sm:px-8 lg:px-[34px] lg:pb-10 lg:pt-12">
      <div className="inline-flex rounded-full border border-[#b89a7c2e] bg-[#f7efe5] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
        {eyebrow}
      </div>

      <h1 className="display-font mt-6 max-w-5xl text-5xl leading-[0.94] tracking-[-0.05em] text-[#3f3125] sm:text-6xl lg:text-7xl">
        {title}
      </h1>

      {intro ? (
        <p className="mt-6 max-w-3xl text-lg leading-9 text-[#7d6a59] sm:text-[19px]">
          {intro}
        </p>
      ) : null}

      {(primaryCta || secondaryCta) && (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {primaryCta ? (
            primaryCta.kind === "dialog" ? (
              <InquiryDialogTrigger className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)] transition hover:brightness-105">
                {primaryCta.label}
              </InquiryDialogTrigger>
            ) : (
              <Link
                className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)] transition hover:brightness-105"
                href={primaryCta.href ?? "/"}
              >
                {primaryCta.label}
              </Link>
            )
          ) : null}

          {secondaryCta ? (
            secondaryCta.kind === "dialog" ? (
              <InquiryDialogTrigger className="rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125] transition hover:bg-white">
                {secondaryCta.label}
              </InquiryDialogTrigger>
            ) : (
              <Link
                className="rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125] transition hover:bg-white"
                href={secondaryCta.href ?? "/"}
              >
                {secondaryCta.label}
              </Link>
            )
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
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
          {eyebrow}
        </p>
        <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
          {title}
        </h2>
      </div>

      {text ? (
        <p className="max-w-2xl text-base leading-8 text-[#7d6a59]">{text}</p>
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
      className={`rounded-[28px] border border-[#b89a7c26] bg-[#f7efe5] p-6 ${className}`.trim()}
    >
      {children}
    </article>
  );
}

export function MetricCard({ label, value }: MetricProps) {
  return (
    <article className="rounded-[24px] border border-[#b89a7c2e] bg-white/70 px-5 py-5">
      <p className="text-[28px] font-semibold text-[#3f3125]">{value}</p>
      <p className="mt-2 text-sm leading-7 text-[#7d6a59]">{label}</p>
    </article>
  );
}
