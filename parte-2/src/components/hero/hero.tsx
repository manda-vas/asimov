import Button from "@/components/ui/button";
import MarqueeBands from "@/components/hero/marquee-bands";
import TerminalTyping from "./terminal-typing";

const bullets = [
  "+40 horas de conteúdo direto ao ponto",
  "Projetos com Python + IA desde o módulo 1",
  "Suporte da comunidade com +20.000 alunos",
  "Certificado reconhecido pelo mercado",
];

export default function Hero() {
  return (
    <section className="bg-black">
      <div className="mx-auto flex w-full max-w-1440 flex-col items-center justify-center gap-10 px-6 pt-16 pb-20 text-center md:px-16 lg:px-24">
        <TerminalTyping />
        <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white font-rethink-sans md:text-4xl lg:text-5xl">
          Aprenda <span className="text-brand-yellow">Python</span> do zero e construa projetos reais com IA
        </h1>

        <p className="max-w-2xl text-lg text-white font-rethink-sans md:text-xl">
          O curso mais prático do Brasil para quem quer entrar em tecnologia sem
          enrolação
        </p>

        <ul className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-x-12 md:gap-y-3 text-left text-base text-white font-rethink-sans md:text-lg">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              <span
                className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-black text-xs font-bold"
                aria-hidden="true"
              >
                ✓
              </span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button variant="primary">Quero começar agora</Button>
          <Button variant="secondary">Ver o que vou aprender</Button>
        </div>
      </div>
      <MarqueeBands />
    </section>
  );
}
