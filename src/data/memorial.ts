/**
 * Content for the Victor H. Mair memorial site.
 *
 * Every substantive sentence on the page is a verbatim quotation from a
 * documented source (see the sources note in chapter Ⅶ). The copy below is
 * transcribed character-for-character from the approved v3 design prototype,
 * including curly quotes for quoted material and straight apostrophes in
 * contractions.
 *
 * Strings rendered through `set:html` (list labels, def-row details) use two
 * small conventions, expanded by `rich()`:
 *   *text*  → <em>text</em>
 *   ~text~  → <span class="m-zh-spaced">text</span>
 */

/** Convert the *italic* / ~spaced~ conventions to inline markup. Trusted, static content only. */
export const rich = (s: string): string =>
  s
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/~([^~]+)~/g, '<span class="m-zh-spaced">$1</span>');

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export interface NavItem {
  id: string;
  /** \u00A0 keeps the numeral and label from splitting across lines. */
  label: string;
}

export const nav: NavItem[] = [
  { id: 'ch1', label: 'Ⅰ\u00A0Ohio' },
  { id: 'ch2', label: 'Ⅱ\u00A0Nepal' },
  { id: 'ch3', label: 'Ⅲ\u00A0Tun-huang' },
  { id: 'ch4', label: 'Ⅳ\u00A0Tarim' },
  { id: 'ch5', label: 'Ⅴ\u00A0Books' },
  { id: 'ch6', label: 'Ⅵ\u00A0Penn' },
  { id: 'ch7', label: 'Ⅶ\u00A0Tributes' },
];

export interface ChapterMeta {
  id: string;
  num: string;
  title: string;
  zh: string;
  years: string;
}

export const chapters: ChapterMeta[] = [
  { id: 'ch1', num: 'Ⅰ', title: 'East Canton, Ohio', zh: '俄亥俄', years: '1943 — 1965' },
  { id: 'ch2', num: 'Ⅱ', title: 'Nepal — the Peace Corps', zh: '尼泊爾', years: '1965 — 1967' },
  { id: 'ch3', num: 'Ⅲ', title: 'Tun-huang — the library cave', zh: '敦煌', years: '1967 — 1989' },
  { id: 'ch4', num: 'Ⅳ', title: 'The Tarim Basin — the mummies', zh: '塔克拉瑪干', years: '1988 — 2011' },
  { id: 'ch5', num: 'Ⅴ', title: 'Books — translations, dictionaries, a journal', zh: '文字', years: '1983 — 2026' },
  { id: 'ch6', num: 'Ⅵ', title: 'Penn — the classroom', zh: '講堂', years: '1970 — 2026' },
  { id: 'ch7', num: 'Ⅶ', title: 'Remembered', zh: '懷念', years: '2026 —' },
];


/* ------------------------------------------------------------------ */
/* Chapter Ⅲ — Degrees                                                 */
/* ------------------------------------------------------------------ */

export interface DefRow {
  /** Year range. Omitted for full-width note rows. */
  years?: string;
  /** Rich string (see `rich`). */
  detail?: string;
  /** Outbound link for the whole row (positions: National Humanities Center). */
  link?: string;
  /** Render the year in the chapter accent (the Penn chair row). */
  lead?: boolean;
  /** Full-width dimmed note row (no year column). */
  dim?: boolean;
}

export const degrees: { left: DefRow[]; right: DefRow[] } = {
  left: [
    { years: '1965', detail: 'B.A., Dartmouth College — English Literature' },
    { years: '1967–68', detail: 'University of Washington — graduate studies in Buddhology' },
    { years: '1970', detail: 'University of Wisconsin (Madison) — Hindi, summer' },
    { years: '1972', detail: 'B.A. Hon., School of Oriental and African Studies, University of London — Sanskrit &amp; Chinese' },
    { years: '1973', detail: 'M.A., Harvard University — Chinese Literature' },
  ],
  right: [
    { years: '1976', detail: 'Ph.D., Harvard University — Chinese Literature' },
    { years: '1984', detail: 'M.Phil., University of London — Chinese' },
    { years: '1985', detail: 'M.A., University of Pennsylvania *honoris causa*' },
    { years: '2010', detail: 'Ph.D., Hong Kong Institute of Education *honoris causa*' },
    {
      dim: true,
      detail:
        'A full list of awards and honours is still being compiled — ~整理中~. Among them: the Sarasvati Award for the best nonfiction book in women and mythology, for *Sacred Display*, written with Miriam Robbins Dexter.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Chapter Ⅵ — Positions                                               */
/* ------------------------------------------------------------------ */

export const positions: { left: DefRow[]; right: DefRow[] } = {
  left: [
    { years: '1989–2026', detail: 'Professor of Chinese, University of Pennsylvania', lead: true },
    { years: '2012', detail: 'Distinguished Visiting Sinologist, Peking University' },
    { years: '2011', detail: 'Chen Yinke Distinguished Visiting Professor, Tsinghua University' },
    { years: '2011–12', detail: 'Senior Research Fellow, Institute of Southeast Asian Studies, Singapore' },
    { years: '2010', detail: 'Visiting Professor, Hong Kong Institute of Education' },
    { years: '2008', detail: 'Fellow, Swedish Collegium for Advanced Studies' },
    { years: '2004', detail: 'Uppsala, Sweden' },
    { years: '2002–03', detail: 'Distinguished Visiting Professor, University of Hong Kong' },
  ],
  right: [
    { years: '2001–02', detail: 'Adjunct Research Fellow, Center for the History of Sinitic Language, Peking University' },
    { years: '2000–', detail: 'Adjunct Professor, Center for the History of Sinitic Language, Hangzhou University' },
    { years: '1998–99', detail: 'Member, Institute for Advanced Study, Princeton' },
    { years: '1997–2005', detail: 'Adjunct Professor, Department of Chinese, Sichuan University' },
    { years: '1995–96', detail: 'Visiting Research Professor, Institute for Research in Humanities, Kyoto University' },
    { years: '1993–94', detail: 'Visiting Professor, Asian/Pacific Studies Institute, Duke University' },
    {
      years: '1991–92',
      detail: 'Fellow, National Humanities Center',
      link: 'https://nationalhumanitiescenter.org/fellows-of-the-center-1978-2025/victor-h-mair-nhc-fellow-1991-92/',
    },
    { years: '1984–88', detail: 'Associate Professor of Chinese, University of Pennsylvania' },
    { years: '1979–84', detail: 'Assistant Professor of Chinese, University of Pennsylvania' },
    { years: '1977–79', detail: 'Assistant Professor of Chinese Religion and Literature, Harvard University' },
    { years: '1973–77', detail: 'Teaching Fellow and Lecturer, Harvard University' },
    { years: '1970–72', detail: 'Lecturer in English, Tunghai University, Taichung, Taiwan' },
  ],
};

/* ------------------------------------------------------------------ */
/* Chapter Ⅴ — Books, editorships, the shelf                           */
/* ------------------------------------------------------------------ */

export interface BookRow {
  /** Rich string, e.g. '*The True History of Tea*'. */
  title: string;
  note?: string;
  year: string;
}

export const selectedBooks: BookRow[] = [
  { title: '*Tun-huang Popular Narratives*', year: '1983' },
  { title: '*Painting and Performance*', year: '1988' },
  { title: "*T'ang Transformation Texts*", year: '1989' },
  { title: '*Tao Te Ching: The Classic Book of Integrity and the Way*', year: '1990' },
  { title: '*Wandering on the Way*', note: 'Bantam', year: '1994' },
  { title: '*The Columbia Anthology of Traditional Chinese Literature*', note: 'editor', year: '1994' },
  { title: '*The Tarim Mummies*', note: 'with J. P. Mallory', year: '2000' },
  { title: '*The Columbia History of Chinese Literature*', note: 'editor', year: '2001' },
  { title: '*ABC Chinese–English Comprehensive Dictionary*', note: 'editor', year: '2003' },
  { title: "*The Art of War: Sun Zi's Military Methods*", year: '2007' },
  { title: '*The True History of Tea*', note: 'with Erling Hoh', year: '2009' },
  { title: '*Sacred Display*', note: 'with Miriam Robbins Dexter', year: '2010' },
  { title: '*Reconfiguring the Silk Road*', note: 'with Jane Hickman', year: '2014' },
  { title: '*ABC Dictionary of Sino-Japanese Readings*', year: '—' },
  { title: '*Ming Dynasty Tales: A Guided Reader*', note: 'with Zhenjun Zhang', year: '—' },
];

export interface Editorship {
  title: string;
  note?: string;
  link?: string;
}

export const editorships: Editorship[] = [
  { title: '*Sino-Platonic Papers*', note: 'founder & editor, 1986–2026', link: 'https://www.sino-platonic.org/' },
  { title: '*Cambria Sinophone World Series*', note: 'founding editor, Cambria Press' },
  { title: '*ABC Chinese Dictionary Series*', note: "University of Hawai'i Press" },
  { title: '*Encounters with Asia*', note: 'University of Pennsylvania Press' },
];

export interface ShelfItem {
  src: string;
  alt: string;
  /** Placeholder colour shown while the jacket loads. */
  bg: string;
  /** Rich caption. */
  caption: string;
}

export const shelf: ShelfItem[] = [
  {
    src: '/images/covers/abc-sino-japanese-readings.png',
    alt: 'Cover of ABC Dictionary of Sino-Japanese Readings',
    bg: '#E7E3D4',
    caption: '*ABC Dictionary of Sino-Japanese Readings* — the jade and purple of this chapter.',
  },
  {
    src: '/images/covers/columbia-anthology-traditional.png',
    alt: 'Cover of The Columbia Anthology of Traditional Chinese Literature',
    bg: '#E7E3D4',
    caption:
      '*The Columbia Anthology of Traditional Chinese Literature*, editor, 1994 — teal and marigold, used in Chapter Ⅵ.',
  },
  {
    src: '/images/covers/shorter-columbia-anthology.png',
    alt: 'Cover of The Shorter Columbia Anthology of Traditional Chinese Literature',
    bg: '#E7E3D4',
    caption: '*The Shorter Columbia Anthology* — its butter cream and brick red open Chapter Ⅰ.',
  },
  {
    src: '/images/covers/columbia-history-chinese-literature.png',
    alt: 'Cover of The Columbia History of Chinese Literature',
    bg: '#E7E3D4',
    caption: '*The Columbia History of Chinese Literature*, editor, 2001.',
  },
  {
    src: '/images/covers/true-history-of-tea.png',
    alt: 'Cover of The True History of Tea',
    bg: '#E7E3D4',
    caption: '*The True History of Tea*, with Erling Hoh, 2009 — its sage and cream close the site.',
  },
  {
    src: '/images/covers/ming-dynasty-tales.png',
    alt: 'Cover of Ming Dynasty Tales',
    bg: '#E7E3D4',
    caption: '*Ming Dynasty Tales: A Guided Reader*, edited with Zhenjun Zhang.',
  },
];

/* ------------------------------------------------------------------ */
/* Outbound links                                                      */
/* ------------------------------------------------------------------ */

export interface OutboundLink {
  /** Rich string. `&` must be written as `&amp;` here (rendered via set:html). */
  label: string;
  url: string;
  /** Small trailing tag, e.g. 'PDF'. */
  note?: string;
  /** Chinese-language row (looser leading). */
  zh?: boolean;
}

export const tarimLinks: OutboundLink[] = [
  { label: 'Wikipedia — Tarim mummies', url: 'https://en.wikipedia.org/wiki/Tarim_mummies' },
  { label: 'The Tarim Basin Mummies — lecture at the Penn Museum', url: 'https://youtu.be/WY0acUCvZEs' },
  { label: 'The Pennsylvania Gazette — When West Went East', url: 'https://thepenngazette.com/when-west-went-east/' },
  {
    label: 'Penn Museum — The Silk Road Symposium, video playlist',
    url: 'https://collections.penn.museum/collections/videos/playlist/list.php?id=28',
  },
  { label: 'Penn Today — “Secrets of the Silk Road” journey to Penn', url: 'https://penntoday.upenn.edu/node/151631' },
  {
    label: "Penn Almanac — Exploring and Interacting with the Silk Road's Artifacts",
    url: 'https://almanac.upenn.edu/archive/volumes/v57/n23/silkroad.html',
  },
  {
    label: 'Reconfiguring the Silk Road — review by D. Waugh',
    url: 'https://faculty.washington.edu/dwaugh/publications/Waugh_reviews_SR12_2014_pp164_181.pdf',
    note: 'PDF',
  },
  {
    label: 'Reconfiguring the Silk Road — review by J. E. Manning',
    url: 'https://classics.yale.edu/sites/default/files/files/faculty/manning_silk_road.pdf',
    note: 'PDF',
  },
];

export const tributes: OutboundLink[] = [
  {
    label: 'Association for Asian Studies — In Memoriam, with tributes from students and colleagues',
    url: 'https://www.asianstudies.org/in-memoriam-victor-h-mair-1943-2026/',
  },
  { label: 'Penn EALC — Victor Mair, beloved colleague, passes away', url: 'https://ealc.sas.upenn.edu/news/victor-mair-beloved-colleague-passes-away' },
  {
    label: 'Penn Almanac — Victor Mair, East Asian Languages &amp; Civilizations',
    url: 'https://almanac.upenn.edu/articles/victor-mair-east-asian-languages-civilizations',
  },
  { label: 'Pinyin News — Victor H. Mair, 1943–2026', url: 'https://pinyin.info/news/2026/victor-h-mair-1943-2026/' },
  { label: 'Cambria Press — Remembering an extraordinary scholar', url: 'https://cambriapressblog.com/2026/07/02/in-memory-of-victor-h-mair-1943-2026/' },
  { label: 'MCLC — In Memoriam, by his brother Denis Mair', url: 'https://u.osu.edu/mclc/2026/07/02/in-memoriam-victor-henry-mair/' },
  { label: 'MCLC — “The Victor Mair That I Knew,” by Carlos Yu-Kai Lin', url: 'https://u.osu.edu/mclc/2026/08/05/the-victor-mair-that-i-knew/' },
  {
    label: 'Bruce Humes — a scholar who endowed “sinologist” with new meaning',
    url: 'https://bruce-humes.com/2026/07/03/victor-h-mair-passing-of-a-scholar-who-endowed-sinologist-with-new-meaning/',
  },
  {
    label: '*Victor H. Mair: A Celebration*, ed. Neil Schmid &amp; Diana Shuheng Zhang',
    url: 'https://www.researchgate.net/publication/377052857_Victor_H_Mair_A_Celebration',
    note: 'PDF',
  },
  { label: 'JSTOR — China at the Crossroads: A Festschrift in Honor of Victor H. Mair', url: 'https://www.jstor.org/stable/41649911' },
  { label: 'International Dunhuang Programme — A Few of Our Favourite Things', url: 'https://idp.bl.uk/blog/a-few-of-our-favourite-things-1-victor-h-mair/' },
  { label: 'China Heritage — In the Shade of Victor Mair', url: 'https://chinaheritage.net/journal/in-the-shade-of-victor-mair/' },
];

export const chinesePress: OutboundLink[] = [
  { label: '百度百科 — 梅維恆詞條', url: 'https://baike.baidu.com/item/%E6%A2%85%E7%BB%B4%E6%81%92/15969888', zh: true },
  { label: '清華大學', url: 'http://www.tacl.tsinghua.edu.cn/info/1127/1581.htm', zh: true },
  { label: '豆瓣 — 訪談全文', url: 'https://www.douban.com/group/topic/30364884/', zh: true },
  { label: '澎湃新聞 一', url: 'https://www.thepaper.cn/newsDetail_forward_20962035', zh: true },
  { label: '澎湃新聞 二', url: 'https://www.thepaper.cn/newsDetail_forward_33530370', zh: true },
  { label: '澎湃新聞 三', url: 'https://www.thepaper.cn/newsDetail_forward_33500961', zh: true },
  { label: '網易', url: 'https://www.163.com/dy/article/L0UKAP4D055660VM.html', zh: true },
];

export const reference: OutboundLink[] = [
  { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Victor_H._Mair' },
  { label: 'Wikiquote', url: 'https://en.wikiquote.org/wiki/Victor_H._Mair' },
  { label: 'Biographies.net', url: 'https://www.biographies.net/people/en/victor_h_mair' },
  { label: 'Alchetron', url: 'https://alchetron.com/Victor-H-Mair' },
];

export const interviews: OutboundLink[] = [
  {
    label: 'Stanford Distinguished Lecture Series: The Tarim Mummies — University of Miami',
    url: 'https://humanities.as.miami.edu/public-programs/stanford-distinguished-professors/2013-2014/victor-mair/index.html',
  },
  { label: 'Columbia University Press — an interview on *The Art of War*', url: 'https://cup.columbia.edu/author-interviews/mair-art-war/' },
  { label: 'Cornell — the annual Hu Shih Distinguished Lecture', url: 'https://events.cornell.edu/event/annual_hu_shih_distinguished_lecture_victor_mair' },
];

export const hisTitles: OutboundLink[] = [
  { label: '“Crisis” Does NOT Equal “Danger” Plus “Opportunity”', url: 'https://pinyin.info/chinese/crisis.html' },
  {
    label: 'Chinese Characters as a High-Maintenance Script and the Consequences Thereof',
    url: 'https://pinyin.info/news/2007/chinese-characters-as-a-high-maintenance-script-and-the-consequences-thereof/',
  },
  {
    label: 'How to Forget Your Mother Tongue and Remember Your National Language',
    url: 'https://pinyin.info/readings/mair/taiwanese.html',
  },
];

export const booksLinks: OutboundLink[] = [
  { label: 'Goodreads — full list', url: 'https://www.goodreads.com/author/list/78853.Victor_H_Mair?page=2' },
  { label: 'Penn — The True History of Tea', url: 'https://pgfi.sas.upenn.edu/home/SASFrontiers/mair.html' },
];

export const youtubeLinks: OutboundLink[] = [
  { label: 'More on YouTube — “Victor Mair”', url: 'https://www.youtube.com/results?search_query=Victor+Mair' },
  { label: 'More on YouTube — 「梅維恆」', url: 'https://www.youtube.com/results?search_query=%E6%A2%85%E7%B6%AD%E6%81%86' },
];

/* ------------------------------------------------------------------ */
/* Chapter Ⅵ — Lectures on film                                        */
/* ------------------------------------------------------------------ */

export interface Lecture {
  id: string;
  url: string;
  title: string;
  source: string;
}

export const lectures: Lecture[] = [
  {
    id: 'EST1jxqdIqg',
    url: 'https://youtu.be/EST1jxqdIqg',
    title: 'The East Asian Heartland and Its Bronze Age Connections',
    source: 'Wolf Humanities Center',
  },
  {
    id: 'aqylM4x1t4c',
    url: 'https://youtu.be/aqylM4x1t4c',
    title: 'Mirror Metaphor in Chinese Literature',
    source: 'Israel Institute for Advanced Studies',
  },
  {
    id: 'n9F19lYF7DY',
    url: 'https://youtu.be/n9F19lYF7DY',
    title: '2014 Wat Lecture: Changing Language in China',
    source: 'UBC Asian Studies',
  },
  {
    id: '0VxyQg_fvGc',
    url: 'https://youtu.be/0VxyQg_fvGc',
    title: 'The Impact of the Internet on Chinese Language and Chinese Studies',
    source: 'USNA Center for Regional Studies',
  },
];
