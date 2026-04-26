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
      <section className="mx-auto max-w-[1240px] overflow-hidden rounded-[36px] border border-[#b89a7c33] bg-white/72 shadow-[0_42px_120px_-84px_rgba(98,69,45,0.24)] backdrop-blur-[18px]">
        <div className="grid gap-8 px-6 pb-6 pt-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-10 lg:px-[34px] lg:pb-8 lg:pt-12">
          <div className="pb-2">
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

          <aside className="relative min-h-[420px] lg:min-h-[620px]">
            <div className="absolute inset-[0_0_80px_0] overflow-hidden rounded-[30px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(77,58,42,0.5)] lg:inset-[0_0_100px_20px] [clip-path:polygon(12%_0,100%_0,100%_86%,86%_100%,0_100%,0_15%)]">
              <Image
                alt="Vizualizace projektu Střítež Living"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                src="/images/balker-h114/hero/balker-h114-hero.jpg"
              />
              <div className="absolute left-0 top-6 rounded-r-[18px] bg-[#4b392cd6] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                Vizualizace projektu
              </div>
            </div>
          </aside>
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
