import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  InfoCard,
  PageHero,
  PageShell,
  SectionHeading,
} from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { balkerH114 } from "@/data/balkerH114";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Domy | Střítež Living",
  description:
    "Podrobná prezentace rodinných domů a jejich standardu v projektu Střítež Living.",
};

const currentYear = new Date().getFullYear();

export default function HousesPage() {
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
        primaryCta={{ kind: "dialog", label: "Mám zájem o dům" }}
        secondaryCta={{ href: "#dispozice", label: "Zobrazit dispozici" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.area}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">užitná plocha domu</p>
          </InfoCard>
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.plot}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">
              orientační velikost pozemku
            </p>
          </InfoCard>
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.disposition}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">dispozice</p>
          </InfoCard>
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.price}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">cena od</p>
          </InfoCard>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Cena a výbava"
          title="Cena a výbava domu"
          text="Cena domu vychází ze standardního provedení, které poskytuje kvalitní základ pro komfortní bydlení. Vybrané prvky lze upravit nebo doplnit dle vašich individuálních požadavků."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <InfoCard>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
              Základní standard
            </p>
            <p className="mt-4 text-3xl font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.price}
            </p>
          </InfoCard>

          <InfoCard className="bg-white/82">
            <p className="text-sm leading-7 text-[#7d6a59]">
              Standard domu je navržen tak, aby splňoval nároky na pohodlné každodenní
              bydlení a zároveň umožnil další úpravy podle vašich představ.
            </p>
          </InfoCard>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 p-6 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Atmosféra domů"
              title="Prostorné bydlení 4+kk s otevřeným obytným prostorem"
              text="Dispozice domu nabízí dvě samostatné ložnice, hlavní ložnici a velkorysý obytný prostor s jídelnou a samostatnou kuchyní. Součástí je i praktické zázemí včetně šatny a technické místnosti."
            />

            <div className="mt-6 relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(77,58,42,0.2)]">
              <Image
                alt="Rodinný dům ve Stříteži"
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
              <div className="space-y-4 text-base leading-8 text-[#7d6a59]">
                <p>
                  Domy v projektu nabízejí promyšlenou dispozici 4+kk s důrazem na
                  jednoduchý každodenní provoz a přirozené propojení interiéru se
                  zahradou.
                </p>
                <p>
                  Hlavní obytný prostor s jídelnou tvoří centrum domu a plynule navazuje
                  na terasu.
                </p>
                <p>
                  Jednotlivé domy se liší velikostí pozemku, umístěním v rámci projektu a
                  orientací vůči světovým stranám.
                </p>
              </div>
            </InfoCard>
          </div>
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 p-6 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur lg:p-8"
        id="dispozice"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={stritezLiving.pages.layout.hero.eyebrow}
              title={stritezLiving.pages.layout.hero.title}
              text={stritezLiving.pages.layout.hero.intro}
            />

            <div className="mt-8 overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-4 shadow-[0_28px_90px_-60px_rgba(77,58,42,0.12)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                <Image
                  alt="Půdorys domu"
                  className="object-contain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  src="/images/balker-h114/plan/balker-h114-plan.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
              Galerie domů
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              Ukázky exteriéru a interiéru domu.
            </h2>
          </div>

          <Link
            className="hidden rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125] sm:inline-flex"
            href="/galerie"
          >
            Otevřít galerii
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {balkerH114.storySections.map((section) => (
            <article
              key={section.title}
              className="overflow-hidden rounded-[28px] border border-white/70 bg-white/76 p-3 shadow-[0_28px_90px_-70px_rgba(92,68,48,0.12)]"
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
                <h3 className="text-xl font-semibold text-[#3f3125]">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#7d6a59]">{section.text}</p>
              </div>
            </article>
          ))}
        </div>

        <Link
          className="mt-6 inline-flex rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125] sm:hidden"
          href="/galerie"
        >
          Otevřít galerii
        </Link>
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
