// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { SECTION_PATH, BUY_NOW_URL, ADMIN_PATH, DOCS_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const feature2 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  features: [
    {
      icon: { name: 'tabler-users', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-star', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-chart-histogram', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Growth',
      content: 'Our culture prioritizes continuous learning, encouraging personal and professional development. '
    }
  ]
};

export const feature5 = {
  heading: 'Beyond the 9-to-5',
  caption: 'Our benefits go beyond the standard, ensuring your life outside of work is just as fulfilling.',
  image1: '/assets/images/graphics/ai/graphics3-light.svg',
  image2: '/assets/images/graphics/ai/graphics2-light.svg',
  features: [
    {
      icon: 'tabler-coin',
      title: 'Compensation',
      content: 'Enjoy a competitive salary that recognizes your skills and contributions.'
    },
    {
      icon: 'tabler-health-recognition',
      title: 'Healthcare',
      content: "Access to a comprehensive healthcare plan, ensuring you and your family's well-being."
    }
  ],
  features2: [
    {
      icon: 'tabler-briefcase',
      title: 'Automated Scaling',
      content: 'Embrace a flexible work environment, allowing you to balance work.'
    },
    {
      icon: 'tabler-users',
      title: 'Real-Time',
      content: 'Support your family commitments with family-friendly policies and benefits.'
    }
  ],
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  },
  content: 'Explore diverse career paths within the company through our internal mobility programs.',
  actionBtn: { children: 'Explore all Features', href: '#' }
};

export const feature20 = {
  heading: 'A Solução Completa para Sua Mobilidade',
  caption: 'Pronto para dirigir com a melhor locadora de automóveis da região?',
  actionBtn: { children: 'Ver Planos', href: '#pricing' },
  secondaryBtn: { children: 'Fale Conosco', href: '#contato' },
  features: [
    {
      icon: 'tabler-car',
      title: 'Frota Moderna e Variada',
      content: 'De modelos econômicos para o dia a dia a SUVs espaçosos para viagens em família.'
    },
    {
      icon: 'tabler-device-mobile',
      title: 'Reserva 100% Online',
      content: 'Alugue seu carro diretamente pelo celular, com aprovação rápida de cadastro e sem filas.'
    },
    {
      icon: 'tabler-calendar-time',
      title: 'Flexibilidade Total',
      content: 'Locação diária, semanal ou assinatura mensal com tarifas competitivas adaptadas a você.'
    },
    {
      icon: 'tabler-shield-check',
      title: 'Seguro e Assistência 24h',
      content: 'Seguro completo incluso e equipe de suporte de plantão para garantir sua tranquilidade.'
    },
    {
      icon: 'tabler-award',
      title: 'Qualidade Garantida',
      content: 'Todos os veículos são revisados, higienizados e entregues com tanque cheio.'
    },
    {
      icon: 'tabler-currency-real',
      title: 'Preço Justo e Transparente',
      content: 'Sem taxas ocultas ou surpresas desagradáveis no fechamento do seu contrato.'
    }
  ]
};

export const feature21 = {
  heading: 'Seu Carro Novo com Assinatura Unity Move',
  caption: 'Tenha um veículo zero km na garagem sem se preocupar com IPVA, licenciamento, seguro, manutenção ou desvalorização. Nós cuidamos de toda a burocracia.',
  image: '/assets/images/fundoarte1.jpg',
  primaryBtn: { children: 'Ver Assinaturas', href: '#pricing' },
  secondaryBtn: {
    children: 'Simular Cadastro',
    href: '#contato'
  },
  features: [
    {
      animationDelay: 0.1,
      icon: 'tabler-file-text',
      title: 'IPVA e Emplacamento Inclusos'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-shield-check',
      title: 'Seguro Total do Veículo'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-tool',
      title: 'Manutenções Preventivas Pagas'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-headset',
      title: 'Assistência 24 Horas de Plantão'
    },
    {
      animationDelay: 0.1,
      icon: 'tabler-repeat',
      title: 'Troca de Carro a Cada Contrato'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-user-check',
      title: 'Condutor Adicional Sem Custo'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-trending-down',
      title: 'Sem Perda por Desvalorização'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-clock',
      title: 'Aprovação Rápida de Cadastro'
    }
  ]
};

export const feature = {
  heading: `What’s Inside of ${branding.brandName} Plus Version`,
  features: [
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA JavaScript',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js JavaScript',
      content: 'Tailor typography for optimal readability across all screen sizes.'
    },
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA TypeScript',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js TypeScript',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      image: '/assets/images/shared/figma.svg',
      title: 'Figma ',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      title: 'Check Out Our Pricing Plan',
      content: 'Choose the plan that aligns with your SaaS product requirements.',
      actionBtn: { children: 'Pricing Plan', href: BUY_NOW_URL, ...linkProps }
    }
  ]
};

export const feature7 = {
  heading: 'Real-Time Performance Insights',
  caption: 'Gain a competitive edge with real-time performance monitoring.',
  testimonials: [
    {
      image: '/assets/images/graphics/ai/graphics6-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Core Value',
          content: 'Unlock growth potential through continuous monitoring, enabling proactive strategies in a competitive landscape.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics8-light.svg',
      features: [
        {
          icon: 'tabler-route',
          title: 'Multi-Cloud Orchestration',
          content: 'Enhances flexibility and resilience in a multi-cloud environment.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics3-light.svg',
      features: [
        {
          icon: 'tabler-history',
          title: 'Story',
          content: 'Real-time performance insights empower teams to respond swiftly, optimizing operations and driving growth.'
        }
      ]
    }
  ],
  breadcrumbs: [{ title: 'Core Value' }, { title: 'Culture' }, { title: 'Story' }]
};

export const feature23 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  heading2: 'Growth',
  caption2: 'Our culture prioritizes continuous learning, encouraging personal and professional development. ',
  image: '/assets/images/graphics/default/feature23-light.png',
  primaryBtn: { children: 'Join  Our Team', href: '#' },

  features: [
    {
      icon: 'tabler-users',
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: 'tabler-star',
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    }
  ]
};

export const feature18 = {
  heading: 'Como Funciona a Locação',
  caption: 'Aluguel descomplicado e 100% digital em poucos passos rápidos para você focar apenas no seu destino.',
  topics: [
    {
      icon: 'tabler-car',
      title: '1. Escolha o Veículo',
      title2: 'Encontre o Carro Perfeito',
      description: 'Selecione a categoria de automóvel ideal para a sua necessidade de viagem ou mobilidade.',
      image: '/assets/images/comofunciona.png',
      list: [
        { primary: 'Hatches compactos e econômicos' },
        { primary: 'Sedans espaçosos e confortáveis' },
        { primary: 'SUVs robustos e modernos' },
        { primary: 'Veículos executivos de luxo' }
      ],
      actionBtn: { children: 'Escolher Carro', href: '#pricing' },
      actionBtn2: { children: 'WhatsApp', href: '#contato' }
    },
    {
      icon: 'tabler-file-analytics',
      title: '2. Escolha o Plano',
      title2: 'Defina Suas Condições',
      description: 'Decida se prefere a flexibilidade das diárias individuais ou a economia do plano por assinatura mensal.',
      image: '/assets/images/fundoarte1.jpg',
      list: [
        { primary: 'Locação diária eventual' },
        { primary: 'Assinatura mensal recorrente' },
        { primary: 'Seguro básico ou completo' },
        { primary: 'Opções de quilometragem livre' }
      ],
      actionBtn: { children: 'Ver Tarifas', href: '#pricing' },
      actionBtn2: { children: ' WhatsApp', href: '#contato' }
    },
    {
      icon: 'tabler-user-check',
      title: '3. Cadastro Rápido',
      title2: 'Aprovação 100% Digital',
      description: 'Envie sua CNH e cartão de crédito pelo celular. Nosso sistema aprova seu cadastro em minutos.',
      image: '/assets/images/unitymovearte.png',
      list: [
        { primary: 'Cadastro sem papelada' },
        { primary: 'Validação segura de dados' },
        { primary: 'Assinatura digital de contrato' },
        { primary: 'Sem taxas de ativação' }
      ],
      actionBtn: { children: 'Iniciar Cadastro', href: '#contato' },
      actionBtn2: { children: 'Dúvidas', href: '#contato' }
    },
    {
      icon: 'tabler-key',
      title: '4. Pegue as Chaves',
      title2: 'Retire e Dirija',
      description: 'Retire o veículo limpo e abastecido na nossa base e aproveite a sua viagem com total tranquilidade.',
      image: '/assets/images/comofunciona.png',
      list: [
        { primary: 'Check-list digital de vistoria' },
        { primary: 'Veículo higienizado e polido' },
        { primary: 'Tanque de combustível cheio' },
        { primary: 'Assistência 24h na estrada inclusa' }
      ],
      actionBtn: { children: 'Reservar Agora', href: '#pricing' },
      actionBtn2: { children: 'Suporte', href: '#contato' }
    }
  ]
};
