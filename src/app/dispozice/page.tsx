import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Dispozice | Střítež Living",
  description:
    "Podrobný přehled dispozice domu, ploch místností a hlavních provozních zón v projektu Střítež Living.",
};

const currentYear = new Date().getFullYear();

export default function LayoutPage() {
  const page = stritezLiving.pages.layout;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <PageHero
        eyebrow={page.hero.eyebrow}
        intro={page.hero.intro}
        title={page.hero.title}
        primaryCta={{ href: "/dum-1", label: "Zpět na detail domu" }}
        secondaryCta={{ href: "/kontakt", label: "Zeptat se na dispozici" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 p-6 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Půdorys"
              title="Orientační plán domu s důrazem na čitelnost a provozní logiku."
              text="Landing page drží dispozici spíš jako rychlý přehled. Tady je prostor ukázat ji jako skutečný argument pro rozhodování."
            />

            <div className="mt-8 overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-4 shadow-[0_28px_90px_-60px_rgba(36,58,88,0.2)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                <Image
                  alt={balkerH114.plan.alt}
                  className="object-contain"
                  fill
                  priority
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
                {page.notes.map((item) => (
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
          text="Místo pouhé tabulky jsme přidali i vysvětlení, jak jednotlivé části domu fungují dohromady."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {page.zones.map((zone) => (
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
