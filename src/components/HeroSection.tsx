import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // <-- Import adicionado para a rota
import WhatsAppButton from "./WhatsAppButton";
import { AGENT_NAME, AGENT_TITLE } from "@/config";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
        >
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />
          <h1 className="font-display text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
            {AGENT_NAME}
          </h1>
          <p className="mt-4 font-body text-sm font-light uppercase tracking-[0.3em] text-primary-foreground/70">
            {AGENT_TITLE}
          </p>
          <p className="mx-auto mt-6 max-w-lg font-body text-base font-light leading-relaxed text-primary-foreground/80">
            Encontre o imóvel dos seus sonhos com atendimento exclusivo e personalizado.
          </p>
          
          {/* Flex container adicionado aqui para organizar os botões */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton
              variant="hero"
              message="Olá, gostaria de mais informações sobre imóveis de alto padrão."
            >
              Agende uma Consulta
            </WhatsAppButton>

            {/* Novo botão de imóveis */}
            <Link
              to="/imoveis"
              className="inline-flex h-12 items-center justify-center border border-gold bg-transparent px-8 font-body text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:bg-gold hover:text-charcoal"
            >
              Ver Imóveis
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-bounce-gentle text-primary-foreground/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;