import { useEffect, useRef, useState } from 'react';

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
  source: string;
}

/**
 * A lecture that plays in-page via the official YouTube IFrame Player API.
 * Shows a static thumbnail until activated, so the four players (and the
 * API script) load only when the visitor actually asks to watch one.
 */
export default function YouTubeEmbed({ id, title, source }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!playing) return;
    let player: any;
    let cancelled = false;

    loadYouTubeAPI()
      .then((YT) => {
        if (cancelled || !hostRef.current) return;
        // A fresh, non-React-owned element: the IFrame API replaces it with an <iframe>.
        player = new YT.Player(hostRef.current, {
          videoId: id,
          playerVars: { autoplay: 1, rel: 0, playsinline: 1, modestbranding: 1 },
        });
      })
      .catch(() => {
        if (!cancelled) {
          setFailed(true);
          setPlaying(false);
        }
      });

    return () => {
      cancelled = true;
      try {
        player?.destroy?.();
      } catch {
        /* the player may never have attached */
      }
    };
  }, [playing, id]);

  function activate() {
    if (playing || failed) return;
    setPlaying(true);
  }

  return (
    <div className="m-lecture--embed">
      <div className="m-lecture__thumb">
        {playing ? (
          <div ref={hostRef} />
        ) : (
          <div
            role="button"
            tabIndex={0}
            aria-label={`Play: ${title}`}
            onClick={activate}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate();
              }
            }}
            className="m-lecture__thumbbtn"
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
            />
            <span className="m-lecture__playdot" aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        )}
      </div>
      <div className="m-lecture__title">{title}</div>
      <div className="m-lecture__source">{source}</div>
      {failed && (
        <a
          className="m-lecture__fallback"
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Player unavailable — watch on YouTube ↗
        </a>
      )}
    </div>
  );
}
