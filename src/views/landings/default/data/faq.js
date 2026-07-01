export const faq = {
  heading: 'Perguntas Frequentes (FAQ)',
  caption: 'Tire suas principais dúvidas sobre o aluguel de carros e planos de assinatura da Unity Move.',
  defaultExpanded: 'Geral',
  faqList: [
    {
      question: 'Quais são os requisitos básicos para alugar um carro?',
      answer: 'Para alugar um carro na Unity Move, você precisa de idade mínima de 21 anos, CNH definitiva e válida há pelo menos 2 anos, e apresentar um cartão de crédito físico de sua titularidade com limite disponível para a pré-autorização de garantia (caução).',
      category: 'Geral'
    },
    {
      question: 'Como funciona a quilometragem nos aluguéis?',
      answer: 'Todas as nossas diárias e planos de locação contam com quilometragem livre para que você possa viajar e rodar com total tranquilidade, sem taxas adicionais por km rodado.',
      category: 'Geral'
    },
    {
      question: 'Como é feita a devolução do combustível?',
      answer: 'Entregamos todos os nossos veículos com o tanque de combustível totalmente cheio. Solicitamos que a devolução também seja feita com o tanque cheio. Caso contrário, será cobrada a taxa de reabastecimento conforme a tabela vigente.',
      category: 'Geral'
    },
    {
      question: 'O que está incluso no seguro do veículo?',
      answer: 'Nosso seguro padrão cobre danos por colisão, capotamento, incêndio, roubo e furto, além de responsabilidade civil para danos a terceiros. Oferecemos opções de upgrade de seguro com franquia reduzida ou zero no momento da reserva.',
      category: 'Seguros e Requisitos'
    },
    {
      question: 'Posso adicionar condutores adicionais no contrato?',
      answer: 'Sim, você pode incluir outros motoristas no seu contrato de aluguel. Eles devem apresentar a CNH válida, cumprir os mesmos requisitos de idade e estarem cadastrados na apólice de seguro do veículo para estarem cobertos.',
      category: 'Seguros e Requisitos'
    },
    {
      question: 'O que é a pré-autorização (caução)?',
      answer: 'A pré-autorização é um bloqueio temporário de limite no cartão de crédito do locatário feito no início da locação para garantir eventuais custos adicionais. O valor é desbloqueado pela sua operadora de cartão logo após a devolução do veículo.',
      category: 'Planos e Pagamento'
    },
    {
      question: 'Como funciona o Carro por Assinatura mensal?',
      answer: 'No plano de assinatura, você escolhe um carro zero km e paga uma mensalidade fixa que já inclui os custos de IPVA, emplacamento, seguro total, manutenções periódicas preventivas e assistência 24h. É a melhor forma de ter um carro novo sem preocupações de posse.',
      category: 'Planos e Pagamento'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Para a pré-autorização de garantia (caução), aceitamos exclusivamente cartões de crédito físicos de bandeiras reconhecidas no nome do locatário. Para o pagamento das diárias ou mensalidades, aceitamos cartões de crédito, Pix e boleto bancário.',
      category: 'Planos e Pagamento'
    }
  ],
  getInTouch: {
    link: { children: 'Fale Conosco no WhatsApp', href: 'https://wa.me/5511999999999', target: '_blank', rel: 'noopener noreferrer' }
  },
  categories: ['Geral', 'Seguros e Requisitos', 'Planos e Pagamento'],
  activeCategory: 'Geral'
};
