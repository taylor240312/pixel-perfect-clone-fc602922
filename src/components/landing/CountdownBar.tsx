import { useEffect, useState } from "react";

function useCountdown() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      setLeft(Math.max(0, end.getTime() - now.getTime()));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return left;
}

export function CountdownBar() {
  const left = useCountdown();
  const [today, setToday] = useState("");

  useEffect(() => {
    const d = new Date();
    setToday(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);
  }, []);

  const h = left === null ? null : Math.floor(left / 3600000);
  const m = left === null ? null : Math.floor((left % 3600000) / 60000);
  const s = left === null ? null : Math.floor((left % 60000) / 1000);

  return (
    <div className="bg-urgency-red text-gold py-1.5 px-4 text-center fixed top-0 inset-x-0 z-50 shadow-md">
      <p className="text-[11px] md:text-xs font-bold tracking-wide">
        Descuento Solo HOY: <span className="text-white">{today}</span>
      </p>
      <p className="text-[10px] md:text-[11px] font-medium mt-0.5">
        Termina en:{" "}
        <span className="font-bold font-mono tracking-wider text-white inline-block ml-1">
          {left === null ? "--" : `${h}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`}
        </span>
      </p>
    </div>
  );
}