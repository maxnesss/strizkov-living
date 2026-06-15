import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { InfoCard, PageShell, SectionHeading } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Projekt | Střítež Living",
  description:
    "Komorní projekt šesti rodinných domů ve Stříteži s přehledem dostupnosti, pozemků a možností rezervace.",
};

const currentYear = new Date().getFullYear();

const statusStyles = {
  ready: "bg-[#5f8d5a]",
  order: "bg-[#a88362]",
} as const;

export default function ProjectPage() {
  const page = stritezLiving.pages.project;
  const overview = stritezLiving.houseOverview;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <section className="relative mx-auto min-h-[590px] max-w-[1240px] overflow-hidden rounded-[34px] border border-[#b89a7c33] bg-[#3f3125] shadow-[0_42px_120px_-84px_rgba(98,69,45,0.35)]">
        <Image
          alt="Šest rodinných domů ve Stříteži s výhledem na Beskydy"
          className="object-cover object-center"
          fill
          loading="eager"
          sizes="(max-width: 1280px) 100vw, 1240px"
          src="/images/project/project-hero-six-houses.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,37,29,0.88)_0%,rgba(47,37,29,0.66)_44%,rgba(47,37,29,0.22)_74%,rgba(47,37,29,0.08)_100%)]" />

        <div className="relative flex min-h-[590px] max-w-[680px] flex-col justify-center px-7 py-14 text-white sm:px-12 lg:px-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ead8c4]">
            {page.hero.eyebrow}
          </p>
          <h1 className="display-font mt-5 text-5xl leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Komorní projekt šesti domů pod Beskydami
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-[#f4e9dc] sm:text-lg sm:leading-9">
            Pouze šest samostatných rodinných domů na velkorysých pozemcích v klidné části Stříteže. Soukromí, otevřené výhledy a moderní architektura v harmonii s okolní krajinou.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-full bg-[#b08a63] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(0,0,0,0.42)] transition hover:brightness-105"
              href="/domy"
            >
              Zobrazit dostupné domy
            </Link>
            <InquiryDialogTrigger className="rounded-full border border-white/24 bg-white/12 px-6 py-3.5 text-center text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/18">
              Mám zájem o dům
            </InquiryDialogTrigger>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-[1240px] gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <InfoCard className="bg-white/76 p-5 sm:p-6">
          <div className="flex flex-col gap-5">
            <div className="flex items-end justify-between gap-4">
              <h2 className="display-font text-4xl leading-tight tracking-[-0.05em] text-[#3f3125]">
                Situace projektu
              </h2>
              <p className="hidden text-sm font-semibold text-[#7d6a59] sm:block">
                6 domů · pozemky od 1 200 m²
              </p>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-white/70 bg-[#efe4d8]">
              <Image
                alt="Pohled na umístění domů v projektu Střítež Living"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                src="/images/project/project-situation-six-houses.png"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(63,49,37,0.02),rgba(63,49,37,0.24))]" />
              <div className="absolute inset-x-6 bottom-5 grid grid-cols-6 gap-2">
                {overview.houses.map((house) => (
                  <div
                    className="flex flex-col items-center gap-2"
                    key={house.number}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a88362] text-sm font-bold text-white shadow-[0_12px_28px_-16px_rgba(0,0,0,0.6)]">
                      {house.number}
                    </span>
                    <span className="hidden rounded-full bg-white/88 px-2.5 py-1 text-[11px] font-bold text-[#3f3125] shadow-sm md:inline">
                      {house.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </InfoCard>

        <InfoCard className="bg-white/82 p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-[#3f3125]">
            Přehled dostupnosti
          </h2>
          <div className="mt-5 divide-y divide-[#b89a7c1f]">
            {overview.houses.map((house) => (
              <Link
                className="grid grid-cols-[1fr_auto] gap-3 py-3.5 text-sm transition hover:text-[#8f6d4c]"
                href="/domy"
                key={house.number}
              >
                <div>
                  <p className="font-semibold text-[#3f3125]">
                    {house.name}
                    <span className="ml-2 text-xs font-medium text-[#9b7d65]">
                      dům {house.number}
                    </span>
                  </p>
                  <p className="mt-1 text-[#7d6a59]">{house.plot}</p>
                </div>
                <div className="text-right">
                  <p className="flex items-center justify-end gap-2 whitespace-nowrap text-[#3f3125]">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        statusStyles[house.statusTone]
                      }`}
                    />
                    {house.status}
                  </p>
                  <p className="mt-1 text-xs text-[#9b7d65]">{house.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-[#9b7d65]">
            Velikosti pozemků jsou orientační a mohou se upřesnit podle finálního zaměření.
          </p>
        </InfoCard>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Proč jen šest domů"
          title="Měřítko, které ponechává místu klid"
          text={overview.intro}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {overview.projectBenefits.map((item) => (
            <InfoCard className="bg-white/76 text-center" key={item.title}>
              <h3 className="text-xl font-semibold text-[#3f3125]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#7d6a59]">{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Jak projekt vzniká"
          title="Hotový první dům, další podle objednávky"
          text="Dostupnost je postavená prakticky: jeden dům si můžete prohlédnout hotový, další domy lze řešit včas podle potřeb budoucího majitele."
        />

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {overview.timeline.map((item) => (
            <article
              className="relative rounded-[26px] border border-[#b89a7c26] bg-[#f7efe5] px-5 py-6"
              key={item.step}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[#9b7d65] shadow-sm">
                {item.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[#3f3125]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#7d6a59]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mt-8 max-w-[1240px] overflow-hidden rounded-[34px] border border-[#b89a7c33] bg-[#3f3125] px-7 py-10 text-white shadow-[0_34px_100px_-70px_rgba(98,69,45,0.36)] sm:px-10">
        <Image
          alt="Večerní pohled na rodinný dům ve Stříteži"
          className="object-cover"
          fill
          sizes="(max-width: 1280px) 100vw, 1240px"
          src="/images/project/project-hero-six-houses.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(76,53,34,0.9),rgba(76,53,34,0.56),rgba(76,53,34,0.18))]" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display-font max-w-xl text-4xl leading-tight tracking-[-0.05em]">
              Vyberte si své místo pod Beskydami
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#f4e9dc] sm:text-base">
              První dokončený dům je již v nabídce. Ostatní pozemky a domy je možné rezervovat a objednat již nyní.
            </p>
          </div>
          <Link
            className="w-fit rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-[#3f3125] shadow-[0_18px_42px_-26px_rgba(0,0,0,0.42)]"
            href="/domy"
          >
            Prohlédnout domy
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
