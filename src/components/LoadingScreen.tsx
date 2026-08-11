import { useEffect, useState } from "react";

const MIN_LOADING_MS = 1200;
const FADE_OUT_MS = 550;

export function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  // Mount and start the entry fade-in on the client side only
  useEffect(() => {
    setMounted(true);

    const entryTimer = window.setTimeout(() => {
      setEntered(true);
    }, 50);

    return () => {
      window.clearTimeout(entryTimer);
    };
  }, []);

  // Detect when the page has finished loading
  useEffect(() => {
    const onLoad = () => setPageReady(true);

    if (document.readyState === "complete") {
      setPageReady(true);
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // Once the screen has entered and the page is ready, hold it for the minimum
  // duration and then fade out smoothly
  useEffect(() => {
    if (!mounted || !entered || !pageReady || fading) {
      return;
    }

    const timer = window.setTimeout(() => {
      setFading(true);
      window.setTimeout(() => setVisible(false), FADE_OUT_MS);
    }, MIN_LOADING_MS);

    return () => window.clearTimeout(timer);
  }, [mounted, entered, pageReady, fading]);

  if (!mounted || !visible) {
    return null;
  }

  return (
    <div
      aria-hidden={fading}
      className={`
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        overflow-hidden
        transition-opacity ease-out
        ${
          fading
            ? "pointer-events-none opacity-0 duration-[600ms]"
            : entered
              ? "opacity-100 duration-300"
              : "opacity-0 duration-300"
        }
      `}
      style={{
        background:
          "radial-gradient(circle at 50% 42%, oklch(0.11 0 0) 0%, oklch(0.05 0 0) 65%)",
      }}
    >
      <div className="relative flex flex-col items-center gap-5">
        {/* Soft aura around the spinner */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            width: "120px",
            height: "120px",
            background:
              "radial-gradient(circle, oklch(0.78 0 0 / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex h-8 w-8 items-center justify-center">
          <svg
            className="h-full w-full"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animation: "loading-spin 1.2s linear infinite",
            }}
          >
            {/* Track */}
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="oklch(0.24 0 0)"
              strokeWidth="2"
            />
            {/* Highlighted arc */}
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="oklch(0.85 0 0)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="22 66"
            />
          </svg>
        </div>

        <p
          className={`
            text-xs font-light tracking-[0.14em] text-[oklch(0.55_0_0)]
            transition-opacity duration-500 ease-out
            ${fading ? "opacity-0" : "opacity-60"}
          `}
        >
          Preparando tu experiencia...
        </p>
      </div>
    </div>
  );
}
