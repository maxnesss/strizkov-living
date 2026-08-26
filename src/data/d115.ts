export const d115 = {
  sourceUrls: [
    "https://www.arthaus.pl/projekty/d115",
    "http://fd.poldan.pl/pl/art/dom-jednorodzinny-d-115.34.html",
  ],
  model: "Living",
  intro:
    "Dvoupodlažní rodinný dům s obytným podkrovím, otevřeným obytným prostorem do krovu a přirozeným propojením se zahradou.",
  stats: [
    { value: "94,55 m²", label: "užitná plocha 1. NP" },
    { value: "20,39 m²", label: "užitná plocha 2. NP" },
    { value: "150 m²", label: "plocha domu" },
    { value: "2 podlaží", label: "1. NP a obytné podkroví" },
  ],
  highlights: [
    "otevřený obývací prostor s kuchyní až do krovu",
    "tři samostatné pokoje v 1. NP",
    "jedna velká obytná místnost v podkroví",
    "možnost rozdělit podkroví na dvě místnosti",
    "dvě koupelny a praktické technické zázemí",
    "přímé propojení obytné části s terasou a zahradou",
  ],
  floorPlans: [
    {
      title: "1. NP",
      area: "94,55 m²",
      description:
        "Hlavní obytné podlaží s velkorysým obývacím prostorem, kuchyní, třemi pokoji, dvěma koupelnami a technickým zázemím.",
      src: "/images/d115/plan/living-1-floor-ground-cropped.png",
      pdf: "/images/d115/plan/RD02-1NP.pdf",
      alt: "Půdorys 1. NP domu Living 1, varianta RD02",
    },
    {
      title: "2. NP · obytné podkroví",
      area: "20,39 m² užitné plochy",
      description:
        "Otevřená obytná místnost s podlahovou plochou 45,56 m². V budoucnu ji lze upravit a rozdělit na dvě místnosti.",
      src: "/images/d115/plan/living-1-floor-attic-cropped.png",
      pdf: "/images/d115/plan/RD02-2NP.pdf",
      alt: "Půdorys 2. NP domu Living 1, varianta RD02",
    },
  ],
  roomSchedule: [
    { floor: "1. NP", room: "Obývací prostor s kuchyní", area: "34,91 m²" },
    { floor: "1. NP", room: "Pokoj", area: "11,66 m²" },
    { floor: "1. NP", room: "Pokoj", area: "11,66 m²" },
    { floor: "1. NP", room: "Ložnice", area: "13,96 m²" },
    { floor: "1. NP", room: "Komunikace a schodiště", area: "10,30 m²" },
    { floor: "1. NP", room: "Technická místnost", area: "3,09 m²" },
    { floor: "1. NP", room: "Koupelna", area: "5,09 m²" },
    { floor: "1. NP", room: "Koupelna", area: "3,88 m²" },
    { floor: "2. NP", room: "Obytné podkroví", area: "20,39 m²" },
  ],
  storySections: [
    {
      title: "Obytný prostor otevřený do krovu",
      text: "Srdcem domu je obývací pokoj s kuchyní a jídelnou. Vysoký strop a otevřený průhled do podkroví dodávají prostoru světlo, vzdušnost a nezaměnitelný charakter.",
      image: "/images/d115/gallery/d115-04.jpg",
      imageAlt: "Otevřený interiér domu Living",
    },
    {
      title: "Klidná soukromá část v přízemí",
      text: "Tři samostatné pokoje, dvě koupelny a praktické zázemí soustřeďují vše důležité pro každodenní život do hlavního podlaží.",
      image: "/images/d115/gallery/d115-03.jpg",
      imageAlt: "Vizualizace dispozice domu Living",
    },
    {
      title: "Podkroví, které se umí přizpůsobit",
      text: "Ve druhém podlaží zatím vzniká jedna velká obytná místnost. Dispozice ale umožňuje budoucí rozdělení na dvě samostatné místnosti.",
      image: "/images/d115/gallery/d115-05.jpg",
      imageAlt: "Obytné podkroví domu Living",
    },
    {
      title: "Jednoduchá architektura s výrazným štítem",
      text: "Čistý podlouhlý objem, sedlová střecha a velká prosklení vytvářejí současný dům, který přirozeně zapadá do beskydské krajiny.",
      image: "/images/d115/gallery/d115-02.jpg",
      imageAlt: "Vizualizace exteriéru domu Living",
    },
  ],
  gallery: [
    { src: "/images/d115/d115-hero.jpg", alt: "Vizualizace domu Living" },
    { src: "/images/d115/gallery/d115-01.jpg", alt: "Vizualizace domu Living, pohled 1" },
    { src: "/images/d115/gallery/d115-02.jpg", alt: "Vizualizace domu Living, pohled 2" },
    { src: "/images/d115/gallery/d115-03.jpg", alt: "Vizualizace dispozice domu Living" },
    { src: "/images/d115/gallery/d115-04.jpg", alt: "Vizualizace obytného prostoru domu Living" },
    { src: "/images/d115/gallery/d115-05.jpg", alt: "Vizualizace interiéru domu Living" },
  ],
} as const;
