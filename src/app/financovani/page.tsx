import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import {
  InfoCard,
  PageHero,
  PageShell,
  SectionHeading,
} from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Financování | Střítež Living",
  description:
    "Základní informace k financování domu v projektu Střítež Living a kontakt na ověřené specialistky z CHP Finance v Třinci.",
};

const specialists = [
  {
    name: "Bc. Sabrina Donolatová",
    role: "specialistka na financování bydlení",
    phone: "+420 723 138 476",
    email: "sabrina.donolatova@chpfinance.cz",
    photo:
      "https://chpfinance.cz/wp-content/uploads/2021/12/Sabina-pro-web-CHP.png",
  },
  {
    name: "Alena Bornerová",
    role: "specialistka na financování bydlení",
    phone: "+420 733 154 914",
    email: "alena.bornerova@chpfinance.cz",
    photo:
      "https://chpfinance.cz/wp-content/uploads/2021/12/Alena-pro-web-CHP.png",
  },
] as const;

const basics = [
  "Hypotéka na nový dům",
  "Prodej stávající nemovitosti a návazné financování nového domu",
  "Refinancování a optimalizace financování",
  "Kombinace vlastních zdrojů a úvěru",
  "Návrh ideálního postupu",
] as const;

const currentYear = new Date().getFullYear();

export default function FinancingPage() {
  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <PageHero
        eyebrow="Financování"
        intro="Pomůžeme vám zorientovat se v možnostech financování a propojit vás ověřenými specialisty."
        title="Financování domu jednoduše a s jistotou"
        primaryCta={{ kind: "dialog", label: "Nezávazná konzultace", intent: "financing" }}
        secondaryCta={{ href: "#specialistky", label: "Kontakt na specialistky" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Jen to podstatné"
          title="Na začátku stačí zjistit, jestli je pro vás vybraný dům finančně reálný."
          text="Další kroky pak nastavíme podle vaší situace."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 text-base leading-8 text-[#7d6a59]">
            <p>
              Pokud vás některý z domů v projektu zaujal, propojíme vás s
              finančními specialistkami, které se věnují financování bydlení a
              pomohou vám s první orientací.
            </p>
            <p>
              Stačí základ: zjistit, jaké máte možnosti financování, co dává
              smysl řešit hned a co až ve chvíli, kdy budete mít vybraný
              konkrétní dům.
            </p>
            <p>
              Další postup se potom nastaví individuálně podle vaší situace a
              vybraného domu.
            </p>
          </div>

          <InfoCard>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
              Co s vámi vyřešíme
            </p>
            <div className="mt-4 grid gap-3">
              {basics.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-[#b89a7c1f] bg-white/88 px-4 py-4 text-sm leading-7 text-[#7d6a59]"
                >
                  <p className="font-semibold text-[#3f3125]">{item}</p>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8"
        id="specialistky"
      >
        <SectionHeading
          eyebrow="Specialistky"
          title="Pomohou vám ověřené specialistky na financování."
          text="Pro konkrétní řešení financování se můžete obrátit přímo na ně. Projdou s vámi možnosti a doporučí vhodný postup."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {specialists.map((specialist) => (
            <InfoCard key={specialist.email} className="bg-white/82">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[24px] border border-[#b89a7c1f] bg-[#f7efe5]">
                <Image
                  alt={specialist.name}
                  className="object-contain object-top"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={specialist.photo}
                  unoptimized
                />
              </div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
                CHP Finance Třinec
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#3f3125]">
                {specialist.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#7d6a59]">{specialist.role}</p>
              <div className="mt-5 space-y-2 text-sm leading-7 text-[#7d6a59]">
                <p>
                  Telefon:{" "}
                  <a className="font-semibold text-[#3f3125]" href={`tel:${specialist.phone}`}>
                    {specialist.phone}
                  </a>
                </p>
                <p>
                  E-mail:{" "}
                  <a
                    className="font-semibold text-[#3f3125]"
                    href={`mailto:${specialist.email}`}
                  >
                    {specialist.email}
                  </a>
                </p>
              </div>
              <div className="mt-6 rounded-[22px] border border-[#b89a7c1f] bg-[#f7efe5] p-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                  Napsat / zavolat
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex justify-center rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-4 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]"
                    href={`mailto:${specialist.email}`}
                  >
                    Napsat
                  </a>
                  <a
                    className="inline-flex justify-center rounded-full border border-[#b89a7c2e] bg-white/82 px-4 py-3 text-sm font-extrabold text-[#3f3125]"
                    href={`tel:${specialist.phone}`}
                  >
                    Zavolat
                  </a>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>

        <div className="mt-8">
          <InfoCard className="bg-[#f7efe5]">
            <p className="text-sm leading-8 text-[#7d6a59]">
              Více informací o týmu CHP Finance Třinec najdete také přímo na
              jejich profilu.
            </p>
            <a
              className="mt-5 inline-flex rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]"
              href="https://chpfinance.cz/trinec/"
              rel="noreferrer"
              target="_blank"
            >
              Otevřít CHP Finance Třinec
            </a>
          </InfoCard>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Další krok"
          title="Stačí nezávazná konzultace."
          text="Navrhneme konkrétní řešení podle vybraného domu a vašich možností."
        />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <InquiryDialogTrigger
            className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]"
            intent="financing"
          >
            Otevřít poptávku
          </InquiryDialogTrigger>
          <Link
            className="rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125]"
            href="/kontakt"
          >
            Zobrazit kontakt
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
