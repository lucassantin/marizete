import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Almeida",
    text: "Profissionalismo impecável. A Helena entendeu exatamente o que estávamos buscando e nos apresentou opções que superaram nossas expectativas.",
    role: "Empresário",
  },
  {
    name: "Camila Ferreira",
    text: "A experiência de comprar nosso apartamento foi incrível. Cada detalhe foi cuidado com atenção e dedicação. Recomendo de olhos fechados.",
    role: "Médica",
  },
  {
    name: "André & Patrícia Souza",
    text: "Encontramos a casa dos nossos sonhos em tempo recorde. O conhecimento de mercado e a transparência fazem toda a diferença.",
    role: "Casal",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Depoimentos
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            O Que Dizem Meus Clientes
          </h2>
          <div className="mx-auto mt-3 h-px w-12 bg-gold" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-8"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-6 font-body text-sm leading-relaxed text-muted-foreground">
                "{t.text}"
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
