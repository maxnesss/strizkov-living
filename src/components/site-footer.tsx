import Image from "next/image";
import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { stritezLiving } from "@/data/stritezLiving";

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
  photo: string | null;
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
}: SiteFooterProps) {
  const salesContact = stritezLiving.contactTeam.sales;
  const financingContacts = stritezLiving.contactTeam.financing;

  return (
    <footer className="mx-auto mt-6 max-w-[1240px] overflow-hidden rounded-[18px] border border-[#b89a7c26] bg-white/76 text-[#211914] shadow-[0_28px_90px_-78px_rgba(98,69,45,0.22)] backdrop-blur">
      <div className="grid gap-0 divide-y divide-[#b89a7c26] lg:grid-cols-[minmax(22rem,1.4fr)_minmax(15rem,0.9fr)_minmax(18rem,1.25fr)_minmax(18rem,1.25fr)] lg:divide-x lg:divide-y-0">
        <section className="min-w-0 px-6 py-6">
          <SiteLogo compact href="/" />
          <p className="mt-4 max-w-[18rem] text-sm font-semibold leading-6 text-[#3f3125]">
            Domov pod Beskydy
          </p>
          <p className="mt-3 max-w-[17rem] text-sm leading-6 text-[#55463a]">
            {footer.description}
          </p>
        </section>

        <section className="min-w-0 px-6 py-6">
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

        <section className="grid min-w-0 gap-4 px-6 py-6 sm:grid-cols-[5.75rem_minmax(0,1fr)] sm:items-center">
          <div className="relative h-28 w-[5.75rem] overflow-hidden rounded-[10px] border border-dashed border-[#b89a7c70] bg-[#f7efe5]">
            {salesContact.photo ? (
              <Image
                alt={salesContact.name}
                className="object-cover object-top"
                fill
                sizes="92px"
                src={salesContact.photo}
                unoptimized
              />
            ) : null}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a18168]">
              {salesContact.role}
            </p>
            <h2 className="mt-2 text-base font-semibold leading-tight text-[#211914]">
              {salesContact.name}
            </h2>
            <div className="mt-4 grid gap-2.5 text-sm text-[#211914]">
              <a
                className="flex items-center gap-2.5 transition hover:text-[#8e6748]"
                href={`tel:${salesContact.phone.replaceAll(" ", "")}`}
              >
                <span aria-hidden="true" className="text-base leading-none">☎</span>
                {salesContact.phone}
              </a>
              <a
                className="flex items-start gap-2.5 transition hover:text-[#8e6748]"
                href={`mailto:${salesContact.email}`}
              >
                <span aria-hidden="true" className="text-base leading-none">✉</span>
                <span className="break-words text-[13px] leading-5">{salesContact.email}</span>
              </a>
            </div>
          </div>
        </section>

        <section className="min-w-0 px-6 py-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a18168]">
            Financování
          </p>
          <div className="mt-4 grid gap-5">
            {financingContacts.map((specialist) => (
              <div className="grid min-w-0 gap-3 sm:grid-cols-[4.25rem_minmax(0,1fr)] sm:items-center" key={specialist.email}>
                <div className="relative h-[4.25rem] w-[4.25rem] overflow-hidden rounded-[10px] bg-[#f7efe5]">
                  <Image
                    alt={specialist.name}
                    className="object-cover object-top"
                    fill
                    sizes="68px"
                    src={specialist.photo}
                    unoptimized
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-semibold leading-tight text-[#211914]">{specialist.name}</h2>
                  <a className="mt-2 block break-words text-[13px] leading-5 transition hover:text-[#8e6748]" href={`mailto:${specialist.email}`}>
                    {specialist.email}
                  </a>
                  <a className="mt-1 block text-[13px] leading-5 transition hover:text-[#8e6748]" href={`tel:${specialist.phone.replaceAll(" ", "")}`}>
                    {specialist.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
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
