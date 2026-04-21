import type { Metadata } from "next";
import Link from "next/link";
import {
  InfoCard,
  MetricCard,
  PageHero,
  PageShell,
  SectionHeading,
} from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
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
      <PageHero
        eyebrow={page.hero.eyebrow}
        intro={page.hero.intro}
        title={page.hero.title}
        primaryCta={{ kind: "dialog", label: "Domluvit konzultaci" }}
        secondaryCta={{ href: "/lokalita", label: "Prohlédnout lokalitu" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px]">
        <div className="grid gap-4 sm:grid-cols-3">
          {page.stats.map((item) => (
            <MetricCard key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Charakter projektu"
          title="Prémiově působící bydlení, které nestojí na okázalosti, ale na klidné kvalitě."
          text="Střítež Living je komorní rezidenční projekt, který staví na čisté architektuře, stejném typovém řešení domů a klidném charakteru celé lokality."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {page.pillars.map((item) => (
            <InfoCard key={item.title}>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                Hlavní princip
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#153252]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Postup"
          title="Od prvního dotazu k výběru konkrétního domu."
          text="Vedle samotného projektu je důležité i to, že celý prodejní proces zůstává přehledný, konkrétní a dobře navázaný na další kroky."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {page.phases.map((item) => (
            <article
              key={item.step}
              className="rounded-[28px] border border-[#5885b626] bg-[#f8fbff] p-6"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
                Krok {item.step}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#153252]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              Pro koho je projekt vhodný
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              Projekt pro klienty, kteří chtějí bydlení s větším nadhledem.
            </h2>
          </div>

          <div className="space-y-3">
            {page.audience.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#5885b626] bg-[#f8fbff] px-5 py-5 text-sm leading-7 text-[#5d7691]"
              >
                <p className="font-semibold text-[#153252]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)]"
            href="/domy"
          >
            Prohlédnout domy
          </Link>
          <Link
            className="rounded-full border border-[#5885b62e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#153252]"
            href="/"
          >
            Zpět na úvod
          </Link>
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
