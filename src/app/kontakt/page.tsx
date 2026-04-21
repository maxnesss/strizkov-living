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
    "Kontakt pro projekt Střítež Living, první konzultaci, dotazy k domu, lokalitě i možnostem financování.",
};

const currentYear = new Date().getFullYear();

export default function ContactPage() {
  const page = stritezLiving.pages.contact;

  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <PageHero
        eyebrow={page.hero.eyebrow}
        intro={page.hero.intro}
        title={page.hero.title}
        primaryCta={{ href: `mailto:${stritezLiving.cta.email}`, label: "Napsat e-mail" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Dostupné domy a další postup"
              title="Pomůžeme vám rychle potvrdit správný dům, cenu i další krok."
              text="Pokud už máte vybraný dům nebo chcete projít aktuálně dostupné varianty, připravíme pro vás přehled nabídky, základní cenovou orientaci i navazující postup od rezervace po financování."
            />

            <div className="mt-8 grid gap-3">
              {page.reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#5885b626] bg-[#f8fbff] px-5 py-5 text-sm leading-7 text-[#5d7691]"
                >
                  <p className="font-semibold text-[#153252]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <InfoCard className="bg-white/82">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
              První krok
            </p>
            <InquiryDialogTrigger className="mt-6 inline-flex w-full justify-center rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)]">
              Otevřít poptávku
            </InquiryDialogTrigger>
            <p className="mt-4 text-sm leading-7 text-[#5d7691]">
              Pokud je pro vás pohodlnější e-mail, můžete psát také na{" "}
              <a className="font-semibold text-[#153252]" href={`mailto:${stritezLiving.cta.email}`}>
                {stritezLiving.cta.email}
              </a>
              . Odpovíme s přehledem nabídky i návrhem dalšího postupu.
            </p>
          </InfoCard>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Jak bude postup vypadat"
          title="Jednoduchý proces od prvního dotazu po rezervaci a financování."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {page.expectations.map((item) => (
            <InfoCard key={item.title}>
              <h3 className="text-2xl font-semibold text-[#153252]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{item.text}</p>
            </InfoCard>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <InquiryDialogTrigger className="rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)]">
            Poslat poptávku
          </InquiryDialogTrigger>
          <Link
            className="rounded-full border border-[#5885b62e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#153252]"
            href="/financovani"
          >
            Zobrazit financování
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
