import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Como funciona o processo de compra de um imóvel de alto padrão?",
    a: "O processo começa com uma consultoria personalizada para entender suas necessidades. Em seguida, seleciono imóveis compatíveis, agendo visitas, auxilio na negociação e acompanho toda a documentação até a entrega das chaves.",
  },
  {
    q: "Você trabalha com imóveis para investimento?",
    a: "Sim. Ofereço análises de mercado detalhadas para identificar as melhores oportunidades de investimento, considerando valorização, rentabilidade e potencial de revenda.",
  },
  {
    q: "Qual a sua área de atuação?",
    a: "Atuo principalmente em São Paulo capital e região metropolitana, com foco em bairros nobres como Jardins, Vila Nova Conceição, Itaim Bibi, Moema e Perdizes.",
  },
  {
    q: "Há custos para o comprador utilizar seus serviços?",
    a: "Não. A comissão do corretor é paga pelo vendedor do imóvel. O comprador tem acesso a toda minha consultoria sem custo adicional.",
  },
  {
    q: "É possível agendar visitas nos finais de semana?",
    a: "Sim, trabalho com horários flexíveis, incluindo finais de semana e feriados, sempre com agendamento prévio para garantir disponibilidade.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
          <div className="mx-auto mt-3 h-px w-12 bg-gold" />
        </div>

        <div className="mt-16 space-y-0 divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="pr-4 font-body text-sm font-medium text-foreground md:text-base">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus className="h-4 w-4 shrink-0 text-gold" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 font-body text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
