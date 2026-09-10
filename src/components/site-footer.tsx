import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";

type NavigationItem = { label: string; href: string };
type LanguageItem = { code: string; label: string; active: boolean };
type SpecialistItem = { name: string; role?: string; phone: string; email: string; photo: string | null };
type SiteFooterProps = { brand: string; contactEmail: string; currentYear: number; footer: { description: string; location: string; companyName?: string; companyId?: string; note?: string }; languages: readonly LanguageItem[]; navigation: readonly NavigationItem[]; specialists?: readonly SpecialistItem[] };

export function SiteFooter({ brand, currentYear, navigation }: SiteFooterProps) {
  return <footer className="mt-16 border-t border-black/10 bg-[#f0efeb] text-[#171717]"><div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-[6.7vw]"><SiteLogo compact href="/" /><nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs">{navigation.map((item) => <Link className="transition hover:opacity-55" href={item.href} key={item.href}>{item.label}</Link>)}</nav><div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#77736e]"><span>© {currentYear} {brand}. Všechna práva vyhrazena.</span><Link className="hover:text-black" href="/gdpr">Zásady ochrany osobních údajů</Link><Link className="hover:text-black" href="/gdpr">Cookies</Link></div></div></footer>;
}
