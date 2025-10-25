import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { toast } from "sonner";
import { ga, observeImpressionById } from "@/lib/analytics";

// links finais (prioriza CNH Social e materiais do seu blog)
const FINAL_LINKS = [
  {
    title: "CNH Social 2025 — regras por estado, edital e comparação",
    desc: "Quem tem direito, critérios de renda/CadÚnico, documentação e como participar quando abrir.",
    url: "https://marciobevervanso.com.br/cnh-gratuita-social-comparativo-regras-2025/",
  },
  {
    title: "Guia de Benefícios Sociais 2025",
    desc: "Panorama de direitos, inscrições e documentos essenciais (CadÚnico, CRAS, etc.).",
    url: "https://marciobevervanso.com.br/beneficios-sociais-governo-federal-guia-direitos-2025/",
  },
  {
    title: "Bolsa Família 2025 — benefícios e regras",
    desc: "Valores, condicionalidades e calendário por NIS (pode pontuar em alguns editais).",
    url: "https://marciobevervanso.com.br/bolsa-familia-comparativo-beneficios-regras/",
  },
  {
    title: "Minha Casa Minha Vida 2025 — faixas e benefícios",
    desc: "Entenda as faixas de renda e como participar.",
    url: "https://marciobevervanso.com.br/minha-casa-minha-vida-2025-comparativo-faixas-beneficios/",
  },
];

export const QuizSection = () => {
  const [started, setStarted] = useState(false);
  const [firstAnswered, setFirstAnswered] = useState(false);
  const [step, setStep] = useState(1);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showFab, setShowFab] = useState(false);

  const total = 9;

  // Perguntas focadas em CNH Social (genéricas, válidas para a maioria dos estados)
  const questions = [
    {
      key: "estado_editais",
      text: "Você mora em um estado com edital da CNH Social ativo ou recorrente?",
      options: ["Sim", "Não", "Não sei"],
    },
    {
      key: "renda",
      text: "Qual é a renda familiar per capita?",
      options: ["Até 1/2 salário mínimo", "Entre 1/2 e 1 salário mínimo", "Acima de 1 salário mínimo"],
    },
    {
      key: "cadunico",
      text: "Sua família está inscrita no CadÚnico?",
      options: ["Sim, atualizado (≤ 24 meses)", "Sim, mas desatualizado", "Não sei/Não"],
    },
    {
      key: "idade",
      text: "Qual sua idade?",
      options: ["18 anos ou mais", "16–17 anos", "Menos de 16 anos"],
    },
    {
      key: "alfabetizacao",
      text: "Você sabe ler e escrever?",
      options: ["Sim", "Não"],
    },
    {
      key: "documentos",
      text: "Você tem RG, CPF e comprovante de residência do seu estado?",
      options: ["Sim, todos", "Tenho parcialmente", "Não"],
    },
    {
      key: "impedimentos",
      text: "Possui impedimentos (ex.: suspensão, restrição judicial ou multas graves pendentes)?",
      options: ["Não tenho impedimentos", "Tenho/Não sei"],
    },
    {
      key: "categoria",
      text: "Para qual categoria pretende concorrer?",
      options: ["A (moto)", "B (carro)", "A+B (quando permitido)"],
    },
    {
      key: "vulnerabilidade",
      text: "Situações que podem pontuar (quando previsto em edital):",
      options: ["Desemprego/baixa renda", "Benefício social (BF, BPC, etc.)", "Nenhuma/Não sei"],
    },
  ];

  // -------- Analytics base + (se usar ads nesta página) --------
  useEffect(() => {
    ga.event("quiz_gate_view", { page: "cnh_social" });
    observeImpressionById?.("ad-horizontal-topo", "ad_view");
    observeImpressionById?.("ad-quadrado-sidebar", "ad_view");
    observeImpressionById?.("ad-multiplex-final", "ad_view");
  }, []);

  // FAB “voltar ao topo” aparece após scroll (apenas no resultado)
  useEffect(() => {
    const handleScroll = () => setShowFab(window.scrollY > 600 && finished);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [finished]);

  const startQuiz = () => {
    setStarted(true);
    setFinished(false);
    setStep(1);
    setAnswers({});
    setFirstAnswered(false);
    ga.event("quiz_start", { theme: "cnh_social", via: "start_button" });
  };

  const selectOption = (option: string) => {
    const key = questions[step - 1].key;
    setAnswers((prev) => ({ ...prev, [key]: option }));
    if (!firstAnswered && step === 1) {
      ga.event("quiz_first_answer", { option });
      setFirstAnswered(true);
    }
  };

  const handleNext = () => {
    const current = questions[step - 1];
    if (!answers[current.key]) {
      toast.error("Por favor, selecione uma opção");
      return;
    }
    ga.event("quiz_step", { step });

    if (step < total) {
      setStep(step + 1);
    } else {
      setFinished(true); // sem scroll automático
      ga.event("quiz_finish", { total_steps: total });
      toast.success("Obrigado! Veja as orientações abaixo.");
    }
  };

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const progressPct = Math.round((step / total) * 100);

  return (
    <section id="quiz" className="py-16 sm:py-20 bg-muted/30 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Descubra se Você Tem Direito à CNH Social
          </h2>

          <Card className={`p-6 md:p-8 shadow-soft ${finished ? "pb-24" : ""}`}>
            {/* === Gate/Tela de abertura === */}
            {!started && !finished && (
              <div className="space-y-6 text-center">
                <p className="text-muted-foreground">
                  Responda um questionário rápido para avaliarmos sua <strong>elegibilidade</strong> ao{" "}
                  <strong>Programa CNH Social 2025</strong> (regras variam por estado e edital do DETRAN).
                </p>
                <ul className="grid gap-3 text-left sm:grid-cols-2">
                  <li className="rounded-md bg-muted p-3">✔️ Menos de 1 minuto</li>
                  <li className="rounded-md bg-muted p-3">✔️ Sem dados pessoais sensíveis</li>
                  <li className="rounded-md bg-muted p-3">✔️ Resultado com próximos passos</li>
                  <li className="rounded-md bg-muted p-3">✔️ Links úteis ao final</li>
                </ul>
                <div className="flex justify-center">
                  <Button size="lg" variant="hero" onClick={startQuiz} aria-label="Iniciar avaliação de elegibilidade">
                    Iniciar avaliação de elegibilidade
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Conteúdo informativo. A inscrição depende de <strong>edital do DETRAN</strong> do seu estado.
                </p>
              </div>
            )}

            {/* === Fluxo principal do quiz === */}
            {started && !finished && (
              <>
                {/* Progresso */}
                <div className="mb-8">
                  <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                    <span>Passo {step} de {total}</span>
                    <span>{progressPct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full transition-all duration-500 bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>

                {/* Pergunta atual */}
                <div className="space-y-4 animate-in fade-in duration-300">
                  <h3 className="mb-4 text-xl font-semibold">{questions[step - 1].text}</h3>
                  <div className="space-y-3">
                    {questions[step - 1].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => selectOption(option)}
                        className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                          answers[questions[step - 1].key] === option
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navegação */}
                <div className="mt-8 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(Math.max(1, step - 1))}
                    disabled={step === 1}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                  </Button>
                  <Button variant="hero" onClick={handleNext}>
                    {step === total ? "Finalizar" : "Próximo"}
                    {step < total && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </>
            )}

            {/* === Tela final === */}
            {finished && (
              <>
                <div className="mb-6 flex justify-center">
                  <a
                    href="https://marciobevervanso.com.br/cnh-gratuita-social-comparativo-regras-2025/"
                    target="_blank"
                    rel="nofollow noopener"
                    className="btn-hero w-full px-6 py-4 text-center text-base sm:w-auto sm:text-lg shadow-strong hover:shadow-strong active:opacity-95"
                    aria-label="Ver regras por estado, edital e como participar"
                    onClick={() =>
                      ga.event("cta_click", { id: "cnh_regras_cta", placement: "quiz_result" })
                    }
                  >
                    Ver regras por estado e como participar
                  </a>
                </div>

                <h3 className="mb-3 text-lg font-semibold sm:text-xl">Orientações e próximos passos</h3>
                <p className="mb-6 text-muted-foreground">
                  Acompanhe o site do <strong>DETRAN</strong> do seu estado e o Diário Oficial para abertura de{" "}
                  <strong>editais</strong>. Tenha <strong>CadÚnico</strong> atualizado (se exigido), documentos em dia e
                  atenção aos prazos e critérios.
                </p>

                {/* Links úteis (cards clicáveis inteiros) */}
                <ul className="grid gap-3">
                  {FINAL_LINKS.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="nofollow noopener"
                        className="block break-words rounded-lg border-2 border-border p-4 transition-all hover:border-primary/50"
                        onClick={() => ga.event("outbound_click", { url: l.url, from: "quiz_result_cnh" })}
                      >
                        <div className="font-semibold underline-offset-2 hover:underline">{l.title}</div>
                        {l.desc && <p className="mt-1 text-sm text-muted-foreground">{l.desc}</p>}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Ações finais */}
                <div className="mt-8 flex flex-col justify-end gap-3 sm:flex-row">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setFinished(false);
                      setStarted(false); // volta para a tela de abertura
                      setStep(1);
                      setAnswers({});
                      setFirstAnswered(false);
                      ga.event("quiz_restart", { theme: "cnh_social" });
                    }}
                  >
                    Refazer quiz
                  </Button>
                  <Button variant="hero" size="lg" onClick={goTop}>
                    Voltar ao topo
                  </Button>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>

      {/* FAB flutuante “Topo” */}
      {showFab && (
        <button
          onClick={goTop}
          className="fixed right-4 bottom-24 sm:bottom-28 z-[60] rounded-full bg-gradient-primary p-3 text-white shadow-strong sm:right-6"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </section>
  );
};
