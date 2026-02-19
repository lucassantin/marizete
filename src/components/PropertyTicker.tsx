import { motion } from "framer-motion";

const types = [
  "Apartamentos de Luxo",
  "Coberturas",
  "Casas em Condomínio",
  "Studios",
  "Apartamentos de Luxo",
  "Coberturas",
  "Casas em Condomínio",
  "Studios",
];

const PropertyTicker = () => {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-cream py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center gap-12">
          
          {/* Cabeçalho centralizado */}
          <div className="flex flex-col items-center text-center">
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Especialidades
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Tipos de Imóveis
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" />
          </div>

          {/* Container de rolagem centralizado */}
          <div className="relative h-64 w-full max-w-2xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-cream to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-cream to-transparent" />
            <motion.div
              animate={{ y: [0, (-50 * types.length) / 2] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-col items-center gap-6"
            >
              {types.map((type, i) => (
                <div
                  key={i}
                  className="text-center font-display text-2xl font-medium text-foreground/80 md:text-3xl"
                >
                  {type}
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertyTicker;