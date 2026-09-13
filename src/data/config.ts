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
   */
  archivalTone: 'Warm duotone',
} as const;
