"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

type SiteHeaderProps = {
  navigation: readonly NavigationItem[];
  languages: readonly LanguageItem[];
};

export function SiteHeader({ navigation, languages }: SiteHeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;

      setIsAtTop(currentScrollY < 20);

      if (currentScrollY < 20) {
        setIsVisible(true);
      } else if (delta > 8) {
        setIsVisible(false);
      } else if (delta < -6) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-4 z-50 px-5 transition duration-300 sm:px-8 lg:px-10 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-[1240px]">
        <div
          className={`rounded-[28px] border border-[#5885b633] px-5 py-4 backdrop-blur-[18px] transition duration-300 sm:px-6 ${
            isAtTop
              ? "bg-white/72 shadow-[0_24px_70px_-58px_rgba(46,86,130,0.45)]"
              : "bg-white/88 shadow-[0_30px_90px_-58px_rgba(46,86,130,0.55)]"
          }`}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <SiteLogo compact />

              <div className="flex items-center gap-2 rounded-full border border-[#5885b62e] bg-[#f8fbff] p-1 lg:hidden">
                {languages.map((language) => (
                  <span
                    key={language.code}
                    aria-label={language.label}
                    className={`select-none rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                      language.active
                        ? "bg-[linear-gradient(135deg,#4d82c6,#6cabec)] text-white shadow-[0_10px_24px_-18px_rgba(76,131,199,0.9)]"
                        : "text-[#6b85a0]"
                    }`}
                    title={language.active ? language.label : `${language.label} brzy`}
                  >
                    {language.code}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <div className="hidden lg:flex">
                <div className="flex items-center gap-2 rounded-full border border-[#5885b62e] bg-[#f8fbff] p-1">
                  {languages.map((language) => (
                    <span
                      key={language.code}
                      aria-label={language.label}
                      className={`select-none rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                        language.active
                          ? "bg-[linear-gradient(135deg,#4d82c6,#6cabec)] text-white shadow-[0_10px_24px_-18px_rgba(76,131,199,0.9)]"
                          : "text-[#6b85a0]"
                      }`}
                      title={language.active ? language.label : `${language.label} brzy`}
                    >
                      {language.code}
                    </span>
                  ))}
                </div>
              </div>

              <nav className="overflow-x-auto">
                <div className="flex min-w-max gap-1.5 lg:justify-end">
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      className="rounded-full border border-transparent bg-white/76 px-3.5 py-2.5 text-[13px] text-[#5d7691] transition hover:border-[#5885b633] hover:bg-white hover:text-[#153252]"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
