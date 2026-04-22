import type { Metadata } from "next";
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
  "hypotéka na koupi rodinného domu",
  "refinancování stávající hypotéky",
  "účelové úvěry na bydlení a stavební spoření",
  "základní orientace v možnostech a dalším postupu",
] as const;

const currentYear = new Date().getFullYear();

export default function FinancingPage() {
  const page = stritezLiving.pages.financing;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <PageHero
        eyebrow={page.hero.eyebrow}
        intro="Pokud budete koupi domu řešit přes hypotéku nebo jiné financování bydlení, propojíme vás s ověřenými specialistkami, které s vámi projdou základní možnosti."
        title="Jednoduché financování bez zbytečné složitosti"
        primaryCta={{ kind: "dialog", label: "Nezávazná konzultace" }}
        secondaryCta={{ href: "#specialistky", label: "Kontakt na specialistky" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Jen to podstatné"
          title="Na začátku stačí vědět, jestli je pro vás vybraný dům rozpočtově reálný."
          text="Pro první orientaci je nejdůležitější potvrdit si základní možnosti financování, vlastní zdroje a další reálný krok."
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
              S čím vám mohou pomoci
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
          eyebrow="Finanční specialistky"
          title="Spolupracujeme s ověřeným týmem CHP Finance v Třinci."
          text="Pro základní orientaci i konkrétní financování domu se můžete obrátit přímo na ně."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {specialists.map((specialist) => (
            <InfoCard key={specialist.email} className="bg-white/82">
              <div className="relative mb-5 overflow-hidden rounded-[24px] border border-[#b89a7c1f] bg-[#f7efe5]">
                <img
                  alt={specialist.name}
                  className="aspect-[4/3] w-full object-contain object-top"
                  loading="lazy"
                  src={specialist.photo}
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
          title="Pokud vás zajímá konkrétní dům, navážeme individuálně podle vaší situace."
          text="Na začátku stačí nezávazná konzultace. Konkrétní řešení se potom doladí podle vybraného domu a vašich možností."
        />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <InquiryDialogTrigger className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]">
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
