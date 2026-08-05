import provaSocial02 from "@/assets/prova-social-02.png.asset.json";
import provaSocial03 from "@/assets/prova-social-03.png.asset.json";
import provaSocial04 from "@/assets/prova-social-04.png.asset.json";
import provaSocial05 from "@/assets/prova-social-05.png.asset.json";

const ROW_A = [
  "/img/cheesecake.jpg",
  "/img/torta.jpg",
  "/img/brigadeiro.jpg",
  "/img/rocambole.jpg",
  "/img/fruit.jpg",
  "/img/coco.jpg",
];

const ROW_B = [
  "/img/beijinho.jpg",
  "/img/pudim.jpg",
  "/img/pave.jpg",
  "/img/manjar.jpg",
  "/img/brownie.jpg",
  "/img/doce.jpg",
];

function Tile({ src }: { src: string }) {
  return (
    <div className="w-28 md:w-40 shrink-0 aspect-square rounded-xl overflow-hidden shadow-md relative group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url("${src}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export function RecipesMarquee() {
  return (
    <div className="relative w-full space-y-3 py-2">
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-brand-peach to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-brand-peach to-transparent z-10 pointer-events-none" />
      <div className="relative w-full overflow-hidden">
        <div className="flex min-w-max gap-3 animate-marquee">
          {[...ROW_A, ...ROW_A].map((src, i) => (
            <Tile key={`a-${i}`} src={src} />
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex min-w-max gap-3 animate-marquee-reverse">
          {[...ROW_B, ...ROW_B].map((src, i) => (
            <Tile key={`b-${i}`} src={src} />
          ))}
        </div>
      </div>
    </div>
  );
}

const DEPS_A = ["/img/dep-01.png", "/img/dep-02.png", provaSocial03.url, provaSocial04.url, provaSocial05.url];
const DEPS_B = [provaSocial02.url, "/img/dep-07.png", "/img/dep-08.png", "/img/dep-09.png", "/img/dep-10.png"];

function DepCard({ src }: { src: string }) {
  return (
    <div className="flex-shrink-0 w-44 rounded-2xl overflow-hidden shadow-lg border border-border/30">
      <img alt="Depoimento" className="w-full object-cover" src={src} loading="lazy" />
    </div>
  );
}

export function TestimonialsMarquee() {
  return (
    <>
      <div className="flex overflow-hidden mb-4">
        <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
          {[...DEPS_A, ...DEPS_A].map((src, i) => (
            <DepCard key={`ta-${i}`} src={src} />
          ))}
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex gap-3 animate-marquee-reverse" style={{ width: "max-content" }}>
          {[...DEPS_B, ...DEPS_B].map((src, i) => (
            <DepCard key={`tb-${i}`} src={src} />
          ))}
        </div>
      </div>
    </>
  );
}