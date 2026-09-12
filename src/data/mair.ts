export interface LinkItem {
  title: string;
  url: string;
  note?: string;
}

export interface CVEntry {
  years: string;
  detail: string;
  link?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  author: string;
}

export const biographies: LinkItem[] = [
  { title: 'Biographies.net — Biography of Victor H. Mair', url: 'https://www.biographies.net/people/en/victor_h_mair' },
  { title: 'Wikipedia — Victor H. Mair', url: 'https://en.wikipedia.org/wiki/Victor_H._Mair' },
  { title: 'Wikiquote — Victor H. Mair', url: 'https://en.wikiquote.org/wiki/Victor_H._Mair' },
  { title: 'Alchetron — Victor H Mair', url: 'https://alchetron.com/Victor-H-Mair' },
];

export const education: CVEntry[] = [
  { years: '2010', detail: 'Ph.D., Hong Kong Institute of Education (honoris causa)' },
  { years: '1985', detail: 'M.A., University of Pennsylvania (honoris causa)' },
  { years: '1984', detail: 'M.Phil., University of London — Chinese' },
  { years: '1976', detail: 'Ph.D., Harvard University — Chinese Literature' },
  { years: '1973', detail: 'M.A., Harvard University — Chinese Literature' },
  { years: '1972', detail: 'B.A. Hon., School of Oriental and African Studies, University of London — Sanskrit & Chinese' },
  { years: '1970 (summer)', detail: 'University of Wisconsin (Madison), Hindi' },
  { years: '1967–1968', detail: 'University of Washington (Seattle), graduate studies in Buddhology' },
  { years: '1965', detail: 'B.A., Dartmouth College — English Literature' },
];

export const fiveOldWhiteMen = {
  source: 'Language Log — “Five old, white men”',
  url: 'https://languagelog.ldc.upenn.edu/nll/?p=59388',
  intro: `I promised that I would tell the story of how five old, white men persuaded me to begin the study of Asian languages two years after I was out of college. Here it is.`,
  paragraphs: [
    `When I graduated from Dartmouth in 1965, I joined the Peace Corps for two years in Nepal. Although I contracted fifteen diseases, some quite serious, lost fifty pounds, and had three nearly deadly trail accidents, the experience was transformative.`,
    `I was an English major in college and wrote an undergraduate thesis on Chaucer’s “Troilus and Criseyde”. At the end of my Peace Corps service, I still wanted to study for a PhD on Chaucer. So, among other applications to graduate school and for funding, I applied for a Woodrow Wilson fellowship. In those days (1967), that was a very prestigious prize.`,
    `Because I had applied outside the regular cycle of the selection process, the Woodrow Wilson Foundation set up a special interview for me at their headquarters in Princeton, NJ. I entered the room and found myself facing, yes, five old, white men. I think they all had white hair. They were professors of European and American history, literature, and philosophy — all humanists.`,
    `I began by launching into a monologue about how much I loved Chaucer and why I wanted to pursue a PhD focusing on him and his works. After I had been speaking for about 5-10 minutes, they interrupted me and said, “Mr. Mair, please tell us what you learned in Nepal.”`,
    `Somewhat taken aback, I began to tell them about Buddhism, Hinduism, shamanism, Hermann Hesse and his Siddhartha, Nepali language and Sanskrit, Indian art, and so on and so forth. They were fascinated, captivated by all that I was saying.`,
    `After about an hour, they said, “Mr. Mair, please wait outside while we deliberate for a few moments.” I waited for about five minutes, then they called me back and announced, “Mr. Mair, we would like to award you a Woodrow Wilson fellowship, but would you please consider doing it in Asian Studies?”`,
    `I was dumbfounded. Never had I dreamed of reading for a PhD in anything Asian. Of course, I was honored that they deemed me worthy of a Woodrow Wilson fellowship, but the proposal to do it in Asian Studies came so suddenly and unexpectedly that I said to the five old, white men, “Please give me a couple of weeks to think it over.”`,
    `So I went to my home in Ohio, where I hadn’t been for two years, and I asked around among friends and teachers how I should respond. They all encouraged me to accept the fellowship and concentrate on Buddhism. In those days, the University of Washington (Seattle) had the best program of Buddhist Studies, so that is where I decided to go.`,
    `It was all thanks to those five old, white men.`,
  ],
};

export const positions: CVEntry[] = [
  { years: '2012 (spring)', detail: 'Distinguished Visiting Sinologist, Peking University (Beijing)' },
  { years: '2011 (fall)', detail: 'Chen Yinke Distinguished Visiting Professor, Tsinghua University (Beijing)' },
  { years: '2011 (Sept.–Oct.)', detail: 'Senior Research Fellow, ISEAS (Institute of Southeast Asian Studies, Singapore) — also 2012 (April–May)' },
  { years: '2010 (summer)', detail: 'Visiting Professor, Hong Kong Institute of Education, Department of Chinese' },
  { years: '2008 (spring)', detail: 'Fellow of the Swedish Collegium for Advanced Studies (in the Social Sciences)' },
  { years: '2004 (fall)', detail: 'Uppsala, Sweden' },
  { years: '2002–2003', detail: 'Distinguished Visiting Professor, Department of Chinese, Hong Kong University' },
  { years: '2001–2002', detail: 'Adjunct Research Fellow, Center for the History of Sinitic Language, Peking University' },
  { years: '2000–present', detail: 'Adjunct Professor, Center for the History of Sinitic Language, Hangzhou University' },
  { years: '1998–1999', detail: 'Member, Institute for Advanced Study, Princeton, New Jersey' },
  { years: '1997–2005', detail: 'Adjunct Professor, Department of Chinese, Sichuan University' },
  { years: '1995–1996', detail: 'Visiting Research Professor, Institute for Research in Humanities, Kyoto University' },
  { years: '1993–1994', detail: 'Visiting Professor, Asian/Pacific Studies Institute, Duke University' },
  { years: '1991–92', detail: 'Fellow, National Humanities Center', link: 'https://nationalhumanitiescenter.org/fellows-of-the-center-1978-2025/victor-h-mair-nhc-fellow-1991-92/' },
  { years: '1989–present', detail: 'Professor of Chinese, University of Pennsylvania' },
  { years: '1984–1988', detail: 'Associate Professor of Chinese, University of Pennsylvania' },
  { years: '1979–1984', detail: 'Assistant Professor of Chinese, University of Pennsylvania' },
  { years: '1977–1979', detail: 'Assistant Professor of Chinese Religion and Literature, Harvard University' },
  { years: '1973–1977', detail: 'Teaching Fellow and Lecturer — Chinese Religion and Literature, Harvard University' },
  { years: '1970–1972', detail: 'Lecturer in English Literature and Language, Tunghai University, Taichung, Taiwan' },
];

export const publications: LinkItem[] = [
  { title: 'Goodreads — Books by Victor H. Mair', url: 'https://www.goodreads.com/author/list/78853.Victor_H_Mair?page=2' },
  { title: 'Penn Arts and Sciences — The True History of Tea', url: 'https://pgfi.sas.upenn.edu/home/SASFrontiers/mair.html' },
];

export const tarimMummies: LinkItem[] = [
  { title: 'Wikipedia — Tarim mummies', url: 'https://en.wikipedia.org/wiki/Tarim_mummies' },
  { title: 'The Tarim Basin Mummies — lecture at the Penn Museum (YouTube)', url: 'https://youtu.be/WY0acUCvZEs' },
  { title: 'The Pennsylvania Gazette — When West Went East', url: 'https://thepenngazette.com/when-west-went-east/' },
  { title: 'Penn Museum — The Silk Road Symposium (video playlist)', url: 'https://collections.penn.museum/collections/videos/playlist/list.php?id=28' },
  { title: 'Reconfiguring the Silk Road (2011 Symposium, ed. Mair & Hickman) — book review by D. Waugh (PDF)', url: 'https://faculty.washington.edu/dwaugh/publications/Waugh_reviews_SR12_2014_pp164_181.pdf' },
  { title: 'Book review by J. E. Manning (PDF)', url: 'https://classics.yale.edu/sites/default/files/files/faculty/manning_silk_road.pdf' },
  { title: 'Penn Almanac — Exploring and Interacting with the Silk Road’s Artifacts', url: 'https://almanac.upenn.edu/archive/volumes/v57/n23/silkroad.html' },
  { title: 'Penn Today — “Secrets of the Silk Road” journey to Penn', url: 'https://penntoday.upenn.edu/node/151631' },
];

export const editorships: LinkItem[] = [
  { title: 'Sino-Platonic Papers', url: 'https://www.sino-platonic.org/' },
  { title: 'Encounters with Asia (University of Pennsylvania Press)', url: '#', note: 'no link available' },
  { title: 'ABC Chinese Dictionary Series (University of Hawai’i Press)', url: '#', note: 'no link available' },
  { title: 'Cambria Sinophone World Series (Cambria Press)', url: '#', note: 'no link available' },
  { title: 'Language Log — “Victor Mair RIP” (including the RIP post and comments from admirers far and wide)', url: 'https://languagelog.ldc.upenn.edu/nll/?p=73799' },
];

export const interviews: LinkItem[] = [
  { title: 'Stanford Distinguished Lecture Series: The Tarim Mummies (University of Miami)', url: 'https://humanities.as.miami.edu/public-programs/stanford-distinguished-professors/2013-2014/victor-mair/index.html' },
  { title: 'Columbia University Press — Interview with Victor Mair on The Art of War', url: 'https://cup.columbia.edu/author-interviews/mair-art-war/' },
  { title: 'Cornell — Annual Hu Shih Distinguished Lecture', url: 'https://events.cornell.edu/event/annual_hu_shih_distinguished_lecture_victor_mair' },
];

export const chineseWebsites: LinkItem[] = [
  { title: 'Baidu Baike 百度百科 — his entry in China’s “Wikipedia”', url: 'https://baike.baidu.com/item/%E6%A2%85%E7%BB%B4%E6%81%92/15969888' },
  { title: 'Tsinghua University 清华大学', url: 'http://www.tacl.tsinghua.edu.cn/info/1127/1581.htm' },
  { title: 'Douban 豆瓣 — his interview script in Chinese (full)', url: 'https://www.douban.com/group/topic/30364884/' },
  { title: 'The Paper 澎湃新闻', url: 'https://www.thepaper.cn/newsDetail_forward_20962035' },
  { title: 'The Paper 澎湃新闻', url: 'https://www.thepaper.cn/newsDetail_forward_33530370' },
  { title: 'The Paper 澎湃新闻', url: 'https://www.thepaper.cn/newsDetail_forward_33500961' },
  { title: 'NetEase 网易', url: 'https://www.163.com/dy/article/L0UKAP4D055660VM.html' },
];

export const youtubeVideos: VideoItem[] = [
  {
    id: 'EST1jxqdIqg',
    title: 'The East Asian Heartland and Its Bronze Age Connections',
    author: 'Wolf Humanities Center',
  },
  {
    id: 'aqylM4x1t4c',
    title: 'Mirror Metaphor in Chinese Literature',
    author: 'Israel Institute for Advanced Studies',
  },
  {
    id: 'n9F19lYF7DY',
    title: '2014 Wat Lecture: Changing Language in China',
    author: 'UBC Asian Studies',
  },
  {
    id: '0VxyQg_fvGc',
    title: 'The Impact of the Internet on Chinese Language and Chinese Studies',
    author: 'USNA Center for Regional Studies',
  },
];

export const youtubeSearchLinks: LinkItem[] = [
  { title: 'Search YouTube — “Victor Mair”', url: 'https://www.youtube.com/results?search_query=Victor+Mair' },
  { title: 'Search YouTube — “梅維恆” (his Chinese name)', url: 'https://www.youtube.com/results?search_query=%E6%A2%85%E7%B6%AD%E6%81%86' },
];

export const tributes: LinkItem[] = [
  { title: 'Association for Asian Studies — In Memoriam: Victor H. Mair (1943–2026)', url: 'https://www.asianstudies.org/in-memoriam-victor-h-mair-1943-2026/' },
  { title: 'University of Pennsylvania, EALC — Victor Mair, Beloved Colleague, Passes Away', url: 'https://ealc.sas.upenn.edu/news/victor-mair-beloved-colleague-passes-away' },
  { title: 'Cambria Press — Remembering an Extraordinary Scholar (Texts and Transformations: Essays in Honor of Victor H. Mair)', url: 'https://cambriapressblog.com/2026/07/02/in-memory-of-victor-h-mair-1943-2026/' },
  { title: 'MCLC, Ohio State — Victor H. Mair: A Celebration (invitation to contribute)', url: 'https://u.osu.edu/mclc/2023/02/08/victor-h-mair-a-celebration/' },
  { title: 'MCLC, Ohio State — In Memoriam: Victor Henry Mair', url: 'https://u.osu.edu/mclc/2026/07/06/in-memoriam-victor-henry-mair-4/' },
  { title: 'ResearchGate — Victor H. Mair: A Celebration (PDF)', url: 'https://www.researchgate.net/publication/377052857_Victor_H_Mair_A_Celebration' },
  { title: 'Penn Almanac — Victor Mair, East Asian Languages & Civilizations', url: 'https://almanac.upenn.edu/articles/victor-mair-east-asian-languages-civilizations' },
  { title: 'JSTOR — China at the Crossroads: A Festschrift in Honor of Victor H. Mair', url: 'https://www.jstor.org/stable/41649911' },
  { title: 'International Dunhuang Programme — A Few of Our Favourite Things: Victor H. Mair', url: 'https://idp.bl.uk/blog/a-few-of-our-favourite-things-1-victor-h-mair/' },
  { title: 'China Heritage — In the Shade of Victor Mair', url: 'https://chinaheritage.net/journal/in-the-shade-of-victor-mair/' },
];

export const snailStory = {
  intro:
    'Victor Mair has a thing for snails. He has hundreds — most at home, with a handful strewn across his office on campus.',
  quote:
    '“I was traveling through Europe teaching, but I also went to my mom’s ancestral village in the Swiss Alps for the first time,” says the Professor of East Asian Languages and Civilizations, whose research on ancient cultures has taken him around the globe. “I was wandering around the churchyard and I found this beautiful snail crawling around. Symbolically, they mean a lot to me. It takes determination for a snail to get across a gap.”',
  source: 'Omnia: Windows on Asia — Penn Arts & Sciences',
  url: 'https://omnia.sas.upenn.edu/story/windows-asia',
};
