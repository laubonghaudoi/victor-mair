/**
 * Authoring knobs for the memorial site.
 *
 * These mirror the two presentation options in the approved v3 design
 * prototype. They are read by the client script (src/scripts/memorial.ts)
 * through data attributes on <body>:
 *
 *   <body data-motion="…" data-archival-tone="…">
 *
 * Change a value here to change the behaviour — no JS editing required.
 */
export const siteConfig = {
  /**
   * One of:
   *   'Expressive — parallax and reveals'  (default)
   *   'Gentle — reveals only'
   *   'Still — no animation'
   */
  motion: 'Expressive — parallax and reveals',
  /**
   * One of:
   *   'Warm duotone'        (default)
   *   'True black & white'
   *   'Untouched'
   *
   * Applied only to the photographic archive. Book jackets keep their own
   * colour — they are the source of every palette on the page.
   *
   * 'Untouched' so family photographs are shown in the colour they were
   * taken in; the older scans are already monochrome and are unaffected.
   */
  archivalTone: 'Untouched',
} as const;

/**
 * Identity for the site in search results, link previews and structured
 * data. Rendered by src/layouts/BaseLayout.astro.
 */
export const seo = {
  siteUrl: 'https://victor-mair.com',
  siteName: 'Victor H. Mair — In Memoriam',
  title: 'Victor H. Mair (1943–2026) — In Memoriam | Sinologist, University of Pennsylvania',
  description:
    'A memorial to the sinologist Victor H. Mair (1943–2026): East Canton, Nepal, Dunhuang, the Taklamakan, and forty-seven years at Penn.',
  /** 1200×630 typographic share card, served from /og-image.png. */
  ogImage: '/og-image.png',
  ogImageAlt: 'Victor H. Mair, 1943–2026 — In Memoriam',
  /** Dates and places from the hero (src/data/prose.ts). */
  person: {
    name: 'Victor H. Mair',
    alternateName: '梅維恆',
    birthDate: '1943-03-25',
    birthPlace: 'East Canton, Ohio, United States',
    deathDate: '2026-06-28',
    deathPlace: 'Philadelphia, Pennsylvania, United States',
    jobTitle: 'Professor of Chinese, University of Pennsylvania (1979–2026)',
    sameAs: ['https://en.wikipedia.org/wiki/Victor_H._Mair'],
  },
} as const;
