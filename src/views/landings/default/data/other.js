// @assets
const imagePrefix = '/assets/images/presentation';

export const other = {
  heading: 'Nossa Frota por Categoria',
  description: 'Encontre o modelo perfeito de carro para a sua necessidade. Todos os veículos contam com seguro completo e km livre.',
  primaryBtn: { children: 'Ver Todos os Planos', href: '#pricing' },
  sections: [
    {
      animationDelay: 0.2,
      title: 'Econômicos',
      subTitle: 'Compactos ideais para a cidade, fáceis de estacionar e super econômicos.',
      image: `${imagePrefix}/hero-light.svg`,
      link: '#pricing'
    },
    {
      animationDelay: 0.3,
      title: 'Sedans',
      subTitle: 'Maior espaço interno e excelente porta-malas para viagens confortáveis.',
      image: `${imagePrefix}/cta-light.svg`,
      link: '#pricing'
    },
    {
      animationDelay: 0.4,
      title: 'SUVs',
      subTitle: 'Robustez, altura de direção e conforto premium para toda a família.',
      image: `${imagePrefix}/feature-light.svg`,
      link: '#pricing'
    },
    {
      animationDelay: 0.2,
      title: 'Elétricos & Híbridos',
      subTitle: 'Tecnologia avançada, economia e sustentabilidade no seu dia a dia.',
      image: `${imagePrefix}/metrics-light.svg`,
      link: '#pricing'
    },
    {
      animationDelay: 0.3,
      title: 'Executivos',
      subTitle: 'Modelos de luxo com alto padrão de desempenho e sofisticação.',
      image: `${imagePrefix}/process-light.svg`,
      link: '#pricing'
    },
    {
      animationDelay: 0.4,
      title: 'Utilitários',
      subTitle: 'Veículos com caçamba ou furgões perfeitos para transporte de mercadorias.',
      image: `${imagePrefix}/integration-light.svg`,
      link: '#pricing'
    }
  ]
};

export const other3 = {
  heading: 'Junte-se a uma Equipe Vencedora',
  caption: 'Faça parte de uma cultura vencedora que promove colaboração, criatividade e sucesso.',
  other: [
    {
      title: 'Consultor de Vendas',
      description: 'Procuramos consultores comerciais para atendimento e fechamento de contratos de locação.',
      chips: [
        { icon: 'tabler-map-pin', name: 'São Paulo' },
        { icon: 'tabler-history', name: 'Integral' }
      ],
      btn: { children: 'Ver Vaga', href: '#' }
    },
    {
      title: 'Auxiliar de Operações / Vistoria',
      description: 'Procuramos profissionais para checklist de entrega e devolução de frotas.',
      chips: [
        { icon: 'tabler-map-pin', name: 'Presencial' },
        { icon: 'tabler-history', name: 'Integral' }
      ],
      btn: { children: 'Ver Vaga', href: '#' }
    }
  ]
};
