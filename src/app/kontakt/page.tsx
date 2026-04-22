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
  title: "Kontakt | Střítež Living",
  description:
    "Kontakt pro projekt Střítež Living, aktuální nabídku domů i základní orientaci v dalším postupu.",
};

const currentYear = new Date().getFullYear();

const nextSteps = [
  {
    title: "Aktuální nabídka",
    text: "Pošleme vám přehled aktuálně dostupných domů a základní orientaci v cenách.",
  },
  {
    title: "Výběr vhodného domu",
    text: "Společně projdeme, který dům a pozemek pro vás dávají největší smysl.",
  },
  {
    title: "Další postup",
    text: "Pokud budete chtít pokračovat, navážeme rezervací, financováním a dalšími kroky.",
  },
] as const;

export default function ContactPage() {
  const page = stritezLiving.pages.contact;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <PageHero
        eyebrow={page.hero.eyebrow}
        intro="Pokud vás projekt zaujal, napište nám. Rádi vám pošleme aktuální nabídku domů, základní cenovou orientaci i další informace k postupu."
        title="Kontakt pro aktuální nabídku domů i další informace"
        primaryCta={{ href: `mailto:${stritezLiving.cta.email}`, label: "Napsat e-mail" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Kontakt"
          title="Ozvěte se nám a připravíme pro vás základní přehled nabídky."
          text="První kontakt chceme držet jednoduše. Stačí krátká zpráva a navážeme podle toho, co právě potřebujete vědět."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <InfoCard className="bg-white/82 lg:col-span-2">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
              Prodej projektu
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#3f3125]">
              Střítež Living
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#7d6a59]">
              Pro informace k dostupnosti domů, cenám, lokalitě i dalšímu postupu
              nám můžete napsat na e-mail:
            </p>
            <a
              className="mt-5 inline-flex text-lg font-semibold text-[#3f3125]"
              href={`mailto:${stritezLiving.cta.email}`}
            >
              {stritezLiving.cta.email}
            </a>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <InquiryDialogTrigger className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]">
                Otevřít poptávku
              </InquiryDialogTrigger>
              <Link
                className="rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125]"
                href="/financovani"
              >
                Zobrazit financování
              </Link>
            </div>
          </InfoCard>

          <InfoCard className="bg-[#f7efe5]">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
              Společnost
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#3f3125]">
              MD Hradiště s.r.o.
            </h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-[#7d6a59]">
              <p>
                <span className="font-semibold text-[#3f3125]">IČ:</span> 10963863
              </p>
              <p>
                Projekt Střítež Living je prezentován pod touto společností.
              </p>
            </div>
          </InfoCard>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Jak to probíhá"
          title="Po prvním kontaktu navážeme stručně a konkrétně."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {nextSteps.map((item) => (
            <InfoCard key={item.title} className="bg-white/82">
              <h3 className="text-2xl font-semibold text-[#3f3125]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#7d6a59]">{item.text}</p>
            </InfoCard>
          ))}
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
