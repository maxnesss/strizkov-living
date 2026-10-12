export type HouseType = "balker" | "arthaus";
export type Availability = "on_request" | "available" | "reserved" | "sold";
export const houseTypes = {
  balker: {
    name: "BALKER",
    label: "Typ A",
    description:
      "Výrazná dřevěná fasáda, velkorysé prosklení a krytá terasa. Domov v přirozeném kontaktu se zahradou.",
    images: [
      {
        src: "/images/balker/terrace.webp",
        alt: "Návrh domu BALKER s dřevěnou fasádou a krytou terasou",
      },
      {
        src: "/images/balker/garden.webp",
        alt: "Návrh domu BALKER, pohled ze zahrady na prosklený štít",
      },
    ],
    note: "První návrh vizualizace BALKER. Finální podoba se připravuje.",
  },
  arthaus: {
    name: "ARTHAUS",
    label: "Typ B",
    description:
      "Druhé architektonické řešení projektu. Vzdušný obytný prostor a propojení interiéru s okolní přírodou.",
    images: [
      {
        src: "/images/arthaus-preliminary.png",
        alt: "Předběžná vizualizace domu ARTHAUS",
      },
      {
        src: "/images/d115/gallery/d115-01.jpg",
        alt: "Dosavadní vizualizace domu ARTHAUS, další pohled",
      },
    ],
    note: "Předběžná vizualizace ARTHAUS. Finální podoba se připravuje.",
  },
} as const;

export type House = {
  number: string;
  slug: string;
  name: string;
  type: HouseType | null;
  plot: string | null;
  area: string | null;
  layout: string | null;
  price: string | null;
  construction: "construction" | "preparation";
  availability: Availability;
  plans: { title: string; href: string }[];
  standard: readonly string[];
};

// Number-to-type assignments and replacement plans await client confirmation.
// Retain previously supplied plot sizes; do not copy sample figures from the mockup.
export const houses: House[] = Array.from({ length: 6 }, (_, i) => ({
  number: String(i + 1),
  slug: `living-${i + 1}`,
  name: `Living ${i + 1}`,
  type: null,
  plot: i === 0 ? "1 286 m²" : i === 1 ? "1 294 m²" : null,
  area: i === 0 ? "216 m²" : null,
  layout: i === 0 ? "6+kk" : null,
  price: null,
  construction: i < 2 ? "construction" : "preparation",
  availability: "on_request",
  plans: [],
  standard:
    i === 0
      ? [
          "Tepelné čerpadlo",
          "Rekuperace",
          "Klimatizace",
          "Podlahové vytápění",
          "Zabezpečovací systém",
          "Kamerový systém",
          "Chytrá domácnost",
          "Venkovní žaluzie",
          "Krytá terasa",
          "Carport pro 2 vozy",
          "Sauna",
          "Oplocení pozemku",
        ]
      : [],
}));

export const housesCopy = {
  eyebrow: "Naše domy",
  title: "Šest domů. Dvě architektonická řešení. Jeden projekt.",
  intro:
    "BALKER a ARTHAUS. Dva přístupy k bydlení, společný klid, soukromí a blízkost přírody ve Stříteži pod Beskydami.",
  progress:
    "Aktuálně vznikají dvě základové desky pro domy BALKER. Další domy a nové vizualizace připravujeme.",
  assignmentNote:
    "Přiřazení typů BALKER a ARTHAUS ke konkrétním domům bude upřesněno. Obrázky představují jednotlivé typy domů.",
  pending: "Bude upřesněno",
  type: "Typ domu",
  area: "Užitná plocha",
  layout: "Dispozice",
  plot: "Pozemek",
  price: "Cena",
  construction: "Stav výstavby",
  availability: "Dostupnost",
  constructionLabels: {
    construction: "Ve výstavbě",
    preparation: "V přípravě",
  },
  availabilityLabels: {
    on_request: "Na dotaz",
    available: "Volný",
    reserved: "Rezervováno",
    sold: "Prodáno",
  },
  detail: "Zobrazit detail",
  back: "Všechny domy",
  collection: "Vyberte si svůj domov",
  plansTitle: "Půdorysy a dokumentace",
  plansPending:
    "Aktuální půdorysy pro tento dům připravujeme. Napište nám a rádi s vámi projdeme dostupné podklady i další postup.",
  showType: "Zobrazit typ",
  hideType: "Skrýt typ",
  typeSpecsPending: "Plochu, dispozici a počet domů tohoto typu upřesníme.",
  typeContact: "Zeptat se na podrobnosti",
  typeCount: "Domů tohoto typu",
  galleryTitle: "Dvě podoby vašeho domova",
  standardTitle: "Standard domu",
  standardIntro: "Living 1 je dodáván včetně následujícího vybavení.",
  inquiry: "Mám zájem o tento dům",
  inquirySubject: "Zájem o dům",
  inquiryBody: "Dobrý den, mám zájem o více informací k domu",
  cta: "Najděte svůj domov ve Stříteži.",
  project: "Prohlédnout celý projekt",
} as const;
