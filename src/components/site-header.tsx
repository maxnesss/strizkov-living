"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { SiteLogo } from "@/components/site-logo";

type NavigationItem = { label: string; href: string };
type LanguageItem = { code: string; label: string; active: boolean };
type SiteHeaderProps = { navigation: readonly NavigationItem[]; languages: readonly LanguageItem[] };

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const pathname = usePathname();
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f7f6f2]/95 backdrop-blur-sm"><div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:px-[6.7vw]"><SiteLogo compact href="/" /><nav aria-label="Hlavní navigace" className="hidden items-center gap-8 lg:flex">{navigation.map((item) => { const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href); return <Link className={`border-b pb-1 text-xs transition hover:opacity-55 ${active ? "border-black" : "border-transparent"}`} href={item.href} key={item.href}>{item.label}</Link>; })}</nav><InquiryDialogTrigger className="border border-[#171717] px-4 py-3 text-[11px] font-medium transition hover:bg-[#171717] hover:text-white sm:px-6" intent="house_viewing"><span className="hidden sm:inline">Domluvte si prohlídku</span><span className="sm:hidden">Prohlídka</span><span aria-hidden="true" className="ml-3 text-lg leading-none">→</span></InquiryDialogTrigger></div></header>;
}
