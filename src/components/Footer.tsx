import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { AGENT_NAME, SOCIAL_LINKS } from "@/config";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground py-16 text-primary-foreground/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-primary-foreground">
              {AGENT_NAME}
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed">
              Consultoria imobiliária de alto padrão com atendimento exclusivo e personalizado.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Navegação
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <Link to="/" className="font-body text-sm transition-colors hover:text-primary-foreground">
                Início
              </Link>
              <Link to="/imoveis" className="font-body text-sm transition-colors hover:text-primary-foreground">
                Imóveis
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Contato
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="transition-colors hover:text-primary-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 font-body text-sm">{SOCIAL_LINKS.email}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs">
            © {new Date().getFullYear()} {AGENT_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
