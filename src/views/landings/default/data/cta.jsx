// @mui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// @project
import { NextLink } from '@/components/routes';

export const cta4 = {
  headLine: 'Por que Escolher a Unity Move?',
  primaryBtn: {
    children: 'Falar com Atendimento',
    href: '#contato',
    target: '_self',
    rel: 'noopener noreferrer'
  },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: 'Mais de 15.000 clientes satisfeitos'
  },
  list: [
    { primary: 'Frota 100% nova e revisada' },
    { primary: 'Seguro completo incluso em todos os planos' },
    { primary: 'Aprovação de cadastro rápida 100% digital' },
    { primary: 'Suporte e assistência 24h na estrada' },
    { primary: 'Opções de planos semanais com quilometragem livre' },
    { primary: 'Planos mensais flexíveis e sem burocracia' }
  ],
  clientContent: 'Quero Alugar'
};

function DescriptionLine() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Prefere nos ligar diretamente?{' '}
      <Link component={NextLink} variant="caption2" color="primary" href="#contato" underline="hover">
        Central de Vendas Unity Move
      </Link>
    </Typography>
  );
}

export const cta5 = {
  label: 'Atendimento Rápido',
  heading: 'Dúvidas ou Planos Personalizados?',
  caption: 'Fale com a nossa equipe de especialistas de plantão pelo WhatsApp e garanta a melhor oferta para a sua locação.',
  primaryBtn: {
    children: 'Chamar no WhatsApp',
    href: 'https://wa.me/5511999999999',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  description: <DescriptionLine />,
  saleData: { count: 100, defaultUnit: '%', caption: 'Foco na sua satisfação de dirigir' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: 'Suporte de plantão todos os dias'
  }
};

export const cta10 = {
  heading: 'Interessado em fazer parte da nossa equipe?',
  caption: 'Estamos sempre em busca de talentos para as nossas bases de atendimento e equipe de vistorias. Envie seu currículo!',
  primaryBtn: { children: 'Enviar Currículo', href: '#' },
  secondaryBtn: { children: 'Fale Conosco', href: '#' },
  image: '/assets/images/graphics/ai/graphics15-light.svg',
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: 'Junte-se à revolução da mobilidade'
  }
};
