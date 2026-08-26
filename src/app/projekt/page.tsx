import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { PageShell } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Projekt | Střítež Living",
  description:
    "Střítež Living je místo pro klidné bydlení pod Beskydami. Šest rodinných domů na velkorysých pozemcích v klidné části Stříteže.",
};

const currentYear = new Date().getFullYear();

const statusStyles = {
  construction: "bg-[#5f8d5a]",
  preparation: "bg-[#a88362]",
} as const;

const projectStats = [
  { icon: "house", value: "6 domů", label: "komorní projekt" },
  { icon: "plot", value: "velkorysé pozemky", label: "prostor a soukromí" },
  { icon: "road", value: "3 min na D48", label: "rychlá dostupnost" },
  { icon: "mountains", value: "výhledy na Beskydy", label: "otevřená krajina" },
] as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
      {children}
    </p>
  );
}

function ProjectStatIcon({
  type,
  className = "",
}: {
  type: "house" | "plot" | "road" | "mountains";
  className?: string;
}) {
  const sharedProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 48 48",
    "aria-hidden": true,
  };

  if (type === "house") {
    return (
      <svg {...sharedProps}>
        <path d="M9 25 24 13l15 12" />
        <path d="M14 23v16h20V23" />
        <path d="M21 39V29h6v10" />
      </svg>
    );
  }

  if (type === "plot") {
    return (
      <svg {...sharedProps}>
        <path d="M13 13h22v22H13z" />
        <path d="M9 13h4V9" />
        <path d="M35 9v4h4" />
        <path d="M39 35h-4v4" />
        <path d="M13 39v-4H9" />
        <path d="M18 24h12" />
        <path d="M24 18v12" />
      </svg>
    );
  }

  if (type === "road") {
    return (
      <svg {...sharedProps}>
        <path d="M17 39 22 9" />
        <path d="M31 39 26 9" />
        <path d="M24 15v4" />
        <path d="M24 25v5" />
        <path d="M24 36v3" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path d="M5 36h38" />
      <path d="m8 36 12-22 9 15" />
      <path d="m23 36 9-18 11 18" />
      <path d="m17 20 4 4 3-3" />
    </svg>
  );
}

export default function ProjectPage() {
  const overview = stritezLiving.houseOverview;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[38px] border border-[#b89a7c26] bg-white/64 shadow-[0_42px_120px_-84px_rgba(98,69,45,0.3)] backdrop-blur">
        <section className="relative min-h-[590px] overflow-hidden">
          <Image
            alt="Šest rodinných domů ve Stříteži s výhledem na Beskydy"
            className="object-cover object-center"
            fill
            loading="eager"
            sizes="(max-width: 1280px) 100vw, 1240px"
            src="/images/project/project-hero-six-houses.png"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,246,241,0.98)_0%,rgba(250,246,241,0.92)_38%,rgba(250,246,241,0.36)_70%,rgba(250,246,241,0.06)_100%)]" />

          <div className="relative flex min-h-[590px] max-w-[690px] flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
            <Eyebrow>Projekt Střítež Living</Eyebrow>
            <h1 className="display-font mt-6 text-5xl leading-[0.94] tracking-[-0.055em] text-[#3f3125] sm:text-6xl lg:text-[4.6rem]">
              Místo pro klidné bydlení pod Beskydami
            </h1>
            <div className="mt-7 h-px w-12 bg-[#a88362]" />
            <p className="mt-6 max-w-xl text-base leading-8 text-[#655447]">
              Pouze šest rodinných domů na velkorysých pozemcích v klidné části
              Stříteže. Soukromí, otevřené výhledy a moderní architektura v
              harmonii s okolní krajinou.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="rounded-[12px] bg-[linear-gradient(135deg,#8e6748,#b68d68)] px-6 py-3.5 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-white"
                href="/domy"
              >
                Zobrazit dostupné domy
              </Link>
              <InquiryDialogTrigger className="rounded-[12px] border border-[#8e6748] bg-white/62 px-6 py-3.5 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-[#594536]">
                Mám zájem o dům
              </InquiryDialogTrigger>
            </div>
          </div>
        </section>

        <section className="grid border-t border-[#b89a7c26] bg-white/76 sm:grid-cols-2 lg:grid-cols-4">
          {projectStats.map((item) => (
            <article
              className="flex min-h-32 items-center gap-4 border-b border-[#b89a7c26] px-7 py-6 last:border-b-0 sm:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:last:border-r-0"
              key={item.value}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-[#b89a7c30] bg-[#f7efe5]/80 text-2xl leading-none text-[#8e6748]">
                <ProjectStatIcon className="h-6 w-6" type={item.icon} />
              </span>
              <div>
                <p className="text-base font-semibold leading-snug text-[#3f3125]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-[#8d7460]">
                  {item.label}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-8 border-t border-[#b89a7c26] px-7 py-11 sm:px-10 lg:grid-cols-[1.28fr_0.72fr]">
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Situace projektu</Eyebrow>
                <h2 className="display-font mt-5 text-4xl leading-[1.03] tracking-[-0.05em] sm:text-5xl">
                  Situace projektu
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-7 text-[#7d6a59]">
                Šest domů je rozmístěno na velkorysých pozemcích tak, aby
                vznikl dostatek prostoru pro soukromí, zahradu i výhledy do okolí.
              </p>
            </div>

            <div className="relative mt-7 aspect-[16/9] overflow-hidden rounded-[24px] bg-[#efe4d8]">
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
                  <div className="flex flex-col items-center gap-2" key={house.number}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a88362] text-sm font-bold text-white shadow-[0_12px_28px_-16px_rgba(0,0,0,0.6)]">
                      {house.number}
                    </span>
                    <span className="hidden rounded-full bg-white/88 px-2.5 py-1 text-[11px] font-bold text-[#3f3125] shadow-sm md:inline">
                      Living {house.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#b89a7c26] pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <Eyebrow>Dostupnost</Eyebrow>
            <h2 className="display-font mt-5 text-4xl leading-[1.03] tracking-[-0.05em]">
              Přehled domů
            </h2>

            <div className="mt-6 divide-y divide-[#b89a7c26]">
              {overview.houses.map((house) => (
                <Link
                  className="grid grid-cols-[1fr_auto] gap-4 py-3.5 text-sm transition hover:text-[#8f6d4c]"
                  href="/domy"
                  key={house.number}
                >
                  <div>
                    <p className="font-semibold text-[#3f3125]">
                      Living {house.number}
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

            <p className="mt-5 text-xs leading-6 text-[#9b7d65]">
              Velikosti pozemků jsou orientační.
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-[#b89a7c26] bg-[#faf7f3]/70 px-7 py-10 sm:px-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
          <div>
            <Eyebrow>Proč právě Střítež Living</Eyebrow>
            <h2 className="display-font mt-5 text-4xl leading-[1.03] tracking-[-0.05em] sm:text-5xl">
              Proč právě Střítež Living
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#7d6a59]">
              Projekt spojuje soukromí, přírodu a dobrou dostupnost. Každý dům
              pracuje s výhledy, velkorysým pozemkem a klidným měřítkem celé
              zástavby.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Výhledy na Beskydy",
                text: "Každý dům pracuje s otevřenými výhledy do okolní krajiny.",
              },
              {
                title: "Velkorysé pozemky",
                text: "Velkorysé pozemky poskytují dostatek prostoru i soukromí.",
              },
              {
                title: "Pouze šest domů",
                text: "Komorní zástavba vytváří klidné prostředí bez husté výstavby.",
              },
              {
                title: "Výborná dostupnost",
                text: "Rychlé spojení na D48 a do Frýdku-Místku, Třince i Ostravy.",
              },
            ].map((item, index) => (
              <article className="flex gap-4" key={item.title}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b89a7c4d] text-xs font-bold text-[#a88362]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#3f3125]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#7d6a59]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative grid gap-8 border-t border-[#b89a7c26] bg-[#f7efe5]/64 px-7 py-10 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>Vyberte si své místo</Eyebrow>
            <h2 className="display-font mt-5 max-w-xl text-4xl leading-tight tracking-[-0.05em] sm:text-5xl">
              Vyberte si své místo pod Beskydami
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#7d6a59]">
              Living 1 a Living 2 jsou ve výstavbě. Living 3 až Living 6 jsou
              v přípravě podle aktuálního pořadí realizace.
            </p>
            <Link
              className="mt-6 inline-flex rounded-[10px] bg-[#8e6748] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.13em] text-white"
              href="/domy"
            >
              Zobrazit dostupné domy
            </Link>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[24px]">
            <Image
              alt="Rodinný dům ve Stříteži s výhledem na Beskydy"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              src="/images/d115/gallery/d115-02.jpg"
            />
          </div>
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
