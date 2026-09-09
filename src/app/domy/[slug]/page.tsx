import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CatalogShell,
  HouseSpecs,
  HouseStatus,
  HouseTypes,
} from "@/components/house-catalog";
import { houses, housesCopy as copy, houseTypes } from "@/data/houses";
import { stritezLiving } from "@/data/stritezLiving";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return houses.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const house = houses.find((h) => h.slug === slug);
  if (!house) notFound();
  return {
    title: `${house.name} | Střítež Living`,
    description: `${house.name} – ${copy.constructionLabels[house.construction]}. ${copy.intro}`,
  };
}
export default async function HousePage({ params }: Props) {
  const { slug } = await params;
  const house = houses.find((h) => h.slug === slug);
  if (!house) notFound();
  const houseType = house.type ? houseTypes[house.type] : null;
  const inquiry = `mailto:${stritezLiving.cta.email}?subject=${encodeURIComponent(`${copy.inquirySubject} ${house.name} | Střítež Living`)}&body=${encodeURIComponent(`${copy.inquiryBody} ${house.name}.`)}`;
  return (
    <CatalogShell>
      <nav aria-label="Drobečková navigace" className="mb-7 text-sm">
        <Link className="underline underline-offset-4" href="/domy">
          ← {copy.back}
        </Link>
        <span className="ml-4 text-[#7d796d]">/ {house.name}</span>
      </nav>
      <section className="grid overflow-hidden rounded-2xl bg-white/85 lg:grid-cols-2">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#697054]">
            {copy.eyebrow}
          </p>
          <h1 className="display-font my-5 text-5xl sm:text-6xl">
            {house.name}
          </h1>
          <HouseStatus house={house} />
          <div className="my-8">
            <HouseSpecs house={house} />
          </div>
          <p className="mb-7 text-sm leading-7 text-[#757669]">
            {houseType ? houseType.description : copy.assignmentNote}
          </p>
          <a
            href={inquiry}
            className="inline-flex rounded-full bg-[#555d46] px-6 py-3 text-sm font-semibold text-white hover:bg-[#414a35]"
          >
            {copy.inquiry}
          </a>
        </div>
        <div className="relative min-h-72 lg:min-h-full">
          <Image
            src={
              houseType
                ? houseType.images[0].src
                : "/images/project/project-situation-six-houses.png"
            }
            alt={
              houseType
                ? houseType.images[0].alt
                : "Orientační vizualizace celého projektu"
            }
            fill
            sizes="(max-width: 1024px) 100vw, 620px"
            className="object-cover"
            preload
          />
          <span className="absolute bottom-4 left-4 rounded bg-white/90 px-3 py-2 text-xs">
            {houseType ? houseType.name : "Situace projektu · orientační"}
          </span>
        </div>
      </section>
      {house.standard.length ? (
        <section className="my-10 rounded-xl border border-[#686e5626] bg-white/65 p-7 sm:p-10">
          <h2 className="display-font text-3xl">
            {copy.standardTitle} {house.name}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#757669]">
            {copy.standardIntro}
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 text-sm text-[#4f5146] sm:grid-cols-2">
            {house.standard.map((item) => (
              <li className="flex items-center gap-3" key={item}>
                <span aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8eddf] text-xs text-[#47543b]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <section
        id="dispozice"
        className="my-10 rounded-xl border border-[#686e5626] bg-white/65 p-7 sm:p-10"
      >
        <h2 className="display-font text-3xl">{copy.plansTitle}</h2>
        {house.plans.length ? (
          <div className="mt-6 flex flex-wrap gap-4">
            {house.plans.map((plan) => (
              <a
                className="rounded border border-[#686e5650] px-5 py-3 underline"
                key={plan.href}
                href={plan.href}
                target="_blank"
                rel="noreferrer"
              >
                {plan.title} · PDF ↗
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#757669]">
            {copy.plansPending}
          </p>
        )}
      </section>
      {houseType ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {houseType.images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[16/10] overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 620px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <HouseTypes />
      )}
      {!houseType && (
        <figure className="my-10">
          <Image
            src="/images/balker/garden.webp"
            alt={houseTypes.balker.images[1].alt}
            width={1625}
            height={968}
            sizes="(max-width: 1280px) 100vw, 1240px"
            className="w-full rounded-xl"
          />
          <figcaption className="mt-3 text-xs text-[#757669]">
            {houseTypes.balker.note}
          </figcaption>
        </figure>
      )}
    </CatalogShell>
  );
}
