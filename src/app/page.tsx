import Image from "next/image";
import { balkerH114 } from "@/data/balkerH114";
import { stritezLiving } from "@/data/stritezLiving";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const selectedGallery = [
  balkerH114.gallery[0],
  balkerH114.gallery[2],
  balkerH114.gallery[8],
  balkerH114.gallery[10],
  balkerH114.gallery[12],
  balkerH114.gallery[14],
];

const projectStats = [
  { value: "6", label: "rodinných domů v projektu" },
  { value: stritezLiving.featuredHouse.area, label: "užitná plocha domu 1" },
  { value: stritezLiving.featuredHouse.plot, label: "velkorysý pozemek" },
  { value: "od 8,9 mil. Kč", label: "startovní cena domu 1" },
];

const houseDetails = [
  { label: "Dispozice", value: stritezLiving.featuredHouse.disposition },
  { label: "Typ domu", value: stritezLiving.featuredHouse.type },
  { label: "Parkování", value: stritezLiving.featuredHouse.parking },
  { label: "Stav", value: stritezLiving.featuredHouse.status },
];

const navigationItems = stritezLiving.navigation;
const languageOptions = stritezLiving.languages;
const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <main
      className="relative isolate overflow-x-hidden px-5 pb-14 pt-32 text-[#153252] sm:px-8 sm:pt-36 lg:px-10 lg:pt-40"
      id="top"
    >
      <SiteHeader languages={languageOptions} navigation={navigationItems} />

      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_68%)]" />
      <div className="absolute left-[-7rem] top-10 -z-10 h-64 w-64 rounded-full bg-[#70afe9]/24 blur-3xl" />
      <div className="absolute right-[-6rem] top-24 -z-10 h-80 w-80 rounded-full bg-[#b9dcfb]/40 blur-3xl" />

      <section className="mx-auto max-w-[1240px] overflow-hidden rounded-[36px] border border-[#5885b633] bg-white/70 shadow-[0_40px_120px_-84px_rgba(46,86,130,0.5)] backdrop-blur-[18px]">
        <div className="grid gap-8 px-6 pb-6 pt-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-10 lg:px-[34px] lg:pb-8 lg:pt-12">
          <div className="pb-2">
            <div className="inline-flex rounded-full border border-[#5885b62e] bg-[#f8fbff] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
              {stritezLiving.hero.kicker}
            </div>

            <h1 className="display-font mt-6 max-w-4xl text-5xl leading-[0.94] tracking-[-0.05em] text-[#153252] sm:text-6xl lg:text-7xl">
              {stritezLiving.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5d7691] sm:text-[19px]">
              {stritezLiving.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)] transition hover:brightness-105"
                href="#dum-1"
              >
                Zobrazit nabídku
              </a>
              <a
                className="rounded-full border border-[#5885b62e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#153252] transition hover:bg-white"
                href="#lokalita"
              >
                Prohlédnout lokalitu
              </a>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {projectStats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[24px] border border-[#5885b62e] bg-white/70 px-5 py-5"
                >
                  <p className="text-[28px] font-semibold text-[#153252]">{item.value}</p>
                  <p className="mt-2 text-sm leading-7 text-[#5d7691]">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="relative min-h-[420px] lg:min-h-[620px]">
            <div className="absolute inset-[0_0_80px_0] overflow-hidden rounded-[30px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(36,58,88,0.95)] lg:inset-[0_0_100px_20px] [clip-path:polygon(12%_0,100%_0,100%_86%,86%_100%,0_100%,0_15%)]">
              <Image
                alt="Vizualizace domu ve Stříteži"
                className="object-cover"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 480px"
                src="/images/balker-h114/hero/balker-h114-hero.jpg"
              />
              <div className="absolute left-0 top-6 rounded-r-[18px] bg-[#122c48d6] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                Vizualizace projektu
              </div>
              <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                {["Střítež", "Beskydy", "6 domů"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/25 bg-[#173350c7] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div
          className="grid gap-4 px-6 pb-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-[34px]"
          id="projekt"
        >
          <article className="rounded-[28px] border border-[#5885b62e] bg-white/72 px-6 py-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              {stritezLiving.project.eyebrow}
            </p>
            <h2 className="mt-4 text-[28px] font-semibold text-[#153252]">
              {stritezLiving.project.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5d7691]">
              {stritezLiving.project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {stritezLiving.project.benefits.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#f5f9fe] px-4 py-2 text-sm text-[#55708d]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-[#5885b62e] bg-white/72 px-6 py-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              První dům v nabídce
            </p>
            <h2 className="mt-4 text-[28px] font-semibold text-[#153252]">
              {stritezLiving.featuredHouse.eyebrow} · {stritezLiving.featuredHouse.disposition}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-[#5885b61f] bg-[#f8fbff] px-4 py-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
                  Užitná plocha
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#153252]">
                  {stritezLiving.featuredHouse.area}
                </p>
              </div>
              <div className="rounded-[22px] border border-[#5885b61f] bg-[#f8fbff] px-4 py-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
                  Pozemek
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#153252]">
                  {stritezLiving.featuredHouse.plot}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-[#6d8cb0]">
              {stritezLiving.featuredHouse.pricePrefix}
            </p>
            <p className="mt-2 text-3xl font-semibold text-[#153252]">
              {stritezLiving.featuredHouse.price}
            </p>
            <a
              className="mt-6 inline-flex rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)]"
              href="#kontakt"
            >
              Mám zájem
            </a>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px]" id="dum-1">
        <div className="grid gap-6 rounded-[34px] border border-[#5885b626] bg-white/72 p-6 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              {stritezLiving.featuredHouse.eyebrow}
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              {stritezLiving.featuredHouse.title}
            </h2>

            <div className="mt-6 relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(36,58,88,0.35)]">
              <Image
                alt="Dům 1 ve Stříteži"
                className="object-cover"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="/images/balker-h114/stories/balker-h114-story-family.jpg"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="rounded-[28px] border border-[#5885b626] bg-[#f8fbff] p-6">
              <div className="space-y-4 text-base leading-8 text-[#5d7691]">
                {stritezLiving.featuredHouse.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {houseDetails.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[22px] border border-[#5885b61f] bg-white/85 px-4 py-4"
                  >
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#153252]">{item.value}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-[28px] border border-[#5885b626] bg-white/78 px-6 py-6">
              <p className="text-sm leading-8 text-[#5d7691]">
                {stritezLiving.featuredHouse.layoutSummary}
              </p>
              <p className="mt-4 text-sm leading-8 text-[#5d7691]">
                Konstrukční základ vychází z modelu {balkerH114.model}, který bude
                pro projekt Střítež realizovat subdodavatel {balkerH114.subcontractor}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8"
        id="dispozice"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              dispozice a plochy
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              Promyšlené uspořádání pro pohodlný každodenní život.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#5d7691]">
            Obytná část je soustředěna kolem velkého společného prostoru s jídelnou
            a kuchyní, zatímco soukromé pokoje zůstávají příjemně oddělené. Přehled
            ploch níže vychází z modelového domu H114.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 xl:grid-cols-5">
          <article className="rounded-[24px] border border-[#5885b626] bg-[#f7fbff] px-5 py-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
              obytná část
            </p>
            <p className="mt-3 text-2xl font-semibold text-[#153252]">
              {balkerH114.totals.livingPart}
            </p>
          </article>
          <article className="rounded-[24px] border border-[#5885b626] bg-[#f7fbff] px-5 py-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
              technická část
            </p>
            <p className="mt-3 text-2xl font-semibold text-[#153252]">
              {balkerH114.totals.utilityPart}
            </p>
          </article>
          <article className="rounded-[24px] border border-[#5885b626] bg-[#f7fbff] px-5 py-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
              celkem
            </p>
            <p className="mt-3 text-2xl font-semibold text-[#153252]">
              {balkerH114.totals.total}
            </p>
          </article>
          <article className="rounded-[24px] border border-[#5885b626] bg-[#f7fbff] px-5 py-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
              ložnice
            </p>
            <p className="mt-3 text-2xl font-semibold text-[#153252]">3</p>
          </article>
          <article className="rounded-[24px] border border-[#5885b626] bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-5 py-5 text-white">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">
              parcela
            </p>
            <p className="mt-3 text-2xl font-semibold">20,5 × 18,1 m</p>
          </article>
        </div>

        <div className="mt-8 overflow-x-auto rounded-[28px] border border-[#5885b626] bg-white/82 p-4">
          <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm text-[#54708d]">
            <thead>
              <tr className="text-xs uppercase tracking-[0.18em] text-[#6d8cb0]">
                <th className="pb-2 pl-4 pr-4">Symbol</th>
                <th className="pb-2 pr-4">Místnost</th>
                <th className="pb-2 pr-4">Plocha podlah</th>
                <th className="pb-2 pr-4">Užitná plocha</th>
              </tr>
            </thead>
            <tbody>
              {balkerH114.roomSchedule.map((room) => (
                <tr key={room.symbol} className="rounded-2xl bg-[#f7fbff]">
                  <td className="rounded-l-2xl px-4 py-3 font-semibold text-[#153252]">
                    {room.symbol}
                  </td>
                  <td className="px-4 py-3">{room.room}</td>
                  <td className="px-4 py-3">{room.floorArea}</td>
                  <td className="rounded-r-2xl px-4 py-3">{room.usableArea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8"
        id="standard"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              technický standard
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              Konstrukční základ připravený pro přesnou a čistou realizaci.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#5d7691]">
            Prefabrikovaná skladba domu přináší kontrolovanou kvalitu výroby,
            rychlejší montáž na místě a jasně definovaný standard jednotlivých vrstev.
          </p>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {balkerH114.construction.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-[#5885b626] bg-[#f8fbff] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,#d8ebfb,#f6fbff)]" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                    {item.performance}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#153252]">
                    {item.title}
                  </h3>
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-7 text-[#5d7691]">
                {item.layers.map((layer, index) => (
                  <li key={`${item.title}-${index}`} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#5c97da]" />
                    <span>{layer}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8"
        id="lokalita"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              {stritezLiving.locality.eyebrow}
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              {stritezLiving.locality.title}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-[#5d7691]">
              {stritezLiving.locality.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {stritezLiving.locality.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f5f9fe] px-4 py-2 text-sm text-[#55708d]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stritezLiving.locality.amenities.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-[#5885b626] bg-[#f8fbff] p-5"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
                  {item.time}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#153252]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d7691]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[28px] border border-[#5885b626] bg-[#f8fbff] p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                Rychlý dosah do měst
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#153252]">
                Každodenní dojezd bez ztráty kontaktu s přírodou.
              </h3>
            </div>
            <a
              className="inline-flex rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)]"
              href="#kontakt"
            >
              Mám zájem
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stritezLiving.locality.driveTimes.map((item) => (
              <article
                key={item.destination}
                className="rounded-[22px] border border-[#5885b61f] bg-white/88 px-4 py-4"
              >
                <p className="text-sm text-[#5d7691]">{item.destination}</p>
                <p className="mt-2 text-2xl font-semibold text-[#153252]">{item.time}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1240px]" id="galerie">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              galerie domu
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              Výběr z aktuálních vizualizací a interiérů.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#5d7691]">
            Pro úvodní stránku držíme kurátorsky vybranou sadu snímků, která ukazuje
            charakter domu, atmosféru interiéru i hlavní architektonické kvality.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {selectedGallery.map((image, index) => (
            <article
              key={image.src}
              className={`overflow-hidden rounded-[28px] border border-white/70 bg-white/76 p-3 shadow-[0_28px_90px_-70px_rgba(38,27,20,0.32)] ${
                index === 0 ? "xl:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-[22px] ${
                  index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  alt={image.alt}
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 1280px) 100vw, 50vw"
                      : "(max-width: 1280px) 50vw, 25vw"
                  }
                  src={image.src}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8"
        id="financovani"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              {stritezLiving.financing.eyebrow}
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              {stritezLiving.financing.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5d7691]">
              {stritezLiving.financing.subtitle}
            </p>

            <div className="mt-6 space-y-4 text-base leading-8 text-[#5d7691]">
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

            <div className="mt-8 rounded-[28px] border border-[#5885b626] bg-white/82 p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                Proces financování
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {stritezLiving.financing.steps.map((step, index) => (
                  <article
                    key={step}
                    className="rounded-[22px] border border-[#5885b61f] bg-[#f8fbff] px-4 py-4"
                  >
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
                      Krok {index + 1}
                    </p>
                    <p className="mt-2 font-semibold text-[#153252]">{step}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <article className="rounded-[28px] border border-[#5885b626] bg-[#f8fbff] p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
                Financování projektu
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[#153252]">
                Ověřené specialistky pro celý průběh financování.
              </h3>
              <div className="mt-5 space-y-3">
                {stritezLiving.financing.specialists.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[#5885b61f] bg-white/88 px-4 py-4"
                  >
                    <p className="font-semibold text-[#153252]">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] border border-[#5885b626] bg-white/82">
              <div className="relative aspect-[4/3]">
                <Image
                  alt="Interiér domu"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  src="/images/balker-h114/stories/balker-h114-story-living.jpg"
                />
              </div>
              <div className="p-6">
                <p className="text-sm leading-8 text-[#5d7691]">
                  Celý proces financování ladíme s harmonogramem výstavby tak, aby
                  byl srozumitelný, přehledný a bez zbytečného stresu.
                </p>
                <a
                  className="mt-5 inline-flex rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)]"
                  href="#kontakt"
                >
                  Nezávazná konzultace
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="mx-auto mt-8 max-w-[1240px] rounded-[34px] border border-[#5885b626] bg-white/72 px-6 py-10 shadow-[0_30px_100px_-74px_rgba(46,86,130,0.35)] backdrop-blur sm:px-8"
        id="kontakt"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6d8cb0]">
              kontakt
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#153252] sm:text-5xl">
              {stritezLiving.cta.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5d7691]">
              {stritezLiving.cta.text}
            </p>
          </div>

          <div className="rounded-[28px] border border-[#5885b626] bg-[#f8fbff] p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
              Napište nám
            </p>
            <a
              className="mt-6 inline-flex w-full justify-center rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)]"
              href={`mailto:${stritezLiving.cta.email}`}
            >
              {stritezLiving.cta.email}
            </a>
            <p className="mt-4 text-sm leading-7 text-[#5d7691]">
              Připravíme pro vás informace o aktuální nabídce domů, financování i
              dalším postupu projektu.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter
        brand={stritezLiving.brand}
        contactEmail={stritezLiving.cta.email}
        currentYear={currentYear}
        footer={stritezLiving.footer}
        languages={languageOptions}
        navigation={navigationItems}
      />
    </main>
  );
}
