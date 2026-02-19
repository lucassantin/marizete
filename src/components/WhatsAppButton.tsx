import { WHATSAPP_NUMBER } from "@/config";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "float" | "inline" | "hero";
}

const WhatsAppButton = ({ message, children, className = "", variant = "inline" }: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  if (variant === "float") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </a>
    );
  }

  if (variant === "hero") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 border border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3 font-body text-sm font-medium uppercase tracking-widest text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20 ${className}`}
      >
        <MessageCircle className="h-4 w-4" />
        {children || "Fale Comigo"}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-gold px-6 py-3 font-body text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all hover:bg-gold-dark ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children || "Fale Comigo"}
    </a>
  );
};

export default WhatsAppButton;
