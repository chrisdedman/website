# Portfolio

Personal site for Chris Dedman-Rollet — work, résumé, and a couple of things that
run in the browser. Live at [chrisdedman.vercel.app](https://chrisdedman.vercel.app/),
deployed on Vercel.

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export at build time)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/), configured CSS-first — there is no
  `tailwind.config.ts`; the theme lives in `@theme` in `src/styles/globals.css`

## Layout

```
src/
  app/                  routes only — each page composes content and components
    work/[slug]/        one static page per work entry
  content/              all copy and data. The single source of truth.
    site.ts             name, URLs, nav, social links
    resume.ts           experience, education, awards, skills
    work/               one file per entry: `meta` + the write-up beside it
      index.ts          the registry every page, the sitemap, and SEO read from
  components/
    layout/             header, footer, theme
    ui/                 primitives: container, rules, meta lists, work index
    interactive/        the client-side widgets (timer, QR generator)
  lib/                  theme/session stores; share() builds per-page OG + Twitter tags
  styles/               tokens.css (palette) + globals.css (theme + prose)
```

### Adding a work entry

1. Create `src/content/work/<slug>.tsx` exporting a `meta: WorkMeta` object and a
   default component for the write-up.
2. Import it in `src/content/work/index.ts` and add it to the `modules` array.

The index page, the detail route, `generateStaticParams`, the sitemap, and the
page metadata all derive from that one file — there is nothing else to update.

## Scripts

```sh
npm run dev        # dev server
npm run build      # production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Design

Near-monochrome and typographic: warm paper, near-black ink, hairline rules, and
a single rust accent. IBM Plex Sans for prose, IBM Plex Mono for metadata and
labels. Work is presented as a numbered index with year, stack, and role rather
than as a card grid. Light and dark are both first-class: every token is a
`light-dark()` pair in `src/styles/tokens.css`, switched by `color-scheme`, and
the visitor's choice is stored and applied before first paint. The résumé page
has a print stylesheet.

The share image (`public/og.png`) is rendered from the same tokens and faces; the
source page for it is not in the repo, so regenerate it by hand if the tagline
changes.
