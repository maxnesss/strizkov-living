import type { Metadata } from "next";
import Image from "next/image";
import {
  InfoCard,
  MetricCard,
  PageHero,
  PageShell,
  SectionHeading,
} from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { balkerH114 } from "@/data/balkerH114";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Dům 1 | Střítež Living",
  description:
    "Podrobná prezentace prvního domu v nabídce projektu Střítež Living včetně parametrů, provozních kvalit a vizuální atmosféry.",
};

const currentYear = new Date().getFullYear();

export default function HousePage() {
  const page = stritezLiving.pages.house;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <PageHero
        eyebrow={page.hero.eyebrow}
        intro={page.hero.intro}
        title={page.hero.title}
        primaryCta={{ href: "/kontakt", label: "Mám zájem o dům 1" }}
        secondaryCta={{ href: "/dispozice", label: "Zobrazit dispozici" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="užitná plocha domu"
            value={stritezLiving.featuredHouse.area}
          />
          <MetricCard label="velikost pozemku" value={stritezLiving.featuredHouse.plot} />
          <MetricCard label="dispozice" value={stritezLiving.featuredHouse.disposition} />
          <MetricCard label="startovní cena" value={stritezLiving.featuredHouse.price} />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 p-6 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Atmosféra domu"
              title={stritezLiving.featuredHouse.title}
              text={stritezLiving.featuredHouse.layoutSummary}
            />

            <div className="mt-6 relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(36,58,88,0.35)]">
              <Image
                alt="Dům 1 ve Stříteži"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="/images/balker-h114/stories/balker-h114-story-family.jpg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <InfoCard>
              <div className="space-y-4 text-base leading-8 text-[#5d7691]">
                {stritezLiving.featuredHouse.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </InfoCard>

            <InfoCard className="bg-white/82">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                Hlavní přednosti domu
              </p>
              <div className="mt-4 grid gap-3">
                {page.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[#5885b61f] bg-[#f8fbff] px-4 py-4 text-sm leading-7 text-[#5d7691]"
                  >
                    <p className="font-semibold text-[#153252]">{item}</p>
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Jak se v domě bydlí"
          title="Dům navržený pro klidný každodenní rytmus."
          text="Na samostatné stránce jsme si mohli dovolit jít víc do provozních kvalit domu, ne jen do přehledu čísel. Právě v tom se dům z obyčejné nabídky mění v uvěřitelný domov."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {page.everydayMoments.map((item) => (
            <InfoCard key={item.title}>
              <h3 className="text-2xl font-semibold text-[#153252]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {balkerH114.storySections.map((section) => (
            <article
              key={section.title}
              className="overflow-hidden rounded-[28px] border border-white/70 bg-white/76 p-3 shadow-[0_28px_90px_-70px_rgba(38,27,20,0.2)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                <Image
                  alt={section.imageAlt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1280px) 50vw, 25vw"
                  src={section.image}
                />
              </div>
              <div className="p-3 pb-1">
                <h3 className="text-xl font-semibold text-[#153252]">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d7691]">{section.text}</p>
              </div>
            </article>
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
