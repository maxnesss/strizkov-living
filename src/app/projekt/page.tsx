import type { Metadata } from "next";
import Image from "next/image";
import {
  InfoCard,
  PageShell,
  SectionHeading,
} from "@/components/page-shell";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Projekt | Střítež Living",
  description:
    "Podrobnější představení projektu Střítež Living, jeho konceptu, měřítka a hlavních výhod pro budoucí bydlení.",
};

const currentYear = new Date().getFullYear();

export default function ProjectPage() {
  const page = stritezLiving.pages.project;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <section className="relative mx-auto min-h-[620px] max-w-[1240px] overflow-hidden rounded-[38px] border border-[#b89a7c33] bg-[#f4ece3] shadow-[0_42px_120px_-84px_rgba(98,69,45,0.35)]">
        <Image
          alt="Boční pohled na dům v projektu Střítež Living"
          className="object-cover object-center lg:object-[38%_center]"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1240px"
          src="/images/d115/gallery/d115-02.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,246,241,0.98)_0%,rgba(250,246,241,0.94)_34%,rgba(250,246,241,0.28)_58%,rgba(250,246,241,0.02)_76%)]" />

        <div className="relative flex min-h-[620px] max-w-[680px] flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
          <div>
            <div className="inline-flex rounded-full border border-[#b89a7c2e] bg-[#f7efe5] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
              {page.hero.eyebrow}
            </div>

            <h1 className="display-font mt-6 max-w-4xl text-5xl leading-[0.94] tracking-[-0.05em] text-[#3f3125] sm:text-6xl lg:text-7xl">
              {page.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#7d6a59] sm:text-[19px]">
              {page.hero.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <InquiryDialogTrigger className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)] transition hover:brightness-105">
                Mám zájem o dům
              </InquiryDialogTrigger>
              <Link
                className="rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125] transition hover:bg-white"
                href="/domy"
              >
                Zobrazit domy
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {page.stats.map((item) => (
                <span
                  key={item.value}
                  className="rounded-full border border-[#b89a7c1f] bg-[#f7efe5] px-4 py-2 text-sm font-semibold text-[#756150]"
                >
                  {item.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Charakter projektu"
          title="Jednoduché a funkční bydlení bez kompromisů"
          text="Domy jsou navrženy s důrazem na praktické využití prostoru, jednoduchý provoz a přirozené propojení interiéru se zahradou."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {page.pillars.map((item) => (
            <InfoCard key={item.title}>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
                Hlavní princip
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#3f3125]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#7d6a59]">{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <SiteFooter
        brand={stritezLiving.brand}
        contactEmail={stritezLiving.cta.email}
        currentYear={currentYear}
        footer={stritezLiving.footer}
        languages={stritezLiving.languages}
        navigation={stritezLiving.navigation}
      />
    </PageShell>
  );
}
