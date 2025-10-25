import { Card } from "@/components/ui/card";
import { BadgeCheck, FileCheck2, CalendarDays, ArrowRight } from "lucide-react";

export const BenefitsSection = () => {
  // 3 pontos-chave da CNH Social (elegibilidade)
  const benefits = [
    {
      icon: BadgeCheck,
      title: "Elegibilidade por estado",
      description:
        "Critérios variam por edital do DETRAN: renda per capita (normalmente via CadÚnico), prioridade social e vagas específicas.",
    },
    {
      icon: FileCheck2,
      title: "Custos cobertos no edital",
      description:
        "Muitos programas incluem taxas, aulas teóricas/práticas e exames. Leia o edital local para saber exatamente o que está incluso.",
    },
    {
      icon: CalendarDays,
      title: "Inscrição e prazos",
      description:
        "As inscrições abrem em janelas curtas. Acompanhe o DETRAN do seu estado e prepare documentos com antecedência.",
    },
  ];

  // Leituras recomendadas (ajustadas ao tema CNH Social)
  const resources = [
    {
      title: "CNH Social 2025 — regras e comparação",
      desc: "Critérios por estado, documentos e como acompanhar editais.",
      url: "https://marciobevervanso.com.br/cnh-gratuita-social-comparativo-regras-2025/",
      tag: "Guia por estado",
    },
    {
      title: "Guia de Benefícios Sociais 2025",
      desc: "Panorama de direitos e inscrições — base para CadÚnico e renda.",
      url: "https://marciobevervanso.com.br/beneficios-sociais-governo-federal-guia-direitos-2025/",
      tag: "Base CadÚnico",
    },
    {
      title: "Bolsa Família 2025 — benefícios e regras",
      desc: "Composição de renda e atualizações que impactam elegibilidade.",
      url: "https://marciobevervanso.com.br/bolsa-familia-comparativo-beneficios-regras/",
      tag: "Renda familiar",
    },
    {
      title: "Minha Casa Minha Vida 2025 — faixas e benefícios",
      desc: "Entenda faixas de renda e documentos (úteis para cadastros).",
      url: "https://marciobevervanso.com.br/minha-casa-minha-vida-2025-comparativo-faixas-beneficios/",
      tag: "Documentos",
    },
  ];

  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Foco em elegibilidade
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Por que verificar sua elegibilidade na CNH Social 2025?
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja os critérios essenciais, o que costuma ser coberto e como acompanhar os editais do seu estado.
          </p>
        </div>

        {/* 3 benefícios */}
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Card
              key={i}
              className="group h-full p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{b.title}</h3>
              <p className="text-muted-foreground">{b.description}</p>
            </Card>
          ))}
        </div>

        {/* Recursos úteis */}
        <div className="mt-14">
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-semibold">Recursos úteis para a inscrição</h3>
            <p className="text-muted-foreground">
              Materiais que ajudam a comprovar renda, organizar documentos e acompanhar editais.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="nofollow noopener"
                className="group block"
              >
                <Card className="flex h-full items-stretch justify-between gap-4 rounded-xl border-2 p-5 transition-colors hover:border-primary/50">
                  {/* texto */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="mb-1 inline-flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {r.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold leading-snug">
                      {r.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {r.desc}
                    </p>
                    <span className="mt-3 text-sm font-medium text-primary">
                      Ler agora
                    </span>
                  </div>

                  {/* chevron */}
                  <div className="flex shrink-0 items-center">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-muted text-foreground transition-colors group-hover:border-primary/50">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
