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

const contactPeople = stritezLiving.contactTeam;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#b99372]">
      {children}
    </p>
  );
}

function ContactIcon({ type }: { type: "home" | "bank" | "phone" | "mail" | "info" }) {
  const paths = {
    home: (
      <>
        <path d="m4 10 8-6 8 6" />
        <path d="M6.5 9.5V20h11V9.5M10 20v-5h4v5" />
      </>
    ),
    bank: (
      <>
        <path d="m3 9 9-5 9 5" />
        <path d="M5 10h14M6 10v7m4-7v7m4-7v7m4-7v7M3 20h18" />
      </>
    ),
    phone: <path d="M6.6 3.5 9 3l2 4-2.2 1.8a15.8 15.8 0 0 0 6.4 6.4L17 13l4 2-.5 2.4a2.5 2.5 0 0 1-2.8 2C10 18.3 5.7 14 4.6 6.3a2.5 2.5 0 0 1 2-2.8Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10v6m0-9h.01" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45">
        {paths[type]}
      </g>
    </svg>
  );
}

function PhotoSlot({
  label,
  photo,
  large = false,
}: {
  label: string;
  photo?: string | null;
  large?: boolean;
}) {
  const size = large ? "h-[136px] w-[136px]" : "h-[74px] w-[74px]";

  return (
    <div
      aria-label={`Místo pro fotografii: ${label}`}
      className={`relative flex ${size} shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d8d2cb] bg-[linear-gradient(145deg,#f8f8f3,#ebece5)] text-[#b7aa9e]`}
      role="img"
    >
      {photo ? (
        <Image
          alt={label}
          className="object-cover object-top"
          fill
          sizes={large ? "136px" : "74px"}
          src={photo}
          unoptimized
        />
      ) : (
        <span className="h-8 w-8 rounded-full border border-dashed border-[#c8b9aa]" />
      )}
    </div>
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

      <section className="border-t border-[#b89a7c26] px-7 py-9 sm:px-10 lg:py-10">
        <article className="grid gap-7 rounded-[18px] border border-[#b89a7c35] bg-[#f8f7f3]/90 px-6 py-7 shadow-[0_18px_50px_-42px_rgba(98,69,45,0.24)] sm:px-8 lg:grid-cols-[auto_minmax(0,1.5fr)_minmax(220px,0.8fr)] lg:items-center lg:gap-8 lg:px-10">
          <PhotoSlot label={contactPeople.sales.name} />
          <div>
            <Eyebrow>{contactPeople.sales.role}</Eyebrow>
            <h2 className="display-font mt-3 text-3xl leading-tight tracking-[-0.045em] text-[#211914] sm:text-4xl">
              {contactPeople.sales.name}
            </h2>
            <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-[#211914]">
              {contactPeople.sales.lead}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#55463a]">
              {contactPeople.sales.description}
            </p>
          </div>
          <div className="grid gap-3 border-t border-[#b89a7c26] pt-5 text-sm text-[#211914] lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <a className="flex items-center gap-3 transition hover:text-[#8e6748]" href={`tel:${contactPeople.sales.phone.replaceAll(" ", "")}`}>
              <span className="text-[#a27c5e]"><ContactIcon type="phone" /></span>
              {contactPeople.sales.phone}
            </a>
            <a className="flex items-center gap-3 break-all transition hover:text-[#8e6748]" href={`mailto:${contactPeople.sales.email}`}>
              <span className="text-[#a27c5e]"><ContactIcon type="mail" /></span>
              {contactPeople.sales.email}
            </a>
          </div>
        </article>

        <div className="mx-auto mt-11 max-w-4xl text-center">
          <Eyebrow>Financování a klientský servis</Eyebrow>
          <h2 className="display-font mt-3 text-4xl leading-tight tracking-[-0.05em] text-[#211914] sm:text-5xl">
            Pomůžeme vám vyřešit financování nového domova
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-sm leading-6 text-[#55463a] sm:text-base">
            {contactPeople.financingIntro}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {contactPeople.financing.map((specialist) => (
            <article className="grid gap-7 rounded-[17px] border border-[#b89a7c35] bg-white/68 px-6 py-7 shadow-[0_18px_50px_-42px_rgba(98,69,45,0.24)] sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-center sm:px-8" key={specialist.email}>
              <PhotoSlot label={specialist.name} photo={specialist.photo} large />
              <div>
                <Eyebrow>{specialist.role}</Eyebrow>
                <h3 className="display-font mt-3 text-2xl leading-tight tracking-[-0.04em] text-[#211914] sm:text-3xl">
                  {specialist.name}
                </h3>
                <div className="mt-5 h-px w-12 bg-[#b89a7c]" />
                <div className="mt-5 grid gap-2.5 text-sm text-[#211914]">
                  <a className="flex items-center gap-3 transition hover:text-[#8e6748]" href={`mailto:${specialist.email}`}>
                    <span className="text-[#a27c5e]"><ContactIcon type="mail" /></span>
                    {specialist.email}
                  </a>
                  <a className="flex items-center gap-3 transition hover:text-[#8e6748]" href={`tel:${specialist.phone.replaceAll(" ", "")}`}>
                    <span className="text-[#a27c5e]"><ContactIcon type="phone" /></span>
                    {specialist.phone}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-6 grid gap-7 rounded-[17px] border border-[#b89a7c35] bg-[#fbfaf7]/80 px-6 py-7 sm:grid-cols-[14rem_minmax(0,1fr)] sm:items-center sm:px-8">
          <div className="flex items-center gap-4 border-b border-[#b89a7c35] pb-6 sm:block sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center text-[#b49b83] sm:h-20 sm:w-20">
              <ContactIcon type="bank" />
            </span>
            <h3 className="display-font max-w-[12rem] text-2xl uppercase leading-[0.95] tracking-[-0.04em] text-[#211914] sm:mt-5 sm:text-3xl">
              Hypoteční financování
            </h3>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {contactPeople.financingBenefits.map((item) => (
              <li className="flex items-start gap-4 text-sm leading-6 text-[#55463a]" key={item}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c2ae99] text-xs font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <div className="mx-auto mt-7 flex max-w-4xl items-start gap-4 px-2 sm:items-center sm:gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f4eadf] text-[#b49b83]">
            <ContactIcon type="home" />
          </span>
          <div>
            <p className="text-sm leading-6 text-[#55463a] sm:text-base">
              {contactPeople.financingClosing}
            </p>
            <p className="display-font mt-2 text-xl italic leading-tight text-[#b49b83] sm:text-2xl">
              {contactPeople.financingClosingAccent}
            </p>
          </div>
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
