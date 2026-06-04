import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import {
  InfoCard,
  PageShell,
  SectionHeading,
} from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { d115 } from "@/data/d115";
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
      <section className="relative mx-auto min-h-[620px] max-w-[1240px] overflow-hidden rounded-[38px] border border-[#b89a7c33] bg-[#f4ece3] shadow-[0_42px_120px_-84px_rgba(98,69,45,0.35)]">
        <Image
          alt="Otevřený obytný prostor domu v projektu Střítež Living"
          className="object-cover object-center lg:object-[62%_center]"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1240px"
          src="/images/d115/gallery/d115-05.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,246,241,0.98)_0%,rgba(250,246,241,0.94)_38%,rgba(250,246,241,0.3)_64%,rgba(250,246,241,0.02)_82%)]" />

        <div className="relative flex min-h-[620px] max-w-[680px] flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
          <div className="inline-flex w-fit rounded-full border border-[#b89a7c2e] bg-[#f7efe5] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
            {page.hero.eyebrow}
          </div>

          <h1 className="display-font mt-6 text-5xl leading-[0.94] tracking-[-0.05em] text-[#3f3125] sm:text-6xl lg:text-7xl">
            {page.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-9 text-[#7d6a59] sm:text-[19px]">
            {page.hero.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <InquiryDialogTrigger className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)] transition hover:brightness-105">
              Mám zájem o dům
            </InquiryDialogTrigger>
            <Link
              className="rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125] transition hover:bg-white"
              href="#dispozice"
            >
              Zobrazit dispozici
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.groundFloorArea}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">1. NP</p>
          </InfoCard>
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.atticArea}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">2. NP</p>
          </InfoCard>
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.area}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">celková užitná plocha</p>
          </InfoCard>
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.floorArea}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">celková podlahová plocha</p>
          </InfoCard>
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.terrace}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">terasa</p>
          </InfoCard>
          <InfoCard className="bg-white/76">
            <p className="text-[30px] font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.plot}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#7d6a59]">pozemek</p>
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
            <InquiryDialogTrigger
              className="mt-5 inline-flex rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]"
              intent="house_viewing"
            >
              Domluvit prohlídku domu
            </InquiryDialogTrigger>
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
              title="Dvě podlaží spojená otevřeným obytným prostorem"
              text="Obývací pokoj s kuchyní a jídelnou je otevřený až do krovu. V hlavním podlaží jsou tři samostatné pokoje, dvě koupelny a technické zázemí, v podkroví pak jedna velká variabilní místnost."
            />

            <div className="mt-6 relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(77,58,42,0.2)]">
              <Image
                alt="Rodinný dům ve Stříteži"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="/images/d115/gallery/d115-01.jpg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <InfoCard>
              <div className="space-y-4 text-base leading-8 text-[#7d6a59]">
                <p>
                  Dům D-115 nabízí promyšlenou dispozici ve dvou podlažích s důrazem
                  na světlo, vzdušnost a přirozené propojení interiéru se zahradou.
                </p>
                <p>
                  Hlavní obytný prostor s kuchyní a jídelnou tvoří centrum domu,
                  plynule navazuje na terasu a otevírá se až do krovu.
                </p>
                <p>
                  Obytné podkroví je zatím řešeno jako jedna velká místnost, v budoucnu
                  je ale možné prostor rozdělit na dvě místnosti.
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
        <div>
            <SectionHeading
              eyebrow={stritezLiving.pages.layout.hero.eyebrow}
              title={stritezLiving.pages.layout.hero.title}
              text={stritezLiving.pages.layout.hero.intro}
            />

            <div className="mt-8 grid gap-5 xl:grid-cols-2">
              {d115.floorPlans.map((plan) => (
                <article
                  key={plan.title}
                  className="overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-4 shadow-[0_28px_90px_-60px_rgba(77,58,42,0.12)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-white">
                    <Image
                      alt={plan.alt}
                      className="object-contain"
                      fill
                      sizes="(max-width: 1280px) 100vw, 50vw"
                      src={plan.src}
                    />
                  </div>
                  <div className="px-2 pb-2 pt-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-2xl font-semibold text-[#3f3125]">{plan.title}</h3>
                      <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#9b7d65]">
                        {plan.area}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#7d6a59]">
                      {plan.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {d115.roomSchedule.map((room, index) => (
                <article
                  key={`${room.floor}-${room.room}-${index}`}
                  className="rounded-[22px] border border-[#b89a7c1f] bg-[#f7efe5] px-4 py-4"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                    {room.floor}
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <p className="text-sm font-semibold text-[#3f3125]">{room.room}</p>
                    <p className="shrink-0 text-sm text-[#7d6a59]">{room.area}</p>
                  </div>
                </article>
              ))}
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
          {d115.storySections.map((section) => (
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
