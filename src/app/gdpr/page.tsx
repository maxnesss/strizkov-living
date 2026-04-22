import type { Metadata } from "next";
import {
  InfoCard,
  PageHero,
  PageShell,
  SectionHeading,
} from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "GDPR | Střítež Living",
  description:
    "Informace o zpracování osobních údajů pro poptávky a komunikaci k projektu Střítež Living.",
};

const currentYear = new Date().getFullYear();

const gdprSections = [
  {
    title: "Jaké údaje zpracováváme",
    text: "Při odeslání poptávky můžeme zpracovávat vaše jméno, e-mail, telefon a obsah zprávy, kterou nám dobrovolně odešlete prostřednictvím formuláře nebo e-mailu.",
  },
  {
    title: "Za jakým účelem",
    text: "Osobní údaje zpracováváme za účelem vyřízení vaší poptávky, navázání komunikace k projektu Střítež Living a poskytnutí informací o dostupných domech, cenách, financování nebo dalších souvisejících krocích.",
  },
  {
    title: "Jak dlouho údaje uchováváme",
    text: "Údaje uchováváme pouze po dobu nezbytně nutnou k vyřízení poptávky a navazující komunikaci, případně po dobu vyplývající z našich zákonných povinností.",
  },
  {
    title: "Vaše práva",
    text: "Máte právo požadovat přístup ke svým osobním údajům, jejich opravu, omezení zpracování, výmaz nebo vznést námitku proti zpracování. V případě dotazů nás můžete kontaktovat na e-mailu uvedeném níže.",
  },
] as const;

export default function GdprPage() {
  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <PageHero
        eyebrow="GDPR"
        intro="Tato stránka shrnuje základní informace o tom, jak pracujeme s osobními údaji při poptávce k projektu Střítež Living."
        title="Informace o zpracování osobních údajů"
      />

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] backdrop-blur sm:px-8">
        <SectionHeading
          eyebrow="Základní přehled"
          title="Osobní údaje používáme pouze pro vyřízení vaší poptávky a navazující komunikaci."
          text="Pokud nás kontaktujete přes formulář nebo e-mail, zpracováváme jen údaje, které jsou potřebné k tomu, abychom vám mohli odpovědět a poskytnout informace k projektu."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {gdprSections.map((section) => (
            <InfoCard key={section.title}>
              <h2 className="text-2xl font-semibold text-[#3f3125]">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#7d6a59]">{section.text}</p>
            </InfoCard>
          ))}
        </div>

        <InfoCard className="mt-8 bg-white/82">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
            Kontaktní e-mail
          </p>
          <a
            className="mt-4 inline-flex rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]"
            href={`mailto:${stritezLiving.cta.email}`}
          >
            {stritezLiving.cta.email}
          </a>
        </InfoCard>
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
