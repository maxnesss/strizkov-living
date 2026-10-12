# Střítež Living

Marketing website for the `Střítež Living` residential project.

The site is built in `Next.js 16` with the App Router, `React 19`, `TypeScript`, and `Tailwind CSS 4`.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Other useful commands:

```bash
npm run lint
npm run build
npm run start
```

## Project Notes

- The project presents a small residential development with six houses.
- Public copy should stay clean, calm, premium, and sales-focused.
- The houses are presented in two architectural types: BALKER and ARTHAUS.
- House-to-type assignments and updated floor plans await client confirmation.
- Czech is the current default language.
- Future language versions are planned for `pl` and `en`.

## Main Structure

- `src/app` - routes and page-level layout
- `src/components` - shared UI pieces like header, footer, and page shell
- `src/data/stritezLiving.ts` - main shared project copy and page content
- `src/data/d115.ts` - technical/layout data and gallery assets used by the site
- `public/images` - project visuals and house imagery

## Content Editing

Most user-facing text is centralized in:

- `src/data/stritezLiving.ts`
- `src/data/d115.ts`

When updating copy:

- keep the tone consistent across all pages
- avoid internal notes or draft-language in public-facing text
- prefer reusable shared content over duplicating text in route files
- keep localization in mind when naming sections and structuring content

## Tech Notes

- This project uses a newer `Next.js` version, so check local docs in `node_modules/next/dist/docs/` before making framework-level changes.
- App icons live in `src/app/` as file-based metadata (`icon.svg`, `favicon.ico`, `apple-icon.png`).

## House catalog

- `src/data/houses.ts` owns the six house records, type visuals, Czech catalog copy, construction progress and availability (`on_request`, `available`, `reserved`, `sold`).
- `/domy` lists all houses; `/domy/living-1` through `/domy/living-6` provide details.
- Assign a confirmed `type`, measurements, price and `plans` in the house records to show them on cards and details. Unknown values remain explicitly pending.
- Existing Living 1/2 construction statuses and plot sizes are retained. The client confirmed two BALKER foundations, but not their Living numbers. No number-to-type mapping is assumed.
- Previous RD02/RD05 files remain in public assets but are not presented as current house plans pending confirmation.
- BALKER renders are preliminary client-supplied visuals; ARTHAUS uses the preliminary visualization from design v2 alongside existing D115 imagery. The mockup's sample measurements are not used.

## Original design refinements

The `main` branch is the single active version. It retains the original design and incorporates the client-selected numbered values section and two-column house type presentation from design v2. Lora headings use the tighter spacing and larger scale of v2, paired with Manrope body text. Type-level measurements and counts remain pending until confirmed; Living 1 measurements are not treated as BALKER specifications.
