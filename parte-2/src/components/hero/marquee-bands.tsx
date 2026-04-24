const phrases = [
  "Alta demanda",
  "Salários altos",
  "Simples e poderoso",
  "Linguagem da IA",
  "Código limpo",
  "Carreira global",
  "Fácil aprender",
  "Comunidade gigante",
  "Projetos reais",
  "Domine dados",
];

const items = phrases.flatMap((p) => [p, "•"]);
const doubled = [...items, ...items, ...items];

export default function MarqueeBands() {
  return (
    <div className="relative w-full h-24">

      <div className="absolute inset-x-0 top-0 -rotate-3 bg-brand-yellow py-3 overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="px-6 font-rethink-sans text-base font-semibold text-black"
            >
              {item}
            </span>
          ))}
        </div>
      </div>


      <div className="absolute inset-x-0 top-10 rotate-3 bg-white py-3 overflow-hidden">
        <div className="flex w-max animate-marquee-reverse whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="px-6 font-rethink-sans text-base font-semibold text-black"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}