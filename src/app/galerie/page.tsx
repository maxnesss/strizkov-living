import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { SiteFooter } from "@/components/site-footer";
import { balkerH114 } from "@/data/balkerH114";
import { stritezLiving } from "@/data/stritezLiving";

export const metadata: Metadata = {
  title: "Galerie | Střítež Living",
  description:
    "Galerie vizualizací a pohledů na rodinné domy v projektu Střítež Living.",
};

const currentYear = new Date().getFullYear();

export default function GalleryPage() {
  return (
    <PageShell
      languages={stritezLiving.languages}
      navigation={stritezLiving.navigation}
    >
      <section className="mx-auto max-w-[1240px]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {balkerH114.gallery.map((image, index) => {
            const isFeature = index % 5 === 0;
            const isCtaSlot = index === 6;

            return (
              <article
                key={image.src}
                className={`overflow-hidden rounded-[28px] border border-white/70 bg-white/76 p-3 shadow-[0_28px_90px_-70px_rgba(38,27,20,0.2)] ${
                  isFeature ? "xl:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-[22px] ${
                    isFeature ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    alt={image.alt}
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                    fill
                    sizes={
                      isFeature
                        ? "(max-width: 1280px) 100vw, 66vw"
                        : "(max-width: 1280px) 50vw, 33vw"
                    }
                    src={image.src}
                  />
                </div>

                {isCtaSlot ? (
                  <div className="mt-3 rounded-[22px] bg-[linear-gradient(135deg,#153252,#4d82c6)] px-5 py-5 text-white">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">
                      Zaujaly vás domy?
                    </p>
                    <p className="mt-3 text-xl font-semibold">
                      Podívejte se na dispozici, standard a další informace o nabídce.
                    </p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <Link
                        className="rounded-full bg-white px-5 py-3 text-center text-sm font-extrabold text-[#153252]"
                        href="/domy"
                      >
                        Prohlédnout domy
                      </Link>
                      <Link
                        className="rounded-full border border-white/30 px-5 py-3 text-center text-sm font-extrabold text-white"
                        href="/kontakt"
                      >
                        Nezávazná poptávka
                      </Link>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
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
