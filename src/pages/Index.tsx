import { HeroSection } from "@/components/HeroSection";
import { QuizSection } from "@/components/QuizSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { StatsSection } from "@/components/StatsSection";
import { StepsSection } from "@/components/StepsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import AdUnit from "@/components/AdUnit";
import ChatLauncher from "@/components/ChatLauncher"; // botão flutuante do chat

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* 1) BANNER GRANDE (Display) — topo */}
      <div className="w-full flex justify-center mt-4 mb-4 px-4">
        <div className="w-full max-w-[970px] md:max-w-[728px] sm:max-w-[320px]">
          <AdUnit
            slot="3743211608" // TODO: trocar para slot da CNH, ex.: cnh_horizontal_topo
            id="ad-horizontal-topo"
            style={{ minHeight: 90 }}
          />
        </div>
      </div>

      <QuizSection />

      {/* 2) QUADRADO após o quiz (tamanho controlado para não estourar no mobile) */}
      <div className="w-full flex justify-center mt-4 mb-8 px-4">
        {/* Mobile: 300x250 | ≥640px: 336x280 */}
        <div
          id="ad-quadrado-pos-quiz"
          className="w-[300px] h-[250px] sm:w-[336px] sm:h-[280px]"
        >
          <AdUnit
            slot="7540616697" // TODO: trocar para slot da CNH, ex.: cnh_quadrado
            style={{ width: "100%", height: "100%", display: "inline-block" }}
            dataFullWidthResponsive="false"
          />
        </div>
      </div>

      <BenefitsSection />
      <StatsSection />
      <StepsSection />
      <FAQSection />

      {/* 3) MULTIPLEX antes do footer */}
      <div className="w-full flex justify-center mt-6 mb-10 px-4">
        <div className="w-full max-w-[980px]" id="ad-multiplex-footer">
          <AdUnit
            slot="1117048264"     // TODO: trocar para slot da CNH, ex.: cnh_multiplex
            format="autorelaxed"  // obrigatório para multiplex
            style={{ minHeight: 250 }}
          />
        </div>
      </div>

      {/* Botão flutuante para o chat (/assistente) — já com lógica anti-anchor */}
      <ChatLauncher />

      <Footer />
    </div>
  );
};

export default Index;
