import Image from "next/image";
import Link from "next/link";
import { balkerH114 } from "@/data/balkerH114";
import { stritezLiving } from "@/data/stritezLiving";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
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
  { value: stritezLiving.featuredHouse.area, label: "užitná plocha domu" },
  { value: stritezLiving.featuredHouse.plot, label: "velkorysý pozemek" },
  { value: "od 8,9 mil. Kč", label: "orientační cena domu" },
];

const houseDetails = [
  { label: "Dispozice", value: stritezLiving.featuredHouse.disposition },
  { label: "Typ domu", value: stritezLiving.featuredHouse.type },
  { label: "Parkování", value: stritezLiving.featuredHouse.parking },
  { label: "Stav", value: stritezLiving.featuredHouse.status },
];

const financingSpecialists = [
  {
    name: "Bc. Sabrina Donolatová",
    photo:
      "https://chpfinance.cz/wp-content/uploads/2021/12/Sabina-pro-web-CHP.png",
  },
  {
    name: "Alena Bornerová",
    photo:
      "https://chpfinance.cz/wp-content/uploads/2021/12/Alena-pro-web-CHP.png",
  },
] as const;

const navigationItems = stritezLiving.navigation;
const languageOptions = stritezLiving.languages;
const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <main
      className="relative isolate overflow-x-hidden px-5 pb-14 pt-32 text-[#3f3125] sm:px-8 sm:pt-36 lg:px-10 lg:pt-40"
      id="top"
    >
      <SiteHeader languages={languageOptions} navigation={navigationItems} />

      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_68%)]" />
      <div className="absolute left-[-7rem] top-10 -z-10 h-64 w-64 rounded-full bg-[#dbc0a5]/16 blur-3xl" />
      <div className="absolute right-[-6rem] top-24 -z-10 h-80 w-80 rounded-full bg-[#efe0d0]/26 blur-3xl" />

      <section className="mx-auto max-w-[1240px] overflow-hidden rounded-[36px] border border-[#b89a7c33] bg-white/70 shadow-[0_40px_120px_-84px_rgba(98,69,45,0.28)] backdrop-blur-[18px]">
        <div className="grid gap-8 px-6 pb-6 pt-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-10 lg:px-[34px] lg:pb-8 lg:pt-12">
          <div className="pb-2">
            <div className="inline-flex rounded-full border border-[#b89a7c2e] bg-[#f7efe5] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
              {stritezLiving.hero.kicker}
            </div>

            <h1 className="display-font mt-6 max-w-4xl text-5xl leading-[0.94] tracking-[-0.05em] text-[#3f3125] sm:text-6xl lg:text-7xl">
              {stritezLiving.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#7d6a59] sm:text-[19px]">
              {stritezLiving.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)] transition hover:brightness-105"
                href="#domy"
              >
                Zobrazit domy
              </a>
              <a
                className="rounded-full border border-[#b89a7c2e] bg-white/76 px-6 py-3.5 text-center text-sm font-extrabold text-[#3f3125] transition hover:bg-white"
                href="#lokalita"
              >
                Prohlédnout lokalitu
              </a>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {projectStats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[24px] border border-[#b89a7c2e] bg-white/70 px-5 py-5"
                >
                  <p className="text-[28px] font-semibold text-[#3f3125]">{item.value}</p>
                  <p className="mt-2 text-sm leading-7 text-[#7d6a59]">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="relative min-h-[420px] lg:min-h-[620px]">
            <div className="absolute inset-[0_0_80px_0] overflow-hidden rounded-[30px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(77,58,42,0.5)] lg:inset-[0_0_100px_20px] [clip-path:polygon(12%_0,100%_0,100%_86%,86%_100%,0_100%,0_15%)]">
              <Image
                alt="Vizualizace domu ve Stříteži"
                className="object-cover"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 480px"
                src="/images/balker-h114/hero/balker-h114-hero.jpg"
              />
              <div className="absolute left-0 top-6 rounded-r-[18px] bg-[#4b392cd6] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                Vizualizace projektu
              </div>
              <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                {["Střítež", "Beskydy", "6 domů"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/25 bg-[#5a4637c7] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white"
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
          <article className="rounded-[28px] border border-[#b89a7c2e] bg-white/72 px-6 py-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
              {stritezLiving.project.eyebrow}
            </p>
            <h2 className="mt-4 text-[28px] font-semibold text-[#3f3125]">
              {stritezLiving.project.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#7d6a59]">
              {stritezLiving.project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {stritezLiving.project.benefits.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#b89a7c1f] bg-[#f7efe5] px-4 py-2 text-sm text-[#756150]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-[#b89a7c2e] bg-white/72 px-6 py-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
              Domy v nabídce
            </p>
            <h2 className="mt-4 text-[28px] font-semibold text-[#3f3125]">
              Rodinné domy · {stritezLiving.featuredHouse.disposition}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-[#b89a7c1f] bg-[#f7efe5] px-4 py-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                  Užitná plocha
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#3f3125]">
                  {stritezLiving.featuredHouse.area}
                </p>
              </div>
              <div className="rounded-[22px] border border-[#b89a7c1f] bg-[#f7efe5] px-4 py-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                  Pozemek
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#3f3125]">
                  {stritezLiving.featuredHouse.plot}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-[#9b7d65]">
              {stritezLiving.featuredHouse.pricePrefix}
            </p>
            <p className="mt-2 text-3xl font-semibold text-[#3f3125]">
              {stritezLiving.featuredHouse.price}
            </p>
            <p className="mt-3 text-sm leading-7 text-[#7d6a59]">
              {stritezLiving.featuredHouse.priceNote}
            </p>
            <InquiryDialogTrigger className="mt-6 inline-flex rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]">
              Mám zájem
            </InquiryDialogTrigger>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[1240px]" id="domy">
        <div className="grid gap-6 rounded-[36px] border border-[#b89a7c26] bg-white/72 p-6 shadow-[0_34px_100px_-74px_rgba(98,69,45,0.18)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
              {stritezLiving.featuredHouse.eyebrow}
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              {stritezLiving.featuredHouse.title}
            </h2>

            <div className="mt-6 relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_28px_90px_-60px_rgba(77,58,42,0.2)]">
              <Image
                alt="Rodinný dům ve Stříteži"
                className="object-cover"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="/images/balker-h114/stories/balker-h114-story-family.jpg"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="rounded-[28px] border border-[#b89a7c26] bg-[#f7efe5] p-6">
              <div className="space-y-4 text-base leading-8 text-[#7d6a59]">
                {stritezLiving.featuredHouse.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {houseDetails.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[22px] border border-[#b89a7c1f] bg-white/85 px-4 py-4"
                  >
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#3f3125]">{item.value}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-[28px] border border-[#b89a7c26] bg-white/78 px-6 py-6">
              <p className="text-sm leading-8 text-[#7d6a59]">
                {stritezLiving.featuredHouse.layoutSummary}
              </p>
              <p className="mt-4 text-sm leading-8 text-[#7d6a59]">
                Jednotlivé domy v projektu vycházejí ze stejného základního řešení,
                takže tato dispozice dobře ukazuje standard a prostorovou logiku celé
                nabídky.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto mt-12 max-w-[1240px] rounded-[36px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_34px_100px_-74px_rgba(98,69,45,0.18)] backdrop-blur sm:px-8"
        id="lokalita"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
              {stritezLiving.locality.eyebrow}
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              {stritezLiving.locality.title}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-[#7d6a59]">
              {stritezLiving.locality.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {stritezLiving.locality.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#b89a7c1f] bg-[#f7efe5] px-4 py-2 text-sm text-[#756150]"
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
                className="rounded-[26px] border border-[#b89a7c26] bg-[#f7efe5] p-5"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
                  {item.time}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#3f3125]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#7d6a59]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[30px] border border-[#b89a7c26] bg-[#f7efe5] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_20px_56px_-44px_rgba(98,69,45,0.2)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
                Rychlý dosah do měst
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#3f3125]">
                Každodenní dojezd bez ztráty kontaktu s přírodou.
              </h3>
            </div>
            <InquiryDialogTrigger className="inline-flex rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]">
              Mám zájem
            </InquiryDialogTrigger>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stritezLiving.locality.driveTimes.map((item) => (
              <article
                key={item.destination}
                className="rounded-[22px] border border-[#b89a7c1f] bg-white/88 px-4 py-4"
              >
                <p className="text-sm text-[#7d6a59]">{item.destination}</p>
                <p className="mt-2 text-2xl font-semibold text-[#3f3125]">{item.time}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[1240px]" id="galerie">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
              galerie domu
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              Výběr z aktuálních vizualizací a interiérů.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#7d6a59]">
            Výběr snímků ukazuje charakter domu, atmosféru interiéru i hlavní
            architektonické kvality projektu.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {selectedGallery.map((image, index) => (
            <article
              key={image.src}
              className={`overflow-hidden rounded-[28px] border border-white/70 bg-white/76 p-3 shadow-[0_28px_90px_-70px_rgba(92,68,48,0.18)] ${
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
        className="mx-auto mt-12 max-w-[1240px] rounded-[36px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_34px_100px_-74px_rgba(98,69,45,0.18)] backdrop-blur sm:px-8"
        id="financovani"
      >
        <div className="mx-auto max-w-[980px]">
          <article className="rounded-[32px] border border-[#b89a7c26] bg-white/82 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_28px_70px_-52px_rgba(98,69,45,0.2)] sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
              Financování domu
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-[#3f3125] sm:text-3xl">
              Ověřené specialistky pro financování domu.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#7d6a59]">
              Pro první orientaci i další financování koupě domu.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {financingSpecialists.map((specialist) => (
                <div
                  key={specialist.name}
                  className="rounded-[24px] border border-[#b89a7c1f] bg-[#f7efe5] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_12px_36px_-30px_rgba(98,69,45,0.18)] sm:p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[18px] border border-[#b89a7c1f] bg-white/80">
                      <img
                        alt={specialist.name}
                        className="h-full w-full object-contain object-top"
                        loading="lazy"
                        src={specialist.photo}
                      />
                    </div>
                    <p className="text-lg font-semibold text-[#3f3125]">
                      {specialist.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                className="rounded-full border border-[#b89a7c2e] bg-white/76 px-5 py-3 text-center text-sm font-extrabold text-[#3f3125]"
                href="/financovani"
              >
                Více o financování
              </Link>
              <InquiryDialogTrigger className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]">
                Otevřít poptávku
              </InquiryDialogTrigger>
            </div>
          </article>
        </div>
      </section>

      <section
        className="mx-auto mt-12 max-w-[1240px] rounded-[36px] border border-[#b89a7c26] bg-white/72 px-6 py-10 shadow-[0_34px_100px_-74px_rgba(98,69,45,0.18)] backdrop-blur sm:px-8"
        id="kontakt"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9b7d65]">
              kontakt
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-[#3f3125] sm:text-5xl">
              {stritezLiving.cta.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#7d6a59]">
              {stritezLiving.cta.text}
            </p>
          </div>

          <div className="rounded-[28px] border border-[#b89a7c26] bg-[#f7efe5] p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
              Napište nám
            </p>
            <a
              className="mt-6 inline-flex w-full justify-center rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]"
              href={`mailto:${stritezLiving.cta.email}`}
            >
              {stritezLiving.cta.email}
            </a>
            <p className="mt-4 text-sm leading-7 text-[#7d6a59]">
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
