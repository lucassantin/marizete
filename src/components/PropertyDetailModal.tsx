import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Property, formatPrice } from "@/data/mockData";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

const PropertyDetailModal = ({ property, onClose }: PropertyDetailModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!property) return null;

  const images = property.images.length > 0 ? property.images : [property.image];

  const goNext = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-background"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/60 text-primary-foreground transition-colors hover:bg-foreground/80"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image carousel */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={`${property.title} - Foto ${currentImage + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/60 text-primary-foreground transition-colors hover:bg-foreground/80"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/60 text-primary-foreground transition-colors hover:bg-foreground/80"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        i === currentImage
                          ? "w-6 bg-primary-foreground"
                          : "bg-primary-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Image counter */}
            <div className="absolute left-4 top-4 bg-foreground/60 px-3 py-1 font-body text-xs text-primary-foreground">
              {currentImage + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto bg-muted/30 p-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`h-16 w-24 flex-shrink-0 overflow-hidden border-2 transition-all ${
                    i === currentImage ? "border-gold opacity-100" : "border-transparent opacity-60 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-body text-xs font-medium uppercase tracking-widest text-gold">
                  {property.type}
                </span>
                <h2 className="mt-2 font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {property.title}
                </h2>
                <div className="mt-2 flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="font-body text-sm">
                    {property.neighborhood}, {property.location}
                  </span>
                </div>
              </div>
              <p className="font-display text-2xl font-semibold text-gold md:text-3xl">
                {formatPrice(property.price)}
              </p>
            </div>

            {/* Specs */}
            <div className="mt-6 flex gap-6 border-y border-border py-4">
              <div className="flex items-center gap-2 text-foreground">
                <Bed className="h-5 w-5 text-muted-foreground" />
                <span className="font-body text-sm">
                  {property.bedrooms} {property.bedrooms === 1 ? "Quarto" : "Quartos"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Bath className="h-5 w-5 text-muted-foreground" />
                <span className="font-body text-sm">
                  {property.bathrooms} {property.bathrooms === 1 ? "Banheiro" : "Banheiros"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Maximize className="h-5 w-5 text-muted-foreground" />
                <span className="font-body text-sm">{property.area}m²</span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Sobre o Imóvel
              </h3>
              <p className="mt-3 font-body leading-relaxed text-muted-foreground">
                {property.description}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <WhatsAppButton
                message={`Olá, quero saber mais sobre o imóvel: ${property.title} (${formatPrice(property.price)})`}
                className="w-full justify-center py-4 text-center"
              >
                Tenho Interesse neste Imóvel
              </WhatsAppButton>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PropertyDetailModal;
