import type { Metadata } from "next";
import {
  InfoCard,
  PageHero,
  PageShell,
  SectionHeading,
} from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Lokalita | Střítež Living",
  description:
    "Podrobnější informace o lokalitě projektu Střítež Living, dostupnosti okolních měst a každodenním charakteru bydlení.",
};

const currentYear = new Date().getFullYear();

export default function LocalityPage() {
  const page = stritezLiving.pages.locality;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <PageHero
        eyebrow={page.hero.eyebrow}
        intro={page.hero.intro}
        title={page.hero.title}
        primaryCta={{ href: "/kontakt", label: "Zeptat se na lokalitu" }}
        secondaryCta={{ href: "/projekt", label: "Zobrazit celý projekt" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow={stritezLiving.locality.eyebrow}
          title={stritezLiving.locality.title}
          text="Na této stránce dává lokalita větší smysl jako samostatný argument pro koupi, ne jen jako doplněk k domu."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4 text-base leading-8 text-[#5d7691]">
            {stritezLiving.locality.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              {stritezLiving.locality.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f5f9fe] px-4 py-2 text-sm text-[#55708d]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stritezLiving.locality.amenities.map((item) => (
              <InfoCard key={item.title}>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
                  {item.time}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#153252]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d7691]">{item.text}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Život v místě"
          title="Nejen adresa, ale způsob každodenního bydlení."
          text="Tady je prostor popsat kvalitu místa mnohem konkrétněji, než dovoluje stručný blok na landing page."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {page.lifestyle.map((item) => (
            <InfoCard key={item.title}>
              <h3 className="text-2xl font-semibold text-[#153252]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              Dojezd a region
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              Města na dosah, krajina na očích.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stritezLiving.locality.driveTimes.map((item) => (
                <article
                  key={item.destination}
                  className="rounded-[22px] border border-[#5885b61f] bg-[#f8fbff] px-4 py-4"
                >
                  <p className="text-sm text-[#5d7691]">{item.destination}</p>
                  <p className="mt-2 text-2xl font-semibold text-[#153252]">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <InfoCard>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
              Proč právě tady
            </p>
            <div className="mt-4 grid gap-3">
              {page.nearbyReasons.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-[#5885b61f] bg-white/88 px-4 py-4 text-sm leading-7 text-[#5d7691]"
                >
                  <p className="font-semibold text-[#153252]">{item}</p>
                </div>
              ))}
            </div>
          </InfoCard>
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
