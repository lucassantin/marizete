export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  neighborhood: string;
  image: string;
  images: string[];
  type: "Apartamento" | "Cobertura" | "Casa em Condomínio" | "Studio";
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Apartamento de Luxo no Jardins",
    price: 3200000,
    location: "São Paulo",
    neighborhood: "Jardins",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    type: "Apartamento",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    description: "Apartamento sofisticado com acabamento premium e vista panorâmica. Localizado em uma das regiões mais nobres de São Paulo, este imóvel oferece quatro suítes amplas, sala de estar com pé-direito duplo, cozinha gourmet integrada e varanda com vista para o skyline da cidade. O condomínio conta com piscina aquecida, academia, salão de festas e segurança 24 horas.",
  },
  {
    id: "2",
    title: "Cobertura Duplex Vila Nova",
    price: 8500000,
    location: "São Paulo",
    neighborhood: "Vila Nova Conceição",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    ],
    type: "Cobertura",
    bedrooms: 5,
    bathrooms: 6,
    area: 520,
    description: "Cobertura duplex com terraço gourmet e piscina privativa. Um verdadeiro refúgio no topo de um dos endereços mais prestigiados de São Paulo. O andar inferior conta com living amplo, home theater, cozinha com ilha e cinco suítes. O andar superior oferece terraço com churrasqueira, piscina com borda infinita e espaço lounge com vista 360° da cidade.",
  },
  {
    id: "3",
    title: "Casa em Condomínio Alphaville",
    price: 4800000,
    location: "Barueri",
    neighborhood: "Alphaville",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    ],
    type: "Casa em Condomínio",
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    description: "Casa moderna em condomínio fechado com segurança 24h. Projeto arquitetônico contemporâneo com amplas áreas de vidro que integram os ambientes internos ao jardim tropical. Possui piscina aquecida, espaço gourmet completo, home office, sala de jogos e garagem para quatro veículos. Condomínio com infraestrutura completa de lazer e esportes.",
  },
  {
    id: "4",
    title: "Studio Design Itaim Bibi",
    price: 950000,
    location: "São Paulo",
    neighborhood: "Itaim Bibi",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    description: "Studio contemporâneo com acabamento de alto padrão. Ideal para profissionais que buscam praticidade e sofisticação. Ambiente integrado com cozinha americana, closet planejado e banheiro com acabamento em mármore. O edifício oferece coworking, rooftop com vista panorâmica, academia e lavanderia compartilhada.",
  },
  {
    id: "5",
    title: "Apartamento Moema Premium",
    price: 2100000,
    location: "São Paulo",
    neighborhood: "Moema",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    type: "Apartamento",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    description: "Apartamento amplo com varanda gourmet e lazer completo. Três suítes espaçosas com armários planejados, sala de estar e jantar integradas com varanda gourmet. Cozinha com ilha e despensa. Condomínio com piscina, quadra de tênis, playground e salão de festas. Próximo ao Parque do Ibirapuera e Shopping Ibirapuera.",
  },
  {
    id: "6",
    title: "Cobertura Perdizes Exclusiva",
    price: 6200000,
    location: "São Paulo",
    neighborhood: "Perdizes",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
    type: "Cobertura",
    bedrooms: 4,
    bathrooms: 5,
    area: 400,
    description: "Cobertura exclusiva com jardim privativo e vista para o Pico do Jaraguá. Quatro suítes master com closet, living com lareira, adega climatizada e home theater. Terraço com jardim paisagístico, piscina com deck de madeira e espaço gourmet com forno de pizza. Duas vagas de garagem cobertas.",
  },
  {
    id: "7",
    title: "Casa Contemporânea Granja Viana",
    price: 3500000,
    location: "Cotia",
    neighborhood: "Granja Viana",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    ],
    type: "Casa em Condomínio",
    bedrooms: 4,
    bathrooms: 3,
    area: 380,
    description: "Casa com arquitetura contemporânea em meio à natureza. Integração total com o ambiente externo através de grandes painéis de vidro. Quatro suítes, sala com pé-direito duplo, cozinha gourmet e escritório. Área externa com piscina natural, deck, jardim e trilha privativa em meio à mata preservada.",
  },
  {
    id: "8",
    title: "Studio Compact Pinheiros",
    price: 720000,
    location: "São Paulo",
    neighborhood: "Pinheiros",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    ],
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    area: 42,
    description: "Studio inteligente com infraestrutura completa de lazer. Projeto otimizado com móveis planejados, automação residencial e acabamento premium. Localizado em uma das ruas mais charmosas de Pinheiros, próximo a restaurantes, bares e transporte público. Edifício com piscina, academia, bicicletário e pet place.",
  },
];

export const locations = [...new Set(properties.map((p) => p.location))];
export const propertyTypes = [...new Set(properties.map((p) => p.type))];

export const formatPrice = (price: number) =>
  price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
