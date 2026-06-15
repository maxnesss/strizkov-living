import type { Metadata } from "next";
import Image from "next/image";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import {
  InfoCard,
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
      <section className="relative mx-auto min-h-[620px] max-w-[1240px] overflow-hidden rounded-[38px] border border-[#b89a7c33] bg-[#f4ece3] shadow-[0_42px_120px_-84px_rgba(98,69,45,0.35)]">
        <Image
          alt="Zeleň a otevřená krajina kolem projektu Střítež Living"
          className="object-cover object-center"
          fill
          loading="eager"
          sizes="(max-width: 1280px) 100vw, 1240px"
          src="/images/locality/lokalita-hero.webp"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,246,241,0.98)_0%,rgba(250,246,241,0.94)_34%,rgba(250,246,241,0.24)_58%,rgba(250,246,241,0.02)_76%)]" />

        <div className="relative flex min-h-[620px] max-w-[670px] flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
          <div className="inline-flex w-fit rounded-full border border-[#b89a7c2e] bg-[#f7efe5] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
            {page.hero.eyebrow}
          </div>

          <h1 className="display-font mt-6 text-5xl leading-[0.94] tracking-[-0.05em] text-[#3f3125] sm:text-6xl lg:text-7xl">
            {page.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-9 text-[#7d6a59] sm:text-[19px]">
            {page.hero.intro}
          </p>

          <InquiryDialogTrigger
            className="mt-8 inline-flex w-fit rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)] transition hover:brightness-105"
            intent="locality_viewing"
          >
            Domluvit si prohlídku lokality
          </InquiryDialogTrigger>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow={stritezLiving.locality.eyebrow}
          title={stritezLiving.locality.title}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4 text-base leading-8 text-[#7d6a59]">
            {stritezLiving.locality.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="rounded-[24px] border border-[#b89a7c1f] bg-[#f7efe5] px-5 py-4">
              <p className="text-sm font-semibold leading-7 text-[#3f3125]">
                Chcete lokalitu vidět naživo? Domluvte si prohlídku.
              </p>
              <InquiryDialogTrigger
                className="mt-4 inline-flex rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]"
                intent="locality_viewing"
              >
                Domluvit si prohlídku
              </InquiryDialogTrigger>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {stritezLiving.locality.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f5f9fe] px-4 py-2 text-sm text-[#756150]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stritezLiving.locality.amenities.map((item) => (
              <InfoCard key={item.title}>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                  {item.time}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#3f3125]">{item.title}</h3>
                {item.text ? (
                  <p className="mt-3 text-sm leading-7 text-[#7d6a59]">{item.text}</p>
                ) : null}
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Život v místě"
          title="Nejen adresa, ale způsob každodenního bydlení"
          text="Pokud hledáte klidnější domov bez ztráty praktického napojení na město, školy a služby, dává tato lokalita velmi dobrý smysl."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {page.lifestyle.map((item) => (
            <InfoCard key={item.title}>
              <h3 className="text-2xl font-semibold text-[#3f3125]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#7d6a59]">{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
              Poloha projektu
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              Místo zasazené mezi města a krajinu.
            </h2>

            <div className="mt-6 relative overflow-hidden rounded-[30px] border border-white/70 bg-[#efe2d3] p-3 shadow-[0_28px_90px_-70px_rgba(92,68,48,0.1)] sm:p-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-[#b89a7c26] bg-[#efe2d3]">
                <Image
                  alt="Aerialni pohled na polohu projektu mezi obcemi a beskydskou krajinou"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 780px"
                  src="/images/locality/lokalita-poloha.webp"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(63,49,37,0.16),rgba(63,49,37,0.03)),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(63,49,37,0.16))]" />
                {stritezLiving.locality.map.points.map((point) => (
                  <div
                    key={point.label}
                    className={`absolute ${point.offset} -translate-x-1/2 -translate-y-1/2`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="h-3.5 w-3.5 rounded-full bg-[#a88362] ring-8 ring-[#a8836220]" />
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#3f3125] shadow-[0_10px_24px_-18px_rgba(139,103,71,0.26)]">
                        {point.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <InfoCard>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
              Navigace
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#3f3125]">
              {stritezLiving.locality.map.label}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#7d6a59]">
              Projekt se nachází ve Stříteži u Třince - v lokalitě, která propojuje
              klid obce s rychlou dostupností okolních měst.
            </p>

            <a
              className="mt-6 inline-flex rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]"
              href={stritezLiving.locality.map.link}
              rel="noreferrer"
              target="_blank"
            >
              Otevřít v mapách
            </a>
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
