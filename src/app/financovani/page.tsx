import type { Metadata } from "next";
import Image from "next/image";
import { FinancingContactForm } from "@/components/financing-contact-form";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { PageShell } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Financování | Střítež Living",
  description:
    "Osobní podpora při výběru domu, financování koupě a koordinaci celého procesu v projektu Střítež Living.",
};

const services = [
  "Výběr vhodného domu",
  "Financování koupě",
  "Orientace v projektu",
  "Prodej stávající nemovitosti",
  "Rezervace domu",
  "Koordinace celého procesu",
  "Organizace prohlídky",
  "Podpis smluv a předání domu",
] as const;

const consultationBenefits = [
  "Osobní přístup",
  "Diskrétnost",
  "Zkušenosti",
  "Kompletní servis",
] as const;

const projectBenefits = [
  "Bezpečný nákup a právní jistota",
  "Moderní a úsporné bydlení",
  "Výhledy na Beskydy a klidná lokalita",
] as const;

const currentYear = new Date().getFullYear();

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
      {children}
    </p>
  );
}

export default function FinancingPage() {
  return (
    <PageShell languages={stritezLiving.languages} navigation={stritezLiving.navigation}>
      <section className="relative mx-auto min-h-[610px] max-w-[1240px] overflow-hidden rounded-[38px] border border-[#b89a7c33] bg-[#f4ece3] shadow-[0_42px_120px_-84px_rgba(98,69,45,0.35)]">
        <Image
          alt="Dům v projektu Střítež Living"
          className="object-cover object-center lg:object-[72%_center]"
          fill
          preload
          sizes="(max-width: 1280px) 100vw, 1240px"
          src="/images/d115/d115-hero.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,246,241,0.98)_0%,rgba(250,246,241,0.94)_38%,rgba(250,246,241,0.4)_65%,rgba(250,246,241,0.04)_100%)]" />

        <div className="relative flex min-h-[610px] max-w-[660px] flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
          <SectionLabel>Konzultace</SectionLabel>
          <h1 className="display-font mt-6 text-5xl leading-[0.96] tracking-[-0.055em] text-[#3f3125] sm:text-6xl lg:text-[4.8rem]">
            Od prvního dotazu až do předání domu
          </h1>
          <div className="mt-7 h-px w-12 bg-[#a88362]" />
          <p className="mt-7 max-w-[520px] text-base leading-8 text-[#655447] sm:text-[17px]">
            Sabrina a Alena jsou vašimi průvodkyněmi projektem Střítež Living. Provedou
            vás celým procesem od prvního zájmu přes výběr domu až po financování a podpis
            smluv.
          </p>
          <InquiryDialogTrigger
            className="mt-8 inline-flex w-fit rounded-[12px] bg-[linear-gradient(135deg,#a88362,#c9a57e)] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_18px_42px_-26px_rgba(76,52,32,0.55)]"
            intent="financing"
          >
            Chci konzultaci k projektu →
          </InquiryDialogTrigger>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#b89a7c26] bg-white/76 px-6 py-11 shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)] sm:px-9 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionLabel>S čím vám pomůžeme</SectionLabel>
            <h2 className="display-font mt-5 max-w-[9ch] text-4xl leading-[1.02] tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              Kompletní servis na jednom místě
            </h2>
            <div className="mt-7 h-px w-12 bg-[#a88362]" />
            <p className="mt-6 max-w-sm text-base leading-8 text-[#7d6a59]">
              Postaráme se o všechny kroky, abyste měli jistotu a celý proces byl pro vás
              co nejjednodušší.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <article className="flex items-center gap-4" key={service}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#b89a7c1f] bg-[#f7efe5] text-sm font-extrabold tracking-[0.12em] text-[#a88362]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-sm font-semibold leading-6 text-[#55463a]">{service}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] overflow-hidden rounded-[34px] border border-[#b89a7c26] bg-[#f4ece3] shadow-[0_30px_100px_-74px_rgba(98,69,45,0.2)]"
        id="specialistky"
      >
        <div className="grid lg:grid-cols-[0.68fr_1.32fr]">
          <div className="px-7 py-10 sm:px-10">
            <SectionLabel>Vaše průvodkyně projektem</SectionLabel>
            <h2 className="display-font mt-5 text-4xl leading-tight tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              Jsme tu pro vás
            </h2>
          </div>

          <div className="grid gap-px bg-[#b89a7c26] sm:grid-cols-2">
            {stritezLiving.specialists.map((specialist) => (
              <article
                className="grid min-h-[330px] grid-cols-[0.9fr_1.1fr] bg-white/72"
                key={specialist.email}
              >
                <div className="relative min-h-[300px] bg-[#eee2d5]">
                  <Image
                    alt={specialist.name}
                    className="object-contain object-bottom"
                    fill
                    sizes="(max-width: 640px) 45vw, 260px"
                    src={specialist.photo}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col justify-center px-5 py-7">
                  <h3 className="display-font text-2xl leading-tight tracking-[-0.04em] text-[#3f3125]">
                    {specialist.name}
                  </h3>
                  <p className="mt-4 text-xs leading-6 text-[#7d6a59]">
                    Průvodkyně projektem Střítež Living
                  </p>
                  <a
                    className="mt-5 text-xs font-semibold leading-6 text-[#55463a]"
                    href={`tel:${specialist.phone}`}
                  >
                    {specialist.phone}
                  </a>
                  <a
                    className="mt-1 flex flex-col text-[10px] leading-4 tracking-[-0.02em] text-[#7d6a59]"
                    href={`mailto:${specialist.email}`}
                  >
                    <span>{specialist.email.split("@")[0]}</span>
                    <span>@{specialist.email.split("@")[1]}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-8 max-w-[1240px] overflow-hidden rounded-[36px] border border-[#b89a7c26] shadow-[0_32px_100px_-62px_rgba(52,38,27,0.42)]">
        <Image
          alt="Vizualizace domu v projektu Střítež Living"
          className="object-cover"
          fill
          sizes="(max-width: 1280px) 100vw, 1240px"
          src="/images/d115/gallery/d115-02.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,238,228,0.97),rgba(246,238,228,0.82)_46%,rgba(45,35,28,0.22))]" />

        <div className="relative grid gap-8 px-6 py-12 sm:px-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-12">
          <div>
            <SectionLabel>Nezávazná konzultace</SectionLabel>
            <h2 className="display-font mt-5 max-w-[11ch] text-4xl leading-[1.02] tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              Začněme nezávazným rozhovorem
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#655447]">
              Řekněte nám, jaké bydlení hledáte, a společně zjistíme, zda je některý z
              domů v projektu Střítež Living pro vás vhodný.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:items-center">
            <div className="grid gap-3">
              {consultationBenefits.map((benefit, index) => (
                <div className="flex items-center gap-3 text-sm text-[#55463a]" key={benefit}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b89a7c33] bg-white/55 text-xs font-bold text-[#a88362]">
                    {index + 1}
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
            <FinancingContactForm contactEmail={stritezLiving.cta.email} />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-[1240px] gap-px overflow-hidden rounded-[28px] border border-[#b89a7c26] bg-[#b89a7c26] sm:grid-cols-3">
        {projectBenefits.map((benefit, index) => (
          <article className="flex items-center gap-4 bg-white/76 px-6 py-7" key={benefit}>
            <span className="display-font text-3xl text-[#a88362]">0{index + 1}</span>
            <p className="max-w-[190px] text-sm font-semibold leading-6 text-[#55463a]">
              {benefit}
            </p>
          </article>
        ))}
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
