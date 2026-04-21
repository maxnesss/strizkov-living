import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

const currentYear = new Date().getFullYear();

export default function NotFound() {
  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <section className="mx-auto max-w-[1240px] overflow-hidden rounded-[36px] border border-[#5885b633] bg-white/70 px-6 pb-10 pt-10 shadow-[0_40px_120px_-84px_rgba(46,86,130,0.5)] backdrop-blur-[18px] sm:px-8 lg:px-[34px] lg:pb-12 lg:pt-12">
        <div className="inline-flex rounded-full border border-[#5885b62e] bg-[#f8fbff] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
          404
        </div>

        <h1 className="display-font mt-6 max-w-4xl text-5xl leading-[0.94] tracking-[-0.05em] text-[#153252] sm:text-6xl lg:text-7xl">
          Tato stránka tu není.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5d7691] sm:text-[19px]">
          Možná byl odkaz změněný, stránka už neexistuje, nebo došlo k chybě v adrese.
          Zpět se můžete vrátit přes hlavní přehled projektu nebo některou z důležitých
          sekcí níže.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)] transition hover:brightness-105"
            href="/"
          >
            Zpět na úvod
          </Link>
          <Link
            className="rounded-full border border-[#5885b62e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#153252] transition hover:bg-white"
            href="/domy"
          >
            Prohlédnout domy
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { href: "/projekt", label: "Projekt", text: "Celkový koncept a charakter projektu." },
            { href: "/domy", label: "Domy", text: "Typový dům, dispozice a standard nabídky." },
            { href: "/galerie", label: "Galerie", text: "Vizualizace a atmosféra projektu." },
            { href: "/kontakt", label: "Kontakt", text: "Ozvěte se nám s dotazem nebo poptávkou." },
          ].map((item) => (
            <Link
              key={item.href}
              className="rounded-[24px] border border-[#5885b62e] bg-white/76 px-5 py-5 transition hover:bg-white"
              href={item.href}
            >
              <p className="text-[22px] font-semibold text-[#153252]">{item.label}</p>
              <p className="mt-2 text-sm leading-7 text-[#5d7691]">{item.text}</p>
            </Link>
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
