import { useRef, useState } from 'react';

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: (() => void) | undefined;
  }
}

let apiReady: Promise<any> | null = null;

/** Load the official YouTube IFrame Player API exactly once, shared across all embeds. */
function loadYouTubeAPI(): Promise<any> {
  if (typeof window === 'undefined') return Promise.reject(new Error('window unavailable'));
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (apiReady) return apiReady;

  apiReady = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT);
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    document.head.appendChild(tag);
  });

  return apiReady;
}

interface Props {
  id: string;
  title: string;
  author?: string;
}

export default function YouTubeEmbed({ id, title, author }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  async function handlePlay() {
    if (loaded || error) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    try {
      const YT = await loadYouTubeAPI();
      // A fresh, non-React-owned element: the IFrame API replaces it with an <iframe>.
      const host = document.createElement('div');
      host.id = `yt-player-${id}`;
      wrap.appendChild(host);
      new YT.Player(host, {
        videoId: id,
        width: '100%',
        height: '100%',
        playerVars: { autoplay: 1, rel: 0, playsinline: 1 },
      });
      setLoaded(true);
    } catch {
      setError(true);
    }
  }

  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <figure className="group">
      <div
        role="button"
        tabIndex={loaded ? -1 : 0}
        aria-label={loaded ? undefined : `Play: ${title}`}
        onClick={handlePlay}
        onKeyDown={(e) => {
          if (!loaded && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handlePlay();
          }
        }}
        className={`relative aspect-video w-full overflow-hidden rounded-lg bg-ink/10 ring-1 ring-parchment-deep ${
          loaded ? '' : 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gilt'
        }`}
      >
        {!loaded && (
          <>
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gilt/90 text-parchment shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </>
        )}

        {error && (
          <a
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-gilt underline"
          >
            Play failed — watch on YouTube ↗
          </a>
        )}

        <div ref={wrapRef} className={`absolute inset-0 ${loaded ? '' : 'hidden'}`} />
      </div>

      <figcaption className="mt-3">
        <p className="text-[1.05rem] leading-snug text-ink">{title}</p>
        {author && <p className="mt-1 text-sm text-ink-soft">{author}</p>}
      </figcaption>
    </figure>
  );
}
