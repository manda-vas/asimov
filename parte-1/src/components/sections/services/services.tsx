import React from 'react';
import { Badge } from '@/components/ui/badge';

import { ServiceCard } from './ServiceCard';

const servicesData = [
  {
    title: ["Search engine", "optimization"],
    image: "/images/search-engine-optimization.svg",
    imageAlt: "Uma lupa focando em uma rede de conexões digitais, simbolizando a análise e otimização de busca web.",
    href: "/services/seo",
    variant: "light" as const
  },
  {
    title: ["Pay-per-click", "advertising"],
    image: "/images/pay-per-click-advertising.svg",
    imageAlt: "Um cursor de mouse clicando em um elemento de interface dentro de um navegador, representando anúncios pagos e taxas de clique.",
    href: "/services/ppc",
    variant: "accent" as const
  },
  {
    title: ["Social Media", "Marketing"],
    image: "/images/social-media-marketing.svg",
    imageAlt: "Interface de rede social exibindo ícones de curtidas, engajamento e avaliações positivas de cinco estrelas.",
    href: "/services/social-media",
    variant: "dark" as const
  },
  {
    title: ["Email", "Marketing"],
    image: "/images/email-marketing.svg",
    imageAlt: "Ilustração de envelopes de e-mail em movimento, simbolizando o envio de campanhas e comunicação direta.",
    href: "/services/email",
    variant: "light" as const
  },
  {
    title: ["Content", "Creation"],
    image: "/images/content-creation.svg",
    imageAlt: "Diversas janelas de navegador sobrepostas representando a criação e publicação de diferentes formatos de conteúdo digital.",
    href: "/services/content-creation",
    variant: "accent" as const
  },
  {
    title: ["Analytics and", "Tracking"],
    image: "/images/analytics-and-tracking.svg",
    imageAlt: "Painéis de dados exibindo gráficos de pizza, barras e diagramas de tendência para monitoramento de métricas.",
    href: "/services/analytics",
    variant: "dark" as const
  }
];

export const Services = () => {
  return (
    <section className="px-30 lg:px-100 pt-70 flex flex-col gap-40 lg:gap-70">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row items-center gap-40 text-center lg:text-left">
        <h2 className="flex-shrink-0">
          <Badge className="text-h2 lg:text-h2 px-7">Services</Badge>
        </h2>
        <p className="max-w-580 text-p-mob lg:text-p font-normal">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-35 lg:gap-40">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            image={service.image}
            imageAlt={service.imageAlt}
            href={service.href}
            variant={service.variant}
          />
        ))}
      </div>
    </section>
  );
};
