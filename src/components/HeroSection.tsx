import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const HeroSection = () => {
  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Pill */}
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Programa CNH Social 2025
          </div>

          {/* Título impactante (elegibilidade) */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Você tem direito à{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CNH Social?
            </span>
          </h1>

          {/* Subtítulo com SEO sem poluir */}
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Descubra sua <strong>elegibilidade</strong> no <strong>Programa CNH Social 2025</strong>. Entenda
            critérios de <strong>renda</strong> e <strong>CadÚnico</strong>, como funcionam os <strong>editais
            do DETRAN</strong> por estado, quais <strong>taxas e etapas</strong> (teórico, prático e exames)
            podem ser custeadas e quais <strong>documentos</strong> apresentar quando o edital estiver aberto.
          </p>

          {/* CTAs alinhadas a elegibilidade/inscrição */}
          <div className="mb-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="hero"
              onClick={scrollToQuiz}
              className="w-full sm:w-auto"
              aria-label="Verificar minha elegibilidade no quiz"
            >
              Verificar Minha Elegibilidade
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.getElementById("como-inscrever")?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto"
              aria-label="Ver como se inscrever"
            >
              Como se Inscrever
            </Button>
          </div>

          {/* Linha discreta de confiança */}
          <p className="mb-8 text-xs text-muted-foreground">
            Conteúdo informativo e independente — não oficial. Atualizado em 2025. Editais variam por estado.
          </p>

          {/* Link em destaque (material útil) */}
          <div className="mx-auto max-w-2xl rounded-lg border bg-muted/40 p-4 text-left">
            <p className="text-sm">
              <strong>Quer comparar regras por estado?</strong>{" "}
              <a
                href="https://marciobevervanso.com.br/cnh-gratuita-social-comparativo-regras-2025/"
                target="_blank"
                rel="nofollow noopener"
                className="underline underline-offset-2 hover:text-primary"
              >
                CNH Social 2025 — regras e comparação por estado
              </a>
            </p>
          </div>

          {/* Prova social / credibilidade */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span>Guia prático: critérios, documentos e etapas do processo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
