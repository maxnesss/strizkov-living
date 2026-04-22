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
          className={`rounded-[28px] border border-[#b89a7c33] px-5 py-4 backdrop-blur-[18px] transition duration-300 sm:px-6 ${
            isAtTop
              ? "bg-white/72 shadow-[0_24px_70px_-58px_rgba(98,69,45,0.24)]"
              : "bg-white/88 shadow-[0_30px_90px_-58px_rgba(98,69,45,0.32)]"
          }`}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <SiteLogo compact />

              <div className="flex items-center gap-2 rounded-full border border-[#b89a7c2e] bg-[#f7efe5] p-1 lg:hidden">
                {languages.map((language) => (
                  <span
                    key={language.code}
                    aria-label={language.label}
                    className={`select-none rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                      language.active
                        ? "bg-[linear-gradient(135deg,#a88362,#d1ae87)] text-white shadow-[0_10px_24px_-18px_rgba(139,103,71,0.4)]"
                        : "text-[#8d7460]"
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
                <div className="flex items-center gap-2 rounded-full border border-[#b89a7c2e] bg-[#f7efe5] p-1">
                  {languages.map((language) => (
                    <span
                      key={language.code}
                      aria-label={language.label}
                      className={`select-none rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                        language.active
                          ? "bg-[linear-gradient(135deg,#a88362,#d1ae87)] text-white shadow-[0_10px_24px_-18px_rgba(139,103,71,0.4)]"
                          : "text-[#8d7460]"
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
                      className="rounded-full border border-transparent bg-white/76 px-3.5 py-2.5 text-[13px] text-[#7d6a59] transition hover:border-[#b89a7c33] hover:bg-white hover:text-[#3f3125]"
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
