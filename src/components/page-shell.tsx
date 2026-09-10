import Link from "next/link";
import type { ReactNode } from "react";
import {
  InquiryDialogTrigger,
  type InquiryIntent,
} from "@/components/inquiry-dialog";
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
    intent?: InquiryIntent;
  };
  secondaryCta?: {
    label: string;
    href?: string;
    kind?: "link" | "dialog";
    intent?: InquiryIntent;
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
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f2] pb-0 pt-[100px] text-[#171717]">
      <SiteHeader languages={languages} navigation={navigation} />

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
    <section className="mx-auto max-w-[1440px] border-y border-black/10 px-6 py-14 sm:px-10 lg:px-[6.7vw] lg:py-20">
      <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#171717]">
        {eyebrow}
      </div>

      <h1 className="display-font mt-6 max-w-[15ch] text-5xl leading-[0.98] tracking-[-0.055em] text-[#171717] sm:text-6xl lg:text-[4.6rem]">
        {title}
      </h1>

      {intro ? (
        <p className="mt-6 max-w-3xl text-[17px] leading-8 text-[#4b4a47] sm:text-[19px] sm:leading-9">
          {intro}
        </p>
      ) : null}

      {(primaryCta || secondaryCta) && (
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          {primaryCta ? (
            primaryCta.kind === "dialog" ? (
              <InquiryDialogTrigger
                className="bg-[#171717] px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-[#3b3b3b]"
                intent={primaryCta.intent}
              >
                {primaryCta.label}
              </InquiryDialogTrigger>
            ) : (
              <Link
                className="bg-[#171717] px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-[#3b3b3b]"
                href={primaryCta.href ?? "/"}
              >
                {primaryCta.label}
              </Link>
            )
          ) : null}

          {secondaryCta ? (
            secondaryCta.kind === "dialog" ? (
              <InquiryDialogTrigger
                className="border border-[#171717] px-6 py-3.5 text-center text-sm font-medium text-[#171717] transition hover:bg-[#171717] hover:text-white"
                intent={secondaryCta.intent}
              >
                {secondaryCta.label}
              </InquiryDialogTrigger>
            ) : (
              <Link
                className="border border-[#171717] px-6 py-3.5 text-center text-sm font-medium text-[#171717] transition hover:bg-[#171717] hover:text-white"
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
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
          {eyebrow}
        </p>
        <h2 className="display-font mt-4 max-w-3xl text-[2.45rem] leading-[1.02] tracking-[-0.05em] text-[#3f3125] sm:text-[3.2rem]">
          {title}
        </h2>
      </div>

      {text ? (
        <p className="max-w-2xl text-[15px] leading-7 text-[#7d6a59] sm:text-base sm:leading-8">
          {text}
        </p>
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
      className={`rounded-[28px] border border-[#b89a7c26] bg-[#f7efe5] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_18px_50px_-42px_rgba(98,69,45,0.22)] ${className}`.trim()}
    >
      {children}
    </article>
  );
}

export function MetricCard({ label, value }: MetricProps) {
  return (
    <article className="rounded-[24px] border border-[#b89a7c2e] bg-white/76 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_18px_50px_-44px_rgba(98,69,45,0.22)]">
      <p className="text-[30px] font-semibold text-[#3f3125]">{value}</p>
      <p className="mt-2 text-sm leading-7 text-[#7d6a59]">{label}</p>
    </article>
  );
}
