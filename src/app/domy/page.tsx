import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Domy | Střítež Living",
  description:
    "Přehled domů v projektu Střítež Living včetně domu Living 1, standardu, půdorysů a dostupnosti dalších domů.",
};

const currentYear = new Date().getFullYear();

const featured = {
  name: "Living 1",
  subtitle: "První realizovaný dům projektu Střítež Living",
  intro:
    "Rodinný dům 5+kk navržený pro pohodlný rodinný život. Otevřený obytný prostor, velkorysý pozemek a moderní architektura v klidné části obce Střítež pod Beskydami.",
  area: "150 m²",
  disposition: "5+kk",
  plot: "1 294 m²",
  price: "od 11 900 000 Kč",
  priceNote: "vč. DPH",
  status: "Dokončeno",
  statusNote: "připraveno k prodeji",
} as const;

const standardItems = [
  "tepelné čerpadlo",
  "rekuperace",
  "podlahové vytápění",
  "venkovní žaluzie",
  "klimatizace",
  "carport pro 2 vozy",
  "zabezpečovací systém",
  "kamerový systém",
  "krytá terasa",
  "příprava pro fotovoltaiku",
  "oplocení pozemku",
  "sauna",
] as const;

const reasons = [
  {
    icon: "⌂",
    title: "Otevřený obytný prostor až do krovu",
    text: "Vzdušný interiér s velkoformátovým prosklením.",
  },
  {
    icon: "▱",
    title: "Krytá terasa orientovaná do zahrady",
    text: "Přirozené propojení interiéru a venkovního prostoru.",
  },
  {
    icon: "♧",
    title: "Pozemek 1 294 m²",
    text: "Dostatek prostoru pro soukromí i budoucí využití.",
  },
  {
    icon: "◇",
    title: "Možnost individuálních úprav",
    text: "Vybrané prvky lze při včasné rezervaci přizpůsobit.",
  },
] as const;

const gallery = [
  { src: "/images/d115/d115-hero.jpg", alt: "Dům Living 1 se zahradou" },
  { src: "/images/d115/gallery/d115-01.jpg", alt: "Krytá terasa domu Living 1" },
  { src: "/images/d115/gallery/d115-04.jpg", alt: "Obytný prostor domu Living 1" },
  { src: "/images/d115/gallery/d115-03.jpg", alt: "Schodiště a interiér domu Living 1" },
  { src: "/images/d115/gallery/d115-05.jpg", alt: "Ložnice domu Living 1" },
  { src: "/images/d115/gallery/d115-02.jpg", alt: "Zahrada s výhledem na Beskydy" },
] as const;

const floorPlans = [
  {
    title: "1. NP",
    src: "/images/d115/plan/living-1-floor-ground-cropped.png",
    alt: "Půdorys prvního nadzemního podlaží domu Living 1",
  },
  {
    title: "2. NP",
    src: "/images/d115/plan/living-1-floor-attic-cropped.png",
    alt: "Půdorys obytného podkroví domu Living 1",
  },
] as const;

const statusTone = {
  ready: "bg-[#5f8d5a]",
  order: "bg-[#a48972]",
} as const;

function SpecCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <article className="rounded-[10px] border border-[#b89a7c18] bg-white/78 p-4 shadow-[0_18px_54px_-48px_rgba(79,55,35,0.28)]">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-[#a8836233] text-lg text-[#8b6548]">
          {icon}
        </span>
        <div>
          <p className="text-2xl font-semibold leading-none text-[#211914]">
            {value}
          </p>
          <p className="mt-1 text-sm text-[#6f5d4f]">{label}</p>
        </div>
      </div>
    </article>
  );
}

export default function HousesPage() {
  const overview = stritezLiving.houseOverview;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[38px] border border-[#b89a7c26] bg-white/64 shadow-[0_42px_120px_-84px_rgba(98,69,45,0.3)] backdrop-blur">
      <section className="grid gap-7 px-7 py-11 sm:px-10 lg:grid-cols-[0.46fr_0.54fr] lg:items-start">
        <div>
          <nav
            aria-label="Drobečková navigace"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-[#8d7460]"
          >
            <Link className="transition hover:text-[#3f3125]" href="/">
              Domů
            </Link>
            <span aria-hidden="true">›</span>
            <Link className="transition hover:text-[#3f3125]" href="/domy">
              Domy
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-[#3f3125]">{featured.name}</span>
          </nav>

          <h1 className="display-font text-[4rem] leading-none text-[#211914] sm:text-[5rem]">
            {featured.name}
          </h1>
          <p className="mt-5 max-w-md text-[1.75rem] font-semibold leading-tight text-[#9a6e4e]">
            {featured.subtitle}
          </p>
          <p className="mt-8 max-w-[34rem] text-[15px] leading-7 text-[#2f2925]">
            {featured.intro}
          </p>

          <div className="mt-8 grid max-w-[36rem] grid-cols-1 gap-3 sm:grid-cols-2">
            <SpecCard icon="⌗" label="užitná plocha" value={featured.area} />
            <SpecCard icon="▭" label="dispozice" value={featured.disposition} />
            <SpecCard icon="♧" label="pozemek" value={featured.plot} />
            <SpecCard icon="◎" label={featured.priceNote} value={featured.price} />
            <SpecCard icon="⌁" label={featured.statusNote} value={featured.status} />
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[12px] bg-[#eadfd4] shadow-[0_30px_90px_-64px_rgba(79,55,35,0.32)] sm:min-h-[480px] lg:min-h-[560px]">
          <Image
            alt="Dům Living 1 v projektu Střítež Living"
            className="object-cover object-center"
            fill
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 670px"
            src="/images/d115/d115-hero.jpg"
          />
        </div>
      </section>

      <section className="grid gap-7 border-t border-[#b89a7c26] bg-[#faf7f3]/70 px-7 py-10 sm:px-10 lg:grid-cols-[0.34fr_0.66fr]">
        <div className="flex flex-col justify-end pb-2">
          <h2 className="display-font max-w-xs text-[2.35rem] leading-tight text-[#211914]">
            Promyšlené uspořádání pro rodinný život
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#2f2925]">
            Otevřený obytný prostor v přízemí a obytné podkroví vytváří
            vzdušný a praktický domov pro každodenní fungování rodiny.
          </p>
        </div>

        <article className="rounded-[10px] border border-[#b89a7c1f] bg-white/72 p-7 shadow-[0_20px_60px_-54px_rgba(79,55,35,0.22)]">
          <h2 className="display-font text-[2.15rem] leading-tight text-[#211914]">
            Standard domu Living
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#2f2925]">
            Dům je navržen v uvedeném standardu. Vybrané prvky lze při včasné
            rezervaci upravit podle požadavků budoucího majitele.
          </p>

          <div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
            {standardItems.map((item) => (
              <div className="flex items-center gap-3 text-sm text-[#2f2925]" key={item}>
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#a48972] text-[11px] font-bold text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section
        className="grid gap-3 border-t border-[#b89a7c26] px-7 py-8 sm:px-10 lg:grid-cols-2"
        id="dispozice"
      >
        {floorPlans.map((plan) => (
          <article
            className="overflow-hidden rounded-[10px] border border-[#b89a7c1f] bg-white/72 p-5 shadow-[0_24px_70px_-62px_rgba(79,55,35,0.22)]"
            key={plan.title}
          >
            <h3 className="mb-3 text-lg font-semibold text-[#211914]">{plan.title}</h3>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[8px] bg-white">
              <Image
                alt={plan.alt}
                className="object-contain"
                fill
                sizes="(max-width: 1024px) 100vw, 610px"
                src={plan.src}
              />
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-[#b89a7c26] bg-white/72 px-7 py-10 sm:px-10">
        <h2 className="display-font text-[2.2rem] leading-tight text-[#211914]">
          Proč je Living 1 výjimečný
        </h2>

        <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <article
              className="border-[#b89a7c24] xl:border-l xl:first:border-l-0 xl:pl-8 xl:first:pl-0"
              key={reason.title}
            >
              <p className="text-5xl leading-none text-[#9a6e4e]">{reason.icon}</p>
              <h3 className="mt-5 max-w-[15rem] text-xl font-medium leading-snug text-[#211914]">
                {reason.title}
              </h3>
              <p className="mt-4 max-w-[15rem] text-sm leading-7 text-[#2f2925]">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#b89a7c26] px-7 py-10 sm:px-10">
        <h2 className="display-font text-[2.2rem] leading-tight text-[#211914]">
          Galerie domu
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {gallery.map((image) => (
            <article
              className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-[#eadfd4] shadow-[0_18px_54px_-44px_rgba(79,55,35,0.28)]"
              key={image.src}
            >
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 200px"
                src={image.src}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-7 border-t border-[#b89a7c26] bg-[#faf7f3]/70 px-7 py-10 sm:px-10 lg:grid-cols-[0.64fr_0.36fr]">
        <div>
          <h2 className="display-font text-[2.2rem] leading-tight text-[#211914]">
            Dostupnost domů
          </h2>

          <div className="mt-5 overflow-hidden rounded-[8px] border border-[#b89a7c1f] bg-white/58">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] px-5 py-3 text-xs text-[#6f5d4f]">
              <span>Dům</span>
              <span>Pozemek</span>
              <span>Stav</span>
            </div>
            {overview.houses.map((house, index) => (
              <div
                className={`grid grid-cols-[1.1fr_1fr_1fr] items-center px-5 py-3 text-sm ${
                  index % 2 === 0 ? "bg-[#f3eee8]" : "bg-white/42"
                }`}
                key={house.number}
              >
                <span className="font-semibold text-[#211914]">
                  Living {house.number}
                </span>
                <span className="text-[#2f2925]">{house.plot}</span>
                <span className="flex items-center gap-2 text-[#2f2925]">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      statusTone[house.statusTone]
                    }`}
                  />
                  {house.number === "1" ? "Dokončeno" : "Rezervace možná"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <article className="rounded-[10px] border border-[#b89a7c1f] bg-white/72 p-8 shadow-[0_20px_60px_-54px_rgba(79,55,35,0.22)]">
          <div className="relative h-12 w-24">
            <Image
              alt=""
              className="object-contain object-left"
              fill
              sizes="96px"
              src="/log-tight.png"
            />
          </div>
          <h2 className="display-font mt-6 text-[2rem] leading-tight text-[#211914]">
            Klidné bydlení pod Beskydami
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-[#2f2925]">
            Šest samostatných domů na velkorysých pozemcích v klidné části
            Stříteže. Místo, kde se snoubí příroda, prostor a moderní
            architektura.
          </p>
          <Link
            className="mt-7 inline-flex rounded-[6px] bg-[#7b4d2f] px-6 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#6d4329]"
            href="/projekt"
          >
            Zjistit více o projektu
          </Link>
        </article>
      </section>

      <section className="grid gap-6 border-t border-[#b89a7c26] px-7 py-8 sm:px-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="display-font text-[2rem] leading-tight text-[#211914]">
            Máte zájem o Living 1 nebo více informací?
          </h2>
          <p className="mt-2 text-[15px] text-[#2f2925]">
            Rádi vám projekt představíme osobně.
          </p>
        </div>
        <a
          className="inline-flex rounded-[6px] border border-[#7b4d2f33] bg-white/72 px-5 py-3 text-sm font-semibold text-[#211914] transition hover:bg-white"
          href={`mailto:${stritezLiving.cta.email}`}
        >
          {stritezLiving.cta.email}
        </a>
      </section>
      </div>

      <SiteFooter
        brand={stritezLiving.brand}
        contactEmail={stritezLiving.cta.email}
        currentYear={currentYear}
        footer={stritezLiving.footer}
        languages={stritezLiving.languages}
        navigation={stritezLiving.navigation}
        specialists={stritezLiving.specialists}
      />
    </PageShell>
  );
}
