import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Bed, Bath, Maximize, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PropertyDetailModal from "@/components/PropertyDetailModal";
import { properties, locations, propertyTypes, formatPrice, type Property } from "@/data/mockData";

const Listings = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.neighborhood.toLowerCase().includes(search.toLowerCase());
      const matchLocation = !selectedLocation || p.location === selectedLocation;
      const matchType = !selectedType || p.type === selectedType;
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchSearch && matchLocation && matchType && matchPrice;
    });
  }, [search, selectedLocation, selectedType, priceRange]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="bg-foreground pb-12 pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Portfólio
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-primary-foreground md:text-5xl">
            Imóveis Disponíveis
          </h1>
          <div className="mt-3 h-px w-12 bg-gold" />
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-6">
          {/* Search bar */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por nome ou bairro..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-border bg-background py-3 pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border border-border px-4 py-3 font-body text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-gold md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>

          {/* Filter row */}
          <div className={`mt-4 grid gap-4 md:grid-cols-3 ${showFilters ? "block" : "hidden md:grid"}`}>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-gold focus:outline-none"
            >
              <option value="">Todas as Cidades</option>
              {locations.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-gold focus:outline-none"
            >
              <option value="">Todos os Tipos</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <select
              value={`${priceRange[0]}-${priceRange[1]}`}
              onChange={(e) => {
                const [min, max] = e.target.value.split("-").map(Number);
                setPriceRange([min, max]);
              }}
              className="border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-gold focus:outline-none"
            >
              <option value="0-10000000">Qualquer Preço</option>
              <option value="0-1000000">Até R$ 1.000.000</option>
              <option value="1000000-3000000">R$ 1M - R$ 3M</option>
              <option value="3000000-5000000">R$ 3M - R$ 5M</option>
              <option value="5000000-10000000">Acima de R$ 5M</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 font-body text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 bg-foreground/80 px-3 py-1 font-body text-xs font-medium uppercase tracking-wider text-primary-foreground">
                    {property.type}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {property.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="font-body text-xs">{property.neighborhood}, {property.location}</span>
                  </div>
                  <p className="mt-4 font-display text-xl font-semibold text-gold">
                    {formatPrice(property.price)}
                  </p>

                  <div className="mt-4 flex gap-4 border-t border-border pt-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Bed className="h-4 w-4" />
                      <span className="font-body text-xs">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Bath className="h-4 w-4" />
                      <span className="font-body text-xs">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Maximize className="h-4 w-4" />
                      <span className="font-body text-xs">{property.area}m²</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => setSelectedProperty(property)}
                      className="w-full border border-gold bg-transparent py-3 font-body text-xs font-medium uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-body text-muted-foreground">
                Nenhum imóvel encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton variant="float" message="Olá, estou navegando nos imóveis do site e gostaria de mais informações." />
      <PropertyDetailModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </div>
  );
};

export default Listings;
