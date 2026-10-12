import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageShell } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { stritezLiving } from "@/data/stritezLiving";
import { type House, housesCopy as copy, houseTypes } from "@/data/houses";

export function CatalogShell({ children }: { children: ReactNode }) {
  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <div className="mx-auto max-w-[1240px]">{children}</div>
      <SiteFooter
        brand={stritezLiving.brand}
        contactEmail={stritezLiving.cta.email}
        currentYear={new Date().getFullYear()}
        footer={stritezLiving.footer}
        languages={stritezLiving.languages}
        navigation={stritezLiving.navigation}
      />
    </PageShell>
  );
}

export function HouseStatus({ house }: { house: House }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span
        className={`rounded-full px-3 py-1.5 ${house.construction === "construction" ? "bg-[#e8eddf] text-[#47543b]" : "bg-[#f0ece5] text-[#746552]"}`}
      >
        {copy.constructionLabels[house.construction]}
      </span>
      <span className="rounded-full border border-[#686e5630] px-3 py-1.5">
        {copy.availability}: {copy.availabilityLabels[house.availability]}
      </span>
    </div>
  );
}

export function HouseSpecs({ house }: { house: House }) {
  return (
    <dl className="grid grid-cols-2 gap-x-5 gap-y-5 text-sm">
      {[
        [copy.type, house.type ? houseTypes[house.type].name : null],
        [copy.plot, house.plot],
        [copy.area, house.area],
        [copy.layout, house.layout],
        [copy.price, house.price],
      ].map(([label, value]) => (
        <div key={label}>
          <dt className="text-xs text-[#7d796d]">{label}</dt>
          <dd className="mt-1 font-medium">{value ?? copy.pending}</dd>
        </div>
      ))}
    </dl>
  );
}

export function HouseCard({ house }: { house: House }) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#686e561f] bg-white/90 transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/8] bg-[#e8e9df]">
        <Image
          src={
            house.type
              ? houseTypes[house.type].images[0].src
              : "/images/project/project-situation-six-houses.png"
          }
          alt={
            house.type
              ? houseTypes[house.type].images[0].alt
              : "Orientační vizualizace celého projektu Střítež Living"
          }
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-[11px]">
          {house.type
            ? houseTypes[house.type].name
            : "Situace projektu · orientační"}
        </span>
      </div>
      <div className="p-6">
        <h3 className="display-font mb-4 text-3xl leading-tight tracking-[-0.035em]">{house.name}</h3>
        <HouseStatus house={house} />
        <div className="my-6 border-t border-[#686e5620] pt-5">
          <HouseSpecs house={house} />
        </div>
        <Link
          href={`/domy/${house.slug}`}
          className="inline-flex items-center gap-5 border-b border-[#686e56] pb-1 text-sm font-semibold text-[#50573f] focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label={`${copy.detail} ${house.name}`}
        >
          {copy.detail}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export function HouseTypes() {
  return (
    <section id="typy" className="my-16 scroll-mt-36">
      <h2 className="display-font mb-10 text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">
        {copy.galleryTitle}
      </h2>
      <div className="grid gap-12 md:grid-cols-2 md:gap-8">
        {Object.entries(houseTypes).map(([key, type]) => (
          <article key={key}>
            <h3 className="mb-5 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8e6748]">
              {type.label}<span aria-hidden="true" className="h-px w-14 bg-[#b89a7c80]" />
            </h3>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src={type.images[0].src} alt={type.images[0].alt} fill
                sizes="(max-width: 768px) 100vw, 610px" className="object-cover" />
            </div>
            <dl className="grid grid-cols-3 divide-x divide-[#b89a7c40] border-b border-[#b89a7c40] py-5 text-center">
              {[copy.area, copy.layout, copy.typeCount].map((label) => (
                <div className="flex flex-col px-2" key={label}>
                  <dt className="mt-2 text-xs leading-5 text-[#7d6a59]">{label}</dt>
                  <dd className="order-first text-xl font-medium tracking-[-0.025em]">
                    <span aria-hidden="true">—</span><span className="sr-only">{copy.pending}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <details className="group mt-6">
              <summary className="inline-flex cursor-pointer list-none items-center gap-6 bg-[#3f3125] px-6 py-4 text-xs font-medium text-white transition hover:bg-[#594536] focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">{copy.showType} {type.label.slice(-1)}</span>
                <span className="hidden group-open:inline">{copy.hideType} {type.label.slice(-1)}</span>
                <span aria-hidden="true" className="text-lg leading-none group-open:rotate-90">→</span>
              </summary>
              <div className="mt-6 border-l border-[#b89a7c60] pl-5">
                <h4 className="display-font text-3xl tracking-[-0.035em]">{type.name}</h4>
                <p className="mt-3 text-sm leading-7 text-[#6f7063]">{type.description}</p>
                <p className="mt-3 text-xs leading-6 text-[#77786c]">{type.note} {copy.typeSpecsPending}</p>
                <Link href="/kontakt" className="mt-4 inline-block text-sm underline underline-offset-4">{copy.typeContact}</Link>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
