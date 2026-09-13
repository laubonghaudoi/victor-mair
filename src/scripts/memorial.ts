/**
 * Client behaviour for the memorial site.
 *
 * Ported from the approved v3 design prototype's inline component, minus the
 * design-canvas shell (DCLogic / support.js / <x-dc>). Plain browser JS —
 * no framework. Astro bundles this module and defers it, so the DOM is ready
 * when it runs.
 *
 * Reads its presentation options from <body> data attributes, which
 * src/data/config.ts supplies:
 *
 *   data-motion          'Expressive — parallax and reveals' | 'Gentle — reveals only' | 'Still — no animation'
 *   data-archival-tone   'Warm duotone' | 'True black & white' | 'Untouched'
 *
 * Also initialises the photograph lightbox: every Photo renders its image
 * inside a button.m-photo__btn, and clicking one opens the full-size
 * original in a dialog (Esc / backdrop / × to close, ← → to navigate).
 */

const MOTION_EXPRESSIVE = 'Expressive — parallax and reveals';
const MOTION_STILL = 'Still — no animation';

/* ------------------------------------------------------------------ */
/* Archival tone                                                       */
/* ------------------------------------------------------------------ */

// Only the photographic archive is toned. Book jackets keep their own colour —
// they are the source of every palette on the page.
function applyTone(tone: string) {
  const f =
    tone === 'Warm duotone'
      ? 'grayscale(1) sepia(0.2) contrast(1.05)'
      : tone === 'True black & white'
        ? 'grayscale(1) contrast(1.06)'
        : 'none';
  document.querySelectorAll<HTMLElement>('[data-archival] img, img[data-archival]').forEach((el) => {
    el.style.filter = f;
    el.style.transition = 'filter .6s ease';
  });
}

/* ------------------------------------------------------------------ */
/* Reveal on scroll                                                    */
/* ------------------------------------------------------------------ */

let revealEls: HTMLElement[] = [];

function initReveals() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  revealEls = els;
  const vh = window.innerHeight;
  els.forEach((el) => {
    if (el.getBoundingClientRect().top > vh * 0.88) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transitionProperty = 'opacity, transform';
      el.style.transitionDuration = '1s, 1.15s';
      el.style.transitionTimingFunction = 'cubic-bezier(.22,.7,.2,1)';
      el.style.transitionDelay = ((parseInt(el.dataset.reveal, 10) || 0) * 0.11) + 's';
      el.dataset.pending = '1';
    }
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.target.dataset.pending) {
          const t = e.target as HTMLElement;
          t.style.opacity = '1';
          t.style.transform = 'none';
          delete t.dataset.pending;
          io.unobserve(t);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.02 }
  );
  els.forEach((el) => io.observe(el));
}

// Safety net: a fast scroll, scrollbar drag or anchor jump can skip an
// intersecting tick, which would strand a block at opacity 0 forever.
function sweepReveals() {
  if (!revealEls.length) return;
  const vh = window.innerHeight;
  revealEls.forEach((el) => {
    if (!el.dataset.pending) return;
    if (el.getBoundingClientRect().top < vh * 0.9) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      delete el.dataset.pending;
    }
  });
}

/* ------------------------------------------------------------------ */
/* Parallax                                                            */
/* ------------------------------------------------------------------ */

function initParallax() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]')).map(
    (el) => ({ el, s: parseFloat(el.dataset.parallax ?? '') || 0.1 })
  );
  if (!items.length) return;
  let raf: number | null = null;
  const update = () => {
    raf = null;
    const vh = window.innerHeight;
    items.forEach(({ el, s }) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -240 || r.top > vh + 240) return;
      const offset = r.top + r.height / 2 - vh / 2;
      el.style.transform = 'translate3d(0,' + (-offset * s).toFixed(2) + 'px,0)';
    });
  };
  const onScroll = () => {
    if (raf == null) raf = requestAnimationFrame(update);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

/* ------------------------------------------------------------------ */
/* Header, progress bar, active nav                                    */
/* ------------------------------------------------------------------ */

function initChrome() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  const header = document.querySelector<HTMLElement>('[data-header]');
  const brand = document.querySelector<HTMLElement>('[data-brand]');
  const links = Array.from(document.querySelectorAll<HTMLElement>('[data-navlink]'));
  const chapters = Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'));

  // Deterministic per-tick paint: the header adopts the palette of whichever
  // chapter sits beneath it. No memo, no racing observers.
  const paint = () => {
    let current = chapters[0];
    for (const c of chapters) {
      if (c.getBoundingClientRect().top <= 80) current = c;
    }
    if (!current) return;
    const ink = current.dataset.navInk ?? '#F2ECE2';
    const dim = current.dataset.navDim ?? '#A99A8C';
    const accent = current.dataset.navAccent ?? '#C1332E';
    if (header) {
      if (current.dataset.navBg) header.style.background = current.dataset.navBg;
      if (current.dataset.navRule) header.style.borderBottomColor = current.dataset.navRule;
    }
    if (brand) brand.style.color = ink;
    if (bar) bar.style.background = accent;

    let activeId: string | null = null;
    links.forEach((l) => {
      const s = document.getElementById(l.dataset.navlink ?? '');
      if (s && s.getBoundingClientRect().top <= 90) activeId = l.dataset.navlink ?? null;
    });
    links.forEach((l) => {
      const on = l.dataset.navlink === activeId;
      l.style.color = on ? ink : dim;
      l.style.borderBottomColor = on ? accent : 'transparent';
    });
  };

  const onScroll = () => {
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    }
    paint();
    sweepReveals();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('scrollend', onScroll, { passive: true });
  onScroll();
}

/* ------------------------------------------------------------------ */
/* Lightbox — click a photograph to view it full size                  */
/* ------------------------------------------------------------------ */

// Book jackets are deliberately not part of this: only the photographic
// archive (button.m-photo__btn, rendered by Photo.astro) is zoomable. The
// lightbox shows the unfiltered original — the archival tone is a viewing
// filter for the page, not the photograph.
function initLightbox() {
  const btns = Array.from(document.querySelectorAll<HTMLButtonElement>('.m-photo__btn[data-lightbox]'));
  if (!btns.length) return;
  const items = btns.map((btn) => {
    const img = btn.querySelector('img')!;
    const cap = btn.closest('figure')?.querySelector('.m-figcap');
    return {
      src: img.currentSrc || img.getAttribute('src') || '',
      alt: img.alt,
      cap: cap ? cap.innerHTML : '',
    };
  });

  const root = document.createElement('div');
  root.className = 'm-lightbox';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Photograph, full size');
  root.hidden = true;
  root.innerHTML =
    '<button class="m-lightbox__close" type="button" aria-label="Close full-size view">×</button>' +
    '<button class="m-lightbox__nav m-lightbox__nav--prev" type="button" aria-label="Previous photograph">←</button>' +
    '<img class="m-lightbox__img" alt="" />' +
    '<div class="m-lightbox__meta">' +
    '<span class="m-lightbox__count"></span>' +
    '<p class="m-lightbox__cap"></p>' +
    '</div>' +
    '<button class="m-lightbox__nav m-lightbox__nav--next" type="button" aria-label="Next photograph">→</button>';
  document.body.appendChild(root);

  const img = root.querySelector<HTMLImageElement>('.m-lightbox__img')!;
  const cap = root.querySelector<HTMLElement>('.m-lightbox__cap')!;
  const count = root.querySelector<HTMLElement>('.m-lightbox__count')!;
  const closeBtn = root.querySelector<HTMLButtonElement>('.m-lightbox__close')!;
  const prevBtn = root.querySelector<HTMLButtonElement>('.m-lightbox__nav--prev')!;
  const nextBtn = root.querySelector<HTMLButtonElement>('.m-lightbox__nav--next')!;

  let idx = 0;
  let lastFocus: HTMLElement | null = null;

  const preload = (i: number) => {
    const p = new Image();
    p.src = items[(i + items.length) % items.length].src;
  };

  const show = (i: number) => {
    idx = (i + items.length) % items.length;
    const it = items[idx];
    img.src = it.src;
    img.alt = it.alt;
    cap.innerHTML = it.cap;
    count.textContent = items.length > 1 ? `${idx + 1} / ${items.length}` : '';
    if (items.length > 1) {
      preload(idx + 1);
      preload(idx - 1);
    }
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight' && items.length > 1) show(idx + 1);
    else if (e.key === 'ArrowLeft' && items.length > 1) show(idx - 1);
  };

  const open = (i: number) => {
    lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    show(i);
    root.hidden = false;
    root.setAttribute('data-open', '');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey, true);
    closeBtn.focus();
  };

  const close = () => {
    root.removeAttribute('data-open');
    root.hidden = true;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey, true);
    if (lastFocus) lastFocus.focus();
  };

  btns.forEach((btn, i) => btn.addEventListener('click', () => open(i)));
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => show(idx - 1));
  nextBtn.addEventListener('click', () => show(idx + 1));
  img.addEventListener('click', close);
  root.addEventListener('click', (e) => {
    if (e.target === root) close();
  });

  if (items.length < 2) {
    prevBtn.setAttribute('disabled', '');
    nextBtn.setAttribute('disabled', '');
  }
}

/* ------------------------------------------------------------------ */
/* Bootstrap                                                           */
/* ------------------------------------------------------------------ */

const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia != null &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const motion = reduced ? MOTION_STILL : document.body.dataset.motion ?? MOTION_EXPRESSIVE;
const tone = document.body.dataset.archivalTone ?? 'Warm duotone';

applyTone(tone);
if (motion !== MOTION_STILL) initReveals();
if (motion === MOTION_EXPRESSIVE) initParallax();
initChrome();
initLightbox();
