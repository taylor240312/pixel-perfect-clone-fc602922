import { useEffect, useState } from "react";

const MIN_LOADING_MS = 1500;
const FADE_OUT_MS = 500;

export function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setMounted(true);

    const startAt = Date.now();

    const finish = () => {
      const elapsed = Date.now() - startAt;
      const remaining = Math.max(0, MIN_LOADING_MS - elapsed);

      window.setTimeout(() => {
        setFading(true);
        window.setTimeout(() => setVisible(false), FADE_OUT_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }
  }, []);

  if (!mounted || !visible) {
    return null;
  }

  return (
    <div
      aria-hidden={fading}
      className={`
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-[oklch(0.97_0.006_67.8)]
        transition-opacity duration-500 ease-out
        ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <div className="relative flex flex-col items-center gap-5">
        <div className="relative w-11 h-11">
          <span className="absolute inset-0 rounded-full border-[3px] border-[oklch(0.85_0.05_20)] opacity-20" />
          <span className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[oklch(0.7_0.156_16.9)] animate-loading-spin" />
        </div>
        <p
          className={`
            text-sm font-medium tracking-wide text-[oklch(0.45_0.04_56.1)]
            transition-opacity duration-700 ease-out
            ${fading ? "opacity-0" : "opacity-100"}
          `}
        >
          Preparando tu experiencia...
        </p>
      </div>
    </div>
  );
}
