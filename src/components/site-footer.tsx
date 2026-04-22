import Link from "next/link";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
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
};

export function SiteFooter({
  brand,
  contactEmail,
  currentYear,
  footer,
  languages,
  navigation,
}: SiteFooterProps) {
  return (
    <footer className="mx-auto mt-6 max-w-[1240px] rounded-[30px] border border-[#b89a7c26] bg-white/68 px-6 py-8 text-center shadow-[0_28px_90px_-78px_rgba(98,69,45,0.22)] backdrop-blur sm:px-8 lg:text-left">
      <div className="grid gap-8 justify-items-center lg:grid-cols-3 lg:gap-10 lg:justify-items-stretch">
        <div className="min-w-0">
          <SiteLogo compact href="/" />

          <p className="mt-4 max-w-md text-sm leading-7 text-[#7d6a59] lg:max-w-md">
            {footer.description}
          </p>

          <div className="mt-5 inline-flex rounded-full border border-[#b89a7c2e] bg-[#f7efe5] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b7d65]">
            {footer.location}
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
            Rychlá navigace
          </p>

          <nav className="mt-4 grid gap-2 sm:grid-cols-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                className="rounded-full bg-[#f7efe5] px-4 py-2.5 text-sm text-[#756150] transition hover:bg-white hover:text-[#3f3125]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
            <InquiryDialogTrigger
              className="rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-4 py-2.5 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)] transition hover:brightness-105"
            >
              Mám zájem
            </InquiryDialogTrigger>
          </nav>
        </div>

        <div className="min-w-0 lg:justify-self-start">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7d65]">
            Kontakt a jazyky
          </p>

          <a
            className="mt-4 inline-flex rounded-full bg-[linear-gradient(135deg,#a88362,#d1ae87)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(139,103,71,0.4)]"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>

          <div className="mt-5 flex flex-wrap gap-2">
            {languages.map((language) => (
              <span
                key={language.code}
                className={`select-none rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                  language.active
                    ? "bg-[linear-gradient(135deg,#a88362,#d1ae87)] text-white"
                    : "bg-[#f7efe5] text-[#8d7460]"
                }`}
                title={language.active ? language.label : `${language.label} brzy`}
              >
                {language.code}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[#b89a7c1f] pt-5 text-center text-sm text-[#8d7460]">
        <p>
          © {currentYear} {brand}
          {footer.companyName ? ` · ${footer.companyName}` : ""}
        </p>
        {footer.note ? <p className="mx-auto mt-3 max-w-3xl">{footer.note}</p> : null}
      </div>
    </footer>
  );
}
