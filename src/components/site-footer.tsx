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

type SiteFooterProps = {
  brand: string;
  contactEmail: string;
  currentYear: number;
  footer: {
    description: string;
    location: string;
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
    <footer className="mx-auto mt-6 max-w-[1240px] rounded-[30px] border border-[#5885b626] bg-white/68 px-6 py-8 shadow-[0_28px_90px_-78px_rgba(46,86,130,0.4)] backdrop-blur sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.75fr_0.9fr]">
        <div>
          <SiteLogo compact href="/" />

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#5d7691]">
            {footer.description}
          </p>

          <div className="mt-5 inline-flex rounded-full border border-[#5885b62e] bg-[#f8fbff] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d8cb0]">
            {footer.location}
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
            Rychlá navigace
          </p>

          <nav className="mt-4 grid gap-2 sm:grid-cols-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                className="rounded-full bg-[#f8fbff] px-4 py-2.5 text-sm text-[#55708d] transition hover:bg-white hover:text-[#153252]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d8cb0]">
            Kontakt a jazyky
          </p>

          <a
            className="mt-4 inline-flex rounded-full bg-[linear-gradient(135deg,#4d82c6,#6cabec)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_-26px_rgba(76,131,199,0.9)]"
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
                    ? "bg-[linear-gradient(135deg,#4d82c6,#6cabec)] text-white"
                    : "bg-[#f8fbff] text-[#6b85a0]"
                }`}
                title={language.active ? language.label : `${language.label} brzy`}
              >
                {language.code}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-[#5d7691]">
            Aktuálně je připravená česká verze. Polská a anglická mutace budou
            navazovat v další etapě projektu.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-[#5885b61f] pt-5 text-center text-sm text-[#6b85a0]">
        <p>
          © {currentYear} {brand}
        </p>
        {footer.note ? <p className="mx-auto mt-3 max-w-3xl">{footer.note}</p> : null}
      </div>
    </footer>
  );
}
