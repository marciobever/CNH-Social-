import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IdCard, Building2, Smartphone, CalendarDays } from "lucide-react";

export const StepsSection = () => {
  const steps = [
    {
      icon: IdCard,
      title: "Separe os documentos",
      description:
        "Documento com foto, CPF, comprovante de residência e dados do CadÚnico/NIS (se tiver). Alguns editais pedem renda e comprovantes extras.",
    },
    {
      icon: Building2,
      title: "Acompanhe o edital do DETRAN",
      description:
        "Cada estado abre editais em períodos específicos (CNH Social/CNH Popular). Leia as regras do seu estado antes de se inscrever.",
    },
    {
      icon: Smartphone,
      title: "Faça a inscrição quando abrir",
      description:
        "Inscreva-se pelo site do DETRAN do seu estado no prazo do edital. Preencha o formulário e envie/valide documentos exigidos.",
    },
    {
      icon: CalendarDays,
      title: "Resultado e etapas",
      description:
        "Confira a seleção, faça matrícula no CFC credenciado e siga aulas teóricas/práticas e exames. O edital define o que é coberto.",
    },
  ] as const;

  const goQuiz = () =>
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="como-agendar" className="py-20" aria-labelledby="como-agendar-title">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Atualizado 2025
          </div>
          <h2 id="como-agendar-title" className="mb-4 text-3xl font-bold md:text-4xl">
            Como participar da CNH Social
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Veja os passos para checar regras do seu estado, se inscrever no prazo e concluir as etapas no DETRAN/CFC.
          </p>
        </div>

        <ol
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4"
          aria-label="Passo a passo da CNH Social"
        >
          {steps.map((step, index) => (
            <li key={step.title} className="list-none">
              <Card className="relative h-full p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-strong">
                {/* badge numerado */}
                <div
                  aria-hidden="true"
                  className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-md font-bold text-sm"
                >
                  {index + 1}
                </div>

                {/* ícone */}
                <div className="mt-4 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>

                {/* conteúdo */}
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-sm italic text-muted-foreground">
            As regras e o que é coberto variam por estado e por edital do DETRAN. Consulte sempre o site oficial do seu estado.
          </p>

          {/* CTA para o quiz de elegibilidade */}
          <div className="mt-4">
            <Button variant="hero" size="lg" onClick={goQuiz} aria-label="Ir para o quiz de elegibilidade da CNH Social">
              Verificar elegibilidade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
