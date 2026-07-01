export const pricing = {
  heading: 'Nossos Veículos Disponíveis',
  caption: 'Aluguel simplificado por semana ou por mês com quilometragem livre, seguro incluso e suporte total.',
  features: [
    { id: 1, label: 'Quilometragem Livre' },
    { id: 2, label: 'Seguro Proteção Básica (Colisão e Roubo)' },
    { id: 3, label: 'Ar Condicionado & Direção Hidráulica' },
    { id: 4, label: 'Assistência 24h na Estrada' },
    { id: 5, label: 'Vidros e Travas Elétricas' },
    { id: 6, label: 'Som Automotivo com Bluetooth' },
    { id: 7, label: 'Limpeza e Higienização Garantidas' },
    { id: 8, label: 'Acomoda até 5 pessoas' }
  ],
  plans: [
    {
      title: 'Hatch Compacto',
      price: 1990,
      period: 'mês',
      active: true,
      featureTitle: 'O que está incluso:',
      content: 'Disponível por R$ 1.990/mês ou R$ 590/semana. Carro econômico, prático e ideal para o dia a dia.',
      contentLink: { children: 'Termos de Locação', href: '#contato' },
      exploreLink: { children: 'Alugar Hatch', href: '#contato' },
      featuresID: [1, 2, 3, 4, 7, 8]
    },
    {
      title: 'Sedan Conforto',
      price: 2490,
      period: 'mês',
      active: false,
      featureTitle: 'O que está incluso:',
      content: 'Disponível por R$ 2.490/mês ou R$ 790/semana. Amplo porta-malas e excelente conforto para viagens.',
      contentLink: { children: 'Termos de Locação', href: '#contato' },
      exploreLink: { children: 'Alugar Sedan', href: '#contato' },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  ]
};
