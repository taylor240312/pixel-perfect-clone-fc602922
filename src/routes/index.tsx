import { createFileRoute } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import { CountdownBar } from "@/components/landing/CountdownBar";
import { CtaButton } from "@/components/landing/CtaButton";
import { RecipesMarquee, TestimonialsMarquee } from "@/components/landing/Marquees";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "300 Receitas de Sobremesas Zero | Amanda Ballis" },
      {
        name: "description",
        content:
          "+ de 300 sobremesas zero açúcar, glúten e lactose. Coma sua sobremesa favorita de domingo a domingo, sem culpa. Oferta de hoje: R$ 10.",
      },
      { property: "og:title", content: "300 Receitas de Sobremesas Zero | Amanda Ballis" },
      {
        property: "og:description",
        content:
          "+ de 300 sobremesas zero açúcar, glúten e lactose, com o sabor das tradicionais. 3 bônus grátis e 7 dias de garantia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const DESSERTS = [
  { name: "Brownie", img: "/img/brownie.jpg" },
  { name: "Manjar", img: "/img/manjar.jpg" },
  { name: "Doce de Leite", img: "/img/doce.jpg" },
  { name: "Pavê", img: "/img/pave.jpg" },
  { name: "Pudim", img: "/img/pudim.jpg" },
];

const BONUSES = [
  {
    title: "Tortas Doces",
    desc: "Zero açúcar, zero glúten e zero lactose",
    price: "DE R$ 39,90",
    img: "/img/bonus-tortas.png",
  },
  {
    title: "Lanche da Tarde",
    desc: "Zero açúcar, zero glúten e zero lactose",
    price: "DE R$ 29,90",
    img: "/img/bonus-lanche.png",
  },
  {
    title: "Geléias Caseiras",
    desc: "Zero açúcar",
    price: "DE R$ 19,90",
    img: "/img/bonus-geleias.png",
  },
];

const INCLUDED = [
  "+300 RECEITAS DE SOBREMESAS ZERO",
  "TORTAS DOCES (BÔNUS)",
  "LANCHE DA TARDE (BÔNUS)",
  "GELEIAS CASEIRAS (BÔNUS)",
  "ACESSO IMEDIATO E VITALÍCIO",
  "7 DIAS DE GARANTIA",
];

const FAQ = [
  {
    q: "Funciona para quem tem diabetes?",
    a: "Sim! Todas as receitas são sem açúcar, sem glúten e sem lactose, ideais para controlar a glicemia.",
  },
  {
    q: "Os ingredientes são difíceis de encontrar?",
    a: "Não. Ingredientes simples que você encontra em qualquer supermercado.",
  },
  {
    q: "Precisa ter experiência na cozinha?",
    a: "De jeito nenhum. Receitas muito fáceis, qualquer pessoa consegue fazer.",
  },
  {
    q: "Como acesso depois de pagar?",
    a: "Acesso imediato por e-mail, vitalício, em qualquer dispositivo.",
  },
  {
    q: "E se eu não gostar?",
    a: "7 dias de garantia total — devolvemos 100% do seu dinheiro sem perguntas.",
  },
];

function Benefit({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 md:gap-4">
      <div className="mt-0.5 md:mt-1 flex-shrink-0 bg-green-100 rounded-full p-0.5 md:p-1">
        <Check className="w-3.5 h-3.5 md:w-5 md:h-5 text-cta-green" strokeWidth={3} />
      </div>
      <p className="text-xs md:text-lg text-muted-foreground leading-snug md:leading-relaxed">
        {children}
      </p>
    </li>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-brand-coral selection:text-white">
      <CountdownBar />
      <div className="h-[46px] md:h-[50px]" aria-hidden="true" />

      {/* HERO */}
      <section className="relative pt-6 pb-10 px-4 md:px-8 lg:px-16 pattern-desserts">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-1.5 mb-5">
            <h1 className="flex flex-col items-center">
              <span className="bg-chocolate text-white px-2 sm:px-2.5 py-0.5 text-[clamp(0.85rem,5.2vw,1.375rem)] font-black uppercase shadow-lg whitespace-nowrap">
                Agora Você Pode Comer
              </span>
              <span className="bg-brand-coral text-white px-2 sm:px-3 py-0.5 text-[clamp(0.85rem,5.6vw,1.625rem)] font-black uppercase transform rotate-[0.4deg] shadow-lg mt-[1px] whitespace-nowrap">
                Sua Sobremesa Favorita
              </span>
              <span className="text-brand-coral text-2xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight mt-2 drop-shadow-sm flex flex-col items-center">
                <span className="whitespace-nowrap">De Domingo a Domingo,</span>
                <span>Sem Culpa!</span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mt-3 font-medium">
              + de 300 Sobremesas{" "}
              <span className="font-bold text-chocolate">Zero Açúcar, Glúten e Lactose.</span>
            </p>
            <div className="flex items-center gap-1 mt-3">
              <div
                className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: 'url("/img/author.jpg")' }}
              />
              <div className="text-left leading-none">
                <p className="font-bold text-[8px] md:text-[9px] text-brand-coral leading-tight">
                  Por Amanda Ballis
                </p>
                <p className="text-[6px] md:text-[7px] text-brand-coral/70 font-medium">
                  Nutricionista
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 mb-4 md:mb-6">
            <img
              alt="300 Receitas de Sobremesas Zero"
              className="w-full max-w-2xl mx-auto drop-shadow-2xl"
              src="/img/hero-mockup.png"
            />
          </div>

          <div className="max-w-[180px] mx-auto mt-14 mb-6">
            <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">
              Avaliações:
            </p>
            <div className="flex items-center gap-1 mb-1">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#facc15] text-[#facc15]" />
                ))}
              </div>
              <span className="font-bold text-chocolate text-xs">(2.137)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-cta-green w-[97%] rounded-full" />
              </div>
              <span className="text-[10px] font-bold text-cta-green w-6 text-right">97%</span>
            </div>
          </div>

          <div className="flex justify-center">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI PODER COMER */}
      <section className="py-20 bg-background border-t border-border/40 relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-4">
            O que você <span className="text-brand-coral font-black">vai poder comer</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Com ingredientes <span className="font-bold text-chocolate">acessíveis</span> e + de 300
            receitas simples, qualquer pessoa pode preparar sobremesas deliciosas{" "}
            <span className="font-bold text-chocolate">sem sair da dieta.</span>
          </p>
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-5 gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar">
            {DESSERTS.map((d) => (
              <div
                key={d.name}
                className="bg-brand-coral rounded-2xl overflow-hidden shadow-xl min-w-[220px] md:min-w-0 snap-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className="w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url("${d.img}")` }}
                />
                <div className="p-4 text-center">
                  <h3 className="text-white font-black text-xl mb-3">{d.name}</h3>
                  <div className="space-y-1">
                    {["Sem Açúcar", "Sem Lactose", "Sem Glúten"].map((t) => (
                      <p
                        key={t}
                        className="text-white/90 text-sm font-medium bg-white/10 rounded-full py-0.5"
                      >
                        {t}
                      </p>
                    ))}
                    <p className="text-gold text-sm font-bold bg-black/10 rounded-full py-0.5 mt-2">
                      Sabor do Original
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-14 bg-background border-t border-border/40 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-2">
            O que estão <span className="text-brand-coral font-black">falando</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Resultados reais de quem já comprou o ebook
          </p>
        </div>
        <TestimonialsMarquee />
      </section>

      {/* 300 RECEITAS */}
      <section className="py-20 bg-brand-peach border-y border-border/50">
        <div className="max-w-6xl mx-auto text-center px-4 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-chocolate mb-4">
            Sim! São mais de <span className="text-brand-coral font-black">300 receitas!</span>
          </h2>
          <p className="text-lg md:text-xl text-chocolate/80 font-medium">
            Zero Açúcar, Zero Glúten e Zero Lactose com o sabor das tradicionais!
          </p>
        </div>
        <RecipesMarquee />
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-10 md:py-24 bg-background px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl md:rounded-3xl shadow-xl shadow-brand-coral/5 border border-brand-coral/20 p-4 md:p-10 transform hover:shadow-2xl transition-shadow duration-500">
            <h2 className="text-lg md:text-3xl font-black text-brand-coral text-center mb-4 md:mb-8">
              Baixando agora mais de 300 receitas, você vai:
            </h2>
            <ul className="space-y-2.5 md:space-y-5 mb-5 md:mb-10">
              <Benefit>
                Controlar a <span className="font-bold text-chocolate">compulsão por açúcar</span>
              </Benefit>
              <Benefit>
                <span className="font-bold text-chocolate">Controlar sua glicemia</span> sem abrir
                mão do prazer de comer doces.
              </Benefit>
              <Benefit>
                Garantir{" "}
                <span className="font-bold text-chocolate">digestão leve e confortável</span> após
                comer sua sobremesa
              </Benefit>
              <Benefit>
                <span className="font-bold text-chocolate">Perder peso</span> comendo seus doces
                favoritos na versão fit, com o mesmo sabor dos tradicionais
              </Benefit>
              <Benefit>
                <span className="font-bold text-chocolate">
                  Manter uma rotina de alimentação saudável
                </span>{" "}
                mesmo quando quiser comer um docinho
              </Benefit>
              <Benefit>
                Garantir que <span className="font-bold text-chocolate">seu filho</span> tenha uma{" "}
                <span className="font-bold text-chocolate">alimentação equilibrada</span> enquanto
                curte os sabores da infância
              </Benefit>
              <Benefit>
                Ter <span className="font-bold text-chocolate">sabores inéditos e saudáveis</span>{" "}
                para experimentar por anos
              </Benefit>
              <Benefit>
                Não tem muita{" "}
                <span className="font-bold text-chocolate">experiência na cozinha</span>. São
                receitas MUITO fáceis de fazer, com ingredientes que{" "}
                <span className="font-bold text-chocolate">todo mundo tem em casa</span>!
              </Benefit>
            </ul>
            <div className="flex justify-center">
              <CtaButton />
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="py-10 md:py-16 px-4 gradient-peach">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-medium text-chocolate/50 mb-8 md:mb-10 leading-snug">
            Você ainda{" "}
            <span className="font-black italic text-brand-coral">
              ganha + 3 bônus de presente!
            </span>
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
            {BONUSES.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl overflow-hidden shadow-lg flex flex-col bg-brand-coral"
              >
                <div className="px-3 pt-3">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                    <img alt={b.title} className="w-full h-full object-cover" src={b.img} loading="lazy" />
                  </div>
                </div>
                <div className="px-4 py-5 text-white text-center">
                  <p className="font-bold text-lg leading-tight mb-1">{b.title}</p>
                  <p className="text-sm opacity-90 leading-snug mb-4">{b.desc}</p>
                  <p className="line-through text-lg opacity-80 font-semibold mb-1">{b.price}</p>
                  <p className="font-black text-4xl tracking-wide">GRÁTIS</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-10 px-4 gradient-peach">
        <div className="max-w-md mx-auto">
          <h2 className="text-center text-2xl font-medium text-chocolate/60 mb-6 leading-snug">
            Tudo o que você <span className="font-black text-brand-coral">receberá</span>,
            aproveitando a <span className="font-black text-brand-coral">oferta de hoje</span>
          </h2>
          <div className="bg-[#ebebeb] rounded-2xl border-2 border-cta-green shadow-xl p-5">
            <div className="mb-6 text-center">
              <p className="text-gray-400 line-through text-2xl font-semibold">DE R$ 97,00</p>
              <p className="text-chocolate font-black mt-1 flex items-baseline justify-center gap-2">
                <span className="text-xl font-semibold">POR</span>
                <span className="text-5xl">R$ 10</span>
              </p>
            </div>
            <ul className="text-left space-y-3 mb-6">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-semibold text-chocolate/80 tracking-wide"
                >
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-cta-green rounded flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <CtaButton full />
            <p className="text-xs text-muted-foreground uppercase tracking-widest mt-3 text-center font-semibold">
              Somente Hoje *
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xs font-bold text-chocolate/60 text-center mb-3 uppercase tracking-widest">
            Dúvidas frequentes
          </h2>
          <div className="space-y-1.5">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group bg-card/60 border border-border/50 rounded-lg px-3 py-2 cursor-pointer"
              >
                <summary className="flex items-center justify-between text-[11px] font-medium text-chocolate/80 list-none">
                  {f.q}
                  <span className="ml-2 flex-shrink-0 text-brand-coral/70 font-bold group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-1.5 text-[10px] text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}