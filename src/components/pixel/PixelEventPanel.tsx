import { useEffect, useState } from "react";

export type PixelEvent = {
  event: string;
  data: unknown;
  at: string;
};

function formatPixelTime(iso: string) {
  const date = new Date(iso);
  return date.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export function PixelEventPanel() {
  const [lastEvent, setLastEvent] = useState<PixelEvent | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const events = (window as unknown as { __metaPixelEvents?: PixelEvent[] }).
      __metaPixelEvents;
    if (events && events.length > 0) {
      setLastEvent(events[events.length - 1]);
    }

    const handler = () => {
      const latest = (window as unknown as { __metaPixelEvents?: PixelEvent[] }).
        __metaPixelEvents;
      if (latest && latest.length > 0) {
        setLastEvent(latest[latest.length - 1]);
      }
    };

    window.addEventListener("meta-pixel-event", handler);
    return () => window.removeEventListener("meta-pixel-event", handler);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-[260px] rounded-xl border border-white/10 bg-black/85 px-4 py-3 shadow-2xl backdrop-blur-md">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
          Meta Pixel
        </p>
      </div>
      <p className="text-xs text-white/90 leading-snug">
        {lastEvent ? (
          <>
            Último evento:{" "}
            <span className="font-semibold text-green-400">
              {lastEvent.event}
            </span>
            <span className="block text-[10px] text-white/50 mt-0.5">
              {formatPixelTime(lastEvent.at)}
            </span>
          </>
        ) : (
          <span className="text-white/50">Ningún evento detectado aún</span>
        )}
      </p>
    </div>
  );
}
