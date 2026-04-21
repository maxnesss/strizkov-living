export const stritezLiving = {
  brand: "Střítež Living",
  navigation: [
    { label: "Úvod", href: "/" },
    { label: "Projekt", href: "/projekt" },
    { label: "Domy", href: "/domy" },
    { label: "Galerie", href: "/galerie" },
    { label: "Lokalita", href: "/lokalita" },
    { label: "Financování", href: "/financovani" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  languages: [
    { code: "CZ", label: "Čeština", active: true },
    { code: "PL", label: "Polski", active: false },
    { code: "EN", label: "English", active: false },
  ],
  hero: {
    kicker: "6 rodinných domů s výhledem do krajiny",
    title: "Moderní bydlení s výhledem na Beskydy",
    description:
      "Střítež Living je komorní projekt šesti moderních rodinných domů v klidné části obce Střítež. Domy vycházejí ze stejného typového řešení, liší se především pozemkem, polohou v projektu a orientací v rámci lokality.",
  },
  project: {
    eyebrow: "O projektu",
    title: "Klidná lokalita, současná architektura a pohodlná dostupnost.",
    description:
      "Projekt spojuje komorní měřítko šesti domů, čistou přízemní architekturu a každodenní komfort. Výsledkem je bydlení pro klienty, kteří chtějí soukromí, kontakt s přírodou a současně dobré napojení na okolní města.",
    benefits: [
      "moderní domy v krásné přírodě",
      "klidná lokalita a pohodlná dostupnost",
      "ideální bydlení s výhledem do krajiny",
    ],
  },
  featuredHouse: {
    eyebrow: "Rodinné domy",
    title: "Přízemní dům 3+1 s velkorysým obytným prostorem",
    disposition: "3+1",
    area: "114 m²",
    plot: "1 200 m²",
    price: "8 900 000 Kč",
    pricePrefix: "Cena od",
    parking: "2 místa",
    type: "přízemní rodinný dům",
    status: "projekt / výstavba",
    description: [
      "Typový dům projektu nabízí přízemní dispozici 3+1 s důrazem na jednoduchý každodenní provoz a pohodlné navázání na zahradu.",
      "Hlavní obytný prostor s jídelnou tvoří přirozené centrum domu a plynule se otevírá směrem na terasu.",
      "Jednotlivé domy v projektu vycházejí ze stejného základního řešení, rozdíl tvoří především velikost a poloha pozemku.",
    ],
    layoutSummary:
      "Dispozice domu kombinuje dvě samostatné ložnice, hlavní ložnici, velký obytný prostor s jídelnou, samostatnou kuchyň a praktické zázemí včetně šatny a technické místnosti.",
  },
  locality: {
    eyebrow: "Lokalita",
    title: "Klidné bydlení kousek od Třince a Frýdku-Místku",
    description: [
      "Ve Stříteži vzniká bydlení s klidnějším tempem, otevřenými výhledy do krajiny a přirozeným kontaktem s okolní zelení. Domy jsou zasazené tak, aby místo působilo vzdušně, soukromě a bez dojmu husté zástavby.",
      "Pokud hledáte rovnováhu mezi venkovským charakterem a běžnou dostupností, právě tady ji můžete najít. Do okolních měst se dostanete rychle, ale doma vám zůstane pocit většího klidu, prostoru a odstupu od ruchu.",
    ],
    tags: ["klid", "příroda", "čerstvý vzduch", "soukromí"],
    amenities: [
      {
        title: "Školy a školky",
        time: "~ 6 minut",
        text: "Mateřské a základní školy v Ropici 6 minut autem.",
      },
      {
        title: "Nákupy a služby",
        time: "~ 10 minut",
        text: "Obchody, restaurace a běžné služby v Třinci do 10 minut.",
      },
      {
        title: "Sport a relax",
        time: "~ 15 minut",
        text: "Těrlicko, Žermanice i aquapark ve Frýdku-Místku nabízejí sport, koupání a relax v pohodlném dojezdu.",
      },
      {
        title: "Blízká města",
        time: "~ 10 až 30 min",
        text: "Třinec, Český Těšín, Jablunkov a další města jsou v pohodlném dojezdu autem.",
      },
    ],
    driveTimes: [
      { destination: "Frýdek-Místek", time: "10 min" },
      { destination: "Třinec", time: "10 min" },
      { destination: "Český Těšín", time: "15 min" },
      { destination: "Jablunkov", time: "20 min" },
    ],
    map: {
      label: "Střítež u Třince",
      link: "https://www.google.com/maps/search/?api=1&query=St%C5%99%C3%ADte%C5%BE+u+T%C5%99ince",
      points: [
        { label: "Střítež", offset: "left-[46%] top-[46%]" },
        { label: "Třinec", offset: "left-[64%] top-[40%]" },
        { label: "Frýdek-Místek", offset: "left-[20%] top-[24%]" },
        { label: "Český Těšín", offset: "left-[56%] top-[18%]" },
      ],
    },
  },
  financing: {
    eyebrow: "Financování",
    title: "Financování na míru",
    subtitle: "Jednoduchá cesta k vlastnímu domu",
    description: [
      "Financování vašeho domu řešíme komplexně, s důrazem na jednoduchost a individuální přístup.",
      "Financování celého projektu je zajištěno ve spolupráci s našimi ověřenými finančními specialistkami, které vás provedou celým procesem od prvního návrhu až po finální schválení.",
      "Díky této spolupráci dokážeme celý proces maximálně zjednodušit a sladit s průběhem výstavby jednotlivých domů.",
    ],
    benefits: [
      "hypotéka i bez vlastních zdrojů",
      "individuální řešení na míru",
      "hladký průběh navázaný na výstavbu",
      "osobní přístup po celou dobu",
    ],
    steps: [
      "Úvodní konzultace",
      "Návrh řešení financování",
      "Schválení hypotéky",
    ],
    specialists: ["Bc. Sabrina Donolatová", "Alena Bömerová"],
  },
  cta: {
    title: "Chcete zjistit dostupnost domů nebo možnosti financování?",
    text: "Ozvěte se nám a připravíme pro vás přehled nabídky, základní kalkulaci i další postup.",
    email: "prodej@stritez.cz",
  },
  footer: {
    description:
      "Střítež Living je komorní projekt šesti moderních rodinných domů s výhledem do krajiny a pohodlným napojením na Třinec, Frýdek-Místek i další města v regionu.",
    location: "Střítež, Beskydy",
  },
  pages: {
    project: {
      hero: {
        eyebrow: "Projekt Střítež Living",
        title: "Komorní rezidenční projekt pro klienty, kteří chtějí klid i každodenní pohodlí.",
        intro:
          "Projekt Střítež Living stojí na komorním měřítku, čisté přízemní architektuře a klidném rezidenčním charakteru. Každý z domů vychází ze stejného typového řešení, zatímco výsledný výběr ovlivňuje především pozemek, poloha domu a orientace v rámci projektu.",
      },
      stats: [
        { value: "6", label: "domů v komorním souboru" },
        { value: "1 podlaží", label: "čisté přízemní řešení bez schodů" },
        { value: "Beskydy", label: "výhledy a kontakt s krajinou" },
      ],
      pillars: [
        {
          title: "Měřítko, které dává soukromí",
          text: "Pouhých šest domů drží projekt v lidském měřítku. Nejde o hustou satelitní výstavbu, ale o klidnější rezidenční celek s větším odstupem mezi domy a přirozenějším kontaktem s okolní krajinou.",
        },
        {
          title: "Architektura bez efektních gest",
          text: "Domy sází na čisté linie, přízemní kompozici a otevřený obytný prostor. Výsledkem je nadčasový výraz, který nepůsobí okázale, ale dlouhodobě kvalitně.",
        },
        {
          title: "Bydlení připravené pro běžný život",
          text: "Projekt je navržený pro každodenní fungování rodiny: přímý kontakt se zahradou, dostatek parkování, komfortní dispozice a logické propojení interiéru s exteriérem.",
        },
      ],
      phases: [
        {
          step: "01",
          title: "Seznámení s nabídkou",
          text: "Klient dostane přehled domů, základní parametry, cenové rozpětí a rámcový harmonogram dalšího postupu.",
        },
        {
          step: "02",
          title: "Výběr vhodného domu",
          text: "Společně vybíráme konkrétní dům podle velikosti pozemku, polohy v projektu, orientace a celkového rozpočtu.",
        },
        {
          step: "03",
          title: "Financování a koordinace",
          text: "Na projekt navazuje financování i další kroky spojené s rezervací, smluvní dokumentací a koordinací výstavby.",
        },
      ],
      audience: [
        "pro rodiny hledající klidnější životní tempo",
        "pro klienty, kteří chtějí moderní dům bez okázalosti",
        "pro zájemce hledající větší kontakt s krajinou",
      ],
    },
    house: {
      hero: {
        eyebrow: "Rodinné domy",
        title: "Typový dům projektu jako základ celé nabídky Střítež Living.",
        intro:
          "Stránka domů ukazuje společný standard a charakter celé nabídky. Jednotlivé domy v projektu vycházejí ze stejného typového řešení a liší se hlavně pozemkem, polohou v projektu a orientací.",
      },
      highlights: [
        "velký obytný prostor navázaný na zahradu",
        "tři ložnice včetně soukromější hlavní ložnice",
        "přízemní provoz bez zbytečných bariér",
        "jasně čitelný standard a konstrukční systém",
      ],
      everydayMoments: [
        {
          title: "Ranní provoz bez kolizí",
          text: "Rozdělení soukromé a společné části pomáhá tomu, aby dům fungoval i v pracovním a školním rytmu. Každý člen domácnosti má své místo, ale hlavní denní zóna zůstává přirozeným společným centrem.",
        },
        {
          title: "Denní světlo jako hlavní kvalita",
          text: "Velké prosklené plochy podporují kontakt se zahradou a dávají interiéru klidnou, otevřenou atmosféru. Obytný prostor tak působí velkoryseji než samotná čísla v tabulce.",
        },
        {
          title: "Racionální provoz domu",
          text: "Technická místnost, úložné zázemí i parkování jsou řešené tak, aby dům nebyl jen hezkou vizualizací, ale dobře fungujícím každodenním domovem.",
        },
      ],
    },
    gallery: {
      hero: {
        eyebrow: "Galerie projektu",
        title: "Galerie",
        intro: "",
      },
      intro:
        "Galerie ukazuje atmosféru projektu, charakter domu i hlavní architektonické kvality celé nabídky.",
    },
    layout: {
      hero: {
        eyebrow: "Dispozice a plochy",
        title: "Půdorys, který dává smysl v každodenním rodinném režimu.",
        intro:
          "Půdorys přehledně ukazuje rozdělení hlavních místností, provozní logiku domu i návaznost obytné části na zahradu. Díky stejnému typovému řešení je tato dispozice dobrým základem pro orientaci v celé nabídce projektu.",
      },
      zones: [
        {
          title: "Denní zóna",
          text: "Společný obytný prostor s jídelnou a kuchyní tvoří srdce domu. Je navržený jako hlavní místo pro rodinný život, setkávání i kontakt s terasou a zahradou.",
        },
        {
          title: "Klidová část",
          text: "Ložnice jsou seskupené tak, aby měly větší míru soukromí a nebyly v přímém střetu s provozem obytné části. To zvyšuje komfort při běžném denním rytmu.",
        },
        {
          title: "Servisní zázemí",
          text: "Technická místnost, šatna i komunikační plocha pomáhají udržet pořádek v hlavních obytných místnostech a dávají domu lepší dlouhodobou použitelnost.",
        },
      ],
      notes: [
        "Dispozice představuje typové řešení, ze kterého jednotlivé domy v projektu vycházejí.",
        "Konkrétní nabídka se bude lišit především velikostí pozemku, orientací a polohou domu v rámci projektu.",
      ],
    },
    locality: {
      hero: {
        eyebrow: "Lokalita Střítež",
        title: "Místo, které nabízí klid, výhledy a stále dobrou vazbu na městské zázemí.",
        intro:
          "Pokud chcete bydlet klidněji, ale bez ztráty běžné dostupnosti, může pro vás být Střítež velmi přirozenou volbou. Lokalita spojuje kontakt s krajinou, každodenní praktičnost i dobré napojení na Třinec, Frýdek-Místek a další města v regionu.",
      },
      lifestyle: [
        {
          title: "Každodenní klid bez izolace",
          text: "Poloha projektu na okraji obce přináší méně ruchu, větší odstup od okolí a příjemnější kontakt s krajinou. Zároveň nejde o místo, které by komplikovalo běžný pracovní nebo rodinný režim.",
        },
        {
          title: "Beskydy jako součást běžného dne",
          text: "Výhledy, okolní trasy i blízkost přírody tu nejsou jen víkendovým doplňkem. Ve Stříteži se přirozeně propisují do každodenního života i celkové atmosféry bydlení.",
        },
        {
          title: "Rozumná dostupnost pro práci i školu",
          text: "Dostupnost do Třince, Frýdku-Místku i Českého Těšína drží lokalitu v praktické rovině. Klidnější bydlení tu není vykoupené složitým dojezdem ani pocitem odříznutí.",
        },
      ],
      nearbyReasons: [
        "rychlé spojení do Třince, Frýdku-Místku i Českého Těšína",
        "blízkost přírody, vody i volnočasových aktivit",
        "klidnější rezidenční charakter bez pocitu odříznutí",
      ],
    },
    financing: {
      hero: {
        eyebrow: "Financování",
        title: "Financování navázané na koupi domu, výstavbu i reálné možnosti vaší rodiny.",
        intro:
          "Financování je navržené jako přehledná součást celé koupě domu. Stránka ukazuje, s čím vám umíme pomoci, jaké scénáře dávají smysl a jak na sebe navazují jednotlivé kroky od rezervace po finální doplatek.",
      },
      introCards: [
        {
          title: "Hypotéka i vlastní zdroje",
          text: "Koupi domu je možné řešit kombinací vlastních prostředků a hypotečního úvěru. Důležité je najít strukturu, která bude dávat smysl nejen dnes, ale i ve chvíli předání domu.",
        },
        {
          title: "Koordinace s průběhem projektu",
          text: "Financování neřešíme odděleně od projektu. Postup ladíme tak, aby navazoval na rezervaci, smluvní dokumentaci, případné klientské změny i finální převzetí domu.",
        },
      ],
      scenarios: [
        {
          title: "Rodinné bydlení",
          text: "Pro klienty, kteří řeší dům pro vlastní bydlení, připravujeme přehledný rámec: rozpočet, výši vlastních zdrojů, vhodný typ úvěru a rozložení jednotlivých plateb v čase.",
        },
        {
          title: "Postupné rozhodování",
          text: "Pokud ještě nemáte jasno v konečné podobě financování, dává smysl začít orientační konzultací. Ta pomůže rychle zjistit, jaký dům a jaký postup jsou realistické.",
        },
        {
          title: "Klidnější administrativa",
          text: "Naším cílem není přidávat další vrstvu složitosti. Naopak pomáháme držet proces srozumitelný, aby se klient mohl soustředit na rozhodnutí o bydlení, ne na chaos v podkladech.",
        },
      ],
      supportItems: [
        "orientace v možnostech financování ještě před rezervací",
        "doporučení vhodného postupu podle vlastních zdrojů a rozpočtu",
        "sladění plateb s harmonogramem projektu",
        "napojení na ověřené finanční specialistky",
      ],
      paymentFlow: [
        {
          title: "Rezervace domu",
          text: "První krok slouží k zajištění vybraného domu a vytvoření prostoru pro další finanční i smluvní přípravu.",
        },
        {
          title: "Budoucí kupní smlouva",
          text: "Po rezervaci navazuje přesnější nastavení podmínek koupě, financování a dalších návazných kroků projektu.",
        },
        {
          title: "Klientské úpravy a doplnění standardu",
          text: "Pokud se řeší změny oproti standardu, promítají se přehledně do celkového rozpočtu tak, aby financování zůstalo pod kontrolou.",
        },
        {
          title: "Doplatek kupní ceny a převzetí domu",
          text: "Finální část kupní ceny se váže na dokončení projektu a předání domu. Díky tomu je celý proces čitelný i v závěrečné fázi.",
        },
      ],
      detailCards: [
        {
          title: "Úvodní orientace",
          text: "Na začátku řešíme rozpočet, představu o domě, možnosti vlastních zdrojů a základní rámec financování. Díky tomu se hned od začátku pohybujeme v realistických mantinelech.",
        },
        {
          title: "Nastavení variant",
          text: "Specialistky připraví možné scénáře financování a pomohou vybrat takový, který dobře navazuje na průběh projektu i plán rodiny.",
        },
        {
          title: "Koordinace s realizací",
          text: "Finanční řešení nepřipravujeme izolovaně. Vše ladíme s jednotlivými milníky projektu tak, aby byl postup srozumitelný a bez zbytečných prodlev.",
        },
      ],
      timeline: [
        {
          phase: "01",
          title: "První konzultace",
          text: "Základní orientace v rozpočtu, možnostech financování a vhodném typu domu.",
        },
        {
          phase: "02",
          title: "Výběr a rezervace",
          text: "Potvrzení vybraného domu a návazné nastavení dalšího postupu.",
        },
        {
          phase: "03",
          title: "Smluvní a finanční příprava",
          text: "Sladění podkladů, banky, vlastních zdrojů a případných klientských změn.",
        },
        {
          phase: "04",
          title: "Dokončení a předání",
          text: "Doplatek kupní ceny, finální smluvní kroky a převzetí domu.",
        },
      ],
      faq: [
        {
          question: "Je možné řešit financování i bez vysokých vlastních úspor?",
          answer:
            "Ano, cílem konzultace je najít realistickou variantu podle konkrétní situace klienta. U některých scénářů lze pracovat i s nižším objemem vlastních prostředků.",
        },
        {
          question: "Pomůžete i s porovnáním jednotlivých variant hypotéky?",
          answer:
            "Ano, součástí procesu je doporučení vhodného postupu a vysvětlení, jak se jednotlivé možnosti liší z pohledu měsíční zátěže i celkové strategie.",
        },
        {
          question: "Navazuje financování na výstavbu domu?",
          answer:
            "Ano, právě návaznost na průběh projektu je jednou z hlavních výhod koordinovaného řešení přímo v rámci Střítež Living.",
        },
      ],
    },
    contact: {
      hero: {
        eyebrow: "Kontakt",
        title: "Aktuální nabídka domů, ceny i další postup na jednom místě.",
        intro:
          "Na této stránce zjistíte aktuální dostupnost domů, základní cenovou orientaci i další postup od výběru přes rezervaci až po financování.",
      },
      reasons: [
        "získáte aktuální přehled konkrétně dostupných domů",
        "upřesníme cenu, pozemek, polohu domu v projektu a návazné kroky",
        "můžeme rovnou otevřít rezervaci, financování i další postup koupě",
      ],
      expectations: [
        {
          title: "1. Výběr konkrétního domu",
          text: "Navážeme na aktuálně dostupné domy a rychle si potvrdíme, který z nich pro vás dává největší smysl. Protože domy vycházejí z velmi podobné dispozice, řešíme hlavně polohu v projektu, velikost pozemku, orientaci, standard a cenový rámec.",
        },
        {
          title: "2. Přehled ceny a podmínek",
          text: "Dostanete jasnou orientaci v ceně vybraného domu, v tom, co je součástí nabídky, a jaké kroky budou následovat, pokud budete chtít pokračovat dál. Cílem je, abyste hned věděli, na čem jste a co dává smysl řešit jako další krok.",
        },
        {
          title: "3. Rezervace domu",
          text: "Pokud pro vás bude vybraný dům správnou volbou, navážeme rezervací a vysvětlíme přesný postup dalších navazujících kroků. Díky tomu budete mít hned od začátku jasno, jak bude prodej pokračovat a v jakém pořadí se bude vše řešit.",
        },
        {
          title: "4. Financování a smluvní návaznost",
          text: "Podle potřeby rovnou navážeme financováním, smluvní přípravou i dalším harmonogramem koupě. Celý proces držíme přehledný, konkrétní a navázaný na reálné kroky, které vedou od výběru domu až k jeho převzetí.",
        },
      ],
    },
  },
} as const;
