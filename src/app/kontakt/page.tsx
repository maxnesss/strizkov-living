import type { Metadata } from "next";
import Image from "next/image";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { PageShell } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Kontakt | Střítež Living",
  description:
    "Domluvte si prohlídku projektu Střítež Living. Kontakt pro dostupnost domů, rezervaci, financování i další postup.",
};

const currentYear = new Date().getFullYear();

const specialistDetails = [
  {
    bullets: [
      "dostupnost domů",
      "výběr vhodného domu a pozemku",
      "rezervace",
      "informace o projektu",
    ],
  },
  {
    bullets: [
      "financování koupě",
      "smluvní dokumentace",
      "administrativní servis",
      "individuální konzultace",
    ],
  },
] as const;

const helpItems = [
  {
    icon: "⌂",
    title: "Aktuální dostupnost domů",
    text: "Zjistíte, které domy a pozemky jsou aktuálně volné nebo k rezervaci.",
  },
  {
    icon: "▦",
    title: "Rezervace domu",
    text: "Provedeme vás procesem rezervace a vysvětlíme další postup.",
  },
  {
    icon: "▱",
    title: "Možnosti financování",
    text: "Pomůžeme vám zorientovat se v možnostech financování koupě domu.",
  },
  {
    icon: "☷",
    title: "Standard a vybavení domů",
    text: "Poskytneme detailní informace o standardu, technologiích a výbavě domu.",
  },
] as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#b99372]">
      {children}
    </p>
  );
}

export default function ContactPage() {
  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[38px] border border-[#b89a7c26] bg-white/64 shadow-[0_42px_120px_-84px_rgba(98,69,45,0.3)] backdrop-blur">
      <section className="relative min-h-[590px] overflow-hidden bg-[#211914]">
        <Image
          alt="Rodinný dům Střítež Living při západu slunce"
          className="object-cover object-center lg:object-[68%_center]"
          fill
          loading="eager"
          preload
          sizes="(max-width: 1280px) 100vw, 1240px"
          src="/images/d115/d115-hero.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,17,14,0.94)_0%,rgba(18,17,14,0.78)_36%,rgba(18,17,14,0.28)_68%,rgba(18,17,14,0.04)_100%)]" />

        <div className="relative flex min-h-[590px] max-w-[620px] flex-col justify-center px-7 py-14 text-white sm:px-12 lg:px-16">
          <Eyebrow>Kontakt</Eyebrow>
          <h1 className="display-font mt-6 text-5xl leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-[4.7rem]">
            Domluvte si prohlídku
          </h1>
          <p className="mt-7 max-w-[32rem] text-base leading-8 text-white/92 sm:text-lg">
            Máte zájem o dům nebo celý projekt Střítež Living?
          </p>
          <p className="mt-3 max-w-[35rem] text-base leading-8 text-white/92 sm:text-lg">
            Rádi vám představíme dostupné domy, možnosti financování i další
            postup.
          </p>
          <InquiryDialogTrigger
            className="mt-8 inline-flex w-fit rounded-[10px] bg-[#9a6a42] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white shadow-[0_18px_42px_-26px_rgba(0,0,0,0.45)] transition hover:bg-[#875a38]"
            intent="house_viewing"
          >
            Chci konzultaci k projektu
          </InquiryDialogTrigger>
        </div>
      </section>

      <section className="grid gap-7 border-t border-[#b89a7c26] px-7 py-10 sm:px-10 lg:grid-cols-2">
        {stritezLiving.specialists.map((specialist, index) => (
          <article
            className="grid overflow-hidden rounded-[18px] border border-[#b89a7c1f] bg-white/74 shadow-[0_24px_80px_-72px_rgba(98,69,45,0.34)] sm:grid-cols-[0.95fr_1.05fr]"
            key={specialist.email}
          >
            <div className="relative min-h-[340px] bg-[#f3ece5]">
              <Image
                alt={specialist.name}
                className="object-cover object-top"
                fill
                sizes="(max-width: 1024px) 100vw, 280px"
                src={specialist.photo}
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center px-7 py-8">
              <h2 className="display-font text-4xl leading-tight tracking-[-0.05em] text-[#211914]">
                {specialist.name.replace(" ", "\n")}
              </h2>
              {specialist.role ? (
                <p className="mt-5 text-xs font-extrabold uppercase leading-6 tracking-[0.28em] text-[#9a6a42]">
                  {specialist.role}
                </p>
              ) : null}
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-[#211914]">
                {specialistDetails[index]?.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-7 h-px w-full bg-[#b89a7c26]" />
              <div className="mt-6 grid gap-3 text-base text-[#211914]">
                <a
                  className="flex items-center gap-4 transition hover:text-[#8e6748]"
                  href={`tel:${specialist.phone.replaceAll(" ", "")}`}
                >
                  <span aria-hidden="true" className="text-xl leading-none">
                    ☎
                  </span>
                  {specialist.phone}
                </a>
                <a
                  className="flex items-center gap-4 transition hover:text-[#8e6748]"
                  href={`mailto:${specialist.email}`}
                >
                  <span aria-hidden="true" className="text-xl leading-none">
                    ✉
                  </span>
                  {specialist.email}
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-[#b89a7c26] bg-[#faf7f3]/70 px-7 py-11 sm:px-10">
        <div className="text-center">
          <h2 className="display-font text-4xl leading-tight tracking-[-0.05em] text-[#211914] sm:text-5xl">
            S čím vám pomůžeme
          </h2>
          <div className="mx-auto mt-5 h-px w-12 bg-[#9a6a42]" />
        </div>

        <div className="mt-10 grid border-[#b89a7c26] md:grid-cols-2 md:divide-x md:divide-y-0">
          {helpItems.map((item, index) => (
            <article
              className={`grid gap-6 border-[#b89a7c26] px-7 py-8 sm:grid-cols-[5rem_1fr] ${
                index < 2 ? "border-b" : ""
              } ${index % 2 === 1 ? "md:border-l" : ""}`}
              key={item.title}
            >
              <span className="flex h-16 w-16 items-center justify-center text-5xl leading-none text-[#9a6a42]">
                {item.icon}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#211914]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-7 text-[#55463a]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative grid gap-8 overflow-hidden border-t border-[#b89a7c26] bg-[#f0e5d8] px-7 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="absolute inset-0 opacity-35">
          <Image
            alt=""
            className="object-cover object-center"
            fill
            sizes="1120px"
            src="/images/locality/lokalita-hero.webp"
          />
        </div>
        <div className="relative">
          <h2 className="display-font text-4xl leading-tight tracking-[-0.05em] text-[#211914]">
            Máte zájem o více informací?
          </h2>
          <p className="mt-4 text-base leading-7 text-[#211914]">
            Rádi vám poskytneme aktuální informace o projektu Střítež Living.
          </p>
        </div>
        <InquiryDialogTrigger
          className="relative inline-flex rounded-[10px] bg-[#9a6a42] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white shadow-[0_18px_42px_-26px_rgba(0,0,0,0.35)] transition hover:bg-[#875a38]"
          intent="house_viewing"
        >
          Domluvit si prohlídku
        </InquiryDialogTrigger>
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
