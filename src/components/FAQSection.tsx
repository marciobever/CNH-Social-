import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Quem tem direito à CNH Social em 2025?",
      answer:
        "Depende do edital do DETRAN de cada estado. Em geral, exige-se inscrição no CadÚnico, renda familiar per capita limitada e critérios de vulnerabilidade social. Podem existir prioridades (mulheres chefes de família, jovens, PCD, entre outros).",
    },
    {
      question: "Todos os estados oferecem CNH Social?",
      answer:
        "Não. Alguns usam nomes como CNH Social, CNH Popular ou programas próprios. A disponibilidade e o número de vagas dependem da política estadual e da publicação de editais pelo DETRAN local.",
    },
    {
      question: "Como faço a inscrição quando abre edital?",
      answer:
        "A inscrição é feita pelo site do DETRAN do seu estado (ou portal indicado no edital) dentro do prazo divulgado. Preencha o formulário, informe dados do CadÚnico/NIS, envie documentos quando solicitado e acompanhe o resultado.",
    },
    {
      question: "Quais documentos geralmente são exigidos?",
      answer:
        "Documento com foto, CPF, comprovante de residência recente e dados do CadÚnico (NIS). O edital pode pedir comprovantes adicionais (escolaridade, situação de trabalho, PCD, etc.).",
    },
    {
      question: "O que a CNH Social costuma cobrir?",
      answer:
        "Muitos editais incluem isenção de taxas, aulas teóricas e práticas, exames e emissão da CNH. Porém, a cobertura exata varia: leia o edital do seu estado para saber o que está incluso e o que é responsabilidade do candidato.",
    },
    {
      question: "Para quais categorias vale (A/B) e há limites de idade?",
      answer:
        "Editais geralmente focam em 1ª habilitação nas categorias A e/ou B. É preciso ter a idade mínima legal (18 anos completos) e atender aos demais requisitos do DETRAN.",
    },
    {
      question: "Fui reprovado em alguma etapa. Perco a vaga?",
      answer:
        "As regras de reprovações, remarcações e prazos são definidas no edital e nas normas do DETRAN. Alguns permitem nova tentativa dentro do cronograma; outros podem encerrar o benefício. Consulte o seu edital.",
    },
    {
      question: "Como acompanhar o andamento e o resultado?",
      answer:
        "Acompanhe o portal do DETRAN, o diário oficial e os canais informados no edital. Muitos estados divulgam lista de selecionados e chamamentos por etapas, com prazos para matrícula e aulas.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30" aria-labelledby="faq-title">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 id="faq-title" className="mb-4 text-3xl font-bold md:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o Programa CNH Social 2025
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-card shadow-soft transition-colors focus-within:ring-2 focus-within:ring-primary/30"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-base font-semibold leading-relaxed hover:no-underline focus:outline-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Regras e prazos variam por estado e edital do DETRAN. Consulte sempre o
            anúncio oficial do seu estado para os detalhes atualizados.
          </p>
        </div>
      </div>
    </section>
  );
};
