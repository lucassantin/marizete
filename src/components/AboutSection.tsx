import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <-- Import adicionado
import { AGENT_NAME } from "@/config";
import WhatsAppButton from "./WhatsAppButton";
import profile from "../../public/profile.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={profile}
                alt={AGENT_NAME}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-gold/30" style={{ zIndex: -1 }} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Sobre Mim
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              {AGENT_NAME}
            </h2>
            <div className="mt-3 h-px w-12 bg-gold" />
            <p className="mt-8 font-body text-base leading-relaxed text-muted-foreground">
              Com mais de 12 anos de experiência no mercado imobiliário de alto padrão,
              ofereço um atendimento exclusivo e personalizado para clientes que buscam
              mais do que um imóvel — buscam um estilo de vida.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              Minha abordagem combina profundo conhecimento de mercado, uma rede
              sólida de contatos e sensibilidade para entender as necessidades
              únicas de cada cliente. Do primeiro contato à entrega das chaves,
              estou ao seu lado em cada etapa.
            </p>
            
            {/* Flex container modificado aqui para organizar os botões */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton message="Olá, gostaria de conhecer mais sobre seu trabalho.">
                Entrar em Contato
              </WhatsAppButton>

              {/* Novo botão de imóveis */}
              <Link
                to="/imoveis"
                className="inline-flex h-12 items-center justify-center border border-gold bg-transparent px-8 font-body text-sm font-medium uppercase tracking-wider text-foreground transition-all duration-300 hover:bg-gold hover:text-background"
              >
                Ver Imóveis
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;