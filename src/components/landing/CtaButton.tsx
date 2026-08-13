const HOTMART_URL = "https://pay.hotmart.com/W107147642Y?checkoutMode=10";

export function CtaButton({
  className = "",
  full = false,
  scrollToBottom = false,
}: {
  className?: string;
  full?: boolean;
  scrollToBottom?: boolean;
}) {
  const href = scrollToBottom ? "#final" : HOTMART_URL;
  const target = scrollToBottom ? undefined : "_blank";
  const rel = scrollToBottom ? undefined : "noopener noreferrer";

  if (full) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="block w-full"
      >
        <button
          type="button"
          className={`w-full text-white font-bold text-base py-4 rounded-full shadow-md active:scale-95 transition-all duration-150 tracking-widest uppercase animate-cta-pulse ${className}`}
          style={{ background: "linear-gradient(rgb(110, 231, 122), rgb(52, 168, 83))" }}
        >
          Quiero Aprovechar el Descuento
        </button>
      </a>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-block"
    >
      <button
        type="button"
        className={`text-white font-black uppercase py-4 px-8 md:px-12 rounded-full shadow-[0_6px_0_#15803d,0_15px_20px_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-[6px] transition-all duration-150 transform animate-cta-pulse text-[11px] tracking-normal px-6 py-3 ${className}`}
        style={{
          background: "linear-gradient(rgb(74, 222, 128), rgb(22, 163, 74))",
          textShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px",
        }}
      >
        Quiero Aprovechar el Descuento
      </button>
    </a>
  );
}
