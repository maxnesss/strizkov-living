import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { InfoCard, PageShell, SectionHeading } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { d115 } from "@/data/d115";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Domy | Střítež Living",
  description:
    "Přehled dostupných domů v projektu Střítež Living včetně dokončeného domu Lysá hora a domů k objednání.",
};

const currentYear = new Date().getFullYear();

const statusStyles = {
  ready: "border-[#5f8d5a33] bg-[#edf5eb] text-[#4f774b]",
  order: "border-[#b89a7c33] bg-[#f7efe5] text-[#8b6b50]",
} as const;

export default function HousesPage() {
  const page = stritezLiving.pages.house;
  const overview = stritezLiving.houseOverview;
  const featuredHouse = overview.houses[0];

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <section className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div className="flex flex-col justify-center rounded-[34px] border border-[#b89a7c26] bg-white/72 px-7 py-10 shadow-[0_34px_100px_-76px_rgba(98,69,45,0.24)] backdrop-blur sm:px-9 lg:px-10">
          <span className="w-fit rounded-full border border-[#b89a7c2e] bg-[#f7efe5] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
            Dům {featuredHouse.name}
          </span>
          <h1 className="display-font mt-6 text-5xl leading-[0.96] tracking-[-0.05em] text-[#3f3125] sm:text-6xl">
            Hotový vzorový dům ve Stříteži
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-[#7d6a59]">
            {page.hero.intro}
          </p>
          <p className="mt-4 max-w-xl text-[17px] leading-8 text-[#7d6a59]">
            {overview.intro}
          </p>

          <div className="mt-7">
            <p className="text-4xl font-semibold text-[#3f3125]">
              {featuredHouse.price}
            </p>
            <p
              className={`mt-3 inline-flex rounded-full border px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] ${
                statusStyles[featuredHouse.statusTone]
              }`}
            >
              {featuredHouse.status}
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <InfoCard className="bg-white/82 p-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                Dispozice
              </p>
              <p className="mt-2 text-xl font-semibold text-[#3f3125]">
                {stritezLiving.featuredHouse.disposition}
              </p>
            </InfoCard>
            <InfoCard className="bg-white/82 p-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                Užitná plocha
              </p>
              <p className="mt-2 text-xl font-semibold text-[#3f3125]">
                {stritezLiving.featuredHouse.area}
              </p>
            </InfoCard>
            <InfoCard className="bg-white/82 p-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                Pozemek
              </p>
              <p className="mt-2 text-xl font-semibold text-[#3f3125]">
                {featuredHouse.plot}
              </p>
            </InfoCard>
            <InfoCard className="bg-white/82 p-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                Parkování
              </p>
              <p className="mt-2 text-xl font-semibold text-[#3f3125]">
                carport
              </p>
            </InfoCard>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-[#b89a7c33] bg-[#f4ece3] shadow-[0_42px_120px_-84px_rgba(98,69,45,0.35)] lg:min-h-[620px]">
          <Image
            alt="Dokončený dům Lysá hora v projektu Střítež Living"
            className="object-cover object-center"
            fill
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 680px"
            src="/images/d115/d115-hero.jpg"
          />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-9 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
              V ceně domu {featuredHouse.name}
            </p>
            <h2 className="display-font mt-3 text-4xl leading-tight tracking-[-0.05em] text-[#3f3125]">
              Kompletní výbava hotového domu
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#7d6a59] sm:text-base">
            Uvedená výbava se vztahuje k dokončenému domu {featuredHouse.name}. U ostatních domů se finální rozsah řeší při objednávce podle potřeb budoucího majitele.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {overview.included.map((item) => (
            <div
              className="rounded-[18px] border border-[#b89a7c1f] bg-[#fdfaf6] px-4 py-4 text-sm font-semibold text-[#3f3125]"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 p-6 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Obytný prostor"
              title="Otevřený prostor až do krovu"
              text="Srdcem domu je obytný prostor otevřený až do krovu. Velkoformátové prosklení propojuje interiér s krytou terasou a přivádí do domu dostatek světla během celého dne."
            />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(77,58,42,0.2)]">
            <Image
              alt="Otevřený obytný prostor domu ve Stříteži"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              src="/images/d115/gallery/d115-04.jpg"
            />
          </div>
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 p-6 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur lg:p-8"
        id="dispozice"
      >
        <SectionHeading
          eyebrow={stritezLiving.pages.layout.hero.eyebrow}
          title={stritezLiving.pages.layout.hero.title}
          text={stritezLiving.pages.layout.hero.intro}
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {d115.floorPlans.map((plan) => (
            <article
              className="overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-4 shadow-[0_28px_90px_-60px_rgba(77,58,42,0.12)]"
              key={plan.title}
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
                  <h3 className="text-2xl font-semibold text-[#3f3125]">
                    {plan.title}
                  </h3>
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

        <div className="mx-auto mt-5 max-w-2xl rounded-[20px] border border-[#b89a7c20] bg-[#f7efe5] px-5 py-4 text-center text-sm font-semibold text-[#7d6a59]">
          Podkroví lze v budoucnu rozdělit na dvě samostatné místnosti.
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-[1240px] gap-5 lg:grid-cols-[0.86fr_1.14fr]">
        <InfoCard className="bg-white/82">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
                Domy v projektu
              </p>
              <h2 className="display-font mt-3 text-4xl leading-tight tracking-[-0.05em] text-[#3f3125]">
                Dostupnost
              </h2>
            </div>
            <Link
              className="hidden rounded-full border border-[#b89a7c2e] bg-white/76 px-4 py-2 text-xs font-extrabold text-[#3f3125] sm:inline-flex"
              href="/projekt"
            >
              Projekt
            </Link>
          </div>

          <div className="mt-5 divide-y divide-[#b89a7c1f]">
            {overview.houses.map((house) => (
              <div
                className={`grid grid-cols-[1fr_auto] gap-3 py-3.5 ${
                  house.number === featuredHouse.number ? "text-[#3f3125]" : ""
                }`}
                key={house.number}
              >
                <div>
                  <p className="font-semibold text-[#3f3125]">
                    {house.name}
                    <span className="ml-2 text-xs font-medium text-[#9b7d65]">
                      dům {house.number}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-[#7d6a59]">{house.note}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#3f3125]">
                    {house.plot}
                  </p>
                  <p
                    className={`mt-1 rounded-full border px-2.5 py-1 text-xs font-bold ${
                      statusStyles[house.statusTone]
                    }`}
                  >
                    {house.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>

        <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/70 bg-[#efe4d8] shadow-[0_28px_90px_-60px_rgba(77,58,42,0.18)]">
          <Image
            alt="Pohled na rozmístění domů v projektu Střítež Living"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            src="/images/d115/gallery/d115-01.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(63,49,37,0.02),rgba(63,49,37,0.26))]" />
          <div className="absolute inset-x-5 bottom-5 flex justify-between gap-2">
            {overview.houses.map((house) => (
              <div className="flex flex-col items-center gap-2" key={house.number}>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow-[0_12px_28px_-16px_rgba(0,0,0,0.6)] ${
                    house.number === featuredHouse.number
                      ? "bg-[#a88362] text-white"
                      : "bg-white/88 text-[#3f3125]"
                  }`}
                >
                  {house.number}
                </span>
                <span className="hidden rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-[#3f3125] md:inline">
                  {house.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
              Galerie domu {featuredHouse.name}
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              Exteriér, terasa a obytné prostory.
            </h2>
          </div>
          <Link
            className="hidden rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125] sm:inline-flex"
            href="/galerie"
          >
            Otevřít galerii
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {d115.gallery.slice(0, 5).map((image) => (
            <article
              className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/70 bg-white/76 shadow-[0_28px_90px_-70px_rgba(92,68,48,0.12)]"
              key={image.src}
            >
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                sizes="(max-width: 1280px) 50vw, 20vw"
                src={image.src}
              />
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <InquiryDialogTrigger
            className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)] transition hover:brightness-105"
            intent="house_viewing"
          >
            Domluvit prohlídku domu
          </InquiryDialogTrigger>
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
