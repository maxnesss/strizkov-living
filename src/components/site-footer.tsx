import Image from "next/image";
import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";

type NavigationItem = {
  label: string;
  href: string;
};

type LanguageItem = {
  code: string;
  label: string;
  active: boolean;
};

type SpecialistItem = {
  name: string;
  role?: string;
  phone: string;
  email: string;
  photo: string;
};

type SiteFooterProps = {
  brand: string;
  contactEmail: string;
  currentYear: number;
  footer: {
    description: string;
    location: string;
    companyName?: string;
    companyId?: string;
    note?: string;
  };
  languages: readonly LanguageItem[];
  navigation: readonly NavigationItem[];
  specialists?: readonly SpecialistItem[];
};

const legalLinks = [
  { label: "Ochrana osobních údajů", href: "/gdpr" },
  { label: "Zásady cookies", href: "/gdpr" },
] as const;

export function SiteFooter({
  brand,
  currentYear,
  footer,
  specialists = [],
}: SiteFooterProps) {
  return (
    <footer className="mx-auto mt-6 max-w-[1240px] overflow-hidden rounded-[18px] border border-[#b89a7c26] bg-white/76 text-[#211914] shadow-[0_28px_90px_-78px_rgba(98,69,45,0.22)] backdrop-blur">
      <div className="grid gap-0 divide-y divide-[#b89a7c26] lg:grid-cols-[1.25fr_0.9fr_1.42fr_1.42fr] lg:divide-x lg:divide-y-0">
        <section className="px-6 py-6">
          <SiteLogo compact href="/" />
          <p className="mt-4 max-w-[18rem] text-sm font-semibold leading-6 text-[#3f3125]">
            Domov pod Beskydy
          </p>
          <p className="mt-3 max-w-[17rem] text-sm leading-6 text-[#55463a]">
            {footer.description}
          </p>
        </section>

        <section className="px-6 py-6">
          <p className="text-base font-semibold text-[#211914]">
            Developer projektu
          </p>
          <p className="mt-4 text-sm font-semibold text-[#211914]">
            {footer.companyName}
          </p>
          {footer.companyId ? (
            <p className="mt-3 text-sm text-[#3f3125]">
              IČO: {footer.companyId}
            </p>
          ) : null}
        </section>

        {specialists.slice(0, 2).map((specialist) => (
          <section
            className="grid gap-4 px-6 py-6 sm:grid-cols-[5.75rem_1fr] sm:items-center"
            key={specialist.email}
          >
            <div className="relative h-28 w-[5.75rem] overflow-hidden rounded-[10px] bg-[#f7efe5]">
              <Image
                alt={specialist.name}
                className="object-cover object-top"
                fill
                sizes="92px"
                src={specialist.photo}
                unoptimized
              />
            </div>

            <div>
              <h2 className="text-base font-semibold leading-tight text-[#211914]">
                {specialist.name}
              </h2>
              {specialist.role ? (
                <p className="mt-2 max-w-[13rem] text-sm leading-6 text-[#55463a]">
                  {specialist.role}
                </p>
              ) : null}

              <div className="mt-4 grid gap-2.5 text-sm text-[#211914]">
                <a
                  className="flex items-center gap-2.5 transition hover:text-[#8e6748]"
                  href={`tel:${specialist.phone.replaceAll(" ", "")}`}
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    ☎
                  </span>
                  {specialist.phone}
                </a>
                <a
                  className="flex items-start gap-2.5 transition hover:text-[#8e6748]"
                  href={`mailto:${specialist.email}`}
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    ✉
                  </span>
                  <span className="break-words text-[13px] leading-5">
                    {specialist.email}
                  </span>
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-2 border-t border-[#b89a7c26] px-6 py-3 text-center text-sm text-[#55463a] lg:flex-row lg:gap-4">
        <p>© {currentYear} {brand}</p>
        <span className="hidden h-5 w-px bg-[#b89a7c40] lg:block" />
        {footer.companyName && footer.companyId ? (
          <p>
            Developer projektu: {footer.companyName}, IČO {footer.companyId}
          </p>
        ) : null}
        {legalLinks.map((item) => (
          <div className="contents" key={item.label}>
            <span className="hidden h-5 w-px bg-[#b89a7c40] lg:block" />
            <Link className="transition hover:text-[#8e6748]" href={item.href}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
}
