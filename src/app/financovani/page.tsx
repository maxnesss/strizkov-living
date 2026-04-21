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
    "Podrobnější vysvětlení financování projektu Střítež Living, jednotlivých kroků a spolupráce s finančními specialistkami.",
};

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
        intro={page.hero.intro}
        title={page.hero.title}
        primaryCta={{ kind: "dialog", label: "Nezávazná konzultace" }}
        secondaryCta={{ href: "#postup", label: "Jak probíhá financování" }}
      />

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Jak financování chápeme"
          title="Nejde jen o hypotéku, ale o správné pořadí všech navazujících kroků."
          text="Největší jistotu dává financování tehdy, když od začátku víte, jak na sebe navazují výběr domu, rezervace, smluvní příprava, podklady pro banku i finální doplatek."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="space-y-4 text-base leading-8 text-[#5d7691]">
              {stritezLiving.financing.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {stritezLiving.financing.benefits.map((item) => (
                <article
                  key={item}
                  className="rounded-[22px] border border-[#5885b61f] bg-[#f8fbff] px-4 py-4 text-sm text-[#5d7691]"
                >
                  <p className="font-semibold text-[#153252]">{item}</p>
                </article>
              ))}
            </div>
          </div>

          <InfoCard>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
              S čím vám pomůžeme
            </p>
            <div className="mt-4 grid gap-3">
              {page.supportItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-[#5885b61f] bg-white/88 px-4 py-4 text-sm leading-7 text-[#5d7691]"
                >
                  <p className="font-semibold text-[#153252]">{item}</p>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {page.introCards.map((item) => (
            <InfoCard key={item.title} className="bg-white/82">
              <h3 className="text-2xl font-semibold text-[#153252]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Co si připravit"
          title="Pro první orientaci stačí několik základních informací."
          text="Není potřeba mít vše finálně rozhodnuté. Pomůže už jen to, když víte, který dům vás zajímá, v jakém rozpočtu se chcete pohybovat a kdy chcete koupi řešit."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {page.readiness.map((item) => (
            <InfoCard key={item} className="bg-white/82">
              <p className="text-sm leading-7 text-[#5d7691]">
                <span className="font-semibold text-[#153252]">{item}</span>
              </p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Možné scénáře"
          title="Různé výchozí situace, ale stále jeden srozumitelný postup."
          text="Každý klient přichází v jiné fázi rozhodování. Smyslem konzultace je rychle určit, co řešit teď, co může počkat a kdy dává smysl posunout se k rezervaci."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {page.scenarios.map((item) => (
            <InfoCard key={item.title}>
              <h3 className="text-2xl font-semibold text-[#153252]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8"
        id="postup"
      >
        <SectionHeading
          eyebrow="Postup financování"
          title="Od první orientace po převzetí domu bez zmatku v mezikrocích."
          text="Každá fáze má jiný úkol. Díky tomu je od začátku jasné, kdy se potvrzuje dům, kdy dává smysl rezervace a kdy se řeší banka, smlouvy a finální doplatek."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {page.timeline.map((step) => (
            <article
              key={step.phase}
              className="rounded-[28px] border border-[#5885b626] bg-[#f8fbff] p-6"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
                Fáze {step.phase}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#153252]">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Platební logika"
          title="Přehled vzniká tehdy, když víte, co se platí kdy a proč."
          text="Rozdělení koupě do praktických milníků pomáhá držet pod kontrolou rozpočet i další rozhodnutí. Klient pak přesněji ví, co se váže na rezervaci, smlouvy, případné změny i finální převzetí."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {page.paymentFlow.map((item) => (
            <InfoCard key={item.title} className="bg-white/82">
              <h3 className="text-2xl font-semibold text-[#153252]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d7691]">{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Podpora specialistů"
          title="Osobní vedení v části, kde se nejčastěji ztrácí jistota."
          text="Ověřené specialistky pomáhají nastavit financování tak, aby odpovídalo konkrétnímu domu, rozpočtu i pořadí dalších kroků celé koupě."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <InfoCard>
            <div className="space-y-3">
              {stritezLiving.financing.specialists.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-[#5885b61f] bg-white/88 px-4 py-4"
                >
                  <p className="font-semibold text-[#153252]">{item}</p>
                </div>
              ))}
            </div>
          </InfoCard>

          <div className="grid gap-4">
            {page.detailCards.map((item) => (
              <InfoCard key={item.title} className="bg-white/82">
                <h3 className="text-xl font-semibold text-[#153252]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d7691]">{item.text}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Časté otázky"
          title="První odpovědi ještě před tím, než si vyberete další krok."
        />

        <div className="mt-8 grid gap-4">
          {page.faq.map((item) => (
            <InfoCard key={item.question} className="bg-white/82">
              <h3 className="text-xl font-semibold text-[#153252]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5d7691]">{item.answer}</p>
            </InfoCard>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <InquiryDialogTrigger className="rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)]">
            Otevřít poptávku
          </InquiryDialogTrigger>
          <Link
            className="rounded-full border border-[#5885b62e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#153252]"
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
