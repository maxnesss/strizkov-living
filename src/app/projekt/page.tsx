import type { Metadata } from "next";
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

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Charakter projektu"
          title="Prémiově působící bydlení, které nestojí na okázalosti, ale na klidné kvalitě."
          text="Střítež Living je komorní rezidenční projekt, který staví na čisté architektuře, stejném typovém řešení domů a klidném charakteru celé lokality."
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
