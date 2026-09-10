import Image from "next/image";
import Link from "next/link";
import { InquiryDialogTrigger } from "@/components/inquiry-dialog";
import { SiteLogo } from "@/components/site-logo";
import { d115 } from "@/data/d115";
import { stritezLiving } from "@/data/stritezLiving";

const benefits = [
  { title: "Velké pozemky\na dostatek soukromí", text: "Prostor pro váš život, rodinu i odpočinek." },
  { title: "Výhledy\nna Beskydy", text: "Každý den výjimečné scenérie přímo z domova." },
  { title: "Moderní architektura\na kvalitní provedení", text: "Nadčasový design s důrazem na detail." },
  { title: "Skvělá dostupnost\na kompletní občanská vybavenost", text: "Klidná lokalita s rychlým spojením do města." },
] as const;

function Eyebrow({ children }: { children: string }) {
  return <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#242424]">{children}<span aria-hidden="true" className="h-px w-14 bg-[#222]/45" /></p>;
}

function Arrow() { return <span aria-hidden="true" className="ml-3 text-lg leading-none">→</span>; }

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f6f2] text-[#171717]">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-black/10 bg-[#f7f6f2]/90 backdrop-blur-sm">
        <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-[6.7vw]">
          <SiteLogo compact href="/" />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavní navigace">
            {stritezLiving.navigation.map((item) => <Link className="text-xs transition hover:opacity-55" href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
          <InquiryDialogTrigger className="border border-[#171717] px-4 py-3 text-[11px] font-medium transition hover:bg-[#171717] hover:text-white sm:px-6" intent="house_viewing"><span className="hidden sm:inline">Domluvte si prohlídku</span><span className="sm:hidden">Prohlídka</span><Arrow /></InquiryDialogTrigger>
        </div>
      </header>

      <section className="relative flex min-h-[680px] items-end overflow-hidden pt-20 sm:min-h-[720px] lg:min-h-[740px]">
        <Image alt="Moderní rodinné domy s výhledem do krajiny" className="object-cover object-[64%_center]" fill preload sizes="100vw" src="/images/balker/terrace.webp" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,246,242,0.98)_0%,rgba(247,246,242,0.91)_31%,rgba(247,246,242,0.25)_62%,rgba(247,246,242,0.04)_100%)]" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 sm:px-10 lg:px-[6.7vw] lg:pb-20"><div className="max-w-[580px]"><Eyebrow>Střítež · Beskydy</Eyebrow><h1 className="display-font mt-7 text-[clamp(3rem,5.4vw,5.2rem)] leading-[0.98] tracking-[-0.055em]">Prodej 6 rodinných domů s výhledem na Beskydy</h1><p className="mt-6 max-w-[410px] text-sm leading-6 text-[#393939] sm:text-[15px]">Moderní bydlení v klidné lokalitě, kde se snoubí příroda, prostor a nadčasová architektura.</p><InquiryDialogTrigger className="mt-7 inline-flex items-center bg-[#171717] px-5 py-4 text-xs text-white transition hover:bg-[#3b3b3b]" intent="house_viewing">Domluvte si prohlídku <Arrow /></InquiryDialogTrigger></div></div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:px-[6.7vw] lg:py-28"><div><Eyebrow>O projektu</Eyebrow><h2 className="display-font mt-7 max-w-md text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl">Místo pro váš nový příběh</h2></div><div className="self-end lg:pb-2"><p className="max-w-md text-[15px] leading-6 text-[#363636]">Střítež Living je rezidenční projekt rodinných domů v srdci Beskyd. Nabízí klidné bydlení obklopené přírodou, velkorysé pozemky a promyšlenou architekturu, která respektuje okolní krajinu.</p><Link className="mt-6 inline-flex items-center border-b border-[#171717] pb-1 text-sm transition hover:opacity-55" href="/projekt">Poznat projekt <Arrow /></Link></div></section>

      <section className="border-t border-black/8 bg-[#faf9f6]"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-[6.7vw] lg:py-24"><Eyebrow>Proč Střítež Living</Eyebrow><h2 className="display-font mt-7 max-w-xl text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl">Hodnoty, které dělají domov</h2><div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">{benefits.map((benefit, index) => <article key={benefit.title}><p className="display-font text-7xl leading-none tracking-[-0.07em] text-[#dcd7cf]">0{index + 1}</p><h3 className="display-font mt-5 whitespace-pre-line text-xl leading-[1.1] tracking-[-0.035em]">{benefit.title}</h3><p className="mt-5 max-w-[210px] text-sm leading-5 text-[#77736e]">{benefit.text}</p></article>)}</div></div></section>

      <section className="grid lg:grid-cols-2"><div className="relative min-h-[430px] overflow-hidden lg:min-h-[580px]"><Image alt={d115.gallery[4].alt} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src={d115.gallery[4].src} /><p className="absolute bottom-6 right-7 text-xs tracking-[0.15em] text-white">01 / 03</p></div><div className="flex items-center bg-[#f0efeb] px-6 py-20 sm:px-10 lg:px-[13.5%]"><div className="max-w-md"><Eyebrow>Domy</Eyebrow><h2 className="display-font mt-7 text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl">Promyšlené domy pro moderní život</h2><p className="mt-7 text-sm leading-6 text-[#5b5955]">Každý dům v projektu Střítež Living je navržen s důrazem na funkčnost, estetiku a harmonii s okolní přírodou. Nabízíme různé typy domů s velkými pozemky, které splní potřeby rodin i jednotlivců.</p><Link className="mt-7 inline-flex items-center bg-[#171717] px-5 py-4 text-xs text-white transition hover:bg-[#3b3b3b]" href="/domy">Zobrazit dostupné domy <Arrow /></Link></div></div></section>

      <section className="relative min-h-[510px] overflow-hidden"><Image alt="Krajina Beskyd v okolí Stříteže" className="object-cover" fill sizes="100vw" src="/images/locality/lokalita-hero.webp" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,246,242,0.94),rgba(247,246,242,0.48)_47%,rgba(247,246,242,0.04))]" /><div className="relative mx-auto flex min-h-[510px] max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:px-[6.7vw]"><div className="max-w-[510px]"><Eyebrow>Lokalita</Eyebrow><h2 className="display-font mt-7 text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl">Příroda i město na dosah</h2><p className="mt-6 text-sm leading-6 text-[#383838]">Střítež nabízí jedinečné spojení klidného bydlení v přírodě a výborné dostupnosti do Frýdku-Místku, Ostravy i dalších měst.</p><Link className="mt-6 inline-flex items-center border-b border-[#171717] pb-1 text-sm transition hover:opacity-55" href="/lokalita">Objevte lokalitu <Arrow /></Link></div></div></section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:px-[6.7vw] lg:py-24"><div><Eyebrow>Kontakt</Eyebrow><h2 className="display-font mt-7 max-w-md text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl">Domluvte si osobní prohlídku</h2></div><div className="self-end"><p className="max-w-md text-[15px] leading-6 text-[#363636]">Rádi vám představíme projekt, dostupné domy a zodpovíme všechny vaše dotazy.</p><Link className="mt-7 inline-flex items-center bg-[#171717] px-5 py-4 text-xs text-white transition hover:bg-[#3b3b3b]" href="/kontakt">Přejít na kontakt <Arrow /></Link></div></section>

      <footer className="border-t border-black/10 bg-[#f0efeb]"><div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-[6.7vw]"><SiteLogo compact href="/" /><nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs">{stritezLiving.navigation.map((item) => <Link className="transition hover:opacity-55" href={item.href} key={item.href}>{item.label}</Link>)}</nav><p className="text-xs text-[#77736e]">© {new Date().getFullYear()} Střítež Living. Všechna práva vyhrazena.</p></div></footer>
    </main>
  );
}
