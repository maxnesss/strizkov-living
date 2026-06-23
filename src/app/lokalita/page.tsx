import type { Metadata } from "next";
import Image from "next/image";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { PageShell } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Lokalita | Střítež Living",
  description:
    "Klidné bydlení s výhledem na Beskydy ve Stříteži, s rychlou dostupností do Třince, Českého Těšína, Frýdku-Místku i Ostravy.",
};

const currentYear = new Date().getFullYear();

const localityReasons = [
  {
    icon: "⌁",
    title: "Výhledy na Beskydy",
    text: "Otevřená krajina a výhledy, které zůstávají součástí každého dne.",
  },
  {
    icon: "♧",
    title: "Klid a soukromí",
    text: "Domy jsou umístěny tak, aby nabízely dostatek prostoru a soukromí.",
  },
  {
    icon: "▭",
    title: "Město na dosah",
    text: "Třinec, Český Těšín, Frýdek-Místek i Ostrava během několika minut.",
  },
] as const;

const driveTimes = [
  { destination: "Třinec", time: "5 min" },
  { destination: "Český Těšín", time: "10 min" },
  { destination: "Frýdek-Místek", time: "15 min" },
  { destination: "Ostrava", time: "20 min" },
] as const;

const mapPoints = [
  { label: "Ostrava", offset: "left-[13%] top-[18%]", active: false },
  { label: "Frýdek-Místek", offset: "left-[39%] top-[48%]", active: false },
  { label: "Třinec", offset: "left-[75%] top-[52%]", active: false },
  { label: "Střítež", offset: "left-[66%] top-[72%]", active: true },
  { label: "Český Těšín", offset: "left-[88%] top-[82%]", active: false },
] as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[#c8a17c]">
      {children}
    </p>
  );
}

export default function LocalityPage() {
  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[38px] border border-[#b89a7c26] bg-white/64 shadow-[0_42px_120px_-84px_rgba(98,69,45,0.3)] backdrop-blur">
      <section className="relative min-h-[590px] overflow-hidden bg-[#211914]">
        <Image
          alt="Výhled na beskydskou krajinu v okolí Stříteže"
          className="object-cover object-center"
          fill
          loading="eager"
          preload
          sizes="(max-width: 1280px) 100vw, 1240px"
          src="/images/locality/lokalita-hero.webp"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,17,14,0.9)_0%,rgba(18,17,14,0.66)_36%,rgba(18,17,14,0.22)_68%,rgba(18,17,14,0.02)_100%)]" />

        <div className="relative flex min-h-[590px] max-w-[610px] flex-col justify-center px-7 py-14 text-white sm:px-12 lg:px-16">
          <Eyebrow>Lokalita</Eyebrow>
          <h1 className="display-font mt-6 text-5xl leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-[4.7rem]">
            Klidné bydlení s výhledem na Beskydy
          </h1>
          <p className="mt-7 max-w-[32rem] text-base leading-8 text-white/92 sm:text-lg">
            Střítež nabízí ideální rovnováhu mezi klidem přírody a každodenní
            dostupností města.
          </p>
          <InquiryDialogTrigger
            className="mt-8 inline-flex w-fit rounded-[10px] bg-[#9a6a42] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white shadow-[0_18px_42px_-26px_rgba(0,0,0,0.45)] transition hover:bg-[#875a38]"
            intent="locality_viewing"
          >
            Domluvit si prohlídku lokality
          </InquiryDialogTrigger>
        </div>
      </section>

      <section className="border-t border-[#b89a7c26] px-7 py-11 sm:px-10">
        <div className="text-center">
          <h2 className="display-font text-4xl leading-tight tracking-[-0.05em] text-[#211914] sm:text-5xl">
            Proč právě Střítež
          </h2>
          <div className="mx-auto mt-5 h-px w-12 bg-[#9a6a42]" />
        </div>

        <div className="mt-9 grid gap-7 md:grid-cols-3 md:divide-x md:divide-[#b89a7c26]">
          {localityReasons.map((item) => (
            <article className="px-6 text-center" key={item.title}>
              <p className="text-6xl leading-none text-[#9a6a42]">{item.icon}</p>
              <h3 className="mt-6 text-2xl font-semibold text-[#211914]">
                {item.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[15rem] text-base leading-7 text-[#211914]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#b89a7c26] bg-[#faf7f3]/70 px-7 py-11 sm:px-10">
        <div className="text-center">
          <h2 className="display-font text-4xl leading-tight tracking-[-0.05em] text-[#211914] sm:text-5xl">
            Vše důležité v dosahu
          </h2>
          <div className="mx-auto mt-5 h-px w-12 bg-[#9a6a42]" />
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1.45fr_0.95fr] lg:items-stretch">
          <div className="relative min-h-[320px] overflow-hidden rounded-[12px] bg-[#e9ded2]">
            <Image
              alt="Beskydská krajina v okolí Stříteže"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 660px"
              src="/images/locality/lokalita-poloha.webp"
            />
          </div>

          <div className="grid gap-4">
            {driveTimes.map((item) => (
              <article
                className="flex items-center justify-between gap-5 rounded-[8px] bg-white/70 px-7 py-5 shadow-[0_18px_60px_-54px_rgba(98,69,45,0.2)]"
                key={item.destination}
              >
                <div className="flex items-center gap-5">
                  <span className="text-4xl leading-none text-[#9a6a42]">⌖</span>
                  <h3 className="text-xl font-semibold text-[#211914]">
                    {item.destination}
                  </h3>
                </div>
                <p className="text-xl font-semibold text-[#8e5d38]">{item.time}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#b89a7c26] px-7 py-11 sm:px-10">
        <div className="text-center">
          <h2 className="display-font text-4xl leading-tight tracking-[-0.05em] text-[#211914] sm:text-5xl">
            Místo zasazené mezi města a krajinu
          </h2>
          <div className="mx-auto mt-5 h-px w-12 bg-[#9a6a42]" />
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[12px] bg-white/72 shadow-[0_24px_80px_-72px_rgba(98,69,45,0.28)] lg:grid-cols-[1.45fr_0.95fr]">
          <div className="relative min-h-[320px] overflow-hidden bg-[#e6eadc]">
            <Image
              alt="Mapa okolních měst a polohy Stříteže"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 660px"
              src="/images/locality/lokalita-poloha.webp"
            />
            <div className="absolute inset-0 bg-white/10" />
            {mapPoints.map((point) => (
              <div
                className={`absolute ${point.offset} -translate-x-1/2 -translate-y-1/2`}
                key={point.label}
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-white shadow-[0_10px_24px_-16px_rgba(0,0,0,0.45)] ${
                      point.active ? "bg-[#9a6a42]" : "bg-[#8e5d38]"
                    }`}
                  >
                    ●
                  </span>
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-sm font-semibold text-[#211914] shadow-sm">
                    {point.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <article className="flex flex-col justify-center bg-white/76 px-8 py-9">
            <h3 className="display-font text-5xl leading-tight tracking-[-0.05em] text-[#211914]">
              Střítež
            </h3>
            <p className="mt-6 max-w-sm text-base leading-8 text-[#211914]">
              Samostatná obec v podhůří Beskyd, která spojuje klidné bydlení s
              výhledy do krajiny a výbornou dostupností okolních měst.
            </p>
            <a
              className="mt-8 inline-flex w-fit rounded-[8px] bg-[#9a6a42] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white shadow-[0_18px_42px_-26px_rgba(0,0,0,0.3)] transition hover:bg-[#875a38]"
              href={stritezLiving.locality.map.link}
              rel="noreferrer"
              target="_blank"
            >
              Otevřít v mapách
            </a>
          </article>
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
