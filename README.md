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
- The houses are presented as one shared house type.
- Differences between units are mainly plot, orientation, and placement in the project.
- Czech is the current default language.
- Future language versions are planned for `pl` and `en`.

## Main Structure

- `src/app` - routes and page-level layout
- `src/components` - shared UI pieces like header, footer, and page shell
- `src/data/stritezLiving.ts` - main shared project copy and page content
- `src/data/balkerH114.ts` - technical/layout data and gallery assets used by the site
- `public/images` - project visuals and house imagery

## Content Editing

Most user-facing text is centralized in:

- `src/data/stritezLiving.ts`
- `src/data/balkerH114.ts`

When updating copy:

- keep the tone consistent across all pages
- avoid internal notes or draft-language in public-facing text
- prefer reusable shared content over duplicating text in route files
- keep localization in mind when naming sections and structuring content

## Tech Notes

- This project uses a newer `Next.js` version, so check local docs in `node_modules/next/dist/docs/` before making framework-level changes.
- App icons live in `src/app/` as file-based metadata (`icon.svg`, `favicon.ico`, `apple-icon.png`).
