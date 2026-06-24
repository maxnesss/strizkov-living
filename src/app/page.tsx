import Image from "next/image";
import Link from "next/link";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { d115 } from "@/data/d115";
import { stritezLiving } from "@/data/stritezLiving";

const homeBenefits = [
  "Velké pozemky a dostatek soukromí",
  "Výhledy na Beskydy",
  "Moderní architektura a kvalitní materiály",
  "Klidná lokalita blízko města",
] as const;

const appearanceVariants = [
  { image: d115.gallery[1], label: "Pohled ze zahrady" },
  { image: d115.gallery[2], label: "Pohled na terasu" },
  { image: d115.gallery[4], label: "Otevřený obytný prostor" },
] as const;

const projectHelp = [
  "prohlídka domu a výběr",
  "rezervace a smlouvy",
  "financování a prodej vaší nemovitosti",
  "koordinace výstavby a předání domu",
] as const;

const currentYear = new Date().getFullYear();

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main
      className="relative isolate overflow-x-hidden px-5 pb-14 pt-44 text-[#3f3125] sm:px-8 sm:pt-48 md:pt-52 lg:px-10 lg:pt-40"
      id="top"
    >
      <SiteHeader languages={stritezLiving.languages} navigation={stritezLiving.navigation} />

      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_68%)]" />

      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[38px] border border-[#b89a7c26] bg-white/64 shadow-[0_42px_120px_-84px_rgba(98,69,45,0.3)] backdrop-blur">
        <section className="relative min-h-[620px] overflow-hidden">
          <Image
            alt="Rodinný dům ve Stříteži s výhledem na Beskydy"
            className="object-cover object-center lg:object-[72%_center]"
            fill
            loading="eager"
            preload
            sizes="(max-width: 1280px) 100vw, 1240px"
            src="/images/d115/d115-hero.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,246,241,0.98)_0%,rgba(250,246,241,0.94)_37%,rgba(250,246,241,0.35)_66%,rgba(250,246,241,0.02)_100%)]" />

          <div className="relative flex min-h-[620px] max-w-[650px] flex-col justify-center px-7 py-12 sm:px-12 lg:px-16">
            <Eyebrow>{stritezLiving.hero.kicker}</Eyebrow>
            <h1 className="display-font mt-6 text-5xl leading-[0.94] tracking-[-0.055em] text-[#3f3125] sm:text-6xl lg:text-[4.6rem]">
              {stritezLiving.hero.title}
            </h1>
            <div className="mt-7 h-px w-12 bg-[#a88362]" />
            <p className="mt-6 max-w-lg text-base leading-8 text-[#655447]">
              Komorní projekt šesti domů v klidné části obce Střítež. Moderní
              architektura, soukromí, prostor a každodenní kontakt s přírodou.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <InquiryDialogTrigger
                className="rounded-[12px] bg-[linear-gradient(135deg,#8e6748,#b68d68)] px-6 py-3.5 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-white"
                intent="house_viewing"
              >
                Domluvit prohlídku
              </InquiryDialogTrigger>
              <Link
                className="rounded-[12px] border border-[#8e6748] bg-white/62 px-6 py-3.5 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-[#594536]"
                href="/domy"
              >
                Zobrazit domy
              </Link>
            </div>
          </div>
        </section>

        <section className="grid border-t border-[#b89a7c26] bg-white/72 sm:grid-cols-3">
          {[
            { value: "6", label: "domů v projektu" },
            { value: stritezLiving.featuredHouse.area, label: "užitné plochy" },
            { value: "od 1 117 m²", label: "velkorysé pozemky" },
          ].map((item) => (
            <article
              className="flex items-center gap-4 border-b border-[#b89a7c26] px-7 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              key={item.label}
            >
              <p className="display-font text-3xl text-[#3f3125]">{item.value}</p>
              <p className="max-w-28 text-xs leading-5 text-[#7d6a59]">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 border-t border-[#b89a7c26] px-7 py-11 sm:px-10 lg:grid-cols-[0.65fr_1.35fr_0.65fr] lg:items-center">
          <div>
            <Eyebrow>Místo pro váš život</Eyebrow>
            <h2 className="display-font mt-5 text-4xl leading-[1.03] tracking-[-0.05em] sm:text-5xl">
              Soukromí, klid a prostor každý den
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#7d6a59]">
              Domy jsou navrženy tak, aby nabízely maximální komfort, dostatek světla a
              přímé propojení s okolní přírodou.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[d115.gallery[2], d115.gallery[4]].map((image) => (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]" key={image.src}>
                <Image
                  alt={image.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 50vw, 360px"
                  src={image.src}
                />
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            {homeBenefits.map((benefit, index) => (
              <div className="flex items-center gap-3" key={benefit}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b89a7c4d] text-xs font-bold text-[#a88362]">
                  0{index + 1}
                </span>
                <p className="text-sm leading-6 text-[#55463a]">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-[#b89a7c26] bg-[#faf7f3]/70 px-7 py-10 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <Eyebrow>Dispozice domu</Eyebrow>
            <h2 className="display-font mt-5 text-4xl leading-[1.03] tracking-[-0.05em]">
              Promyšlená dispozice pro pohodlné bydlení
            </h2>
            <Link
              className="mt-6 inline-flex rounded-[10px] bg-[#8e6748] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.13em] text-white"
              href="/domy#dispozice"
            >
              Zobrazit detail domu
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {d115.floorPlans.map((plan) => (
              <article className="grid gap-3 sm:grid-cols-[1.25fr_0.75fr] sm:items-center" key={plan.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image
                    alt={plan.alt}
                    className="object-contain"
                    fill
                    sizes="(max-width: 1024px) 100vw, 300px"
                    src={plan.src}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.13em] text-[#594536]">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#7d6a59]">{plan.area}</p>
                  <p className="mt-2 text-xs leading-5 text-[#7d6a59]">{plan.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-[#b89a7c26] px-7 py-10 sm:px-10 lg:grid-cols-[0.48fr_1.52fr] lg:items-center">
          <div>
            <Eyebrow>Exteriér a interiér</Eyebrow>
            <h2 className="display-font mt-5 text-4xl leading-[1.03] tracking-[-0.05em]">
              Pohledy na rodinný dům
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {appearanceVariants.map((variant) => (
              <Link
                className="group relative aspect-[4/3] overflow-hidden rounded-[22px]"
                href="/domy"
                key={variant.label}
              >
                <Image
                  alt={variant.image.alt}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  src={variant.image.src}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2f241bcf] to-transparent px-4 pb-4 pt-10">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                    {variant.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-[#b89a7c26] px-7 py-10 sm:px-10 lg:grid-cols-[0.55fr_1.15fr_0.8fr] lg:items-center">
          <div>
            <Eyebrow>Vaše průvodkyně projektem</Eyebrow>
            <h2 className="display-font mt-5 text-4xl leading-tight tracking-[-0.05em]">
              Jsme tu pro vás
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#7d6a59]">
              Sabrina a Alena vás provedou celým procesem od prvního dotazu přes výběr
              domu až po financování a podpis smluv.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
              {stritezLiving.specialists.map((specialist) => (
              <article className="grid grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-[22px] bg-[#f7efe5]" key={specialist.name}>
                <div className="relative min-h-[220px]">
                  <Image
                    alt={specialist.name}
                    className="object-contain object-bottom"
                    fill
                    sizes="180px"
                    src={specialist.photo}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col justify-center px-4 py-5">
                  <h3 className="display-font text-xl leading-tight">{specialist.name}</h3>
                  <p className="mt-3 text-xs leading-5 text-[#7d6a59]">Průvodkyně projektem</p>
                  <a className="mt-4 text-xs font-semibold text-[#594536]" href={`tel:${specialist.phone}`}>
                    {specialist.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[22px] bg-[#f3e5d7] p-6">
            <Eyebrow>Jak vám pomůžeme</Eyebrow>
            <div className="mt-5 grid gap-3">
              {projectHelp.map((item) => (
                <p className="text-xs leading-6 text-[#55463a]" key={item}>
                  ✓ {item}
                </p>
              ))}
            </div>
            <InquiryDialogTrigger className="mt-5 inline-flex w-full justify-center rounded-[10px] bg-[#8e6748] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.13em] text-white">
              Domluvit konzultaci
            </InquiryDialogTrigger>
          </div>
        </section>

        <section className="grid border-t border-[#b89a7c26] bg-[#f7efe5]/64 lg:grid-cols-[0.52fr_0.98fr_1.5fr]">
          <div className="border-b border-[#b89a7c26] px-7 py-9 lg:border-b-0 lg:border-r">
            <Eyebrow>Lokalita</Eyebrow>
            <h2 className="display-font mt-4 text-4xl">Střítež</h2>
            <p className="mt-4 text-sm leading-7 text-[#7d6a59]">
              Ideální poloha mezi městem a přírodou. Vše důležité máte na dosah.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-4 border-b border-[#b89a7c26] px-7 py-9 lg:border-b-0 lg:border-r">
            {stritezLiving.locality.driveTimes.map((item) => (
              <div key={item.destination}>
                <p className="text-xs font-semibold text-[#55463a]">{item.destination}</p>
                <p className="mt-1 text-xs text-[#9b7d65]">{item.time}</p>
              </div>
            ))}
          </div>
          <div className="relative min-h-[240px] overflow-hidden">
            <Image
              alt="Vizualizace domu v projektu Střítež Living"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              src="/images/d115/gallery/d115-02.jpg"
            />
            <div className="absolute inset-0 bg-[#f7efe5]/32" />
            <Link
              className="absolute bottom-5 left-5 rounded-[10px] bg-white/88 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#594536]"
              href="/lokalita"
            >
              Prozkoumat lokalitu
            </Link>
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
    </main>
  );
}
