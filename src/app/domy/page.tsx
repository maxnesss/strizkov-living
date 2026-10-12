import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CatalogShell,
  HouseCard,
  HouseTypes,
} from "@/components/house-catalog";
import { houses, housesCopy as copy } from "@/data/houses";

export const metadata: Metadata = {
  title: "Domy BALKER a ARTHAUS | Střítež Living",
  description: copy.intro,
};

export default function HousesPage() {
  return (
    <CatalogShell>
      <section className="relative overflow-hidden rounded-2xl px-6 py-12 sm:px-10 sm:py-16">
        <Image
          src="/images/balker/garden.webp"
          alt="Návrh domu BALKER s dřevěnou fasádou a krytou terasou"
          fill
          sizes="1240px"
          className="object-cover brightness-110 saturate-[1.08]"
          preload
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,249,245,0.98)_0%,rgba(250,249,245,0.94)_36%,rgba(250,249,245,0.52)_59%,rgba(250,249,245,0.08)_100%)]" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#697054]">
            {copy.eyebrow}
          </p>
          <h1 className="display-font mt-5 max-w-[17ch] text-5xl leading-[1.02] tracking-[-0.055em] sm:text-6xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#64665a]">
            {copy.intro}
          </p>
        </div>
      </section>
      <HouseTypes />
      <section id="dispozice" className="scroll-mt-36">
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-font text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">
            {copy.collection}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[#626951]">
            {copy.progress}
          </p>
        </div>
        <p className="mb-6 max-w-3xl text-sm leading-7 text-[#757669]">
          {copy.assignmentNote}
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {houses.map((house) => (
            <HouseCard key={house.slug} house={house} />
          ))}
        </div>
      </section>
      <section className="my-10 flex flex-col gap-6 rounded-xl bg-[#555d46] px-7 py-10 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <h2 className="display-font text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">{copy.cta}</h2>
        <Link
          href="/projekt"
          className="shrink-0 rounded-full border border-white/60 px-6 py-3 text-center text-sm hover:bg-white/10"
        >
          {copy.project} →
        </Link>
      </section>
    </CatalogShell>
  );
}
