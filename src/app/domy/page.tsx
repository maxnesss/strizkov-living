import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  title: "Domy | Střítež Living",
  description:
    "Podrobná prezentace typového domu a standardu rodinných domů v projektu Střítež Living.",
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
          <MetricCard
            label="užitná plocha typového domu"
            value={stritezLiving.featuredHouse.area}
          />
          <MetricCard label="orientační velikost pozemku" value={stritezLiving.featuredHouse.plot} />
          <MetricCard label="dispozice" value={stritezLiving.featuredHouse.disposition} />
          <MetricCard label="cena od" value={stritezLiving.featuredHouse.price} />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 p-6 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Atmosféra domů"
              title={stritezLiving.featuredHouse.title}
              text={stritezLiving.featuredHouse.layoutSummary}
            />

            <div className="mt-6 relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(36,58,88,0.35)]">
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
              <div className="space-y-4 text-base leading-8 text-[#5d7691]">
                {stritezLiving.featuredHouse.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  Tato stránka ukazuje standard a charakter domů v projektu. Jednotlivé
                  domy se budou lišit hlavně konkrétním osazením na pozemku, orientací a
                  detaily nabídky, ale základní kvalita bydlení zůstává společná.
                </p>
              </div>
            </InfoCard>

            <InfoCard className="bg-white/82">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                Hlavní přednosti domů
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
          eyebrow="Jak se v domech bydlí"
          title="Domy navržené pro klidný každodenní rytmus."
          text="Všechny domy v projektu vycházejí ze stejného typového řešení. Při výběru tak hraje hlavní roli pozemek, poloha domu v projektu a orientace v rámci lokality."
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

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 p-6 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur lg:p-8"
        id="dispozice"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Dispozice a plochy"
              title="Orientační půdorys domu s důrazem na čitelnost a provozní logiku."
              text="Půdorys ukazuje společný základ celé nabídky a pomáhá rychle pochopit, jak je dům rozdělený a jak funguje v každodenním provozu."
            />

            <div className="mt-8 overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-4 shadow-[0_28px_90px_-60px_rgba(36,58,88,0.2)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                <Image
                  alt={balkerH114.plan.alt}
                  className="object-contain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  src={balkerH114.plan.src}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <InfoCard>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                Souhrn ploch
              </p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-[22px] border border-[#5885b61f] bg-white/88 px-4 py-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
                    obytná část
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#153252]">
                    {balkerH114.totals.livingPart}
                  </p>
                </div>
                <div className="rounded-[22px] border border-[#5885b61f] bg-white/88 px-4 py-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
                    technická část
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#153252]">
                    {balkerH114.totals.utilityPart}
                  </p>
                </div>
                <div className="rounded-[22px] border border-[#5885b61f] bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-4 py-4 text-white">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/70">
                    celkem
                  </p>
                  <p className="mt-2 text-2xl font-semibold">{balkerH114.totals.total}</p>
                </div>
              </div>
            </InfoCard>

            <InfoCard className="bg-white/82">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                Poznámka
              </p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[#5d7691]">
                {stritezLiving.pages.layout.notes.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Zóny domu"
          title="Promyšlené rozdělení denní, klidové a servisní části."
          text="Dobře čitelné rozdělení domu pomáhá tomu, aby obytná část působila otevřeně, zatímco ložnice a zázemí si zachovávají potřebný klid."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {stritezLiving.pages.layout.zones.map((zone) => (
            <InfoCard key={zone.title}>
              <h3 className="text-2xl font-semibold text-[#153252]">{zone.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{zone.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] overflow-x-auto rounded-[34px] border border-[#5885b626] bg-white/72 px-4 py-6 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-6">
        <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm text-[#54708d]">
          <thead>
            <tr className="text-xs uppercase tracking-[0.18em] text-[#6d8cb0]">
              <th className="pb-2 pl-4 pr-4">Symbol</th>
              <th className="pb-2 pr-4">Místnost</th>
              <th className="pb-2 pr-4">Plocha podlah</th>
              <th className="pb-2 pr-4">Užitná plocha</th>
            </tr>
          </thead>
          <tbody>
            {balkerH114.roomSchedule.map((room) => (
              <tr key={room.symbol} className="rounded-2xl bg-[#f7fbff]">
                <td className="rounded-l-2xl px-4 py-3 font-semibold text-[#153252]">
                  {room.symbol}
                </td>
                <td className="px-4 py-3">{room.room}</td>
                <td className="px-4 py-3">{room.floorArea}</td>
                <td className="rounded-r-2xl px-4 py-3">{room.usableArea}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              Galerie domů
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              Výběr vizualizací a atmosférických pohledů.
            </h2>
          </div>

          <Link
            className="hidden rounded-full border border-[#5885b62e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#153252] sm:inline-flex"
            href="/galerie"
          >
            Otevřít galerii
          </Link>
        </div>

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

        <Link
          className="mt-6 inline-flex rounded-full border border-[#5885b62e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#153252] sm:hidden"
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
