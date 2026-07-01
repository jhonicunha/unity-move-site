export const pricing = {
  heading: 'Nossos Veículos Disponíveis',
  caption: 'Escolha o modelo ideal para o seu dia a dia ou viagem. Aluguel simples, rápido e com quilometragem livre.',
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
      title: 'Hatch Econômico (ex: Onix)',
      price: 99,
      active: true,
      featureTitle: 'O que está incluso:',
      content: 'Carro compacto e muito econômico, perfeito para deslocamentos urbanos rápidos e fácil de estacionar.',
      contentLink: { children: 'Termos de Locação', href: '#contato' },
      exploreLink: { children: 'Alugar Hatch', href: '#contato' },
      featuresID: [1, 2, 3, 4, 7, 8]
    },
    {
      title: 'Sedan Conforto (ex: Cronos)',
      price: 139,
      active: false,
      featureTitle: 'O que está incluso:',
      content: 'Excelente espaço interno e porta-malas amplo. Ideal para viagens em família ou trabalho com total conforto.',
      contentLink: { children: 'Termos de Locação', href: '#contato' },
      exploreLink: { children: 'Alugar Sedan', href: '#contato' },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  ]
};
